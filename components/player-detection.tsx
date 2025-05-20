"use client"

import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { CirclePicker } from 'react-color';
import { loadPlayerDetectionModel, filterPlayerDetections, createPlayerFromDetection } from '@/lib/model-utils';

interface PlayerDetectionProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  onPlayerSelected?: (playerId: string) => void;
}

// Define a type for detected players
interface DetectedPlayer {
  id: string;
  box: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  score: number;
  selected?: boolean;
  color?: string;
  positions?: Array<{ x: number, y: number, timestamp: number }>;
}

const playerColors = [
  '#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC',
  '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'
];

export function PlayerDetection({ videoRef, isPlaying, onPlayerSelected }: PlayerDetectionProps) {
  const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [detectedPlayers, setDetectedPlayers] = useState<DetectedPlayer[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [trackingEnabled, setTrackingEnabled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const detectionIntervalRef = useRef<number | null>(null);

  // Load the COCO-SSD model when the component mounts
  useEffect(() => {
    async function initModel() {
      try {
        const detectionModel = await loadPlayerDetectionModel();
        setModel(detectionModel);
        setIsModelLoading(false);
      } catch (error) {
        console.error('Failed to initialize player detection:', error);
        setIsModelLoading(false);
      }
    }

    initModel();

    // Cleanup function
    return () => {
      if (detectionIntervalRef.current) {
        window.clearInterval(detectionIntervalRef.current);
        detectionIntervalRef.current = null;
      }
    };
  }, []);

  // Function to perform object detection
  const detectPlayers = useCallback(async () => {
    if (!model || !videoRef.current || !canvasRef.current || videoRef.current.paused) {
      return;
    }

    try {
      // Perform detection
      const predictions = await model.detect(videoRef.current);
      
      // Filter to only show person detections
      const personPredictions = filterPlayerDetections(predictions);
      
      // Key fix: Create a map of existing players to preserve IDs
      const existingPlayerMap = new Map(
        detectedPlayers.map(player => [player.id, player])
      );
      
      // Convert predictions to our DetectedPlayer format with unique IDs
      const newDetectedPlayers = personPredictions.map(pred => {
        // Find existing player that might match this detection
        const matchingPlayer = detectedPlayers.find(p => 
          isOverlapping(p.box, { 
            left: pred.bbox[0], 
            top: pred.bbox[1], 
            width: pred.bbox[2], 
            height: pred.bbox[3] 
          })
        );

        if (matchingPlayer) {
          // We found a match, use its existing ID
          const centerX = pred.bbox[0] + pred.bbox[2] / 2;
          const centerY = pred.bbox[1] + pred.bbox[3] / 2;
          
          const newPositions = matchingPlayer.positions 
            ? [...matchingPlayer.positions, { 
                x: centerX, 
                y: centerY, 
                timestamp: Date.now() 
              }] 
            : [{ x: centerX, y: centerY, timestamp: Date.now() }];
            
          // Keep only the last 30 positions to avoid too much drawing
          const limitedPositions = trackingEnabled 
            ? newPositions.slice(-30) 
            : [newPositions[newPositions.length - 1]];
          
          // Remove this player from the map since we're using it
          existingPlayerMap.delete(matchingPlayer.id);
          
          return {
            ...matchingPlayer,
            box: {
              left: pred.bbox[0],
              top: pred.bbox[1],
              width: pred.bbox[2],
              height: pred.bbox[3]
            },
            score: pred.score,
            positions: limitedPositions
          };
        } else {
          // Create a new player entry with a truly unique ID and random color
          return createPlayerFromDetection(
            pred,
            uuidv4(), // Generate a new unique ID
            playerColors[Math.floor(Math.random() * playerColors.length)]
          );
        }
      });

      // Preserve selected player state when updating detected players
      const updatedPlayers = newDetectedPlayers.map(player => ({
        ...player,
        selected: player.id === selectedPlayer
      }));

      setDetectedPlayers(updatedPlayers);
      drawDetections(updatedPlayers);
    } catch (error) {
      console.error('Error during player detection:', error);
    }
  }, [model, videoRef, canvasRef, detectedPlayers, trackingEnabled, selectedPlayer]);

  // Function to check if two boxes overlap (used for tracking the same player)
  const isOverlapping = (box1: any, box2: any) => {
    const threshold = 0.5;
    
    const centerX1 = box1.left + box1.width / 2;
    const centerY1 = box1.top + box1.height / 2;
    
    const centerX2 = box2.left + box2.width / 2;
    const centerY2 = box2.top + box2.height / 2;
    
    // Calculate distance between centers
    const distance = Math.sqrt(
      Math.pow(centerX1 - centerX2, 2) + 
      Math.pow(centerY1 - centerY2, 2)
    );
    
    // If the distance is small enough, consider it the same player
    return distance < (box1.width + box2.width) * threshold / 2;
  };

  // Draw detection boxes and tracking information on the canvas
  const drawDetections = useCallback((players: DetectedPlayer[]) => {
    const canvas = canvasRef.current;
    if (!canvas || !videoRef.current) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Make sure canvas size matches the video
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    
    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw each player
    players.forEach(player => {
      const { box, selected, color, positions } = player;
      
      // Box style based on selection
      ctx.strokeStyle = selected ? '#00FF00' : (color || '#FF0000');
      ctx.lineWidth = selected ? 4 : 2;
      
      // Draw bounding box
      ctx.strokeRect(box.left, box.top, box.width, box.height);
      
      // Draw label
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(box.left, box.top - 20, 80, 20);
      ctx.fillStyle = selected ? '#FFFFFF' : (color || '#FFFFFF');
      ctx.font = '16px Arial';
      ctx.fillText(selected ? '⭐ Player' : 'Player', box.left + 5, box.top - 5);
      
      // Draw movement path for selected player
      if (selected && trackingEnabled && positions && positions.length > 1) {
        ctx.strokeStyle = color || '#00FF00';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(positions[0].x, positions[0].y);
        
        // Draw lines connecting player positions
        for (let i = 1; i < positions.length; i++) {
          ctx.lineTo(positions[i].x, positions[i].y);
        }
        
        ctx.stroke();
      }
    });
  }, [videoRef, trackingEnabled]);

  // Set up detection interval when playing status changes
  useEffect(() => {
    if (isPlaying && model && !detectionIntervalRef.current) {
      // Run detection every 100ms while video is playing
      detectionIntervalRef.current = window.setInterval(detectPlayers, 100);
    } else if (!isPlaying && detectionIntervalRef.current) {
      // Stop detection when video is paused
      window.clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
    
    return () => {
      if (detectionIntervalRef.current) {
        window.clearInterval(detectionIntervalRef.current);
        detectionIntervalRef.current = null;
      }
    };
  }, [isPlaying, model, detectPlayers]);

  // Handle player selection
  const selectPlayer = useCallback((playerId: string) => {
    const newSelected = selectedPlayer === playerId ? null : playerId;
    setSelectedPlayer(newSelected);
    
    setDetectedPlayers(players => 
      players.map(p => ({
        ...p,
        selected: p.id === playerId && (selectedPlayer !== playerId)
      }))
    );
    
    // Notify parent component about selection
    if (onPlayerSelected && newSelected) {
      onPlayerSelected(newSelected);
    }
  }, [selectedPlayer, onPlayerSelected]);

  // Change the color of the selected player
  const changePlayerColor = useCallback((color: any) => {
    if (!selectedPlayer) return;
    
    setDetectedPlayers(players => 
      players.map(p => 
        p.id === selectedPlayer 
          ? { ...p, color: color.hex } 
          : p
      )
    );
  }, [selectedPlayer]);

  // Toggle tracking
  const toggleTracking = useCallback(() => {
    setTrackingEnabled(prev => !prev);
  }, []);

  // Reset all tracking
  const resetTracking = useCallback(() => {
    setDetectedPlayers([]);
    setSelectedPlayer(null);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Canvas overlay for drawing detection boxes */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      
      {/* Controls panel */}
      <div className="absolute top-4 left-4 bg-black/70 p-2 rounded-md">
        {isModelLoading ? (
          <div className="text-white text-sm flex items-center">
            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-green-500 mr-2"></div>
            Loading YOLO model...
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="text-white text-sm font-bold">
              Player Detection
            </div>
            
            <div className="flex gap-2">
              <Button 
                size="sm"
                onClick={toggleTracking}
                className={`text-xs px-2 ${trackingEnabled ? 'bg-green-600' : 'bg-gray-600'}`}
              >
                {trackingEnabled ? 'Tracking ON' : 'Tracking OFF'}
              </Button>
              
              <Button 
                size="sm"
                onClick={resetTracking}
                className="bg-red-600 text-xs px-2"
              >
                Reset
              </Button>
            </div>
            
            {selectedPlayer && (
              <div className="mt-2">
                <div className="text-white text-xs mb-1">Player Color:</div>
                <CirclePicker
                  colors={playerColors}
                  color={detectedPlayers.find(p => p.id === selectedPlayer)?.color}
                  onChange={changePlayerColor}
                  circleSize={15}
                  circleSpacing={5}
                />
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Player selection panel */}
      {detectedPlayers.length > 0 && (
        <div className="absolute top-4 right-4 bg-black/70 p-2 rounded-md max-w-[200px]">
          <div className="text-white text-sm font-bold mb-2">
            Select Player to Track
          </div>
          <div className="flex flex-col gap-1 max-h-[200px] overflow-y-auto">
            {detectedPlayers.map(player => (
              <Button
                key={player.id}
                size="sm"
                onClick={() => selectPlayer(player.id)}
                className={`text-xs px-2 flex items-center justify-between ${
                  player.selected ? 'bg-green-600' : 'bg-gray-600'
                }`}
                style={{ borderLeft: `4px solid ${player.color}` }}
              >
                <span>Player {player.id.substring(0, 4)}</span>
                {player.selected && <span>⭐</span>}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 
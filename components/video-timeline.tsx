"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoTimelineProps {
  duration: number;
  currentTime: number;
  onSeek: (time: number) => void;
}

export function VideoTimeline({ duration, currentTime, onSeek }: VideoTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [hoverTime, setHoverTime] = useState<number | null>(null);

  const calculatePercentage = (time: number): number => {
    return duration > 0 ? (time / duration) * 100 : 0;
  };

  const calculateTimeFromPosition = (position: number, width: number): number => {
    if (duration <= 0 || width <= 0) return 0;
    const percentage = position / width;
    return percentage * duration;
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (timelineRef.current && duration > 0) {
      const rect = timelineRef.current.getBoundingClientRect();
      const clickPos = e.clientX - rect.left;
      const percentage = clickPos / rect.width;
      const newTime = percentage * duration;
      onSeek(newTime);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (timelineRef.current && duration > 0) {
      const rect = timelineRef.current.getBoundingClientRect();
      const mousePos = e.clientX - rect.left;
      const time = calculateTimeFromPosition(mousePos, rect.width);
      setHoverTime(time);
    }
  };

  const handleMouseLeave = () => {
    setHoverTime(null);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragMove = (e: MouseEvent) => {
    if (isDragging && timelineRef.current && duration > 0) {
      const rect = timelineRef.current.getBoundingClientRect();
      const movePos = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, movePos / rect.width));
      const newTime = percentage * duration;
      onSeek(newTime);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isDragging]);

  const increaseZoom = () => {
    setZoom(prev => Math.min(prev + 0.5, 3));
  };

  const decreaseZoom = () => {
    setZoom(prev => Math.max(prev - 0.5, 1));
  };

  const generateTimeMarkers = () => {
    const markers = [];
    // Adjust marker spacing based on zoom level
    const step = Math.max(Math.floor(duration / (10 * zoom)), 1);
    
    for (let i = 0; i <= duration; i += step) {
      const percentage = calculatePercentage(i);
      if (percentage <= 100) {
        const isHourMark = i % 3600 === 0;
        const isMinuteMark = i % 60 === 0;
        
        markers.push(
          <div 
            key={`marker-${i}`}
            className={`absolute h-${isHourMark ? '4' : isMinuteMark ? '3' : '2'} w-0.5 ${
              isHourMark ? 'bg-green-500' : isMinuteMark ? 'bg-gray-400' : 'bg-gray-500'
            }`}
            style={{ left: `${percentage}%`, bottom: 0 }}
          >
            {/* Add time labels for major markers */}
            {isMinuteMark && (
              <div className="absolute bottom-5 -translate-x-1/2 text-[10px] text-gray-400">
                {formatDuration(i)}
              </div>
            )}
          </div>
        );
      }
    }
    
    return markers;
  };

  const formatDuration = (time: number): string => {
    if (time >= 3600) {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = Math.floor(time % 60);
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  };

  return (
    <div className="h-32 border-t border-[#1e293b] bg-[#111827] p-2">
      <div className="flex justify-between items-center mb-2">
        <div className="text-xs text-gray-400">
          <span className="font-bold">Start:</span> 0:00
        </div>

        <div className="flex items-center gap-2">
          <div className="text-sm text-white bg-[#1e293b] px-2 py-1 rounded border border-[#334155]">
            {formatDuration(currentTime)}
          </div>
          <div className="flex gap-2">
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-6 w-6 text-gray-400 hover:text-white"
              onClick={decreaseZoom}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-6 w-6 text-gray-400 hover:text-white"
              onClick={increaseZoom}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-xs text-gray-400">
          <span className="font-bold">End:</span> {duration > 0 ? formatDuration(duration) : "0:00"}
        </div>
      </div>

      <div className="relative h-16 bg-[#0f172a] rounded border border-[#1e293b]">
        {/* Interactive timeline */}
        <div 
          ref={timelineRef}
          className="absolute inset-0 cursor-pointer"
          onClick={handleTimelineClick}
          onMouseDown={handleDragStart}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Grid backdrop */}
          <div className="absolute bottom-0 left-0 right-0 h-6 flex items-center">
            <div className="flex w-full relative">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={`grid-${i}`} className="flex-1 border-r border-[#334155] h-2 last:border-r-0"></div>
              ))}
            </div>
          </div>
          
          {/* Time markers */}
          <div className="absolute bottom-0 left-0 right-0">
            {duration > 0 && generateTimeMarkers()}
          </div>
          
          {/* Progress bar */}
          <div 
            className="absolute top-0 left-0 h-full bg-green-500/20"
            style={{ width: `${calculatePercentage(currentTime)}%` }}
          />
          
          {/* Current position line */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-green-500"
            style={{ left: `${calculatePercentage(currentTime)}%` }}
          />
          
          {/* Playhead */}
          <div 
            className="absolute top-0 h-6 w-3 bg-white rounded-full -translate-x-1.5 border-2 border-green-500"
            style={{ left: `${calculatePercentage(currentTime)}%` }}
          />
          
          {/* Hover time indicator */}
          {hoverTime !== null && (
            <>
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-blue-400 opacity-50"
                style={{ left: `${calculatePercentage(hoverTime)}%` }}
              />
              <div 
                className="absolute top-0 px-1 py-0.5 bg-blue-500 text-white text-xs rounded -translate-x-1/2"
                style={{ left: `${calculatePercentage(hoverTime)}%` }}
              >
                {formatDuration(hoverTime)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

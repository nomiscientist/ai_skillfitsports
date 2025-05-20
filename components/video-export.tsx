"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Film, Save, FileVideo } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface VideoExportProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  coverImage: File | null;
  audioFile: File | null;
  selectedPlayer: string | null;
}

export function VideoExport({ videoRef, coverImage, audioFile, selectedPlayer }: VideoExportProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportedUrl, setExportedUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  
  // Set up the canvas and preview
  useEffect(() => {
    if (canvasRef.current && previewCanvasRef.current) {
      const canvas = canvasRef.current;
      const previewCanvas = previewCanvasRef.current;
      
      const ctx = canvas.getContext('2d');
      const previewCtx = previewCanvas.getContext('2d');
      
      if (ctx && previewCtx && videoRef.current) {
        canvas.width = videoRef.current.videoWidth || 640;
        canvas.height = videoRef.current.videoHeight || 360;
        
        previewCanvas.width = 320;
        previewCanvas.height = 180;
      }
    }
  }, [videoRef]);

  // Handle export process
  const handleExport = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    setIsExporting(true);
    setExportProgress(0);
    
    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const chunks: BlobPart[] = [];
      
      // Set up media recorder
      const stream = canvas.captureStream(30);
      
      // Add audio track if available
      if (audioFile && audioRef.current) {
        audioRef.current.src = URL.createObjectURL(audioFile);
        await audioRef.current.play();
        audioRef.current.currentTime = 0;
        
        // Create audio context
        audioContextRef.current = new AudioContext();
        const audioSource = audioContextRef.current.createMediaElementSource(audioRef.current);
        const audioDestination = audioContextRef.current.createMediaStreamDestination();
        audioSource.connect(audioDestination);
        
        // Combine video and audio streams
        const tracks = [...stream.getVideoTracks(), ...audioDestination.stream.getAudioTracks()];
        const combinedStream = new MediaStream(tracks);
        
        // Set up media recorder with combined stream
        mediaRecorderRef.current = new MediaRecorder(combinedStream, {
          mimeType: 'video/webm; codecs=vp9',
          videoBitsPerSecond: 5000000,
        });
      } else {
        // Video only
        mediaRecorderRef.current = new MediaRecorder(stream, {
          mimeType: 'video/webm; codecs=vp9',
          videoBitsPerSecond: 5000000,
        });
      }
      
      // Handle data chunks
      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };
      
      // Handle recording stop
      mediaRecorderRef.current.onstop = () => {
        // Create final video blob
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setExportedUrl(url);
        setIsExporting(false);
        
        // Clean up audio resources
        if (audioRef.current) {
          audioRef.current.pause();
        }
        if (audioContextRef.current) {
          audioContextRef.current.close();
        }
      };
      
      // Start recording
      mediaRecorderRef.current.start(100);
      
      // Start rendering frames
      await renderVideo(ctx, canvas);
      
      // Stop recording when done
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    } catch (error) {
      console.error('Error during export:', error);
      setIsExporting(false);
    }
  };
  
  // Render the video frames to canvas
  const renderVideo = async (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    return new Promise<void>(async (resolve) => {
      // If cover image exists, show it for 3 seconds
      if (coverImage) {
        const coverUrl = URL.createObjectURL(coverImage);
        const coverImg = new Image();
        coverImg.src = coverUrl;
        
        await new Promise((imgResolve) => {
          coverImg.onload = () => {
            // Show cover image for 3 seconds (90 frames at 30fps)
            for (let i = 0; i < 90; i++) {
              setTimeout(() => {
                ctx.drawImage(coverImg, 0, 0, canvas.width, canvas.height);
                updatePreview(ctx);
                setExportProgress(Math.min(i / 90 * 20, 20)); // First 20% is cover image
              }, i * 33.3); // ~30fps
            }
            setTimeout(imgResolve, 3000);
          };
        });
        
        URL.revokeObjectURL(coverUrl);
      }
      
      // Now play and capture the video
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
        
        const duration = videoRef.current.duration;
        const fps = 30;
        const totalFrames = Math.ceil(duration * fps);
        
        let currentFrame = 0;
        
        const renderFrame = () => {
          if (!videoRef.current || !ctx) return;
          
          // Draw current video frame to canvas
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          
          // Update preview
          updatePreview(ctx);
          
          // Update progress (20-90%)
          currentFrame++;
          setExportProgress(20 + (currentFrame / totalFrames * 70));
          
          // Check if we've reached the end
          if (currentFrame >= totalFrames || videoRef.current.ended) {
            videoRef.current.pause();
            setExportProgress(100);
            resolve();
          } else {
            // Request the next frame
            requestAnimationFrame(renderFrame);
          }
        };
        
        // Start rendering frames
        renderFrame();
      } else {
        resolve();
      }
    });
  };
  
  // Update the preview canvas
  const updatePreview = (sourceCtx: CanvasRenderingContext2D) => {
    if (previewCanvasRef.current) {
      const previewCtx = previewCanvasRef.current.getContext('2d');
      if (previewCtx && canvasRef.current) {
        previewCtx.drawImage(
          canvasRef.current, 
          0, 0, canvasRef.current.width, canvasRef.current.height,
          0, 0, previewCanvasRef.current.width, previewCanvasRef.current.height
        );
      }
    }
  };
  
  // Download the exported video
  const downloadVideo = () => {
    if (!exportedUrl) return;
    
    const a = document.createElement('a');
    a.href = exportedUrl;
    a.download = `player-highlight-${new Date().getTime()}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  return (
    <div className="bg-[#0f172a] p-4 rounded-md border border-[#1e293b]">
      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
        <FileVideo className="h-5 w-5" />
        Export Compilation
      </h3>
      
      {/* Hidden elements for processing */}
      <canvas ref={canvasRef} className="hidden" />
      <audio ref={audioRef} className="hidden" />
      
      {/* Export preview and controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <div className="aspect-video bg-black rounded-md overflow-hidden flex items-center justify-center">
            {exportedUrl ? (
              <video 
                src={exportedUrl} 
                className="w-full h-full object-contain" 
                controls 
              />
            ) : (
              <canvas 
                ref={previewCanvasRef} 
                className="w-full h-full object-contain" 
              />
            )}
          </div>
        </div>
        
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-400 mb-2">
              Video will include:
            </div>
            
            <ul className="text-sm text-gray-300 space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${coverImage ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                Opening cover image {coverImage ? `(${coverImage.name})` : '(not selected)'}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                Player video footage
              </li>
              <li className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${selectedPlayer ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                Player tracking {selectedPlayer ? 'enabled' : 'disabled'}
              </li>
              <li className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${audioFile ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                Background audio {audioFile ? `(${audioFile.name})` : '(not selected)'}
              </li>
            </ul>
            
            {isExporting && (
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">Exporting video...</div>
                <Progress value={exportProgress} className="h-2" />
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            {!exportedUrl ? (
              <Button 
                onClick={handleExport}
                disabled={isExporting}
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
              >
                <Film className="h-4 w-4" />
                {isExporting ? 'Processing...' : 'Export Video'}
              </Button>
            ) : (
              <Button 
                onClick={downloadVideo}
                className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Video
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
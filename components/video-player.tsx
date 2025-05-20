"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, RotateCw, Maximize2, Volume2, VolumeX, Image, Music, FileDown } from "lucide-react"
import { VideoTimeline } from "@/components/video-timeline"
import { PlayerDetection } from "./player-detection"
import { VideoExport } from "./video-export"

interface VideoPlayerProps {
  videoFile?: File
  videoUrl?: string
}

export function VideoPlayer({ videoFile, videoUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null)
  const [showDetection, setShowDetection] = useState(false)
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [audioName, setAudioName] = useState<string | null>(null)
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null)
  const [showExport, setShowExport] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const coverFileInputRef = useRef<HTMLInputElement | null>(null)
  const audioFileInputRef = useRef<HTMLInputElement | null>(null)

  // Handle video file uploads
  useEffect(() => {
    if (videoFile) {
      // Create object URL for the uploaded file
      const objectUrl = URL.createObjectURL(videoFile)
      setLocalVideoUrl(objectUrl)
      setIsPlaying(false)
      setCurrentTime(0)

      // Clean up the object URL when the component unmounts or when the file changes
      return () => {
        URL.revokeObjectURL(objectUrl)
      }
    }
  }, [videoFile])

  // Handle direct video URLs
  useEffect(() => {
    if (videoUrl) {
      setLocalVideoUrl(videoUrl)
      setIsPlaying(false)
      setCurrentTime(0)
    }
  }, [videoUrl])

  // Handle cover image
  useEffect(() => {
    if (coverImage) {
      const objectUrl = URL.createObjectURL(coverImage)
      setCoverImageUrl(objectUrl)
      
      return () => {
        URL.revokeObjectURL(objectUrl)
      }
    }
  }, [coverImage])

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      const updateTime = () => {
        setCurrentTime(videoElement.currentTime)
      }

      const handleDurationChange = () => {
        setDuration(videoElement.duration)
      }

      const handleEnded = () => {
        setIsPlaying(false)
      }

      videoElement.addEventListener("timeupdate", updateTime)
      videoElement.addEventListener("durationchange", handleDurationChange)
      videoElement.addEventListener("ended", handleEnded)

      return () => {
        videoElement.removeEventListener("timeupdate", updateTime)
        videoElement.removeEventListener("durationchange", handleDurationChange)
        videoElement.removeEventListener("ended", handleEnded)
      }
    }
  }, [])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(error => {
          console.error("Error playing video:", error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      setCurrentTime(0)
      if (isPlaying) {
        videoRef.current.play()
      }
    }
  }

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 5)
    }
  }

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 5)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const enterFullscreen = () => {
    const videoContainer = document.querySelector(".video-container")
    if (videoContainer) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen()
      }
    }
  }

  const togglePlayerDetection = () => {
    setShowDetection(prev => !prev);
  };

  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleCoverImageUpload = () => {
    coverFileInputRef.current?.click();
  };

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverImage(e.target.files[0]);
    }
  };

  const handleAudioUpload = () => {
    audioFileInputRef.current?.click();
  };

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAudioFile(e.target.files[0]);
      setAudioName(e.target.files[0].name);
    }
  };

  const handlePlayerSelected = (playerId: string) => {
    setSelectedPlayer(playerId);
  };

  const toggleExport = () => {
    setShowExport(prev => !prev);
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = Math.floor(time % 60)
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 bg-[#0f172a] flex items-center justify-center">
        <div className="relative w-full max-w-4xl aspect-video bg-black video-container">
          {localVideoUrl ? (
            <>
              <video
                ref={videoRef}
                src={localVideoUrl}
                className="w-full h-full object-contain"
                onClick={togglePlayPause}
              />
              {showDetection && <PlayerDetection 
                videoRef={videoRef} 
                isPlaying={isPlaying} 
                onPlayerSelected={handlePlayerSelected}
              />}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-500">No video loaded</div>
            </div>
          )}

          {!isPlaying && localVideoUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="icon" className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600" onClick={togglePlayPause}>
                <Play className="h-8 w-8" />
              </Button>
            </div>
          )}

          <div className="absolute bottom-4 right-4 flex gap-2">
            {localVideoUrl && (
              <>
                <Button 
                  variant="ghost" 
                  className={`h-8 px-3 bg-black/50 text-white hover:bg-black/70 ${showDetection ? 'bg-green-600/70' : ''}`} 
                  onClick={togglePlayerDetection}
                >
                  {showDetection ? 'AI Player Detection ON' : 'AI Player Detection'}
                </Button>
                
                <Button 
                  variant="ghost" 
                  className={`h-8 px-3 bg-black/50 text-white hover:bg-black/70 ${showExport ? 'bg-blue-600/70' : ''}`} 
                  onClick={toggleExport}
                >
                  <FileDown className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </>
            )}
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 bg-black/50 text-white hover:bg-black/70" 
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 bg-black/50 text-white hover:bg-black/70" 
              onClick={enterFullscreen}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="h-16 border-t border-[#1e293b] bg-[#111827] flex items-center justify-center gap-4 px-4">
        <Button
          size="icon"
          variant="ghost"
          className="h-10 w-10 rounded-full text-gray-400 hover:text-white hover:bg-[#1e293b]"
          onClick={skipBackward}
        >
          <RotateCcw className="h-5 w-5" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          className="h-10 w-10 rounded-full text-gray-400 hover:text-white hover:bg-[#1e293b]"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>

        <Button
          size="icon"
          variant="ghost"
          className="h-10 w-10 rounded-full text-gray-400 hover:text-white hover:bg-[#1e293b]"
          onClick={skipForward}
        >
          <RotateCw className="h-5 w-5" />
        </Button>

        <div className="text-sm text-gray-400">
          {formatTime(currentTime)} | {formatTime(duration || 0)}
        </div>
      </div>

      {/* File upload inputs (hidden) */}
      <input
        type="file"
        ref={coverFileInputRef}
        onChange={handleCoverImageChange}
        accept="image/*"
        className="hidden"
      />
      <input
        type="file"
        ref={audioFileInputRef}
        onChange={handleAudioChange}
        accept="audio/*"
        className="hidden"
      />

      {/* Video Timeline */}
      <VideoTimeline 
        currentTime={currentTime} 
        duration={duration} 
        onSeek={handleSeek} 
      />

      {/* Media Upload Buttons */}
      <div className="p-3 bg-[#111827] border-t border-[#1e293b] flex flex-wrap gap-3">
        <Button
          variant="outline"
          className="flex items-center gap-2 text-xs bg-[#1e293b]"
          onClick={handleCoverImageUpload}
        >
          <Image className="h-4 w-4" />
          Upload Player Cover
          {coverImage && <span className="px-1 py-0.5 bg-green-600 rounded-full text-white text-[10px]">✓</span>}
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2 text-xs bg-[#1e293b]"
          onClick={handleAudioUpload}
        >
          <Music className="h-4 w-4" />
          Upload Audio
          {audioFile && <span className="px-1 py-0.5 bg-green-600 rounded-full text-white text-[10px]">✓</span>}
        </Button>

        {/* Show selected files */}
        <div className="flex-1 flex flex-col">
          {coverImageUrl && (
            <div className="text-xs text-gray-400 flex items-center gap-2">
              <span>Cover Image:</span>
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src={coverImageUrl} alt="Cover" className="w-full h-full object-cover" />
              </div>
              <span>{coverImage?.name}</span>
            </div>
          )}
          
          {audioName && (
            <div className="text-xs text-gray-400 flex items-center gap-2">
              <span>Audio:</span>
              <span>{audioName}</span>
            </div>
          )}
        </div>
      </div>

      {/* Export Section */}
      {showExport && localVideoUrl && (
        <div className="p-4 bg-[#0f172a] border-t border-[#1e293b]">
          <VideoExport 
            videoRef={videoRef}
            coverImage={coverImage}
            audioFile={audioFile}
            selectedPlayer={selectedPlayer}
          />
        </div>
      )}
    </div>
  )
} 
"use client"

import { useState, useCallback, useRef } from "react"
import { TopNav } from "@/components/top-nav"
import { SideNav } from "@/components/side-nav"
import { VideoPlayer } from "@/components/video-player"
import { UploadMediaDialog } from "@/components/upload-media-dialog"
import { ChevronLeft, Upload, Play } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NewProjectPage() {
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null)
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  // Callback for handling video uploads from multiple sources
  const handleVideoUpload = useCallback((file: File) => {
    console.log("Video uploaded:", file.name)
    setUploadedVideo(file)
  }, [])
  
  // Handler for the sidebar upload button
  const handleSidebarUpload = useCallback((file: File) => {
    // Just handle the file upload directly without showing the dialog
    handleVideoUpload(file)
    // Don't show dialog since file is already selected and uploaded
  }, [handleVideoUpload])
  
  // Function to show the upload dialog manually if needed
  const openUploadDialog = useCallback(() => {
    setShowUploadDialog(true)
  }, [])

  // Handler for direct file input
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleVideoUpload(e.target.files[0])
    }
  }, [handleVideoUpload])

  // Trigger file input click
  const triggerFileUpload = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <TopNav projectName="New Project" />
      
      <div className="flex flex-1">
        <SideNav onVideoUpload={handleSidebarUpload} />
        
        <div className="flex-1 flex flex-col">
          <div className="container py-4">
            <Link href="/dashboard" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Dashboard
            </Link>
          </div>
          
          {uploadedVideo ? (
            <VideoPlayer videoFile={uploadedVideo} />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center bg-[#0f172a] relative">
              <div className="relative w-full max-w-4xl aspect-video bg-black flex flex-col items-center justify-center p-8 text-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="icon" 
                    className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600"
                    onClick={triggerFileUpload}
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
                
                <input 
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div className="absolute bottom-4 transform -translate-x-1/2 left-1/2">
                <div className="flex flex-col items-center">
                  <Button 
                    className="mb-2 bg-green-500 hover:bg-green-600 text-white font-medium shadow-md transition-all duration-200 hover:scale-105"
                    onClick={triggerFileUpload}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Media
                  </Button>
                  <p className="text-sm text-gray-400">
                    Click to upload video or click on "Media" in the sidebar
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {showUploadDialog && (
        <UploadMediaDialog 
          onClose={() => setShowUploadDialog(false)} 
          onVideoUploaded={handleVideoUpload}
        />
      )}
    </div>
  )
}

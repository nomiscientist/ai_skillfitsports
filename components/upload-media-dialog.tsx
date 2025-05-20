"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Scissors, X, Upload, Check } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface UploadMediaDialogProps {
  onClose: () => void
  onVideoUploaded?: (file: File) => void
}

export function UploadMediaDialog({ onClose, onVideoUploaded }: UploadMediaDialogProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [urlValue, setUrlValue] = useState("")

  const handleDirectUpload = () => {
    // Create a hidden file input and trigger it
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'video/*'
    fileInput.multiple = true
    fileInput.style.display = 'none'
    
    fileInput.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement
      if (target.files && target.files.length > 0) {
        const newFiles = Array.from(target.files)
        
        // Simulate upload progress
        setIsUploading(true)
        setUploadProgress(0)
        
        // Pass the first file to the parent component
        if (onVideoUploaded && newFiles[0]) {
          onVideoUploaded(newFiles[0])
        }
        
        setUploadedFiles(newFiles)
        
        // Simulate progress
        let progress = 0
        const interval = setInterval(() => {
          progress += 5
          setUploadProgress(progress)
          
          if (progress >= 100) {
            clearInterval(interval)
            // Wait a moment before closing the dialog
            setTimeout(() => {
              setIsUploading(false)
            }, 500)
          }
        }, 150)
      }
    }
    
    document.body.appendChild(fileInput)
    fileInput.click()
    document.body.removeChild(fileInput)
  }

  const handleUrlSubmit = () => {
    if (urlValue.trim()) {
      // In a real implementation, you'd validate the URL and fetch the video
      setIsUploading(true)
      setUploadProgress(0)
      
      // Simulate progress
      let progress = 0
      const interval = setInterval(() => {
        progress += 5
        setUploadProgress(progress)
        
        if (progress >= 100) {
          clearInterval(interval)
          // Wait a moment before closing
          setTimeout(() => {
            setIsUploading(false)
            onClose()
          }, 500)
        }
      }, 150)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl bg-[#111827] rounded-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-[#1e293b]">
          <h2 className="text-xl font-medium">Upload Media</h2>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Select Sport</label>
            <Select defaultValue="soccer">
              <SelectTrigger className="bg-[#1e293b] border-[#334155] text-white">
                <SelectValue placeholder="Select sport" />
              </SelectTrigger>
              <SelectContent className="bg-[#1e293b] border-[#334155] text-white">
                <SelectItem value="soccer">Soccer</SelectItem>
                <SelectItem value="basketball">Basketball</SelectItem>
                <SelectItem value="football">Football</SelectItem>
                <SelectItem value="baseball">Baseball</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border border-dashed border-[#334155] rounded-md p-6 text-center">
            <div className="text-green-600 font-medium mb-2">DIRECT UPLOAD</div>
            <div className="text-sm text-gray-400 mb-4">(Up to 3 clips at a time)</div>
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition-all duration-200 hover:scale-105"
              onClick={handleDirectUpload}
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Media"}
            </Button>
            
            {isUploading && (
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Uploading {uploadedFiles.length} file(s)</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2 bg-gray-700" indicatorClassName="bg-indigo-600" />
              </div>
            )}
            
            {uploadedFiles.length > 0 && !isUploading && (
              <div className="mt-4 flex items-center justify-center text-green-500">
                <Check className="mr-2 h-4 w-4" />
                <span>{uploadedFiles.length} file(s) uploaded successfully</span>
              </div>
            )}
          </div>

          <div className="border border-dashed border-[#334155] rounded-md p-6 text-center">
            <Button variant="outline" className="border-[#334155] text-white hover:bg-[#1e293b] w-full">
              <Scissors className="mr-2 h-4 w-4" />
              TRIM & UPLOAD
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <label className="block text-sm font-medium">UPLOAD FROM URL</label>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter URL" 
                className="bg-[#1e293b] border-[#334155] text-white flex-1"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
              />
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={handleUrlSubmit}
                disabled={!urlValue.trim() || isUploading}
              >
                {isUploading ? "Uploading..." : "Submit"}
              </Button>
            </div>
            
            {isUploading && urlValue && (
              <div className="mt-2">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Downloading from URL</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2 bg-gray-700" indicatorClassName="bg-indigo-600" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

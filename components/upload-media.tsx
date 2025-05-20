"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, FileVideo, FileImage, X, Check } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function UploadMedia() {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({})

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    handleFiles(droppedFiles)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      handleFiles(selectedFiles)
    }
  }

  const handleFiles = (newFiles: File[]) => {
    // Filter for video files
    const videoFiles = newFiles.filter((file) => file.type.startsWith("video/") || file.type.startsWith("image/"))

    setFiles((prev) => [...prev, ...videoFiles])

    // Initialize progress for each file
    videoFiles.forEach((file) => {
      simulateUpload(file.name)
    })
  }

  const simulateUpload = (fileName: string) => {
    setUploadProgress((prev) => ({ ...prev, [fileName]: 0 }))

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const currentProgress = prev[fileName] || 0
        const newProgress = Math.min(currentProgress + 5, 100)

        if (newProgress === 100) {
          clearInterval(interval)
        }

        return { ...prev, [fileName]: newProgress }
      })
    }, 300)
  }

  const removeFile = (fileName: string) => {
    setFiles(files.filter((file) => file.name !== fileName))
    setUploadProgress((prev) => {
      const newProgress = { ...prev }
      delete newProgress[fileName]
      return newProgress
    })
  }

  return (
    <div className="space-y-6">
      <Card
        className={`border-2 border-dashed ${isDragging ? "border-green-600 bg-green-600/10" : "border-gray-700"} rounded-lg`}
      >
        <CardContent className="p-6">
          <div
            className="flex flex-col items-center justify-center py-12"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="h-16 w-16 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
              <Upload className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Drag & Drop your files here</h3>
            <p className="text-gray-400 text-center mb-6">
              Support for video files (MP4, MOV, AVI) and images (JPG, PNG)
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-green-700 hover:bg-green-800 text-white"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                Browse Files
              </Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                Record Video
              </Button>
            </div>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              multiple
              accept="video/*,image/*"
              onChange={handleFileChange}
            />
          </div>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Uploads</h3>
          <div className="space-y-3">
            {files.map((file, index) => (
              <div key={index} className="bg-[#1e293b] rounded-lg p-4 flex items-center">
                <div className="h-10 w-10 bg-[#334155] rounded-md flex items-center justify-center mr-4">
                  {file.type.startsWith("video/") ? (
                    <FileVideo className="h-5 w-5 text-gray-400" />
                  ) : (
                    <FileImage className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between mb-1">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-xs text-gray-400">{Math.round(file.size / 1024)} KB</p>
                  </div>
                  <div className="flex items-center">
                    <Progress
                      value={uploadProgress[file.name] || 0}
                      className="h-2 flex-1 bg-gray-700"
                      indicatorClassName="bg-green-600"
                    />
                    <span className="ml-2 text-xs text-gray-400">
                      {uploadProgress[file.name] === 100 ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        `${uploadProgress[file.name] || 0}%`
                      )}
                    </span>
                  </div>
                </div>
                <button className="ml-4 text-gray-400 hover:text-white" onClick={() => removeFile(file.name)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

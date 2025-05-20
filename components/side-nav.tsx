"use client"

import { useState } from "react"
import {
  Film,
  PenTool,
  Subtitles,
  Upload,
  X,
  Circle,
  HighlighterIcon,
  PlugIcon,
  ArrowRight,
  Square,
  Pencil,
  Type,
  ZoomIn,
  Filter,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { UploadMediaDialog } from "./upload-media-dialog"
import { MediaLibraryDialog } from "./media-library-dialog"

export function SideNav({ onVideoUpload }: { onVideoUpload?: (file: File) => void }) {
  const [activeSection, setActiveSection] = useState<"media" | "create" | "story" | null>(null)
  const [activePanel, setActivePanel] = useState<string | null>(null)
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const [showMediaLibraryDialog, setShowMediaLibraryDialog] = useState(false)

  const toggleSection = (section: "media" | "create" | "story") => {
    if (activeSection === section) {
      setActiveSection(null)
      setActivePanel(null)
    } else {
      setActiveSection(section)
      setActivePanel(null)
    }
  }

  const togglePanel = (panel: string) => {
    setActivePanel(activePanel === panel ? null : panel)
  }

  const handleUploadMedia = () => {
    // Create a hidden file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'video/*';
    fileInput.style.display = 'none';
    
    // Handle file selection
    fileInput.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        // If parent component provided an upload handler, call it
        if (onVideoUpload) {
          onVideoUpload(file);
        }
        // Don't show the dialog here, let the parent component control it
      }
    };
    
    // Trigger file selection dialog
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  }

  const handleAddFromLibrary = () => {
    setShowMediaLibraryDialog(true)
  }

  return (
    <>
      <div className="flex h-[calc(100vh-4rem)]">
        <div className="w-[100px] bg-[#0f172a] border-r border-[#1e293b] flex flex-col items-center py-6">
          <div className="flex flex-col items-center gap-8">
            <button
              onClick={() => toggleSection("media")}
              className={cn(
                "flex flex-col items-center gap-1 hover:text-orange-400",
                activeSection === "media" ? "text-green-500" : "text-gray-400",
              )}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#1e293b]">
                <Film className="h-6 w-6" />
              </div>
              <span className="text-xs">Media</span>
            </button>

            <button
              onClick={() => toggleSection("create")}
              className={cn(
                "flex flex-col items-center gap-1 hover:text-orange-400",
                activeSection === "create" ? "text-green-500" : "text-gray-400",
              )}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#1e293b]">
                <PenTool className="h-6 w-6" />
              </div>
              <span className="text-xs">Create</span>
            </button>

            <button
              onClick={() => toggleSection("story")}
              className={cn(
                "flex flex-col items-center gap-1 hover:text-orange-400",
                activeSection === "story" ? "text-green-500" : "text-gray-400",
              )}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#1e293b]">
                <Subtitles className="h-6 w-6" />
              </div>
              <span className="text-xs">Story</span>
            </button>
          </div>

          <div className="mt-auto">
            <div className="flex flex-col items-center gap-4">
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white p-0 h-auto"
                onClick={() => toggleSection("media")}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md">
                    <Upload className="h-6 w-6" />
                  </div>
                  <span className="text-xs mt-1">Upload</span>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {activeSection === "media" && (
          <div className="w-[350px] border-r border-[#1e293b] bg-[#111827] p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Upload</h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                onClick={() => setActiveSection(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-4">
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium shadow-md transition-all duration-200 hover:scale-105" 
                onClick={handleUploadMedia}
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Media
              </Button>

              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium shadow-md transition-all duration-200 hover:scale-105"
              >
                <User className="mr-2 h-4 w-4" />
                Upload Player Cover
              </Button>

              <Button
                variant="outline"
                className="w-full border-[#334155] bg-white text-orange-500 hover:bg-white/90 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105"
                onClick={handleAddFromLibrary}
              >
                <span className="mr-2 text-orange-500">+</span>
                <span className="font-medium">Add from Library</span>
              </Button>
            </div>
          </div>
        )}

        {activeSection === "create" && (
          <div className="w-[350px] border-r border-[#1e293b] bg-[#111827] p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                {activePanel === "player"
                  ? "Player"
                  : activePanel === "tactic"
                    ? "Tactic"
                    : activePanel === "action"
                      ? "Action"
                      : "Create"}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                onClick={() => setActiveSection(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {!activePanel && (
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-[#334155] bg-gradient-to-r from-orange-500/10 to-transparent text-orange-400 hover:bg-[#1e293b] justify-start font-medium"
                  onClick={() => togglePanel("player")}
                >
                  <Circle className="mr-2 h-5 w-5 text-orange-500" />
                  Player
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-[#334155] bg-gradient-to-r from-blue-500/10 to-transparent text-blue-400 hover:bg-[#1e293b] justify-start font-medium"
                  onClick={() => togglePanel("tactic")}
                >
                  <ArrowRight className="mr-2 h-5 w-5 text-blue-500" />
                  Tactic
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-[#334155] bg-gradient-to-r from-purple-500/10 to-transparent text-purple-400 hover:bg-[#1e293b] justify-start font-medium"
                  onClick={() => togglePanel("action")}
                >
                  <ZoomIn className="mr-2 h-5 w-5 text-purple-500" />
                  Action
                </Button>
              </div>
            )}

            {activePanel === "player" && (
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                    <Circle className="h-8 w-8 text-green-500" />
                  </Button>
                  <span className="text-xs">Circle</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                    <HighlighterIcon className="h-8 w-8 text-green-500" />
                  </Button>
                  <span className="text-xs">Spotlight</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                    <PlugIcon className="h-8 w-8 text-green-500" />
                  </Button>
                  <span className="text-xs">Connector</span>
                </div>
              </div>
            )}

            {activePanel === "tactic" && (
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                    <ArrowRight className="h-8 w-8 text-green-500" />
                  </Button>
                  <span className="text-xs">Arrow</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                    <Square className="h-8 w-8 text-green-500" />
                  </Button>
                  <span className="text-xs">Zone</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                    <Pencil className="h-8 w-8 text-green-500" />
                  </Button>
                  <span className="text-xs">Marker</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                    <Filter className="h-8 w-8 text-green-500" />
                  </Button>
                  <span className="text-xs">BG Filter</span>
                </div>
              </div>
            )}

            {activePanel === "action" && (
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                    <ZoomIn className="h-8 w-8 text-green-500" />
                  </Button>
                  <span className="text-xs">Zoom In</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                    <Type className="h-8 w-8 text-green-500" />
                  </Button>
                  <span className="text-xs">Text</span>
                </div>
              </div>
            )}
          </div>
        )}

        {activeSection === "story" && (
          <div className="w-[350px] border-r border-[#1e293b] bg-[#111827] p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Caption</h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                onClick={() => setActiveSection(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <Button variant="outline" className="w-full border-[#334155] bg-gradient-to-r from-red-500/10 to-transparent text-red-400 hover:bg-[#1e293b] font-medium">
                Delete All
              </Button>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Length</label>
                  <span className="text-red-500">*</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 flex-1 bg-[#1e293b] rounded-full">
                    <div className="h-full w-1/5 bg-green-500 rounded-full relative">
                      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div
                        key={num}
                        className={`w-6 h-6 flex items-center justify-center rounded-full text-xs ${
                          num === 3 ? "bg-green-500 text-white" : "bg-[#1e293b] text-gray-400"
                        }`}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Font Size</label>
                <div className="flex gap-2">
                  <div className="w-20 h-10 bg-[#1e293b] border border-[#334155] rounded flex items-center justify-center">
                    50
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Bold</span>
                    <div className="h-5 w-5 border border-[#334155] rounded"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Font</label>
                <div className="h-10 bg-[#1e293b] border border-[#334155] rounded flex items-center justify-between px-3">
                  <span>Arial</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Text Color</label>
                <div className="h-10 w-10 rounded bg-white border border-[#334155]"></div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Background Color</label>
                <div className="h-10 w-10 rounded bg-black border border-[#334155]"></div>
              </div>

              <div className="pt-4 text-center text-gray-400">No captions</div>

              <Button className="w-full bg-green-500 hover:bg-green-600">Add</Button>
            </div>
          </div>
        )}
      </div>

      {showUploadDialog && <UploadMediaDialog onClose={() => setShowUploadDialog(false)} />}
      {showMediaLibraryDialog && <MediaLibraryDialog onClose={() => setShowMediaLibraryDialog(false)} />}
    </>
  )
}

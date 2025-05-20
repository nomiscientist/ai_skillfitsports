"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, Edit, X } from "lucide-react"

interface MediaLibraryDialogProps {
  onClose: () => void
}

export function MediaLibraryDialog({ onClose }: MediaLibraryDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[90%] max-w-5xl h-[80vh] bg-[#0f172a] rounded-lg overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-[#1e293b]">
          <div className="flex items-center gap-2">
            <div className="text-green-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M10 9L15 12L10 15V9Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-xl font-medium">Media Library</h2>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-[#1e293b] border border-[#334155] rounded-md px-3 py-2 w-[150px]">
              <span>Title</span>
              <ChevronDown className="h-4 w-4 ml-auto" />
            </div>

            <div className="flex-1 relative">
              <Input
                placeholder="Search for clips"
                className="bg-[#1e293b] border-[#334155] text-white pl-3 pr-10 h-10"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full text-gray-400 hover:text-white"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-[#334155] rounded-md overflow-hidden">
              <div className="relative aspect-video bg-[#1e293b] flex items-center justify-center">
                <div className="text-gray-500">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-3 bg-[#111827]">
                <div className="text-lg font-medium">4</div>
                <div className="text-sm text-gray-400">0:00</div>

                <div className="flex mt-3 gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 h-8 text-gray-400 hover:text-white hover:bg-[#1e293b]"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 h-8 text-gray-400 hover:text-white hover:bg-[#1e293b]"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[#1e293b] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" className="h-8 w-8 p-0 border-[#334155] text-white hover:bg-[#1e293b]">
              &lt;
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0 border-[#334155] bg-green-500 text-white hover:bg-green-600"
            >
              1
            </Button>
            <Button variant="outline" className="h-8 w-8 p-0 border-[#334155] text-white hover:bg-[#1e293b]">
              &gt;
            </Button>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="border-[#334155] text-white hover:bg-[#1e293b]" onClick={onClose}>
              Cancel
            </Button>
            <Button className="bg-green-500 hover:bg-green-600">Select</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

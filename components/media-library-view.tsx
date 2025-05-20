"use client"

import type React from "react"

import { useState } from "react"
import { Search, ChevronDown, Edit, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EditVideoDialog } from "@/components/edit-video-dialog"

export function MediaLibraryView() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowEditDialog(true)
  }

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Implement delete functionality
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="text-green-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M10 9L15 12L10 15V9Z" fill="currentColor" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Media Library</h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2 bg-[#1e293b] border border-[#334155] rounded-md px-3 py-2 w-[150px]">
          <span>Title</span>
          <ChevronDown className="h-4 w-4 ml-auto" />
        </div>

        <div className="flex-1 relative">
          <Input placeholder="Search for clips" className="bg-[#1e293b] border-[#334155] text-white pl-3 pr-10 h-10" />
          <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full text-gray-400 hover:text-white">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          className={`border ${selectedMedia === 1 ? "border-green-600" : "border-[#334155]"} rounded-md overflow-hidden`}
          onClick={() => setSelectedMedia(selectedMedia === 1 ? null : 1)}
        >
          <div className="relative aspect-video bg-[#1e293b] flex items-center justify-center">
            <div className="text-green-600 bg-[#1e293b] rounded-full p-2">
              <Check className="h-6 w-6" />
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
                onClick={handleEditClick}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="flex-1 h-8 text-gray-400 hover:text-white hover:bg-[#1e293b]"
                onClick={handleDeleteClick}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-8 w-8 p-0 border-[#334155] text-white hover:bg-[#1e293b]"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0 border-[#334155] bg-green-600 text-white hover:bg-green-700">
            {currentPage}
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0 border-[#334155] text-white hover:bg-[#1e293b]"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            &gt;
          </Button>
        </div>
      </div>

      {showEditDialog && <EditVideoDialog onClose={() => setShowEditDialog(false)} />}
    </div>
  )
}

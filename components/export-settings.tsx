"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Download } from "lucide-react"

interface ExportSettingsProps {
  onClose: () => void
}

export function ExportSettings({ onClose }: ExportSettingsProps) {
  return (
    <div className="absolute top-16 right-4 z-50 w-80 bg-[#111827] border border-[#1e293b] rounded-md shadow-lg overflow-hidden">
      <div className="p-4 border-b border-[#1e293b] flex justify-between items-center">
        <h2 className="text-lg font-medium">Export settings</h2>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <label className="text-sm font-medium">Name</label>
            <div className="ml-1 text-green-500">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="17" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>
          <Input defaultValue="Untitled Project" className="bg-[#1e293b] border-[#334155] text-white" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Quality</label>
          <Select defaultValue="high">
            <SelectTrigger className="bg-[#1e293b] border-[#334155] text-white">
              <SelectValue placeholder="Select quality" />
            </SelectTrigger>
            <SelectContent className="bg-[#1e293b] border-[#334155] text-white">
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full bg-green-500 hover:bg-green-600">
          <Download className="mr-2 h-4 w-4" />
          Export video
        </Button>
      </div>
    </div>
  )
}

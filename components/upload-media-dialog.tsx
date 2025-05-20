"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Scissors, X } from "lucide-react"

interface UploadMediaDialogProps {
  onClose: () => void
}

export function UploadMediaDialog({ onClose }: UploadMediaDialogProps) {
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
            <Button className="bg-green-700 hover:bg-green-800 w-full">Upload Media</Button>
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
              <Input placeholder="Enter URL" className="bg-[#1e293b] border-[#334155] text-white flex-1" />
              <Button className="bg-green-700 hover:bg-green-800">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

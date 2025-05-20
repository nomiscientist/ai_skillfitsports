"use client"

import { useState } from "react"
import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface EditVideoDialogProps {
  onClose: () => void
}

export function EditVideoDialog({ onClose }: EditVideoDialogProps) {
  const [title, setTitle] = useState("4")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")

  const handleSave = () => {
    // Save logic here
    onClose()
  }

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#111827] border border-[#1e293b] rounded-lg w-full max-w-lg">
        <div className="flex items-center justify-between p-4 border-b border-[#1e293b]">
          <h2 className="text-xl font-semibold">Edit Video Information</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-[#1e293b] border-[#334155] text-white"
            />
            <div className="text-xs text-right mt-1 text-gray-400">1 / 100</div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="bg-[#1e293b] border-[#334155] text-white h-24 resize-none"
            />
            <div className="text-xs text-right mt-1 text-gray-400">0 / 500</div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Tags</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <div key={tag} className="bg-[#1e293b] text-white px-2 py-1 rounded-md flex items-center gap-1">
                  <span>{tag}</span>
                  <button onClick={() => handleRemoveTag(tag)} className="text-gray-400 hover:text-white">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => document.getElementById("tag-input")?.focus()}
                className="bg-[#1e293b] text-gray-400 px-2 py-1 rounded-md flex items-center gap-1 hover:text-white"
              >
                <Plus className="h-3 w-3" />
                <span>Add Tag</span>
              </button>
            </div>
            <div className="relative">
              <Input
                id="tag-input"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddTag()
                  }
                }}
                placeholder="Add a tag"
                className="bg-[#1e293b] border-[#334155] text-white pr-10"
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={handleAddTag}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 p-4 border-t border-[#1e293b]">
          <Button variant="outline" onClick={onClose} className="border-[#334155] text-white hover:bg-[#1e293b]">
            cancel
          </Button>
          <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white">
            save
          </Button>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { VideoTimeline } from "@/components/video-timeline"
import { Play, RotateCcw, RotateCw, Maximize2 } from "lucide-react"

export function CaptionEditor() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex flex-1">
        <div className="w-[350px] border-r border-[#1e293b] bg-[#111827] p-4">
          <div className="space-y-6">
            <Button variant="outline" className="w-full border-[#334155] text-white hover:bg-[#1e293b]">
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
                <Input type="number" defaultValue="50" className="bg-[#1e293b] border-[#334155] text-white w-20" />
                <div className="flex items-center gap-2">
                  <span className="text-sm">Bold</span>
                  <Checkbox />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Font</label>
              <Select defaultValue="arial">
                <SelectTrigger className="bg-[#1e293b] border-[#334155] text-white">
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent className="bg-[#1e293b] border-[#334155] text-white">
                  <SelectItem value="arial">Arial</SelectItem>
                  <SelectItem value="helvetica">Helvetica</SelectItem>
                  <SelectItem value="times">Times New Roman</SelectItem>
                </SelectContent>
              </Select>
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

        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-[#0f172a] flex items-center justify-center">
            <div className="relative w-full max-w-4xl aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600">
                  <Play className="h-8 w-8" />
                </Button>
              </div>

              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button size="icon" variant="ghost" className="h-8 w-8 bg-black/50 text-white hover:bg-black/70">
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
            >
              <RotateCcw className="h-5 w-5" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 rounded-full text-gray-400 hover:text-white hover:bg-[#1e293b]"
            >
              <Play className="h-5 w-5" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 rounded-full text-gray-400 hover:text-white hover:bg-[#1e293b]"
            >
              <RotateCw className="h-5 w-5" />
            </Button>

            <div className="text-sm text-gray-400">00:00:00 | 00:00:00</div>
          </div>

          <VideoTimeline />
        </div>
      </div>
    </div>
  )
}

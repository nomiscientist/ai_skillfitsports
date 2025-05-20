import { Button } from "@/components/ui/button"
import { VideoTimeline } from "@/components/video-timeline"
import { Play, RotateCcw, RotateCw, Scissors, Maximize2 } from "lucide-react"

export function ProjectEditor() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
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
          <Scissors className="h-5 w-5" />
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
  )
}

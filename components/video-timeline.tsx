import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoTimeline() {
  return (
    <div className="h-32 border-t border-[#1e293b] bg-[#111827] p-2">
      <div className="flex justify-between items-center mb-2">
        <div className="text-xs text-gray-400">00:00</div>

        <div className="flex gap-2">
          <Button size="icon" variant="ghost" className="h-6 w-6 text-gray-400 hover:text-white">
            <Minus className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="h-6 w-6 text-gray-400 hover:text-white">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative h-16 bg-[#0f172a] rounded border border-[#1e293b]">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green-500"></div>

        <div className="absolute bottom-0 left-0 right-0 h-6 flex items-center">
          <div className="flex w-full">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-[#334155] h-2 last:border-r-0"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Edit, X } from "lucide-react"

interface VideoThumbnailProps {
  title: string
  duration: string
}

export function VideoThumbnail({ title, duration }: VideoThumbnailProps) {
  return (
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
        <div className="text-lg font-medium">{title}</div>
        <div className="text-sm text-gray-400">{duration}</div>

        <div className="flex mt-3 gap-2">
          <Button size="sm" variant="ghost" className="flex-1 h-8 text-gray-400 hover:text-white hover:bg-[#1e293b]">
            <Edit className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="flex-1 h-8 text-gray-400 hover:text-white hover:bg-[#1e293b]">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

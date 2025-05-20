import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, PlusCircle } from "lucide-react"
import { VideoThumbnail } from "@/components/video-thumbnail"

export function MediaLibrary() {
  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">Media Library</div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 flex items-center">
          <Select defaultValue="title">
            <SelectTrigger className="w-[120px] bg-[#1e293b] border-[#334155] text-white">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent className="bg-[#1e293b] border-[#334155] text-white">
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="duration">Duration</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex-1 ml-2">
            <div className="relative">
              <Input placeholder="Search for clips" className="bg-[#1e293b] border-[#334155] text-white pl-3 pr-10" />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full text-gray-400 hover:text-white"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Button className="bg-orange-500 hover:bg-orange-600">
          <PlusCircle className="h-4 w-4 mr-2" />
          Select videos
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <VideoThumbnail title="4" duration="0:00" />
      </div>
    </div>
  )
}

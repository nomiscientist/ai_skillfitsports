import Link from "next/link"
import { FolderIcon, PlusIcon } from "lucide-react"

interface ProjectCardProps {
  type?: "create" | "project"
  title?: string
  videoCount?: number
}

export function ProjectCard({ type = "project", title, videoCount }: ProjectCardProps) {
  if (type === "create") {
    return (
      <Link href="/dashboard/create/new">
        <div className="h-48 border border-dashed border-[#334155] rounded-md flex flex-col items-center justify-center gap-4 hover:bg-[#1e293b] transition-colors cursor-pointer">
          <div className="w-16 h-16 flex items-center justify-center">
            <PlusIcon className="h-12 w-12 text-orange-500" />
          </div>
          <span className="font-medium">Create New Project</span>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/dashboard/project/${title?.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="h-48 border border-[#334155] rounded-md flex flex-col hover:bg-[#1e293b] transition-colors cursor-pointer">
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <FolderIcon className="h-12 w-12 text-orange-500" />
          </div>
          <span className="font-medium">{title}</span>
          {videoCount !== undefined && <span className="text-xs text-gray-400">Number of Videos: {videoCount}</span>}
        </div>
      </div>
    </Link>
  )
}

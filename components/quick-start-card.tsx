"use client"

import { useRouter } from "next/navigation"
import { Upload, ImageIcon } from "lucide-react"

interface QuickStartCardProps {
  title: string
  icon: "upload" | "workspace"
}

export function QuickStartCard({ title, icon }: QuickStartCardProps) {
  const router = useRouter()

  const handleClick = () => {
    if (icon === "upload") {
      router.push("/dashboard/upload")
    } else if (icon === "workspace") {
      router.push("/workspace-projects")
    }
  }

  return (
    <div
      onClick={handleClick}
      className="h-36 border border-[#334155] rounded-md flex flex-col items-center justify-center gap-4 hover:bg-[#1e293b] transition-colors cursor-pointer"
    >
      <div className="w-12 h-12 flex items-center justify-center">
        {icon === "upload" ? (
          <Upload className="h-10 w-10 text-green-500" />
        ) : (
          <ImageIcon className="h-10 w-10 text-green-500" />
        )}
      </div>
      <span className="font-medium">{title}</span>
    </div>
  )
}

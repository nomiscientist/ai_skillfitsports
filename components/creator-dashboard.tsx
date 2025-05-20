import Link from "next/link"
import { PlusIcon, FolderIcon, Upload, ImageIcon } from "lucide-react"

export function CreatorDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold">AI Soccer Clipper</h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/dashboard/project/new">
            <div className="h-48 border border-dashed border-[#334155] rounded-md flex flex-col items-center justify-center gap-4 hover:bg-[#1e293b] transition-colors cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center">
                <PlusIcon className="h-12 w-12 text-green-500" />
              </div>
              <span className="font-medium">Create New Project</span>
            </div>
          </Link>

          <Link href="/dashboard/project/default">
            <div className="h-48 border border-[#334155] rounded-md flex flex-col hover:bg-[#1e293b] transition-colors cursor-pointer">
              <div className="flex-1 flex flex-col items-center justify-center gap-2">
                <div className="w-16 h-16 flex items-center justify-center">
                  <FolderIcon className="h-12 w-12 text-green-500" />
                </div>
                <span className="font-medium">Default Project</span>
                <span className="text-xs text-gray-400">Number of Videos: 1</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/dashboard/upload">
            <div className="h-36 border border-[#334155] rounded-md flex flex-col items-center justify-center gap-4 hover:bg-[#1e293b] transition-colors cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center">
                <Upload className="h-10 w-10 text-green-500" />
              </div>
              <span className="font-medium">Upload Your Clip</span>
            </div>
          </Link>

          <Link href="/dashboard/workspace">
            <div className="h-36 border border-[#334155] rounded-md flex flex-col items-center justify-center gap-4 hover:bg-[#1e293b] transition-colors cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center">
                <ImageIcon className="h-10 w-10 text-green-500" />
              </div>
              <span className="font-medium">Open Workspace</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

import { SideNav } from "@/components/side-nav"
import { TopNav } from "@/components/top-nav"
import { VideoEditor } from "@/components/video-editor"

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <TopNav />
      <div className="flex">
        <SideNav />
        <main className="flex-1">
          <VideoEditor />
        </main>
      </div>
    </div>
  )
}

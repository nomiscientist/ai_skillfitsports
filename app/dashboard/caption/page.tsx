import { SideNav } from "@/components/side-nav"
import { TopNav } from "@/components/top-nav"
import { CaptionEditor } from "@/components/caption-editor"

export default function CaptionPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <TopNav />
      <div className="flex">
        <SideNav />
        <main className="flex-1">
          <CaptionEditor />
        </main>
      </div>
    </div>
  )
}

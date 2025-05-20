import { TopNav } from "@/components/top-nav"
import { MediaLibrary } from "@/components/media-library"

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <TopNav />
      <main className="p-6">
        <MediaLibrary />
      </main>
    </div>
  )
}

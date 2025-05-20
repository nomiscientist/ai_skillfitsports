import { TopNav } from "@/components/top-nav"
import { UploadMedia } from "@/components/upload-media"

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <TopNav />
      <main className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Upload Media</h1>
          <p className="text-gray-400">Upload your videos to create highlights and analysis</p>
        </div>
        <UploadMedia />
      </main>
    </div>
  )
}

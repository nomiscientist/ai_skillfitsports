import { TopNav } from "@/components/top-nav"
import { CreatorDashboard } from "@/components/creator-dashboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <TopNav />
      <main className="p-6 md:p-10">
        <CreatorDashboard />
      </main>
    </div>
  )
}

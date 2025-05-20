import { TopNav } from "@/components/top-nav"
import { WorkspaceProjects } from "@/components/workspace-projects"

export default function WorkspaceProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <TopNav />
      <main className="flex-1">
        <WorkspaceProjects />
      </main>
    </div>
  )
}

import { TopNav } from "@/components/top-nav"
import { ProjectEditor } from "@/components/project-editor"
import { SideNav } from "@/components/side-nav"

export default function DefaultProjectPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <TopNav projectName="Default Project" />
      <div className="flex">
        <SideNav />
        <main className="flex-1">
          <ProjectEditor />
        </main>
      </div>
    </div>
  )
}

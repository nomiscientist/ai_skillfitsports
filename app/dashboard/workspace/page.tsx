"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { TopNav } from "@/components/top-nav"

export default function WorkspacePage() {
  const router = useRouter()

  // Redirect to the workspace projects view
  useEffect(() => {
    router.push("/workspace-projects")
  }, [router])

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <TopNav projectName="Workspace" />
      <main className="p-6">
        <div className="text-center py-8">Loading workspace...</div>
      </main>
    </div>
  )
}

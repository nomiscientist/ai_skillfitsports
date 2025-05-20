"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Film, Folder, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DeleteProjectDialog } from "@/components/delete-project-dialog"
import { MediaLibraryView } from "@/components/media-library-view"

export function WorkspaceProjects() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"projects" | "media">("projects")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState<number | null>(null)

  const projects = [
    { id: 1, name: "Default Project" },
    { id: 2, name: "Default Project" },
    { id: 3, name: "Default Project" },
    { id: 4, name: "Default Project" },
  ]

  const handleProjectClick = (id: number) => {
    router.push(`/dashboard/project/default`)
  }

  const handleCreateProject = () => {
    router.push("/dashboard/project/new")
  }

  const handleDeleteClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setProjectToDelete(id)
    setShowDeleteDialog(true)
  }

  const handleEditClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/dashboard/project/default`)
  }

  const handleDeleteConfirm = () => {
    // Here you would actually delete the project
    setShowDeleteDialog(false)
    setProjectToDelete(null)
  }

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false)
    setProjectToDelete(null)
  }

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <div className="p-4">
        <div className="flex mb-6">
          <Button
            variant={activeTab === "media" ? "default" : "outline"}
            className={`rounded-r-none ${
              activeTab === "media"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md"
                : "border-[#334155] text-indigo-400 hover:bg-[#1e293b] hover:text-indigo-300"
            }`}
            onClick={() => setActiveTab("media")}
          >
            <Film className="mr-2 h-4 w-4" />
            Media Library
          </Button>
          <Button
            variant={activeTab === "projects" ? "default" : "outline"}
            className={`rounded-l-none ${
              activeTab === "projects"
                ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-md"
                : "border-[#334155] text-amber-400 hover:bg-[#1e293b] hover:text-amber-300"
            }`}
            onClick={() => setActiveTab("projects")}
          >
            <Folder className="mr-2 h-4 w-4" />
            Projects
          </Button>
        </div>

        {activeTab === "projects" ? (
          <div>
            <h1 className="text-2xl font-bold mb-6">myProjects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                className="h-48 border border-dashed border-[#334155] rounded-md flex flex-col items-center justify-center gap-4 hover:bg-[#1e293b] transition-colors cursor-pointer"
                onClick={handleCreateProject}
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg
                    className="h-12 w-12 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-medium">Create New Project</span>
              </div>

              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`relative h-48 border border-[#334155] rounded-md flex flex-col hover:bg-[#1e293b] transition-colors cursor-pointer ${
                    hoveredProject === project.id ? "bg-[#1e293b]" : ""
                  }`}
                  onClick={() => handleProjectClick(project.id)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <svg
                        className="h-12 w-12 text-[#60a5fa]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.07989 5 6.2 5H8.4C9.08836 5 9.43254 5 9.75071 5.10899C10.0347 5.20487 10.295 5.35958 10.5092 5.56066C10.7493 5.78105 10.9185 6.09836 11.257 6.73297L12 8H17.8C18.9201 8 19.4802 8 19.908 8.21799C20.2843 8.40973 20.5903 8.71569 20.782 9.09202C21 9.51984 21 10.0799 21 11.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">{project.name}</span>
                  </div>

                  {hoveredProject === project.id && (
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 bg-[#1e293b] border-t border-[#334155]">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-white"
                        onClick={(e) => handleEditClick(project.id, e)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-white"
                        onClick={(e) => handleDeleteClick(project.id, e)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <MediaLibraryView />
        )}
      </div>

      {showDeleteDialog && <DeleteProjectDialog onConfirm={handleDeleteConfirm} onCancel={handleDeleteCancel} />}
    </div>
  )
}

"use client"

import { useRouter } from "next/navigation"
import { User, LogOut, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface UserProfileMenuProps {
  onClose: () => void
  onAccountSettings: () => void
}

export function UserProfileMenu({ onClose, onAccountSettings }: UserProfileMenuProps) {
  const router = useRouter()

  const languages = [
    { name: "English", code: "en" },
    { name: "Español", code: "es" },
    { name: "Français", code: "fr" },
    { name: "Deutsch", code: "de" },
    { name: "中文", code: "zh" },
  ]

  const handleLogout = () => {
    // Simulate logout
    router.push("/login")
    onClose()
  }

  return (
    <div className="absolute right-4 top-16 w-64 bg-[#111827] border border-[#1e293b] rounded-md shadow-lg z-50">
      <div className="p-4 border-b border-[#1e293b]">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white">J</div>
          <div>
            <div className="font-medium">James</div>
            <div className="text-sm text-gray-400">james@skillfitsports.com</div>
          </div>
        </div>
      </div>

      <div className="p-2">
        <button
          className="w-full text-left px-3 py-2 rounded-md hover:bg-[#1e293b] flex items-center gap-2"
          onClick={onAccountSettings}
        >
          <User className="h-4 w-4" />
          <span>Account Settings</span>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-[#1e293b] flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Language</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#111827] border-[#1e293b] text-white">
            {languages.map((language) => (
              <DropdownMenuItem key={language.code} className="hover:bg-[#1e293b] cursor-pointer">
                {language.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          className="w-full text-left px-3 py-2 rounded-md hover:bg-[#1e293b] flex items-center gap-2"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

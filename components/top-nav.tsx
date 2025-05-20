"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { InfoIcon, Globe } from "lucide-react"
import { UserProfileMenu } from "@/components/user-profile-menu"
import { ExportSettings } from "@/components/export-settings"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

interface TopNavProps {
  projectName?: string
}

export function TopNav({ projectName }: TopNavProps) {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showExportSettings, setShowExportSettings] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("English")
  const pathname = usePathname()
  const router = useRouter()

  // Check if we're on a project page
  const isProjectPage = pathname?.includes("/dashboard/project/") || pathname?.includes("/dashboard/workspace")

  const handleAccountSettings = () => {
    router.push("/account-settings")
    setShowUserMenu(false)
  }

  const languages = [
    { name: "English", code: "en" },
    { name: "Español", code: "es" },
    { name: "Français", code: "fr" },
    { name: "Deutsch", code: "de" },
    { name: "中文", code: "zh" },
  ]

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language)
    // Here you would implement actual language change logic
  }

  return (
    <header className="h-16 border-b border-[#1e293b] bg-[#0f172a] flex items-center px-4 justify-between relative">
      <div className="flex items-center">
        <Link href="/dashboard" className="flex items-center">
          <div className="relative h-8 w-8 mr-2">
            <Image src="/logo.png" alt="AI Enabled Skill Fit Sports Logo" fill className="object-contain" />
          </div>
          <h1 className="text-xl font-bold">
            AI Enabled <span className="text-green-600">Skill Fit Sports</span>
          </h1>
        </Link>
        {projectName && <div className="ml-4 text-sm text-gray-400">{projectName}</div>}
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Globe className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">{currentLanguage}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#111827] border-[#1e293b] text-white">
            {languages.map((language) => (
              <DropdownMenuItem
                key={language.code}
                onClick={() => handleLanguageChange(language.name)}
                className={`hover:bg-[#1e293b] cursor-pointer ${
                  currentLanguage === language.name ? "text-green-600" : ""
                }`}
              >
                {language.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {isProjectPage && (
          <Button
            variant="outline"
            size="sm"
            className="border-[#334155] text-white hover:bg-[#1e293b]"
            onClick={() => setShowExportSettings(!showExportSettings)}
          >
            Export
          </Button>
        )}

        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <InfoIcon className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-8 w-8 bg-purple-600 text-white"
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          <span>J</span>
        </Button>
      </div>

      {showUserMenu && (
        <UserProfileMenu onClose={() => setShowUserMenu(false)} onAccountSettings={handleAccountSettings} />
      )}
      {showExportSettings && <ExportSettings onClose={() => setShowExportSettings(false)} />}
    </header>
  )
}

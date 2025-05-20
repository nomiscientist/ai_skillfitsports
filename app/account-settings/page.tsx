import { ChevronLeft, Star, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export default function AccountSettingsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <header className="border-b border-[#1e293b]">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8 mr-2">
              <Image src="/logo.png" alt="Skill Fit Sports Logo" fill className="object-contain" />
            </div>
            <h1 className="text-xl font-bold">
              AI Enabled <span className="text-green-600">Skill Fit Sports</span>
            </h1>
          </Link>
        </div>
      </header>

      <main className="container px-4 py-6 sm:px-8">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/dashboard" className="text-gray-400 hover:text-white">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold">Account Settings</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64">
            <div className="bg-[#111827] rounded-md overflow-hidden">
              <div className="p-4 border-b border-[#1e293b] text-green-600 font-medium flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M5 20C5 16.6863 8.13401 14 12 14C15.866 14 19 16.6863 19 20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span>User Info</span>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-3xl">
            <div className="bg-[#111827] rounded-md p-6">
              <h2 className="text-xl font-bold mb-6">User Info</h2>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-medium">Access Tier</div>
                  <div className="flex items-center gap-2 bg-[#1e293b] px-4 py-2 rounded-md">
                    <Star className="h-4 w-4 text-green-600" />
                    <span>Premium</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#1e293b] pt-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Account Details</h3>

                <div className="mb-4">
                  <label className="block text-sm mb-2">Email</label>
                  <div className="relative">
                    <Input
                      value="james@skillfitsports.com"
                      readOnly
                      className="bg-[#1e293b] border-[#334155] text-white pr-10"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12L10 17L20 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-green-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12L10 17L20 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Email verified</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm mb-2">Username</label>
                  <div className="relative">
                    <Input value="james_coach" readOnly className="bg-[#1e293b] border-[#334155] text-white pr-10" />
                    <Button variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M15 3H21V9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 14L21 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm mb-2">
                    <span className="text-red-500 mr-1">*</span>
                    Name
                  </label>
                  <Input defaultValue="James" className="bg-[#1e293b] border-[#334155] text-white" />
                </div>

                <Button className="bg-green-700 hover:bg-green-800 mt-2">Update name</Button>
              </div>

              <div className="border-t border-[#1e293b] pt-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Security</h3>

                <div className="mb-4">
                  <label className="block text-sm mb-2">
                    <span className="text-red-500 mr-1">*</span>
                    Current password
                  </label>
                  <div className="relative">
                    <Input
                      type="password"
                      placeholder="Enter your current password"
                      className="bg-[#1e293b] border-[#334155] text-white pr-10"
                    />
                    <Button variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0">
                      <EyeOff className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm mb-2">
                    <span className="text-red-500 mr-1">*</span>
                    New password
                  </label>
                  <div className="relative">
                    <Input
                      type="password"
                      placeholder="Enter your new password"
                      className="bg-[#1e293b] border-[#334155] text-white pr-10"
                    />
                    <Button variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0">
                      <EyeOff className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button className="bg-green-700 hover:bg-green-800 mt-2">Update password</Button>
              </div>

              <div className="border-t border-[#1e293b] pt-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  API access
                </h3>

                <div className="mt-4">
                  <Button className="bg-green-700 hover:bg-green-800">Generate API Key</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

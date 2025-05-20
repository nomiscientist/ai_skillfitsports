"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface LoginFormProps {
  onLogin?: () => void
  isLoggingIn?: boolean
}

export function LoginForm({ onLogin, isLoggingIn = false }: LoginFormProps) {
  const router = useRouter()
  const [email, setEmail] = useState("james@skillfitsports.com")
  const [password, setPassword] = useState("password123")
  const [loading, setLoading] = useState(false)

  // Use either the prop value or local state
  const isSubmitting = isLoggingIn || loading

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (onLogin) {
      onLogin()
    } else {
      setLoading(true)
      // Simulate API call delay
      setTimeout(() => {
        router.push("/dashboard")
      }, 1500)
    }
  }

  return (
    <div className="w-full max-w-md bg-[#111827] rounded-lg shadow-xl overflow-hidden z-10">
      <div className="flex justify-center pt-8 pb-2">
        <div className="flex flex-col items-center">
          <div className="relative h-16 w-16 mb-2">
            <Image src="/logo.png" alt="AI Enabled Skill Fit Sports Logo" fill className="object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-white text-center">
            AI Enabled <span className="text-green-500">Skill Fit Sports</span>
          </h1>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-6">Login to your account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1e293b] border-[#334155] text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-sm text-green-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#1e293b] border-[#334155] text-white"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>

          <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-400">Don't have an account?</span>{" "}
          <Link href="/signup" className="text-green-600 hover:underline font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

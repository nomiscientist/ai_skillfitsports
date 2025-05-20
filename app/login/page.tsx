"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LoginForm } from "@/components/login-form"
import { ParticlesBackground } from "@/components/particles-background"

export default function LoginPage() {
  const router = useRouter()
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  // Simulate login process
  const handleLogin = () => {
    setIsLoggingIn(true)

    // Simulate API call delay
    setTimeout(() => {
      // Redirect to dashboard after "login"
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-900 flex items-center justify-center p-4 relative overflow-hidden">
      <ParticlesBackground />
      <LoginForm onLogin={handleLogin} isLoggingIn={isLoggingIn} />
    </div>
  )
}

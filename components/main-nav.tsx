import Link from "next/link"
import { BusIcon as SoccerBall } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <SoccerBall className="h-6 w-6 text-orange-500" />
        <span className="hidden font-bold sm:inline-block text-xl">AI Soccer Clipper</span>
      </Link>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
          Dashboard
        </Link>
        <Link
          href="/dashboard/project/default"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Projects
        </Link>
        <Link
          href="/library"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Library
        </Link>
        <Link
          href="/pricing"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Pricing
        </Link>
      </nav>
    </div>
  )
}

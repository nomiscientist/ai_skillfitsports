import Link from "next/link"
import { BusIcon as SoccerBall } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <SoccerBall className="h-5 w-5 text-orange-500" />
          <p className="text-sm text-muted-foreground">© 2025 AI Soccer Clipper. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
            Privacy
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

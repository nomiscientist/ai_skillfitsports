import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function RelatedHighlights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Highlights</CardTitle>
        <CardDescription>Other players from the same game</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Link href="/player/2" className="block">
            <div className="group flex items-start gap-2 rounded-md p-2 hover:bg-accent">
              <div className="relative aspect-video h-20 overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg?height=80&width=142&query=soccer player jersey number 7"
                  alt="Player highlight"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <div className="font-medium">Michael Smith</div>
                <div className="text-xs text-muted-foreground">Jersey #7 • Forward</div>
                <div className="mt-1 text-xs">
                  <span className="rounded-full bg-muted px-2 py-0.5">2 Goals</span>
                  <span className="ml-1 rounded-full bg-muted px-2 py-0.5">1 Assist</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/player/3" className="block">
            <div className="group flex items-start gap-2 rounded-md p-2 hover:bg-accent">
              <div className="relative aspect-video h-20 overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg?height=80&width=142&query=soccer player jersey number 9"
                  alt="Player highlight"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <div className="font-medium">David Wilson</div>
                <div className="text-xs text-muted-foreground">Jersey #9 • Striker</div>
                <div className="mt-1 text-xs">
                  <span className="rounded-full bg-muted px-2 py-0.5">1 Goal</span>
                  <span className="ml-1 rounded-full bg-muted px-2 py-0.5">3 Shots</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/player/4" className="block">
            <div className="group flex items-start gap-2 rounded-md p-2 hover:bg-accent">
              <div className="relative aspect-video h-20 overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg?height=80&width=142&query=soccer player jersey number 5"
                  alt="Player highlight"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <div className="font-medium">James Brown</div>
                <div className="text-xs text-muted-foreground">Jersey #5 • Defender</div>
                <div className="mt-1 text-xs">
                  <span className="rounded-full bg-muted px-2 py-0.5">5 Tackles</span>
                  <span className="ml-1 rounded-full bg-muted px-2 py-0.5">2 Blocks</span>
                </div>
              </div>
            </div>
          </Link>

          <Button variant="outline" className="w-full">
            View All Players
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

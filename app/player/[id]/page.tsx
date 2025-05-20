import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronLeft,
  Download,
  Share2,
  Edit,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Maximize,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PlayerStats } from "@/components/player-stats"
import { RelatedHighlights } from "@/components/related-highlights"

export default function PlayerHighlightPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container py-4">
        <Link href="/dashboard" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-2">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=64&width=64&query=soccer player jersey number 10 portrait"
                alt="Player"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Alex Johnson</h1>
              <p className="text-muted-foreground">Jersey #10 • Midfielder • U16 Championship Game</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-black">
                <Image
                  src="/placeholder.svg?height=720&width=1280&query=soccer player dribbling ball during match"
                  alt="Player highlight video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-16 w-16 rounded-full bg-background/80 backdrop-blur-sm"
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="text-white">0:45 / 3:12</div>
                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                          <Maximize className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/30">
                      <div className="h-full w-[25%] bg-orange-500"></div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Button size="icon" variant="ghost" className="h-10 w-10 text-white">
                        <SkipBack className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-12 w-12 text-white">
                        <Pause className="h-6 w-6" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-10 w-10 text-white">
                        <SkipForward className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Tabs defaultValue="moments" className="mt-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="moments">Key Moments</TabsTrigger>
                <TabsTrigger value="stats">Player Stats</TabsTrigger>
              </TabsList>
              <TabsContent value="moments" className="space-y-4 pt-4">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 rounded-md border p-2 hover:bg-accent">
                    <div className="relative aspect-video h-16 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=64&width=114&query=soccer player scoring goal"
                        alt="Moment thumbnail"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Goal Scored</div>
                      <div className="text-xs text-muted-foreground">1:24 • High impact moment</div>
                    </div>
                    <div className="ml-auto text-sm font-medium text-orange-500">0:45</div>
                  </div>

                  <div className="flex items-center gap-2 rounded-md border p-2 hover:bg-accent">
                    <div className="relative aspect-video h-16 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=64&width=114&query=soccer player making assist"
                        alt="Moment thumbnail"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Assist</div>
                      <div className="text-xs text-muted-foreground">0:58 • Medium impact moment</div>
                    </div>
                    <div className="ml-auto text-sm font-medium text-orange-500">0:32</div>
                  </div>

                  <div className="flex items-center gap-2 rounded-md border p-2 hover:bg-accent">
                    <div className="relative aspect-video h-16 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=64&width=114&query=soccer player dribbling past defender"
                        alt="Moment thumbnail"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Skilled Dribble</div>
                      <div className="text-xs text-muted-foreground">2:15 • Medium impact moment</div>
                    </div>
                    <div className="ml-auto text-sm font-medium text-orange-500">0:28</div>
                  </div>

                  <div className="flex items-center gap-2 rounded-md border p-2 hover:bg-accent">
                    <div className="relative aspect-video h-16 overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=64&width=114&query=soccer player making tackle"
                        alt="Moment thumbnail"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Defensive Play</div>
                      <div className="text-xs text-muted-foreground">2:45 • Low impact moment</div>
                    </div>
                    <div className="ml-auto text-sm font-medium text-orange-500">0:18</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="stats" className="pt-4">
                <PlayerStats />
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <RelatedHighlights />
          </div>
        </div>
      </main>
    </div>
  )
}

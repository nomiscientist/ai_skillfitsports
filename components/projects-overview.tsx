import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Edit, Trash2, Play, Download, Share2, BusIcon as SoccerBall } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"

export function ProjectsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Create New Project</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 pb-0">
          <div className="flex h-[180px] items-center justify-center rounded-md border border-dashed">
            <div className="flex flex-col items-center gap-1 text-center">
              <SoccerBall className="h-10 w-10 text-muted-foreground" />
              <div className="text-sm font-medium text-muted-foreground">Start a new highlight project</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          <Link href="/projects/new" className="w-full">
            <Button className="w-full bg-orange-500 hover:bg-orange-600">Create Project</Button>
          </Link>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">U16 Championship Game</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="pt-4 pb-0">
          <div className="relative h-[180px] rounded-md overflow-hidden">
            <Image src="/soccer-game-on-field.png" alt="Soccer game thumbnail" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="icon"
                variant="secondary"
                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
              >
                <Play className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="pt-4 text-sm text-muted-foreground">
            <p>3 player highlights • 5 minutes total</p>
            <p>Last edited: May 15, 2025</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-4">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Spring Tournament Finals</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="pt-4 pb-0">
          <div className="relative h-[180px] rounded-md overflow-hidden">
            <Image src="/soccer-trophy-ceremony.png" alt="Soccer tournament thumbnail" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="icon"
                variant="secondary"
                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
              >
                <Play className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="pt-4 text-sm text-muted-foreground">
            <p>5 player highlights • 12 minutes total</p>
            <p>Last edited: May 10, 2025</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-4">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

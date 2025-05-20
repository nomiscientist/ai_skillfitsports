import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Link2, FolderOpen } from "lucide-react"

export function UploadVideo() {
  return (
    <div className="mx-auto max-w-3xl">
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload">Upload File</TabsTrigger>
          <TabsTrigger value="url">URL</TabsTrigger>
          <TabsTrigger value="library">From Library</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex h-48 w-full items-center justify-center rounded-md border border-dashed">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <Upload className="h-10 w-10 text-muted-foreground" />
                    <div className="text-xl font-medium">Drag & drop your video file</div>
                    <div className="text-sm text-muted-foreground">Supports MP4, MOV, AVI up to 10GB</div>
                    <Button className="mt-2 bg-orange-500 hover:bg-orange-600">
                      <FolderOpen className="mr-2 h-4 w-4" />
                      Browse Files
                    </Button>
                  </div>
                </div>
                <div className="w-full space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Video Title</Label>
                    <Input id="title" placeholder="Enter a title for your video" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Input id="description" placeholder="Add a description" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="team">Team Name</Label>
                    <Input id="team" placeholder="Enter team name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Game Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Upload and Process</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="url">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="video-url">Video URL</Label>
                  <div className="flex gap-2">
                    <Input id="video-url" placeholder="https://example.com/video.mp4" />
                    <Button className="shrink-0 bg-orange-500 hover:bg-orange-600">
                      <Link2 className="mr-2 h-4 w-4" />
                      Fetch
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="url-title">Video Title</Label>
                  <Input id="url-title" placeholder="Enter a title for your video" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="url-description">Description (Optional)</Label>
                  <Input id="url-description" placeholder="Add a description" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="url-team">Team Name</Label>
                  <Input id="url-team" placeholder="Enter team name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="url-date">Game Date</Label>
                  <Input id="url-date" type="date" />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Process Video</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="library">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Select from your library</Label>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <div className="relative cursor-pointer rounded-md border p-2 hover:bg-accent">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=120&width=200&query=soccer practice"
                          alt="Video thumbnail"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="mt-2 text-sm font-medium">Practice Session</div>
                      <div className="text-xs text-muted-foreground">May 2, 2025 • 45:15</div>
                    </div>
                    <div className="relative cursor-pointer rounded-md border p-2 hover:bg-accent">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=120&width=200&query=soccer match"
                          alt="Video thumbnail"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="mt-2 text-sm font-medium">Away Game</div>
                      <div className="text-xs text-muted-foreground">April 28, 2025 • 90:00</div>
                    </div>
                    <div className="relative cursor-pointer rounded-md border p-2 hover:bg-accent">
                      <div className="aspect-video overflow-hidden rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=120&width=200&query=soccer training"
                          alt="Video thumbnail"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="mt-2 text-sm font-medium">Training Drills</div>
                      <div className="text-xs text-muted-foreground">April 25, 2025 • 30:45</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Use Selected Video</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

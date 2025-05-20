import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, ImageIcon } from "lucide-react"
import Image from "next/image"

export function HighlightSettings() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">Highlight Settings</h3>
            <p className="text-sm text-muted-foreground">
              Customize how your highlights will be generated and presented.
            </p>
          </div>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
              <TabsTrigger value="export">Export</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="highlight-duration">Highlight Duration (per player)</Label>
                  <div className="flex items-center gap-4">
                    <Slider id="highlight-duration" defaultValue={[3]} max={10} min={1} step={0.5} className="flex-1" />
                    <span className="w-12 text-center">3 min</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Set the maximum duration for each player's highlight reel.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quality-preference">Quality Preference</Label>
                  <div className="flex items-center gap-4">
                    <Slider id="quality-preference" defaultValue={[75]} max={100} min={0} className="flex-1" />
                    <span className="w-12 text-center">75%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Balance between highlight quality and quantity. Higher values prioritize quality moments.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="slow-motion">Slow Motion Replays</Label>
                    <p className="text-xs text-muted-foreground">Add slow motion effect to key moments</p>
                  </div>
                  <Switch id="slow-motion" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-transitions">Automatic Transitions</Label>
                    <p className="text-xs text-muted-foreground">Add smooth transitions between clips</p>
                  </div>
                  <Switch id="auto-transitions" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="background-music">Background Music</Label>
                    <p className="text-xs text-muted-foreground">Add royalty-free background music</p>
                  </div>
                  <Switch id="background-music" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="branding">
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="team-logo">Team Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                      <Image
                        src="/placeholder.svg?height=64&width=64&query=soccer team logo"
                        alt="Team logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Logo
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="overlay-position">Logo Position</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm" className="h-20">
                      Top Left
                    </Button>
                    <Button variant="outline" size="sm" className="h-20">
                      Top Center
                    </Button>
                    <Button variant="outline" size="sm" className="h-20">
                      Top Right
                    </Button>
                    <Button variant="outline" size="sm" className="h-20">
                      Bottom Left
                    </Button>
                    <Button variant="outline" size="sm" className="h-20">
                      Bottom Center
                    </Button>
                    <Button variant="outline" size="sm" className="h-20 bg-accent">
                      Bottom Right
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="intro-screen">Custom Intro Screen</Label>
                  <div className="flex items-center gap-4">
                    <div className="relative aspect-video w-32 overflow-hidden rounded-md border">
                      <div className="flex h-full items-center justify-center bg-muted">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="player-name-style">Player Name Style</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="h-12">
                      Minimal
                    </Button>
                    <Button variant="outline" size="sm" className="h-12 bg-accent">
                      With Jersey Number
                    </Button>
                    <Button variant="outline" size="sm" className="h-12">
                      With Team Logo
                    </Button>
                    <Button variant="outline" size="sm" className="h-12">
                      Full Stats
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="export">
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="export-quality">Export Quality</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm" className="h-12">
                      720p
                    </Button>
                    <Button variant="outline" size="sm" className="h-12 bg-accent">
                      1080p
                    </Button>
                    <Button variant="outline" size="sm" className="h-12">
                      4K
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="export-format">Export Format</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm" className="h-12 bg-accent">
                      MP4
                    </Button>
                    <Button variant="outline" size="sm" className="h-12">
                      MOV
                    </Button>
                    <Button variant="outline" size="sm" className="h-12">
                      WebM
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="individual-files">Individual Files</Label>
                    <p className="text-xs text-muted-foreground">Export each player's highlight as a separate file</p>
                  </div>
                  <Switch id="individual-files" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="combined-file">Combined File</Label>
                    <p className="text-xs text-muted-foreground">Also create a single file with all highlights</p>
                  </div>
                  <Switch id="combined-file" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="social-media">Social Media Versions</Label>
                    <p className="text-xs text-muted-foreground">Create versions optimized for social platforms</p>
                  </div>
                  <Switch id="social-media" />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Back</Button>
            <Button className="bg-orange-500 hover:bg-orange-600">Generate Highlights</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

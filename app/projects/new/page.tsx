import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Upload, FolderOpen, Users, Settings } from "lucide-react"
import Link from "next/link"
import { NewProjectSteps } from "@/components/new-project-steps"
import { PlayerSelection } from "@/components/player-selection"
import { HighlightSettings } from "@/components/highlight-settings"

export default function NewProjectPage() {
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
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">New Highlight Project</h1>
        </div>

        <NewProjectSteps />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upload">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </TabsTrigger>
                <TabsTrigger value="players">
                  <Users className="mr-2 h-4 w-4" />
                  Players
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </TabsTrigger>
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
                          <Label htmlFor="project-title">Project Title</Label>
                          <Input id="project-title" placeholder="Enter a title for your project" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="project-description">Description (Optional)</Label>
                          <Input id="project-description" placeholder="Add a description" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="project-team">Team Name</Label>
                          <Input id="project-team" placeholder="Enter team name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="project-date">Game Date</Label>
                          <Input id="project-date" type="date" />
                        </div>
                        <div className="flex justify-end">
                          <Button className="bg-orange-500 hover:bg-orange-600">Continue to Player Selection</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="players">
                <PlayerSelection />
              </TabsContent>
              <TabsContent value="settings">
                <HighlightSettings />
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="text-lg font-medium">Project Summary</div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Project Title</div>
                    <div className="font-medium">New Project</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Team</div>
                    <div className="font-medium">Not specified</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Game Date</div>
                    <div className="font-medium">Not specified</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Selected Players</div>
                    <div className="font-medium">None selected</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Highlight Duration</div>
                    <div className="font-medium">Default (3 minutes per player)</div>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Generate Highlights</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

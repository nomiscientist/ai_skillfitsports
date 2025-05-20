import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { UserPlus, RefreshCw } from "lucide-react"
import Image from "next/image"

export function PlayerSelection() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Select Players to Highlight</h3>
              <p className="text-sm text-muted-foreground">
                Our AI has detected the following players. Select which ones you want to create highlights for.
              </p>
            </div>
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Reanalyze Video
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="select-all" />
              <Label htmlFor="select-all">Select All Players</Label>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start space-x-3 rounded-md border p-3 hover:bg-accent">
                <Checkbox id="player-1" className="mt-1" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=40&width=40&query=soccer player jersey number 10"
                        alt="Player"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Label htmlFor="player-1" className="font-medium">
                      Player #10
                    </Label>
                  </div>
                  <div className="text-xs text-muted-foreground">Detected 24 ball interactions</div>
                  <Input placeholder="Player name (optional)" className="mt-2 h-8 text-xs" />
                </div>
              </div>

              <div className="flex items-start space-x-3 rounded-md border p-3 hover:bg-accent">
                <Checkbox id="player-2" className="mt-1" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=40&width=40&query=soccer player jersey number 7"
                        alt="Player"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Label htmlFor="player-2" className="font-medium">
                      Player #7
                    </Label>
                  </div>
                  <div className="text-xs text-muted-foreground">Detected 18 ball interactions</div>
                  <Input placeholder="Player name (optional)" className="mt-2 h-8 text-xs" />
                </div>
              </div>

              <div className="flex items-start space-x-3 rounded-md border p-3 hover:bg-accent">
                <Checkbox id="player-3" className="mt-1" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=40&width=40&query=soccer player jersey number 9"
                        alt="Player"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Label htmlFor="player-3" className="font-medium">
                      Player #9
                    </Label>
                  </div>
                  <div className="text-xs text-muted-foreground">Detected 15 ball interactions</div>
                  <Input placeholder="Player name (optional)" className="mt-2 h-8 text-xs" />
                </div>
              </div>

              <div className="flex items-start space-x-3 rounded-md border p-3 hover:bg-accent">
                <Checkbox id="player-4" className="mt-1" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=40&width=40&query=soccer player jersey number 5"
                        alt="Player"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Label htmlFor="player-4" className="font-medium">
                      Player #5
                    </Label>
                  </div>
                  <div className="text-xs text-muted-foreground">Detected 12 ball interactions</div>
                  <Input placeholder="Player name (optional)" className="mt-2 h-8 text-xs" />
                </div>
              </div>

              <div className="flex items-center justify-center rounded-md border border-dashed p-3">
                <Button variant="ghost" className="h-full w-full">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Add Player Manually
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Back</Button>
            <Button className="bg-orange-500 hover:bg-orange-600">Continue to Settings</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

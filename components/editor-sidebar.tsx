import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Circle,
  HighlighterIcon as Spotlight,
  PlugIcon as Connector,
  ArrowRight,
  Square,
  Pencil,
  Type,
  ZoomIn,
} from "lucide-react"

export function EditorSidebar() {
  return (
    <div className="w-[350px] border-r border-[#1e293b] bg-[#111827] p-4">
      <Tabs defaultValue="player">
        <TabsList className="bg-[#1e293b] w-full grid grid-cols-3">
          <TabsTrigger value="player" className="data-[state=active]:bg-orange-500">
            Player
          </TabsTrigger>
          <TabsTrigger value="tactic" className="data-[state=active]:bg-orange-500">
            Tactic
          </TabsTrigger>
          <TabsTrigger value="action" className="data-[state=active]:bg-orange-500">
            Action
          </TabsTrigger>
        </TabsList>

        <TabsContent value="player" className="mt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                <Circle className="h-8 w-8 text-orange-500" />
              </Button>
              <span className="text-xs">Circle</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                <Spotlight className="h-8 w-8 text-orange-500" />
              </Button>
              <span className="text-xs">Spotlight</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                <Connector className="h-8 w-8 text-orange-500" />
              </Button>
              <span className="text-xs">Connector</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tactic" className="mt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                <ArrowRight className="h-8 w-8 text-orange-500" />
              </Button>
              <span className="text-xs">Arrow</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                <Square className="h-8 w-8 text-orange-500" />
              </Button>
              <span className="text-xs">Zone</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                <Pencil className="h-8 w-8 text-orange-500" />
              </Button>
              <span className="text-xs">Marker</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="action" className="mt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                <ZoomIn className="h-8 w-8 text-orange-500" />
              </Button>
              <span className="text-xs">Zoom In</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Button variant="outline" className="w-16 h-16 rounded-md border-[#334155] hover:bg-[#1e293b]">
                <Type className="h-8 w-8 text-orange-500" />
              </Button>
              <span className="text-xs">Text</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

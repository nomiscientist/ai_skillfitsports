import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PlayerStats() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Performance Summary</CardTitle>
          <CardDescription>Stats from U16 Championship Game</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Goals</div>
              <div className="text-2xl font-bold">1</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Assists</div>
              <div className="text-2xl font-bold">2</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Shots</div>
              <div className="text-2xl font-bold">5</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Passes</div>
              <div className="text-2xl font-bold">42</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Pass Accuracy</div>
              <div className="text-2xl font-bold">87%</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Minutes Played</div>
              <div className="text-2xl font-bold">90</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Ball Interactions</CardTitle>
          <CardDescription>Total interactions with the ball</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Offensive Third</div>
                <div className="text-sm font-medium">12</div>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-full w-[60%] rounded-full bg-orange-500"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Middle Third</div>
                <div className="text-sm font-medium">18</div>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-full w-[90%] rounded-full bg-orange-500"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Defensive Third</div>
                <div className="text-sm font-medium">6</div>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-full w-[30%] rounded-full bg-orange-500"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

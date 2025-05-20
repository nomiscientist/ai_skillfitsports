import { Upload, UserSearch, Scissors, Share2, Zap, Shield, Users, Palette } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 dark:bg-orange-900/20 px-3 py-1 text-sm text-orange-600 dark:text-orange-400">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything You Need for Professional Highlights
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform makes it easy to create, customize, and share player-focused highlights.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                <Upload className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Easy Upload</h3>
                <p className="text-muted-foreground">Drag and drop raw game footage in any common video format.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                <UserSearch className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Player Detection</h3>
                <p className="text-muted-foreground">
                  AI automatically identifies and tracks individual players throughout the game.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                <Scissors className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Automatic Highlights</h3>
                <p className="text-muted-foreground">
                  Generate highlights that focus on a specific player's interactions with the ball.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                <Share2 className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Easy Sharing</h3>
                <p className="text-muted-foreground">
                  Share highlights directly to social media or download for offline use.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                <Zap className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Fast Processing</h3>
                <p className="text-muted-foreground">
                  Get your highlights in minutes, not hours, thanks to our optimized processing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                <Shield className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Secure Storage</h3>
                <p className="text-muted-foreground">
                  All your footage and highlights are securely stored and accessible anytime.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                <Users className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Team Management</h3>
                <p className="text-muted-foreground">
                  Organize players by team and season for easy highlight generation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                <Palette className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Customization</h3>
                <p className="text-muted-foreground">
                  Add team logos, player names, and custom graphics to your highlights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

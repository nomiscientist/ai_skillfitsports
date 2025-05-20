import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function HowItWorksSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 dark:bg-orange-900/20 px-3 py-1 text-sm text-orange-600 dark:text-orange-400">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              From Raw Footage to Professional Highlights in 3 Steps
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform makes it easy to create player-focused highlights with minimal effort.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">1</div>
                Upload
              </CardTitle>
              <CardDescription>Upload your raw game footage</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Simply drag and drop your video files or select them from your device. We support all common video
                formats.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">2</div>
                Select
              </CardTitle>
              <CardDescription>Choose the player to highlight</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Select the player you want to focus on from our AI-detected list or manually identify them in the
                footage.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">3</div>
                Generate
              </CardTitle>
              <CardDescription>Create and customize highlights</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our AI automatically generates highlights of the selected player's interactions with the ball. Add
                custom branding if desired.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Try It Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

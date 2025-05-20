import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Spotlight Your Players' Best Moments
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Upload raw soccer footage and automatically generate professional-quality highlights focused on
                individual players.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Get Started
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/soccer-highlight-analytics.png"
              width={700}
              height={500}
              alt="Soccer player highlight reel"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function HeroSection() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="flex h-full">
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            BrajBuzz Tech
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            BrajBuzz Tech: Your money, your choice, our honest opinion. We test tech the way you actually use it—in your hands, in real life, not in some sterile lab. We compare, we question, we dig deep. No fluff, no bias, just pure facts that help you decide what's truly worth your investment.
          </p>
        </div>
        <div className="flex-1 relative">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </Card>
  )
}
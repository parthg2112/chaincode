"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Leaf, Sprout } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface HeroSectionProps {
  className?: string
  onTrack?: () => void
  onLogin?: () => void
  headline?: string
  subcopy?: string
  layout?: "compact" | "comfortable"
}

const floatingLeaves = [
  { x: "-5%", y: 40, size: 16, delay: 0 },
  { x: "10%", y: 60, size: 18, delay: 0.6 },
  { x: "25%", y: 30, size: 14, delay: 0.2 },
  { x: "40%", y: 70, size: 20, delay: 1.2 },
  { x: "55%", y: 45, size: 16, delay: 0.9 },
  { x: "70%", y: 65, size: 18, delay: 0.3 },
  { x: "85%", y: 35, size: 14, delay: 1.5 },
  { x: "95%", y: 55, size: 16, delay: 0.75 },
]

export default function HeroSection({
  className,
  onTrack,
  onLogin,
  headline = "Trace the Journey of Your Herbs",
  subcopy = "A blockchain-powered traceability system connecting collectors, manufacturers, and certifiers — delivering transparent provenance from harvest to shelf.",
  layout = "comfortable",
}: HeroSectionProps) {
  const paddingY = layout === "compact" ? "py-16 sm:py-20" : "py-20 sm:py-28 md:py-32"

  return (
    <section
      aria-label="Hero"
      className={cn(
        "relative w-full overflow-hidden rounded-[calc(var(--radius)+0px)] bg-background",
        // Gradient backdrop
        "bg-gradient-to-b from-background via-secondary/40 to-background",
        className
      )}
    >
      {/* Subtle radial highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-160px] right-1/3 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      {/* Floating leaves layer */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {floatingLeaves.map((leaf, i) => (
          <motion.div
            key={i}
            className="absolute text-foreground/30"
            style={{ left: leaf.x as React.CSSProperties["left"] }}
            initial={{ y: `${leaf.y}%`, opacity: 0 }}
            animate={{
              y: [`${leaf.y - 6}%`, `${leaf.y + 6}%`],
              rotate: [-6, 6],
              opacity: [0.0, 0.25, 0.0],
            }}
            transition={{
              duration: 10 + (i % 4),
              delay: leaf.delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="relative"
              animate={{ x: [-4, 4] }}
              transition={{
                duration: 6 + (i % 3),
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <Leaf
                aria-hidden="true"
                className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
                width={leaf.size}
                height={leaf.size}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className={cn("relative mx-auto w-full max-w-3xl px-6", paddingY)}>
        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur">
          <Sprout className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          <span className="tracking-wide">Blockchain Traceability</span>
        </div>

        {/* Heading */}
        <h1
          className={cn(
            "font-heading",
            "text-4xl sm:text-5xl md:text-6xl",
            "leading-[1.1] tracking-[-0.02em] text-foreground"
          )}
        >
          {headline}
        </h1>

        {/* Subcopy */}
        <p className="mt-5 max-w-2xl text-balance text-base sm:text-lg md:text-xl text-white/80">
          {subcopy}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            onClick={onTrack}
            className={cn(
              "group relative",
              // Glassmorphism primary
              "bg-white/10 hover:bg-white/15 active:bg-white/20",
              "text-foreground",
              "border border-white/15 hover:border-white/20",
              "backdrop-blur supports-[backdrop-filter]:backdrop-blur",
              "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)]",
              "px-5 sm:px-6 py-5 h-auto",
              "rounded-[calc(var(--radius)+2px)]"
            )}
          >
            <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/10 to-transparent opacity-60" />
            <span className="relative z-[1] inline-flex items-center gap-2 text-sm sm:text-base font-semibold">
              <Leaf className="h-4 w-4 text-accent" aria-hidden="true" />
              Track a Product
            </span>
          </Button>

          <Button
            onClick={onLogin}
            variant="ghost"
            className={cn(
              "relative",
              // Secondary glass
              "bg-white/[0.06] hover:bg-white/[0.1] active:bg-white/[0.14]",
              "text-white/90 hover:text-white",
              "border border-white/10 hover:border-white/15",
              "backdrop-blur supports-[backdrop-filter]:backdrop-blur",
              "px-5 sm:px-6 py-5 h-auto",
              "rounded-[calc(var(--radius)+2px)]"
            )}
          >
            <span className="relative z-[1] inline-flex items-center gap-2 text-sm sm:text-base font-medium">
              Login as Collector | Manufacturer | Certifier
            </span>
          </Button>
        </div>

        {/* Fine print accessibility note for screen readers only, maintains clarity */}
        <span className="sr-only">
          Use the Track a Product button to begin tracking, or login if you are a collector, manufacturer, or certifier.
        </span>
      </div>
    </section>
  )
}
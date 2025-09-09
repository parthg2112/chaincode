import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InformationSections from "@/components/InformationSections";

export default function Page() {
  const navItems = [
    { label: "Collector", href: "/collector" },
    { label: "Manufacturer", href: "/manufacturer" },
    { label: "Certifier", href: "/certifier" },
    { label: "Lookup", href: "/lookup" },
    { label: "Admin", href: "/admin" },
    { label: "Features", href: "#benefits_heading" },
    { label: "How it works", href: "#how_heading" },
    { label: "Concepts", href: "#concepts_heading" },
    { label: "Docs", href: "/docs" },
  ];

  return (
    <div className="relative min-h-dvh w-full bg-background text-foreground">
      {/* Subtle global background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        <div className="absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-[-180px] right-1/4 h-[460px] w-[460px] rounded-full bg-accent/5 blur-[120px]" />

        {/* Floating leaves layer */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Leaf 1 */}
          <svg
            className="leaf-anim leaf-bob absolute left-[-12%] opacity-20"
            style={{ top: "12%", ['--leaf-dur' as any]: "28s", ['--leaf-bob-dur' as any]: "6s" }}
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M3 12c6-10 12-10 18 0-6 8-12 8-18 0Z" fill="currentColor" className="text-primary" />
          </svg>
          {/* Leaf 2 */}
          <svg
            className="leaf-anim leaf-bob absolute left-[-14%] opacity-15"
            style={{ top: "32%", ['--leaf-dur' as any]: "34s", ['--leaf-bob-dur' as any]: "7s" }}
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M3 12c6-10 12-10 18 0-6 8-12 8-18 0Z" fill="currentColor" className="text-primary" />
          </svg>
          {/* Leaf 3 */}
          <svg
            className="leaf-anim leaf-bob absolute left-[-16%] opacity-10"
            style={{ top: "58%", ['--leaf-dur' as any]: "26s", ['--leaf-bob-dur' as any]: "5s" }}
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M3 12c6-10 12-10 18 0-6 8-12 8-18 0Z" fill="currentColor" className="text-accent" />
          </svg>
          {/* Leaf 4 */}
          <svg
            className="leaf-anim leaf-bob absolute left-[-18%] opacity-20"
            style={{ top: "72%", ['--leaf-dur' as any]: "40s", ['--leaf-bob-dur' as any]: "8s" }}
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M3 12c6-10 12-10 18 0-6 8-12 8-18 0Z" fill="currentColor" className="text-primary" />
          </svg>
          {/* Leaf 5 */}
          <svg
            className="leaf-anim leaf-bob absolute left-[-12%] opacity-10"
            style={{ top: "85%", ['--leaf-dur' as any]: "32s", ['--leaf-bob-dur' as any]: "6s" }}
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M3 12c6-10 12-10 18 0-6 8-12 8-18 0Z" fill="currentColor" className="text-accent" />
          </svg>
          {/* Leaf 6 */}
          <svg
            className="leaf-anim leaf-bob absolute left-[-20%] opacity-15"
            style={{ top: "8%", ['--leaf-dur' as any]: "50s", ['--leaf-bob-dur' as any]: "10s" }}
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M3 12c6-10 12-10 18 0-6 8-12 8-18 0Z" fill="currentColor" className="text-primary" />
          </svg>
        </div>
      </div>

      {/* <header className="relative z-10 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Navigation
            items={navItems}
            cta={{ label: "Get started", href: "#benefits_heading" }}
            logoHref="/"
            logoLabel="TraceLeaf"
          />
        </div>
      </header> */}

      <main className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <HeroSection className="mt-4 sm:mt-6" />

          <section aria-label="Information" className="mt-10 sm:mt-14 md:mt-16">
            <InformationSections />
          </section>
        </div>
      </main>

      <footer className="relative z-10 mt-16 sm:mt-20 md:mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:p-5 backdrop-blur">
            <p className="text-xs sm:text-sm text-white/60">
              © {new Date().getFullYear()} TraceLeaf. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs sm:text-sm text-white/60">
              <span>Privacy</span>
              <span className="h-3 w-px bg-white/15" aria-hidden="true" />
              <span>Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
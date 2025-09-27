"use client";

import * as React from "react";
import { Blocks, WalletMinimal, Frame, Dot, PanelTop } from "lucide-react";

export interface InformationSectionsProps {
  className?: string;
  style?: React.CSSProperties;
  layout?: "compact" | "comfortable";
}

function GlassCard({
  children,
  className,
  role,
  ariaLabelledBy,
}: {
  children: React.ReactNode;
  className?: string;
  role?: string;
  ariaLabelledBy?: string;
}) {
  return (
    <section
      role={role}
      aria-labelledby={ariaLabelledBy}
      className={[
        "relative w-full max-w-full rounded-[var(--radius)]",
        "bg-card/80 backdrop-blur-xl",
        "border border-white/5 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_0_0_1px_rgba(255,255,255,0.02)]",
        "outline-none transition-all",
        "hover:shadow-[0_10px_40px_-12px_rgba(155,140,255,0.25)] hover:border-[color:var(--color-ring)]/30",
        "focus-within:border-[color:var(--color-ring)]/50",
        "p-6 sm:p-8",
        className || "",
      ].join(" ")}
    >
      {/* subtle gradient sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[var(--radius)]"
        style={{
          background:
            "radial-gradient(1200px 300px at 10% -10%, rgba(155,140,255,0.08), transparent 40%), radial-gradient(800px 300px at 110% 0%, rgba(255,232,155,0.06), transparent 35%)",
        }}
      />
      {/* hairline top highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[var(--radius)]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

function SectionHeader({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-6 sm:mb-8">
      {eyebrow ? (
        <p className="mb-2 text-xs sm:text-sm tracking-widest uppercase text-[color:var(--muted-foreground)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-heading text-xl sm:text-2xl md:text-3xl leading-tight tracking-tight text-foreground"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm sm:text-base text-[color:var(--muted-foreground)] max-w-prose">
          {description}
        </p>
      ) : null}
    </header>
  );
}

function IconBadge({
  children,
  tone = "primary",
  label,
}: {
  children: React.ReactNode;
  tone?: "primary" | "accent";
  label?: string;
}) {
  const toneClass =
    tone === "accent"
      ? "bg-[color:var(--accent)]/10 text-[color:var(--accent)]"
      : "bg-[color:var(--primary)]/10 text-[color:var(--primary)]";
  return (
    <span
      aria-label={label}
      className={[
        "inline-flex size-9 items-center justify-center rounded-full",
        "ring-1 ring-inset ring-white/10",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]",
        toneClass,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

export default function InformationSections({
  className,
  style,
  layout = "comfortable",
}: InformationSectionsProps) {
  const dense = layout === "compact";
  return (
    <div
      className={[
        "w-full max-w-full min-w-0",
        "flex flex-col gap-6 sm:gap-8",
        className || "",
      ].join(" ")}
      style={style}
    >
      {/* Section 1: Benefits */}
      <GlassCard role="region" ariaLabelledBy="benefits_heading" className={dense ? "p-5 sm:p-6" : ""}>
        <SectionHeader
          id="benefits_heading"
          eyebrow="Traceability"
          title="Clear provenance. Confident decisions."
          description="Minimal, verifiable signals that build trust across your supply chain."
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <li className="group flex items-start gap-3 sm:gap-4 min-w-0">
            <IconBadge label="Immutable records">
              <Blocks className="size-4" aria-hidden="true" />
            </IconBadge>
            <div className="min-w-0">
              <p className="font-medium text-foreground text-sm sm:text-base truncate">Immutable records</p>
              <p className="text-[color:var(--muted-foreground)] text-xs sm:text-sm">
                Every event is time-stamped and tamper-evident.
              </p>
            </div>
          </li>
          <li className="group flex items-start gap-3 sm:gap-4 min-w-0">
            <IconBadge tone="accent" label="End-to-end visibility">
              <Frame className="size-4" aria-hidden="true" />
            </IconBadge>
            <div className="min-w-0">
              <p className="font-medium text-foreground text-sm sm:text-base truncate">End‑to‑end visibility</p>
              <p className="text-[color:var(--muted-foreground)] text-xs sm:text-sm">
                See the journey from origin to shelf in one line.
              </p>
            </div>
          </li>
          <li className="group flex items-start gap-3 sm:gap-4 min-w-0">
            <IconBadge label="Authenticity">
              <PanelTop className="size-4" aria-hidden="true" />
            </IconBadge>
            <div className="min-w-0">
              <p className="font-medium text-foreground text-sm sm:text-base truncate">Authenticity at a glance</p>
              <p className="text-[color:var(--muted-foreground)] text-xs sm:text-sm">
                Cryptographic proofs verify source and handling.
              </p>
            </div>
          </li>
          <li className="group flex items-start gap-3 sm:gap-4 min-w-0">
            <IconBadge tone="accent" label="Real-time trust">
              <WalletMinimal className="size-4" aria-hidden="true" />
            </IconBadge>
            <div className="min-w-0">
              <p className="font-medium text-foreground text-sm sm:text-base truncate">Real‑time trust</p>
              <p className="text-[color:var(--muted-foreground)] text-xs sm:text-sm">
                Live updates reduce disputes and delays.
              </p>
            </div>
          </li>
        </ul>
      </GlassCard>

      {/* Section 2: How it works timeline */}
      <GlassCard role="region" ariaLabelledBy="how_heading" className={dense ? "p-5 sm:p-6" : ""}>
        <SectionHeader
          id="how_heading"
          eyebrow="How it works"
          title="A simple chain of proof."
          description="Four lightweight steps that connect the dots."
        />

        <div className="min-w-0">
          <ol
            className={[
              "relative w-full max-w-full",
              "flex flex-col md:flex-row items-stretch md:items-center",
              "gap-6 md:gap-8",
            ].join(" ")}
          >
            {/* Step 1 */}
            <li className="relative min-w-0 flex-1">
              <div className="flex items-start md:items-center gap-3 md:flex-col md:items-stretch">
                <div className="flex items-center gap-3 md:gap-2">
                  <IconBadge label="Capture">
                    <Frame className="size-4" aria-hidden="true" />
                  </IconBadge>
                  <div className="block md:hidden h-px flex-1 bg-white/10" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-medium text-foreground truncate">Capture</p>
                  <p className="text-xs sm:text-sm text-[color:var(--muted-foreground)]">
                    Scan item, attach geo + timestamp.
                  </p>
                </div>
              </div>
            </li>

            {/* Connector (responsive) */}
            <li className="hidden md:block self-center" aria-hidden="true">
              <div className="w-24 h-px bg-white/10" />
            </li>

            {/* Step 2 */}
            <li className="relative min-w-0 flex-1">
              <div className="flex items-start md:items-center gap-3 md:flex-col md:items-stretch">
                <div className="flex items-center gap-3 md:gap-2">
                  <IconBadge tone="accent" label="Encrypt">
                    <PanelTop className="size-4" aria-hidden="true" />
                  </IconBadge>
                  <div className="block md:hidden h-px flex-1 bg-white/10" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-medium text-foreground truncate">Encrypt</p>
                  <p className="text-xs sm:text-sm text-[color:var(--muted-foreground)]">
                    Hash data; prepare proof.
                  </p>
                </div>
              </div>
            </li>

            <li className="hidden md:block self-center" aria-hidden="true">
              <div className="w-24 h-px bg-white/10" />
            </li>

            {/* Step 3 */}
            <li className="relative min-w-0 flex-1">
              <div className="flex items-start md:items-center gap-3 md:flex-col md:items-stretch">
                <div className="flex items-center gap-3 md:gap-2">
                  <IconBadge label="Anchor">
                    <Blocks className="size-4" aria-hidden="true" />
                  </IconBadge>
                  <div className="block md:hidden h-px flex-1 bg-white/10" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-medium text-foreground truncate">Anchor</p>
                  <p className="text-xs sm:text-sm text-[color:var(--muted-foreground)]">
                    Commit proof to chain.
                  </p>
                </div>
              </div>
            </li>

            <li className="hidden md:block self-center" aria-hidden="true">
              <div className="w-24 h-px bg-white/10" />
            </li>

            {/* Step 4 */}
            <li className="relative min-w-0 flex-1">
              <div className="flex items-start md:items-center gap-3 md:flex-col md:items-stretch">
                <div className="flex items-center gap-3 md:gap-2">
                  <IconBadge tone="accent" label="Verify">
                    <WalletMinimal className="size-4" aria-hidden="true" />
                  </IconBadge>
                </div>
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-medium text-foreground truncate">Verify</p>
                  <p className="text-xs sm:text-sm text-[color:var(--muted-foreground)]">
                    Check proof anywhere, instantly.
                  </p>
                </div>
              </div>
            </li>
          </ol>

          {/* dotted baseline for motion feel */}
          <div className="mt-6 flex items-center gap-1 text-[color:var(--muted-foreground)]" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <Dot key={i} className="size-4 opacity-50" />
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Section 3: Concepts */}
      <GlassCard role="region" ariaLabelledBy="concepts_heading" className={dense ? "p-5 sm:p-6" : ""}>
        <SectionHeader
          id="concepts_heading"
          eyebrow="Concepts"
          title="Blockchain + geo‑tagging, simply."
          description="Two ideas, working together to make data trustworthy."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <article className="min-w-0">
            <div className="flex items-start gap-3">
              <IconBadge label="Blockchain">
                <Blocks className="size-4" aria-hidden="true" />
              </IconBadge>
              <h3 className="font-heading text-base sm:text-lg leading-tight">Blockchain</h3>
            </div>
            <p className="mt-3 text-sm sm:text-base text-[color:var(--muted-foreground)] break-words">
              A shared ledger. Entries are linked so changing one breaks the chain. That&apos;s why records are
              tamper‑evident.
            </p>
          </article>

          <article className="min-w-0">
            <div className="flex items-start gap-3">
              <IconBadge tone="accent" label="Geo‑tagging">
                <Frame className="size-4" aria-hidden="true" />
              </IconBadge>
              <h3 className="font-heading text-base sm:text-lg leading-tight">Geo‑tagging</h3>
            </div>
            <p className="mt-3 text-sm sm:text-base text-[color:var(--muted-foreground)] break-words">
              Each event is stamped with location + time. Together, they form a verifiable trail of where and when
              things happened.
            </p>
          </article>
        </div>
      </GlassCard>
    </div>
  );
}
"use client";

import * as React from "react";
import Link from "next/link";
import { Framer, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type NavItem = {
  label: string;
  href?: string;
  ariaLabel?: string;
};

export interface NavigationProps {
  className?: string;
  items?: NavItem[];
  cta?: { label: string; href?: string; ariaLabel?: string };
  onItemSelect?: (item: NavItem) => void;
  onCTAClick?: () => void;
  logoHref?: string;
  logoLabel?: string;
}

export default function Navigation({
  className,
  items = [
    { label: "Features" },
    { label: "How it works" },
    { label: "Solutions" },
    { label: "Docs" },
  ],
  cta = { label: "Get started" },
  onItemSelect,
  onCTAClick,
  logoHref = "/",
  logoLabel = "TraceLeaf",
}: NavigationProps) {
  const [open, setOpen] = React.useState(false);

  const handleItem = (item: NavItem) => {
    if (onItemSelect) onItemSelect(item);
    setOpen(false);
  };

  return (
    <nav
      aria-label="Primary"
      className={[
        "w-full max-w-full",
        className || "",
      ].join(" ")}
    >
      <div
        className={[
          // Glass surface
          "relative flex items-center justify-between",
          "rounded-xl border border-border/80",
          "bg-secondary/60 supports-[backdrop-filter]:bg-secondary/50",
          "backdrop-blur-md",
          // Spacing
          "px-3 py-2 sm:px-4 sm:py-2.5",
        ].join(" ")}
      >
        {/* Brand */}
        <div className="flex items-center gap-2 min-w-0">
          {logoHref ? (
            <Link
              href={logoHref}
              aria-label={logoLabel}
              className="group inline-flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                className={[
                  "inline-flex size-8 items-center justify-center rounded-lg",
                  "bg-card/70 border border-border/60",
                  "shadow-sm",
                ].join(" ")}
                aria-hidden="true"
              >
                <Framer className="h-4 w-4 text-foreground/80" />
              </span>
              <span className="font-heading text-sm sm:text-base font-semibold tracking-tight text-foreground group-hover:opacity-90 transition-opacity truncate">
                {logoLabel}
              </span>
            </Link>
          ) : (
            <div className="inline-flex items-center gap-2">
              <span
                className={[
                  "inline-flex size-8 items-center justify-center rounded-lg",
                  "bg-card/70 border border-border/60",
                ].join(" ")}
                aria-hidden="true"
              >
                <Framer className="h-4 w-4 text-foreground/80" />
              </span>
              <span className="font-heading text-sm sm:text-base font-semibold tracking-tight text-foreground truncate">
                {logoLabel}
              </span>
            </div>
          )}
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    aria-label={item.ariaLabel || item.label}
                    className={[
                      "relative inline-flex items-center rounded-md px-3 py-2 text-sm text-foreground/80",
                      "hover:text-foreground transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      "min-w-0",
                    ].join(" ")}
                  >
                    <span className="truncate">{item.label}</span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleItem(item)}
                    aria-label={item.ariaLabel || item.label}
                    className={[
                      "group relative inline-flex items-center rounded-md px-3 py-2 text-sm text-foreground/80",
                      "hover:text-foreground transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      "min-w-0",
                    ].join(" ")}
                  >
                    <span className="truncate">{item.label}</span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="mx-2 h-5 w-px bg-border/70" aria-hidden="true" />

          {cta ? (
            cta.href ? (
              <Link href={cta.href} aria-label={cta.ariaLabel || cta.label}>
                <Button
                  size="sm"
                  className={[
                    "rounded-lg",
                    "bg-primary text-primary-foreground hover:opacity-90",
                  ].join(" ")}
                >
                  {cta.label}
                </Button>
              </Link>
            ) : (
              <Button
                size="sm"
                className={[
                  "rounded-lg",
                  "bg-primary text-primary-foreground hover:opacity-90",
                ].join(" ")}
                onClick={onCTAClick}
                aria-label={cta.ariaLabel || cta.label}
              >
                {cta.label}
              </Button>
            )
          ) : null}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={[
                  "rounded-lg",
                  "bg-card/60 hover:bg-card/80",
                  "border border-border/60",
                ].join(" ")}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 text-foreground/80" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={[
                "bg-secondary/80 backdrop-blur-md",
                "border-l border-border",
                "w-[88vw] sm:w-[360px] p-0",
              ].join(" ")}
            >
              <SheetHeader className="px-4 pb-2 pt-4">
                <SheetTitle className="flex items-center gap-2 text-foreground">
                  <span
                    className={[
                      "inline-flex size-8 items-center justify-center rounded-lg",
                      "bg-card/70 border border-border/60",
                    ].join(" ")}
                  >
                    <Framer className="h-4 w-4 text-foreground/80" />
                  </span>
                  <span className="font-heading text-base">{logoLabel}</span>
                </SheetTitle>
              </SheetHeader>

              <Separator className="bg-border/70" />

              <div className="px-2 py-2">
                <ul className="flex flex-col">
                  {items.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            aria-label={item.ariaLabel || item.label}
                            className={[
                              "flex items-center justify-between",
                              "rounded-lg px-3 py-2.5",
                              "text-sm text-foreground/90 hover:bg-muted/60",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            ].join(" ")}
                          >
                            <span className="truncate">{item.label}</span>
                          </Link>
                        </SheetClose>
                      ) : (
                        <SheetClose asChild>
                          <button
                            type="button"
                            onClick={() => handleItem(item)}
                            aria-label={item.ariaLabel || item.label}
                            className={[
                              "flex w-full items-center justify-between",
                              "rounded-lg px-3 py-2.5",
                              "text-left text-sm text-foreground/90 hover:bg-muted/60",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            ].join(" ")}
                          >
                            <span className="truncate">{item.label}</span>
                          </button>
                        </SheetClose>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto px-4 pb-4">
                {cta ? (
                  cta.href ? (
                    <SheetClose asChild>
                      <Link href={cta.href} aria-label={cta.ariaLabel || cta.label}>
                        <Button className="w-full rounded-lg bg-primary text-primary-foreground hover:opacity-90">
                          {cta.label}
                        </Button>
                      </Link>
                    </SheetClose>
                  ) : (
                    <SheetClose asChild>
                      <Button
                        className="w-full rounded-lg bg-primary text-primary-foreground hover:opacity-90"
                        onClick={onCTAClick}
                        aria-label={cta.ariaLabel || cta.label}
                      >
                        {cta.label}
                      </Button>
                    </SheetClose>
                  )
                ) : null}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
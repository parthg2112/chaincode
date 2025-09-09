import type { Metadata } from "next";
import "./globals.css";
// import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Navigation from "@/components/Navigation";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chainmasters",
  description: "Trace Herbs Faster, Better.",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Navigation
            items={navItems}
            cta={{ label: "Get started", href: "#benefits_heading" }}
            logoHref="/"
            logoLabel="TraceLeaf"
          />
        </div>
        {children}
        {/* <VisualEditsMessenger /> */}
      </body>
    </html>
  );
}

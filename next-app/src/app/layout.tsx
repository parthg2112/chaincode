// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
// import { AuthProvider } from "@/components/auth-provider";

export const metadata: Metadata = {
  title: "DoHerbTrace",
  description: "Blockchain-powered transparency for Ayurvedic herbs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        {/* <AuthProvider> */}
          <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <Footer />
          </div>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}


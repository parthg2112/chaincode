
          
// src/app/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";

export default function LandingPage() {
  const [language, setLanguage] = useState("English");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="bg-green-600 px-3 py-1 rounded-full font-semibold">
            DoHerbTrace
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-400">Made for Ayurveda supply chains</p>
          <div className="flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-md">
            <Globe size={16} />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-white text-sm focus:outline-none"
            >
              <option>English</option>
              <option>हिन्दी</option>
              <option>ગુજરાતી</option>
            </select>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 px-12 py-16 gap-16">
        {/* Left side */}
        <div className="flex flex-col gap-6 max-w-lg">
          <h1 className="text-5xl font-bold leading-tight">
            Trace the Journey of Your Herbs
          </h1>
          <p className="text-gray-400">
            From farm to you: Transparent, blockchain-powered traceability for
            Ayurvedic herbs.
          </p>

          <div className="flex gap-3">
            <Button className="bg-green-600 hover:bg-green-700">
              Track a Product
            </Button>
            <Button variant="secondary" className="bg-gray-800 hover:bg-gray-700">
              Login as Collector | Manufacturer | Certifier
            </Button>
          </div>

          <div className="flex gap-3 mt-4">
            {["Benefits of traceability", "How it works", "Blockchain + geo-tagging"].map(
              (item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-md bg-gray-900 text-sm cursor-pointer hover:bg-gray-800"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 flex items-center justify-center relative">
          <Card className="bg-gradient-to-b from-green-900/20 to-green-600/10 w-[400px] h-[400px] rounded-2xl flex flex-col items-center justify-center text-center relative shadow-lg">
            <div className="absolute top-4 right-4 bg-gray-900 px-3 py-1 text-sm rounded-full">
              Atmosphere: Sunny
            </div>
            <div className="absolute bottom-10 right-4 bg-gray-900 px-3 py-1 text-sm rounded-full">
              Size: Small
            </div>
            <div className="absolute top-1/2 -left-14 bg-gray-900 px-3 py-1 text-sm rounded-full">
              Humidity: 10%
            </div>
            <div className="absolute top-1/3 -right-16 bg-gray-900 px-3 py-1 text-sm rounded-full">
              Water Level: 450ml
            </div>

            <div className="flex flex-col items-center">
              <span className="text-green-500 text-4xl">🌱</span>
              <h3 className="text-2xl mt-4">Ashwagandha</h3>
              <p className="text-gray-500 text-sm">
                (Replace with 3D/PNG plant art later)
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Roles Section */}
      <section className="grid grid-cols-4 gap-6 px-12 py-12">
        {[
          {
            title: "Collector",
            desc: "Upload collection data & geo-tag locations.",
          },
          {
            title: "Manufacturer",
            desc: "Create batches, add processing & lab reports.",
          },
          {
            title: "Certifier",
            desc: "Verify submissions and view blockchain logs.",
          },
          {
            title: "Consumer",
            desc: "Scan/enter code and trace product journey.",
          },
        ].map((role, i) => (
          <Card
            key={i}
            className="bg-gray-900 p-6 rounded-2xl hover:bg-gray-800 transition cursor-pointer"
          >
            <h4 className="text-xl font-semibold mb-2">{role.title}</h4>
            <p className="text-gray-400 text-sm">{role.desc}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}

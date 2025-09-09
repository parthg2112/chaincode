"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CustomerDashboard() {
  return (
    <main className="min-h-screen bg-black text-white px-12 py-8">
      <h2 className="text-2xl font-bold mb-6">Consumer / Public Lookup</h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Input */}
        <Card className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-xl mb-4">Enter Product Code or Scan QR</h3>
          <div className="flex gap-2">
            <input type="text" placeholder="e.g., PRD-AB123" className="bg-gray-800 px-3 py-2 rounded-md flex-1"/>
            <Button className="bg-green-600">Track</Button>
          </div>
        </Card>

        {/* Farmer Info */}
        <Card className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-xl mb-4">Meet the Farmer</h3>
          <p className="text-lg font-semibold">Suman Rao • Nashik, Maharashtra</p>
          <p className="text-gray-400 text-sm mt-2">
            Sustainable collector of Ashwagandha since 2016.
          </p>
          <p className="text-xs text-gray-500 mt-4">(Load real profiles from API later)</p>
        </Card>
      </div>
    </main>
  );
}

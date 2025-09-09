"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FarmerDashboard() {
  return (
    <main className="min-h-screen bg-black text-white px-12 py-8">
      <h2 className="text-2xl font-bold mb-6">Collector / Farmer</h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Upload Form */}
        <Card className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-xl mb-4">Upload Collection Data</h3>
          <form className="flex flex-col gap-4">
            <select className="bg-gray-800 rounded-md px-3 py-2">
              <option>Ashwagandha</option>
              <option>Tulsi</option>
              <option>Neem</option>
            </select>
            <input type="number" placeholder="Quantity (kg)" className="bg-gray-800 px-3 py-2 rounded-md"/>
            <div className="flex gap-2">
              <input type="text" placeholder="lat, lng" className="bg-gray-800 px-3 py-2 rounded-md flex-1"/>
              <Button className="bg-green-600">Detect</Button>
            </div>
            <input type="datetime-local" className="bg-gray-800 px-3 py-2 rounded-md"/>
            <input type="file" className="bg-gray-800 px-3 py-2 rounded-md"/>
            <input type="file" className="bg-gray-800 px-3 py-2 rounded-md" placeholder="ID Proof"/>
            <Button className="bg-green-600">Submit to Blockchain</Button>
          </form>
        </Card>

        {/* History */}
        <Card className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-xl mb-4">My Collections History</h3>
          <ul className="flex flex-col gap-3">
            {[
              { herb: "Ashwagandha", qty: "11 kg", gps: "19.1234, 72.1876", date: "2025-09-09" },
              { herb: "Ashwagandha", qty: "12 kg", gps: "19.2234, 72.2876", date: "2025-09-09" },
              { herb: "Ashwagandha", qty: "13 kg", gps: "19.3234, 72.3876", date: "2025-09-09" },
            ].map((item, i) => (
              <li key={i} className="bg-gray-800 p-3 rounded-md flex justify-between">
                <div>
                  <p>{item.herb} • {item.qty}</p>
                  <p className="text-xs text-gray-400">GPS: {item.gps} • {item.date}</p>
                </div>
                <span className="bg-green-600 text-xs px-2 py-1 rounded-full">Verified</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  );
}

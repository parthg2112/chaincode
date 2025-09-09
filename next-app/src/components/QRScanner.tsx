"use client";

import { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function QRScanner({ onScan }: { onScan: (data: string) => void }) {
  const [error, setError] = useState("");

  return (
    <div className="p-4 border rounded-xl bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">Scan Herb QR Code</h2>
      <QrReader
        onResult={(result, err) => {
          if (!!result) {
            onScan(result.getText());
          }
          if (!!err) {
            setError("Scanning...");
          }
        }}
        constraints={{ facingMode: "environment" }}
        style={{ width: "100%" }}
      />
      {error && <p className="text-sm text-gray-500">{error}</p>}
    </div>
  );
}

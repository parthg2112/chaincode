import QRCode from "qrcode";

// Generate QR code (returns base64 image URL)
export async function generateQRCode(data: string): Promise<string> {
  try {
    return await QRCode.toDataURL(data);
  } catch (err) {
    console.error("QR code generation failed", err);
    throw err;
  }
}

// Parse QR data (here it’s just plain JSON/string for simplicity)
export function parseQRCode(qrData: string): any {
  try {
    return JSON.parse(qrData);
  } catch {
    return qrData; // fallback if not JSON
  }
}

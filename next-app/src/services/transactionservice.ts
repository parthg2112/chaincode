const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getTransactions(batchId: string) {
  const res = await fetch(`${API_URL}/transactions/${batchId}`);
  if (!res.ok) throw new Error("Failed to fetch transactions");
  return res.json();
}

export async function recordTransaction(data: {
  batchId: string;
  actor: string;
  action: string;
}) {
  const res = await fetch(`${API_URL}/transactions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to record transaction");
  return res.json();
}

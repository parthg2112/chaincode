const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getAllBatches() {
  const res = await fetch(`${API_URL}/batches`);
  if (!res.ok) throw new Error("Failed to fetch batches");
  return res.json();
}

export async function getBatchById(id: string) {
  const res = await fetch(`${API_URL}/batches/${id}`);
  if (!res.ok) throw new Error("Failed to fetch batch");
  return res.json();
}

export async function createBatch(data: {
  herbId: string;
  quantity: number;
  status: string;
}) {
  const res = await fetch(`${API_URL}/batches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create batch");
  return res.json();
}

export async function updateBatch(id: string, data: any) {
  const res = await fetch(`${API_URL}/batches/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update batch");
  return res.json();
}

export async function deleteBatch(id: string) {
  const res = await fetch(`${API_URL}/batches/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete batch");
  return res.json();
}

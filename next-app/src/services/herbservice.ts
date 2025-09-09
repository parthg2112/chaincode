const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getAllHerbs() {
  const res = await fetch(`${API_URL}/herbs`);
  if (!res.ok) throw new Error("Failed to fetch herbs");
  return res.json();
}

export async function getHerbById(id: string) {
  const res = await fetch(`${API_URL}/herbs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch herb");
  return res.json();
}

export async function createHerb(data: {
  name: string;
  origin: string;
  harvestDate: string;
}) {
  const res = await fetch(`${API_URL}/herbs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create herb");
  return res.json();
}

export async function updateHerb(id: string, data: any) {
  const res = await fetch(`${API_URL}/herbs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update herb");
  return res.json();
}

export async function deleteHerb(id: string) {
  const res = await fetch(`${API_URL}/herbs/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete herb");
  return res.json();
}

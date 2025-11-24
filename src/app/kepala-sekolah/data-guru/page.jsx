"use client";
import { dataGuru } from "@/data";
import TableGuru from "@/features/kepala-sekolah/TableGuru";
import { useState } from "react";

export default function Page() {
  const [search, setSearch] = useState("");

  const filtered = dataGuru.filter((guru) => {
    const q = search.toLowerCase();

    return (
      guru.nama.toLowerCase().includes(q) ||
      guru.nip.toLowerCase().includes(q) ||
      guru.gender.toLowerCase().includes(q) ||
      guru.mapel.join(" ").toLowerCase().includes(q)
    );
  });
  return (
    <main className="p-6 space-y-5">
      <input
        type="text"
        placeholder="Cari guru berdasarkan nama, NIP, gender, atau mapel..."
        className="w-full p-2 border rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableGuru data={filtered} />
    </main>
  );
}

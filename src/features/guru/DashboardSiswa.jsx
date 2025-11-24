"use client";

import { useState } from "react";
import { dataSiswaBuGuru } from "@/data";
import { TableSiswa } from "./TableSiswa";
import { SearchInput } from "@/components";

export function DashboardSiswa() {
  const [search, setSearch] = useState("");

  const filteredData = dataSiswaBuGuru.filter((siswa) => {
    const q = search.toLowerCase();
    return (
      siswa.nama.toLowerCase().includes(q) ||
      siswa.kelas.toLowerCase().includes(q)
    );
  });

  return (
    <main className="p-6 space-y-4">
      <section className="flex justify-between">
        <h3 className="text-xl font-semibold">Dashboard Siswa</h3>
        <SearchInput
          onChange={(value) => setSearch(value)}
          className="w-full max-w-sm"
        />
      </section>

      <TableSiswa data={filteredData} />
    </main>
  );
}

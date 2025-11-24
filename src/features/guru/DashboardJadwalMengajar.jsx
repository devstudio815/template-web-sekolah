"use client";

import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { useState, useMemo } from "react";
import { jadwalMapelGuru } from "@/data";
import { Button } from "@/components";
import { SearchInput } from "@/components";
import { TableJadwalRow } from "./TableJadwalRow";

export function DashboardJadwalMengajar() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortDir, setSortDir] = useState("none");

  const toggleSort = (column) => {
    if (sortBy !== column) {
      setSortBy(column);
      setSortDir("asc");
      return;
    }

    setSortDir((prev) =>
      prev === "asc" ? "desc" : prev === "desc" ? "none" : "asc"
    );
  };

  // controlled icon function
  const sortIcon = (column) => {
    if (sortBy !== column) return <ArrowUpDown className="w-4 h-4" />;
    if (sortDir === "asc") return <ArrowUp className="w-4 h-4" />;
    if (sortDir === "desc") return <ArrowDown className="w-4 h-4" />;
    return <ArrowUpDown className="w-4 h-4" />;
  };

  const filteredAndSorted = useMemo(() => {
    let data = [...jadwalMapelGuru];

    // SEARCH
    if (search.trim() !== "") {
      data = data.filter((j) =>
        `${j.mapel} ${j.kelas} ${j.hari} ${j.ruangan}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // SORT
    if (sortBy && sortDir !== "none") {
      data.sort((a, b) => {
        const valA = a[sortBy].toString().toLowerCase();
        const valB = b[sortBy].toString().toLowerCase();

        if (sortDir === "asc") return valA > valB ? 1 : -1;
        if (sortDir === "desc") return valA < valB ? 1 : -1;
        return 0;
      });
    }

    return data;
  }, [search, sortBy, sortDir]);

  const getKehadiranPercentage = (kehadiran) => {
    const total = kehadiran.hadir + kehadiran.izin + kehadiran.sakit;
    return total > 0 ? Math.round((kehadiran.hadir / total) * 100) : 0;
  };

  return (
    <div className="min-h-screen p-6">
      {/* SEARCH BAR */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
        <SearchInput value={search} onChange={setSearch} />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-sm text-gray-700">
                <th
                  className="p-3 text-left cursor-pointer"
                  onClick={() => toggleSort("mapel")}
                >
                  <div className="flex items-center gap-2">
                    Mapel {sortIcon("mapel")}
                  </div>
                </th>

                <th
                  className="p-3 text-left cursor-pointer"
                  onClick={() => toggleSort("kelas")}
                >
                  <div className="flex items-center gap-2">
                    Kelas {sortIcon("kelas")}
                  </div>
                </th>

                <th
                  className="p-3 text-left cursor-pointer"
                  onClick={() => toggleSort("hari")}
                >
                  <div className="flex items-center gap-2">
                    Hari {sortIcon("hari")}
                  </div>
                </th>

                <th
                  className="p-3 text-left cursor-pointer"
                  onClick={() => toggleSort("jam")}
                >
                  <div className="flex items-center gap-2">
                    Jam {sortIcon("jam")}
                  </div>
                </th>

                <th
                  className="p-3 text-left cursor-pointer"
                  onClick={() => toggleSort("ruangan")}
                >
                  <div className="flex items-center gap-2">
                    Ruangan {sortIcon("ruangan")}
                  </div>
                </th>

                <th className="p-3 text-center">Total Siswa</th>
                <th className="p-3 text-center">Kehadiran</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {filteredAndSorted.map((jadwal, index) => (
                <TableJadwalRow
                  key={index}
                  jadwal={jadwal}
                  getKehadiranPercentage={getKehadiranPercentage}
                />
              ))}
            </tbody>
          </table>

          {filteredAndSorted.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              Tidak ada data ditemukan.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

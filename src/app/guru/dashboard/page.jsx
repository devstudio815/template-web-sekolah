"use client";
import { getTotalJamMengajar, JadwalGuru } from "@/data";
import { useState } from "react";

export default function Page() {
  const [selectedGuru, setSelectedGuru] = useState(null);
  const [filterHari, setFilterHari] = useState("Semua");

  const hariList = ["Semua", "Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/30 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Jadwal Mengajar Guru
          </h1>
          <p className="text-muted-foreground">
            Lihat jadwal lengkap pengajar SMK Negeri 1
          </p>
        </div>

        {/* Filter Hari */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {hariList.map((hari) => (
            <button
              key={hari}
              onClick={() => setFilterHari(hari)}
              className={`
                px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap
                transition-all duration-200
                ${
                  filterHari === hari
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                }
              `}
            >
              {hari}
            </button>
          ))}
        </div>

        {/* Grid Guru Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {JadwalGuru.map((guru) => (
            <div
              key={guru.id}
              onClick={() => setSelectedGuru(guru)}
              className="
                bg-card rounded-xl border border-border 
                shadow-sm hover:shadow-lg 
                transition-all duration-300 cursor-pointer
                hover:scale-[1.02] hover:border-primary/50
                overflow-hidden group
              "
            >
              {/* Header dengan Foto */}
              <div className="relative h-32 bg-gradient-to-br from-primary to-accent p-4">
                <div className="absolute -bottom-8 left-4">
                  <img
                    src={guru.foto}
                    alt={guru.namaGuru}
                    className="w-20 h-20 rounded-full border-4 border-card shadow-lg"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="pt-10 px-4 pb-4">
                <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {guru.namaGuru}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  NIP: {guru.nip}
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  {guru.mataPelajaran}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{getTotalJamMengajar(guru)} Sesi/Minggu</span>
                  </div>
                  <span className="text-primary font-medium">
                    Lihat Detail →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail Jadwal */}
      {selectedGuru && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedGuru(null)}
        >
          <div
            className="bg-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedGuru.foto}
                    alt={selectedGuru.namaGuru}
                    className="w-16 h-16 rounded-full border-4 border-white/20"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">
                      {selectedGuru.namaGuru}
                    </h2>
                    <p className="text-primary-foreground/80 text-sm">
                      {selectedGuru.mataPelajaran} • NIP: {selectedGuru.nip}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedGuru(null)}
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body - Jadwal per Hari */}
            <div className="p-6 space-y-4">
              {selectedGuru.jadwal
                .filter((j) => filterHari === "Semua" || j.hari === filterHari)
                .map((jadwal, idx) => (
                  <div
                    key={idx}
                    className="border border-border rounded-lg overflow-hidden"
                  >
                    {/* Hari Header */}
                    <div className="bg-secondary px-4 py-3 border-b border-border">
                      <h3 className="font-bold text-foreground flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {jadwal.hari}
                        <span className="ml-auto text-sm font-normal text-muted-foreground">
                          {jadwal.sesi.length} Sesi
                        </span>
                      </h3>
                    </div>

                    {/* Sesi List */}
                    <div className="divide-y divide-border">
                      {jadwal.sesi.length > 0 ? (
                        jadwal.sesi.map((sesi, sesiIdx) => (
                          <div
                            key={sesiIdx}
                            className="p-4 hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                                    {sesi.waktu}
                                  </span>
                                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">
                                    {sesi.ruangan}
                                  </span>
                                </div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  {sesi.kelas}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  Materi: {sesi.materi}
                                </p>
                              </div>
                              <svg
                                className="w-5 h-5 text-muted-foreground flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center text-muted-foreground">
                          <svg
                            className="w-12 h-12 mx-auto mb-2 opacity-50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                          </svg>
                          <p>Tidak ada jadwal mengajar</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

"use client";
import { Activity, Calendar, Users } from "lucide-react";
import { useState } from "react";
import { JadwalCard } from "./JadwalCard";
import { hariUrutan, jadwalMapelGuru } from "@/data";
import { Button } from "@/components";

export function DashboardJadwalMengajar() {
  const [selectedDay, setSelectedDay] = useState("Semua");

  const totalSiswa = jadwalMapelGuru.reduce(
    (acc, jadwal) =>
      acc + jadwal.jumlahSiswa.laki_laki + jadwal.jumlahSiswa.perempuan,
    0,
  );

  const totalKelasMingguIni = jadwalMapelGuru.length;

  const filteredJadwal =
    selectedDay === "Semua"
      ? jadwalMapelGuru
      : jadwalMapelGuru.filter((j) => j.hari === selectedDay);

  const jadwalPerHari = hariUrutan.reduce((acc, hari) => {
    acc[hari] = jadwalMapelGuru.filter((j) => j.hari === hari);
    return acc;
  }, {});

  const getKehadiranPercentage = (kehadiran) => {
    const total = kehadiran.hadir + kehadiran.izin + kehadiran.sakit;
    return total > 0 ? Math.round((kehadiran.hadir / total) * 100) : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8" />
              <span className="text-2xl font-bold">{totalKelasMingguIni}</span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Total Kelas</h3>
            <p className="text-blue-100 text-sm">Minggu ini</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8" />
              <span className="text-2xl font-bold">{totalSiswa}</span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Total Siswa</h3>
            <p className="text-purple-100 text-sm">Yang diampu</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8" />
              <span className="text-2xl font-bold">92%</span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Kehadiran</h3>
            <p className="text-green-100 text-sm">Rata-rata minggu ini</p>
          </div>
        </div>

        {/* Filter Hari */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Filter Hari</h3>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setSelectedDay("Semua")}
              className={`px-6 py-2 rounded-xl font-medium transition-all ${
                selectedDay === "Semua"
                  ? " text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Semua Hari
            </Button>
            {hariUrutan.map((hari) => (
              <Button
                key={hari}
                onClick={() => setSelectedDay(hari)}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  selectedDay === hari
                    ? " text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {hari}
              </Button>
            ))}
          </div>
        </div>

        {/* Jadwal Cards */}
        {selectedDay === "Semua" ? (
          // Tampilan per hari
          hariUrutan.map((hari) => {
            const jadwalHari = jadwalPerHari[hari];
            if (jadwalHari.length === 0) return null;

            return (
              <div key={hari} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">{hari}</h2>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {jadwalHari.length} Kelas
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {jadwalHari.map((jadwal, index) => (
                    <JadwalCard
                      key={index}
                      jadwal={jadwal}
                      getKehadiranPercentage={getKehadiranPercentage}
                    />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          // Tampilan filter hari
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredJadwal.map((jadwal, index) => (
              <JadwalCard
                key={index}
                jadwal={jadwal}
                getKehadiranPercentage={getKehadiranPercentage}
              />
            ))}
          </div>
        )}

        {filteredJadwal.length === 0 && selectedDay !== "Semua" && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Tidak ada jadwal
            </h3>
            <p className="text-gray-500">
              Tidak ada kelas pada hari {selectedDay}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

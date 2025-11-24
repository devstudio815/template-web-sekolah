"use client";
import { mataPelajaran } from "@/data";
import {
  Award,
  BarChart3,
  BookOpen,
  Calendar,
  Clock,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";
import { StatCard } from "./ChartGuru";

export function DashboardMataPelajaran() {
  const [selectedMapel, setSelectedMapel] = useState(mataPelajaran[0]);

  // Kalkulasi statistik
  const totalKelas = mataPelajaran.length;
  const totalSiswa = mataPelajaran.reduce((acc, m) => acc + m.totalSiswa, 0);
  const rataRataKeseluruhan = (
    mataPelajaran.reduce((acc, m) => acc + m.rataRataNilai, 0) /
    mataPelajaran.length
  ).toFixed(1);
  const totalTugasPending = mataPelajaran.reduce(
    (acc, m) => acc + m.tugas.filter((t) => t.status === "Pending").length,
    0,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={BookOpen}
            title="Total Kelas"
            value={totalKelas}
            subtitle="kelas diampu"
            color="#3b82f6"
          />
          <StatCard
            icon={Users}
            title="Total Siswa"
            value={totalSiswa}
            subtitle="siswa aktif"
            color="#8b5cf6"
          />
          <StatCard
            icon={Award}
            title="Rata-rata Nilai"
            value={rataRataKeseluruhan}
            subtitle="semua kelas"
            color="#10b981"
          />
          <StatCard
            icon={Clock}
            title="Tugas Pending"
            value={totalTugasPending}
            subtitle="menunggu koreksi"
            color="#f59e0b"
          />
        </div>

        {/* Tabs Pemilihan Kelas */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pilih Kelas</h3>
          <div className="flex flex-wrap gap-3">
            {mataPelajaran.map((mapel, index) => (
              <button
                key={index}
                onClick={() => setSelectedMapel(mapel)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedMapel === mapel
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="text-left">
                  <p className="font-bold">{mapel.nama}</p>
                  <p className="text-xs opacity-80">{mapel.kelas}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detail Mata Pelajaran */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Info Kelas */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedMapel.nama}
                </h3>
                <p className="text-gray-600 text-sm">{selectedMapel.kelas}</p>
              </div>
            </div>

            <div className="space-y-4">
              <InfoItem
                icon={Users}
                label="Total Siswa"
                value={selectedMapel.totalSiswa}
              />
              <InfoItem icon={Target} label="KKM" value={selectedMapel.kkm} />
              <InfoItem
                icon={Award}
                label="Rata-rata Nilai"
                value={selectedMapel.rataRataNilai}
              />

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-2">Status Kelas</p>
                <div
                  className={`px-4 py-2 rounded-lg text-center font-semibold ${
                    selectedMapel.rataRataNilai >= selectedMapel.kkm
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {selectedMapel.rataRataNilai >= selectedMapel.kkm
                    ? "✅ Di Atas KKM"
                    : "⚠️ Perlu Perhatian"}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bab */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Progress Materi
                </h3>
                <p className="text-gray-600 text-sm">Pembelajaran</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Bab Selesai</span>
                <span className="text-lg font-bold text-gray-900">
                  {selectedMapel.babSelesai}/{selectedMapel.totalBab}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${(selectedMapel.babSelesai / selectedMapel.totalBab) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {Math.round(
                  (selectedMapel.babSelesai / selectedMapel.totalBab) * 100,
                )}
                % Complete
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-purple-600 mt-1" />
                <div>
                  <p className="text-xs text-gray-600 mb-1">
                    Pertemuan Selanjutnya
                  </p>
                  <p className="font-semibold text-gray-900">
                    {selectedMapel.babPertemuanSelanjutnya}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-6">Statistik Cepat</h3>

            <div className="space-y-4">
              <QuickStatItem
                label="Tugas Diberikan"
                value={selectedMapel.tugas.length}
                icon="📝"
              />
              <QuickStatItem
                label="Tugas Pending"
                value={
                  selectedMapel.tugas.filter((t) => t.status === "Pending")
                    .length
                }
                icon="⏳"
              />
              <QuickStatItem
                label="Tugas Selesai"
                value={
                  selectedMapel.tugas.filter((t) => t.status === "Success")
                    .length
                }
                icon="✅"
              />
              <QuickStatItem
                label="Tingkat Penyelesaian"
                value={`${Math.round((selectedMapel.tugas.filter((t) => t.status === "Success").length / selectedMapel.tugas.length) * 100)}%`}
                icon="🎯"
              />
            </div>
          </div>
        </div>

        {/* Daftar Tugas */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            📋 Daftar Tugas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedMapel.tugas.map((tugas, index) => (
              <TugasCard key={index} tugas={tugas} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <span className="font-bold text-gray-900">{value}</span>
    </div>
  );
}

function QuickStatItem({ label, value, icon }) {
  return (
    <div className="flex items-center justify-between bg-white bg-opacity-10 rounded-xl p-3">
      <div className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <span className="text-sm">{label}</span>
      </div>
      <span className="font-bold text-xl">{value}</span>
    </div>
  );
}

function TugasCard({ tugas }) {
  const isPending = tugas.status === "Pending";
  const progress =
    tugas.submitted && tugas.total ? (tugas.submitted / tugas.total) * 100 : 0;

  return (
    <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <div
          className={`px-3 py-1 rounded-full text-xs font-bold ${
            isPending
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {isPending ? "⏳ Pending" : "✅ Selesai"}
        </div>
        {isPending && tugas.deadline && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            {tugas.deadline}
          </div>
        )}
      </div>

      {/* Nama Tugas */}
      <h4 className="font-bold text-gray-900 mb-2 text-lg">{tugas.nama}</h4>
      <p className="text-sm text-gray-600 mb-4">{tugas.kelas}</p>

      {/* Progress atau Nilai */}
      {isPending ? (
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Submitted</span>
            <span className="font-bold text-gray-900">
              {tugas.submitted}/{tugas.total}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
          <p className="text-xs text-gray-600 mb-1">Rata-rata Nilai</p>
          <p className="text-3xl font-bold text-green-600">{tugas.nilai}</p>
          <p className="text-xs text-gray-500 mt-1">
            {tugas.submitted}/{tugas.total} siswa
          </p>
        </div>
      )}

      {/* Action Button */}
      <button
        className={`w-full mt-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
          isPending
            ? "bg-yellow-500 text-white hover:bg-yellow-600 hover:shadow-lg"
            : "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg"
        }`}
      >
        {isPending ? "Koreksi Tugas" : "Lihat Detail"}
      </button>
    </div>
  );
}

"use client";

import {
  siswaPerGender,
  siswaPerTingkat,
  guruPerGender,
  combinedGender,
  absensiGuru,
  absensiSiswa,
  nilaiRataRata,
  totalGuru,
  totalSiswa,
} from "@/data";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  LineChart,
  Line,
  Legend,
  Cell,
} from "recharts";

export default function DashboardKepalaSekolah() {
  const COLORS = ["#2563eb", "#10b981", "#f97316", "#ef4444"];

  return (
    <main className="p-6 space-y-10">
      <h1 className="text-2xl font-bold">Dashboard Kepala Sekolah</h1>

      {/* RINGKASAN */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Total Guru" value={totalGuru} />
        <SummaryCard title="Total Siswa" value={totalSiswa} />
        <SummaryCard
          title="Rasio Guru : Siswa"
          value={`${totalGuru} : ${totalSiswa}`}
        />
      </section>

      {/* SISWA PER TINGKAT */}
      <ChartCard title="Siswa per Tingkat">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={siswaPerTingkat}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tingkat" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="jumlah" fill="#2563eb" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* SISWA PER GENDER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <ChartCard title="Siswa Berdasarkan Gender">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={siswaPerGender}
                dataKey="jumlah"
                nameKey="gender"
                innerRadius={50}
                outerRadius={90}
                label
              >
                {siswaPerGender.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* GURU PER GENDER */}
        <ChartCard title="Guru Berdasarkan Gender">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={guruPerGender}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="gender" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jumlah" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* KOMBINASI GURU + SISWA */}
      <ChartCard title="Distribusi Gender (Guru + Siswa)">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={combinedGender}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="gender" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="siswa" fill="#2563eb" />
            <Bar dataKey="guru" fill="#10b981" />
            <Bar dataKey="total" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* ABSENSI */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="Absensi Guru Hari Ini">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={absensiGuru}
                dataKey="jumlah"
                nameKey="status"
                outerRadius={90}
                label
              >
                {absensiGuru.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Absensi Siswa Hari Ini">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={absensiSiswa}
                dataKey="jumlah"
                nameKey="status"
                outerRadius={90}
                label
              >
                {absensiSiswa.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* NILAI RATA-RATA */}
      <ChartCard title="Nilai Rata - Rata Per Tingkat">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={nilaiRataRata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="kelas" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="nilai" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </main>
  );
}

// --- COMPONENT KECIL ---
function SummaryCard({ title, value }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow-md border">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md border h-80">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="w-full h-[90%]">{children}</div>
    </section>
  );
}

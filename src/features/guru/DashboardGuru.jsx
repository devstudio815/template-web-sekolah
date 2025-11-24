import { dataStatistikGuru, materiPerBulan, nilaiPerKelas } from "@/data";
import { BarChart, LineChart, PieChart, StatCard } from "./ChartGuru";
import { Award, BookOpen, FileText, Users } from "lucide-react";

export function DashboardGuru() {
  const stats = dataStatistikGuru;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={BookOpen}
            title="Kelas Aktif"
            value={stats.jumlahKelasYangDitempuh}
            subtitle="kelas yang diampu"
            color="#3b82f6"
            trend="+2 dari bulan lalu"
          />
          <StatCard
            icon={Users}
            title="Total Siswa"
            value={stats.jumlahSiswa}
            subtitle="siswa terdaftar"
            color="#8b5cf6"
            trend="+15 siswa baru"
          />
          <StatCard
            icon={FileText}
            title="Materi & Tugas"
            value={`${stats.jumlahMateri}/${stats.jumlahTugas}`}
            subtitle="materi dan tugas"
            color="#10b981"
            trend="+4 materi minggu ini"
          />
          <StatCard
            icon={Award}
            title="Rata-rata Nilai"
            value={stats.rataRataNilai}
            subtitle="⭐ Bagus sekali!"
            color="#f59e0b"
            trend="+2.5 poin"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <BarChart data={nilaiPerKelas} title="Rata-rata Nilai Per Kelas" />
          <PieChart
            selesai={stats.tugasSelesai}
            pending={stats.jumlahTugas - stats.tugasSelesai}
            title="Status Tugas"
          />
        </div>

        {/* Full Width Chart */}
        <div className="mb-8">
          <LineChart data={materiPerBulan} title="Aktivitas Mengajar Bulanan" />
        </div>
      </div>
    </main>
  );
}

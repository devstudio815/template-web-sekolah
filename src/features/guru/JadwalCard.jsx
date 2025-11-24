import { Button } from "@/components";
import { BookOpen, Clock, Users, UserCheck } from "lucide-react";

export function JadwalCard({ jadwal, getKehadiranPercentage }) {
  const totalSiswa =
    jadwal.jumlahSiswa.laki_laki + jadwal.jumlahSiswa.perempuan;
  const kehadiranPercentage = getKehadiranPercentage(jadwal.kehadiran);

  return (
    <div className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105">
      {/* Header Card */}
      <div className="bg-primary p-6">
        <div className="text-white flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{jadwal.mapel}</h3>
            <p className="text-sm">{jadwal.kelas}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{jadwal.jam}</span>
          </div>
          <div className="bg-white/20 px-3 py-1 rounded-full">
            {jadwal.ruangan}
          </div>
        </div>
      </div>

      {/* Body Card */}
      <div className="p-6">
        {/* Jumlah Siswa */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-800">Jumlah Siswa</span>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 bg-blue-50 rounded-lg p-3">
              <p className="text-xs text-gray-600 mb-1">Laki-laki</p>
              <p className="text-2xl font-bold text-blue-600">
                {jadwal.jumlahSiswa.laki_laki}
              </p>
            </div>
            <div className="flex-1 bg-pink-50 rounded-lg p-3">
              <p className="text-xs text-gray-600 mb-1">Perempuan</p>
              <p className="text-2xl font-bold text-pink-600">
                {jadwal.jumlahSiswa.perempuan}
              </p>
            </div>
          </div>
        </div>

        {/* Kehadiran */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-800">Kehadiran</span>
            </div>
            <span className="text-sm font-bold text-green-600">
              {kehadiranPercentage}%
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div
              className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${kehadiranPercentage}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-green-50 rounded-lg p-2 text-center">
              <p className="text-gray-600 mb-1">Hadir</p>
              <p className="font-bold text-green-600">
                {jadwal.kehadiran.hadir}
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-2 text-center">
              <p className="text-gray-600 mb-1">Izin</p>
              <p className="font-bold text-yellow-600">
                {jadwal.kehadiran.izin}
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-2 text-center">
              <p className="text-gray-600 mb-1">Sakit</p>
              <p className="font-bold text-red-600">{jadwal.kehadiran.sakit}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button className="w-full rounded-xl text-white">
          Lihat Detail Kelas
        </Button>
      </div>
    </div>
  );
}

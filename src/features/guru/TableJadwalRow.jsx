import { Button } from "@/components";

export function TableJadwalRow({ jadwal, getKehadiranPercentage }) {
  const kehadiranPercentage = getKehadiranPercentage(jadwal.kehadiran);
  const totalSiswa =
    jadwal.jumlahSiswa.laki_laki + jadwal.jumlahSiswa.perempuan;

  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="p-3 font-medium">{jadwal.mapel}</td>
      <td className="p-3">{jadwal.kelas}</td>
      <td className="p-3">{jadwal.hari}</td>
      <td className="p-3">{jadwal.jam}</td>
      <td className="p-3">{jadwal.ruangan}</td>
      <td className="p-3 text-center">{totalSiswa}</td>

      <td className="p-3 text-center">
        <span className="font-semibold text-green-600">
          {kehadiranPercentage}%
        </span>
      </td>

      <td className="p-3 text-center">
        <Button className="rounded-xl px-4 py-2">Detail</Button>
      </td>
    </tr>
  );
}

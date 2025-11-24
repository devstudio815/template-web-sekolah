export const jadwalMapelGuru = [
  {
    mapel: "Matematika",
    kelas: "10 MIA 1",
    jam: "08:00 - 09:00",
    hari: "Senin",
    ruangan: "R.301",
    jumlahSiswa: {
      laki_laki: 16,
      perempuan: 14,
    },
    kehadiran: {
      izin: 5,
      sakit: 5,
      hadir: 20,
    },
  },
  {
    mapel: "Matematika",
    kelas: "10 MIA 2",
    jam: "09:00 - 10:00",
    hari: "Senin",
    ruangan: "R.302",
    jumlahSiswa: {
      laki_laki: 15,
      perempuan: 17,
    },
    kehadiran: {
      izin: 2,
      sakit: 1,
      hadir: 29,
    },
  },
  {
    mapel: "Matematika",
    kelas: "11 MIA 1",
    jam: "10:15 - 11:15",
    hari: "Selasa",
    ruangan: "R.301",
    jumlahSiswa: {
      laki_laki: 14,
      perempuan: 16,
    },
    kehadiran: {
      izin: 3,
      sakit: 2,
      hadir: 25,
    },
  },
  {
    mapel: "Matematika",
    kelas: "11 MIA 2",
    jam: "13:00 - 14:00",
    hari: "Rabu",
    ruangan: "R.303",
    jumlahSiswa: {
      laki_laki: 18,
      perempuan: 14,
    },
    kehadiran: {
      izin: 4,
      sakit: 3,
      hadir: 25,
    },
  },
  {
    mapel: "Matematika",
    kelas: "10 MIA 1",
    jam: "08:00 - 09:00",
    hari: "Kamis",
    ruangan: "R.301",
    jumlahSiswa: {
      laki_laki: 16,
      perempuan: 14,
    },
    kehadiran: {
      izin: 1,
      sakit: 2,
      hadir: 27,
    },
  },
  {
    mapel: "Matematika",
    kelas: "12 MIA 1",
    jam: "09:00 - 10:00",
    hari: "Jumat",
    ruangan: "R.304",
    jumlahSiswa: {
      laki_laki: 13,
      perempuan: 15,
    },
    kehadiran: {
      izin: 2,
      sakit: 1,
      hadir: 25,
    },
  },
];

export const dataStatistikGuru = {
  jumlahKelasYangDitempuh: 4,
  jumlahSiswa: 120,
  jumlahMateri: 28,
  jumlahTugas: 15,
  tugasSelesai: 12,
  rataRataNilai: 85.5,
  kehadiranSiswa: 92,
};

// Data untuk chart
export const nilaiPerKelas = [
  { kelas: "X-A", rata: 88, siswa: 30 },
  { kelas: "X-B", rata: 82, siswa: 28 },
  { kelas: "XI-A", rata: 85, siswa: 32 },
  { kelas: "XI-B", rata: 87, siswa: 30 },
];
export const hariUrutan = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

export const materiPerBulan = [
  { bulan: "Agu", materi: 4, tugas: 2 },
  { bulan: "Sep", materi: 6, tugas: 3 },
  { bulan: "Okt", materi: 8, tugas: 4 },
  { bulan: "Nov", materi: 10, tugas: 6 },
];

export const statusTugas = [
  { name: "Selesai", value: 12, color: "#10b981" },
  { name: "Pending", value: 3, color: "#f59e0b" },
];

export const kehadiranData = [
  { hari: "Sen", hadir: 28, tidak: 2 },
  { hari: "Sel", hadir: 29, tidak: 1 },
  { hari: "Rab", hadir: 27, tidak: 3 },
  { hari: "Kam", hadir: 30, tidak: 0 },
  { hari: "Jum", hadir: 28, tidak: 2 },
];

export const mataPelajaran = [
  {
    nama: "Matematika",
    kelas: "10 MIA 1",
    kkm: 75,
    totalBab: 12,
    babSelesai: 8,
    babPertemuanSelanjutnya: "Bab 9: Trigonometri",
    totalSiswa: 30,
    rataRataNilai: 82.5,
    tugas: [
      {
        status: "Pending",
        nama: "Tugas Fungsi Kuadrat",
        kelas: "10 MIA 1",
        deadline: "2024-11-30",
        submitted: 15,
        total: 30,
      },
      {
        status: "Success",
        nama: "Ulangan Harian - Limit",
        kelas: "10 MIA 1",
        nilai: 85,
        submitted: 30,
        total: 30,
      },
      {
        status: "Pending",
        nama: "PR Matriks",
        kelas: "10 MIA 1",
        deadline: "2024-11-28",
        submitted: 22,
        total: 30,
      },
    ],
  },
  {
    nama: "Matematika",
    kelas: "10 MIA 2",
    kkm: 75,
    totalBab: 12,
    babSelesai: 7,
    babPertemuanSelanjutnya: "Bab 8: Persamaan Lingkaran",
    totalSiswa: 32,
    rataRataNilai: 78.3,
    tugas: [
      {
        status: "Pending",
        nama: "Tugas Vektor",
        kelas: "10 MIA 2",
        deadline: "2024-11-29",
        submitted: 18,
        total: 32,
      },
      {
        status: "Success",
        nama: "Quiz Aljabar",
        kelas: "10 MIA 2",
        nilai: 80,
        submitted: 32,
        total: 32,
      },
    ],
  },
  {
    nama: "Matematika",
    kelas: "11 MIA 1",
    kkm: 75,
    totalBab: 10,
    babSelesai: 6,
    babPertemuanSelanjutnya: "Bab 7: Integral",
    totalSiswa: 28,
    rataRataNilai: 88.7,
    tugas: [
      {
        status: "Success",
        nama: "Ulangan Tengah Semester",
        kelas: "11 MIA 1",
        nilai: 90,
        submitted: 28,
        total: 28,
      },
      {
        status: "Pending",
        nama: "Tugas Diferensial",
        kelas: "11 MIA 1",
        deadline: "2024-12-01",
        submitted: 20,
        total: 28,
      },
    ],
  },
];

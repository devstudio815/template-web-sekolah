export const dataGuru = [
  {
    id: 1,
    nama: "Budi Santoso",
    nip: "19850120 202001 1 001",
    gender: "L",
    mapel: ["Matematika", "Fisika"],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    nip: "19870214 202002 1 002",
    gender: "P",
    mapel: ["Bahasa Indonesia"],
  },
  {
    id: 3,
    nama: "Rina Kartika",
    nip: "19900103 202003 2 003",
    gender: "P",
    mapel: ["Biologi", "Kimia"],
  },
  {
    id: 4,
    nama: "Ahmad Fauzi",
    nip: "19790110 201801 1 004",
    gender: "L",
    mapel: ["PJOK"],
  },
  {
    id: 5,
    nama: "Dewi Lestari",
    nip: "19880420 202101 2 005",
    gender: "P",
    mapel: ["IPS"],
  },
  {
    id: 6,
    nama: "Slamet Riyadi",
    nip: "19750312 201601 1 006",
    gender: "L",
    mapel: ["PPKn"],
  },
  {
    id: 7,
    nama: "Maya Sari",
    nip: "19931210 202202 2 007",
    gender: "P",
    mapel: ["Matematika"],
  },
  {
    id: 8,
    nama: "Andi Pratama",
    nip: "19890307 202001 1 008",
    gender: "L",
    mapel: ["Bahasa Inggris"],
  },
  {
    id: 9,
    nama: "Nurhayati",
    nip: "19801123 202003 2 009",
    gender: "P",
    mapel: ["Sejarah"],
  },
  {
    id: 10,
    nama: "Hendra Wijaya",
    nip: "19771230 201901 1 010",
    gender: "L",
    mapel: ["Seni Budaya"],
  },
];

export const jumlahGuru = 24;

export const siswaPerTingkat = [
  { tingkat: "X", jumlah: 120 },
  { tingkat: "XI", jumlah: 98 },
  { tingkat: "XII", jumlah: 110 },
];

export const siswaPerGender = [
  { gender: "Laki-laki", jumlah: 180 },
  { gender: "Perempuan", jumlah: 148 },
];

export const keuanganSekolah = [
  { bulan: "Jan", pemasukan: 12000000, pengeluaran: 8000000 },
  { bulan: "Feb", pemasukan: 15000000, pengeluaran: 9000000 },
  { bulan: "Mar", pemasukan: 10000000, pengeluaran: 7000000 },
  { bulan: "Apr", pemasukan: 18000000, pengeluaran: 11000000 },
];

// --- DATA GURU -----
export const guruPerGender = [
  { gender: "Laki-laki", jumlah: 10 },
  { gender: "Perempuan", jumlah: 14 },
];

export const totalGuru = guruPerGender.reduce((a, b) => a + b.jumlah, 0);
export const totalSiswa = siswaPerTingkat.reduce((a, b) => a + b.jumlah, 0);

// --- COMBINED GENDER (guru + siswa) -----
export const combinedGender = [
  {
    gender: "Laki-laki",
    siswa: siswaPerGender[0].jumlah,
    guru: guruPerGender[0].jumlah,
    total: siswaPerGender[0].jumlah + guruPerGender[0].jumlah,
  },
  {
    gender: "Perempuan",
    siswa: siswaPerGender[1].jumlah,
    guru: guruPerGender[1].jumlah,
    total: siswaPerGender[1].jumlah + guruPerGender[1].jumlah,
  },
];

// --- ABSENSI (contoh) -----
export const absensiGuru = [
  { status: "Hadir", jumlah: 22 },
  { status: "Izin", jumlah: 1 },
  { status: "Sakit", jumlah: 1 },
];

export const absensiSiswa = [
  { status: "Hadir", jumlah: 380 },
  { status: "Izin", jumlah: 12 },
  { status: "Sakit", jumlah: 8 },
];

// --- NILAI RATA-RATA -----
export const nilaiRataRata = [
  { kelas: "V11", nilai: 40 },
  { kelas: "V111", nilai: 60 },
  { kelas: "IX", nilai: 80 },
  { kelas: "X", nilai: 75 },
  { kelas: "XI", nilai: 67 },
  { kelas: "XII", nilai: 80 },
];

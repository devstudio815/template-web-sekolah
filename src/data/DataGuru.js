export const jadwalMapelGuru = [
  {
    mapel: "Matematika",
    kelas: "10 MIA 1",
    jam: "08:00 - 09:00",
    hari: "Senin",
    ruangan: "R.301",
    jumlahSiswa: {
      laki_laki: 6,
      perempuan: 4,
    },
    kehadiran: {
      izin: 1,
      sakit: 1,
      hadir: 8,
    },
  },
  {
    mapel: "Matematika",
    kelas: "10 MIA 2",
    jam: "09:00 - 10:00",
    hari: "Senin",
    ruangan: "R.302",
    jumlahSiswa: {
      laki_laki: 5,
      perempuan: 5,
    },
    kehadiran: {
      izin: 0,
      sakit: 1,
      hadir: 9,
    },
  },
  {
    mapel: "Matematika",
    kelas: "11 MIA 1",
    jam: "10:15 - 11:15",
    hari: "Selasa",
    ruangan: "R.301",
    jumlahSiswa: {
      laki_laki: 4,
      perempuan: 4,
    },
    kehadiran: {
      izin: 1,
      sakit: 0,
      hadir: 7,
    },
  },
  {
    mapel: "Matematika",
    kelas: "11 MIA 2",
    jam: "13:00 - 14:00",
    hari: "Rabu",
    ruangan: "R.303",
    jumlahSiswa: {
      laki_laki: 6,
      perempuan: 4,
    },
    kehadiran: {
      izin: 1,
      sakit: 1,
      hadir: 8,
    },
  },
  {
    mapel: "Matematika",
    kelas: "10 MIA 1",
    jam: "08:00 - 09:00",
    hari: "Kamis",
    ruangan: "R.301",
    jumlahSiswa: {
      laki_laki: 6,
      perempuan: 4,
    },
    kehadiran: {
      izin: 0,
      sakit: 1,
      hadir: 9,
    },
  },
  {
    mapel: "Matematika",
    kelas: "12 MIA 1",
    jam: "09:00 - 10:00",
    hari: "Jumat",
    ruangan: "R.304",
    jumlahSiswa: {
      laki_laki: 5,
      perempuan: 5,
    },
    kehadiran: {
      izin: 1,
      sakit: 0,
      hadir: 9,
    },
  },
];

export const dataStatistikGuru = {
  jumlahKelasYangDitempuh: 5,
  jumlahSiswa: 48,
  jumlahMateri: 28,
  jumlahTugas: 15,
  tugasSelesai: 12,
  rataRataNilai: 85.5,
  kehadiranSiswa: 92,
};

// Data untuk chart
export const nilaiPerKelas = [
  { kelas: "10 MIA 1", rata: 88, siswa: 10 },
  { kelas: "10 MIA 2", rata: 82, siswa: 10 },
  { kelas: "11 MIA 1", rata: 85, siswa: 8 },
  { kelas: "11 MIA 2", rata: 87, siswa: 10 },
  { kelas: "12 MIA 1", rata: 90, siswa: 10 },
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
  { hari: "Sen", hadir: 9, tidak: 1 },
  { hari: "Sel", hadir: 7, tidak: 1 },
  { hari: "Rab", hadir: 8, tidak: 2 },
  { hari: "Kam", hadir: 9, tidak: 1 },
  { hari: "Jum", hadir: 9, tidak: 1 },
];

export const mataPelajaran = [
  {
    nama: "Matematika",
    kelas: "10 MIA 1",
    kkm: 75,
    totalBab: 12,
    babSelesai: 8,
    babPertemuanSelanjutnya: "Bab 9: Trigonometri",
    totalSiswa: 10,
    rataRataNilai: 82.5,
    tugas: [
      {
        status: "Pending",
        nama: "Tugas Fungsi Kuadrat",
        kelas: "10 MIA 1",
        deadline: "2024-11-30",
        submitted: 6,
        total: 10,
      },
      {
        status: "Success",
        nama: "Ulangan Harian - Limit",
        kelas: "10 MIA 1",
        nilai: 85,
        submitted: 10,
        total: 10,
      },
      {
        status: "Pending",
        nama: "PR Matriks",
        kelas: "10 MIA 1",
        deadline: "2024-11-28",
        submitted: 7,
        total: 10,
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
    totalSiswa: 10,
    rataRataNilai: 78.3,
    tugas: [
      {
        status: "Pending",
        nama: "Tugas Vektor",
        kelas: "10 MIA 2",
        deadline: "2024-11-29",
        submitted: 6,
        total: 10,
      },
      {
        status: "Success",
        nama: "Quiz Aljabar",
        kelas: "10 MIA 2",
        nilai: 80,
        submitted: 10,
        total: 10,
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
    totalSiswa: 8,
    rataRataNilai: 88.7,
    tugas: [
      {
        status: "Success",
        nama: "Ulangan Tengah Semester",
        kelas: "11 MIA 1",
        nilai: 90,
        submitted: 8,
        total: 8,
      },
      {
        status: "Pending",
        nama: "Tugas Diferensial",
        kelas: "11 MIA 1",
        deadline: "2024-12-01",
        submitted: 5,
        total: 8,
      },
    ],
  },
  {
    nama: "Matematika",
    kelas: "11 MIA 2",
    kkm: 75,
    totalBab: 10,
    babSelesai: 6,
    babPertemuanSelanjutnya: "Bab 7: Turunan Fungsi",
    totalSiswa: 10,
    rataRataNilai: 87.0,
    tugas: [
      {
        status: "Pending",
        nama: "Tugas Limit",
        kelas: "11 MIA 2",
        deadline: "2024-11-27",
        submitted: 8,
        total: 10,
      },
      {
        status: "Success",
        nama: "Quiz Turunan",
        kelas: "11 MIA 2",
        nilai: 87,
        submitted: 10,
        total: 10,
      },
    ],
  },
  {
    nama: "Matematika",
    kelas: "12 MIA 1",
    kkm: 75,
    totalBab: 8,
    babSelesai: 5,
    babPertemuanSelanjutnya: "Bab 6: Statistika Lanjut",
    totalSiswa: 10,
    rataRataNilai: 90.0,
    tugas: [
      {
        status: "Success",
        nama: "Ulangan Akhir Semester",
        kelas: "12 MIA 1",
        nilai: 92,
        submitted: 10,
        total: 10,
      },
      {
        status: "Pending",
        nama: "Tugas Persiapan UTBK",
        kelas: "12 MIA 1",
        deadline: "2024-12-05",
        submitted: 7,
        total: 10,
      },
    ],
  },
];

export const dataSiswaBuGuru = [
  // Kelas 10 MIA 1
  { nama: "Ahmad Fauzi", kelas: "10 MIA 1", nilai: 85, gender: "L" },
  { nama: "Siti Nurhaliza", kelas: "10 MIA 1", nilai: 88, gender: "P" },
  { nama: "Budi Santoso", kelas: "10 MIA 1", nilai: 82, gender: "L" },
  { nama: "Dewi Lestari", kelas: "10 MIA 1", nilai: 90, gender: "P" },
  { nama: "Rizki Ramadan", kelas: "10 MIA 1", nilai: 78, gender: "L" },
  { nama: "Putri Ayu", kelas: "10 MIA 1", nilai: 86, gender: "P" },
  { nama: "Fajar Nugroho", kelas: "10 MIA 1", nilai: 83, gender: "L" },
  { nama: "Nur Azizah", kelas: "10 MIA 1", nilai: 89, gender: "P" },
  { nama: "Andi Wijaya", kelas: "10 MIA 1", nilai: 81, gender: "L" },
  { nama: "Maya Sari", kelas: "10 MIA 1", nilai: 87, gender: "P" },

  // Kelas 10 MIA 2
  { nama: "Dimas Prakoso", kelas: "10 MIA 2", nilai: 80, gender: "L" },
  { nama: "Rina Wati", kelas: "10 MIA 2", nilai: 82, gender: "P" },
  { nama: "Hendra Gunawan", kelas: "10 MIA 2", nilai: 75, gender: "L" },
  { nama: "Fitri Handayani", kelas: "10 MIA 2", nilai: 84, gender: "P" },
  { nama: "Agus Setiawan", kelas: "10 MIA 2", nilai: 78, gender: "L" },
  { nama: "Linda Permata", kelas: "10 MIA 2", nilai: 81, gender: "P" },
  { nama: "Taufik Hidayat", kelas: "10 MIA 2", nilai: 79, gender: "L" },
  { nama: "Sari Rahayu", kelas: "10 MIA 2", nilai: 83, gender: "P" },
  { nama: "Yudi Pratama", kelas: "10 MIA 2", nilai: 76, gender: "L" },
  { nama: "Anisa Rahma", kelas: "10 MIA 2", nilai: 85, gender: "P" },

  // Kelas 11 MIA 1
  { nama: "Reza Maulana", kelas: "11 MIA 1", nilai: 90, gender: "L" },
  { nama: "Intan Permatasari", kelas: "11 MIA 1", nilai: 92, gender: "P" },
  { nama: "Arief Budiman", kelas: "11 MIA 1", nilai: 88, gender: "L" },
  { nama: "Diah Ayu", kelas: "11 MIA 1", nilai: 91, gender: "P" },
  { nama: "Fikri Rahman", kelas: "11 MIA 1", nilai: 86, gender: "L" },
  { nama: "Laila Sari", kelas: "11 MIA 1", nilai: 89, gender: "P" },
  { nama: "Bayu Aji", kelas: "11 MIA 1", nilai: 87, gender: "L" },
  { nama: "Ratna Dewi", kelas: "11 MIA 1", nilai: 90, gender: "P" },

  // Kelas 11 MIA 2
  { nama: "Irfan Hakim", kelas: "11 MIA 2", nilai: 86, gender: "L" },
  { nama: "Zahra Amalia", kelas: "11 MIA 2", nilai: 88, gender: "P" },
  { nama: "Arman Maulana", kelas: "11 MIA 2", nilai: 85, gender: "L" },
  { nama: "Novi Andriani", kelas: "11 MIA 2", nilai: 89, gender: "P" },
  { nama: "Galih Pratama", kelas: "11 MIA 2", nilai: 84, gender: "L" },
  { nama: "Mega Putri", kelas: "11 MIA 2", nilai: 90, gender: "P" },
  { nama: "Doni Saputra", kelas: "11 MIA 2", nilai: 87, gender: "L" },
  { nama: "Anggun Safitri", kelas: "11 MIA 2", nilai: 88, gender: "P" },
  { nama: "Ryan Hidayat", kelas: "11 MIA 2", nilai: 86, gender: "L" },
  { nama: "Tia Lestari", kelas: "11 MIA 2", nilai: 87, gender: "P" },

  // Kelas 12 MIA 1
  { nama: "Farhan Ramadhan", kelas: "12 MIA 1", nilai: 92, gender: "L" },
  { nama: "Cahaya Putri", kelas: "12 MIA 1", nilai: 94, gender: "P" },
  { nama: "Ilham Nugraha", kelas: "12 MIA 1", nilai: 90, gender: "L" },
  { nama: "Nabila Azzahra", kelas: "12 MIA 1", nilai: 93, gender: "P" },
  { nama: "Rafi Ahmad", kelas: "12 MIA 1", nilai: 89, gender: "L" },
  { nama: "Salma Khairunnisa", kelas: "12 MIA 1", nilai: 91, gender: "P" },
  { nama: "Faisal Akbar", kelas: "12 MIA 1", nilai: 88, gender: "L" },
  { nama: "Diana Puspita", kelas: "12 MIA 1", nilai: 92, gender: "P" },
  { nama: "Aditya Pratama", kelas: "12 MIA 1", nilai: 87, gender: "L" },
  { nama: "Aulia Rahman", kelas: "12 MIA 1", nilai: 94, gender: "P" },
];

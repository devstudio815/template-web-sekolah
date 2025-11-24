import {
  Home,
  Calendar,
  BookOpen,
  Users,
  Settings,
  LogOut,
  FileChartColumn,
} from "lucide-react";

export const DataSidebarGuru = [
  {
    name: "Dashboard",
    link: "/guru/dashboard",
    icon: "Home",
  },
  {
    name: "Jadwal Mengajar",
    link: "/guru/jadwal-mengajar",
    icon: "Calendar",
  },
  {
    name: "Mata Pelajaran",
    link: "/guru/mata-pelajaran",
    icon: "BookOpen",
  },
  {
    name: "Siswa",
    link: "/guru/siswa",
    icon: "Users",
  },
  {
    name: "Pengaturan",
    link: "/guru/pengaturan",
    icon: "Settings",
  },
];

export const DataSidebarKepsek = [
  {
    name: "Dashboard",
    link: "/kepala-sekolah/dashboard",
    icon: "Home",
  },
  {
    name: "Data Guru",
    link: "/kepala-sekolah/data-guru",
    icon: "Users",
  },
  {
    name: "Data Siswa",
    link: "/kepala-sekolah/data-siswa",
    icon: "Users",
  },
  {
    name: "Laporan Nilai",
    link: "/kepala-sekolah/laporan-nilai",
    icon: "FileChartColumn",
  },
  {
    name: "Jadwal Sekolah",
    link: "/kepala-sekolah/jadwal",
    icon: "Calendar",
  },
  {
    name: "Pengaturan",
    link: "/kepala-sekolah/pengaturan",
    icon: "Settings",
  },
];

export const iconMap = {
  Home,
  Calendar,
  BookOpen,
  FileChartColumn,
  Users,
  Calendar,
  Settings,
  LogOut,
};

export const iconMapKepsek = {
  Home,
  Users,
  Settings,
};

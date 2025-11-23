import { usersData } from "@/data";

export function useLogin({ username, password }) {
  // Cari user berdasarkan nama
  const found = usersData.find(
    (u) => u.nama.toLowerCase() === username.toLowerCase()
  );

  // Jika user tidak ditemukan
  if (!found) {
    return {
      success: false,
      message: "Username tidak ditemukan",
    };
  }

  // Jika password salah
  if (found.password !== password) {
    return {
      success: false,
      message: "Password salah",
    };
  }

  // Tentukan halaman redirect berdasarkan role
  let redirectTo = "/";

  switch (found.role) {
    case "siswa":
      redirectTo = "/siswa/dashboard";
      break;
    case "guru":
      redirectTo = "/guru/dashboard";
      break;
    case "kepala_sekolah":
      redirectTo = "/kepala-sekolah/dashboard";
      break;
    default:
      redirectTo = "/";
  }

  return {
    success: true,
    user: found,
    redirectTo,
  };
}

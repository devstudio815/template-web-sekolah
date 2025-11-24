export const getJadwalHariIni = (jadwalGuru) => {
  const hariIni = new Date().toLocaleDateString("id-ID", { weekday: "long" });
  return jadwalGuru
    .map((guru) => ({
      ...guru,
      jadwal: guru.jadwal.filter((j) => j.hari === hariIni),
    }))
    .filter((guru) => guru.jadwal.length > 0);
};

export const getTotalJamMengajar = (jadwalGuru) => {
  let totalSesi = 0;
  jadwalGuru.jadwal.forEach((hari) => {
    totalSesi += hari.sesi.length;
  });
  return totalSesi;
};

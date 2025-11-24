export function TableSiswa({ data }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border shadow-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[hsl(142,76%,36%)] text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">No</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              Nama Siswa
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Kelas</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              Gender
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Nilai</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((siswa, index) => (
            <tr
              key={index}
              className={`
                ${index % 2 === 0 ? "bg-white" : "bg-[hsl(142,50%,92%)]"}
                hover:bg-[hsl(142,50%,85%)] transition-colors duration-150
                border-b border-border
              `}
            >
              <td className="px-6 py-4 text-sm text-foreground">{index + 1}</td>
              <td className="px-6 py-4 text-sm font-medium text-foreground">
                {siswa.nama}
              </td>
              <td className="px-6 py-4 text-sm text-foreground">
                {siswa.kelas}
              </td>
              <td className="px-6 py-4 text-sm text-foreground">
                <span
                  className={`
                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${
                    siswa.gender === "L"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-pink-100 text-pink-800"
                  }
                `}
                >
                  {siswa.gender === "L" ? "Laki-laki" : "Perempuan"}
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-foreground">
                {siswa.nilai}
              </td>
              <td className="px-6 py-4 text-sm">
                <span
                  className={`
                  inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                  ${
                    siswa.nilai >= 75
                      ? "bg-[hsl(142,76%,36%)] text-white"
                      : "bg-[hsl(0,84%,60%)] text-white"
                  }
                `}
                >
                  {siswa.nilai >= 75 ? "Lulus" : "Tidak Lulus"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary Footer */}
      <div className="bg-[hsl(142,50%,92%)] px-6 py-4 border-t-2 border-[hsl(142,76%,36%)]">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-[hsl(142,76%,20%)]">
            Total Siswa: <span className="font-bold">{data.length}</span>
          </p>
          <p className="text-sm font-medium text-[hsl(142,76%,20%)]">
            Rata-rata Nilai:{" "}
            <span className="font-bold">
              {(
                data.reduce((sum, s) => sum + s.nilai, 0) / data.length
              ).toFixed(2)}
            </span>
          </p>
          <p className="text-sm font-medium text-[hsl(142,76%,20%)]">
            Lulus:{" "}
            <span className="font-bold text-[hsl(142,76%,36%)]">
              {data.filter((s) => s.nilai >= 75).length}
            </span>{" "}
            /
            <span className="font-bold text-[hsl(0,84%,60%)] ml-1">
              {data.filter((s) => s.nilai < 75).length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

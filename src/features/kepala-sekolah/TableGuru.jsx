export default function TableGuru({ data }) {
  return (
    <div className="overflow-x-auto rounded-xl border shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 font-medium">Nama Guru</th>
            <th className="p-3 font-medium">NIP</th>
            <th className="p-3 font-medium">Gender</th>
            <th className="p-3 font-medium">Mata Pelajaran</th>
          </tr>
        </thead>

        <tbody>
          {data.map((guru) => (
            <tr key={guru.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{guru.nama}</td>
              <td className="p-3">{guru.nip}</td>
              <td className="p-3">
                {guru.gender === "L" ? "Laki-laki" : "Perempuan"}
              </td>
              <td className="p-3">
                <div className="flex flex-wrap gap-2">
                  {guru.mapel.map((m, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-sm"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

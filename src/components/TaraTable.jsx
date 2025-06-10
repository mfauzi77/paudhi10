import useTaraData from "../data/useTaraData";

export default function TaraTable() {
  const data = useTaraData();
  if (!data.length) return null;

  const columns = Object.keys(data[0]);

  // Cek apakah kolom mengandung angka saja
  const isNumericColumn = (col) => {
    return data.every((row) =>
      typeof row[col] === "number" || !isNaN(Number(row[col]))
    );
  };

  // Format angka jadi 1.000.000 (lokal Indonesia)
  const formatNumber = (value) => {
    if (typeof value === "number" || !isNaN(Number(value))) {
      return new Intl.NumberFormat("id-ID").format(Number(value));
    }
    return value || "-";
  };

  return (
    <div className="overflow-x-auto bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Daftar Lengkap TARA ({data.length})
      </h2>
      <table className="min-w-full text-sm border-collapse table-auto">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {columns.map((c) => (
              <th
                key={c}
                className={`p-3 border capitalize font-semibold ${
                  isNumericColumn(c) ? "text-right w-32" : "text-left"
                }`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-50 hover:bg-gray-100 transition">
              {columns.map((c) => (
                <td
                  key={c}
                  className={`p-3 border whitespace-nowrap ${
                    isNumericColumn(c) ? "text-right" : "text-left"
                  }`}
                >
                  {isNumericColumn(c) ? formatNumber(row[c]) : row[c] || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

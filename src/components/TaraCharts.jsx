import useTaraData from "../data/useTaraData";
import { PieChart, Pie, Cell, Tooltip, Legend,
         BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8","#82ca9d","#ffc658","#ff7f50","#a1c4fd"];

export default function TaraCharts() {
  const data = useTaraData();

  // Pie - distribusi Peringkat
  const byRank = data.reduce((acc, d) => {
    const p = d.Peringkat?.trim() || "Tidak diketahui";
    acc[p] = (acc[p] || 0) + 1;
    return acc;
  }, {});
  const pieData = Object.entries(byRank).map(([name, value]) => ({name, value}));

  // Bar - rata-rata Skor per Provinsi
  const provMap = {};
  data.forEach((d) => {
    if (!provMap[d.Prov]) provMap[d.Prov] = {Prov: d.Prov, total:0, n:0};
    provMap[d.Prov].total += d.Skor;
    provMap[d.Prov].n += 1;
  });
  const barData = Object.values(provMap).map((p) => ({
    Prov: p.Prov,
    RataSkor: +(p.total / p.n).toFixed(1),
  })).sort((a,b)=>b.RataSkor-a.RataSkor);

  return (
    <div className="space-y-8">
      {/* PIE */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Distribusi Peringkat</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={110} label>
              {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip /><Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Rata-rata Skor per Provinsi</h3>
        <ResponsiveContainer width="100%" height={360}>
          <BarChart data={barData} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="Prov" type="category" width={120} />
            <Tooltip />
            <Bar dataKey="RataSkor" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// src/data/useTaraData.js
import raw from "./dataTara.json";

export default function useTaraData() {
  // header ada di indeks 1
  const headerRow = raw[1];
  const keys = Object.values(headerRow).filter(Boolean);      // buang kolom kosong
  const rows = raw.slice(2);                                  // mulai data asli

  // ubah tiap baris menjadi objek {Tahun: 2021, Prov: "...", ...}
  const data = rows.map((r) => {
    const obj = {};
    keys.forEach((k, i) => {
      obj[k] = r[`__${i}`] ?? r[""]; // kolom pertama pakai "", sisanya "__1", "__2", ...
    });
    return obj;
  });

  // contoh transform angka
  data.forEach((d) => {
    d.Skor = +d.Skor || 0;
  });

  return data;             // array bersih siap pakai
}

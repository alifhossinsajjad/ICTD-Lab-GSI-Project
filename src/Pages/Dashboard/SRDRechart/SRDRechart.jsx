// src/components/SRDRechart.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const DIVISIONS_8 = [
  "ঢাকা বিভাগ",
  "চট্টগ্রাম বিভাগ",
  "রাজশাহী বিভাগ",
  "খুলনা বিভাগ",
  "বরিশাল বিভাগ",
  "সিলেট বিভাগ",
  "রংপুর বিভাগ",
  "ময়মনসিংহ বিভাগ",
];

const SRDRechart = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("/srd-data300.json")
      .then((res) => res.json())
      .then((json) => setRows(Array.isArray(json) ? json : []))
      .catch(() => setRows([]));
  }, []);

  const divisionData = useMemo(() => {
    const countMap = new Map();

    rows.forEach((r) => {
      const division = (r?.division || "").trim();
      if (!division) return;
      countMap.set(division, (countMap.get(division) || 0) + 1);
    });

    return DIVISIONS_8.map((name) => ({
      division: name,
      total: countMap.get(name.replace(" বিভাগ", "")) || countMap.get(name) || 0,
    }));
  }, [rows]);

  return (
    <div className="w-full px-4 md:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[28px] overflow-hidden border border-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.12)] bg-gradient-to-br from-[#FFF7ED] via-[#FFFFFF] to-[#EFF6FF]">
          {/* Header */}
          <div className="px-6 md:px-8 py-6 bg-white/60 backdrop-blur-xl border-b border-black/10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-[#0F172A]">
                  বিভাগভিত্তিক ল্যাব সংখ্যা
                </h2>
                <p className="text-xs md:text-sm text-slate-600 mt-1">
                  SRD ডেটা (srd-data300.json) থেকে শুধুমাত্র ৮ বিভাগ
                </p>
              </div>

              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FB7185] to-[#F97316] text-white text-xs font-semibold shadow-sm">
                Bangladesh • SRD
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="p-5 md:p-8">
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-4 md:p-6">
              <div className="h-[340px] md:h-[430px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={divisionData}
                    margin={{ top: 10, right: 18, left: 5, bottom: 10 }}
                    barCategoryGap={20}
                  >
                    <CartesianGrid strokeDasharray="4 6" opacity={0.25} />
                    <XAxis
                      dataKey="division"
                      interval={0}
                      angle={-12}
                      height={70}
                      tick={{ fontSize: 12, fill: "#0F172A" }}
                      axisLine={{ stroke: "rgba(15,23,42,0.25)" }}
                      tickLine={{ stroke: "rgba(15,23,42,0.25)" }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: "#0F172A" }}
                      axisLine={{ stroke: "rgba(15,23,42,0.25)" }}
                      tickLine={{ stroke: "rgba(15,23,42,0.25)" }}
                    />
                    <Tooltip
                      cursor={{ fill: "rgba(15, 23, 42, 0.04)" }}
                      contentStyle={{
                        background: "rgba(255,255,255,0.98)",
                        border: "1px solid rgba(15,23,42,0.12)",
                        borderRadius: "16px",
                        boxShadow: "0 12px 45px rgba(0,0,0,0.12)",
                      }}
                      labelStyle={{ color: "#0F172A", fontWeight: 700 }}
                      itemStyle={{ color: "#0F172A" }}
                    />

                    <Bar
                      dataKey="total"
                      name="ল্যাব সংখ্যা"
                      radius={[14, 14, 14, 14]}
                      fill="#FB7185"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Footer Cards */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {divisionData.map((d) => (
                <div
                  key={d.division}
                  className="rounded-2xl bg-white/75 border border-black/10 px-4 py-3 shadow-sm"
                >
                  <p className="text-[11px] text-slate-600">{d.division}</p>
                  <p className="text-lg font-extrabold text-[#0F172A] mt-0.5">
                    {d.total}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SRDRechart;

// src/components/SRDRechart.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
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

// Gradient colors for each division
const DIVISION_COLORS = [
  "#10b981", // emerald-500
  "#059669", // emerald-600
  "#047857", // emerald-700
  "#3b82f6", // blue-500
  "#2563eb", // blue-600
  "#1d4ed8", // blue-700
  "#0ea5e9", // sky-500
  "#06b6d4", // cyan-500
];

const SRDRechart = () => {
  const [rows, setRows] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

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

  const totalLabs = useMemo(() => {
    return divisionData.reduce((sum, d) => sum + d.total, 0);
  }, [divisionData]);

  const maxLabs = useMemo(() => {
    return Math.max(...divisionData.map((d) => d.total), 0);
  }, [divisionData]);

  const avgLabs = useMemo(() => {
    return totalLabs > 0 ? Math.round(totalLabs / divisionData.length) : 0;
  }, [totalLabs, divisionData]);

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-xl border-2 border-emerald-200 rounded-2xl shadow-2xl p-4">
          <p className="text-sm font-bold text-gray-800 mb-1">
            {payload[0].payload.division}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"></div>
            <p className="text-lg font-extrabold text-emerald-600">
              {payload[0].value} টি ল্যাব
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full px-4 md:px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-3">
            বিভাগভিত্তিক ল্যাব বিশ্লেষণ
          </h2>
          <p className="text-gray-300 text-lg">
            বাংলাদেশের ৮টি বিভাগে স্থাপিত ল্যাবের পরিসংখ্যান
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {/* Total Labs */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <p className="text-emerald-100 text-sm font-semibold uppercase tracking-wider">
                  মোট ল্যাব
                </p>
                <svg className="w-8 h-8 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-5xl font-extrabold text-white mb-1">{totalLabs}</p>
              <p className="text-emerald-100 text-sm">সকল বিভাগে</p>
            </div>
          </div>

          {/* Average Labs */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider">
                  গড় ল্যাব
                </p>
                <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-5xl font-extrabold text-white mb-1">{avgLabs}</p>
              <p className="text-blue-100 text-sm">প্রতি বিভাগে</p>
            </div>
          </div>

          {/* Max Labs */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <p className="text-cyan-100 text-sm font-semibold uppercase tracking-wider">
                  সর্বোচ্চ ল্যাব
                </p>
                <svg className="w-8 h-8 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <p className="text-5xl font-extrabold text-white mb-1">{maxLabs}</p>
              <p className="text-cyan-100 text-sm">একক বিভাগে</p>
            </div>
          </div>
        </motion.div>

        {/* Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-white"
        >
          {/* Chart Header */}
          <div className="px-6 md:px-8 py-6 bg-gradient-to-r from-emerald-50 to-blue-50 border-b border-gray-200">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                  বিভাগভিত্তিক ল্যাব সংখ্যা
                </h3>
                <p className="text-sm text-gray-600">
                  প্রতিটি বিভাগে স্থাপিত ল্যাবের বিস্তারিত তথ্য
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>Bangladesh SRD</span>
              </div>
            </div>
          </div>

          {/* Chart Body */}
          <div className="p-6 md:p-8">
            <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-inner p-4 md:p-6">
              <div className="h-[400px] md:h-[480px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={divisionData}
                    margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                    barCategoryGap={18}
                    onMouseMove={(state) => {
                      if (state.isTooltipActive) {
                        setActiveIndex(state.activeTooltipIndex);
                      } else {
                        setActiveIndex(null);
                      }
                    }}
                  >
                    <defs>
                      {divisionData.map((entry, index) => (
                        <linearGradient
                          key={`gradient-${index}`}
                          id={`colorGradient-${index}`}
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor={DIVISION_COLORS[index]} stopOpacity={0.9} />
                          <stop offset="100%" stopColor={DIVISION_COLORS[index]} stopOpacity={0.6} />
                        </linearGradient>
                      ))}
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />

                    <XAxis
                      dataKey="division"
                      interval={0}
                      angle={-15}
                      textAnchor="end"
                      height={90}
                      tick={{ fontSize: 13, fill: "#374151", fontWeight: 600 }}
                      axisLine={{ stroke: "#d1d5db", strokeWidth: 2 }}
                      tickLine={{ stroke: "#d1d5db" }}
                    />

                    <YAxis
                      tick={{ fontSize: 13, fill: "#374151", fontWeight: 600 }}
                      axisLine={{ stroke: "#d1d5db", strokeWidth: 2 }}
                      tickLine={{ stroke: "#d1d5db" }}
                      label={{
                        value: 'ল্যাব সংখ্যা',
                        angle: -90,
                        position: 'insideLeft',
                        style: { fontSize: 14, fill: '#374151', fontWeight: 700 }
                      }}
                    />

                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(16, 185, 129, 0.1)" }} />

                    <Bar
                      dataKey="total"
                      name="ল্যাব সংখ্যা"
                      radius={[12, 12, 0, 0]}
                      animationDuration={1000}
                    >
                      {divisionData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={`url(#colorGradient-${index})`}
                          opacity={activeIndex === null || activeIndex === index ? 1 : 0.4}
                          style={{
                            filter: activeIndex === index ? 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))' : 'none',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Division Cards Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {divisionData.map((d, index) => (
                <motion.div
                  key={d.division}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative rounded-xl bg-white border-2 border-gray-100 hover:border-emerald-300 px-3 py-4 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${DIVISION_COLORS[index]}15 0%, white 100%)`
                  }}
                >
                  {/* Color indicator */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 rounded-t-xl"
                    style={{ backgroundColor: DIVISION_COLORS[index] }}
                  ></div>

                  <p className="text-xs text-gray-600 font-medium mb-2 line-clamp-2">
                    {d.division}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <p
                      className="text-2xl font-extrabold"
                      style={{ color: DIVISION_COLORS[index] }}
                    >
                      {d.total}
                    </p>
                    <span className="text-xs text-gray-500">টি</span>
                  </div>

                  {/* Percentage bar */}
                  <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${maxLabs > 0 ? (d.total / maxLabs) * 100 : 0}%`,
                        backgroundColor: DIVISION_COLORS[index]
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SRDRechart;

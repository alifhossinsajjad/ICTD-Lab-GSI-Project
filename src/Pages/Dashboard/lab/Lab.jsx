import { useEffect, useState, useMemo } from "react";
import {
  FaPrint,
  FaFileExcel,
  FaFileCsv,
  FaSyncAlt,
  FaUndo,
  FaSearch,
  FaFilter,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaPhone,
  FaUser
} from "react-icons/fa";
import * as XLSX from "xlsx";
import { motion, AnimatePresence } from "framer-motion";

const Lab = () => {
  const [labs, setLabs] = useState([]);
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(25);
  const [page, setPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  const fetchLabs = () => {
    fetch("/srd-data.json")
      .then((res) => res.json())
      .then((data) => {
        setLabs(data);
        setPage(1);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchLabs();
  }, []);

  const districts = useMemo(() => [...new Set(labs.map((l) => l.district))], [labs]);

  const upazilas = useMemo(() => [
    ...new Set(
      labs
        .filter((l) => !district || l.district === district)
        .map((l) => l.upazila)
    ),
  ], [labs, district]);

  const filtered = useMemo(() => labs.filter((lab) => {
    const matchesText = Object.values(lab)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    return (
      (!district || lab.district === district) &&
      (!upazila || lab.upazila === upazila) &&
      matchesText
    );
  }), [labs, district, upazila, search]);

  const start = (page - 1) * entries;
  const paginated = filtered.slice(start, start + entries);
  const totalPages = Math.ceil(filtered.length / entries);

  const resetFilters = () => {
    setDistrict("");
    setUpazila("");
    setSearch("");
    setPage(1);
  };

  const exportCSV = () => {
    const headers = [
      "ক্রম",
      "জেলা",
      "উপজেলা",
      "শিক্ষা প্রতিষ্ঠান",
      "প্রধান",
      "মোবাইল",
      "ইমেইল",
    ];

    const rows = filtered.map((l) => [
      l["sl."],
      l.district,
      l.upazila,
      l.institute,
      l.head,
      l.mobile,
      l.email,
    ]);

    const csv =
      headers.join(",") +
      "\n" +
      rows.map((r) => r.map((v) => `"${v}"`).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "srd-lab-list.csv";
    link.click();
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filtered);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "SRD Labs");
    XLSX.writeFile(workbook, "srd-lab-list.xlsx");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-emerald-950 py-8 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            এসআরডি ল্যাব তালিকা
          </h1>
          <p className="text-emerald-200/70 max-w-2xl mx-auto">
            সকল এসআরডি ল্যাবের বিস্তারিত তথ্য, যোগাযোগ এবং অবস্থান অনুসন্ধান করুন।
          </p>
        </div>

        {/* FILTER & SEARCH BAR */}
        <motion.div variants={itemVariants} className="bg-emerald-900/40 backdrop-blur-xl rounded-2xl shadow-lg border border-emerald-500/20 overflow-hidden mb-8 hover:shadow-emerald-500/10 transition-shadow duration-300">
          <div
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-emerald-500/10 transition-all duration-200 border-b border-emerald-500/20"
          >
            <div className="flex items-center gap-2 font-semibold text-emerald-100">
              <FaFilter className="text-emerald-400" />
              <span>ফিল্টার অপশন</span>
            </div>
            {isFilterOpen ? <FaChevronUp className="text-emerald-200" /> : <FaChevronDown className="text-emerald-200" />}
          </div>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-emerald-500/20"
              >
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">জেলা</label>
                    <select
                      value={district}
                      onChange={(e) => {
                        setDistrict(e.target.value);
                        setUpazila("");
                      }}
                      className="w-full bg-emerald-950/50 border border-emerald-500/30 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 outline-none transition-all shadow-sm hover:border-emerald-400"
                    >
                      <option value="" className="bg-emerald-900">সকল জেলা</option>
                      {districts.map((d) => <option key={d} value={d} className="bg-emerald-900">{d}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">উপজেলা</label>
                    <select
                      value={upazila}
                      onChange={(e) => setUpazila(e.target.value)}
                      className="w-full bg-emerald-950/50 border border-emerald-500/30 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 outline-none transition-all shadow-sm hover:border-emerald-400"
                    >
                      <option value="" className="bg-emerald-900">সকল উপজেলা</option>
                      {upazilas.map((u) => <option key={u} value={u} className="bg-emerald-900">{u}</option>)}
                    </select>
                  </div>
                </div>
                <div className="px-6 pb-6 flex justify-end">
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-2 bg-emerald-800/50 hover:bg-emerald-700/50 text-emerald-100 px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg border border-emerald-500/30"
                  >
                    <FaUndo className="text-xs" />
                    রিসেট ফিল্টার
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CONTROLS & SEARCH */}
        <motion.div variants={itemVariants} className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <div className="flex items-center gap-2 bg-emerald-900/40 border border-emerald-500/30 rounded-xl px-3 py-2 shadow-md hover:shadow-lg transition-shadow">
              <span className="text-sm text-emerald-200 font-medium">Show</span>
              <select
                value={entries}
                onChange={(e) => {
                  setEntries(+e.target.value);
                  setPage(1);
                }}
                className="bg-transparent font-semibold text-white outline-none cursor-pointer [&>option]:bg-emerald-900"
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            <div className="h-8 w-[1px] bg-emerald-500/20 mx-1 hidden sm:block"></div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={exportExcel}
                className="cursor-pointer flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-emerald-500/20 transition-all border border-emerald-500 hover:scale-105"
              >
                <FaFileExcel />
                Excel
              </button>
              <button
                onClick={exportCSV}
                className="cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-blue-500/20 transition-all border border-blue-500 hover:scale-105"
              >
                <FaFileCsv />
                CSV
              </button>
              <button
                onClick={fetchLabs}
                className="cursor-pointer flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-gray-500/20 transition-all border border-gray-600 hover:scale-105"
              >
                <FaSyncAlt />
                Reload
              </button>
              <button
                onClick={() => window.print()}
                className="cursor-pointer flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-rose-500/20 transition-all border border-rose-500 hover:scale-105"
              >
                <FaPrint />
                Print
              </button>
            </div>
          </div>

          <div className="relative w-full lg:w-72">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" />
            <input
              className="w-full bg-emerald-950/50 border border-emerald-500/30 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white shadow-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 outline-none transition-all hover:border-emerald-400 focus:shadow-lg placeholder-emerald-500/50"
              placeholder="Search labs..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </motion.div>

        {/* TABLE SECTION */}
        <motion.div
          variants={itemVariants}
          className="bg-emerald-900/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-500/20 overflow-hidden hover:shadow-emerald-500/10 transition-shadow duration-300"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-emerald-950/80 border-b border-emerald-500/30">
                  {[
                    "ক্রম",
                    "জেলা",
                    "উপজেলা",
                    "প্রতিষ্ঠান",
                    "প্রধান",
                    "মোবাইল",
                    "ইমেইল",
                  ].map((h) => (
                    <th key={h} className="px-6 py-4 font-semibold text-emerald-100 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-500/10">
                <AnimatePresence mode="wait">
                  {paginated.length > 0 ? (
                    paginated.map((l, i) => (
                      <motion.tr
                        key={l["sl."] || `${l.district}-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="hover:bg-emerald-500/10 transition-all duration-200 group border-b border-emerald-500/5 hover:shadow-md"
                      >
                        <td className={`px-6 font-medium text-emerald-400 ${start + i + 1 === 1 ? 'py-5' : 'py-4'}`}>
                          {l["sl."]}
                        </td>
                        <td className="px-6 py-4 text-emerald-100/80">{l.district}</td>
                        <td className="px-6 py-4 text-emerald-100/80">{l.upazila}</td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-white">{l.institute}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-emerald-200/70">
                            <FaUser className="text-xs text-emerald-500" />
                            <span className="text-sm">{l.head}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-emerald-200/70">
                            <FaPhone className="text-xs text-emerald-500" />
                            <span className="text-sm">{l.mobile}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-emerald-200/70 hover:text-emerald-400 transition-colors cursor-pointer">
                            <FaEnvelope className="text-xs" />
                            <span className="text-xs">{l.email}</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center gap-2 text-emerald-500/30">
                          <FaSearch className="text-4xl opacity-50" />
                          <p>কোন তথ্য পাওয়া যায়নি</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="px-6 py-4 bg-emerald-950/50 border-t border-emerald-500/20 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-inner">
            <p className="text-sm text-emerald-200/60">
              Showing <span className="font-semibold text-white">{start + 1}</span> to{" "}
              <span className="font-semibold text-white">{Math.min(start + entries, filtered.length)}</span> of{" "}
              <span className="font-semibold text-white">{filtered.length}</span> entries
            </p>

            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 bg-emerald-900/50 border border-emerald-500/30 rounded-xl text-sm font-semibold text-emerald-100 hover:bg-emerald-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {[...Array(Math.min(5, totalPages))].map((_, i) => {
                  let pageNum;
                  if (totalPages <= 5) pageNum = i + 1;
                  else if (page <= 3) pageNum = i + 1;
                  else if (page >= totalPages - 2) pageNum = totalPages - 4 + i;
                  else pageNum = page - 2 + i;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all ${page === pageNum
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 border border-emerald-500 scale-110"
                        : "bg-emerald-900/50 border border-emerald-500/30 text-emerald-100 hover:bg-emerald-800/50 shadow-md hover:shadow-lg hover:scale-105"
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 bg-emerald-900/50 border border-emerald-500/30 rounded-xl text-sm font-semibold text-emerald-100 hover:bg-emerald-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Lab;

import { useEffect, useState, useMemo } from "react";
import {
  FaDownload,
  FaPrint,
  FaFileExcel,
  FaFileCsv,
  FaSyncAlt,
  FaUndo,
  FaSearch,
  FaFilter,
  FaChevronDown,
  FaChevronUp,
  FaFlask,
  FaMapMarkerAlt,
  FaBuilding,
  FaEnvelope
} from "react-icons/fa";
import * as XLSX from "xlsx";
import { motion, AnimatePresence } from "framer-motion";

const Lab = () => {
  const [labs, setLabs] = useState([]);
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(25);
  const [page, setPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [phase, setPhase] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [labType, setLabType] = useState("");

  const fetchLabs = () => {
    fetch("/lab.json")
      .then((res) => res.json())
      .then((data) => {
        setLabs(data);
        setPage(1);
      });
  };

  useEffect(() => {
    fetchLabs();
  }, []);

  const phases = useMemo(() => [...new Set(labs.map((l) => l.phase))], [labs]);
  const divisions = useMemo(() => [...new Set(labs.map((l) => l.division))], [labs]);

  const districts = useMemo(() => [
    ...new Set(
      labs
        .filter((l) => !division || l.division === division)
        .map((l) => l.district)
    ),
  ], [labs, division]);

  const upazilas = useMemo(() => [
    ...new Set(
      labs
        .filter(
          (l) =>
            (!division || l.division === division) &&
            (!district || l.district === district)
        )
        .map((l) => l.upazila)
    ),
  ], [labs, division, district]);

  const labTypes = ["SOF", "SRDL", "SOF & SRDL"];

  const filtered = useMemo(() => labs.filter((lab) => {
    const matchesText = Object.values(lab)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    return (
      (!phase || lab.phase === phase) &&
      (!division || lab.division === division) &&
      (!district || lab.district === district) &&
      (!upazila || lab.upazila === upazila) &&
      (!labType || lab.institute.includes(labType)) &&
      matchesText
    );
  }), [labs, phase, division, district, upazila, labType, search]);

  const start = (page - 1) * entries;
  const paginated = filtered.slice(start, start + entries);
  const totalPages = Math.ceil(filtered.length / entries);

  const resetFilters = () => {
    setPhase("");
    setDivision("");
    setDistrict("");
    setUpazila("");
    setLabType("");
    setSearch("");
    setPage(1);
  };

  const exportCSV = () => {
    const headers = [
      "পর্যায়",
      "বিভাগ",
      "জেলা",
      "উপজেলা",
      "শিক্ষা প্রতিষ্ঠান",
      "Lab Code",
      "ইমেইল",
    ];

    const rows = filtered.map((l) => [
      l.phase,
      l.division,
      l.district,
      l.upazila,
      l.institute,
      l.labCode,
      l.email,
    ]);

    const csv =
      headers.join(",") +
      "\n" +
      rows.map((r) => r.map((v) => `"${v}"`).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ictd-lab-list.csv";
    link.click();
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filtered);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ICTD Labs");
    XLSX.writeFile(workbook, "ictd-lab-list.xlsx");
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
      className="min-h-screen bg-emerald-50 py-8 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto mt-16">
        {/* HEADER SECTION */}
        <div  className="text-center mb-10">
         
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            আইসিটি ডিজিটাল ল্যাব তালিকা
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ১ম ও ২য় পর্যায়ের সকল আইসিটি ডিজিটাল ল্যাবের বিস্তারিত তথ্য এবং অবস্থান অনুসন্ধান করুন।
          </p>
        </div>


        {/* FILTER & SEARCH BAR */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2 font-semibold text-gray-700">
              <FaFilter className="text-green-600" />
              <span>ফিল্টার অপশন</span>
            </div>
            {isFilterOpen ? <FaChevronUp className="text-black" /> : <FaChevronDown className="text-black" />}
          </div>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-100"
              >
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">পর্যায়</label>
                    <select
                      value={phase}
                      onChange={(e) => setPhase(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                    >
                      <option value="">সকল পর্যায়</option>
                      {phases.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">বিভাগ</label>
                    <select
                      value={division}
                      onChange={(e) => {
                        setDivision(e.target.value);
                        setDistrict("");
                        setUpazila("");
                      }}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                    >
                      <option value="">সকল বিভাগ</option>
                      {divisions.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">জেলা</label>
                    <select
                      value={district}
                      onChange={(e) => {
                        setDistrict(e.target.value);
                        setUpazila("");
                      }}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                    >
                      <option value="">সকল জেলা</option>
                      {districts.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">উপজেলা</label>
                    <select
                      value={upazila}
                      onChange={(e) => setUpazila(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                    >
                      <option value="">সকল উপজেলা</option>
                      {upazilas.map((u) => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">ল্যাবের ধরন</label>
                    <select
                      value={labType}
                      onChange={(e) => setLabType(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                    >
                      <option value="">সকল ধরন</option>
                      {labTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="px-6 pb-6 flex justify-end">
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
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
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
              <span className="text-sm text-gray-500">Show</span>
              <select
                value={entries}
                onChange={(e) => {
                  setEntries(+e.target.value);
                  setPage(1);
                }}
                className="bg-transparent font-semibold text-gray-700 outline-none cursor-pointer"
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            <div className="h-8 w-[1px] bg-gray-200 mx-1 hidden sm:block"></div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={exportExcel}
                className="cursor-pointer flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all"
              >
                <FaFileExcel />
                Excel
              </button>
              <button
                onClick={exportCSV}
                className="cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all"
              >
                <FaFileCsv />
                CSV
              </button>
              <button
                onClick={fetchLabs}
                className="cursor-pointer flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all"
              >
                <FaSyncAlt />
                Reload
              </button>
              <button
                onClick={() => window.print()}
                className="cursor-pointer flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all"
              >
                <FaPrint />
                Print
              </button>
            </div>
          </div>

          <div className="relative w-full lg:w-72">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 text-sm shadow-sm focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
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
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  {[
                    "ক্রম",
                    "পর্যায়",
                    "বিভাগ",
                    "জেলা",
                    "উপজেলা",
                    "প্রতিষ্ঠান",
                    "Lab Code",
                    "ইমেইল",
                  ].map((h) => (
                    <th key={h} className="px-6 py-4 font-semibold text-gray-700 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <AnimatePresence mode="wait">
                  {paginated.length > 0 ? (
                    paginated.map((l, i) => (
                      <motion.tr
                        key={l.id || `${l.labCode}-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="hover:bg-green-50/30 transition-colors group"
                      >
                        <td className={`px-6 font-medium text-gray-500 ${start + i + 1===1?'py-5':'py-4'}`}>
                          {start + i + 1}
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">
                            {l.phase}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{l.division}</td>
                        <td className="px-6 py-4 text-gray-600">{l.district}</td>
                        <td className="px-6 py-4 text-gray-600">{l.upazila}</td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900">{l.institute}</div>
                        </td>
                        <td className="px-6 py-4">
                          <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-mono">
                            {l.labCode}
                          </code>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors cursor-pointer">
                            <FaEnvelope className="text-xs" />
                            <span className="text-xs">{l.email}</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center gap-2 text-gray-400">
                          <FaSearch className="text-4xl opacity-20" />
                          <p>কোন তথ্য পাওয়া যায়নি</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-900">{start + 1}</span> to{" "}
              <span className="font-semibold text-gray-900">{Math.min(start + entries, filtered.length)}</span> of{" "}
              <span className="font-semibold text-gray-900">{filtered.length}</span> entries
            </p>

            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
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
                          ? "bg-green-600 text-white shadow-md shadow-green-200"
                          : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
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
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
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


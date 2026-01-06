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
      className="min-h-screen bg-emerald-50 py-8 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto mt-16">
        {/* HEADER SECTION */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            এসআরডি ল্যাব তালিকা
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            সকল এসআরডি ল্যাবের বিস্তারিত তথ্য, যোগাযোগ এবং অবস্থান অনুসন্ধান করুন।
          </p>
        </div>

        {/* FILTER & SEARCH BAR */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300">
          <div
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200 border-b border-gray-100"
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
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">জেলা</label>
                    <select
                      value={district}
                      onChange={(e) => {
                        setDistrict(e.target.value);
                        setUpazila("");
                      }}
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-600 outline-none transition-all shadow-sm hover:border-green-400"
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
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-600 outline-none transition-all shadow-sm hover:border-green-400"
                    >
                      <option value="">সকল উপজেলা</option>
                      {upazilas.map((u) => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>
                </div>
                <div className="px-6 pb-6 flex justify-end">
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg border border-gray-300"
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
            <div className="flex items-center gap-2 bg-white border-2 border-gray-300 rounded-xl px-3 py-2 shadow-md hover:shadow-lg transition-shadow">
              <span className="text-sm text-gray-600 font-medium">Show</span>
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
                className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all border border-green-700 hover:scale-105"
              >
                <FaFileExcel />
                Excel
              </button>
              <button
                onClick={exportCSV}
                className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all border border-blue-700 hover:scale-105"
              >
                <FaFileCsv />
                CSV
              </button>
              <button
                onClick={fetchLabs}
                className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all border border-gray-900 hover:scale-105"
              >
                <FaSyncAlt />
                Reload
              </button>
              <button
                onClick={() => window.print()}
                className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all border border-red-700 hover:scale-105"
              >
                <FaPrint />
                Print
              </button>
            </div>
          </div>

          <div className="relative w-full lg:w-72">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              className="w-full bg-white border-2 border-gray-300 rounded-xl pl-11 pr-4 py-2.5 text-sm shadow-md focus:ring-2 focus:ring-green-500 focus:border-green-600 outline-none transition-all hover:border-green-400 focus:shadow-lg"
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
          className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden hover:shadow-3xl transition-shadow duration-300"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-emerald-200 shadow-sm">
                  {[
                    "ক্রম",
                    "জেলা",
                    "উপজেলা",
                    "প্রতিষ্ঠান",
                    "প্রধান",
                    "মোবাইল",
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
                        key={l["sl."] || `${l.district}-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200 group border-b border-gray-100 hover:shadow-md"
                      >
                        <td className={`px-6 font-medium text-gray-500 ${start + i + 1 === 1 ? 'py-5' : 'py-4'}`}>
                          {l["sl."]}
                        </td>
                        <td className="px-6 py-4 text-gray-600">{l.district}</td>
                        <td className="px-6 py-4 text-gray-600">{l.upazila}</td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900">{l.institute}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <FaUser className="text-xs text-gray-400" />
                            <span className="text-sm">{l.head}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <FaPhone className="text-xs text-gray-400" />
                            <span className="text-sm">{l.mobile}</span>
                          </div>
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
                      <td colSpan="7" className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center gap-2 text-gray-400">
                          <FaSearch className="text-4xl opacity-20" />
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
          <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-inner">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-900">{start + 1}</span> to{" "}
              <span className="font-semibold text-gray-900">{Math.min(start + entries, filtered.length)}</span> of{" "}
              <span className="font-semibold text-gray-900">{filtered.length}</span> entries
            </p>

            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 bg-white border-2 border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
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
                        ? "bg-gradient-to-br from-green-600 to-green-700 text-white shadow-lg shadow-green-300 border-2 border-green-600 scale-110"
                        : "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 shadow-md hover:shadow-lg hover:scale-105"
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
                className="px-4 py-2 bg-white border-2 border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
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

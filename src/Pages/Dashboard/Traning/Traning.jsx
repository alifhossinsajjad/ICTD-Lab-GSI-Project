import React, { useState, useMemo } from "react";
import * as XLSX from "xlsx";
import {
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineDownload,
  HiOutlinePrinter,
  HiOutlineRefresh,
  HiOutlinePencilAlt,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import { FaFileCsv, FaFileExcel } from "react-icons/fa";
import { Link } from "react-router";

const mockData = [
  {
    id: 1,
    stage: "1st",
    upazila: "Lakshmipur Sadar",
    institution: "Janata Degree College-1279",
    name: "Belial Hossain",
    lastName: "Lecturer",
    gender: "male",
    qualification: "mcom",
    mobile: "01730182340",
    traineeId: "1138",
    batch: "199",
    registrationDate: "Mon, Mar 13, 2023 5:06 AM",
    vendor: "Vendor A",
    labType: "Type A",
  },
  {
    id: 2,
    stage: "1st",
    upazila: "Lakshmipur Sadar",
    institution: "Janata Degree College-1279",
    name: "Md. Hafizur Rahman",
    lastName: "Lecturer",
    gender: "male",
    qualification: "mcom",
    mobile: "01612213746",
    traineeId: "1139",
    batch: "199",
    registrationDate: "Mon, Mar 13, 2023 5:06 AM",
    vendor: "Vendor B",
    labType: "Type B",
  },
  {
    id: 3,
    stage: "2nd",
    upazila: "Raipur",
    institution: "Raipur Pilot High School",
    name: "Mohammad Salahuddin",
    lastName: "Lecturer",
    gender: "male",
    qualification: "mcom",
    mobile: "01880394260",
    traineeId: "1140",
    batch: "200",
    registrationDate: "Mon, Mar 13, 2023 5:06 AM",
    vendor: "Vendor A",
    labType: "Type A",
  },
  {
    id: 4,
    stage: "2nd",
    upazila: "Ramganj",
    institution: "Ramganj Model College",
    name: "Nasrin Akter",
    lastName: "Teacher",
    gender: "female",
    qualification: "bsc",
    mobile: "01912345678",
    traineeId: "1141",
    batch: "201",
    registrationDate: "Tue, Mar 14, 2023 10:00 AM",
    vendor: "Vendor C",
    labType: "Type C",
  },
  {
    id: 5,
    stage: "1st",
    upazila: "Lakshmipur Sadar",
    institution: "Lakshmipur Gov. College",
    name: "Abdul Karim",
    lastName: "Professor",
    gender: "male",
    qualification: "phd",
    mobile: "01555666777",
    traineeId: "1142",
    batch: "199",
    registrationDate: "Wed, Mar 15, 2023 11:30 AM",
    vendor: "Vendor A",
    labType: "Type B",
  },
];

const Traning = () => {
  // State Management
  const [entriesPerPage, setEntriesPerPage] = useState(25);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    stage: "",
    upazila: "",
    labType: "",
    vendor: "",
    batch: "",
  });

  // Filter Logic
  const filteredData = useMemo(() => {
    return mockData.filter((item) => {
      // Global Search
      const matchesSearch = Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Specific Filters
      const matchesStage = filters.stage ? item.stage === filters.stage : true;
      const matchesUpazila = filters.upazila
        ? item.upazila === filters.upazila
        : true;
      const matchesLabType = filters.labType
        ? item.labType === filters.labType
        : true;
      const matchesVendor = filters.vendor
        ? item.vendor === filters.vendor
        : true;
      const matchesBatch = filters.batch
        ? item.batch.includes(filters.batch)
        : true;

      return (
        matchesSearch &&
        matchesStage &&
        matchesUpazila &&
        matchesLabType &&
        matchesVendor &&
        matchesBatch
      );
    });
  }, [searchTerm, filters]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentEntries = filteredData.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  // Handlers
  const handleExport = (type) => {
    if (type === "print") {
      window.print();
      return;
    }
    if (type === "reload") {
      window.location.reload();
      return;
    }
    if (type === "reset") {
      setFilters({
        stage: "",
        upazila: "",
        labType: "",
        vendor: "",
        batch: "",
      });
      setSearchTerm("");
      setCurrentPage(1);
      return;
    }

    // Excel/CSV
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Trainees");
    const fileName = `Trainees_Report_${new Date().toISOString().split("T")[0]
      }.${type === "excel" ? "xlsx" : "csv"}`;
    XLSX.writeFile(wb, fileName);
  };

  return (
    <div className="min-h-screen bg-emerald-950 p-6 space-y-6">
      <style>
        {`
          @media print {
            .no-print { display: none !important; }
            .print-only { display: block !important; }
            body { background-color: white; }
            .p-6 { padding: 0 !important; }
          }
        `}
      </style>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 no-print">
        <div>
          <h1 className="text-4xl font-bold text-white">
            ট্রেনিং ম্যানেজমেন্ট
          </h1>
          <p className="text-emerald-200/70 mt-2 text-lg">
            লক্ষ্মীপুর দেশের ট্রেনিং ম্যানেজমেন্ট সম্পর্কে মনোন করুন
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-3"></div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleExport("excel")}
            className="cursor-pointer flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all text-sm font-semibold border border-emerald-500/30"
          >
            <HiOutlineDownload className="w-5 h-5" />
            Download Report
          </button>
        </div>
      </div>

      {/* Filters Card */}
      <div className="bg-emerald-900/40 backdrop-blur-xl rounded-xl shadow-sm border border-emerald-500/20 p-5 no-print">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-emerald-500/20">
          <HiOutlineFilter className="text-emerald-400" />
          <span className="text-sm font-semibold text-emerald-100">
            Advanced Filters
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Stage Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-emerald-400 uppercase">
              Stage
            </label>
            <select
              value={filters.stage}
              onChange={(e) =>
                setFilters({ ...filters, stage: e.target.value })
              }
              className="w-full px-3 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-emerald-100"
            >
              <option value="">All Stages</option>
              <option value="1st">1st Stage</option>
              <option value="2nd">2nd Stage</option>
            </select>
          </div>

          {/* Upazila Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-emerald-400 uppercase">
              Upazila
            </label>
            <select
              value={filters.upazila}
              onChange={(e) =>
                setFilters({ ...filters, upazila: e.target.value })
              }
              className="w-full px-3 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-emerald-100"
            >
              <option value="">All Upazilas</option>
              <option value="Lakshmipur Sadar">Lakshmipur Sadar</option>
              <option value="Raipur">Raipur</option>
              <option value="Ramganj">Ramganj</option>
            </select>
          </div>

          {/* Lab Type Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-emerald-400 uppercase">
              Lab Type
            </label>
            <select
              value={filters.labType}
              onChange={(e) =>
                setFilters({ ...filters, labType: e.target.value })
              }
              className="w-full px-3 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-emerald-100"
            >
              <option value="">All Types</option>
              <option value="Type A">Type A</option>
              <option value="Type B">Type B</option>
              <option value="Type C">Type C</option>
            </select>
          </div>

          {/* Vendor Filter */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-emerald-400 uppercase">
              Vendor
            </label>
            <select
              value={filters.vendor}
              onChange={(e) =>
                setFilters({ ...filters, vendor: e.target.value })
              }
              className="w-full px-3 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-emerald-100"
            >
              <option value="">All Vendors</option>
              <option value="Vendor A">Vendor A</option>
              <option value="Vendor B">Vendor B</option>
              <option value="Vendor C">Vendor C</option>
            </select>
          </div>

          {/* Batch Filter - Input for flexibility */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-emerald-400 uppercase">
              Batch
            </label>
            <div className="relative">
              <input
                type="text"
                value={filters.batch}
                onChange={(e) =>
                  setFilters({ ...filters, batch: e.target.value })
                }
                placeholder="Search Batch..."
                className="w-full px-3 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-emerald-100 pl-3 placeholder-emerald-500/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-emerald-900/40 backdrop-blur-xl rounded-xl shadow-sm border border-emerald-500/20 overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-5 border-b border-emerald-500/20 flex flex-col md:flex-row gap-4 justify-between items-center bg-emerald-950/30 no-print">
          {/* Search */}
          <div className="relative w-full md:w-80 order-2 md:order-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineSearch className="h-5 w-5 text-emerald-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-lg focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-sm transition-all text-white placeholder-emerald-500/50"
              placeholder="Search trainees..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 order-1 md:order-2 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => handleExport("excel")}
              className="cursor-pointer p-2 text-emerald-300 bg-emerald-800/50 hover:bg-emerald-700/50 border border-emerald-500/30 rounded-lg transition-colors"
              title="Export Excel"
            >
              <FaFileExcel className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleExport("csv")}
              className="cursor-pointer p-2 text-blue-300 bg-blue-900/30 hover:bg-blue-800/50 border border-blue-500/30 rounded-lg transition-colors"
              title="Export CSV"
            >
              <FaFileCsv className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleExport("print")}
              className="cursor-pointer p-2 text-emerald-300 bg-emerald-800/50 hover:bg-emerald-700/50 border border-emerald-500/30 rounded-lg transition-colors"
              title="Print Table"
            >
              <HiOutlinePrinter className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleExport("reload")}
              className="cursor-pointer p-2 text-emerald-300 bg-emerald-800/50 hover:bg-emerald-700/50 border border-emerald-500/30 rounded-lg transition-colors"
              title="Reload Data"
            >
              <HiOutlineRefresh className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleExport("reset")}
              className="cursor-pointer px-3 py-2 text-sm font-medium text-orange-300 bg-orange-900/30 hover:bg-orange-800/50 border border-orange-500/30 rounded-lg transition-colors flex items-center gap-1"
              title="Reset All"
            >
              <HiOutlineRefresh className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-emerald-950/50 border-b border-emerald-500/20 text-emerald-400 font-semibold uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Trainee</th>
                <th className="px-6 py-4">Institution</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Stage</th>
                <th className="px-6 py-4">Batch</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4 text-center no-print">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-500/10">
              {currentEntries.length > 0 ? (
                currentEntries.map((trainee, index) => (
                  <tr
                    key={trainee.id}
                    className="hover:bg-emerald-800/30 transition-all duration-300 group border-l-4 border-transparent hover:border-emerald-500"
                  >
                    <td className="px-6 py-4 text-emerald-500/50 font-medium">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-white">
                          {trainee.name}
                        </span>
                        <span className="text-xs text-emerald-400/70">
                          {trainee.lastName} • ID: {trainee.traineeId}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className="max-w-xs truncate text-emerald-100"
                        title={trainee.institution}
                      >
                        {trainee.institution}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-emerald-200/70">
                      {trainee.upazila}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {trainee.stage}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-emerald-300">
                      {trainee.batch}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-emerald-100">{trainee.mobile}</span>
                        <span className="text-xs text-emerald-500/70 capitalize">
                          {trainee.gender}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center no-print">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          to={"/dashboard/trainingUpdate"}
                          className="flex items-center gap-2 px-4 py-2 text-emerald-300 bg-emerald-900/50 hover:bg-emerald-800/50 border border-emerald-500/30 rounded-lg transition-all shadow-sm hover:shadow font-medium text-sm"
                        >
                          <HiOutlinePencilAlt className="w-5 h-5" />
                          Update
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="px-6 py-12 text-center text-emerald-400/50"
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <HiOutlineSearch className="w-10 h-10 text-emerald-500/30" />
                      <p>No trainees found matching your filters.</p>
                      <button
                        onClick={() => handleExport("reset")}
                        className="text-emerald-400 hover:text-emerald-300 hover:underline text-sm"
                      >
                        Clear all filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-emerald-500/20 bg-emerald-950/30 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
          <div className="flex items-center gap-2 text-sm text-emerald-300">
            <span>Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-emerald-500/30 rounded-md py-1 pl-2 pr-6 text-sm focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-900/50 text-emerald-100"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>entries</span>
            <span className="hidden sm:inline-block ml-2 text-emerald-500/50 border-l border-emerald-500/20 pl-3">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + entriesPerPage, filteredData.length)} of{" "}
              {filteredData.length} records
            </span>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 border border-emerald-500/30 rounded-lg hover:bg-emerald-800/50 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-emerald-300 transition-all bg-transparent"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${currentPage === i + 1
                      ? "bg-emerald-600 text-white shadow-sm border border-emerald-500"
                      : "text-emerald-300 hover:bg-emerald-800/50 hover:text-white border border-transparent"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 border border-emerald-500/30 rounded-lg hover:bg-emerald-800/50 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-emerald-300 transition-all bg-transparent"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Traning;

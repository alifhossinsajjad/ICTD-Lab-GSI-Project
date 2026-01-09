import React, { useState, useMemo } from "react";
import {
  HiOutlineSearch,
  HiOutlinePencil,
  HiOutlineExclamationCircle,
  HiOutlineFilter,
  HiOutlineDownload,
  HiOutlinePrinter,
  HiOutlineRefresh,
} from "react-icons/hi";
import { FaFileCsv, FaFileExcel } from "react-icons/fa";
import * as XLSX from "xlsx";
import { Link } from "react-router";

const LabsUnderControl = () => {
  const [filters, setFilters] = useState({
    stage: "",
    upazila: "All",
    labType: "All",
  });
  const [entriesPerPage, setEntriesPerPage] = useState(25);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  //load with fake data
  const labsData = [
    {
      id: 1,
      stage: "2nd",
      category: "Chittagong",
      district: "Lakshmipur",
      constituency: "349 women seats-49",
      upazila: "Raipur",
      institution: "Haiderganj Rokeya Hasmatennesa Girls High School-5707",
      head: "Mohammad Zakir Hossain",
      contact: "01309107008,01718259949",
      email: "info107008@gmail.com",
    },
    {
      id: 2,
      stage: "2nd",
      category: "Chittagong",
      district: "Lakshmipur",
      constituency: "274 Lakshmipur-1",
      upazila: "Ramganj",
      institution: "Noagaon Janakalyan High School-5682 (SOF & SRDL)",
      head: "Mohammad Humayun Kabir",
      contact: "01818929672,01309107067",
      email: "njkhs1961@gmail.com",
    },
    {
      id: 3,
      stage: "2nd",
      category: "Chittagong",
      district: "Lakshmipur",
      constituency: "274 Lakshmipur-1",
      upazila: "Ramganj",
      institution: "Athakara High School-5677",
      head: "Md. Mojibul Haque",
      contact: "01714349476,01720698455",
      email: "athakaraha@gmail.com",
    },
    {
      id: 4,
      stage: "2nd",
      category: "Chittagong",
      district: "Lakshmipur",
      constituency: "274 Lakshmipur-1",
      upazila: "Ramganj",
      institution: "Kanchanpur High School-5678",
      head: "Md. Rafiqul Islam",
      contact: "01309107060,01712154971",
      email: "kanchanpurhighschool1933@gmail.com",
    },
    {
      id: 5,
      stage: "2nd",
      category: "Chittagong",
      district: "Lakshmipur",
      constituency: "274 Lakshmipur-1",
      upazila: "Ramganj",
      institution: "Darbeshpur High School-5679",
      head: "Biswajit Bhowmik",
      contact: "01309107076,01712141328",
      email: "bishawjit141328@gmail.com",
    },
    {
      id: 6,
      stage: "2nd",
      category: "Chittagong",
      district: "Lakshmipur",
      constituency: "274 Lakshmipur-1",
      upazila: "Ramganj",
      institution: "Nagmud Bazar High School-5680",
      head: "A.F.M. Abdus Salam",
      contact: "01716149299,01309107077",
      email: "nbhs.ramganj2018@gmail.com",
    },
    {
      id: 7,
      stage: "2nd",
      category: "Chittagong",
      district: "Lakshmipur",
      constituency: "274 Lakshmipur-1",
      upazila: "Ramganj",
      institution: "Nichahara Social Welfare High School-5681",
      head: "Md. Billal Hossain Majumder",
      contact: "01309107070,01714349648",
      email: "nichaharaskhs68@gmail.com",
    },
    {
      id: 8,
      stage: "2nd",
      category: "Chittagong",
      district: "Lakshmipur",
      constituency: "274 Lakshmipur-1",
      upazila: "Ramganj",
      institution: "Bigha Ahmadiya Fazil Madrasa-5683",
      head: "Md. Yusuf",
      contact: "01309107092,01716387891",
      email: "bighaafm@gmail.com",
    },
    {
      id: 9,
      stage: "2nd",
      category: "Chittagong",
      district: "Lakshmipur",
      constituency: "274 Lakshmipur-1",
      upazila: "Ramganj",
      institution: "Masimpur Abdul Latif Memorial High School-5684",
      head: "Muhammad Rajibul Hasan",
      contact: "01309107068,01731856400",
      email: "masimpuralmhighschool1966@gmail.com",
    },
  ];

  // Filter Data Logic
  const filteredData = useMemo(() => {
    return labsData.filter((lab) => {
      // 1. Search Term Filter
      const matchesSearch =
        searchTerm === "" ||
        lab.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lab.head.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lab.contact.includes(searchTerm) ||
        lab.email.toLowerCase().includes(searchTerm.toLowerCase());

      // 2. Dropdown Filters
      const matchesStage = filters.stage === "" || lab.stage === filters.stage;
      const matchesUpazila =
        filters.upazila === "All" || lab.upazila === filters.upazila;
      // Note: labType is not in the sample data, so this is a placeholder or depends on data presence
      const matchesLabType = filters.labType === "All" || true;

      return matchesSearch && matchesStage && matchesUpazila && matchesLabType;
    });
  }, [searchTerm, filters, labsData]);

  // Pagination Logic
  const totalEntries = filteredData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentEntries = filteredData.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  const handleResetFilters = () => {
    setFilters({
      stage: "",
      upazila: "All",
      labType: "All",
    });
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleExport = (type) => {
    if (type === "reload") {
      window.location.reload();
      return;
    }

    if (type === "print") {
      window.print();
      return;
    }

    if (type === "reset") {
      handleResetFilters();
      return;
    }

    // Export Logic
    const workSheet = XLSX.utils.json_to_sheet(filteredData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "LabsData");

    if (type === "excel") {
      XLSX.writeFile(workBook, "Labs_Data.xlsx");
    } else if (type === "csv") {
      XLSX.writeFile(workBook, "Labs_Data.csv");
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 p-6 space-y-6">
      <style>
        {`
          @media print {
            .no-print {
              display: none !important;
            }
            .print-only {
              display: block !important;
            }
            body {
              background-color: white;
            }
            .p-6 {
                padding: 0 !important;
            }
          }
        `}
      </style>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 no-print">
        <div>
          <h1 className="text-4xl font-bold text-green-950">ডিজিটাল ল্যাব </h1>
          <p className="text-gray-600 mt-2 text-lg">
            লক্ষ্মীপুর দেশের ডিজিটাল ল্যাব ম্যানেজমেন্ট সম্পর্কে মনোন করুন
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-3"></div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleExport("excel")}
            className="flex items-center gap-2 px-5 py-2.5 bg-green-900 hover:bg-green-950 text-white rounded-xl shadow-lg shadow-green-950/30 hover:shadow-xl transition-all text-sm font-semibold"
          >
            <HiOutlineDownload className="w-5 h-5" />
            Export Report
          </button>
        </div>
      </div>

      {/* Controls & Filters Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 no-print">
        <div className="flex flex-col gap-6">
          {/* Top Row: Search & Action Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-all"
                placeholder="Search by institution, head, or contact..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to page 1 on search
                }}
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => handleExport("excel")}
                className="flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors text-sm font-medium"
                title="Export Excel"
              >
                <FaFileExcel />
                <span className="hidden sm:inline">Excel</span>
              </button>
              <button
                onClick={() => handleExport("csv")}
                className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                title="Export CSV"
              >
                <FaFileCsv />
                <span className="hidden sm:inline">CSV</span>
              </button>
              <button
                onClick={() => handleExport("print")}
                className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                title="Print"
              >
                <HiOutlinePrinter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleExport("reload")}
                className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                title="Reload"
              >
                <HiOutlineRefresh className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleExport("reset")}
                className="flex items-center gap-2 px-3 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors text-sm font-medium"
                title="Reset Filters"
              >
                <HiOutlineFilter className="w-5 h-5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Filters Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Stage
              </label>
              <select
                value={filters.stage}
                onChange={(e) => {
                  setFilters({ ...filters, stage: e.target.value });
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
              >
                <option value="">All Stages</option>
                <option value="1st">1st Stage</option>
                <option value="2nd">2nd Stage</option>
                <option value="3rd">3rd Stage</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Upazila
              </label>
              <select
                value={filters.upazila}
                onChange={(e) => {
                  setFilters({ ...filters, upazila: e.target.value });
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
              >
                <option value="All">All Upazilas</option>
                <option value="Raipur">Raipur</option>
                <option value="Ramganj">Ramganj</option>
                <option value="Lakshmipur Sadar">Lakshmipur Sadar</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Lab Type
              </label>
              <select
                value={filters.labType}
                onChange={(e) => {
                  setFilters({ ...filters, labType: e.target.value });
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
              >
                <option value="All">All Types</option>
                <option value="Type A">Type A</option>
                <option value="Type B">Type B</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={handleResetFilters}
                className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm hover:shadow transition-all text-sm font-medium flex items-center justify-center gap-2"
              >
                <HiOutlineFilter className="w-5 h-5" />
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50/80 border-b border-gray-100 text-left">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Info
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Institution Details
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Contact Person
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center no-print">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentEntries.length > 0 ? (
                currentEntries.map((lab, index) => (
                  <tr
                    key={lab.id}
                    className="hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 transition-all duration-300 group border-l-4 border-transparent hover:border-emerald-500"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 w-fit">
                          {lab.stage} Stage
                        </span>
                        <span className="text-xs text-gray-400">
                          #{startIndex + index + 1}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col max-w-xs">
                        <span
                          className="text-sm font-semibold text-gray-900 truncate"
                          title={lab.institution}
                        >
                          {lab.institution}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          Const: {lab.constituency}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col text-sm">
                        <span className="text-gray-900 font-medium">
                          {lab.upazila}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {lab.district}, {lab.category}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col text-sm">
                        <span className="text-gray-900 font-medium">
                          {lab.head}
                        </span>
                        <div className="flex flex-col gap-0.5 mt-1">
                          <span className="text-xs text-gray-500">
                            {lab.contact}
                          </span>
                          <a
                            href={`mailto:${lab.email}`}
                            className="text-xs text-emerald-600 hover:text-emerald-700 hover:underline"
                          >
                            {lab.email}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right no-print">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={"/dashboard/labsUpdate"}
                          className="flex items-center gap-2 px-3 py-2 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-all shadow-sm hover:shadow font-medium text-sm"
                          title="Update Lab"
                        >
                          <HiOutlinePencil className="w-5 h-5" />
                          Update Lab
                        </Link>
                        <Link
                          to={"/dashboard/filesComplaints"}
                          className="flex items-center gap-2 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all shadow-sm hover:shadow font-medium text-sm"
                          title="File Complaint"
                        >
                          <HiOutlineExclamationCircle className="w-5 h-5" />
                          File Complaint
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No labs found matching criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Improved Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border-gray-200 rounded-md text-sm py-1 pl-2 pr-8 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span>entries</span>
            <span className="ml-2 text-gray-400">
              {startIndex + 1}-
              {Math.min(startIndex + entriesPerPage, totalEntries)} of{" "}
              {totalEntries}
            </span>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-gray-600 transition-all"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${currentPage === i + 1
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-gray-600 hover:bg-white hover:shadow-sm"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-gray-600 transition-all"
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

export default LabsUnderControl;

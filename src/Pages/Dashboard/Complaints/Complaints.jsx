import React, { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import {
  FaSearch,
  FaFileExcel,
  FaFileCsv,
  FaPrint,
  FaSync,
  FaTrash,
  FaEye,
  FaCheckCircle,
  FaFilter,
  FaUndo,
} from "react-icons/fa";

const fakeComplaints = [
  {
    id: 1,
    division: "ঢাকা",
    district: "গাজীপুর",
    upazila: "টঙ্গী",
    institute: "টঙ্গী সরকারি উচ্চ বিদ্যালয়",
    deviceType: "স্মার্ট বোর্ড",
    deviceStatus: "চালু",
    total: 3,
    status: "Pending",
    createdAt: "2025-01-05",
  },
  {
    id: 2,
    division: "চট্টগ্রাম",
    district: "কুমিল্লা",
    upazila: "দাউদকান্দি",
    institute: "দাউদকান্দি কলেজ",
    deviceType: "ল্যাপটপ",
    deviceStatus: "নষ্ট",
    total: 1,
    status: "Resolved",
    createdAt: "2025-01-02",
  },
  {
    id: 3,
    division: "রাজশাহী",
    district: "নওগাঁ",
    upazila: "মহাদেবপুর",
    institute: "মহাদেবপুর পাইলট উচ্চ বিদ্যালয়",
    deviceType: "প্রজেক্টর",
    deviceStatus: "মেরামত প্রয়োজন",
    total: 2,
    status: "Processing",
    createdAt: "2025-01-06",
  },
  {
    id: 4,
    division: "সিলেট",
    district: "সুনামগঞ্জ",
    upazila: "ছাতক",
    institute: "ছাতক বহুমুখী উচ্চ বিদ্যালয়",
    deviceType: "রাউটার",
    deviceStatus: "নষ্ট",
    total: 5,
    status: "Pending",
    createdAt: "2025-01-07",
  },
];

const Complaints = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    stage: "",
    upazila: "",
    labType: "",
    deviceType: "",
    deviceStatus: "",
    supportStatus: "",
  });

  // Load fake data
  useEffect(() => {
    setData(fakeComplaints);
  }, []);

  // Filter Logic
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Global Search
      const matchesSearch = Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      );

      // Specific Filters
      // Note: Some filters like 'stage', 'labType' are not in the fake data structure provided,
      // so we only filter if the property exists or if mapping logic is added.
      // Assuming 'status' maps to 'Support Status' roughly, and 'deviceStatus' exists.

      const matchesDeviceType = filters.deviceType
        ? item.deviceType === filters.deviceType
        : true;

      // Partial match for flexibility or exact match depending on requirement
      const matchesDeviceStatus = filters.deviceStatus
        ? item.deviceStatus.includes(filters.deviceStatus)
        : true;

      const matchesSupportStatus = filters.supportStatus
        ? item.status.toLowerCase() === filters.supportStatus.toLowerCase()
        : true;

      const matchesUpazila = filters.upazila
        ? item.upazila.includes(filters.upazila)
        : true;

      return (
        matchesSearch &&
        matchesUpazila &&
        matchesDeviceType &&
        matchesDeviceStatus &&
        matchesSupportStatus
      );
    });
  }, [search, filters, data]);

  // Handlers
  const handleReset = () => {
    setSearch("");
    setFilters({
      stage: "",
      upazila: "",
      labType: "",
      deviceType: "",
      deviceStatus: "",
      supportStatus: "",
    });
  };

  const handleReload = () => {
    // Simulate reload
    setData([]);
    setTimeout(() => {
      setData(fakeComplaints);
    }, 500);
  };

  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Complaints");
    XLSX.writeFile(wb, "complaints_data.xlsx");
  };

  const handleExportCSV = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const csv = XLSX.utils.sheet_to_csv(ws);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "complaints_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printContent = document.getElementById("printable-table");
    const winPrint = window.open(
      "",
      "",
      "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
    );
    winPrint.document.write(`
      <html>
        <head>
          <title>Print Complaints</title>
          <style>
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h2>Complaints List</h2>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    winPrint.document.close();
    winPrint.focus();
    winPrint.print();
    winPrint.close();
  };

  const statusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "resolved":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "pending":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "processing":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const deviceTypesList = [
    "Laptop",
    "LED Smart Tv",
    "Printer",
    "Scanner",
    "Web Camera",
    "Router",
    "Network Switch",
    "Internet",
    "Digital Smart Board",
    "Desktop",
    "Attendance Machine",
    "Digital ID Card",
    "Wi-Fi Router",
  ];

  return (
    <div className="min-h-screen bg-emerald-50 p-6 fade-in-up">
      {/* Header Stats - Enhanced */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl text-white shadow-md">
            <FaCheckCircle size={28} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
              Total Complaints
            </h3>
            <p className="text-3xl font-bold text-green-950">{data.length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 flex items-center gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl text-white shadow-md">
            <FaUndo size={28} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
              Pending Issues
            </h3>
            <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {data.filter((d) => d.status === "Pending").length}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 flex items-center gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-md">
            <FaSync size={28} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Processing</h3>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {data.filter((d) => d.status === "Processing").length}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-3xl font-bold text-green-950 flex items-center gap-2">
              অভিযোগ পোর্টাল
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Manage and track all technical complaints efficiently
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-3"></div>
          </div>
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search anything..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
            />
            <FaSearch className="absolute left-3.5 top-3.5 text-gray-400" />
          </div>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 bg-gray-50/50 p-5 rounded-xl border border-dashed border-gray-200">
          {/* Reusable Filter Component logic could minimize code, but explicit meant for clarity here */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <FaFilter size={10} /> Stage
            </label>
            <select
              value={filters.stage}
              onChange={(e) =>
                setFilters({ ...filters, stage: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 outline-none hover:border-emerald-300"
            >
              <option value="">All Stages</option>
              <option value="1st">1st Stage</option>
              <option value="2nd">2nd Stage</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <FaFilter size={10} /> Upazila
            </label>
            <select
              value={filters.upazila}
              onChange={(e) =>
                setFilters({ ...filters, upazila: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 outline-none hover:border-emerald-300"
            >
              <option value="">All Upazilas</option>
              <option value="Lakshmipur Sadar">Lakshmipur Sadar</option>
              <option value="Raipur">Raipur</option>
              <option value="Ramganj">Ramganj</option>
              <option value="টঙ্গী">টঙ্গী</option>
              <option value="দাউদকান্দি">দাউদকান্দি</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <FaFilter size={10} /> Device Type
            </label>
            <select
              value={filters.deviceType}
              onChange={(e) =>
                setFilters({ ...filters, deviceType: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 outline-none hover:border-emerald-300"
            >
              <option value="">All Devices</option>
              {deviceTypesList.map((device, index) => (
                <option key={index} value={device}>
                  {device}
                </option>
              ))}
              {/* Add Bengali mappings if needed based on fake data */}
              <option value="স্মার্ট বোর্ড">স্মার্ট বোর্ড</option>
              <option value="ল্যাপটপ">ল্যাপটপ</option>
              <option value="প্রজেক্টর">প্রজেক্টর</option>
              <option value="রাউটার">রাউটার</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <FaFilter size={10} /> Device Status
            </label>
            <select
              value={filters.deviceStatus}
              onChange={(e) =>
                setFilters({ ...filters, deviceStatus: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 outline-none hover:border-emerald-300"
            >
              <option value="">All Statuses</option>
              <option value="চালু">চালু (Active)</option>
              <option value="নষ্ট">নষ্ট (Damaged)</option>
              <option value="মেরামত প্রয়োজন">মেরামত প্রয়োজন (Repair)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <FaFilter size={10} /> Support Status
            </label>
            <select
              value={filters.supportStatus}
              onChange={(e) =>
                setFilters({ ...filters, supportStatus: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 outline-none hover:border-emerald-300"
            >
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium"
          >
            <FaUndo /> Reset
          </button>
          <button
            onClick={handleReload}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium"
          >
            <FaSync /> Reload
          </button>
          <div className="h-8 w-px bg-gray-300 mx-2 hidden sm:block"></div>
          <button
            onClick={handleExportExcel}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-all text-sm font-medium"
          >
            <FaFileExcel /> Excel
          </button>
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all text-sm font-medium"
          >
            <FaFileCsv /> CSV
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-100 transition-all text-sm font-medium"
          >
            <FaPrint /> Print
          </button>
        </div>

        {/* Table */}
        <div
          className="overflow-x-auto rounded-xl border border-gray-200"
          id="printable-table"
        >
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium uppercase tracking-wider">
              <tr>
                {[
                  "NO",
                  "DIVISION",
                  "district",
                  "upazila",
                  "INSTITUTE",
                  "DEVICE TYPE",
                  "DEVICE STATUS",
                  "TOTAL",
                  "STATUS",
                  "DATE",
                ].map((th) => (
                  <th key={th} className="px-6 py-4 whitespace-nowrap">
                    {th}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="11" className="text-center py-12 text-gray-400">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <FaSearch size={40} className="text-gray-200" />
                      <p>No complaints found matching your criteria.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredData.map((row, index) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 transition-all duration-300 border-l-4 border-transparent hover:border-emerald-500"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 border-l-4 border-transparent hover:border-emerald-500 transition-all">
                      #{index + 1}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{row.division}</td>
                    <td className="px-6 py-4 text-gray-700">{row.district}</td>
                    <td className="px-6 py-4 text-gray-700">{row.upazila}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {row.institute}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 font-medium">
                        {row.deviceType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${row.deviceStatus === "চালু"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                          }`}
                      >
                        {row.deviceStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-center">
                      {row.total}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColor(
                          row.status
                        )}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-xs">
                      {row.createdAt}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-gray-500 gap-4">
          <p>Showing {filteredData.length} entries</p>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-2 bg-emerald-600 text-white rounded-lg shadow-sm shadow-emerald-200">
              1
            </button>
            <button className="px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
              2
            </button>
            <button className="px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;

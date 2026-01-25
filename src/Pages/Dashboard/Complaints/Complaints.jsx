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
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "pending":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "processing":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
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
        <div className="bg-white backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-4 hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-1">
          <div className="p-4 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl text-white shadow-md shadow-emerald-200">
            <FaCheckCircle size={28} />
          </div>
          <div>
            <h3 className="text-emerald-600 text-sm font-semibold uppercase tracking-wide">
              Total Complaints
            </h3>
            <p className="text-3xl font-bold text-emerald-950">{data.length}</p>
          </div>
        </div>
        <div className="bg-white backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-amber-100 flex items-center gap-4 hover:shadow-amber-200 transition-all duration-300 hover:-translate-y-1">
          <div className="p-4 bg-red-600 rounded-xl text-white shadow-md shadow-amber-200">
            <FaUndo size={28} />
          </div>
          <div>
            <h3 className="text-red-600 text-sm font-semibold uppercase tracking-wide">
              Pending Issues
            </h3>
            <p className="text-3xl font-bold bg-red-500 bg-clip-text text-transparent">
              {data.filter((d) => d.status === "Pending").length}
            </p>
          </div>
        </div>
        <div className="bg-white backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-blue-100 flex items-center gap-4 hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-1">
          <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl text-white shadow-md shadow-blue-200">
            <FaSync size={28} />
          </div>
          <div>
            <h3 className="text-blue-600 text-sm font-semibold uppercase tracking-wide">Processing</h3>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {data.filter((d) => d.status === "Processing").length}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-emerald-100">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-emerald-100 pb-6">
          <div>
            <h2 className="text-3xl font-bold text-emerald-950 flex items-center gap-2">
              অভিযোগ পোর্টাল
            </h2>
            <p className="text-emerald-600 text-sm mt-2">
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
              className="w-full pl-10 pr-4 py-2.5 bg-emerald-50 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all outline-none text-emerald-950 placeholder-emerald-400"
            />
            <FaSearch className="absolute left-3.5 top-3.5 text-emerald-400" />
          </div>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 bg-emerald-50/50 p-5 rounded-xl border border-dashed border-emerald-200">
          {/* Reusable Filter Component logic could minimize code, but explicit meant for clarity here */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
              <FaFilter size={10} /> Stage
            </label>
            <select
              value={filters.stage}
              onChange={(e) =>
                setFilters({ ...filters, stage: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-emerald-900 outline-none hover:border-emerald-400"
            >
              <option className="text-black" value="">All Stages</option>
              <option className="text-black" value="1st">1st Stage</option>
              <option className="text-black" value="2nd">2nd Stage</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
              <FaFilter size={10} /> Upazila
            </label>
            <select
              value={filters.upazila}
              onChange={(e) =>
                setFilters({ ...filters, upazila: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-emerald-900 outline-none hover:border-emerald-400"
            >
              <option className="text-black" value="">All Upazilas</option>
              <option className="text-black" value="Lakshmipur Sadar">Lakshmipur Sadar</option>
              <option className="text-black" value="Raipur">Raipur</option>
              <option className="text-black" value="Ramganj">Ramganj</option>
              <option className="text-black" value="টঙ্গী">টঙ্গী</option>
              <option className="text-black" value="দাউদকান্দি">দাউদকান্দি</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
              <FaFilter size={10} /> Device Type
            </label>
            <select
              value={filters.deviceType}
              onChange={(e) =>
                setFilters({ ...filters, deviceType: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-emerald-900 outline-none hover:border-emerald-400"
            >
              <option value="">All Devices</option>
              {deviceTypesList.map((device, index) => (
                <option className="text-black" key={index} value={device}>
                  {device}
                </option>
              ))}
              {/* Add Bengali mappings if needed based on fake data */}
              <option className="text-black" value="স্মার্ট বোর্ড">স্মার্ট বোর্ড</option>
              <option className="text-black" value="ল্যাপটপ">ল্যাপটপ</option>
              <option className="text-black" value="প্রজেক্টর">প্রজেক্টর</option>
              <option className="text-black" value="রাউটার">রাউটার</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
              <FaFilter size={10} /> Device Status
            </label>
            <select
              value={filters.deviceStatus}
              onChange={(e) =>
                setFilters({ ...filters, deviceStatus: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-emerald-900 outline-none hover:border-emerald-400"
            >
              <option className="text-black" value="">All Statuses</option>
              <option className="text-black" value="চালু">চালু (Active)</option>
              <option className="text-black" value="নষ্ট">নষ্ট (Damaged)</option>
              <option className="text-black" value="মেরামত প্রয়োজন">মেরামত প্রয়োজন (Repair)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
              <FaFilter size={10} /> Support Status
            </label>
            <select
              value={filters.supportStatus}
              onChange={(e) =>
                setFilters({ ...filters, supportStatus: e.target.value })
              }
              className="w-full  px-3 py-2 bg-white border border-emerald-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-emerald-900 outline-none hover:border-emerald-400"
            >
              <option className="text-black" value="">All</option>
              <option className="text-black" value="Pending">Pending</option>
              <option className="text-black" value="Processing">Processing</option>
              <option className="text-black" value="Resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={handleReset}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-all text-sm font-medium border border-emerald-200"
          >
            <FaUndo /> Reset
          </button>
          <button
            onClick={handleReload}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-all text-sm font-medium border border-emerald-200"
          >
            <FaSync /> Reload
          </button>
          <div className="h-8 w-px bg-emerald-200 mx-2 hidden sm:block"></div>
          <button
            onClick={handleExportExcel}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-all text-sm font-medium"
          >
            <FaFileExcel /> Excel
          </button>
          <button
            onClick={handleExportCSV}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all text-sm font-medium"
          >
            <FaFileCsv /> CSV
          </button>
          <button
            onClick={handlePrint}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-red-600 text-white border-red-200 rounded-lg hover:bg-red-700 transition-all text-sm font-medium"
          >
            <FaPrint /> Print
          </button>
        </div>

        {/* Table */}
        <div
          className="overflow-x-auto rounded-xl border border-emerald-100"
          id="printable-table"
        >
          <table className="w-full text-sm text-left">
            <thead className="bg-emerald-50 text-emerald-600 font-medium uppercase tracking-wider">
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
            <tbody className="divide-y divide-emerald-100">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="11" className="text-center py-12 text-emerald-600">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <FaSearch size={40} className="text-emerald-200" />
                      <p>No complaints found matching your criteria.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredData.map((row, index) => (
                  <tr
                    key={row.id}
                    className="hover:bg-emerald-50 transition-all duration-300 border-l-4 border-transparent hover:border-emerald-500"
                  >
                    <td className="px-6 py-4 font-medium text-emerald-400 transition-all">
                      #{index + 1}
                    </td>
                    <td className="px-6 py-4 text-emerald-900">{row.division}</td>
                    <td className="px-6 py-4 text-emerald-900">{row.district}</td>
                    <td className="px-6 py-4 text-emerald-900">{row.upazila}</td>
                    <td className="px-6 py-4 text-emerald-950 font-medium">
                      {row.institute}
                    </td>
                    <td className="px-6 py-4 text-emerald-800">
                      <span className="px-2 py-1 bg-emerald-100 rounded text-xs text-emerald-800 font-medium border border-emerald-200">
                        {row.deviceType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${row.deviceStatus === "চালু"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-red-100 text-red-700 border border-red-200"
                          }`}
                      >
                        {row.deviceStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-center text-emerald-950">
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
                    <td className="px-6 py-4 text-emerald-600 text-xs">
                      {row.createdAt}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-emerald-600 gap-4">
          <p>Showing {filteredData.length} entries</p>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 border border-emerald-200 rounded-lg hover:bg-emerald-100 disabled:opacity-50 transition-colors text-emerald-600"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-2 bg-emerald-600 text-white rounded-lg shadow-sm shadow-emerald-200 border border-emerald-500">
              1
            </button>
            <button className="px-3 py-2 hover:bg-emerald-100 rounded-lg transition-colors text-emerald-600">
              2
            </button>
            <button className="px-3 py-2 hover:bg-emerald-100 rounded-lg transition-colors text-emerald-600">
              3
            </button>
            <button className="px-4 py-2 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors text-emerald-600">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;

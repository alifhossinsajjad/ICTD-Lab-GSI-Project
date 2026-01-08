import React, { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
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
];

const Complaints = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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

  // Search filter
  const filteredData = useMemo(() => {
    return fakeComplaints.filter((item) => {
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
      const matchesDeviceType = filters.deviceType
        ? item.deviceType === filters.deviceType
        : true;
      const matchesDeviceStatus = filters.deviceStatus
        ? item.deviceStatus.includes(filters.deviceStatus)
        : true;
      const matchesSupportStatus = filters.supportStatus
        ? item.supportStatus.includes(filters.supportStatus)
        : true;

      return (
        matchesSearch &&
        matchesStage &&
        matchesUpazila &&
        matchesLabType &&
        matchesDeviceType &&
        matchesDeviceStatus &&
        matchesSupportStatus
      );
    });
  }, [searchTerm, filters]);

  // Reset
  const handleReset = () => {
    setSearch("");
    setData(fakeComplaints);
  };

  // Reload
  const handleReload = () => {
    setData([...fakeComplaints]);
  };

  



  const deviceType = [
    "laptop",
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
    "Wi-Fi Router"
  ]

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      {/* Header */}
      <div className=" mb-5">
        <h2 className="text-xl text-center font-semibold">অভিযোগ পোর্টাল</h2>
      </div>

      {/* Filters (UI only) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Stage Filter */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 uppercase">
            Stage
          </label>
          <select
            value={filters.stage}
            onChange={(e) => setFilters({ ...filters, stage: e.target.value })}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
          >
            <option value="">All Stages</option>
            <option value="1st">1st Stage</option>
            <option value="2nd">2nd Stage</option>
          </select>
        </div>

        {/* Upazila Filter */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 uppercase">
            Upazila
          </label>
          <select
            value={filters.upazila}
            onChange={(e) =>
              setFilters({ ...filters, upazila: e.target.value })
            }
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
          >
            <option value="">All Upazilas</option>
            <option value="Lakshmipur Sadar">Lakshmipur Sadar</option>
            <option value="Raipur">Raipur</option>
            <option value="Ramganj">Ramganj</option>
          </select>
        </div>

        {/* Lab Type Filter */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 uppercase">
            Lab Type
          </label>
          <select
            value={filters.labType}
            onChange={(e) =>
              setFilters({ ...filters, labType: e.target.value })
            }
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
          >
            <option value="">All Types</option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
            <option value="Type C">Type C</option>
          </select>
        </div>

        {/* Vendor Filter */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 uppercase">
            Device Type
          </label>
          <select
            value={filters.vendor}
            onChange={(e) => setFilters({ ...filters, vendor: e.target.value })}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
          >
            {
                deviceType.map((device,index)=><option value=""
                key={index}
                >{device}</option>)
            }
           
          </select>
        </div>
        {/* Vendor Filter */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 uppercase">
            Device Status
          </label>
          <select
            value={filters.vendor}
            onChange={(e) => setFilters({ ...filters, vendor: e.target.value })}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
          >
            <option value="">All Types</option>
            <option value="Type A">Active</option>
            <option value="Type B">Inactive</option>
            <option value="Type C">Stolen</option>
           
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 uppercase">
            Support Status
          </label>
          <select
            value={filters.vendor}
            onChange={(e) => setFilters({ ...filters, vendor: e.target.value })}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
          >
            <option value="">All Types</option>
            <option value="Type A">open</option>
            <option value="Type B">Processing</option>
            <option value="Type C">Resolve</option>
            <option value="Type C">Unsolve</option>
           
          </select>
        </div>

      
      </div>

      {/* Search Button */}
      <button className="bg-green-600 text-white px-5 py-2 rounded-lg mb-4">
        🔍 অনুসন্ধান
      </button>

      {/* Table Actions */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2">
          {["Excel", "Print", "Reset", "Reload", "CSV"].map((btn) => (
            <button
              key={btn}
              onClick={
                btn === "Reset"
                  ? handleReset
                  : btn === "Reload"
                  ? handleReload
                  : undefined
              }
              className="border px-3 py-1 rounded text-sm"
            >
              {btn}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-1 rounded"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              {[
                "ক্রম",
                "পর্যায়",
                "জেলা",
                "উপজেলা",
                "শিক্ষা প্রতিষ্ঠান",
                "ডিভাইসের ধরন",
                "ডিভাইস স্ট্যাটাস",
                "মোট সংখ্যা",
                "অভিযোগের অবস্থা",
                "created_at",
              ].map((th) => (
                <th key={th} className="border px-3 py-2 text-left">
                  {th}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center py-6">
                  No data available in table
                </td>
              </tr>
            ) : (
              filteredData.map((row, index) => (
                <tr key={row.id}>
                  <td className="border px-3 py-2">{index + 1}</td>
                  <td className="border px-3 py-2">{row.division}</td>
                  <td className="border px-3 py-2">{row.district}</td>
                  <td className="border px-3 py-2">{row.upazila}</td>
                  <td className="border px-3 py-2">{row.institute}</td>
                  <td className="border px-3 py-2">{row.deviceType}</td>
                  <td className="border px-3 py-2">{row.deviceStatus}</td>
                  <td className="border px-3 py-2">{row.total}</td>
                  <td className="border px-3 py-2">{row.status}</td>
                  <td className="border px-3 py-2">{row.createdAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-4 text-sm">
        <p>Showing {filteredData.length} entries</p>
        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded">Previous</button>
          <button className="border px-3 py-1 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Complaints;

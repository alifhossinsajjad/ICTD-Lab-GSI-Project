import { useEffect, useState } from "react";
import { FaDownload, FaPrint } from "react-icons/fa6";
import * as XLSX from "xlsx";

const Lab = () => {
  const [labs, setLabs] = useState([]);

  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(25);
  const [page, setPage] = useState(1);

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

  const phases = [...new Set(labs.map((l) => l.phase))];
  const divisions = [...new Set(labs.map((l) => l.division))];

  const districts = [
    ...new Set(
      labs
        .filter((lab) => !division || lab.division === division)
        .map((lab) => lab.district)
    ),
  ];

  const upazilas = [
    ...new Set(
      labs
        .filter(
          (l) =>
            (!division || l.division === division) &&
            (!district || l.district === district)
        )
        .map((l) => l.upazila)
    ),
  ];

  const labTypes = ["SOF", "SRDL", "SOF & SRDL"];

  const filtered = labs.filter((lab) => {
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
  });

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

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[98%] mx-auto">
        {/* TITLE */}
        <h2 className="text-center font-semibold mb-4 text-base md:text-lg">
          সকল আইসিটি ডিজিটাল ল্যাবের তালিকা (১ম ও ২য় ধাপ)
        </h2>

        {/* FILTER BAR */}
        <div className="border rounded-lg p-4 mb-4 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            <select
              value={phase}
              onChange={(e) => setPhase(e.target.value)}
              className="border px-3 py-2 rounded text-sm"
            >
              <option value="">পর্যায়</option>
              {phases.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>

            <select
              value={division}
              onChange={(e) => {
                setDivision(e.target.value);
                setDistrict("");
                setUpazila("");
              }}
              className="border px-3 py-2 rounded text-sm"
            >
              <option value="">বিভাগ</option>
              {divisions.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>

            <select
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
                setUpazila("");
              }}
              className="border px-3 py-2 rounded text-sm"
            >
              <option value="">জেলা</option>
              {districts.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>

            <select
              value={upazila}
              onChange={(e) => setUpazila(e.target.value)}
              className="border px-3 py-2 rounded text-sm"
            >
              <option value="">নির্বাচিত এলাকা</option>
              {upazilas.map((u) => (
                <option key={u}>{u}</option>
              ))}
            </select>

            <select
              value={labType}
              onChange={(e) => setLabType(e.target.value)}
              className="border px-3 py-2 rounded text-sm"
            >
              <option value="">ল্যাবের ধরন</option>
              {labTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <button
              onClick={resetFilters}
              className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 text-sm font-medium"
            >
              অনুসন্ধান
            </button>
          </div>
        </div>

        {/* TOP CONTROLS */}
        <div className="flex flex-col lg:flex-row justify-between gap-3 mb-2 text-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span>Show</span>
            <select
              value={entries}
              onChange={(e) => {
                setEntries(+e.target.value);
                setPage(1);
              }}
              className="border px-2 py-1 rounded"
            >
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>entries</span>

            <button
              onClick={exportExcel}
              className="border px-2 py-1 rounded flex items-center gap-1"
            >
              <FaDownload />
              Excel
            </button>
            <button onClick={exportCSV} className="border px-2 py-1 rounded">
              CSV
            </button>
            <button onClick={fetchLabs} className="border px-2 py-1 rounded">
              Reload
            </button>
            <button onClick={resetFilters} className="border px-2 py-1 rounded">
              Reset
            </button>
            <button
              onClick={() => window.print()}
              className="border px-2 py-1 rounded flex items-center gap-1"
            >
              <FaPrint />
              Print
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span>Search:</span>
            <input
              className="border px-2 py-1 rounded"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="border overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "ক্রম",
                  "পর্যায়",
                  "বিভাগ",
                  "জেলা",
                  "উপজেলা",
                  "শিক্ষা প্রতিষ্ঠান",
                  "Lab Code",
                  "ইমেইল",
                ].map((h) => (
                  <th
                    key={h}
                    className="border px-2 py-2 text-left whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {paginated.map((lab, i) => (
                <tr key={lab.id} className="hover:bg-green-50 transition">
                  <td className="border px-2 py-1">{start + i + 1}</td>
                  <td className="border px-2 py-1">{lab.phase}</td>
                  <td className="border px-2 py-1">{lab.division}</td>
                  <td className="border px-2 py-1">{lab.district}</td>
                  <td className="border px-2 py-1">{lab.upazila}</td>
                  <td className="border px-2 py-1">{lab.institute}</td>
                  <td className="border px-2 py-1">{lab.labCode}</td>
                  <td className="border px-2 py-1">{lab.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-between items-center mt-3 text-sm">
          <span>
            Showing {start + 1} to {Math.min(start + entries, filtered.length)}{" "}
            of {filtered.length} entries
          </span>

          <div className="flex gap-1">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="border px-3 py-1 disabled:opacity-40"
            >
              Previous
            </button>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="border px-3 py-1 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lab;

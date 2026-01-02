import { useEffect, useState } from "react";
import { FaDownload, FaPrint, FaFileExcel,FaFileCsv,FaSyncAlt,FaUndo} from "react-icons/fa";
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
        .filter((l) => !division || l.division === division)
        .map((l) => l.district)
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
    <section className="py-4 bg-white">
      <div className="max-w-full px-2 mx-auto">
        <h2 className="text-center font-semibold mb-2 text-sm md:text-base">
          সকল আইসিটি ডিজিটাল ল্যাবের তালিকা (১ম ও ২য় ধাপ)
        </h2>

        {/* FILTER BAR */}
       <details className="bg-white border border-gray-400 rounded-md mb-3">
 <summary className="cursor-pointer select-none px-4 py-3
  flex items-center justify-between
  text-sm font-medium
  bg-gray-50 rounded-lg
  relative">

  <span>ফিল্টার অপশন</span>

  <span className="absolute right-3 top-1/2 -translate-y-1/2
    text-xs font-semibold text-white
    bg-green-600 px-3 py-1.5 rounded-full shadow">
    খুলুন / বন্ধ করুন
  </span>
</summary>


  <div className="px-3 py-3 border-t border-gray-300">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">
      <select
        value={phase}
        onChange={(e) => setPhase(e.target.value)}
        className="border border-gray-400 px-2 py-1 rounded text-sm"
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
        className="border border-gray-400 px-2 py-1 rounded text-sm"
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
        className="border border-gray-400 px-2 py-1 rounded text-sm"
      >
        <option value="">জেলা</option>
        {districts.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>

      <select
        value={upazila}
        onChange={(e) => setUpazila(e.target.value)}
        className="border border-gray-400 px-2 py-1 rounded text-sm"
      >
        <option value="">নির্বাচিত এলাকা</option>
        {upazilas.map((u) => (
          <option key={u}>{u}</option>
        ))}
      </select>

      <select
        value={labType}
        onChange={(e) => setLabType(e.target.value)}
        className="border border-gray-400 px-2 py-1 rounded text-sm"
      >
        <option value="">ল্যাবের ধরন</option>
        {labTypes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <button
        onClick={resetFilters}
        className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
      >
        অনুসন্ধান
      </button>
    </div>
  </div>
</details>

        {/* CONTROLS */}
        <div className="flex flex-col lg:flex-row justify-between gap-2 mb-2 text-sm">
          <div className="flex flex-wrap items-center gap-1">
            <span>Show</span>
            <select
              value={entries}
              onChange={(e) => {
                setEntries(+e.target.value);
                setPage(1);
              }}
              className="border px-1 py-1 rounded"
            >
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>entries</span>

            <button
  onClick={exportExcel}
  className="border border-green-600 bg-green-600 font-bold text-white hover:bg-green-500 hover:text-black px-2 py-1 rounded cursor-pointer flex items-center gap-1"
> 
  <FaFileExcel/>
  Excel
</button>

<button
  onClick={exportCSV}
className="border border-green-600 bg-green-600 font-bold text-white hover:bg-green-500 hover:text-black px-2 py-1 rounded cursor-pointer flex items-center gap-1">
  <FaFileCsv/>
  CSV
</button>

<button
  onClick={fetchLabs}
className="border border-green-600 bg-green-600 font-bold text-white hover:bg-green-500 hover:text-black px-2 py-1 rounded cursor-pointer flex items-center gap-1">
 <FaSyncAlt/>
  Reload
</button>

<button
  onClick={resetFilters}
className="border border-green-600 bg-green-600 font-bold text-white hover:bg-green-500 hover:text-black px-2 py-1 rounded cursor-pointer flex items-center gap-1">
  <FaUndo/>
  Reset
</button>

<button
  onClick={() => window.print()}
    className="border border-red-600 bg-red-600 rounded text-white hover:text-black font-bold px-2 py-1 flex items-center gap-1 hover:bg-red-400 cursor-pointer"
>
  <FaPrint />
  Print
</button>

          </div>

          <div className="flex items-center gap-1">
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
<div className="bg-white border border-gray-300 rounded overflow-x-auto">
  <table className="w-full text-xs border-collapse">
    <thead className="sticky top-0 z-10 bg-green-50">
      <tr>
        {[
          "ক্রম",
          "পর্যায়",
          "বিভাগ",
          "জেলা",
          "উপজেলা",
          "প্রতিষ্ঠান",
          "Lab Code",
          "ইমেইল",
        ].map((h, idx) => (
          <th
            key={h}
            className={`
              px-2 py-2 text-left font-semibold text-gray-800
              border border-gray-300
              ${idx === 0 ? "bg-green-100" : ""}
              whitespace-nowrap
            `}
          >
            {h}
          </th>
        ))}
      </tr>
    </thead>

    <tbody>
      {paginated.map((l, i) => (
        <tr
          key={l.id}
          className="
            hover:bg-green-100/80
            transition-colors
          "
        >
          <td className="px-2 py-2 border border-gray-300 bg-green-50 font-medium">
            {start + i + 1}
          </td>
          <td className="px-2 py-2 border border-gray-300">
            {l.phase}
          </td>
          <td className="px-2 py-2 border border-gray-300">
            {l.division}
          </td>
          <td className="px-2 py-2 border border-gray-300">
            {l.district}
          </td>
          <td className="px-2 py-2 border border-gray-300">
            {l.upazila}
          </td>
          <td className="px-2 py-2 border border-gray-300">
            {l.institute}
          </td>
          <td className="px-2 py-2 border border-gray-300">
            {l.labCode}
          </td>
          <td className="px-2 py-2 border border-gray-300">
            {l.email}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        {/* PAGINATION */}
        <div className="flex justify-between items-center mt-2 text-sm">
          <span>
            Showing {start + 1} to{" "}
            {Math.min(start + entries, filtered.length)} of{" "}
            {filtered.length} entries
          </span>

          <div className="flex gap-1">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="border px-2 py-1 disabled:opacity-40"
            >
              Previous
            </button>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="border px-2 py-1 disabled:opacity-40"
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

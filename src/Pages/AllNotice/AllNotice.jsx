import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaDownload } from "react-icons/fa";

const fetchNotices = async () => {
  const res = await fetch("/notices.json");
  if (!res.ok) throw new Error("Failed to load notices");
  return res.json();
};

const AllNotice = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const { data: notices = [], isLoading, refetch, isFetching } = useQuery({
    queryKey: ["notices"],
    queryFn: fetchNotices,
  });

  // Search
  const filtered = notices.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const start = (page - 1) * entries;
  const paginated = filtered.slice(start, start + entries);
  const totalPages = Math.ceil(filtered.length / entries);

  // Reload handler
  const handleReload = async () => {
    setSearch("");
    setEntries(10);
    setPage(1);
    await refetch();

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4">

        {/* Toast */}
        {showToast && (
          <div className="fixed top-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg text-sm z-50 animate-fade-in">
            Notices refreshed successfully
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold uppercase tracking-widest text-gray-800">
            NOTICE
          </h2>
          <div className="w-20 h-[2px] bg-green-600 mx-auto mt-2"></div>
        </div>

        <h3 className="text-lg mb-4 font-medium text-gray-800">
          নোটিস বোর্ড
        </h3>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-3 text-sm bg-white p-3 border rounded">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Show</span>
            <select
              value={entries}
              onChange={(e) => {
                setEntries(Number(e.target.value));
                setPage(1);
              }}
              className="border px-2 py-1 rounded text-sm"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="text-gray-600">entries</span>

            <button
              onClick={handleReload}
              className="ml-2 border px-3 py-1 rounded hover:bg-gray-100"
            >
              Reload
            </button>
          </div>

          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <span className="text-gray-600">Search:</span>
            <input
              className="border px-2 py-1 rounded text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border rounded shadow-sm overflow-x-auto relative">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border px-3 py-2 w-12 text-center">SL</th>
                <th className="border px-3 py-2 text-left">Title</th>
                <th className="border px-3 py-2 w-48 text-left">
                  Publish Date
                </th>
                <th className="border px-3 py-2 w-24 text-center">
                  Download
                </th>
              </tr>
            </thead>

            <tbody>
              {(isLoading || isFetching) ? (
                <tr>
                  <td colSpan="4" className="py-10 text-center">
                    {/* Spinner */}
                    <div className="flex justify-center">
                      <div className="h-8 w-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </td>
                </tr>
              ) : paginated.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-6">
                    No data found
                  </td>
                </tr>
              ) : (
                paginated.map((notice, index) => (
                  <tr
                    key={notice.id}
                    className="group transition hover:bg-green-50 hover:border-l-4 hover:border-green-600"
                  >
                    <td className="border px-3 py-2 text-center group-hover:text-green-800">
                      {start + index + 1}
                    </td>

                    <td className="border px-3 py-2 group-hover:text-green-800">
                      {notice.title}
                    </td>

                    <td className="border px-3 py-2 group-hover:text-green-800">
                      {notice.date}
                      <br />
                      <span className="text-xs text-gray-500">
                        {notice.time}
                      </span>
                    </td>

                    <td className="border px-3 py-2 text-center">
                      <a
                        href={notice.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-green-700 transition"
                      >
                        <FaDownload />
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-600">
          <span>
            Showing {start + 1} to{" "}
            {Math.min(start + entries, filtered.length)} of{" "}
            {filtered.length} entries
          </span>

          <div className="flex gap-1 mt-2 md:mt-0">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="border px-3 py-1 rounded disabled:opacity-40 hover:bg-gray-100"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`border px-3 py-1 rounded ${
                  page === i + 1
                    ? "bg-green-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="border px-3 py-1 rounded disabled:opacity-40 hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AllNotice;

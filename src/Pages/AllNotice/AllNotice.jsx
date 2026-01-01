import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaDownload, FaSearch, FaSyncAlt, FaFilePdf, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const fetchNotices = async () => {
  const res = await fetch("/notices.json");
  if (!res.ok) throw new Error("Failed to load notices");
  return res.json();
};

const AllNotice = () => {
  const { t } = useTranslation();
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
    <section className="py-20 bg-emerald-50  min-h-screen font-sans">

      <div className="overflow-hidden bg-emerald-50  py-10 border-b border-gray-100">
        <Marquee pauseOnHover={true} speed={50} gradient={true} gradientColor="255, 255, 255">
          {/* Render images */}
          {[
            "/Screenshot_36.jpg",
            "/Screenshot_37.jpg",
            "/Screenshot_38.jpg",
            "/Screenshot_36.jpg",
            "/Screenshot_37.jpg",
            "/Screenshot_38.jpg",
            "/Screenshot_36.jpg",
            "/Screenshot_37.jpg",
            "/Screenshot_38.jpg",
            "/Screenshot_36.jpg",
            "/Screenshot_37.jpg",
            "/Screenshot_38.jpg"
          ].map((src, index) => (
            <div key={index} className="mx-8 flex items-center justify-center">
              <img
                src={src}
                alt="Partner Logo"
                className="h-16 rounded-full p-2 md:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-24 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl text-sm font-medium z-50 animate-fade-in flex items-center gap-2">
            <FaSyncAlt className="animate-spin" />
            Notices refreshed successfully
          </div>
        )}

        {/* Section Header */}
        <div className="text-center mb-12">

          <div className="inline-block mb-4 ">
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
            <h1 className="text-3xl md:text-4xl p-2 lg:text-5xl font-bold text-gray-800 mb-4">
              {t("notice_title")}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
          </div>

          <p className="text-gray-500 max-w-2xl mx-auto">
            {t("notice_subtitle")}
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white  border-6 border-gray-200 shadow-xl rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

          {/* Toolbar */}
          <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Left: Entries & Reload */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm">
                <span>{t("notice_show")}</span>
                <select
                  value={entries}
                  onChange={(e) => {
                    setEntries(Number(e.target.value));
                    setPage(1);
                  }}
                  className="bg-transparent font-semibold text-gray-800 focus:outline-none cursor-pointer"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span>{t("notice_entries")}</span>
              </div>

              <button
                onClick={handleReload}
                className="p-2.5 text-gray-500 hover:text-green-600 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow transition-all active:scale-95"
                title="Reload Data"
              >
                <FaSyncAlt className={isFetching ? "animate-spin" : ""} />
              </button>
            </div>

            {/* Right: Search */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 text-sm" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all shadow-sm"
                placeholder={t("notice_search_placeholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-4 text-center w-20">{t("notice_th_sl")}</th>
                  <th className="px-6 py-4">{t("notice_th_title")}</th>
                  <th className="px-6 py-4 w-48">{t("notice_th_date")}</th>
                  <th className="px-6 py-4 w-32 text-center">{t("notice_th_action")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {(isLoading || isFetching) ? (
                  <tr>
                    <td colSpan="4" className="py-12 text-center">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <div className="h-8 w-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm text-gray-500 font-medium">{t("notice_loading")}</span>
                      </div>
                    </td>
                  </tr>
                ) : paginated.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-12 text-center text-gray-500">
                      {t("notice_no_data")}
                    </td>
                  </tr>
                ) : (
                  paginated.map((notice, index) => (
                    <tr
                      key={notice.id}
                      className="group hover:bg-green-50/30 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 text-xs font-bold group-hover:bg-green-100 group-hover:text-green-700 transition-colors">
                          {start + index + 1}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <FaFilePdf className="text-red-500 mt-0.5 text-lg flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                          <span className="text-gray-700 font-medium group-hover:text-green-700 transition-colors leading-relaxed">
                            {notice.title}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-700">{notice.date}</span>
                          <span className="text-xs text-gray-400">{notice.time}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <a
                          href={notice.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-green-600 hover:text-white hover:border-green-600 shadow-sm hover:shadow-md transition-all duration-200"
                          title="Download PDF"
                        >
                          <FaDownload className="text-sm" />
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <span className="text-gray-500 font-medium">
              {t("notice_showing")} <span className="text-gray-900">{filtered.length > 0 ? start + 1 : 0}</span> {t("notice_to")}{" "}
              <span className="text-gray-900">{Math.min(start + entries, filtered.length)}</span> {t("notice_of")}{" "}
              <span className="text-gray-900">{filtered.length}</span> {t("notice_entries")}
            </span>

            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 font-medium"
              >
                <FaChevronLeft className="text-xs" /> {t("notice_prev")}
              </button>

              <div className="hidden md:flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-medium transition-all ${page === i + 1
                      ? "bg-green-600 text-white shadow-md shadow-green-200"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-green-700"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={page === totalPages || totalPages === 0}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 font-medium"
              >
                {t("notice_next")} <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AllNotice;

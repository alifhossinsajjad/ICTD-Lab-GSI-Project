import { useQuery } from "@tanstack/react-query";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import { FaArrowRight, FaArrowRightArrowLeft } from "react-icons/fa6";

const fetchNotices = async () => {
  const res = await fetch("/notices.json");
  if (!res.ok) throw new Error("Failed to load notices");
  return res.json();
};

const Notice = () => {
  const { t } = useTranslation();

  const { data: notices = [], isLoading } = useQuery({
    queryKey: ["latest-notices"],
    queryFn: fetchNotices,
    staleTime: 1000 * 60 * 5,
  });

  const latestNotices = [...notices]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <section className="bg-green-50 py-5">
      <div className="pt-20 bg-emerald-50 py-10 overflow-hidden">
        {/* Track */}
        <div className="relative">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent " />

          <Marquee pauseOnHover speed={42} gradient={false}>
            {[...Array(2)]
              .flatMap(() => [
                "/Screenshot_36.jpg",
                "/Screenshot_37.jpg",
                "/Screenshot_38.jpg",
              ])
              .map((src, index) => (
                <div
                  key={index}
                  className="mx-10 flex items-center justify-center"
                >
                  <div
                    className="
            bg-white px-6 py-3 rounded-lg
            shadow-sm
            transition-transform duration-300
            hover:-translate-y-1
          "
                  >
                    <img
                      src={src}
                      alt="Partner Logo"
                      className="h-14 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
          </Marquee>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-10">
        {/* 🔹 Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            NOTICE
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* 🔹 Notices */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="py-12 text-center text-gray-500">Loading...</div>
          ) : latestNotices.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              {t("notice_no_data")}
            </div>
          ) : (
            latestNotices.map((notice) => (
              <div
                key={notice.id}
                className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:bg-green-100 hover:shadow-emerald-300 transition"
              >
                {/* PDF Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full  text-red-600 shrink-0">
                  <FaFilePdf />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2">
                    {notice.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{notice.date}</p>
                </div>

                {/* Download */}
                <a
                  href={notice.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download notice"
                  className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-green-600 hover:text-white transition"
                >
                  <FaDownload className="text-xs" />
                </a>
              </div>
            ))
          )}
        </div>

        {/* 🔹 View All */}

        <div className=" flex justify-center mt-8 ">
          <Link
            to={"/all-notice"}
            className=" flex  px-8 py-2.5 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition shadow-md"
          >
            View All Notices
            <FaArrowRight className="ml-2 mt-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Notice;

import { useQuery } from "@tanstack/react-query";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import { FaArrowRight, FaArrowRightArrowLeft } from "react-icons/fa6";
import partner1 from "../../assets/marque/Screenshot_36.jpg"
import partner2 from "../../assets/marque/Screenshot_37.jpg"
import partner3 from "../../assets/marque/Screenshot_38.jpg"

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



    const partners = [partner1, partner2, partner3];

    const marqueeImages = [...partners, ...partners];


    return (
        <section className="bg-emerald-950 relative py-5">


            <div className="max-w-5xl mx-auto px-4 mt-10">
                {/* 🔹 Title */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Notice
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
                                className="flex items-start gap-4 p-5 bg-emerald-900/40 backdrop-blur-md rounded-xl shadow-lg border border-emerald-500/20 hover:border-emerald-400 hover:shadow-emerald-500/20 transition group"
                            >
                                {/* PDF Icon */}
                                <div className="w-10 h-10 flex items-center justify-center rounded-full text-red-400 shrink-0 bg-red-500/10">
                                    <FaFilePdf />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-emerald-50 leading-snug line-clamp-2 group-hover:text-white transition-colors">
                                        {notice.title}
                                    </p>
                                    <p className="text-xs text-emerald-300/70 mt-1">{notice.date}</p>
                                </div>

                                {/* Download */}
                                <a
                                    href={notice.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Download notice"
                                    className="w-9 h-9 flex items-center justify-center rounded-full text-emerald-300 bg-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-white transition"
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

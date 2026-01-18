import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section
            id="contact-section"
            className="relative py-12 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 overflow-hidden"
        >
            {/* Ambient blobs */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-green-200/40 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
                        {t("contact_title")}
                    </h2>
                    <div className="w-24 h-[3px] bg-gradient-to-r from-emerald-500 to-green-400 mx-auto mt-5 rounded-full" />
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-6">
                        {t("contact_subtitle")}
                    </p>
                </div>

                {/* Card */}
                <div className="
          grid grid-cols-1 lg:grid-cols-3
          rounded-3xl overflow-hidden
          bg-white/80 backdrop-blur-xl
          border border-gray-100
          shadow-[0_40px_100px_-40px_rgba(0,0,0,0.25)]
        ">

                    {/* LEFT */}
                    <div className="relative lg:col-span-1 bg-[#006A4E] p-12 text-white">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />

                        <div className="relative space-y-10">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">
                                    {t("contact_info_title")}
                                </h3>
                                <p className="text-green-100 leading-relaxed">
                                    {t("contact_info_desc")}
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: FaPhoneAlt,
                                        title: t("contact_phone"),
                                        value: "+880 1234 567 890",
                                    },
                                    {
                                        icon: FaEnvelope,
                                        title: t("contact_email"),
                                        value: "info@ictd-lab.gov.bd",
                                    },
                                    {
                                        icon: FaMapMarkerAlt,
                                        title: t("contact_address"),
                                        value: "ICT Tower, Agargaon, Dhaka‑1207",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                            <item.icon className="text-green-200" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-lg">{item.title}</h4>
                                            <p className="text-green-100 text-sm mt-1 leading-relaxed">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-2 p-12 md:p-16 bg-white">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-10">
                            {t("contact_form_title")}
                        </h3>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: t("contact_label_fname"), placeholder: "John" },
                                    { label: t("contact_label_lname"), placeholder: "Doe" },
                                ].map((f, i) => (
                                    <div key={i} className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">
                                            {f.label}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={f.placeholder}
                                            className="
                        w-full px-4 py-3 rounded-xl
                        bg-gray-50 border border-gray-200
                        focus:border-emerald-500 focus:bg-white
                        focus:ring-4 focus:ring-emerald-200/40
                        transition-all outline-none
                      "
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="input"
                                />
                                <input
                                    type="tel"
                                    placeholder="+880..."
                                    className="input"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="How can we help?"
                                className="input"
                            />

                            <textarea
                                rows="4"
                                placeholder="Write your message here..."
                                className="input resize-none"
                            />

                            <button
                                type="submit"
                                className="
                  inline-flex items-center gap-3
                  px-10 py-4
                  bg-[#006A4E]
                  text-white font-semibold
                  rounded-xl
                  shadow-lg shadow-emerald-900/20
                  hover:shadow-xl
                  hover:-translate-y-0.5
                  transition-all duration-500 ease-out
                "
                            >
                                <FaPaperPlane />
                                {t("contact_btn_send")}
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Input utility */}
            <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          transition: all 0.4s ease;
          outline: none;
        }
        .input:focus {
          background: white;
          border-color: #10b981;
          box-shadow: 0 0 0 4px rgba(16,185,129,0.2);
        }
      `}</style>
        </section>
    );
};

export default Contact;

import { FaPhoneAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Vendor = () => {
    const { t } = useTranslation();

    const vendors = [
        { id: 1, phone: "01711-588054" },
        { id: 2, phone: "01713-397560" },
        { id: 3, phone: "01712-445566" },
        { id: 4, phone: "01715-998877" },
        { id: 5, phone: "01718-223344" },
        { id: 6, phone: "01719-667788" },
    ];

    return (
        <section className="py-12 bg-emerald-50" id="vendor">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-emerald-950 tracking-tight">
                        {t("vendor_title")}
                    </h2>
                    <div className="w-24 h-[3px] bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mt-5 rounded-full" />
                    <p className="text-lg text-emerald-700 mt-6 max-w-2xl mx-auto">
                        {t("vendor_subtitle")}
                    </p>
                </div>

                {/* Vendor Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {vendors.map((vendor) => (
                        <div
                            key={vendor.id}
                            className="
                group relative
                bg-white backdrop-blur-xl
                rounded-2xl p-7
                border border-emerald-100
                shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]
                transition-all duration-700 ease-out
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.2)]
                hover:border-emerald-300
              "
                        >
                            {/* Top Row */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="
                  w-11 h-11 rounded-xl
                  bg-emerald-50
                  flex items-center justify-center
                  transition-colors duration-500
                  group-hover:bg-emerald-100
                ">
                                    <FaBuilding className="text-emerald-600 text-lg" />
                                </div>

                                <h3 className="text-base font-semibold text-emerald-900 leading-snug">
                                    {t(`vendor_${vendor.id}_name`)}
                                </h3>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-3 mb-4 text-emerald-600">
                                <FaMapMarkerAlt className="text-emerald-500 mt-1" />
                                <p className="text-sm leading-relaxed">
                                    {t(`vendor_${vendor.id}_address`)}
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3 text-emerald-800 font-medium">
                                <FaPhoneAlt className="text-emerald-500" />
                                <span className="text-sm tracking-wide">
                                    {vendor.phone}
                                </span>
                            </div>

                            {/* Elegant underline animation */}
                            <span
                                className="
                  absolute bottom-0 left-6 right-6
                  h-[2px]
                  bg-gradient-to-r from-emerald-500 to-emerald-400
                  transform scale-x-0 origin-left
                  transition-transform duration-[900ms] ease-out
                  group-hover:scale-x-100
                "
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Vendor;

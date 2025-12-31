import { FaPhoneAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Vendor = () => {
  const { t } = useTranslation();

  const vendors = [
    {
      id: 1,
      phone: "01711-588054",
    },
    {
      id: 2,
      phone: "01713-397560",
    },
    {
      id: 3,
      phone: "01712-445566",
    },
    {
      id: 4,
      phone: "01715-998877",
    },
    {
      id: 5,
      phone: "01718-223344",
    },
    {
      id: 6,
      phone: "01719-667788",
    },
  ];

  return (
    <section className="py-20 bg-emerald-50" id="vendor">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-block mb-4 ">
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
            <h1 className="text-3xl md:text-4xl p-2 lg:text-5xl font-bold text-gray-800 mb-4">
              {t("vendor_title")}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
          </div>
          <p className="text-lg text-gray-500 mt-2">
            {t("vendor_subtitle")}
          </p>
        </div>

        {/* Vendor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="
                relative bg-gray-50 rounded-xl p-6 shadow-sm
                border-l-4 border-green-600
                transition-all duration-300
                hover:border-red-600 hover:bg-red-50 hover:shadow-lg
              "
            >
              {/* Vendor Name */}
              <div className="flex items-start gap-3 mb-4">
                <FaBuilding className="text-green-600 mt-1 transition-colors duration-300 group-hover:text-red-600" />
                <h3 className="text-sm font-semibold text-gray-800 leading-relaxed">
                  {t(`vendor_${vendor.id}_name`)}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 mb-3">
                <FaMapMarkerAlt className="text-green-500 mt-1" />
                <p className="text-sm text-gray-700">
                  {t(`vendor_${vendor.id}_address`)}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-green-500 mt-1" />
                <p className="text-sm text-gray-700 font-medium">
                  {vendor.phone}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Vendor;

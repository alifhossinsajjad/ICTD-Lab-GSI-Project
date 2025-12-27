import { FaPhoneAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const vendors = [
  {
    id: 1,
    name: "JV of Optimal IT Ltd; Savvy Techmart Ltd and LAL Sobuz Technology",
    address: "4/16 Humayun Road (3rd Floor), Mohammadpur, Dhaka-1207",
    phone: "01711-588054",
  },
  {
    id: 2,
    name: "JV of IBCS-Primax Software (Bangladesh) Ltd, Leads Training & Consulting Ltd and Virtual Market Solution Ltd",
    address: "House- 6/2 (Level 4 & 6), Kazi Nazrul Islam Road, Block-F, Dhaka-1207",
    phone: "01713-397560",
  },
  {
    id: 3,
    name: "DataSoft Systems Bangladesh Ltd",
    address: "House-11, Road-113/A, Gulshan-2, Dhaka-1212",
    phone: "01712-445566",
  },
  {
    id: 4,
    name: "Southtech Limited",
    address: "Rangs Pearl Tower, Mohakhali, Dhaka-1212",
    phone: "01715-998877",
  },
  {
    id: 5,
    name: "Tiger IT Bangladesh Ltd",
    address: "Rangs Bhaban, Gulshan-1, Dhaka-1212",
    phone: "01718-223344",
  },
  {
    id: 6,
    name: "Dream71 Bangladesh Ltd",
    address: "Banani DOHS, Dhaka-1206",
    phone: "01719-667788",
  },
];

const Vendor = () => {
  return (
    <section className="py-20 bg-white" id="vendor">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-2xl md:text-5xl font-semibold text-green-700 uppercase">
            Contact With Vendor
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Approved vendors for ICTD Lab GIS Mapping System
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
                  {vendor.name}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 mb-3">
                <FaMapMarkerAlt className="text-green-500 mt-1" />
                <p className="text-sm text-gray-700">
                  {vendor.address}
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

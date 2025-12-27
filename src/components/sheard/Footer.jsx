import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Government Logos */}
        <div className="flex justify-center mb-12">
          <img
            src="/ictd-footer.png"
            alt="Digital Bangladesh | ICT Division | DoICT"
            className="max-h-35 w-full object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              ICTD Lab GIS
            </h3>
            <p className="text-sm leading-relaxed">
              A government GIS mapping and analytics platform supporting
              spatial data visualization, monitoring, and decision-making.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">Map</li>
              <li className="hover:text-blue-600 cursor-pointer">Vendors</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">GIS Mapping</li>
              <li className="hover:text-blue-600 cursor-pointer">Spatial Analysis</li>
              <li className="hover:text-blue-600 cursor-pointer">Data Visualization</li>
              <li className="hover:text-blue-600 cursor-pointer">Reports</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a className="p-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition">
                <FaFacebookF />
              </a>
              <a className="p-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition">
                <FaTwitter />
              </a>
              <a className="p-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition">
                <FaLinkedinIn />
              </a>
              <a className="p-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ICTD Lab GIS Mapping System. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-50 border-t border-gray-200">

      {/* Government Logos */}
      {/* Partner Marquee */}


      {/* Main Content with Background */}
      <div
        style={{ backgroundImage: "url('/cnts-bg.png')" }}
        className="relative w-full bg-cover bg-center"
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-green-700/85"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-200">

            {/* About */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 border-b border-green-500 inline-block pb-1">
                {t("footer_about_title")}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {t("footer_about_desc")}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 border-b border-green-500 inline-block pb-1">
                {t("footer_quick_links")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("footer_link_home")}</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("footer_link_map")}</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("footer_link_vendor")}</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("footer_link_contact")}</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 border-b border-green-500 inline-block pb-1">
                {t("footer_services")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("footer_service_gis")}</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("footer_service_spatial")}</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("footer_service_viz")}</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("footer_service_reports")}</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 border-b border-green-500 inline-block pb-1">
                {t("footer_follow")}
              </h3>
              <div className="flex gap-4">
                <a className="p-3 rounded-full bg-white/10 hover:bg-green-600 text-white transition-all shadow-lg backdrop-blur-sm cursor-pointer">
                  <FaFacebookF />
                </a>
                <a className="p-3 rounded-full bg-white/10 hover:bg-green-600 text-white transition-all shadow-lg backdrop-blur-sm cursor-pointer">
                  <FaTwitter />
                </a>
                <a className="p-3 rounded-full bg-white/10 hover:bg-green-600 text-white transition-all shadow-lg backdrop-blur-sm cursor-pointer">
                  <FaLinkedinIn />
                </a>
                <a className="p-3 rounded-full bg-white/10 hover:bg-green-600 text-white transition-all shadow-lg backdrop-blur-sm cursor-pointer">
                  <FaInstagram />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} {t("footer_copyright")}</p>
            <p className="mt-2 text-xs text-gray-400">{t("footer_govt")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

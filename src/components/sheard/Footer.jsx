import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white border-t border-emerald-100">
      {/* Government Logos */}
      {/* Partner Marquee */}

      {/* Main Content with Background */}
      <div
      
        className="relative w-full bg-cover bg-center"
      >
        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/95 via-emerald-50/90 to-emerald-100/85"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-emerald-800">
            {/* About */}
            <div>
              <h3 className="text-emerald-950 text-lg font-bold mb-6 border-b border-emerald-300 inline-block pb-1">
                {t("footer_about_title")}
              </h3>
              <p className="text-sm leading-relaxed text-emerald-700">
                {t("footer_about_desc")}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-emerald-950 text-lg font-bold mb-6 border-b border-emerald-300 inline-block pb-1">
                {t("footer_quick_links")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {t("footer_link_home")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {t("footer_link_map")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {t("footer_link_vendor")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {t("footer_link_contact")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-emerald-950 text-lg font-bold mb-6 border-b border-emerald-300 inline-block pb-1">
                {t("footer_services")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {t("footer_service_gis")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {t("footer_service_spatial")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {t("footer_service_viz")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {t("footer_service_reports")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-emerald-950 text-lg font-bold mb-6 border-b border-emerald-300 inline-block pb-1">
                {t("footer_follow")}
              </h3>
              <div className="flex gap-4">
                <a className="p-3 rounded-full bg-white hover:bg-emerald-500 hover:text-white text-emerald-600 transition-all shadow-md border border-emerald-100 cursor-pointer">
                  <FaFacebookF />
                </a>
                <a className="p-3 rounded-full bg-white hover:bg-emerald-500 hover:text-white text-emerald-600 transition-all shadow-md border border-emerald-100 cursor-pointer">
                  <FaTwitter />
                </a>
                <a className="p-3 rounded-full bg-white hover:bg-emerald-500 hover:text-white text-emerald-600 transition-all shadow-md border border-emerald-100 cursor-pointer">
                  <FaLinkedinIn />
                </a>
                <a className="p-3 rounded-full bg-white hover:bg-emerald-500 hover:text-white text-emerald-600 transition-all shadow-md border border-emerald-100 cursor-pointer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-emerald-200 mt-12 pt-8 text-center text-sm text-emerald-600">
            <p>
              © {new Date().getFullYear()} {t("footer_copyright")}
            </p>
            <p className="mt-2 text-xs text-emerald-500">{t("footer_govt")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

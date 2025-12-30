import React from "react";
import {
  FiHome,
  FiBell,
  FiInfo,
  FiTarget,
  FiCamera,
  FiUsers,
} from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { text } from "../i18n/lang";
// import { text } from "./././"

const Navbar = ({ setActiveView }) => {
  const { lang, toggleLanguage } = useLanguage();
  const t = text[lang];

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (view) => {
    if (view === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (["notice", "about", "goals", "gallery", "team"].includes(view)) {
      scrollTo(view);
    } else if (view === "all-notices" && setActiveView) {
      setActiveView("all-notices");
    }
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-green-700 text-white py-2">
        <div className="container mx-auto px-6 flex justify-between text-sm">
          <div className="overflow-hidden whitespace-nowrap animate-marquee flex gap-8">
            <span>📞 +880-2-9898989</span>
            <span>✉️ info@ictdlab.gov.bd</span>
          </div>
          <div className="text-xs font-medium">Government of Bangladesh</div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNavigation("home")}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <div className="bg-blue-700 p-2 rounded-lg text-white font-bold text-xl">
            ICTD
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">ICTD Lab</h1>
            <p className="text-sm text-gray-600">GIS Platform</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavItem
            icon={<FiHome />}
            label={t.home}
            onClick={() => handleNavigation("home")}
          />
          <NavItem
            icon={<FiBell />}
            label={t.notice}
            onClick={() => handleNavigation("notice")}
          />
          <NavItem
            icon={<FiInfo />}
            label={t.about}
            onClick={() => handleNavigation("about")}
          />
          <NavItem
            icon={<FiTarget />}
            label={t.goals}
            onClick={() => handleNavigation("goals")}
          />
          <NavItem
            icon={<FiCamera />}
            label={t.gallery}
            onClick={() => handleNavigation("gallery")}
          />
          <NavItem
            icon={<FiUsers />}
            label={t.team}
            onClick={() => handleNavigation("team")}
          />
          <NavItem
            icon={<FiBell />}
            label={t.allNotices}
            onClick={() => handleNavigation("all-notices")}
          />
        </nav>

        {/* Language & Login */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-sm"
          >
            {lang === "en" ? "বাংলা" : "English"}
          </button>

          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-medium">
            {t.login}
          </button>
        </div>
      </div>
    </header>
  );
};

/* Reusable Nav Item */
const NavItem = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition"
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Navbar;

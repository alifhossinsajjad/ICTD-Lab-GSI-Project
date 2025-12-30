import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";

import logo from "../../assets/govt.png";
import {
  FiBell,
  FiHome,
  FiInfo,
  FiMenu,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "bn" : "en");
  };

  // Scroll to section using refs

  const navItems = [
    { icon: <FiHome />, label: t("home"), href: "#home" },
    { icon: <FiBell />, label: t("notice"), href: "#notice" },
    { icon: <FiTarget />, label: t("goals"), href: "#goals" },
    { icon: <FiUsers />, label: t("team"), href: "#vendor" },
    { icon: <FiInfo />, label: t("contact"), href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-green-700 text-white py-2">
        <div className="container mx-auto px-6 flex justify-between text-sm">
          <div className="flex gap-8 overflow-hidden whitespace-nowrap animate-marquee">
            <span>📞 +880-2-9898989</span>
            <span>✉️ info@ictdlab.gov.bd</span>
          </div>
          <div className="text-xs font-medium">{t("government")}</div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer flex items-center space-x-2">
          <div className="">
            <img src={logo} alt="" className="w-14" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">ICTD Lab</h1>
            <p className="text-sm text-gray-600">GIS Platform</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
          {/* Language */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-sm ml-4"
          >
            {i18n.language === "en" ? "বাংলা" : "English"}
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg ml-2">
            {t("login")}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <Fix /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              />
            ))}

            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-sm mt-2"
            >
              {i18n.language === "en" ? "বাংলা" : "English"}
            </button>

            <button className="bg-red-600 text-white px-6 py-2 rounded-lg mt-2">
              {t("login")}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

// Nav Item Component
const NavItem = ({ icon, label, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 rounded-lg font-medium text-gray-700"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default Navbar;
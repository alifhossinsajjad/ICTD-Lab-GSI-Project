import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBell,
  FiTarget,
  FiUsers,
  FiInfo,
} from "react-icons/fi";
import logo from "../../assets/govt.png";
import { Link } from "react-router";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "bn" : "en");
  };

  const navItems = [
    { icon: <FiHome />, label: t("home"), href: "/" },
    // { icon: <FiBell />, label: t("notice"), href: "#notice" },
    // { icon: <FiTarget />, label: t("goals"), href: "#goals" },
    // { icon: <FiHome />, label: t("about"), href: "#about" },
    { icon: <FiUsers />, label: t("labs"), href: "/labs" },
    { icon: <FiTarget />, label: t("Notice"), href: "/all-notice" },
     { icon: <FiBell/>, label: t("Lab Details"), href: "/labdetails" },
    // { icon: <FiInfo />, label: t("contact"), href: "#contact" },
  ];

  // Scroll to section
  // const handleScroll = (href) => {
  //   const element = document.querySelector(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //     setMenuOpen(false); // close menu after click
  //   }
  // };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 fixed w-full z-50">
      {/* Top Bar */}
      {/* <div className="bg-green-700 text-white py-2">
        <div className="container mx-auto px-6 flex justify-between text-sm">
          <div className="flex gap-8 overflow-hidden whitespace-nowrap">
            <span>📞 +880-2-9898989</span>
            <span>✉️ info@ictdlab.gov.bd</span>
          </div>
          <div className="text-xs font-medium">{t("government")}</div>
        </div>
      </div> */}

      {/* Main Nav */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="cursor-pointer flex items-center space-x-2">
          <img src={logo} alt="ICTD Logo" className="w-14" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">ICTD Lab</h1>
            <p className="text-sm text-gray-600">GIS Platform</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              
              to={item.href}
              className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 rounded-lg font-medium text-gray-700 transition-colors duration-300"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
          <Link
            to={"/login"}
            className="cursor-pointer hover:scale-105 bg-red-600 text-white px-6 py-2 rounded-lg ml-2 hover:scale-105 transition-transform duration-300"
          >
            {t("login")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="cursor-pointer hover:scale-105  px-4 py-2 bg-gray-100 hover:bg-red-600 text-black hover:text-white rounded-lg font-medium text-sm ml-4 transition-all duration-300"
          >
            {i18n.language === "বাংলা" ? "en" : "বাংলা"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200 animate-slideDown">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Link
                to={item.href}
              
                
                className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 rounded-lg font-medium text-gray-700 transition-colors duration-300"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}


<Link to={"/login"}>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg mt-2 hover:scale-105 transition-transform duration-300">
              {t("login")}
            </button>
</Link>

            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-sm mt-2"
            >
              {i18n.language === "en" ? "বাংলা" : "English"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

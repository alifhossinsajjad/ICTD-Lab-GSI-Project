import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX, FiGlobe, FiUser } from "react-icons/fi";

const Navbar = ({ setActiveView }) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for scroll sections
  const noticeRef = useRef(null);
  const aboutRef = useRef(null);
  const goalsRef = useRef(null);
  const teamRef = useRef(null);
  const vendorRef = useRef(null);
  const contactRef = useRef(null);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "bn" : "en");
  };

  // Scroll to section using refs
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close mobile menu
  };

  const handleNavigation = (view) => {
    if (view === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false);
    } else if (view === "notice") scrollTo(noticeRef);
    else if (view === "about") scrollTo(aboutRef);
    else if (view === "goals") scrollTo(goalsRef);
    else if (view === "team") scrollTo(teamRef);
    else if (view === "vendors") scrollTo(vendorRef);
    else if (view === "contact") scrollTo(contactRef);
    else if (view === "all-notices" && setActiveView) setActiveView("all-notices");
  };

  const navItems = [
    { label: "Home", view: "home" },
    { label: "Notice", view: "notice" },
    { label: "About", view: "about" },
    { label: "Goals", view: "goals" },
    { label: "Team", view: "team" },
    { label: "Vendors", view: "vendors" },
    { label: "Contact", view: "contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 fixed w-full z-50 font-sans">
      {/* Top Bar - Marquee (Kept as requested) */}
      <div className="bg-red-600 text-white font-bold py-2">
        <div className="container mx-auto px-6 flex justify-between text-sm">
          <div className="flex  gap-8 overflow-hidden whitespace-nowrap animate-marquee w-full">
            <span>📞 +880-2-9898989</span>
            <span className="ml-8">✉️ info@ictdlab.gov.bd</span>
            <span className="ml-8">📢 Welcome to ICTD Digital Lab Project</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div
          onClick={() => handleNavigation("home")}
          className="cursor-pointer flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
            BD
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-800 leading-none">
              ICTD Digital Lab
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Government of Bangladesh
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNavigation(item.view)}
              className="text-gray-600 hover:text-green-700 font-medium text-sm transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-gray-600 hover:text-green-700 font-medium text-sm"
          >
            <FiGlobe className="text-lg" />
            <span>{i18n.language === "en" ? "বাংলা" : "English"}</span>
          </button>

          {/* Login Button */}
          <button className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-sm">
            <FiUser />
            <span>Login</span>
          </button>
        </div>

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
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200 absolute w-full">
          <nav className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavigation(item.view)}
                className="text-left text-gray-700 hover:text-green-700 font-medium py-2 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </button>
            ))}

            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-600 font-medium"
              >
                <FiGlobe />
                <span>{i18n.language === "en" ? "বাংলা" : "English"}</span>
              </button>

              <button className="flex items-center justify-center gap-2 bg-green-800 text-white px-5 py-2.5 rounded-lg font-medium">
                <FiUser />
                <span>Login</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

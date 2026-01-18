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
    { icon: <FiBell />, label: t("Lab Details"), href: "/labdetails" },
    // { icon: <FiInfo />, label: t("contact"), href: "#contact" },
  ];

  // Marquee announcements - contextually relevant to ICTD Lab GSI Project
  const announcements = [
    "📍 বাংলাদেশের ৮টি বিভাগে ৯,০০১+ আইসিটি ল্যাব স্থাপিত হয়েছে",
    "🎓 ৩০,০০০+ শিক্ষার্থী আইসিটি শিক্ষায় উপকৃত হচ্ছেন",
    "🗺️ জিওস্পেশিয়াল ডেটা সংগ্রহ ও ভিজুয়ালাইজেশন প্ল্যাটফর্ম",
    "💻 শিক্ষা প্রতিষ্ঠানে ডিজিটাল রূপান্তর ত্বরান্বিত করা হচ্ছে",
    "📊 রিয়েল-টাইম ল্যাব মনিটরিং ও ডেটা ম্যানেজমেন্ট সিস্টেম",
    "🌐 স্থানীয় উন্নয়ন পরিকল্পনা ও দুর্যোগ ব্যবস্থাপনায় সহায়তা",
    "✉️ যোগাযোগ: info@ictd-lab.gov.bd | ☎️ হেল্পলাইন: +880-2-9898989",
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 fixed w-full z-50">
      {/* Running Marquee Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 text-white py-2.5 overflow-hidden relative">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative flex items-center">
          {/* Announcement Icon */}
          <div className="flex-shrink-0 px-4 flex items-center gap-2 bg-emerald-800/50 py-1 rounded-r-full">
            <FiBell className="text-yellow-300 animate-pulse" size={18} />
            <span className="text-xs font-bold uppercase tracking-wider">সর্বশেষ আপডেট</span>
          </div>

          {/* Marquee Content */}
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap inline-block">
              {announcements.map((announcement, index) => (
                <span key={index} className="inline-flex items-center mx-8">
                  <span className="text-sm font-medium">{announcement}</span>
                  {index < announcements.length - 1 && (
                    <span className="mx-8 text-yellow-300">●</span>
                  )}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {announcements.map((announcement, index) => (
                <span key={`dup-${index}`} className="inline-flex items-center mx-8">
                  <span className="text-sm font-medium">{announcement}</span>
                  {index < announcements.length - 1 && (
                    <span className="mx-8 text-yellow-300">●</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

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
            {i18n.language === "en" ? "English" : "বাংলা"}
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
              {i18n.language === "en" ? "English" : "বাংলা"}
            </button>
          </nav>
        </div>
      )}

      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </header>
  );
};

export default Navbar;

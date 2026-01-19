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
    { icon: <FiInfo />, label: t("Dashboard"), href: "/dashboard" },
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
    <header className="bg-emerald-900/80 backdrop-blur-md border-b border-emerald-500/20 fixed w-full z-50">
      {/* Running Marquee Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 text-white py-2.5 overflow-hidden relative border-b border-emerald-500/20">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative flex items-center">
          {/* Announcement Icon */}
          <div className="flex-shrink-0 px-4 flex items-center gap-2 bg-emerald-900/50 py-1 rounded-r-full border border-emerald-500/30 border-l-0">
            <FiBell className="text-yellow-300 animate-pulse" size={18} />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">সর্বশেষ আপডেট</span>
          </div>

          {/* Marquee Content */}
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap inline-block">
              {announcements.map((announcement, index) => (
                <span key={index} className="inline-flex items-center mx-8">
                  <span className="text-sm font-medium text-emerald-50">{announcement}</span>
                  {index < announcements.length - 1 && (
                    <span className="mx-8 text-yellow-300">●</span>
                  )}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {announcements.map((announcement, index) => (
                <span key={`dup-${index}`} className="inline-flex items-center mx-8">
                  <span className="text-sm font-medium text-emerald-50">{announcement}</span>
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
        <Link to={"/"} className="cursor-pointer flex items-center space-x-2 group">
          <img src={logo} alt="ICTD Logo" className="w-14 drop-shadow-lg group-hover:scale-105 transition-transform duration-300" />
          <div>
            <h1 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">ICTD Lab</h1>
            <p className="text-sm text-emerald-200/70">GIS Platform</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center gap-2 px-4 py-2 hover:bg-emerald-800/50 rounded-lg font-medium text-emerald-100 hover:text-white transition-all duration-300 border border-transparent hover:border-emerald-500/30"
            >
              <span className="text-emerald-400">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
          <Link
            to={"/login"}
            className="cursor-pointer hover:scale-105 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg ml-2 transition-all duration-300 shadow-lg shadow-emerald-900/20 border border-emerald-500/30"
          >
            {t("login")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="cursor-pointer hover:scale-105 px-4 py-2 bg-emerald-900/50 hover:bg-emerald-800 text-emerald-100 hover:text-white rounded-lg font-medium text-sm ml-4 transition-all duration-300 border border-emerald-500/30"
          >
            {i18n.language === "en" ? "English" : "বাংলা"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl hover:text-emerald-300 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-emerald-900/95 backdrop-blur-xl shadow-xl border-t border-emerald-500/20 animate-slideDown absolute w-full">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center gap-2 px-4 py-3 hover:bg-emerald-800/50 rounded-lg font-medium text-emerald-100 hover:text-white transition-all duration-300 border border-transparent hover:border-emerald-500/30"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-emerald-400">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}

            <Link to={"/login"} onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-6 py-3 rounded-lg mt-2 transition-all duration-300 shadow-lg border border-emerald-500/30">
                {t("login")}
              </button>
            </Link>

            <button
              onClick={() => {
                toggleLanguage();
                setMenuOpen(false);
              }}
              className="w-full px-4 py-3 bg-emerald-950/50 hover:bg-emerald-800 text-emerald-100 hover:text-white rounded-lg font-medium text-sm mt-2 border border-emerald-500/30 transition-all"
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

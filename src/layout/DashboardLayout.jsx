import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineMenuAlt2,
  HiOutlineDesktopComputer,
  HiOutlineAcademicCap,
  HiOutlineExclamationCircle,
  HiOutlineLockClosed,
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const closeSidebar = () => setIsSidebarOpen(false);

  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard Home",
      icon: <HiOutlineHome className="w-5 h-5" />,
    },
    {
      path: "/dashboard/items-profile",
      name: "Profile",
      icon: <HiOutlineUser className="w-5 h-5" />,
    },
    {
      path: "/dashboard/list-of-all-labs",
      name: "List of All Labs",
      icon: <HiOutlineMenuAlt2 className="w-5 h-5" />,
    },
    {
      path: "/dashboard/labs-under-control",
      name: "Labs Under Control",
      icon: <HiOutlineDesktopComputer className="w-5 h-5" />,
    },
    {
      path: "/dashboard/items-training",
      name: "Training",
      icon: <HiOutlineAcademicCap className="w-5 h-5" />,
    },
    {
      path: "/dashboard/items-complaints",
      name: "Complaints",
      icon: <HiOutlineExclamationCircle className="w-5 h-5" />,
    },
    {
      path: "/dashboard/change-password",
      name: "Change Password",
      icon: <HiOutlineLockClosed className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <motion.aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-[#006A4E] text-white shadow-2xl transform lg:transform-none transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        {/* LOGO AREA */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-xl font-bold">L</span>
            </div>
            <span className="text-xl font-bold tracking-wide">ICTD Lab</span>
          </Link>
          <button
            onClick={closeSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-5rem)]">
          <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4 px-2">
            Menu
          </div>
          {menuItems.map((item) => {
            const isActive =
              item.path === "/dashboard"
                ? location.pathname === "/dashboard"
                : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${isActive
                    ? "bg-white text-[#006A4E] shadow-lg shadow-black/5"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-xl"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10 text-lg">{item.icon}</span>
                <span className="relative z-10 font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </motion.aside>

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* NAVBAR */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 shadow-sm">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <HiMenuAlt3 className="w-6 h-6" />
          </button>

          {/* Breadcrumbs / Page Title */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-800">
              {menuItems.find((item) => item.path === location.pathname)?.name ||
                "Dashboard"}
            </h1>
            <span className="text-xs text-gray-500">
              Welcome back to your panel
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#006A4E] to-[#0D9488] flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/20">
                A
              </div>
              <div className="hidden md:block text-sm">
                <p className="font-semibold text-gray-700">Admin User</p>
                <p className="text-xs text-gray-500">admin@ictd.gov.bd</p>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

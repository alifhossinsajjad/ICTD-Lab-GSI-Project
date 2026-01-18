import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineDesktopComputer,
  HiOutlineAcademicCap,
  HiOutlineExclamationCircle,
  HiOutlineLockClosed,
  HiOutlineLogout,
  HiMenuAlt3,
  HiX,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile open/close
  const [isCollapsed, setIsCollapsed] = useState(false); // ✅ desktop collapse
  const location = useLocation();

  const closeSidebar = () => setIsSidebarOpen(false);

  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard Home",
      icon: <HiOutlineHome className="w-5 h-5" />,
    },
    {
      path: "/dashboard/profile",
      name: "Profile",
      icon: <HiOutlineUser className="w-5 h-5" />,
    },
    {
      path: "/dashboard/labsUnderControl",
      name: "Labs Under Control",
      icon: <HiOutlineDesktopComputer className="w-5 h-5" />,
    },
    {
      path: "/dashboard/traning",
      name: "Training",
      icon: <HiOutlineAcademicCap className="w-5 h-5" />,
    },
    {
      path: "/dashboard/complaints",
      name: "Complaints",
      icon: <HiOutlineExclamationCircle className="w-5 h-5" />,
    },
    {
      path: "/dashboard/changePassword",
      name: "Change Password",
      icon: <HiOutlineLockClosed className="w-5 h-5" />,
    },
  ];

  const handdleLogout = () => {
    console.log("logout successfully");
  };

  return (
    <div className="h-screen bg-emerald-50 flex font-sans overflow-hidden">
      {/* mobile overlay */}
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

      {/* sidebar */}
      <motion.aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          ${isCollapsed ? "w-20" : "w-72"}
          bg-[#006A4E] text-white shadow-2xl
          transform lg:transform-none transition-all duration-300 ease-in-out
          flex flex-col
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* top brand */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10 shrink-0">
          <Link to="/" className="flex items-center gap-2 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <span className="text-xl font-bold">L</span>
            </div>

            {/* ✅ hide title when collapsed */}
            {!isCollapsed && (
              <span className="text-xl font-bold tracking-wide whitespace-nowrap">
                ICTD Lab
              </span>
            )}
          </Link>

          {/* mobile close */}
          <button
            onClick={closeSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* ✅ desktop collapse toggle button */}
        <div className="hidden lg:flex justify-end px-3 pt-3">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`cursor-pointer  p-2 ${isCollapsed ? "mx-auto " : ""} rounded-lg bg-white/10 hover:bg-white/15 transition`}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <HiChevronRight className="w-5 h-5 text-white" />
            ) : (
              <HiChevronLeft className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          {!isCollapsed && (
            <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4 px-2">
              Menu
            </div>
          )}

          {menuItems.map((item) => {
            const isActive =
              item.path === "/dashboard"
                ? location.pathname === "/dashboard"
                : location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                  isActive
                    ? "bg-white text-[#006A4E] shadow-lg shadow-black/5"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
                title={isCollapsed ? item.name : ""}
              >
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

                {/* ✅ hide item name when collapsed */}
                {!isCollapsed && (
                  <span className="relative z-10 font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* logout */}
        <div className="p-4 border-t border-white/10 shrink-0">
          <button
            onClick={() => handdleLogout()}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:bg-red-500/10 hover:text-red-200 transition-all duration-300 group w-full"
            title={isCollapsed ? "Logout" : ""}
          >
            <HiOutlineLogout className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* main */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* navbar */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 shadow-sm shrink-0">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <HiMenuAlt3 className="w-6 h-6" />
          </button>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-800">
              {menuItems.find((item) => item.path === location.pathname)?.name ||
                "Dashboard"}
            </h1>
            <span className="text-xs text-gray-500">
              Welcome to ICTD Lab Dashboard
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="avatar avatar-online">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
              </div>
              <div className="hidden md:block text-sm">
                <p className="font-semibold text-gray-700">Admin User</p>
                <p className="text-xs text-gray-500">admin@ictd.gov.bd</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto scroll-smooth">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-8xl mx-auto pb-6"
          >
            <Outlet />
          </motion.div>

          <footer className="bg-green-950 text-white text-center p-4 mt-auto">
            <h1>
              <span className="font-bold">Copyright </span>© 2015{" "}
              <span className="text-red-500 font-bold">DoICT</span> . All rights
              reserved.
            </h1>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

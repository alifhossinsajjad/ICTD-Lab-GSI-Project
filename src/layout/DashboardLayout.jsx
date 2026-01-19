import React, { useState } from "react";
import { Link, Outlet, useLocation, NavLink } from "react-router";
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
import { FaChartPie, FaTimes, FaSignOutAlt, FaBars, FaBell } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile open/close
  const [isCollapsed, setIsCollapsed] = useState(false); // desktop collapse
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
    // {
    //   path: "/dashboard/traning",
    //   name: "Training",
    //   icon: <HiOutlineAcademicCap className="w-5 h-5" />,
    // },
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
    <div className="flex h-screen bg-emerald-950 font-sans overflow-hidden relative">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* mobile overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* sidebar */}
      <motion.aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          ${isCollapsed ? "w-20" : "w-72"}
          bg-emerald-900/90 backdrop-blur-xl border-r border-emerald-500/20 shadow-2xl
          transform lg:transform-none transition-all duration-300 ease-in-out
          flex flex-col
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* top brand */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-emerald-500/20 shrink-0 bg-emerald-950/30">
          <Link to="/" className="flex items-center gap-3 overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-emerald-950">L</span>
            </div>

            {/* hide title when collapsed */}
            {!isCollapsed && (
              <span className="text-xl font-bold tracking-wide whitespace-nowrap text-white">
                ICTD Lab
              </span>
            )}
          </Link>

          {/* mobile close */}
          <button
            onClick={closeSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-emerald-500/20 text-emerald-200 hover:text-white transition-colors"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* desktop collapse toggle button */}
        <div className="hidden lg:flex justify-end px-3 pt-3">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`cursor-pointer p-2 ${isCollapsed ? "mx-auto" : ""} rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-white transition-all border border-emerald-500/10 hover:border-emerald-500/30`}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <Menu className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          {!isCollapsed && (
            <div className="text-xs font-bold text-emerald-400/70 uppercase tracking-wider mb-4 px-2">
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
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${isActive
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 border border-emerald-500"
                    : "text-emerald-100/70 hover:bg-emerald-800/50 hover:text-white border border-transparent hover:border-emerald-500/20"
                  }`}
                title={isCollapsed ? item.name : ""}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-emerald-600 rounded-xl -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}

                <span className={`relative z-10 text-xl ${isActive ? "text-white" : "text-emerald-400 group-hover:text-emerald-300"}`}>{item.icon}</span>

                {/* hide item name when collapsed */}
                {!isCollapsed && (
                  <span className="relative z-10 font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* logout */}
        <div className="p-4 border-t border-emerald-500/20 shrink-0 bg-emerald-950/30">
          <button
            onClick={() => handdleLogout()}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-rose-300 hover:bg-rose-500/10 hover:text-rose-200 transition-all duration-300 group w-full border border-transparent hover:border-rose-500/20"
            title={isCollapsed ? "Logout" : ""}
          >
            <HiOutlineLogout className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* main */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
        {/* navbar */}
        <header className="h-20 bg-emerald-900/80 backdrop-blur-md border-b border-emerald-500/20 flex items-center justify-between px-4 lg:px-8 shadow-lg shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 rounded-lg text-emerald-200 hover:bg-emerald-800/50 hover:text-white transition-colors"
            >
              <HiMenuAlt3 className="w-6 h-6" />
            </button>

            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white tracking-tight">
                {menuItems.find((item) => item.path === location.pathname)?.name ||
                  "Dashboard"}
              </h1>
              <span className="text-xs text-emerald-300/70 font-medium">
                Welcome to ICTD Lab Dashboard
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-emerald-300 hover:text-white hover:bg-emerald-800/50 rounded-full transition-all relative">
              <FaBell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-pulse shadow-lg shadow-rose-500/50"></span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-emerald-500/20">
              <div className="hidden md:block text-right">
                <p className="font-semibold text-white text-sm">Admin User</p>
                <p className="text-xs text-emerald-400">admin@ictd.gov.bd</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-emerald-600 border-2 border-emerald-400 flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-emerald-500/20">
                AU
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto scroll-smooth p-6 custom-scrollbar">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-8xl mx-auto pb-6 min-h-[calc(100vh-180px)]"
          >
            <Outlet />
          </motion.div>

          <footer className="bg-emerald-900/50 backdrop-blur-md border-t border-emerald-500/20 text-emerald-200/70 text-center p-4 mt-auto rounded-t-2xl">
            <h1 className="text-sm">
              <span className="font-bold text-emerald-400">Copyright </span>© 2025{" "}
              <span className="text-rose-400 font-bold">DoICT</span> . All rights
              reserved.
            </h1>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

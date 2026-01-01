import React, { useState } from "react";
import {
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    {
      id: 1,
      icon: <HiOutlineOfficeBuilding className="w-8 h-8 text-green-700" />,
      count: "9,001",
      label: t("stats_digital_labs"),
    },
    {
      id: 2,
      icon: <HiOutlineUsers className="w-8 h-8 text-green-700" />,
      count: "36,020+",
      label: t("stats_teachers_trained"),
    },
    {
      id: 3,
      icon: <HiOutlineLocationMarker className="w-8 h-8 text-green-700" />,
      count: "64",
      label: t("stats_districts_covered"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative bg-emerald-50 pt-32 px-12 pb-20 overflow-hidden font-sans">
      {/* Background Pattern (Subtle dots or grid) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#059669 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-left space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-green-700 font-medium text-sm tracking-wide">
                {t("banner_tag")}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#064E3B] leading-tight">
                {t("banner_title")}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-lg max-w-xl leading-relaxed"
            >
              {t("banner_desc")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#006A4E] hover:bg-[#00563f] text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-green-900/20"
              >
                {t("banner_btn_lab_list")}
                <FaArrowRight className="text-sm" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#006A4E] hover:bg-[#00563f] text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-green-900/20"
              >
                {t("banner_btn_learn_more")}
              </motion.button>
            </motion.div>

            {/* Slide Indicators */}
            <motion.div variants={itemVariants} className="flex gap-2 pt-8">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-[#006A4E]"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            className="flex flex-col gap-6 lg:pl-12"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow duration-300 max-w-md ml-auto w-full cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#006A4E]">
                    {stat.count}
                  </h3>
                  <p className="text-gray-500 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaLaptopCode, FaUsers, FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-200/40 blur-[120px]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-200/30 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image with enhanced overlay */}
            <div className="relative h-[580px] rounded-[32px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://i.ibb.co/Zpk688v6/rel.webp"
                alt="ICT Lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />

              {/* Decorative corner accent */}
              <div className="absolute top-6 left-6 w-20 h-20 border-t-4 border-l-4 border-emerald-400 rounded-tl-2xl opacity-80"></div>
              <div className="absolute bottom-6 right-6 w-20 h-20 border-b-4 border-r-4 border-blue-400 rounded-br-2xl opacity-80"></div>
            </div>

            {/* Enhanced Floating Stat Card - Students */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-10 left-10 bg-white/95 backdrop-blur-xl px-7 py-6 rounded-2xl shadow-2xl border-2 border-emerald-100 hover:shadow-emerald-200/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center">
                  <FaUsers size={24} />
                  <div className="absolute inset-0 rounded-xl bg-emerald-400 animate-ping opacity-20"></div>
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">30,000+</h4>
                  <p className="text-sm text-gray-600 font-medium">
                    {t("about_stats_students")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Floating Stat Card - Labs */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute top-10 -right-10 bg-white/95 backdrop-blur-xl px-7 py-6 rounded-2xl shadow-2xl border-2 border-blue-100 hover:shadow-blue-200/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center">
                  <FaLaptopCode size={24} />
                  <div className="absolute inset-0 rounded-xl bg-blue-400 animate-ping opacity-20"></div>
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">9,001+</h4>
                  <p className="text-sm text-gray-600 font-medium">
                    {t("about_stats_labs")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase shadow-sm"
              >
                {t("about_tag")}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              >
                {t("about_title")}
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-gray-600 text-lg leading-relaxed"
            >
              <p className="relative pl-4 border-l-4 border-emerald-300">{t("about_p1")}</p>
              <p className="relative pl-4 border-l-4 border-blue-300">{t("about_p2")}</p>
            </motion.div>

            {/* ENHANCED FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                t("about_feature_1"),
                t("about_feature_2"),
                t("about_feature_3"),
                t("about_feature_4"),
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="group flex items-center gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-xl border border-gray-100 hover:border-emerald-200 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" />
                    <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-0 group-hover:opacity-30"></div>
                  </div>
                  <span className="text-gray-800 font-semibold text-sm">{item}</span>
                  <FaCheckCircle className="ml-auto text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            {/* ENHANCED CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-white text-base font-semibold shadow-2xl hover:shadow-gray-900/40 transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10">{t("about_btn_explore")}</span>
                <span className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-2 group-hover:bg-white/20 transition-all duration-300">
                  <FaArrowRight />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

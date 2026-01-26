import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Banner from "../Banner/Banner";
import Goals from "../Goals/Goals";
import Vendor from "../Vendor/Vendor";
import Contact from "../../Contact/Contact";
import About from "../About/About";
import { BangladeshMap } from "../../../components/BangladeshMap/Mainfile";
import { StatsChart } from "../../../components/BangladeshMap/StatsChart";
import Notice from "../../AllNotice/Notice";

const Home = () => {
  const { t } = useTranslation();
  const [hoveredDivision, setHoveredDivision] = useState(null);

  return (
    <div>
      <section id="home">
        <Banner />
      </section>

      <section id="notice">
        <Notice />
      </section>

      <section
        id="map-stats"
        className="py-20 bg-emerald-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {/* <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">
              {t("home_map_title")}
            </h2> */}

            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto mb-4"></div>
            {/* <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
              {t("home_map_desc")}
            </p> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Left Side: Map */}
            <div className="group bg-white/60 backdrop-blur-sm rounded-3xl border-4 border-emerald-100 shadow-xl overflow-hidden h-[650px] relative transition-all duration-500 hover:shadow-emerald-200/50 hover:border-emerald-200">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent pointer-events-none"></div>
              <BangladeshMap onHover={setHoveredDivision} />

              {/* Map Overlay Info */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-emerald-100 pointer-events-none transition-transform duration-500 group-hover:translate-y-[-5px]">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  {t("home_map_overlay_title")}
                </div>
                <p className="text-xs text-emerald-600">
                  {t("home_map_overlay_desc")}
                </p>
              </div>
            </div>

            {/* Right Side: Chart */}
            <div className="h-[650px] transition-all duration-500">
              <StatsChart division={hoveredDivision} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-emerald-50 px-4 sm:px-6 lg:px-8" id="goals">
        <Goals />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="vendor">
        <Vendor />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

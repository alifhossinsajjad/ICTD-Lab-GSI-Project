import React, { useState } from "react";
import Banner from '../Banner/Banner';
import AllNotice from "../../../Pages/AllNotice/AllNotice";
import Goals from "../Goals/Goals";
import Vendor from "../Vendor/Vendor";
import Contact from "../../Contact/Contact";
import About from "../About/About";
import { BangladeshMap } from "../../../components/BangladeshMap/Mainfile";
import { StatsChart } from "../../../components/BangladeshMap/StatsChart";


const Home = () => {
  const [hoveredDivision, setHoveredDivision] = useState(null);

  return (
    <div>
      <section id="home">
        <Banner />
      </section>

      <section id="notice">
        <AllNotice />
      </section>

      <section id="map-stats" className="py-20 bg-emerald-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Interactive Division Statistics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore educational infrastructure and SRDL lab distribution across Bangladesh.
              Hover over the map to see detailed statistics for each division.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Left Side: Map */}
            <div className="group bg-white rounded-3xl border-4 border-white shadow-2xl overflow-hidden h-[650px] relative transition-all duration-500 hover:shadow-emerald-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent pointer-events-none"></div>
              <BangladeshMap onHover={setHoveredDivision} />

              {/* Map Overlay Info */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-emerald-100 pointer-events-none transition-transform duration-500 group-hover:translate-y-[-5px]">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  Interactive Map
                </div>
                <p className="text-xs text-gray-500">Zoom & Pan enabled</p>
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


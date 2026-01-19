import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Goals from "../Goals/Goals";
import Vendor from "../Vendor/Vendor";
import Contact from "../../Contact/Contact";
import About from "../About/About";
import { BangladeshMap } from "../../../components/BangladeshMap/Mainfile";
import { StatsChart } from "../../../components/BangladeshMap/StatsChart";
import Notice from "../../AllNotice/Notice";

const Home = () => {
    const [hoveredDivision, setHoveredDivision] = useState(null);

    return (
        <div  >
            <section id="home">
                <Banner />
            </section>

            <section id="notice">
                <Notice />
            </section>

            <section
                id="map-stats"
                className="py-20 bg-emerald-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            >
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Interactive Division Statistics
                        </h2>

                        <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mx-auto mb-4"></div>
                        <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
                            Explore educational infrastructure and SRDL lab distribution
                            across Bangladesh. Hover over the map to see detailed statistics
                            for each division.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                        {/* Left Side: Map */}
                        <div className="group bg-emerald-900/20 backdrop-blur-sm rounded-3xl border-4 border-emerald-500/10 shadow-2xl overflow-hidden h-[650px] relative transition-all duration-500 hover:shadow-emerald-500/20 hover:border-emerald-500/30">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
                            <BangladeshMap onHover={setHoveredDivision} />

                            {/* Map Overlay Info */}
                            <div className="absolute bottom-6 left-6 bg-emerald-950/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-emerald-500/30 pointer-events-none transition-transform duration-500 group-hover:translate-y-[-5px]">
                                <div className="flex items-center gap-2 text-emerald-100 font-bold text-sm mb-1">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                    Interactive Map
                                </div>
                                <p className="text-xs text-emerald-300">Zoom & Pan enabled</p>
                            </div>
                        </div>

                        {/* Right Side: Chart */}
                        <div className="h-[650px] transition-all duration-500">
                            <StatsChart division={hoveredDivision} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-emerald-950 px-4 sm:px-6 lg:px-8" id="goals">
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

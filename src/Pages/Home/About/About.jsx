import React from 'react';
import { FaArrowRight, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    return (
        <section className="py-12 bg-emerald-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Image Composition */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative z-10  h-[600px] rounded-3xl overflow-hidden  transform hover:scale-[1.02] transition-transform duration-500">
                            <img
                                src="https://i.ibb.co/Zpk688v6/rel.webp"
                                alt="ICT Lab Students"
                                className="w-full h-full object-cover rounded-2xl overflow-hidden shadow-lg  "
                            />
                            {/* Overlay Gradient */}
                            
                        </div>




                        <div className="absolute bottom-40  -left-12 z-30 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce-slow hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <FaUsers size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">30,000+</h3>
                                    <p className="text-sm text-gray-500 font-medium">{t("about_stats_students")}</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats Card - Floating */}
                        <div className="absolute top-10 -right-8 z-30 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce-slow hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <FaLaptopCode size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">9,001+</h3>
                                    <p className="text-sm text-gray-500 font-medium">{t("about_stats_labs")}</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-50 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl -z-10"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8 relative">
                        <div>
                            <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-2 block">
                                {t("about_tag")}
                            </span>
                            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                                {t("about_title")}
                            </h2>

                        </div>

                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                {t("about_p1")}
                            </p>
                            <p>
                                {t("about_p2")}
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                t("about_feature_1"),
                                t("about_feature_2"),
                                t("about_feature_3"),
                                t("about_feature_4")
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    {item}
                                </div>
                            ))}
                        </div>

                  


                        <button className="group bg-gradient-to-r from-green-600 to-green-400 text-white px-10 py-4 rounded-full font-semibold shadow-lg shadow-green-200 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
  {t("about_btn_explore")}
  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

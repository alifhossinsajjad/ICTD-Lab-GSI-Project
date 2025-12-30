import React, { useState } from 'react';
import { HiOutlineOfficeBuilding, HiOutlineUsers, HiOutlineLocationMarker } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    {
      id: 1,
      icon: <HiOutlineOfficeBuilding className="w-8 h-8 text-green-700" />,
      count: "9,001",
      label: "Digital Labs",
    },
    {
      id: 2,
      icon: <HiOutlineUsers className="w-8 h-8 text-green-700" />,
      count: "36,020+",
      label: "Teachers Trained",
    },
    {
      id: 3,
      icon: <HiOutlineLocationMarker className="w-8 h-8 text-green-700" />,
      count: "64",
      label: "Districts Covered",
    },
  ];

  return (
    <div className="relative bg-emerald-50 pt-32 px-12 pb-20 overflow-hidden font-sans">
      {/* Background Pattern (Subtle dots or grid) */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-left space-y-6">
            {/* Tag */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="text-green-700 font-medium text-sm tracking-wide">
                Government of Bangladesh Initiative
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#064E3B] leading-tight">
                Welcome to Quality <br />
                Education Through <br />
                Technology
              </h1>
            
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
              Creating opportunities for students to become proficient in ICT, fostering
              self-reliance and preparing them for the digital economy.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#006A4E] hover:bg-[#00563f] text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-green-900/20">
                ICTD Digital Lab List
                <FaArrowRight className="text-sm" />
              </button>
              <button className="bg-[#006A4E] hover:bg-[#00563f] text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-green-900/20">
                Learn More
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 pt-8">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-[#006A4E]' : 'w-2 bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="flex flex-col gap-6 lg:pl-12">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow duration-300 max-w-md ml-auto w-full"
              >
                <div className="w-16 h-16 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#006A4E]">
                    {stat.count}
                  </h3>
                  <p className="text-gray-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
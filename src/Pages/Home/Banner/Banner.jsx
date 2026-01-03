import React, { useState, useEffect } from "react";
import {
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import heroBg1 from "../../../../public/heroBg1.jpg";
import heroBg2 from "../../../../public/heroBg2.jpg";
import heroBg3 from "../../../../public/heroBg3.jpg";

const slides = [
  {
    bg: heroBg1,
    tag: "ডিজিটাল বাংলাদেশ",
    title: "ডিজিটাল দক্ষতার পথে বাংলাদেশ",
    desc: "আইসিটি ডিজিটাল ল্যাবের মাধ্যমে প্রযুক্তিনির্ভর আধুনিক শিক্ষা নিশ্চিত করা।",
    btn1: "ল্যাবের তালিকা",
    btn2: "আরও জানুন",
    stats: [
      { id: 1, icon: <HiOutlineOfficeBuilding className="w-6 h-6" />, count: "12+", label: "বছরের অভিজ্ঞতা" },
      { id: 2, icon: <HiOutlineUsers className="w-6 h-6" />, count: "100K+", label: "শিক্ষক সহায়তা" },
      { id: 3, icon: <HiOutlineLocationMarker className="w-6 h-6" />, count: "All", label: "বাংলাদেশ" },
    ],
  },
  {
    bg: heroBg2,
    tag: "শিক্ষা রূপান্তর",
    title: "প্রযুক্তির মাধ্যমে স্মার্ট শিক্ষা",
    desc: "দেশব্যাপী শিক্ষার্থীদের জন্য প্রযুক্তিনির্ভর বাস্তবমুখী শিক্ষা।",
    btn1: "ল্যাব খুঁজুন",
    btn2: "প্রকল্প",
    stats: [
      { id: 1, icon: <HiOutlineOfficeBuilding className="w-6 h-6" />, count: "9,001", label: "ডিজিটাল ল্যাব" },
      { id: 2, icon: <HiOutlineUsers className="w-6 h-6" />, count: "36,020+", label: "প্রশিক্ষিত শিক্ষক" },
      { id: 3, icon: <HiOutlineLocationMarker className="w-6 h-6" />, count: "64", label: "জেলা" },
    ],
  },
  {
    bg: heroBg3,
    tag: "স্মার্ট বাংলাদেশ",
    title: "ভবিষ্যৎ প্রজন্মের প্রস্তুতি",
    desc: "স্মার্ট বাংলাদেশ গঠনে প্রযুক্তিনির্ভর শিক্ষা অপরিহার্য।",
    btn1: "পরিসংখ্যান",
    btn2: "যোগাযোগ",
    stats: [
      { id: 1, icon: <HiOutlineOfficeBuilding className="w-6 h-6" />, count: "6,500+", label: "স্কুল কাভারেজ" },
      { id: 2, icon: <HiOutlineUsers className="w-6 h-6" />, count: "4M+", label: "শিক্ষার্থী" },
      { id: 3, icon: <HiOutlineLocationMarker className="w-6 h-6" />, count: "492", label: "উপজেলা" },
    ],
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-12 overflow-hidden">

      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 -z-10">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000
              ${i === current ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
            style={{ backgroundImage: `url(${s.bg})` }}
          />
        ))}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto z-10">
        <div className="max-w-xl sm:max-w-2xl text-center sm:text-left space-y-5">

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center justify-center sm:justify-start gap-2 text-green-700 text-sm font-medium">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              {slide.tag}
            </span>

            <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#064E3B] leading-tight">
              {slide.title}
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700">
              {slide.desc}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button className="bg-[#006A4E] hover:bg-[#00563f] text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 shadow">
                {slide.btn1}
                <FaArrowRight />
              </button>
              <button className="border border-[#006A4E] text-[#006A4E] px-6 py-3 rounded-full font-medium hover:bg-green-50">
                {slide.btn2}
              </button>
            </div>
          </motion.div>

          {/* DOTS */}
          <div className="flex gap-2 pt-6 justify-center sm:justify-start">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all
                  ${i === current ? "w-8 bg-[#006A4E]" : "w-2 bg-gray-300"}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* STATS CARDS (ONLY LARGE SCREEN) */}
      {/* <div className="hidden lg:block absolute -bottom-7 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl py-7 p-3">
        <div className="bg-white/95 backdrop-blur rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-8 py-6 grid grid-cols-3 gap-6">
          {slide.stats.map((stat) => (
            <div
              key={stat.id}
              className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-green-50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-[#006A4E] transition">
                <div className="text-green-700 group-hover:text-white transition">
                  {stat.icon}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#064E3B]">
                  {stat.count}
                </h3>
                <p className="text-sm text-gray-600">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
{/* STATS CARDS (MD & LG ONLY) */}
<div className="
  hidden 
  md:block 
  absolute 
  -bottom-6 
  left-1/2 
  -translate-x-1/2 
  w-[94%] 
  max-w-5xl
">
  <div
    className="
      bg-white/95 backdrop-blur
      rounded-3xl
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      px-6 py-5
      grid
      grid-cols-1 md:grid-cols-3
      gap-5
    "
  >
    {slide.stats.map((stat) => (
      <div
        key={stat.id}
        className="
          group
          flex items-center gap-4
          p-4
          rounded-2xl
          transition-all duration-300
          hover:bg-green-50
          md:justify-center
          lg:justify-start
        "
      >
        {/* ICON */}
        <div
          className="
            w-12 h-12 md:w-13 md:h-13 lg:w-14 lg:h-14
            rounded-2xl
            bg-green-100
            flex items-center justify-center
            group-hover:bg-[#006A4E]
            transition
          "
        >
          <div className="text-green-700 group-hover:text-white transition">
            {stat.icon}
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl md:text-lg lg:text-2xl font-bold text-[#064E3B]">
            {stat.count}
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mt-0.5">
            {stat.label}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


    </section>
  );
};

export default Banner;

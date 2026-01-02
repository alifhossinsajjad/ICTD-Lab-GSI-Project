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
      {
        id: 1,
        icon: <HiOutlineOfficeBuilding className="w-8 h-8 text-green-700" />,
        count: "12+",
        label: "বছরের অভিজ্ঞতা",
      },
      {
        id: 2,
        icon: <HiOutlineUsers className="w-8 h-8 text-green-700" />,
        count: "100K+",
        label: "শিক্ষক সহায়তা",
      },
      {
        id: 3,
        icon: <HiOutlineLocationMarker className="w-8 h-8 text-green-700" />,
        count: "All",
        label: "বাংলাদেশ",
      },
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
      {
        id: 1,
        icon: <HiOutlineOfficeBuilding className="w-8 h-8 text-green-700" />,
        count: "9,001",
        label: "ডিজিটাল ল্যাব",
      },
      {
        id: 2,
        icon: <HiOutlineUsers className="w-8 h-8 text-green-700" />,
        count: "36,020+",
        label: "প্রশিক্ষিত শিক্ষক",
      },
      {
        id: 3,
        icon: <HiOutlineLocationMarker className="w-8 h-8 text-green-700" />,
        count: "64",
        label: "জেলা",
      },
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
      {
        id: 1,
        icon: <HiOutlineOfficeBuilding className="w-8 h-8 text-green-700" />,
        count: "6,500+",
        label: "স্কুল কাভারেজ",
      },
      {
        id: 2,
        icon: <HiOutlineUsers className="w-8 h-8 text-green-700" />,
        count: "4M+",
        label: "শিক্ষার্থী",
      },
      {
        id: 3,
        icon: <HiOutlineLocationMarker className="w-8 h-8 text-green-700" />,
        count: "492",
        label: "উপজেলা",
      },
    ],
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-visible  px-6 lg:px-12 h-[90vh] flex items-center ">

      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 -z-10 ">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000
              ${i === current ? "opacity-100 scale-105" : "opacity-0 scale-100"}
            `}
            style={{ backgroundImage: `url(${s.bg})` }}
          />
        ))}
        {/* light overlay so image visible */}
        <div className="absolute inset-0 bg-white/60" />
      </div>

      {/* CONTENT */}
      <div className="container relative z-10  ">
        <div className="max-w-2xl space-y-5">

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-green-700 font-medium text-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              {slide.tag}
            </span>

            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#064E3B] leading-tight">
              {slide.title}
            </h1>

            <p className="mt-3 text-gray-700 text-base md:text-lg">
              {slide.desc}
            </p>

            <div className="mt-6 flex gap-4">
              <button className="bg-[#006A4E] hover:bg-[#00563f] text-white px-7 py-3 rounded-full font-medium flex items-center gap-2 shadow">
                {slide.btn1}
                <FaArrowRight />
              </button>
              <button className="border border-[#006A4E] text-[#006A4E] px-7 py-3 rounded-full font-medium hover:bg-green-50">
                {slide.btn2}
              </button>
            </div>
          </motion.div>

          {/* DOTS */}
          <div className="flex gap-2 pt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all
                  ${i === current ? "w-8 bg-[#006A4E]" : "w-2 bg-gray-300"}
                `}
              />
            ))}
          </div>

        </div>
      </div>

      {/* FLOATING STATS BAR */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl mt-10">
        <div className="bg-white rounded-2xl shadow-lg px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {slide.stats.map((stat) => (
            <div key={stat.id} className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-[#006A4E]">
                  {stat.count}
                </h3>
                <p className="text-gray-600 text-sm">
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
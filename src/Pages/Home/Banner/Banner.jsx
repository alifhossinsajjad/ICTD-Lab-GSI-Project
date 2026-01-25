import React, { useEffect, useRef, useState } from "react";
import {
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import heroBg1 from "../../../assets/banner/heroBg1.jpg";
import heroBg2 from "../../../assets/banner/heroBg2.jpg";
import heroBg3 from "../../../assets/banner/heroBg3.jpg";

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
        icon: <HiOutlineOfficeBuilding className="w-6 h-6" />,
        count: "12+",
        label: "বছরের অভিজ্ঞতা",
      },
      {
        id: 2,
        icon: <HiOutlineUsers className="w-6 h-6" />,
        count: "100K+",
        label: "শিক্ষক সহায়তা",
      },
      {
        id: 3,
        icon: <HiOutlineLocationMarker className="w-6 h-6" />,
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
        icon: <HiOutlineOfficeBuilding className="w-6 h-6" />,
        count: "9,001",
        label: "ডিজিটাল ল্যাব",
      },
      {
        id: 2,
        icon: <HiOutlineUsers className="w-6 h-6" />,
        count: "36,020+",
        label: "প্রশিক্ষিত শিক্ষক",
      },
      {
        id: 3,
        icon: <HiOutlineLocationMarker className="w-6 h-6" />,
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
        icon: <HiOutlineOfficeBuilding className="w-6 h-6" />,
        count: "6,500+",
        label: "স্কুল কাভারেজ",
      },
      {
        id: 2,
        icon: <HiOutlineUsers className="w-6 h-6" />,
        count: "4M+",
        label: "শিক্ষার্থী",
      },
      {
        id: 3,
        icon: <HiOutlineLocationMarker className="w-6 h-6" />,
        count: "492",
        label: "উপজেলা",
      },
    ],
  },
];

const SLIDE_DURATION = 4000;

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const timerRef = useRef(null);


  const resetAuto = () => {
    clearTimeout(timerRef.current);
    setPaused(false);
  };

  const nextSlide = () => {
    resetAuto();
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    resetAuto();
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ✅ Auto swipe
  useEffect(() => {
    if (paused) return;

    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(timerRef.current);
  }, [current, paused]);



  return (
    <section
      className="relative h-[calc(100vh-4rem)] overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ✅ SLIDE TRACK */}
      <div className="absolute inset-0">
        <motion.div
          className="flex h-full w-full"
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          drag="x"
          dragMomentum={false}
          onDragStart={() => setPaused(true)}
          onDragEnd={(e, info) => {
            setPaused(false);
            if (info.offset.x < -80) nextSlide();
            else if (info.offset.x > 80) prevSlide();
          }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${s.bg})` }}
            >
              {/* ✅ Only readability shadow */}
              <div className="absolute inset-0 bg-black/35" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ✅ CONTENT */}
      <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto z-10">
          <div className="max-w-xl sm:max-w-2xl text-center sm:text-left space-y-5">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center justify-center sm:justify-start gap-2 text-white text-sm font-medium">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                {slides[current].tag}
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {slides[current].title}
              </h1>

              <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90">
                {slides[current].desc}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors">
                  {slides[current].btn1}
                  <FaArrowRight />
                </button>

                <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 shadow-sm transition-colors">
                  {slides[current].btn2}
                </button>
              </div>
            </motion.div>

            {/* ✅ DOTS */}
            <div className="flex gap-2 pt-6 justify-center sm:justify-start">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-2 bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ✅ NEXT / PREV (fixed: no text hide on mobile) */}
        {/* ✅ NEXT / PREV (no bg) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 sm:left-4 sm:right-4 flex justify-between z-30 pointer-events-none">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="pointer-events-auto flex items-center justify-center text-white opacity-80 hover:opacity-100 transition"
          >
            <FiChevronLeft size={28} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="pointer-events-auto flex items-center justify-center text-white opacity-80 hover:opacity-100 transition"
          >
            <FiChevronRight size={28} />
          </button>
        </div>


        {/* ✅ STATS (Light Glass BG) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl">
          <div
            className="
      bg-white/90
      hidden md:block
      backdrop-blur-xl
      border border-emerald-100
      rounded-3xl
      shadow-[0_12px_45px_rgba(0,0,0,0.10)]
      px-4 sm:px-7 py-5
    "
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {slides[current].stats.map((stat) => (
                <div
                  key={stat.id}
                  className="
            flex items-center gap-4
            px-4 py-3
            rounded-2xl
            hover:bg-emerald-50
            transition-all duration-300
            md:justify-center
          "
                >
                  {/* ICON */}
                  <div
                    className="
              w-12 h-12 rounded-2xl
              bg-emerald-100
              flex items-center justify-center
              border border-emerald-200
            "
                  >
                    <div className="text-emerald-600">{stat.icon}</div>
                  </div>

                  {/* TEXT */}
                  <div className="leading-tight">
                    <h3 className="text-2xl font-extrabold text-emerald-900">
                      {stat.count}
                    </h3>
                    <p className="text-sm text-emerald-700">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;

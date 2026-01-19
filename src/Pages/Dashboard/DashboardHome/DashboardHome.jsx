import React from "react";
import { motion } from "framer-motion";
import SRDRechart from "../SRDRechart/SRDRechart";

const DashboardHome = () => {
  const labSetup = [
    {
      id: 1,
      description:
        "সরকারের অনুমোদন প্রাপ্ত মাধ্যমিক, উচ্চ মাধ্যমিক বা সমপর্যায়ের  শিক্ষাপ্রতিষ্ঠান অথবা শিক্ষা সংশ্লিষ্ট অন্যান্য প্রতিষ্ঠানে ল্যাব প্রদান করা যাবে । শিক্ষা প্রতিষ্ঠানের ক্ষেত্রে এমপি ভুক্ত প্রতিষ্ঠানকে অগ্রাধিকার প্রধান করতে হবে",
    },
    {
      id: 2,
      description:
        "ল্যাবেস্থাপনের জন্য নির্বাচিত স্কুল/কলেজ/মাদ্রাসা অন্যান্য প্রতিষ্ঠানে আবশ্যিকভাবে ল্যাবেস্থাপনের জন্য উপযুক্ত অবকাঠামো এবং আইটি শিক্ষার সুযোগ-সুবিধা থাকতে হবে",
    },
    {
      id: 3,
      description:
        "সংশ্লিষ্ট এলাকার জনসংখ্যা মোট শিক্ষা প্রতিষ্ঠানের সংখ্যা ল্যাব প্রাপ্ত শিক্ষাপ্রতিষ্ঠানের সংখ্যা ভিত্তিতে ল্যাবের প্রাপ্ত মোতাবেক ল্যাব প্রধানের জন্য উপযুক্ত প্রতিষ্ঠান নির্বাচন করা হবে",
    },
    { id: 4, description: "প্রতিষ্ঠানে নিরবিচ্ছিন্ন বিদ্যুৎ সরবরাহ থাকতে হবে" },
    {
      id: 5,
      description:
        " যে সকল প্রতিষ্ঠানে ব্রডব্যান্ড ইন্টারনেট কানেক্টিভিটি আছে সে সকল প্রতিষ্ঠান সম্পর্কে অগ্রাধিকার দিতে হবে",
    },
    {
      id: 6,
      description:
        "ভালো ফলাফল ধারি বিশেষ করে ইংরেজি গণিত এবং বিজ্ঞান বিষয়ক প্রতিষ্ঠানকে অগ্রাধিকার প্রদান করতে হবে ল্যাবের জন্য নির্বাচিত কক্ষটিতে অন্তত ১৭ টি টেবিল ও 32 জন ছাত্রের স্বাচ্ছন্দে বসার মত সুপরিসর কক্ষ থাকতে হবে",
    },
    {
      id: 7,
      description:
        "আইসিটি শিক্ষাদানের সক্ষমতা সম্পন্ন উপযুক্ত শিক্ষক প্রতিষ্ঠানকে অগ্রাধিকার প্রদান করতে হবে",
    },
    {
      id: 8,
      description:
        " ল্যাবে সরবরাহকৃত আইটি এবং অন্যান্য সরঞ্জামের রক্ষণাবেক্ষণ নিরাপত্তা বিধানের উপযুক্ত পরিবেশ এবং ল্যাব পরিচালনা ও সংরক্ষণ প্রতিশ্রুতি সম্পন্ন শিক্ষা প্রতিষ্ঠান হতে হবে",
    },
    {
      id: 9,
      description:
        "দ্বৈততা পরিহারের লক্ষ্যে যে সকল প্রতিষ্ঠানে ইতিমধ্যে কম্পিউটার ল্যাব বিদ্যমান যে সকল প্রতিষ্ঠান এই প্রকল্পের আওতায় ল্যাব প্রদানের জন্য বিবেচিত হবে না",
    },
    {
      id: 10,
      description:
        "ল্যাবের জন্য নির্বাচিত কক্ষটিতে যন্ত্রপাতি এবং আসবাবপত্র সর্ব রাহের পূর্বে প্রতিটি ল্যাবের জন্য কক্ষের সুরক্ষা ও নিরাপত্তা বৃদ্ধির জন্য সমূহ গঠিত থাকতে হবে",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6 bg-emerald-950 min-h-screen">
      {/* Header Section */}
      <SRDRechart></SRDRechart>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 mb-12"
      >
        <h1 className="text-4xl font-bold text-white">
          ল্যাবের জন্য উপযুক্ত <span className="text-emerald-400">শিক্ষা প্রতিষ্ঠানের মানদণ্ড</span>
        </h1>

        <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-500 mx-auto rounded-full mt-4"></div>
      </motion.div>

      {/* Enhanced Vertical Timeline/Stepper Diagram */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical connecting line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-800 via-emerald-700 to-blue-900 hidden md:block"></div>

        <div className="space-y-6">
          {labSetup.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Timeline Badge */}
              <div className="absolute left-0 md:left-8 transform md:-translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center shadow-lg border-4 border-emerald-950">
                  <span className="text-white font-bold text-xl">{item.id}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className="ml-24 md:ml-32 group">
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-emerald-900/40 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 p-6 border border-emerald-500/20 border-l-4 border-l-emerald-500 relative overflow-hidden"
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Step number indicator */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-emerald-800/20 group-hover:text-emerald-700/30 transition-colors">
                    {String(item.id).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      {/* Icon/Badge for mobile */}
                      <div className="md:hidden w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center shadow-md flex-shrink-0">
                        <span className="text-white font-bold">{item.id}</span>
                      </div>

                      {/* Description */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                          <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                            মানদণ্ড {item.id}
                          </span>
                        </div>

                        <p className="text-emerald-100 leading-relaxed text-lg text-justify pr-16">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Completion Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: labSetup.length * 0.1 + 0.3 }}
          className="relative mt-8"
        >
          <div className="absolute left-0 md:left-8 transform md:-translate-x-1/2 z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center shadow-lg border-4 border-emerald-950">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div className="ml-24 md:ml-32">
            <div className="bg-gradient-to-r from-emerald-900/80 to-blue-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 text-white text-center border border-emerald-500/30">
              <h3 className="text-2xl font-bold mb-2">সকল মানদণ্ড পূরণ করুন</h3>
              <p className="text-emerald-200/80">উপরের সকল শর্ত পূরণ করলে আপনার প্রতিষ্ঠান ল্যাব স্থাপনের জন্য উপযুক্ত বিবেচিত হবে</p>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default DashboardHome;

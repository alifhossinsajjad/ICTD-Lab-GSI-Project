import React from "react";
import { motion } from "framer-motion";

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
    <div className="max-w-7xl mx-auto space-y-8 p-6 bg-emerald-50">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">
          ল্যাবের জন্য উপযুক্ত শিক্ষা প্রতিষ্ঠানের মানদণ্ড
        </h1>
        <p className="text-gray-500 text-lg">
          এই মানদণ্ডগুলি শিক্ষা প্রতিষ্ঠানের ল্যাবগুলির জন্য উপযুক্ততা নির্ধারণে
          সহায়ক।
        </p>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-500 mx-auto rounded-full mt-2"></div>
      </motion.div>

      {/* Enhanced Table Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl  border-gray-200 bg-white shadow-xl overflow-hidden "
      >
        <div className="overflow-x-auto  ">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-900 text-white">
                <th className="py-4 px-6 text-xl font-bold border-b border-emerald-700 w-32 text-center">
                  ক্রমিক নং
                </th>
                <th className="py-4 px-6 text-xl font-bold border-b border-emerald-700 text-center">
                  বিবরণ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {labSetup.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-emerald-100 transition-colors duration-200 even:bg-gray-50/50"
                >
                  <td className="py-5 px-6 font-bold text-gray-600 text-center border-r border-gray-100/50">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-emerald-100 flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                      {item.id}
                    </div>
                  </td>
                  <td className="py-5 px-6 text-justify text-gray-700 leading-relaxed text-lg">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;

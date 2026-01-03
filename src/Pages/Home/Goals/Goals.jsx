// import React from "react";
// import { FaUserTie } from "react-icons/fa";
// import { HiUserGroup } from "react-icons/hi";
// import { IoLanguageSharp, IoSchool, IoTimerOutline } from "react-icons/io5";
// import { LuFileBadge } from "react-icons/lu";
// import { MdCastForEducation } from "react-icons/md";
// import { SiCyberdefenders } from "react-icons/si";
// import { useTranslation } from "react-i18next";

// const Goals = () => {
//   const { t } = useTranslation();
//   const goalsData = [
//     { icon: MdCastForEducation, title: t("goal_1_title"), description: t("goal_1_desc") },
//     { icon: FaUserTie, title: t("goal_2_title"), description: t("goal_2_desc") },
//     { icon: IoTimerOutline, title: t("goal_3_title"), description: t("goal_3_desc") },
//     { icon: IoSchool, title: t("goal_4_title"), description: t("goal_4_desc") },
//     { icon: HiUserGroup, title: t("goal_5_title"), description: t("goal_5_desc") },
//     { icon: SiCyberdefenders, title: t("goal_6_title"), description: t("goal_6_desc") },
//     { icon: IoLanguageSharp, title: t("goal_7_title"), description: t("goal_7_desc") },
//     { icon: LuFileBadge, title: t("goal_8_title"), description: t("goal_8_desc") },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

//       {/* Section Header */}
//       <div className="text-center mb-16">
//         <div className="inline-block mb-4">
//           <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto mb-4"></div>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//             {t("goals_title")}
//           </h1>
//           <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
//         </div>
//         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//           {t("goals_subtitle")}
//         </p>
//       </div>

//       {/* Goals Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//         {goalsData.map((goal, index) => (
//           <div
//             key={index}
//             className="group relative bg-white-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
//           >

//             {/* Hover gradient background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-red-700  group-hover:opacity-25 transition-opacity "></div>

//             <div className="relative p-6 md:p-8 space-y-6 z-10">

//               {/* Icon with hover grow */}
//               <div className="flex justify-center mb-4">
//                 <goal.icon
//                   size={36}
//                   className=" text-white group-hover:text-gray-700 transition-all duration-500 transform group-hover:scale-110"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-xl md:text-2xl font-bold text-white  group-hover:text-gray-800  text-center transition-colors duration-500">
//                 {goal.title}
//               </h3>

//               {/* Description */}
//               <p className="text-white group-hover:text-gray/90 text-center leading-relaxed transition-colors duration-500">
//                 {goal.description}
//               </p>

//             </div>

//             {/* Hover bottom line */}
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-red-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
//           </div>
//         ))}
//       </div>

//       {/* Footer Note */}
//       <div className="mt-16 text-center">
//         <div className="inline-flex items-center justify-center gap-4 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full">
//           <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
//           <p className="text-gray-700 font-medium">{t("goals_footer")}</p>
//           <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse delay-300"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Goals;

import React from "react";
import { FaUserTie } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoLanguageSharp, IoSchool, IoTimerOutline } from "react-icons/io5";
import { LuFileBadge } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { SiCyberdefenders } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Goals = () => {
  const { t } = useTranslation();
  const goalsData = [
    {
      icon: MdCastForEducation,
      title: t("goal_1_title"),
      description: t("goal_1_desc"),
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: FaUserTie,
      title: t("goal_2_title"),
      description: t("goal_2_desc"),
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: IoTimerOutline,
      title: t("goal_3_title"),
      description: t("goal_3_desc"),
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: IoSchool,
      title: t("goal_4_title"),
      description: t("goal_4_desc"),
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: HiUserGroup,
      title: t("goal_5_title"),
      description: t("goal_5_desc"),
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: SiCyberdefenders,
      title: t("goal_6_title"),
      description: t("goal_6_desc"),
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: IoLanguageSharp,
      title: t("goal_7_title"),
      description: t("goal_7_desc"),
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: LuFileBadge,
      title: t("goal_8_title"),
      description: t("goal_8_desc"),
      color: "from-emerald-600 to-green-400"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 ">

      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto mb-4"></div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {t("goals_title")}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
        </div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {t("goals_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {goalsData.map((goal, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          >

            <div
  className={`
    absolute inset-0
    bg-gradient-to-br ${goal.color}
    transform scale-0
    origin-top-left
   transition-transform duration-2000 ease-out
    group-hover:scale-100
  `}
></div>



            <div className="relative p-6 md:p-8 space-y-6 z-10">

              <div className="relative flex justify-center">
                <div className="absolute -inset-4  rounded-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white group-hover:bg-white/90 shadow-md group-hover:shadow-lg transition-all duration-500">
                  <goal.icon
                    size={36}
                    className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500"
                  />
                </div>


              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-500">
                {goal.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                {goal.description}
              </p>


            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </div>
        ))}
      </div>


      <div className="mt-16 text-center">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full">
          <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></div>
          <p className="text-gray-700 font-medium">
            {t("goals_footer")}
          </p>
          <div className="w-3 h-3 rounded-full bg-emerald-700 animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
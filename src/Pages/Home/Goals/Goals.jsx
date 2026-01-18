
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">

      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {t("goals_title")}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
        </div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {t("goals_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:lg:grid-cols-4 gap-6 lg:gap-8">
        {goalsData.map((goal, index) => (
          <div
            key={index}
            className="
    group relative
    rounded-[28px]
    p-[1px]
    bg-gradient-to-br from-emerald-400 via-green-400 to-emerald-600
    transition-all duration-500
    hover:scale-[1.02]
  "
          >
            {/* Inner card */}
            <div
              className="
      relative h-full
      rounded-[27px]
      bg-white
      p-8
      transition-all duration-500
      group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-green-600
    "
            >
              {/* Floating icon */}
              <div
                className="
        mb-6 inline-flex
        w-16 h-16
        items-center justify-center
        rounded-2xl
        bg-gradient-to-br from-emerald-500 to-green-500
        text-white
        shadow-lg
        transition-transform duration-500
        group-hover:-translate-y-1 group-hover:scale-110
      "
              >
                <goal.icon size={30} />
              </div>

              {/* Title */}
              <h3
                className="
        text-xl font-bold
        text-gray-900
        mb-3
        transition-colors duration-500
        group-hover:text-white
      "
              >
                {goal.title}
              </h3>

              {/* Description */}
              <p
                className="
        text-gray-600
        leading-relaxed
        transition-colors duration-500
        group-hover:text-white/90
      "
              >
                {goal.description}
              </p>

              {/* Soft glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[27px] opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 rounded-[27px] ring-1 ring-white/30" />
              </div>
            </div>
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

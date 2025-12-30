import React from "react";
import { FaUserTie } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoLanguageSharp, IoSchool, IoTimerOutline } from "react-icons/io5";
import { LuFileBadge } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { SiCyberdefenders } from "react-icons/si";

const Goals = () => {
  const goalsData = [
    {
      icon: MdCastForEducation,
      title: "Promotion of quality education",
      description: "Improving the quality of education and developing skilled human resources",
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: FaUserTie,
      title: "Capacity building and self reliance",
      description: "Creating opportunities for students to become proficient in ICT and to become self-reliant",
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: IoTimerOutline,
      title: "Increasing efficiency in ICT",
      description: "Increase efficiency of students and teachers in the field of ICT",
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: IoSchool,
      title: "School of Future (SOF)",
      description: "Developing ICTD School of Future & Preparing Digital Content",
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: HiUserGroup,
      title: "Seminar",
      description: "Organizing seminars to create awareness and interest in ICT through publicity and exchange of experiences",
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: SiCyberdefenders,
      title: "Netiquette & Cyber Security",
      description: "Creating good ambience for Netiquette and Cyber Security",
     color: "from-emerald-600 to-green-400"
    },
    {
      icon: IoLanguageSharp,
      title: "Vasha Guru APP",
      description: "Increase the efficiency of foreign language learning software",
      color: "from-emerald-600 to-green-400"
    },
    {
      icon: LuFileBadge,
      title: "Sustainability",
      description: "Future plans for sustainable project outcomes through supervision, monitoring, evaluation and research",
      color: "from-emerald-600 to-green-400"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto mb-4"></div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            GOALS AND OBJECTIVES
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
        </div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Strategic Goals and Objectives of ICTD Digital Lab Project
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {goalsData.map((goal, index) => (
          <div 
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          >
      
            <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
    
            <div className="relative p-6 md:p-8 space-y-6 z-10">
  
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
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
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <p className="text-gray-700 font-medium">
            All objectives contribute to the <span className="text-green-600 font-semibold">Digital Bangladesh Vision 2041</span>
          </p>
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
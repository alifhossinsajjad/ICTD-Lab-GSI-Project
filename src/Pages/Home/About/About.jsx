import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
    return (
        <section className="py-20 bg-emerald-50 font-sans overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16">
                     <div className="inline-block mb-4 ">
             <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
             <h1 className="text-3xl md:text-4xl p-2 lg:text-5xl font-bold text-gray-800 mb-4">
            About Us
            </h1>
             <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
           </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 text-gray-600 leading-relaxed text-justify">

                    {/* Left Column */}
                    <div className="space-y-6">
                        <p>
                            The Department of Information and Communication Technology has devoted special attention to the Information Technology sector in extending ICT education across the country. To ensure the use and application of ICT and to develop skilled manpower, ICTD Digital Labs are being established in various educational institutions under the direction of the Honourable Prime Minister on the initiative of the Information and Communication Technology Division and under the supervision of the Department of Information and Communication Technology (DoICT).
                        </p>
                        <p>
                            The goals of establishing those labs are generating a conducive environment of ICT education for primary, secondary, and higher secondary students and providing informational IT training to interested youth with the prospects to acquire profitable employment opportunities at home and abroad.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <p>
                            The establishment of ICTD Digital Lab (SRDL) is being constructed under the leadership of the honourable State Minister of ICT Division, Mr. Junaid Ahmed Palak MP, and with the support of the honourable Adviser, Mr. Sajib Wazed. ICTD Digital Lab has been set up in 9001 educational institutions across the country under the overall management of the Senior Secretary of the ICT Department in collaboration with the Director-General and Project Director of the ICT Department, all Deputy Commissioners and Upazila Nirbahi Officers, District Education Officers, District- Upazila ICT Officers, Upazila Secondary Education Officers and all concerned personnel.
                        </p>

                        <button className="bg-[#006A4E] hover:bg-[#00563f] text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-green-900/20">
                            Learn More
                            <FaArrowRight className="text-sm" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

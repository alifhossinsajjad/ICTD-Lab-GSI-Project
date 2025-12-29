// import { FaUniversity, FaLaptopCode, FaUsers, FaMapMarkedAlt } from "react-icons/fa";

// const About = () => {
//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             About Us
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
//             Building a skilled digital generation through ICT education
//           </p>
//         </div>

//         {/* Content */}
//         <div className="bg-white rounded-xl shadow p-6 md:p-10 space-y-6">
//           <p className="text-gray-700 leading-relaxed">
//             The Department of Information and Communication Technology (DoICT)
//             has devoted special attention to the Information Technology sector
//             to extend ICT education across the country. To ensure the proper use
//             and application of ICT and to develop skilled manpower, ICTD Digital
//             Labs are being established in educational institutions under the
//             initiative of the Information and Communication Technology Division
//             and under the supervision of DoICT.
//           </p>

//           <p className="text-gray-700 leading-relaxed">
//             The objective of these labs is to create a supportive environment
//             for ICT education for primary, secondary, and higher secondary
//             students, while also providing IT training to interested youth to
//             help them gain employment opportunities at home and abroad.
//           </p>

//           <p className="text-gray-700 leading-relaxed">
//             ICTD Digital Lab (SRDL) is being implemented under the leadership of
//             the Honourable State Minister of ICT Division, <span className="font-semibold">
//             Mr. Junaid Ahmed Palak, MP</span>, with the support of the Honourable
//             Adviser <span className="font-semibold">Mr. Sajib Wazed</span>, and
//             coordinated by the Department of ICT in collaboration with district
//             and upazila administrations nationwide.
//           </p>
//         </div>

//         {/* Info Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
//           <div className="bg-white shadow rounded-lg p-6 text-center">
//             <FaUniversity className="text-4xl mx-auto text-primary mb-3" />
//             <h3 className="text-xl font-bold">9,001 Labs</h3>
//             <p className="text-gray-600 text-sm mt-1">
//               Established (2015–2023)
//             </p>
//           </div>

//           <div className="bg-white shadow rounded-lg p-6 text-center">
//             <FaLaptopCode className="text-4xl mx-auto text-primary mb-3" />
//             <h3 className="text-xl font-bold">ICT Education</h3>
//             <p className="text-gray-600 text-sm mt-1">
//               Modern digital learning
//             </p>
//           </div>

//           <div className="bg-white shadow rounded-lg p-6 text-center">
//             <FaUsers className="text-4xl mx-auto text-primary mb-3" />
//             <h3 className="text-xl font-bold">Youth Training</h3>
//             <p className="text-gray-600 text-sm mt-1">
//               Skill development & jobs
//             </p>
//           </div>

//           <div className="bg-white shadow rounded-lg p-6 text-center">
//             <FaMapMarkedAlt className="text-4xl mx-auto text-primary mb-3" />
//             <h3 className="text-xl font-bold">All Divisions</h3>
//             <p className="text-gray-600 text-sm mt-1">
//               Nationwide coverage
//             </p>
//           </div>
//         </div>

//         {/* Learn More */}
//         <div className="text-center mt-12">
//           {/* <button className="px-6 py-3
//            bg-primary text-white rounded-md hover:bg-green transition">
//             Learn More
//           </button> */}
//      <button
//   className="
//     inline-flex items-center gap-2
//     bg-green-600 hover:bg-green-700
//     text-white font-medium
//     px-8 py-3
//     rounded-lg
//     shadow-sm hover:shadow-md
//     transition-all duration-200
//     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
//   "
// >
//   Learn More
// </button>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;



const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Us
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Building a skilled digital generation through ICT education
          </p>
        </div>

        {/* Text Content */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 space-y-6 mb-14">
          <p className="text-gray-700 leading-relaxed">
            The Department of Information and Communication Technology (DoICT)
            has devoted special attention to the Information Technology sector
            to extend ICT education across the country. To ensure the proper use
            and application of ICT and to develop skilled manpower, ICTD Digital
            Labs are being established in educational institutions under the
            initiative of the Information and Communication Technology Division
            and under the supervision of DoICT.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The objective of these labs is to create a supportive environment
            for ICT education for primary, secondary, and higher secondary
            students, while also providing IT training to interested youth to
            help them gain employment opportunities at home and abroad.
          </p>

          <p className="text-gray-700 leading-relaxed">
            ICTD Digital Lab (SRDL) is being implemented under the leadership of
            the Honourable State Minister of ICT Division
            <span className="font-semibold"> Mr. Junaid Ahmed Palak, MP</span>,
            with the support of the Honourable Adviser
            <span className="font-semibold"> Mr. Sajib Wazed</span>, and
            coordinated nationwide by the Department of ICT.
          </p>
        </div>

        {/* Image Section (Exactly like screenshot) */}
        <h2 className="text-bould ">9,001 ICTD Digital Lab (2015-2023)</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: Map Image */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <img
              src="/map.png"
              alt="Bangladesh ICTD Digital Lab Map"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right: Chart Image */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <img
              src="/lab-chart.png"
              alt="ICTD Digital Lab Statistics Chart"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <button
            className="
              inline-flex items-center gap-2
              bg-green-600 hover:bg-green-700
              text-white font-medium
              px-8 py-3
              rounded-lg
              shadow-sm hover:shadow-md
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
            "
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;


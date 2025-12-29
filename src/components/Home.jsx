import React from 'react'
import NoticeSection from './sections/NoticeSection'

const Home = ({ setActiveView }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">ICTD Lab GIS Platform</h1>
          <p className="text-xl opacity-90">Advanced Geographic Information System for Bangladesh</p>
        </div>
      </div>

      {/* Notice Section */}
      <NoticeSection setActiveView={setActiveView} />

      {/* About Section */}
      <div className="bg-white py-16" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Platform</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The ICTD Lab GIS Platform is a comprehensive digital solution designed to manage and analyze geographic information across Bangladesh. Our platform combines advanced GIS technology with user-friendly interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="bg-gray-50 py-16" id="goals">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Goals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to transforming Bangladesh's geographic information management through innovative technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Digital Innovation", desc: "Leverage GIS technology for enhanced data management" },
              { title: "Community Development", desc: "Support local communities through better planning" },
              { title: "Quality Service", desc: "Provide exceptional GIS services with world-class standards" },
              { title: "Data Accuracy", desc: "Ensure precise and reliable geographic information" }
            ].map((goal, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-3">{goal.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white py-16" id="gallery">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Gallery</h2>
            <p className="text-lg text-gray-600">Explore our GIS mapping projects across Bangladesh</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <span className="text-gray-500">GIS Project {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16" id="team">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">Meet the professionals behind our platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Rahman Ahmed", position: "Project Director" },
              { name: "Fatima Khan", position: "GIS Specialist" },
              { name: "Mohammad Ali", position: "Data Analyst" },
              { name: "Rashida Begum", position: "System Administrator" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-gray-300 w-20 h-20 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
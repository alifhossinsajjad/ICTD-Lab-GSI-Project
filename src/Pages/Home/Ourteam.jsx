import { ChevronRight, Briefcase } from 'lucide-react'
import { useLanguage } from '../../components/sheard/contexts/LanguageContext'

const OurTeam = () => {
  const { t } = useLanguage()

  // Employee data
  const employees = [
    {
      id: 1,
      name: "Dr. Rahman Ahmed",
      position: t('projectDirector'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: `15+ ${t('experience')}`,
      email: "rahman.ahmed@ictdlab.gov.bd",
      phone: "+880-2-9898989"
    },
    {
      id: 2,
      name: "Fatima Khan",
      position: t('gisSpecialist'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      experience: `8+ ${t('experience')}`,
      email: "fatima.khan@ictdlab.gov.bd",
      phone: "+880-2-9898990"
    },
    {
      id: 3,
      name: "Mohammad Ali",
      position: t('tourismCoordinator'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: `10+ ${t('experience')}`,
      email: "mohammad.ali@ictdlab.gov.bd",
      phone: "+880-2-9898991"
    },
    {
      id: 4,
      name: "Rashida Begum",
      position: t('dataAnalyst'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      experience: `6+ ${t('experience')}`,
      email: "rashida.begum@ictdlab.gov.bd",
      phone: "+880-2-9898992"
    }
  ]

  // Vendor data
  const vendors = [
    { 
      id: 1, 
      name: "Heritage Tours Ltd", 
      category: t('tourOperator'), 
      rating: 4.8,
      established: "2015",
      services: "Cultural Heritage Tours, Historical Site Visits"
    },
    { 
      id: 2, 
      name: "Coastal Adventures", 
      category: t('beachTours'), 
      rating: 4.6,
      established: "2018",
      services: "Beach Tours, Water Sports, Coastal Exploration"
    },
    { 
      id: 3, 
      name: "Green Valley Eco Tours", 
      category: t('ecoTourism'), 
      rating: 4.9,
      established: "2016",
      services: "Eco-friendly Tours, Nature Conservation"
    },
    { 
      id: 4, 
      name: "Cultural Experience Co", 
      category: t('culturalTours'), 
      rating: 4.7,
      established: "2017",
      services: "Cultural Immersion, Traditional Experiences"
    },
    { 
      id: 5, 
      name: "Adventure Seekers", 
      category: t('adventureTours'), 
      rating: 4.5,
      established: "2019",
      services: "Adventure Sports, Trekking, Mountain Tours"
    },
    { 
      id: 6, 
      name: "Bangladesh River Cruises", 
      category: "River Tours", 
      rating: 4.8,
      established: "2014",
      services: "River Cruises, Boat Tours, Waterway Exploration"
    }
  ]

  return (
    <div className="bg-white">
      {/* Project Employee Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">{t('ourTeam')}</h2>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">{t('teamDescription')}</p>
            </div>
            <button className="flex items-center space-x-3 text-green-700 hover:text-green-800 font-semibold bg-green-50 hover:bg-green-100 px-6 py-3 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="tracking-wide">{t('viewAllTeam')}</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {employees.map((employee) => (
              <div key={employee.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    {employee.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-2 text-sm tracking-wide">
                    {employee.position}
                  </p>
                  <p className="text-gray-500 text-sm mb-4 font-medium">
                    {employee.experience}
                  </p>
                  
                  <div className="space-y-2 text-xs text-gray-600">
                    <p className="truncate">{employee.email}</p>
                    <p>{employee.phone}</p>
                  </div>
                  
                  <button className="mt-4 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2.5 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vendor List Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl shadow-lg">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-5xl font-bold text-gray-900 tracking-tight">{t('trustedPartners')}</h2>
                <p className="text-xl text-gray-600 mt-2 leading-relaxed">{t('partnersDescription')}</p>
              </div>
            </div>
            <button className="flex items-center space-x-3 text-blue-700 hover:text-blue-800 font-semibold bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="tracking-wide">{t('viewAllPartners')}</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="text-lg font-bold text-gray-800">{vendor.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {vendor.name}
                </h3>
                
                <p className="text-blue-600 text-sm font-semibold mb-4 tracking-wide">
                  {vendor.category}
                </p>
                
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <p><span className="font-medium">Established:</span> {vendor.established}</p>
                  <p><span className="font-medium">Services:</span> {vendor.services}</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                  {t('viewDetails')}
                </button>
              </div>
            ))}
          </div>
          
          {/* Professional Partnership Stats */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Partnership Statistics</h3>
              <p className="text-gray-600">Our network of verified tourism partners</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{vendors.length}+</div>
                <p className="text-gray-600 font-medium">Verified Partners</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">4.7</div>
                <p className="text-gray-600 font-medium">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
                <p className="text-gray-600 font-medium">Tourists Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">8+</div>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
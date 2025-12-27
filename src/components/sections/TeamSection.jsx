import { ChevronRight, Users } from 'lucide-react'
import { useLanguage } from '../sheard/contexts/LanguageContext'

const TeamSection = () => {
  const { t, currentLanguage } = useLanguage()

  // Employee data - 4 employees
  const employees = [
    {
      id: 1,
      name: currentLanguage === 'bn' ? "ড. রহমান আহমেদ" : "Dr. Rahman Ahmed",
      position: t('projectDirector'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: `15+ ${t('experience')}`,
      email: "rahman.ahmed@ictdlab.gov.bd",
      phone: "+880-2-9898989"
    },
    {
      id: 2,
      name: currentLanguage === 'bn' ? "ফাতিমা খান" : "Fatima Khan",
      position: t('gisSpecialist'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      experience: `8+ ${t('experience')}`,
      email: "fatima.khan@ictdlab.gov.bd",
      phone: "+880-2-9898990"
    },
    {
      id: 3,
      name: currentLanguage === 'bn' ? "মোহাম্মদ আলী" : "Mohammad Ali",
      position: t('tourismCoordinator'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: `10+ ${t('experience')}`,
      email: "mohammad.ali@ictdlab.gov.bd",
      phone: "+880-2-9898991"
    },
    {
      id: 4,
      name: currentLanguage === 'bn' ? "রাশিদা বেগম" : "Rashida Begum",
      position: t('dataAnalyst'),
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      experience: `6+ ${t('experience')}`,
      email: "rashida.begum@ictdlab.gov.bd",
      phone: "+880-2-9898992"
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50" id="team">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 mb-6 border border-green-200 shadow-sm">
              <Users className="h-6 w-6 text-green-700" />
              <span className="text-green-800 font-semibold text-base tracking-wide">
                {t('team')}
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">{t('ourTeam')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-light">{t('teamDescription')}</p>
          </div>
          <button className="flex items-center space-x-3 text-green-700 hover:text-green-800 font-semibold bg-green-50 hover:bg-green-100 px-6 py-3 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md">
            <span className="tracking-wide">{t('viewAllTeam')}</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {employees.map((employee) => (
            <div key={employee.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Professional overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-xs text-gray-600 font-medium">{employee.experience}</p>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {employee.name}
                </h3>
                <p className="text-green-600 font-semibold mb-4 text-sm tracking-wide">
                  {employee.position}
                </p>
                
                <div className="space-y-2 text-xs text-gray-600 mb-4">
                  <p className="truncate">{employee.email}</p>
                  <p>{employee.phone}</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105">
                  {currentLanguage === 'bn' ? 'প্রোফাইল দেখুন' : 'View Profile'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection
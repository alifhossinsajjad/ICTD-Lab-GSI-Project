import { Globe, Users, Award, Target } from 'lucide-react'
import { useLanguage } from '../sheard/contexts/LanguageContext'

const GoalsSection = () => {
  const { t } = useLanguage()

  // Goals data
  const goals = [
    {
      icon: Globe,
      title: t('promoteTourism'),
      description: t('promoteTourismDesc'),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:text-blue-600'
    },
    {
      icon: Users,
      title: t('communityDevelopment'),
      description: t('communityDevelopmentDesc'),
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
      hoverColor: 'hover:text-green-600'
    },
    {
      icon: Award,
      title: t('qualityService'),
      description: t('qualityServiceDesc'),
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:text-purple-600'
    },
    {
      icon: Target,
      title: t('digitalInnovation'),
      description: t('digitalInnovationDesc'),
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      hoverColor: 'hover:text-orange-600'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 to-slate-50 py-20" id="goals">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 mb-6 border border-green-200 shadow-sm">
            <Target className="h-6 w-6 text-green-700" />
            <span className="text-green-800 font-semibold text-base tracking-wide">
              {t('goals')}
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">{t('goalsTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {t('goalsDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => {
            const IconComponent = goal.icon
            return (
              <div key={index} className={`bg-gradient-to-br ${goal.bgColor} rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border ${goal.borderColor} group transform hover:-translate-y-2`}>
                <div className={`bg-gradient-to-br ${goal.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h3 className={`font-bold text-xl text-gray-800 mb-4 ${goal.hoverColor} transition-colors`}>{goal.title}</h3>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                
                {/* Service box style indicator */}
                <div className="mt-6 flex justify-center">
                  <div className={`w-12 h-1 bg-gradient-to-r ${goal.color} rounded-full`}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GoalsSection
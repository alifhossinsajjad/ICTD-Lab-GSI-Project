import { MapPin, Building, Users } from 'lucide-react'
import { useLanguage } from '../sheard/contexts/LanguageContext'

const AboutSection = () => {
  const { t } = useLanguage()

  return (
    <div className="bg-white py-20" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 mb-6 border border-green-200 shadow-sm">
              <Building className="h-6 w-6 text-green-700" />
              <span className="text-green-800 font-semibold text-base tracking-wide">
                {t('aboutUs')}
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">{t('aboutTitle')}</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              {t('aboutDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{t('interactiveMaps')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('interactiveMapsDesc')}</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-green-600 transition-colors">{t('heritageSites')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('heritageSitesDesc')}</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200 group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">{t('communityDriven')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('communityDrivenDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
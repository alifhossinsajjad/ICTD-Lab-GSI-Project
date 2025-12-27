import { MapPin, Globe, Target, Users } from 'lucide-react'
import { useLanguage } from '../sheard/contexts/LanguageContext'

const GISSection = () => {
  const { t } = useLanguage()

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 mb-8 border border-green-200 shadow-sm">
            <MapPin className="h-6 w-6 text-green-700" />
            <span className="text-green-800 font-semibold text-base tracking-wide">{t('gisSubtitle')}</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent">
              {t('gisTitle')}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            {t('gisDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 mb-20">
          {['Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur', 'Mymensingh'].map((division, index) => (
            <div
              key={division}
              className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-center hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 hover:border-green-300 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-3 shadow-lg hover:shadow-2xl"
              onMouseEnter={() => console.log(`Hovering over ${division} division`)}
            >
              <div className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-green-400">
                <MapPin className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="font-bold text-base md:text-lg text-gray-800 mb-2 group-hover:text-green-700 transition-colors tracking-wide">
                {division}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-green-600 transition-colors font-medium">
                {t('division')}
              </p>
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Globe className="h-10 w-10 text-white" />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{t('interactiveMapping')}</h3>
            <p className="text-gray-600 leading-relaxed font-medium">{t('interactiveMappingDesc')}</p>
            <div className="mt-4 text-3xl font-bold text-blue-600">8+</div>
            <p className="text-sm text-gray-500 font-medium">Divisions Mapped</p>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-green-600 transition-colors">{t('preciseLocation')}</h3>
            <p className="text-gray-600 leading-relaxed font-medium">{t('preciseLocationDesc')}</p>
            <div className="mt-4 text-3xl font-bold text-green-600">64+</div>
            <p className="text-sm text-gray-500 font-medium">Districts Covered</p>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">{t('communityData')}</h3>
            <p className="text-gray-600 leading-relaxed font-medium">{t('communityDataDesc')}</p>
            <div className="mt-4 text-3xl font-bold text-purple-600">165M+</div>
            <p className="text-sm text-gray-500 font-medium">Population Data</p>
          </div>
        </div>

        {/* Professional CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Explore Bangladesh?</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Access comprehensive geographic data and interactive mapping tools for informed decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Interactive Map
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                Download GIS Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GISSection
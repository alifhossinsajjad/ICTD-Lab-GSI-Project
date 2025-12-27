import { MapPin, Layers, Search, Filter, Download } from 'lucide-react'
import { useLanguage } from './sheard/contexts/LanguageContext'

const MapContainer = () => {
  const { t } = useLanguage()

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Map Controls Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-900">{t('interactiveMap')}</h2>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                <Layers className="h-4 w-4" />
                <span className="text-sm font-medium">{t('layers')}</span>
              </button>
              
              <button className="flex items-center space-x-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">{t('filters')}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={t('searchLocation')}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download className="h-4 w-4" />
              <span className="text-sm font-medium">{t('export')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('mapLoading')}</h3>
            <p className="text-gray-600">{t('mapLoadingDesc')}</p>
            
            {/* Placeholder for map integration */}
            <div className="mt-8 p-4 bg-white rounded-lg shadow-lg max-w-md mx-auto">
              <h4 className="font-semibold text-gray-800 mb-2">{t('mapFeatures')}</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {t('interactiveMapping')}</li>
                <li>• {t('layerManagement')}</li>
                <li>• {t('dataVisualization')}</li>
                <li>• {t('spatialAnalysis')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapContainer
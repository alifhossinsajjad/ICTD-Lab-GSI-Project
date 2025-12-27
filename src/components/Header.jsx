import { Menu, X, Globe, User } from 'lucide-react'
import { useLanguage } from './sheard/contexts/LanguageContext'

const Header = ({ toggleSidebar, setActiveView }) => {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ICTD Lab GIS</h1>
              <p className="text-sm text-gray-500">{t('gisMapping')}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === 'en' 
                  ? 'bg-green-100 text-green-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('bn')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === 'bn' 
                  ? 'bg-green-100 text-green-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              বাং
            </button>
          </div>

          <button
            onClick={() => setActiveView('home')}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">{t('home')}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
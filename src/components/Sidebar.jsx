import { X, Home, Map, BarChart3, Users, GraduationCap, Settings } from 'lucide-react'
import { useLanguage } from './sheard/contexts/LanguageContext'

const Sidebar = ({ isOpen, activeView, setActiveView }) => {
  const { t } = useLanguage()

  const menuItems = [
    { id: 'home', label: t('home'), icon: Home },
    { id: 'map', label: t('interactiveMap'), icon: Map },
    { id: 'dashboard', label: t('dashboard'), icon: BarChart3 },
    { id: 'users', label: t('userManagement'), icon: Users },
    { id: 'training', label: t('training'), icon: GraduationCap },
  ]

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setActiveView(activeView)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">{t('navigation')}</h2>
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setActiveView(activeView)}
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors
                  ${activeView === item.id 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                <IconComponent className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default Sidebar
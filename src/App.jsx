import { useState } from 'react'
import { LanguageProvider } from './components/sheard/contexts/LanguageContext'
import Header from './components/Header'
import Navbar from './components/sheard/Navbar'
import Home from './components/Home'
import Noties from './Pages/Home/Noties'
import AllNotices from './components/AllNotices'
import Sidebar from './components/Sidebar'
import MapContainer from './components/MapContainer'
import Dashboard from './components/Dashboard'
import UserManagement from './components/UserManagement'
import TrainingManagement from './components/TrainingManagement'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <Home setActiveView={setActiveView} />
      case 'notice':
        return <Noties setActiveView={setActiveView} />
      case 'all-notices':
        return <AllNotices />
      case 'map':
        return <MapContainer />
      case 'dashboard':
        return <Dashboard />
      case 'users':
        return <UserManagement />
      case 'training':
        return <TrainingManagement />
      default:
        return <Home setActiveView={setActiveView} />
    }
  }

  const isHomePage = activeView === 'home'

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100">
        {isHomePage ? (
          // Home page with Navbar
          <div>
            <Navbar setActiveView={setActiveView} />
            <main>
              {renderActiveView()}
            </main>
          </div>
        ) : (
          // Other pages with Header and Sidebar
          <div className="flex h-screen">
            <Sidebar 
              isOpen={sidebarOpen} 
              activeView={activeView} 
              setActiveView={setActiveView}
            />
            
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header 
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                setActiveView={setActiveView}
              />
              
              <main className="flex-1 overflow-hidden">
                {renderActiveView()}
              </main>
            </div>
          </div>
        )}
      </div>
    </LanguageProvider>
  )
}

export default App
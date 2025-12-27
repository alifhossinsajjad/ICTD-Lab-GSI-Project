import { Home, MapPin, Phone, User, Building2, Globe, ChevronDown, Bell, Info, Target, Users, Camera, Briefcase, Mail, FlaskConical, BookOpen, FileText } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from './contexts/LanguageContext'

const Navbar = ({ setActiveView }) => {
  const { currentLanguage, toggleLanguage, t } = useLanguage()
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  const handleNavigation = (view) => {
    if (view === 'notice') {
      // Scroll to notice section
      const noticeSection = document.getElementById('notice')
      if (noticeSection) {
        noticeSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (view === 'about') {
      // Scroll to about section
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (view === 'goals') {
      // Scroll to goals section
      const goalsSection = document.getElementById('goals')
      if (goalsSection) {
        goalsSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (view === 'gallery') {
      // Scroll to gallery section
      const gallerySection = document.getElementById('gallery')
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (view === 'team') {
      // Scroll to team section
      const teamSection = document.getElementById('team')
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (view === 'all-notices') {
      // Navigate to all notices page
      if (setActiveView) {
        setActiveView('all-notices')
      }
    } else if (view === 'home') {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      if (setActiveView) {
        setActiveView(view)
      }
    }
    console.log(`Navigating to: ${view}`)
  }

  const languages = [
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  const currentLang = languages.find(lang => lang.code === currentLanguage)

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-2.5 overflow-hidden">
        <div className="w-full">
          <div className="flex items-center justify-between text-sm">
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center space-x-8 animate-scroll whitespace-nowrap">
                <span className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+880-2-9898989</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>info@ictdlab.gov.bd</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Emergency: +880-999</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>support@ictdlab.gov.bd</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Hotline: +880-16263</span>
                </span>
                {/* Duplicate for seamless loop */}
                <span className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+880-2-9898989</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>info@ictdlab.gov.bd</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Emergency: +880-999</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>support@ictdlab.gov.bd</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Hotline: +880-16263</span>
                </span>
              </div>
            </div>
            <div className="text-xs opacity-95 font-medium flex-shrink-0 ml-4 px-6">
              {t('governmentOfBangladesh')}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => handleNavigation('home')}
          >
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-3.5 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-green-500">
              <Building2 className="h-9 w-9 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors tracking-tight">
                ICTD Lab
              </h1>
              <p className="text-sm text-gray-600 font-medium tracking-wide">GIS Platform</p>
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button 
              onClick={() => handleNavigation('home')}
              className="flex items-center space-x-2 transition-all duration-300 px-3 py-2 rounded-lg font-medium border border-transparent hover:border-green-200 hover:shadow-sm group text-green-600 bg-gradient-to-r from-green-50 to-green-100 border-green-200 shadow-sm"
            >
              <Home className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="tracking-wide text-xs">Home</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('notice')}
              className="flex items-center space-x-2 transition-all duration-300 px-3 py-2 rounded-lg font-medium border border-transparent hover:border-green-200 hover:shadow-sm group text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100"
            >
              <Bell className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="tracking-wide text-xs">Notice</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('about')}
              className="flex items-center space-x-2 transition-all duration-300 px-3 py-2 rounded-lg font-medium border border-transparent hover:border-green-200 hover:shadow-sm group text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100"
            >
              <Info className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="tracking-wide text-xs">About</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('goals')}
              className="flex items-center space-x-2 transition-all duration-300 px-3 py-2 rounded-lg font-medium border border-transparent hover:border-green-200 hover:shadow-sm group text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100"
            >
              <Target className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="tracking-wide text-xs">Goals</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('gallery')}
              className="flex items-center space-x-2 transition-all duration-300 px-3 py-2 rounded-lg font-medium border border-transparent hover:border-green-200 hover:shadow-sm group text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100"
            >
              <Camera className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="tracking-wide text-xs">Gallery</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('team')}
              className="flex items-center space-x-2 transition-all duration-300 px-3 py-2 rounded-lg font-medium border border-transparent hover:border-green-200 hover:shadow-sm group text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100"
            >
              <Users className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="tracking-wide text-xs">Team</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('vendors')}
              className="flex items-center space-x-2 transition-all duration-300 px-3 py-2 rounded-lg font-medium border border-transparent hover:border-green-200 hover:shadow-sm group text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100"
            >
              <Briefcase className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="tracking-wide text-xs">Vendors</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('contact')}
              className="flex items-center space-x-2 transition-all duration-300 px-3 py-2 rounded-lg font-medium border border-transparent hover:border-green-200 hover:shadow-sm group text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100"
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="tracking-wide text-xs">Contact</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('labs')}
              className="flex items-center space-x-2 transition-all duration-300 px-3 py-2 rounded-lg font-medium border border-transparent hover:border-green-200 hover:shadow-sm group text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100"
            >
              <FlaskConical className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="tracking-wide text-xs">Labs</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('manuals')}
              className="flex items-center space-x-2 transition-all
               duration-300 px-3 py-2 rounded-lg font-medium border
                border-transparent hover:border-green-200 hover:shadow-sm
                 group text-gray-700 hover:text-green-600 hover:bg-gradient-to-r
                  hover:from-green-50 hover:to-green-100"
            >
              <BookOpen className="h-4 w-4 group-hover:scale-110
               transition-transform duration-300" />
              <span className="tracking-wide text-xs">Manuals</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('all-notices')}
              className="flex items-center space-x-2 transition-all duration-300 px-3 py-2 rounded-lg font-medium border border-transparent hover:border-green-200 hover:shadow-sm group text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100"
            >
              <FileText className="h-4 w-4 group-hover:scale-110 
              transition-transform duration-300" />
              <span className="tracking-wide text-xs">All Notices</span>
            </button>
          </nav>

          {/* Right side - Language Switch & Login */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown - First */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="px-5 py-3 bg-gradient-to-r from-gray-50
                 to-gray-100 hover:from-gray-100 hover:to-gray-200
                  rounded-xl border border-gray-300 transition-all
                   duration-300 font-semibold shadow-sm hover:shadow-md
                    text-sm tracking-wide"
              >
                {currentLang?.name}
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-3 w-52
                 bg-white rounded-xl shadow-2xl border
                  border-gray-200 py-3 z-50 backdrop-blur-sm">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        if (lang.code !== currentLanguage) {
                          toggleLanguage()
                        }
                        setIsLanguageDropdownOpen(false)
                      }}
                      className={`w-full flex items-center space-x-4 px-5 py-3.5 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 transition-all duration-300 group ${
                        lang.code === currentLanguage ? 'bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-l-4 border-green-500' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">{lang.flag}</span>
                      <span className="font-semibold tracking-wide">{lang.name}</span>
                      {lang.code === currentLanguage && (
                        <div className="ml-auto flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-600 font-medium">Active</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button - Second */}
            <button className="bg-gradient-to-r from-red-600
             via-red-700 to-red-800 text-white px-7 py-3 
             rounded-xl hover:from-red-700 hover:via-red-800
              hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold tracking-wide border border-red-500 hover:border-red-400">
              {t('login')}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Hidden by default, can be shown with hamburger menu */}
      <div className="lg:hidden border-t border-gray-200 bg-gray-50 px-6 py-4">
        <nav className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center space-x-2 transition-colors py-2 px-3 rounded-lg text-green-600 bg-white shadow-sm"
          >
            <Home className="h-4 w-4" />
            <span className="font-medium text-sm">Home</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('notice')}
            className="flex items-center space-x-2 transition-colors py-2 px-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-white"
          >
            <Bell className="h-4 w-4" />
            <span className="font-medium text-sm">Notice</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('about')}
            className="flex items-center space-x-2 transition-colors py-2 px-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-white"
          >
            <Info className="h-4 w-4" />
            <span className="font-medium text-sm">About</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('goals')}
            className="flex items-center space-x-2 transition-colors py-2 px-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-white"
          >
            <Target className="h-4 w-4" />
            <span className="font-medium text-sm">Goals</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('gallery')}
            className="flex items-center space-x-2 transition-colors py-2 px-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-white"
          >
            <Camera className="h-4 w-4" />
            <span className="font-medium text-sm">Gallery</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('team')}
            className="flex items-center space-x-2 transition-colors py-2 px-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-white"
          >
            <Users className="h-4 w-4" />
            <span className="font-medium text-sm">Team</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('vendors')}
            className="flex items-center space-x-2 transition-colors py-2 px-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-white"
          >
            <Briefcase className="h-4 w-4" />
            <span className="font-medium text-sm">Vendors</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('contact')}
            className="flex items-center space-x-2 transition-colors py-2 px-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-white"
          >
            <Mail className="h-4 w-4" />
            <span className="font-medium text-sm">Contact</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('labs')}
            className="flex items-center space-x-2 transition-colors py-2 px-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-white"
          >
            <FlaskConical className="h-4 w-4" />
            <span className="font-medium text-sm">Labs</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('manuals')}
            className="flex items-center space-x-2 transition-colors py-2 px-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-white"
          >
            <BookOpen className="h-4 w-4" />
            <span className="font-medium text-sm">Manuals</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('all-notices')}
            className="flex items-center space-x-2 transition-colors py-2 px-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-white"
          >
            <FileText className="h-4 w-4" />
            <span className="font-medium text-sm">All Notices</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
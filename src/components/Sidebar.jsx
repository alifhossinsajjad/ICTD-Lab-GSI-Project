import React from 'react'
import { FiHome, FiMap, FiUsers, FiSettings } from 'react-icons/fi'

const Sidebar = ({ isOpen, activeView, setActiveView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiHome },
    { id: 'map', label: 'Map', icon: FiMap },
    { id: 'users', label: 'Users', icon: FiUsers },
    { id: 'training', label: 'Training', icon: FiSettings },
  ]

  return (
    <div className={`bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="p-4">
        <h2 className={`font-bold text-lg ${isOpen ? 'block' : 'hidden'}`}>Menu</h2>
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-700 transition-colors ${
                activeView === item.id ? 'bg-gray-700 border-r-2 border-blue-500' : ''
              }`}
            >
              <Icon className="h-5 w-5" />
              {isOpen && <span>{item.label}</span>}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar
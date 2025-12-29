import React from 'react'
import { FiMenu } from 'react-icons/fi'

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FiMenu className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">ICTD Lab Dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Welcome, Admin</span>
        </div>
      </div>
    </header>
  )
}

export default Header
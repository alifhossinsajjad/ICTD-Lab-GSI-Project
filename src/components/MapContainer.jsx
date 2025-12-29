import React from 'react'

const MapContainer = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Interactive Map</h1>
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Interactive Map will be displayed here</p>
        </div>
      </div>
    </div>
  )
}

export default MapContainer
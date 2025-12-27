import { useState } from 'react'
import { 
  Download, 
  FileText, 
  Image, 
  Database,
  Map,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'

const DataExport = () => {
  const [selectedFormat, setSelectedFormat] = useState('pdf')
  const [selectedData, setSelectedData] = useState([])

  const exportFormats = [
    { id: 'pdf', name: 'PDF Report', icon: FileText, description: 'Formatted reports with maps and charts' },
    { id: 'image', name: 'Image (PNG/JPG)', icon: Image, description: 'High-resolution map images' },
    { id: 'csv', name: 'CSV Data', icon: Database, description: 'Tabular data for analysis' },
    { id: 'geojson', name: 'GeoJSON', icon: Map, description: 'Spatial data in GeoJSON format' },
    { id: 'shapefile', name: 'Shapefile', icon: Map, description: 'ESRI Shapefile format' }
  ]

  const availableData = [
    {
      id: 'admin_boundaries',
      name: 'Administrative Boundaries',
      type: 'Vector Data',
      size: '2.5 MB',
      lastUpdated: '2024-01-20',
      description: 'Division, District, Upazila boundaries'
    },
    {
      id: 'population_data',
      name: 'Population Statistics',
      type: 'Tabular Data',
      size: '1.2 MB',
      lastUpdated: '2024-01-18',
      description: 'Census data by administrative units'
    },
    {
      id: 'land_use',
      name: 'Land Use Classification',
      type: 'Raster Data',
      size: '15.8 MB',
      lastUpdated: '2024-01-15',
      description: 'Satellite-derived land use maps'
    },
    {
      id: 'road_network',
      name: 'Road Network',
      type: 'Vector Data',
      size: '8.3 MB',
      lastUpdated: '2024-01-12',
      description: 'Major roads and highways'
    },
    {
      id: 'health_facilities',
      name: 'Health Facilities',
      type: 'Point Data',
      size: '0.8 MB',
      lastUpdated: '2024-01-10',
      description: 'Hospitals and health centers'
    },
    {
      id: 'education_facilities',
      name: 'Educational Institutions',
      type: 'Point Data',
      size: '1.1 MB',
      lastUpdated: '2024-01-08',
      description: 'Schools, colleges, and universities'
    }
  ]

  const exportHistory = [
    {
      id: 1,
      name: 'Dhaka Population Report',
      format: 'PDF',
      date: '2024-01-20 14:30',
      status: 'Completed',
      size: '3.2 MB'
    },
    {
      id: 2,
      name: 'Administrative Boundaries',
      format: 'Shapefile',
      date: '2024-01-19 11:15',
      status: 'Completed',
      size: '2.5 MB'
    },
    {
      id: 3,
      name: 'Land Use Analysis',
      format: 'CSV',
      date: '2024-01-18 16:45',
      status: 'Processing',
      size: '1.8 MB'
    },
    {
      id: 4,
      name: 'Road Network Map',
      format: 'PNG',
      date: '2024-01-17 09:20',
      status: 'Failed',
      size: '0 MB'
    }
  ]

  const handleDataSelection = (dataId) => {
    setSelectedData(prev => 
      prev.includes(dataId) 
        ? prev.filter(id => id !== dataId)
        : [...prev, dataId]
    )
  }

  const handleExport = () => {
    if (selectedData.length === 0) {
      alert('Please select at least one dataset to export')
      return
    }
    alert(`Exporting ${selectedData.length} dataset(s) in ${selectedFormat.toUpperCase()} format`)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'Processing':
        return <Clock className="h-4 w-4 text-yellow-600" />
      case 'Failed':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'Processing': return 'bg-yellow-100 text-yellow-800'
      case 'Failed': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6 bg-gray-50 h-full overflow-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Map & Data Export</h1>
        <p className="text-gray-600">Export maps, reports, and spatial data in various formats</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Export Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Format Selection */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Select Export Format</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exportFormats.map((format) => {
                const Icon = format.icon
                return (
                  <div
                    key={format.id}
                    onClick={() => setSelectedFormat(format.id)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedFormat === format.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon className={`h-5 w-5 ${
                        selectedFormat === format.id ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                      <span className="font-medium">{format.name}</span>
                    </div>
                    <p className="text-sm text-gray-600">{format.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Data Selection */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Select Data to Export</h3>
            <div className="space-y-3">
              {availableData.map((data) => (
                <div
                  key={data.id}
                  className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    id={data.id}
                    checked={selectedData.includes(data.id)}
                    onChange={() => handleDataSelection(data.id)}
                    className="h-4 w-4 text-blue-600 rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <label htmlFor={data.id} className="font-medium text-gray-900 cursor-pointer">
                          {data.name}
                        </label>
                        <p className="text-sm text-gray-600">{data.description}</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div>{data.size}</div>
                        <div>{data.lastUpdated}</div>
                      </div>
                    </div>
                    <span className="inline-block mt-1 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                      {data.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                {selectedData.length} dataset(s) selected
              </div>
              <button
                onClick={handleExport}
                className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                disabled={selectedData.length === 0}
              >
                <Download className="h-4 w-4" />
                <span>Export Data</span>
              </button>
            </div>
          </div>
        </div>

        {/* Export History */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Export History</span>
          </h3>
          <div className="space-y-3">
            {exportHistory.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                  {getStatusIcon(item.status)}
                </div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="font-medium">{item.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{item.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span>{item.size}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataExport
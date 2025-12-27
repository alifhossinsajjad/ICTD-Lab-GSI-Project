import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell,
  ResponsiveContainer
} from 'recharts'
import { 
  Users, 
  MapPin, 
  Database, 
  TrendingUp
} from 'lucide-react'

const Dashboard = () => {
  // Sample data for charts
  const populationData = [
    { division: 'Dhaka', population: 36054418, area: 20593.74 },
    { division: 'Chittagong', population: 28423019, area: 33771.18 },
    { division: 'Rajshahi', population: 18484858, area: 18153.08 },
    { division: 'Khulna', population: 15563000, area: 22285.00 },
    { division: 'Barisal', population: 8325666, area: 13644.85 },
    { division: 'Sylhet', population: 9910219, area: 12635.22 },
    { division: 'Rangpur', population: 15665000, area: 16317.45 },
    { division: 'Mymensingh', population: 11370000, area: 10584.06 }
  ]

  const landUseData = [
    { name: 'Agricultural', value: 60, color: '#10B981' },
    { name: 'Urban', value: 15, color: '#3B82F6' },
    { name: 'Forest', value: 17, color: '#059669' },
    { name: 'Water Bodies', value: 6, color: '#06B6D4' },
    { name: 'Others', value: 2, color: '#6B7280' }
  ]

  const stats = [
    {
      title: 'Total Districts',
      value: '64',
      icon: MapPin,
      color: 'bg-blue-500',
      change: '+2.5%'
    },
    {
      title: 'Active Users',
      value: '1,247',
      icon: Users,
      color: 'bg-green-500',
      change: '+12.3%'
    },
    {
      title: 'Data Layers',
      value: '156',
      icon: Database,
      color: 'bg-purple-500',
      change: '+8.1%'
    },
    {
      title: 'Analysis Reports',
      value: '89',
      icon: TrendingUp,
      color: 'bg-orange-500',
      change: '+15.7%'
    }
  ]

  return (
    <div className="p-6 bg-gray-50 h-full overflow-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">GIS Dashboard</h1>
        <p className="text-gray-600">Bangladesh Geospatial Data Overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Population by Division */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Population by Division</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={populationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="division" 
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis />
              <Tooltip formatter={(value) => [value.toLocaleString(), 'Population']} />
              <Bar dataKey="population" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Land Use Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Land Use Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={landUseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {landUseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
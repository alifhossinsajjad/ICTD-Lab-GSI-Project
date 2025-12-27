import { Users, Plus, Search, Filter, Edit, Trash2, Eye } from 'lucide-react'
import { useLanguage } from './sheard/contexts/LanguageContext'

const UserManagement = () => {
  const { t } = useLanguage()

  const users = [
    {
      id: 1,
      name: 'Dr. Rahman Ahmed',
      email: 'rahman.ahmed@ictdlab.gov.bd',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-12-26'
    },
    {
      id: 2,
      name: 'Fatima Khan',
      email: 'fatima.khan@ictdlab.gov.bd',
      role: 'GIS Specialist',
      status: 'Active',
      lastLogin: '2024-12-25'
    },
    {
      id: 3,
      name: 'Mohammad Ali',
      email: 'mohammad.ali@ictdlab.gov.bd',
      role: 'Coordinator',
      status: 'Inactive',
      lastLogin: '2024-12-20'
    }
  ]

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('userManagement')}</h1>
            <p className="text-gray-600 mt-1">{t('userManagementDesc')}</p>
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus className="h-4 w-4" />
            <span className="text-sm font-medium">{t('addUser')}</span>
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={t('searchUsers')}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">{t('filters')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{t('allUsers')}</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('name')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('email')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('role')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('status')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('lastLogin')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.lastLogin}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserManagement
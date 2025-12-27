import { GraduationCap, Plus, Calendar, Users, Clock, BookOpen } from 'lucide-react'
import { useLanguage } from './sheard/contexts/LanguageContext'

const TrainingManagement = () => {
  const { t } = useLanguage()

  const trainings = [
    {
      id: 1,
      title: 'GIS Fundamentals',
      description: 'Basic introduction to Geographic Information Systems',
      instructor: 'Dr. Rahman Ahmed',
      duration: '3 days',
      participants: 25,
      startDate: '2024-01-15',
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'Advanced Mapping Techniques',
      description: 'Advanced cartography and spatial analysis methods',
      instructor: 'Fatima Khan',
      duration: '5 days',
      participants: 18,
      startDate: '2024-01-22',
      status: 'Registration Open'
    },
    {
      id: 3,
      title: 'Data Collection Methods',
      description: 'Field data collection and GPS usage training',
      instructor: 'Mohammad Ali',
      duration: '2 days',
      participants: 30,
      startDate: '2024-01-08',
      status: 'Completed'
    }
  ]

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('trainingManagement')}</h1>
            <p className="text-gray-600 mt-1">{t('trainingManagementDesc')}</p>
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus className="h-4 w-4" />
            <span className="text-sm font-medium">{t('addTraining')}</span>
          </button>
        </div>
      </div>

      {/* Training Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t('totalTrainings')}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t('activeTrainings')}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <GraduationCap className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t('totalParticipants')}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t('completionRate')}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">94%</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Training List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{t('allTrainings')}</h3>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {trainings.map((training) => (
              <div key={training.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{training.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    training.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                    training.status === 'Registration Open' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {training.status}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{training.description}</p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>{training.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{training.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{training.participants} {t('participants')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{training.startDate}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    {t('viewDetails')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingManagement
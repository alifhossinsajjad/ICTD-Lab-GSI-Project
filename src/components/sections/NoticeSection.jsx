import { Bell, Clock, ChevronRight, Eye } from 'lucide-react'
import { useLanguage } from '../sheard/contexts/LanguageContext'

const NoticeSection = ({ setActiveView }) => {
  const { t, currentLanguage } = useLanguage()

  // Notice data
  const notices = [
    { 
      id: 1, 
      title: currentLanguage === 'bn' 
        ? "নতুন পর্যটন নির্দেশিকা প্রকাশিত" 
        : "New Tourism Guidelines Released", 
      date: currentLanguage === 'bn' ? "ডিসেম্বর ২০, ২০২৪" : "Dec 20, 2024", 
      type: currentLanguage === 'bn' ? "গুরুত্বপূর্ণ" : "Important" 
    },
    { 
      id: 2, 
      title: currentLanguage === 'bn' 
        ? "শীতকালীন উৎসব ২০২৪ নিবন্ধন খোলা" 
        : "Winter Festival 2024 Registration Open", 
      date: currentLanguage === 'bn' ? "ডিসেম্বর ১৮, ২০২৪" : "Dec 18, 2024", 
      type: currentLanguage === 'bn' ? "ইভেন্ট" : "Event" 
    },
    { 
      id: 3, 
      title: currentLanguage === 'bn' 
        ? "ঐতিহ্যবাহী স্থান রক্ষণাবেক্ষণ সময়সূচী" 
        : "Heritage Site Maintenance Schedule", 
      date: currentLanguage === 'bn' ? "ডিসেম্বর ১৫, ২০২৪" : "Dec 15, 2024", 
      type: currentLanguage === 'bn' ? "আপডেট" : "Update" 
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-20" id="notice">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-2xl shadow-lg">
              <Bell className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">{t('latestNotices')}</h2>
              <p className="text-gray-600 font-medium mt-1">
                {currentLanguage === 'bn' ? 'সরকারি ঘোষণা এবং আপডেট' : 'Official announcements and updates'}
              </p>
            </div>
          </div>
          <button 
            onClick={() => setActiveView && setActiveView('all-notices')}
            className="flex items-center space-x-3 text-green-700 hover:text-green-800 font-semibold bg-green-50 hover:bg-green-100 px-6 py-3 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span className="tracking-wide">{t('viewAll')}</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {notices.slice(0, 3).map((notice, index) => (
            <div key={notice.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide ${
                    notice.type === 'Important' || notice.type === 'গুরুত্বপূর্ণ' ? 'bg-red-100 text-red-700 border border-red-200' :
                    notice.type === 'Event' || notice.type === 'ইভেন্ট' ? 'bg-green-100 text-green-700 border border-green-200' :
                    notice.type === 'Update' || notice.type === 'আপডেট' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                    'bg-gray-100 text-gray-700 border border-gray-200'
                  }`}>
                    {notice.type}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">#{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-xl text-gray-900 mb-4 line-clamp-2 group-hover:text-green-700 transition-colors leading-tight">
                  {notice.title}
                </h3>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">
                      {currentLanguage === 'bn' ? 'প্রকাশিত: ' : 'Published: '}{notice.date}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-green-700 hover:text-green-800 font-semibold bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg transition-all duration-300 group-hover:scale-105">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">{t('readMore')}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-300">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm">{t('download')}</span>
                  </button>
                </div>
              </div>
              
              {/* Professional bottom accent */}
              <div className={`h-1 w-full ${
                notice.type === 'Important' || notice.type === 'গুরুত্বপূর্ণ' ? 'bg-gradient-to-r from-red-400 to-red-500' :
                notice.type === 'Event' || notice.type === 'ইভেন্ট' ? 'bg-gradient-to-r from-green-400 to-green-500' :
                notice.type === 'Update' || notice.type === 'আপডেট' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                'bg-gradient-to-r from-gray-400 to-gray-500'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NoticeSection
import { Download } from 'lucide-react'
import { useLanguage } from '../../components/sheard/contexts/LanguageContext'

const Noties = ({ setActiveView }) => {
  const { t, currentLanguage } = useLanguage()

  // Sample notice data - first 3 for preview with bilingual support
  const recentNotices = [
    {
      id: 1,
      title: currentLanguage === 'bn' 
        ? "শেখ রাসেল স্কুল অব ফিউচারের শিক্ষকদের জন্য ফ্রন্টিয়ার টেকনোলজি সম্পর্কিত প্রশিক্ষণের জন্য প্রশিক্ষকদের প্রশিক্ষণ (TOT) এর জন্য ফার্ম নির্বাচনের জন্য গ্রহণপত্র। (SP-16 লট 1 এবং 2)"
        : "Letter of Acceptance for Selection of Firm for Training of Trainers (TOT) on Frontier Technology Related Training for the Teachers of Sheikh Russel School of Future. (SP-16 Lot 1 and 2)",
      publishedDate: currentLanguage === 'bn' ? "বৃহস্পতিবার, জুন ২০, ২০২৪ ১২:১২ PM" : "Thu, Jun 20, 2024 12:12 PM",
      type: currentLanguage === 'bn' ? "গুরুত্বপূর্ণ" : "Important",
      downloads: 2
    },
    {
      id: 2,
      title: currentLanguage === 'bn' 
        ? "১৪ শতাব্দী হাফিজের শেষ রাজসভা ডিজিটাল ন্যারেটিভ অভিজ্ঞতার সংস্করণ"
        : "14th Century Hafez's Last Royal Court Digital Narrative Experience Edition",
      publishedDate: currentLanguage === 'bn' ? "রবিবার, নভেম্বর ৫, ২০২৩ ৮:০৮ AM" : "Sun, Nov 5, 2023 8:08 AM",
      type: currentLanguage === 'bn' ? "আপডেট" : "Update",
      downloads: 3
    },
    {
      id: 3,
      title: currentLanguage === 'bn' 
        ? "রেজিস্ট্রার কর্তৃক ফলাফল হাফিজের পত্র"
        : "Registrar's Result Letter for Hafez",
      publishedDate: currentLanguage === 'bn' ? "রবিবার, অক্টোবর ১৫, ২০২৩ ৭:৫ৃ AM" : "Sun, Oct 15, 2023 7:53 AM",
      type: currentLanguage === 'bn' ? "সংবাদ" : "News",
      downloads: 2
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Ultra Stylish Header */}
        <div className="text-center mb-16">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            </div>
            
            {/* Main title with enhanced styling */}
            <div className="relative bg-gradient-to-br from-gray-50 via-green-50 to-gray-100 px-12 py-6">
              <div className="flex items-center justify-center space-x-6 mb-4">
                <div className="flex space-x-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="h-2 w-2 bg-green-600 rounded-full animate-pulse delay-75"></div>
                  <div className="h-2 w-2 bg-green-700 rounded-full animate-pulse delay-150"></div>
                </div>
                
                <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-700 to-green-800 tracking-wider drop-shadow-sm">
                  {t('notice').toUpperCase()}
                </h1>
                
                <div className="flex space-x-2">
                  <div className="h-2 w-2 bg-green-700 rounded-full animate-pulse delay-150"></div>
                  <div className="h-2 w-2 bg-green-600 rounded-full animate-pulse delay-75"></div>
                  <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="h-1 w-24 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full shadow-lg"></div>
                <div className="px-4 py-2 bg-white rounded-full shadow-md border border-green-200">
                  <span className="text-sm font-semibold text-green-700 tracking-wide">
                    {t('recentNotices')}
                  </span>
                </div>
                <div className="h-1 w-24 bg-gradient-to-r from-green-600 via-green-500 to-green-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra Stylish Table */}
        <div className="relative">
          {/* Glow effect background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl blur opacity-20"></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl border border-green-100 overflow-hidden backdrop-blur-sm">
            {/* Table header with enhanced styling */}
            <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <h2 className="text-xl font-bold text-white tracking-wide">
                    {t('latestNotices')}
                  </h2>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="px-3 py-1 bg-white/20 rounded-full">
                    <span className="text-xs font-medium text-white">
                      {recentNotices.length} {currentLanguage === 'bn' ? 'টি নোটিশ' : 'Notices'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-50 via-green-100 to-green-50 border-b-2 border-green-200">
                <tr>
                  <th className="px-8 py-5 text-left text-sm font-bold text-green-800 tracking-wide uppercase">
                    {currentLanguage === 'bn' ? 'শিরোনাম' : 'Title'}
                  </th>
                  <th className="px-8 py-5 text-center text-sm font-bold text-green-800 tracking-wide uppercase">
                    {t('download')}
                  </th>
                  <th className="px-8 py-5 text-right text-sm font-bold text-green-800 tracking-wide uppercase">
                    {currentLanguage === 'bn' ? 'প্রকাশিত' : 'Published At'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-100">
                {recentNotices.map((notice, index) => (
                  <tr key={notice.id} className="group hover:bg-gradient-to-r hover:from-green-50 hover:via-green-25 hover:to-green-50 transition-all duration-500 border-l-4 border-transparent hover:border-green-500 hover:shadow-lg">
                    <td className="px-8 py-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-900 leading-relaxed font-medium group-hover:text-green-800 transition-colors duration-300 line-clamp-3">
                            {notice.title}
                          </div>
                          <div className="mt-2 flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              notice.type === 'Important' || notice.type === 'গুরুত্বপূর্ণ'
                                ? 'bg-red-100 text-red-700'
                                : notice.type === 'Update' || notice.type === 'আপডেট'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {notice.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-8 text-center">
                      <div className="flex justify-center space-x-3">
                        {[...Array(notice.downloads)].map((_, i) => (
                          <button 
                            key={i} 
                            className="group/btn relative p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                          >
                            <Download className="h-5 w-5" />
                            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          </button>
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-8 text-right">
                      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 rounded-xl border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">
                          {notice.publishedDate}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ultra Stylish More Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setActiveView && setActiveView('all-notices')}
            className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-500 border border-green-500"
          >
            <span className="relative z-10">{t('more')}</span>
            <div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Noties
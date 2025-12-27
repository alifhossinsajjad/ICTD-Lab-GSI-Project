import { Download, Search } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from './sheard/contexts/LanguageContext'

const AllNotices = () => {
  const { t, currentLanguage } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')

  // Complete notice data with bilingual support
  const allNotices = [
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
      publishedDate: currentLanguage === 'bn' ? "রবিবার, অক্টোবর ১৫, ২০২৩ ৭:৫৩ AM" : "Sun, Oct 15, 2023 7:53 AM",
      type: currentLanguage === 'bn' ? "সংবাদ" : "News",
      downloads: 2
    },
    {
      id: 4,
      title: currentLanguage === 'bn' 
        ? "সাইবার নিরাপত্তা প্রশিক্ষণ সংক্রান্ত"
        : "Cyber Security Training Related",
      publishedDate: currentLanguage === 'bn' ? "সোমবার, অক্টোবর ৯, ২০২৩ ১১:৪০ AM" : "Mon, Oct 9, 2023 11:40 AM",
      type: currentLanguage === 'bn' ? "প্রশিক্ষণ" : "Training",
      downloads: 4
    },
    {
      id: 5,
      title: currentLanguage === 'bn' 
        ? "শেখ রাসেল স্কুল অব ফিউচার পরিদর্শন অভিজ্ঞান"
        : "Sheikh Russel School of Future Inspection Experience",
      publishedDate: currentLanguage === 'bn' ? "রবিবার, সেপ্টেম্বর ২৪, ২০২৩ ১০:০২ AM" : "Sun, Sep 24, 2023 10:02 AM",
      type: currentLanguage === 'bn' ? "পরিদর্শন" : "Visit",
      downloads: 4
    },
    {
      id: 6,
      title: currentLanguage === 'bn' 
        ? "স্মার্ট নোটবুক বাংলা ম্যানুয়াল"
        : "Smart Notebook Bangla Manual",
      publishedDate: currentLanguage === 'bn' ? "রবিবার, সেপ্টেম্বর ১০, ২০২৩ ১১:০৩ AM" : "Sun, Sep 10, 2023 11:03 AM",
      type: currentLanguage === 'bn' ? "ম্যানুয়াল" : "Manual",
      downloads: 1
    },
    {
      id: 7,
      title: currentLanguage === 'bn' 
        ? "SOF পরিদর্শন ফর্ম"
        : "SOF Inspection Form",
      publishedDate: currentLanguage === 'bn' ? "বুধবার, আগস্ট ২৩, ২০২৩ ১:০৭ PM" : "Wed, Aug 23, 2023 1:07 PM",
      type: currentLanguage === 'bn' ? "ফর্ম" : "Form",
      downloads: 1
    },
    {
      id: 8,
      title: currentLanguage === 'bn' 
        ? "SRDL ল্যাব পরিদর্শন ফর্ম"
        : "SRDL Lab Inspection Form",
      publishedDate: currentLanguage === 'bn' ? "বুধবার, আগস্ট ২৩, ২০২৩ ১:০৭ PM" : "Wed, Aug 23, 2023 1:07 PM",
      type: currentLanguage === 'bn' ? "ফর্ম" : "Form",
      downloads: 1
    }
  ]

  const filteredNotices = allNotices.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
                  {t('allNotices').toUpperCase()}
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
                    {t('completeNoticeList')}
                  </span>
                </div>
                <div className="h-1 w-24 bg-gradient-to-r from-green-600 via-green-500 to-green-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra Stylish Search Bar */}
        <div className="mb-12 flex justify-center">
          <div className="relative max-w-2xl w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-xl border border-green-200 overflow-hidden">
              <div className="flex items-center">
                <div className="pl-6">
                  <Search className="h-6 w-6 text-green-500" />
                </div>
                <input
                  type="text"
                  placeholder={t('searchNotices')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-6 py-4 text-lg border-none focus:ring-0 focus:outline-none bg-transparent placeholder-green-400"
                />
                <div className="pr-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra Stylish Complete Table */}
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
                    {t('completeNoticeList')}
                  </h2>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="px-3 py-1 bg-white/20 rounded-full">
                    <span className="text-xs font-medium text-white">
                      {filteredNotices.length} {currentLanguage === 'bn' ? 'টি নোটিশ' : 'Notices'}
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
                {filteredNotices.map((notice, index) => (
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
                                : notice.type === 'Training' || notice.type === 'প্রশিক্ষণ'
                                ? 'bg-purple-100 text-purple-700'
                                : notice.type === 'Manual' || notice.type === 'ম্যানুয়াল'
                                ? 'bg-orange-100 text-orange-700'
                                : notice.type === 'Form' || notice.type === 'ফর্ম'
                                ? 'bg-indigo-100 text-indigo-700'
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

        {/* Ultra Stylish Results Counter */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-2xl shadow-xl border border-green-200">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium">
                {currentLanguage === 'bn' ? 'দেখানো হচ্ছে' : 'Showing'}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl shadow-lg">
              <span className="text-lg font-bold">{filteredNotices.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 font-medium">
                {currentLanguage === 'bn' ? 'এর মধ্যে' : 'of'}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-xl shadow-lg">
              <span className="text-lg font-bold">{allNotices.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 font-medium">
                {currentLanguage === 'bn' ? 'নোটিশ' : 'notices'}
              </span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllNotices
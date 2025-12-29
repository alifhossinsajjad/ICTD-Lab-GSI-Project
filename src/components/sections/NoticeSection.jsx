import React from 'react'
import { FiDownload, FiArrowRight } from 'react-icons/fi'

const NoticeSection = ({ setActiveView }) => {
  // Recent 3 notices for home page
  const recentNotices = [
    {
      id: 1,
      title: "Letter of Acceptance for Selection of Firm for Training of Trainers (TOT) on Frontier Technology Related Training for the Teachers of Sheikh Russel School of Future. (SP-16 Lot 1 and 2)",
      publishedDate: "Thu, Jun 20, 2024 12:12 PM",
      downloads: 2
    },
    {
      id: 2,
      title: "১৪ শতাব্দী হাফিজের শেষ রাজসভা ডিজিটাল ন্যারেটিভ অভিজ্ঞতার সংস্করণ",
      publishedDate: "Sun, Nov 5, 2023 8:08 AM",
      downloads: 3
    },
    {
      id: 3,
      title: "রেজিস্ট্রার কর্তৃক ফলাফল হাফিজের পত্র",
      publishedDate: "Sun, Oct 15, 2023 7:53 AM",
      downloads: 2
    }
  ]

  return (
    <div className="bg-gray-50 py-16" id="notice">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Notices</h2>
            <p className="text-gray-600">Official announcements and updates</p>
          </div>
          <button 
            onClick={() => setActiveView && setActiveView('all-notices')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all"
          >
            <span>View All</span>
            <FiArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        {/* Notice Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Download
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Published At
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentNotices.map((notice) => (
                <tr key={notice.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 leading-relaxed">
                      {notice.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center space-x-2">
                      {[...Array(notice.downloads)].map((_, index) => (
                        <button
                          key={index}
                          className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50 transition-colors"
                          title="Download"
                        >
                          <FiDownload className="h-4 w-4" />
                        </button>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-sm text-gray-600">
                      {notice.publishedDate}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* More Button */}
        <div className="text-center mt-8">
          <button 
            onClick={() => setActiveView && setActiveView('all-notices')}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold text-lg underline decoration-2 underline-offset-4 hover:decoration-blue-800 transition-all"
          >
            <span>More</span>
            <FiArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoticeSection
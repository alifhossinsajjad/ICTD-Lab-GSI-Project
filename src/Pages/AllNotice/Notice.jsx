import React, { useState } from "react";
import { FiDownload, FiSearch } from "react-icons/fi";

const Notice = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Notice data matching the screenshot
  const notices = [
    {
      id: 1,
      title:
        "Letter of Acceptance for Selection of Firm for Training of Trainers (TOT) on Frontier Technology Related Training for the Teachers of Sheikh Russel School of Future. (SP-16 Lot 1 and 2)",
      publishedDate: "Thu, Jun 20, 2024 12:12 PM",
      downloads: 2,
    },
    {
      id: 2,
      title:
        "১৪ শতাব্দী হাফিজের শেষ রাজসভা ডিজিটাল ন্যারেটিভ অভিজ্ঞতার সংস্করণ",
      publishedDate: "Sun, Nov 5, 2023 8:08 AM",
      downloads: 3,
    },
    {
      id: 3,
      title: "রেজিস্ট্রার কর্তৃক ফলাফল হাফিজের পত্র",
      publishedDate: "Sun, Oct 15, 2023 7:53 AM",
      downloads: 2,
    },
    {
      id: 4,
      title: "পাইথন প্রোগ্রামিং: প্রশিক্ষণ সংক্রান্ত",
      publishedDate: "Mon, Oct 9, 2023 11:40 AM",
      downloads: 4,
    },
    {
      id: 5,
      title: "শেখ রাসেল স্কুল অব ফিউচার তুলনা অভিজ্ঞান",
      publishedDate: "Sun, Sep 24, 2023 10:02 AM",
      downloads: 4,
    },
    {
      id: 6,
      title: "Smart Notebook Bangla Manual",
      publishedDate: "Sun, Sep 10, 2023 11:03 AM",
      downloads: 1,
    },
    {
      id: 7,
      title: "SOF Inspection Form",
      publishedDate: "Wed, Aug 23, 2023 1:07 PM",
      downloads: 1,
    },
    {
      id: 8,
      title: "SRDL Lab Inspection Form",
      publishedDate: "Wed, Aug 23, 2023 1:07 PM",
      downloads: 1,
    },
  ];

  // Filter notices based on search term
  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 w-16 bg-blue-500 mr-4"></div>
            <h1 className="text-3xl font-bold text-gray-800">NOTICE</h1>
            <div className="h-0.5 w-16 bg-blue-500 ml-4"></div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search notices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
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
              {filteredNotices.map((notice) => (
                <tr
                  key={notice.id}
                  className="hover:bg-gray-50 transition-colors"
                >
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

        {/* Results Count */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow border">
            <span className="text-sm text-gray-600">Showing</span>
            <span className="text-sm font-semibold text-blue-600">
              {filteredNotices.length}
            </span>
            <span className="text-sm text-gray-600">of</span>
            <span className="text-sm font-semibold text-blue-600">
              {notices.length}
            </span>
            <span className="text-sm text-gray-600">notices</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;

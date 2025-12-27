import { Camera, Eye, ChevronRight } from 'lucide-react'
import { useLanguage } from '../sheard/contexts/LanguageContext'

const GallerySection = () => {
  const { t, currentLanguage } = useLanguage()

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      title: currentLanguage === 'bn' ? "ঢাকা বিভাগ GIS ম্যাপিং" : "Dhaka Division GIS Mapping",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: currentLanguage === 'bn' ? "ম্যাপিং" : "Mapping"
    },
    {
      id: 2,
      title: currentLanguage === 'bn' ? "চট্টগ্রাম উপকূলীয় এলাকা" : "Chittagong Coastal Area",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      category: currentLanguage === 'bn' ? "উপকূল" : "Coastal"
    },
    {
      id: 3,
      title: currentLanguage === 'bn' ? "সিলেট পাহাড়ি অঞ্চল" : "Sylhet Hill Region",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      category: currentLanguage === 'bn' ? "পাহাড়" : "Hills"
    },
    {
      id: 4,
      title: currentLanguage === 'bn' ? "খুলনা সুন্দরবন এলাকা" : "Khulna Sundarbans Area",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      category: currentLanguage === 'bn' ? "বন" : "Forest"
    },
    {
      id: 5,
      title: currentLanguage === 'bn' ? "রাজশাহী ঐতিহাসিক স্থান" : "Rajshahi Historical Sites",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
      category: currentLanguage === 'bn' ? "ঐতিহ্য" : "Heritage"
    },
    {
      id: 6,
      title: currentLanguage === 'bn' ? "বরিশাল নদী অঞ্চল" : "Barisal River Region",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      category: currentLanguage === 'bn' ? "নদী" : "River"
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50" id="gallery">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 mb-6 border border-green-200 shadow-sm">
              <Camera className="h-6 w-6 text-green-700" />
              <span className="text-green-800 font-semibold text-base tracking-wide">
                {t('gallery')}
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              {currentLanguage === 'bn' ? 'প্রকল্প গ্যালারি' : 'Project Gallery'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-light">
              {currentLanguage === 'bn' 
                ? 'আমাদের GIS প্রকল্পের বিভিন্ন এলাকার ছবি এবং ম্যাপিং কাজের নমুনা দেখুন'
                : 'Explore images and mapping samples from various regions of our GIS project'
              }
            </p>
          </div>
          <button className="flex items-center space-x-3 text-green-700 hover:text-green-800 font-semibold bg-green-50 hover:bg-green-100 px-6 py-3 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md">
            <span className="tracking-wide">
              {currentLanguage === 'bn' ? 'সব ছবি দেখুন' : 'View All Images'}
            </span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div key={image.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {image.category}
                  </span>
                </div>
                
                {/* View button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 backdrop-blur-sm text-green-700 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                    <Eye className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {currentLanguage === 'bn' 
                    ? 'GIS ম্যাপিং প্রকল্পের অংশ'
                    : 'Part of GIS mapping project'
                  }
                </p>
                
                {/* Professional bottom accent */}
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Statistics section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
            <p className="text-gray-600 font-medium">
              {currentLanguage === 'bn' ? 'ছবি সংগ্রহ' : 'Images Collected'}
            </p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
            <p className="text-gray-600 font-medium">
              {currentLanguage === 'bn' ? 'বিভাগ কভার' : 'Divisions Covered'}
            </p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">64</div>
            <p className="text-gray-600 font-medium">
              {currentLanguage === 'bn' ? 'জেলা ম্যাপ' : 'Districts Mapped'}
            </p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
            <p className="text-gray-600 font-medium">
              {currentLanguage === 'bn' ? 'প্রকল্প সাইট' : 'Project Sites'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GallerySection
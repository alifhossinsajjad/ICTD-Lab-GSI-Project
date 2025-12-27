import { MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '../sheard/contexts/LanguageContext'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % t('heroSlides').length)
    }, 4000)
    return () => clearInterval(timer)
  }, [t])

  return (
    <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white py-32 overflow-hidden">
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          {/* Bangladesh Map Outline */}
          <path d="M200 150 Q300 120 400 140 Q500 160 600 180 Q700 200 800 190 Q900 180 1000 200 L1000 400 Q900 420 800 410 Q700 400 600 420 Q500 440 400 430 Q300 420 200 400 Z" 
                stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
        </svg>
      </div>
      
      {/* Location Pins */}
      <div className="absolute inset-0">
        <MapPin className="absolute top-20 left-1/4 h-8 w-8 text-white opacity-60 animate-pulse" />
        <MapPin className="absolute top-32 right-1/3 h-6 w-6 text-white opacity-50 animate-pulse" style={{animationDelay: '0.5s'}} />
        <MapPin className="absolute top-40 left-1/2 h-7 w-7 text-white opacity-70 animate-pulse" style={{animationDelay: '1s'}} />
        <MapPin className="absolute bottom-32 left-1/3 h-6 w-6 text-white opacity-60 animate-pulse" style={{animationDelay: '1.5s'}} />
        <MapPin className="absolute bottom-40 right-1/4 h-8 w-8 text-white opacity-50 animate-pulse" style={{animationDelay: '2s'}} />
        <MapPin className="absolute top-28 left-2/3 h-5 w-5 text-white opacity-40 animate-pulse" style={{animationDelay: '2.5s'}} />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block transition-all duration-1000 ease-in-out">
            {t('heroSlides')[currentSlide]}
          </span>
        </h1>
        
        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {t('heroSlides').map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner

import { useState } from 'react'
 

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
              



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
     

      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Empowering Communities with <span className="underline decoration-white/50">GIS Solutions</span>
        </h1>
        
        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((index) => (
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
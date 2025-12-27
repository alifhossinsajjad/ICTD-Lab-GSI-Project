import HeroSection from '../../../components/sections/HeroSection'
import GISSection from '../../../components/sections/GISSection'
import NoticeSection from '../../../components/sections/NoticeSection'
import AboutSection from '../../../components/sections/AboutSection'
import GoalsSection from '../../../components/sections/GoalsSection'
import GallerySection from '../../../components/sections/GallerySection'
import TeamSection from '../../../components/sections/TeamSection'


const Home = ({ setActiveView }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Text Slider */}
      <HeroSection />
      
      {/* GIS Capability Banner with Division and District Hover */}
      <GISSection />
      
      {/* Notice Section with 3 list views and More option */}
      <NoticeSection setActiveView={setActiveView} />
      
      {/* About Section explaining platform's mission */}
      <AboutSection />
      
      {/* Goals and Objectives overview as service boxes */}
      <GoalsSection />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Project Employee Section (4 employees with More option) */}
      <TeamSection />
      

    </div>
  )
}

export default Home
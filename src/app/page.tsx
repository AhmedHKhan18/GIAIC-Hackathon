import HeroSection from '@/app/components/HeroSection'
import PartnerLogos from '@/app/components/PartnerLogos'
import FeaturedProducts from '@/app/components/FeaturedProducts'
import TopCategories from '@/app/components/TopCategories'
import ExploreStyles from '@/app/components/ExploreStyles'
import OurProducts from '@/app/components/OurProducts'
import TopBanner from '@/app/components/TopBanner'
import Footer from '@/app/components/Footer'
import Header from './components/Header'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow px-48">
        <HeroSection />
        <PartnerLogos />
        <div className="container mx-auto px-4">
          <FeaturedProducts />
          <TopCategories />
          <ExploreStyles />
          <OurProducts />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

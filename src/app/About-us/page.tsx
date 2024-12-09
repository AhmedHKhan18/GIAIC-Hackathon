import Header from "@/app/components/Header"
import { HeroSection } from "@/app/components/about-hero-section"
import { FeaturesSection } from "@/app/components/about-features-section"
import { ProductsSection } from "@/app/components/about-product-section"
import Footer from "@/app/components/Footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48">
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
      </main>
      <Footer />
    </>
  )
}

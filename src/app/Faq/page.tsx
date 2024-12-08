import Header from "@/app/components/Header"
import { FAQSection } from "@/app/components/faq-section"
import Footer from "@/app/components/Footer"

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="px-48">
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}


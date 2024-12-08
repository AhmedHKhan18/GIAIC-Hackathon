import Header from "@/app/components/Header"
import { ContactForm } from "@/app/components/contact-form"
import { ContactInfo } from "@/app/components/contact-info"
import { FeaturesSection } from "@/app/components/features-section"
import Footer from "@/app/components/Footer"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl font-bold mb-4">Get In Touch With Us</h1>
            <p className="text-gray-600">
              For More Information About Our Product & Services. Please Feel Free To Drop Us
              An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
        <FeaturesSection />
      </main>
      <Footer />
    </>
  )
}


import Image from "next/image"
import Zipper from '@/app/assets/logos/Logo.png'
import Pipedrive from '@/app/assets/logos/Logo (1).png'
import CIBBank from '@/app/assets/logos/Logo (2).png'
import Startup from '@/app/assets/logos/Logo (3).png'
import EventTrust from '@/app/assets/logos/Logo (4).png'
import Monohub from '@/app/assets/logos/Logo (5).png'
import Moz from '@/app/assets/logos/Logo (6).png'

const partners = [
    Zipper, Pipedrive, CIBBank, Startup, EventTrust, Monohub, Moz
  ]
  
  export default function PartnerLogos() {
    return (
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
            {partners.map((partner):any => (
              <Image src={partner} alt="partners"/>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  
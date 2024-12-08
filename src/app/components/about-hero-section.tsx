import Image from "next/image"
import Mainchair from '@/app/assets/mainchair.png'

export function HeroSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-teal-600 text-white p-8 md:p-12 lg:p-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          About Us - Comforty
        </h1>
        <p className="text-lg mb-8 text-teal-50">
          At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
        </p>
        <button className="text-white border-white hover:bg-white hover:text-teal-600 p-2 border bg-teal-700 rounded">
          View Collection
        </button>
      </div>
      <div className="relative min-h-[400px] bg-gray-100">
        <Image
          src={Mainchair}
          alt="White chair"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Product from '@/app/assets/Product-Image.png'

export default function HeroSection() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-sm font-medium text-gray-500 mb-4">WELCOME TO COMFORTY</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Furniture Collection For Your Interior.
            </h1>
            <Link 
              href="/shop"
              className="inline-flex items-center bg-teal-500 text-white font-medium py-3 px-8 rounded-md hover:bg-teal-600 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <Image
              src={Product}
              alt="Featured Chair"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


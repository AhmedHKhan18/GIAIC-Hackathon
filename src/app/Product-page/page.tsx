'use client'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import Header from '@/app/components/Header'
import Newsletter from '@/app/components/Newsletter'
import InstagramFeed from '@/app/components/InstagramFeed'
import Footer from '@/app/components/Footer'
import { useAppContext } from '../context/useContext'
import ProductCard from '../components/ProductCard'

export default function ProductsPage() {
  const { products } = useAppContext()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 py-8">
        <h1 className="text-2xl font-semibold mb-8">All Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product:any) => (
              <ProductCard key={product._id} product={product} />
          ))}
        </div>
        
        <Newsletter />
        <InstagramFeed />
      </main>
      
      <Footer />
    </div>
  )
}


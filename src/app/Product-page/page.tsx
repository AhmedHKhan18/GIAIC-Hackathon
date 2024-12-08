import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import TopBanner from '@/app/components/TopBanner'
import Header from '@/app/components/Header'
import Newsletter from '@/app/components/Newsletter'
import InstagramFeed from '@/app/components/InstagramFeed'
import Footer from '@/app/components/Footer'
import FirstChair from '@/app/assets/chairs/20.png'
import SecondChair from '@/app/assets/chairs/Image (1).png'
import ThirdChair from '@/app/assets/chairs/Image (2).png'
import FourthChair from '@/app/assets/chairs/Image (3).png'
import FifthChair from '@/app/assets/chairs/Image (5).png'
import SixthChair from '@/app/assets/chairs/02.png'
import SeventhChair from '@/app/assets/chairs/21.png'
import EightChair from '@/app/assets/chairs/Image (4).png'
import NinthChair from '@/app/assets/chairs/Image (6).png'

const products = [
  {
    id: 1,
    name: 'Library Stool Chair',
    price: 20,
    image: FirstChair,
    tag: 'New'
  },
  {
    id: 2,
    name: 'Library Stool Chair',
    price: 20,
    image: SecondChair,
    tag: 'Sales',
    originalPrice: 60
  },
  {
    id: 3,
    name: 'Library Stool Chair',
    price: 20,
    image: ThirdChair
  },
  {
    id: 4,
    name: 'Library Stool Chair',
    price: 20,
    image: FourthChair
  },
  {
    id: 5,
    name: 'Library Stool Chair',
    price: 20,
    image: FifthChair,
    tag: 'New'
  },
  {
    id: 6,
    name: 'Library Stool Chair',
    price: 20,
    image: SixthChair,
    tag: 'Sales',
    originalPrice: 60
  },
  {
    id: 7,
    name: 'Library Stool Chair',
    price: 20,
    image: SeventhChair
  },
  {
    id: 8,
    name: 'Library Stool Chair',
    price: 20,
    image: FirstChair
  },
  {
    id: 9,
    name: 'Library Stool Chair',
    price: 20,
    image: EightChair,
    tag: 'New'
  },
  {
    id: 10,
    name: 'Library Stool Chair',
    price: 20,
    image: SecondChair,
    tag: 'Sales',
    originalPrice: 60
  },
  {
    id: 11,
    name: 'Library Stool Chair',
    price: 20,
    image: ThirdChair
  },
  {
    id: 12,
    name: 'Library Stool Chair',
    price: 20,
    image: NinthChair
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-48 py-8">
        <h1 className="text-2xl font-semibold mb-8">All Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.tag && (
                  <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium text-white rounded ${
                    product.tag === 'New' ? 'bg-emerald-500' : 'bg-orange-500'
                  }`}>
                    {product.tag}
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <button className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Newsletter />
        <InstagramFeed />
      </main>
      
      <Footer />
    </div>
  )
}


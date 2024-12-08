'use client'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  image: any
  tag?: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={{pathname: `/Details/${product.id}`, query: {name: product.name, image: encodeURIComponent(product.image.src), price: product.price}}}>
    <div className="group relative bg-gray-50 rounded-lg overflow-hidden">
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
          <span className="font-medium">${product.price}</span>
          <button className={`flex items-center justify-center w-8 h-8 rounded ${product.tag === 'New' ? 'bg-teal-500' : 'bg-gray-300'} text-white hover:bg-teal-600 transition-colors`}>
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    </Link>
  )
}


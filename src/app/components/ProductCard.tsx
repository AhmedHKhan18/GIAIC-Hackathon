'use client'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  _id: number
  title: string
  price: number
  image: any
  tag?: string
}

export default function ProductCard({ product }: { product: Product }) {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter()

   useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(savedCart);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    router.push('/Cart')
  };

  return (
    <Link href={{pathname: `/Details/${product._id}`, query: {title: product.title, image: encodeURIComponent(urlFor(product.image)), price: product.price}}}>
    <div className="group relative bg-gray-50 rounded-lg overflow-hidden">
      <div className="relative aspect-square">
       
      {product.image?.asset?._ref ? (
       <Image
       src={urlFor(product.image)}
       alt={product.title}
       fill
       className="object-cover group-hover:scale-105 transition-transform duration-300"
     />
      ) : (
        <p>No valid image available</p>
      )}

        
        {product.tag && (
          <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium text-white rounded ${
            product.tag === 'New' ? 'bg-emerald-500' : 'bg-orange-500'
          }`}>
            {product.tag}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-sm font-medium">{product.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-medium">${product.price}</span>
          <button className={`flex items-center justify-center w-8 h-8 rounded ${product.tag === 'New' ? 'bg-teal-500' : 'bg-gray-300'} text-white hover:bg-teal-600 transition-colors`} onClick={handleAddToCart}>
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    </Link>
  )
}


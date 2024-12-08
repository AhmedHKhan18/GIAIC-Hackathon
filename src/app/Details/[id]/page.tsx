'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import Header from '@/app/components/Header'
import FeaturedProducts from '@/app/components/FeaturedProducts'
import Footer from '@/app/components/Footer'
import { useSearchParams } from "next/navigation";
import Img from '@/app/assets/Product-Image.png'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function ProductPage() {
    const [cart, setCart] = useState<any[]>([]);
    console.log("🚀 ~ ProductPage ~ cart:", cart)
  const searchParams = useSearchParams();
  // In a real application, you would fetch the product data based on the slug
  const name = searchParams.get("name"); 
  const price = searchParams.get("price");
  const image = decodeURIComponent(searchParams.get('image') || '');
  const id = searchParams.get("id");
  const product = {
    name: name || 'Unknown',
    price: price || 40,
    image: image || Img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing'
  }

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-48 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-pink-100 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold mb-4">{product.name}</h1>
            <div className="bg-teal-500 text-white font-semibold py-1 px-3 rounded-full inline-block w-28 mb-4">
              ${product.price} USD
            </div>
            <hr/>
            <p className="text-gray-600 mb-6">{product.description}</p>
              <Link href={'Cart'}>
            <button className="bg-teal-500 text-white font-semibold py-3 px-4 rounded-md hover:bg-teal-600 transition-colors flex items-center justify-center w-40" onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add To Cart
            </button>
              </Link>
          </div>
        </div>
        
        <FeaturedProducts />
      </main>
      
      <Footer />
    </div>
  )
}


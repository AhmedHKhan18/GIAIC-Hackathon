'use client'
import Link from 'next/link';
// import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import ShoppingCart from '@/app/components/Shopping-cart'
import { useEffect, useState } from 'react';

export default function Header() {
    const [cart, setCart] = useState([]);

useEffect(()=>{
  const cartData = localStorage.getItem('cart');
  if(cartData){
    setCart(JSON.parse(cartData))
  }
},[])

  return (
    <header className="border-b">
      {/* Top Bar */}
      <div className="bg-[#272343] text-white text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <p>✓ Free Shipping On All Orders Over $50</p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:underline">Eng</Link>
            <Link href={'Faq'} className="hover:underline">Faqs</Link>
            <Link href="#" className="hover:underline">Need Help</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#F0F2F3]">
        <div className="container mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-44 flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-teal-500 flex items-center">
            <span className="inline-block mr-2">
            <Image src={require('../assets/logos/LogoIcon.png')} alt='logo'/>
            </span>
            Comforty
          </Link>

          

          {/* Contact and Cart */}
          <div className="flex items-center space-x-6">
            <Link href="/cart" className="relative">
              {/* <ShoppingCart className="w-6 h-6 text-gray-700" /> */}
              <ShoppingCart cart={cart}/>
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </nav>
        <div className='flex justify-center items-center gap-4 sm:gap-8 md:gap-16 lg:gap-40 xl:gap-96 p-4'>
{/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
            <li><Link href="/" className="hover:text-teal-500">Home</Link></li>
            <li><Link href="/" className="hover:text-teal-500">Shop</Link></li>
            <li><Link href={'Product-page'} className="hover:text-teal-500">Product</Link></li>
            <li><Link href="/" className="hover:text-teal-500">Pages</Link></li>
            <li><Link href={'About-us'} className="hover:text-teal-500">About</Link></li>
          </ul>
            <p className="hidden md:block text-sm text-gray-600">Contact: <span className='font-bold'>(808) 555-0111</span></p>
        </div>
    </header>
  );
}

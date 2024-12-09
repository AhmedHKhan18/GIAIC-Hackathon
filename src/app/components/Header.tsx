'use client'
import Link from 'next/link';
// import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import ShoppingCart from '@/app/components/Shopping-cart'
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [cart, setCart] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

useEffect(()=>{
  const cartData = JSON.parse(localStorage.getItem('cart') || '[]')
  if(cartData){
    setCart(cartData)
  }
},[])

const menuItems = [
  { name: "Home", href: "/", active: true },
  { name: "Products Page", href: "/Product-page"},
  { name: "Cart", href: "/Details/Cart" },
  { name: "Product Details", href: "/Details" },
  { name: "Contact Us", href: "/Contact-us" },
  { name: "About Us", href: "/About-us" },
  { name: "FAQ", href: "/Faq" },
]

  return (
    <header className="border-b">
      {/* Top Bar */}
      <div className="bg-[#272343] text-white text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <p>✓ Free Shipping On All Orders Over $50</p>
          <div className="flex items-center lg:space-x-6 invisible lg:visible">
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
            <Link href="/Details/Cart" className="relative">
              {/* <ShoppingCart className="w-6 h-6 text-gray-700" /> */}
              <ShoppingCart cart={cart}/>
              {/* <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span> */}
            </Link>
          <button
          className="lg:hidden text-teal-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* {isMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
          <Menu size={24} />
        </button>
        <ul className={`
          fixed inset-0 bg-[#fff] flex flex-col items-center justify-center py-10 gap-6
          transition-all duration-300 ease-in-out w-[100%] lg:hidden z-10
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}>
          <button
         className="lg:hidden text-teal-500 z-20"
         onClick={() => setIsMenuOpen(!isMenuOpen)}
       >
         <X size={50} /> 
       </button>
        {/* <div className='gap-6'> */}
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-3xl leading-6 ${
                  item.active ? "text-teal-500 font-bold" : "text-[#FF9F0D]"
                } font-inter hover:text-[#FF9F0D] transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        {/* </div> */}
        </ul>
          </div>
        </div>
      </nav>
        <div className='flex justify-center items-center gap-4 sm:gap-8 md:gap-16 lg:gap-44 xl:gap-96 p-4'>
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

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function MainNav() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-teal-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 2L1 21h22L12 2zm0 4.83L19.18 19H4.82L12 6.83z" />
              </svg>
            </span>
            <span className="text-xl font-bold">Comforty</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-teal-500">Home</Link>
            <Link href="/shop" className="hover:text-teal-500">Shop</Link>
            <Link href="/product" className="hover:text-teal-500">Product</Link>
            <Link href="/pages" className="hover:text-teal-500">Pages</Link>
            <Link href="/about" className="hover:text-teal-500">About</Link>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:block text-sm">Contact: (808) 555-0111</span>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-teal-500 text-white text-xs rounded-full">
                3
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}


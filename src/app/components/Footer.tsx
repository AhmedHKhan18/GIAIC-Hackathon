import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import CardLogo from '@/app/assets/logos/Group.png'

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-teal-500">
                <Image src={require('../assets/logos/LogoIcon.png')} alt='logo'/>
              </span>
              <span className="text-xl font-bold">Comforty</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
              Cras egestas purus
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-teal-500">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-500">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-500">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-500">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">CATEGORY</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-teal-500">Sofa</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-teal-500">Armchair</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-teal-500">Wing Chair</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-teal-500">Desk Chair</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-teal-500">Wooden Chair</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-teal-500">Park Bench</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-teal-500">Help & Support</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-teal-500">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-teal-500">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-teal-500">Help</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">NEWSLETTER</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              />
              <button
                type="submit"
                className="w-full mt-2 px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded hover:bg-teal-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2020 - Shopify. Designed & Develop by Zakirsoft
            </p>
            {/* <div className="flex items-center gap-2">
              <Image
                src={CardLogo}
                alt="PayPal"
                width={50}
                height={30}
                className="h-8 w-auto"
              />
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}


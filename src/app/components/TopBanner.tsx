import Link from 'next/link'

export default function TopBanner() {
  return (
    <div className="bg-[#1C1C1C] text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <p>✓ Free Shipping On All Orders Over $50</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-gray-300">Eng</Link>
          <span>•</span>
          <Link href="#" className="hover:text-gray-300">Faqs</Link>
          <span>•</span>
          <Link href="#" className="hover:text-gray-300">Need Help</Link>
        </div>
      </div>
    </div>
  )
}


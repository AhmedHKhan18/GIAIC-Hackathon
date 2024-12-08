import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

const products = [
  { id: 1, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg', tag: 'New' },
  { id: 2, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg', tag: 'Sales' },
  { id: 3, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg' },
  { id: 4, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg' },
  { id: 5, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg', tag: 'New' },
  { id: 6, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg', tag: 'Sales' },
  { id: 7, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg' },
  { id: 8, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg' },
  { id: 9, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg', tag: 'New' },
  { id: 10, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg', tag: 'Sales' },
  { id: 11, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg' },
  { id: 12, name: 'Library Stool Chair', price: 20, image: '/placeholder.svg' },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-64 object-cover" />
            {product.tag && (
              <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded ${
                product.tag === 'New' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}>
                {product.tag}
              </span>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">${product.price}</p>
              <button className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import Sofa from '@/app/assets/Large.png'
import FirstChair from '@/app/assets/Parent.png'
import SecondChair from '@/app/assets/Parent-1.png'

const products = [
  {
    name: "The Poplar suede sofa",
    price: 99.00,
    image: Sofa
  },
  {
    name: "The Dandy chair",
    price: 99.00,
    image: SecondChair
  },
  {
    name: "The Dandy chair",
    price: 99.00,
    image: FirstChair
  }
]

export function ProductsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Our Popular Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link 
              key={index} 
              href="#" 
              className="group"
            >
              <div className="relative aspect-[4/3] mb-4 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity"
                />
              </div>
              <h3 className="font-medium mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

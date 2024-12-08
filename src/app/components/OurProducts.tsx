import ProductCard from './ProductCard'
import FirstChair from '@/app/assets/chairs/20.png'
import SecondChair from '@/app/assets/chairs/Image (1).png'
import ThirdChair from '@/app/assets/chairs/Image (2).png'
import FourthChair from '@/app/assets/chairs/Image (3).png'
import FifthChair from '@/app/assets/chairs/Image (4).png'
import SixthChair from '@/app/assets/chairs/02.png'
import SeventhChair from '@/app/assets/chairs/21.png'

const products = [
  { id: 1, name: 'Library Stool Chair', price: 20, image: FirstChair, tag: 'New' },
  { id: 2, name: 'Library Stool Chair', price: 20, image: SecondChair, tag: 'Sale' },
  { id: 3, name: 'Library Stool Chair', price: 20, image: ThirdChair },
  { id: 4, name: 'Library Stool Chair', price: 20, image: FourthChair },
  { id: 5, name: 'Library Stool Chair', price: 20, image: FifthChair, tag: 'New' },
  { id: 6, name: 'Library Stool Chair', price: 20, image: SixthChair, tag: 'Sale' },
  { id: 7, name: 'Library Stool Chair', price: 20, image: SeventhChair },
  { id: 8, name: 'Library Stool Chair', price: 20, image: FirstChair },
]

export default function OurProducts() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}


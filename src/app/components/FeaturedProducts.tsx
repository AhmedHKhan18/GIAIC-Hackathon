import ProductCard from './ProductCard'
import FirstChair from '@/app/assets/chairs/Image.png'
import SecondChair from '@/app/assets/chairs/Image (1).png'
import ThirdChair from '@/app/assets/chairs/Image (2).png'
import FourthChair from '@/app/assets/chairs/Image (3).png'

const featuredProducts = [
  { id: 1, name: 'Library Stool Chair', price: 20, image: FirstChair, tag: 'New' },
  { id: 2, name: 'Library Stool Chair', price: 20, image: SecondChair, tag: 'Sale' },
  { id: 3, name: 'Library Stool Chair', price: 20, image:  ThirdChair},
  { id: 4, name: 'Library Stool Chair', price: 20, image:  FourthChair},
]

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}


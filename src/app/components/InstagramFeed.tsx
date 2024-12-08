import Image from 'next/image'
import FirstChair from '@/app/assets/chairs/Image (5).png'
import SecondChair from '@/app/assets/chairs/Image (6).png'
import ThirdChair from '@/app/assets/chairs/Image (1).png'
import FourthChair from '@/app/assets/chairs/20.png'
import FifthChair from '@/app/assets/chairs/Image (2).png'
import SixthChair from '@/app/assets/chairs/Image (6).png'


const instagramImages = [
  FirstChair,
  SecondChair,
  ThirdChair,
  FourthChair,
  FifthChair,
  SixthChair,
]

export default function InstagramFeed() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8">Follow Products And Discounts On Instagram</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {instagramImages.map((src, index) => (
          <div key={index} className="relative aspect-square">
            <Image src={src} alt={`Instagram image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  )
}


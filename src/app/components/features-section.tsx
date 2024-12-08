import { Trophy, Shield, Headphones } from 'lucide-react'

export function FeaturesSection() {
  return (
    <div className="bg-gray-50 py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Trophy className="w-12 h-12 text-black mb-4" />
            <h3 className="text-lg font-semibold mb-2">High Quality</h3>
            <p className="text-gray-600">crafted from top materials</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-black mb-4" />
            <h3 className="text-lg font-semibold mb-2">Warranty Protection</h3>
            <p className="text-gray-600">Over 2 years</p>
          </div>
          <div className="flex flex-col items-center">
            <Headphones className="w-12 h-12 text-black mb-4" />
            <h3 className="text-lg font-semibold mb-2">24 / 7 Support</h3>
            <p className="text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  )
}


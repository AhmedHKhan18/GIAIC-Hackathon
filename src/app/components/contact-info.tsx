import { MapPin, Phone, Clock } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-black mt-1" />
        <div>
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="text-gray-600">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-black mt-1" />
        <div>
          <h3 className="font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">
            Mobile: +(84) 546-6789<br />
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Clock className="w-6 h-6 text-black mt-1" />
        <div>
          <h3 className="font-semibold mb-2">Working Time</h3>
          <p className="text-gray-600">
            Monday-Friday: 9:00 - 22:00<br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  )
}


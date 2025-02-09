import { MapPin, Calendar, Users } from 'lucide-react'
import Button from '../shared/Button'

export default function SearchBox() {
  return (
    <div className="bg-white rounded-lg p-4 w-full max-w-4xl shadow-lg mx-auto -mt-20 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <MapPin className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Where to?"
            className="w-full p-2 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Check in"
            className="w-full p-2 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Check out"
            className="w-full p-2 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Users className="text-gray-400" />
          <select className="w-full p-2 focus:outline-none">
            <option>2 Adults</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
          </select>
        </div>
      </div>
      <Button className="w-full mt-4">Find Your Next Adventure</Button>
    </div>
  )
}

// components/home/Destinations.tsx
import { ArrowRight } from 'lucide-react'

const destinations = [
  {
    id: 1,
    title: 'Dubai, UAE',
    description: 'Experience luxury in the heart of the desert',
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Tokyo, Japan',
    description: 'Immerse in tradition meets innovation',
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'Cape Town, South Africa',
    description: 'Where mountains meet the ocean',
    image: '/api/placeholder/400/300'
  }
]


import { Search, MapPin, Calendar, Users } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Private Tours',
    description: 'Personalized journeys with expert guides',
    icon: <Search />
  },
  {
    id: 2,
    title: 'Cultural Immersion',
    description: 'Connect with local traditions and customs',
    icon: <MapPin />
  },
  {
    id: 3,
    title: 'Luxury Stays',
    description: 'Experience world-class accommodations',
    icon: <Calendar />
  },
  {
    id: 4,
    title: 'Adventure Expeditions',
    description: 'Challenge yourself in stunning locations',
    icon: <Users />
  }
]

export default function Experiences() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Global Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {experiences.map((experience) => (
            <div key={experience.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-emerald-600 mb-4">
                {experience.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
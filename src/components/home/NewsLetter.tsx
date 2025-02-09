import Button from '../shared/Button'

export default function Newsletter() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Global Community</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to receive exclusive travel offers and insider tips from around the world
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </section>
  )
}
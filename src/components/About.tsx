"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Users, Globe, Shield, Award, Heart } from "lucide-react"

export default function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "13+", icon: Calendar },
    { label: "Happy Travelers", value: "50K+", icon: Users },
    { label: "Destinations", value: "100+", icon: Globe },
  ]

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our top priority. We maintain the highest standards of security throughout your journey."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of your travel experience, from planning to execution."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our team's passion for travel ensures authentic and memorable experiences for every traveler."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-primary/90 to-primary flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/states/TajMahal.jpg"
            alt="About Us Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent">
              Discover India's Magic
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Since 2010, we&apos;ve been crafting unforgettable travel experiences across India, 
              combining luxury with authenticity to create memories that last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="space-y-6 text-lg">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-primary">Global Borders Travels</span> began with a simple yet powerful vision: 
                to showcase the incredible diversity and beauty of India to travelers from around the world.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What started as a small team of <span className="font-semibold text-primary">passionate travel enthusiasts</span> has 
                grown into a leading travel company, specializing in creating authentic Indian experiences that go beyond the ordinary.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to innovate and expand our offerings while maintaining our core values of 
                <span className="font-semibold text-primary"> authenticity, sustainability, and exceptional service</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-xl bg-gradient-to-b from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


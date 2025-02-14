"use client"
import { Search, MapPin, Calendar, Users } from 'lucide-react'
import { Card, CardContent, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    title: 'Private Tours',
    description: 'Personalized journeys with expert guides',
    icon: <Search className="w-8 h-8" />,
    color: 'from-emerald-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Cultural Immersion',
    description: 'Connect with local traditions and customs',
    icon: <MapPin className="w-8 h-8" />,
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 3,
    title: 'Luxury Stays',
    description: 'Experience world-class accommodations',
    icon: <Calendar className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Adventure Expeditions',
    description: 'Challenge yourself in stunning locations',
    icon: <Users className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500'
  }
]

export default function Experiences() {
  const theme = useTheme()
  
  return (
    <section className="bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
          Global Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <motion.div 
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: theme.shadows[4],
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <CardContent className="text-center p-6">
                  <div className={`mb-4 inline-block p-4 rounded-2xl bg-gradient-to-r ${experience.color}`}>
                    {experience.icon}
                  </div>
                  <Typography 
                    variant="h5" 
                    className="font-bold mb-2"
                    sx={{ color: theme.palette.text.primary }}
                  >
                    {experience.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {experience.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
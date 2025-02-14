'use client'
import React, { useState, useEffect } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  IconButton,
  Rating,
  useTheme,
  useMediaQuery,
  Fade
} from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "Our trip to Himachal Pradesh was absolutely magical! The tour guides were knowledgeable and the itinerary was perfectly planned.",
    image: "/images/states/mysore.jpg"
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi",
    rating: 5,
    comment: "Exploring the backwaters of Kerala was a dream come true. The houseboat experience was unforgettable!",
    image: "/images/states/delhi.jpg"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "London",
    rating: 5,
    comment: "The Golden Triangle tour exceeded all expectations. From the Taj Mahal to the pink city of Jaipur, every moment was special.",
    image: "/images/states/rajasthan.jpg"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left'|'right'>('right')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const itemsPerPage = isMobile ? 1 : 3

  const handleNext = () => {
    setDirection('right')
    setCurrentIndex(prev => 
      prev + itemsPerPage >= testimonials.length ? 0 : prev + 1
    )
  }

  const handlePrev = () => {
    setDirection('left')
    setCurrentIndex(prev => 
      prev === 0 ? testimonials.length - itemsPerPage : prev - 1
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <Box sx={{ 
      py: 8, 
      backgroundColor: '#f8fafc',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{ 
            mb: 6, 
            fontWeight: 'bold',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          What Our Travelers Say
        </Typography>

        <Box sx={{ position: 'relative', minHeight: 400 }}>
          <AnimatePresence initial={false} custom={direction}>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                position: 'absolute',
                width: '100%'
              }}
            >
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ 
                    opacity: 0, 
                    x: direction === 'right' ? 100 : -100 
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ 
                    opacity: 0, 
                    x: direction === 'right' ? -100 : 100 
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ width: isMobile ? '100%' : '33%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      boxShadow: 3,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          src={testimonial.image}
                          sx={{ 
                            width: 56, 
                            height: 56, 
                            mr: 2,
                            boxShadow: 2
                          }}
                        />
                        <Box>
                          <Typography variant="h6" component="div">
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.location}
                          </Typography>
                        </Box>
                      </Box>
                      <Rating 
                        value={testimonial.rating} 
                        readOnly 
                        sx={{ 
                          mb: 2,
                          '& .MuiRating-icon': {
                            color: theme.palette.primary.main
                          }
                        }} 
                      />
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ fontStyle: 'italic' }}
                      >
                        `quot;{testimonial.comment}``
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </AnimatePresence>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              boxShadow: 3,
              '&:hover': { 
                backgroundColor: 'white',
                transform: 'translateY(-50%) scale(1.1)'
              },
              transition: 'all 0.3s'
            }}
          >
            <ArrowBack />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              boxShadow: 3,
              '&:hover': { 
                backgroundColor: 'white',
                transform: 'translateY(-50%) scale(1.1)'
              },
              transition: 'all 0.3s'
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}
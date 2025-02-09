"use client"
import React, { useState } from 'react';
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
  useMediaQuery
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "Our trip to Himachal Pradesh was absolutely magical! The tour guides were knowledgeable and the itinerary was perfectly planned.",
    image: "/api/placeholder/64/64"
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi",
    rating: 5,
    comment: "Exploring the backwaters of Kerala was a dream come true. The houseboat experience was unforgettable!",
    image: "/api/placeholder/64/64"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "London",
    rating: 5,
    comment: "The Golden Triangle tour exceeded all expectations. From the Taj Mahal to the pink city of Jaipur, every moment was special.",
    image: "/api/placeholder/64/64"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const itemsPerPage = isMobile ? 1 : 3;

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= testimonials.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - itemsPerPage : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, color: '#1a237e', fontWeight: 'bold' }}
        >
          What Our Travelers Say
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {visibleTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                sx={{
                  maxWidth: 345,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={testimonial.image}
                      sx={{ width: 56, height: 56, mr: 2 }}
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
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body1" color="text.secondary">
                    "{testimonial.comment}"
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              '&:hover': { backgroundColor: '#f5f5f5' }
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
              '&:hover': { backgroundColor: '#f5f5f5' }
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
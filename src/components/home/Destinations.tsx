import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Box } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const indianDestinations = [
  {
    id: 1,
    title: 'Goa',
    description: 'Sun-kissed beaches and vibrant nightlife',
    image: '/images/states/goa.jpg',
    highlights: ['Calangute Beach', 'Old Goa Churches', 'Spice Plantations']
  },
  {
    id: 2,
    title: 'Jammu & Kashmir',
    description: 'Paradise on Earth with stunning valleys',
    image: '/images/states/j&k.jpg',
    highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam']
  },
  {
    id: 3,
    title: 'Himachal Pradesh',
    description: 'Adventure in the heart of Himalayas',
    image: '/images/states/darjling.jpg',
    highlights: ['Shimla', 'Manali', 'Dharamshala']
  },
  {
    id: 4,
    title: 'Uttarakhand',
    description: 'Spiritual journeys and mountain retreats',
    image: '/images/states/nagaland.jpg',
    highlights: ['Rishikesh', 'Haridwar', 'Nainital']
  },
  {
    id: 5,
    title: 'Delhi',
    description: 'Where history meets modernity',
    image: '/images/states/delhi.jpg',
    highlights: ['Red Fort', 'Qutub Minar', 'India Gate']
  },
  {
    id: 6,
    title: 'Gujarat',
    description: 'Rich cultural heritage and wildlife',
        image: '/images/states/Megah.jpg',
    highlights: ['Rann of Kutch', 'Gir Forest', 'Sabarmati Ashram']
  }
];

export default function EnhancedDestinations() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#1a237e'
          }}
        >
          Discover Incredible India
        </Typography>
        
        <Grid container spacing={4}>
          {indianDestinations.map((destination) => (
            <Grid item xs={12} sm={6} md={4} key={destination.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                  alt={destination.title}
                  sx={{
                    objectFit: 'cover'
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ color: '#1a237e' }}>
                    {destination.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {destination.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" color="primary" sx={{ display: 'flex', alignItems: 'center' }}>
                      Explore More <ArrowForward sx={{ ml: 1 }} />
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
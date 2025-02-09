"use client"
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { useState } from 'react';
const IndiaMap = '/india.svg';

const destinations = [
  {
    id: 1,
    state: 'Goa',
    coordinates: { x: 30, y: 70 },
    highlights: ['Calangute Beach', 'Old Goa Churches', 'Dudhsagar Falls']
  },
  {
    id: 2,
    state: 'Jammu & Kashmir',
    coordinates: { x: 40, y: 10 },
    highlights: ['Dal Lake', 'Gulmarg', 'Vaishno Devi']
  },
  {
    id: 3,
    state: 'Himachal Pradesh',
    coordinates: { x: 45, y: 20 },
    highlights: ['Shimla', 'Manali', 'Dharamshala']
  },
  {
    id: 4,
    state: 'Uttarakhand',
    coordinates: { x: 50, y: 25 },
    highlights: ['Rishikesh', 'Kedarnath', 'Nainital']
  },
  {
    id: 5,
    state: 'Delhi',
    coordinates: { x: 45, y: 35 },
    highlights: ['Red Fort', 'Qutub Minar', 'India Gate']
  }
];

export default function InteractiveMap() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [hoveredDestination, setHoveredDestination] = useState(null);

  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 6, textAlign: 'center', color: '#1a237e' }}>
          Explore Destinations
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper
              elevation={3}
              sx={{
                position: 'relative',
                height: 600,
                backgroundColor: '#f5f5f5',
                overflow: 'hidden'
              }}
            >
              {/* India Map SVG would go here - simplified for example */}
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <img src={IndiaMap} alt="India Map" style={{ width: '100%', height: '100%' }} />
                {destinations.map((dest: any) => (
                  <LocationOn
                    key={dest.id}
                    sx={{
                      position: 'absolute',
                      left: `${dest.coordinates.x}%`,
                      top: `${dest.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)',
                      color: selectedDestination?.id === dest.id ? '#f50057' : '#1a237e',
                      fontSize: hoveredDestination?.id === dest.id ? 40 : 32,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#f50057',
                        fontSize: 40
                      }
                    }}
                    onMouseEnter={() => setHoveredDestination(dest)}
                    onMouseLeave={() => setHoveredDestination(null)}
                    onClick={() => setSelectedDestination(dest)}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                backgroundColor: selectedDestination ? 'white' : '#f5f5f5'
              }}
            >
              {selectedDestination ? (
                <Box>
                  <Typography variant="h5" sx={{ mb: 2, color: '#1a237e' }}>
                    {selectedDestination.state}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Discover the wonders of {selectedDestination.state}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Top Attractions:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {selectedDestination.highlights.map((highlight: any, index: any) => (   
                      <Typography
                        component="li"
                        key={index}
                        sx={{ mb: 1 }}
                      >
                        {highlight}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ) : (
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                  <Typography variant="h6" color="text.secondary">
                    Select a destination on the map to learn more
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
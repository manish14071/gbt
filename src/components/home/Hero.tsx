"use client"
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { ExploreOutlined } from '@mui/icons-material';

export default function EnhancedHero() {
  return (
    <Box sx={{ 
      position: 'relative', 
      height: '100vh',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1
      }
    }}>
      <Box
        component="video"
        autoPlay
        muted
        loop
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="/api/placeholder/video" type="video/mp4" />
      </Box>
      
      <Container 
        maxWidth="lg" 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Discover India's Magic
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            From snow-capped peaks to sun-soaked beaches, embark on a journey through incredible India
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            startIcon={<ExploreOutlined />}
            sx={{
              backgroundColor: '#ff9800',
              '&:hover': {
                backgroundColor: '#f57c00'
              },
              py: 2,
              px: 4,
              borderRadius: 2
            }}
          >
            Start Your Journey
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
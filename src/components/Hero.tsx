"use client"
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { ExploreOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function EnhancedHero() {
  return (
    <Box sx={{ 
      position: 'relative', 
      height: { xs: '90vh', md: '100vh' },
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50px',
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M1000,100 V0.9 C914.6,59.4 807.3,29.1 694,29.1 C579.9,29.1 472.5,59.4 347.7,100 H1000z' fill='%23ffffff'/%3E%3C/svg%3E")`,
        zIndex: 2
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
        <source src="/hero-video.mp4" type="video/mp4" />
        <Box
          component="img"
          src="/hero-fallback.jpg"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt="Hero background"
        />
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 800,
                mb: 3,
                textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
                lineHeight: 1.2
              }}
            >
              Discover India&apos;s
              <Box component="span" sx={{ 
                background: 'linear-gradient(45deg, #ff9800 30%, #ff6d00 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                ml: 1.5
              }}>
                Magic
              </Box>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                mb: 6,
                maxWidth: '800px',
                mx: 'auto',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontWeight: 400
              }}
            >
              From snow-capped peaks to sun-soaked beaches, embark on a journey through incredible India
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              startIcon={<ExploreOutlined />}
              sx={{
                background: 'linear-gradient(45deg, #ff9800 30%, #ff6d00 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #ff6d00 30%, #ff9800 90%)'
                },
                py: 2,
                px: 6,
                borderRadius: 4,
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: 4,
                transition: 'all 0.3s ease'
              }}
            >
              Start Your Journey
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
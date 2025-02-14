"use client"
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function EnhancedFooter() {
  return (
    <Box sx={{ 
      backgroundColor: '#0d47a1', 
      color: 'white', 
      pt: 8, 
      pb: 4,
      background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, fontSize: '1.25rem' }}>
                Incredible India Travel
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                Discover the rich heritage, diverse cultures, and breathtaking landscapes of India. 
                Let us guide you through an unforgettable journey across this magnificent country.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton 
                      color="inherit" 
                      sx={{ 
                        border: '1px solid rgba(255,255,255,0.2)', 
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                      }}
                    >
                      <Icon />
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, fontSize: '1.25rem' }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {['About Us', 'Destinations', 'Tours', 'Blog', 'Contact'].map((item, index) => (
                  <Link
                    key={item}
                    href="#"
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      opacity: 0.9,
                      '&:hover': { 
                        color: '#ff9800',
                        transform: 'translateX(8px)',
                        opacity: 1
                      },
                      transition: 'all 0.3s ease',
                      width: 'fit-content'
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, fontSize: '1.25rem' }}>
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationOn sx={{ color: '#ff9800' }} />
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    123 Tourism Street, New Delhi, India
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Email sx={{ color: '#ff9800' }} />
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    info@incredibleindia.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Phone sx={{ color: '#ff9800' }} />
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    +91 123-456-7890
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        
        <Divider sx={{ 
          my: 6, 
          borderColor: 'rgba(255,255,255,0.15)', 
          width: '80%', 
          mx: 'auto' 
        }} />
        
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            opacity: 0.8,
            fontSize: '0.875rem'
          }}
        >
          © {new Date().getFullYear()} Incredible India Travel. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
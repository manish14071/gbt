import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone, LocationOn } from '@mui/icons-material';

export default function EnhancedFooter() {
  return (
    <Box sx={{ backgroundColor: '#1a237e', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Incredible India Travel
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Discover the rich heritage, diverse cultures, and breathtaking landscapes of India. Let us guide you through an unforgettable journey across this magnificent country.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" size="small">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" size="small">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['About Us', 'Destinations', 'Tours', 'Blog', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': { color: '#ff9800' }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn />
                <Typography variant="body2">
                  123 Tourism Street, New Delhi, India
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email />
                <Typography variant="body2">
                  info@incredibleindia.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone />
                <Typography variant="body2">
                  +91 123-456-7890
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Incredible India Travel. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
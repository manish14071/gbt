"use client"
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { 
  Box, 
  Typography, 
  IconButton, 
  useScrollTrigger, 
  Slide, 
  Container 
} from '@mui/material';
import NavLink from '../shared/NavLink'; // Ensure this path is correct
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const trigger = useScrollTrigger({
    threshold: 50
  });

  useEffect(() => {
    setIsScrolled(trigger);
  }, [trigger]);

  return (
    <Slide direction="down" in={!trigger} appear={false}>
      <Box 
        component="nav" 
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          backdropFilter: isScrolled ? 'blur(8px)' : 'none',
          backgroundColor: isScrolled ? 'rgba(26, 35, 126, 0.9)' : 'transparent',
          transition: 'all 0.3s ease',
          py: isScrolled ? 1 : 2,
          boxShadow: isScrolled ? 1 : 'none'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography
              variant="h5"
              component="a"
              href="/"
              sx={{
                fontWeight: 800,
                color: 'white',
                textDecoration: 'none',
                '&:hover': { opacity: 0.9 }
              }}
            >
              Global Travel
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              {['Destinations', 'Experiences', 'About', 'Contact'].map((item) => (
                <NavLink 
                  key={item} 
                  href="#" 
                  sx={{ 
                    color: 'white',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      background: '#ff9800',
                      transition: 'width 0.3s ease'
                    },
                    '&:hover::after': {
                      width: '100%'
                    }
                  }}
                >
                  {item}
                </NavLink>
              ))}
            </Box>

            <IconButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              sx={{ 
                display: { md: 'none' },
                color: 'white'
              }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </IconButton>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{
            display: { xs: isMenuOpen ? 'flex' : 'none', md: 'none' },
            flexDirection: 'column',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(26, 35, 126, 0.95)',
            p: 2,
            gap: 2,
            backdropFilter: 'blur(8px)'
          }}>
            {['Destinations', 'Experiences', 'About', 'Contact'].map((item) => (
              <NavLink 
                key={item} 
                href="#"
                sx={{
                  color: 'white',
                  py: 1,
                  px: 2,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                {item}
              </NavLink>
            ))}
          </Box>
        </Container>
      </Box>
    </Slide>
  );
}
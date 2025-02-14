"use client"
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  List, 
  ListItem, 
  ListItemIcon,
  useTheme 
} from '@mui/material';
import { LocationOn, ArrowRight } from '@mui/icons-material';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const IndiaMap = '/india.svg';

interface Destination {
  id: number;
  state: string;
  coordinates: { x: number; y: number };
  highlights: string[];
}

const destinations: Destination[] = [
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
  },
  {
    id: 6,
    state: 'Gujarat',
    coordinates: { x: 20, y: 50 },
    highlights: ['Rann of Kutch', 'Gir Forest', 'Sabarmati Ashram']
  },
  {
    id: 7,
    state: 'Rajasthan',
    coordinates: { x: 15, y: 40 },
    highlights: ['Red Fort', 'Qutub Minar', 'India Gate']
  },
  {
    id: 8,
    state: 'Kerala',
    coordinates: { x: 60, y: 80 },
    highlights: ['Backwaters', 'Tea Plantations', 'Beaches']
  }
];

const pulseAnimation = {
  initial: { scale: 1 },
  hover: { scale: 1.2 },
  tap: { scale: 0.95 }
};
export default function InteractiveMap() {
  const theme = useTheme();
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [hoveredDestination, setHoveredDestination] = useState<Destination | null>(null);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          sx={{
            mb: 6,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}
        >
          Explore Destinations
        </Typography>

        {/* Replace Grid with Box using CSS Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: 4
          }}
        >
          {/* Map Section */}
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  position: 'relative',
                  height: 600,
                  borderRadius: 4,
                  overflow: 'hidden',
                  backgroundColor: 'grey.100'
                }}
              >
                <Image
                  src={IndiaMap}
                  alt="India Map"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}  // Add 
                  style={{ objectFit: 'cover' }}
                />
                {destinations.map((dest) => (
                  <motion.div
                    key={dest.id}
                    style={{
                      position: 'absolute',
                      left: `${dest.coordinates.x}%`,
                      top: `${dest.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 2
                    }}
                    whileHover="hover"
                    whileTap="tap"
                    variants={pulseAnimation}
                  >
                    <LocationOn
                      sx={{
                        color: selectedDestination?.id === dest.id 
                          ? 'primary.main' 
                          : 'secondary.main',
                        fontSize: 40,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.3))`
                      }}
                      onMouseEnter={() => setHoveredDestination(dest)}
                      onMouseLeave={() => setHoveredDestination(null)}
                      onClick={() => setSelectedDestination(dest)}
                    />
                  </motion.div>
                ))}
              </Paper>
            </motion.div>
          </Box>

          {/* Info Panel Section */}
          <Box>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 4,
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  boxShadow: 6
                }}
              >
                <AnimatePresence mode='wait'>
                  {selectedDestination ? (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          color: 'primary.main'
                        }}
                      >
                        <LocationOn fontSize="large" />
                        {selectedDestination.state}
                      </Typography>
                      
                      <List dense sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
                          Top Attractions:
                        </Typography>
                        {selectedDestination.highlights.map((highlight, index) => (
                          <ListItem
                            key={index}
                            sx={{
                              p: 1,
                              mb: 1,
                              borderRadius: 2,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateX(8px)',
                                bgcolor: 'action.hover'
                              }
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <ArrowRight color="primary" />
                            </ListItemIcon>
                            <Typography variant="body1">{highlight}</Typography>
                          </ListItem>
                        ))}
                      </List>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ textAlign: 'center', paddingTop: '40%' }}
                    >
                      <Typography 
                        variant="h6" 
                        sx={{ color: 'text.secondary', fontStyle: 'italic' }}
                      >
                        Select a destination on the map
                      </Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
"use client"
import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Modal, 
  IconButton, 
  Grid, 
  Chip,
  useTheme 
} from '@mui/material';
import { Close, ArrowForward, ArrowBack } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'

const galleryImages = [
  {
    id: 1,
    title: 'Taj Mahal at Sunrise',
    location: 'Agra, UP',
    image: '/images/states/TajMahal.jpg',
    category: 'Monuments'
  },
  {
    id: 2,
    title: 'Varanasi Ghats',
    location: 'Varanasi, UP',
    image: '/images/states/Megah.jpg',
    category: 'Culture'
  },
  {
    id: 3,
    title: 'Kerala Backwaters',
    location: 'Kerala',
    image: '/images/states/state.jpg',
    category: 'Nature'
  },
  {
    id: 4,
    title: 'Ladakh Monastery',
    location: 'Ladakh',
    image: '/images/states/j&k.jpg',
    category: 'Culture'
  },
  {
    id: 5,
    title: 'Jaisalmer Desert',
    location: 'Rajasthan',
    image: '/images/states/rajasthan.jpg',
    category: 'Nature'
  },
  {
    id: 6,
    title: 'Hampi Ruins',
    location: 'Karnataka',
    image: '/images/states/nagaland.jpg',
    category: 'Monuments'
  }
];

export default function PhotoGallery() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const handleOpen = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ 
          mb: 6, 
          textAlign: 'center', 
          background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>
          Capture the Beauty of India
        </Typography>

        <Grid container spacing={3}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    borderRadius: 4,
                    boxShadow: 3,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                  onClick={() => handleOpen(image)}
                >
                  <Image
                    src={image.image}
                    alt={image.title}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover'
                    }}
                  />
                  <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
                  }}>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      {image.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      {image.location}
                    </Typography>
                  </Box>
                  <Chip
                    label={image.category}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)'
          }}
        >
          <Box sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: 24
          }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                zIndex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)'
                }
              }}
            >
              <Close />
            </IconButton>

            <IconButton
              onClick={() => handleNavigation('prev')}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)'
                }
              }}
            >
              <ArrowBack />
            </IconButton>

            <IconButton
              onClick={() => handleNavigation('next')}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)'
                }
              }}
            >
              <ArrowForward />
            </IconButton>

            <AnimatePresence mode='wait'>
              {selectedImage && (
                <motion.div
                  key={selectedImage.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    width={1920}
                    height={1080}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '80vh',
                      objectFit: 'contain'
                    }}
                  />
                  <Box sx={{ 
                    p: 3,
                    textAlign: 'center',
                    backgroundColor: 'primary.main',
                    color: 'white'
                  }}>
                    <Typography variant="h5">{selectedImage.title}</Typography>
                    <Typography variant="subtitle1">{selectedImage.location}</Typography>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}
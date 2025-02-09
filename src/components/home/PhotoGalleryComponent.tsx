"use client"
import React, { useState } from 'react';
import { Box, Container, Typography, Modal, IconButton, Grid } from '@mui/material';
import { Close, ArrowForward, ArrowBack } from '@mui/icons-material';

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
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ id: number; title: string; location: string; image: string; category: string } | null>(null);

  const handleOpen = (image: { id: number; title: string; location: string; image: string; category: string }) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleNext = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage?.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage?.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 6, textAlign: 'center', color: '#1a237e' }}>
          Capture the Beauty of India
        </Typography>

        <Grid container spacing={3}>
          {galleryImages.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Box
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: 2,
                  '&:hover .overlay': {
                    opacity: 1
                  },
                  '&:hover img': {
                    transform: 'scale(1.1)'
                  }
                }}
                onClick={() => handleOpen(image)}
              >
                <Box
                  component="img"
                  src={image.image}
                  alt={image.title}
                  sx={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                  width={800}
                  height={600}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    color: 'white',
                    p: 2
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1 }}>{image.title}</Typography>
                  <Typography variant="body2">{image.location}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', right: -40, top: -40, color: 'white' }}
            >
              <Close />
            </IconButton>
            <IconButton
              onClick={handlePrev}
              sx={{ position: 'absolute', left: -50, top: '50%', color: 'white' }}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{ position: 'absolute', right: -50, top: '50%', color: 'white' }}
            >
              <ArrowForward />
            </IconButton>
            {selectedImage && (
              <Box>
                <Box
                  component="img"
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '80vh',
                    objectFit: 'contain'
                  }}
                />
                <Box sx={{ mt: 2, color: 'white', textAlign: 'center' }}>
                  <Typography variant="h6">{selectedImage.title}</Typography>
                  <Typography variant="body2">{selectedImage.location}</Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}
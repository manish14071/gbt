import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Button,
  Avatar
} from '@mui/material';
import { AccessTime, ArrowForward } from '@mui/icons-material';

const blogPosts = [
  {
    id: 1,
    title: "A Journey Through the Valley of Flowers",
    excerpt: "Discover the breathtaking beauty of Uttarakhand's most famous national park...",
    image: "/api/placeholder/800/400",
    category: "Adventure",
    author: {
      name: "Arun Kumar",
      avatar: "/api/placeholder/40/40"
    },
    date: "2024-02-01",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Hidden Gems of Rajasthan",
    excerpt: "Beyond the palaces and forts lies a world of unexplored wonders...",
    image: "/api/placeholder/800/400",
    category: "Culture",
    author: {
      name: "Maya Patel",
      avatar: "/api/placeholder/40/40"
    },
    date: "2024-01-28",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Kerala's Backwater Adventures",
    excerpt: "Experience the serene life on traditional houseboats in God's own country...",
    image: "/api/placeholder/800/400",
    category: "Travel Tips",
    author: {
      name: "Sarah Wilson",
      avatar: "/api/placeholder/40/40"
    },
    date: "2024-01-25",
    readTime: "6 min read"
  }
];

export default function BlogSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{ color: '#1a237e', fontWeight: 'bold', mb: 2 }}
          >
            Travel Stories
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Inspiring adventures and travel tips from our community
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      label={post.category}
                      size="small"
                      sx={{ 
                        backgroundColor: '#1a237e',
                        color: 'white',
                        mr: 1
                      }}
                    />
                    <Typography 
                      variant="caption" 
                      color="text.secondary"
                      sx={{ display: 'inline-flex', alignItems: 'center' }}
                    >
                      <AccessTime sx={{ fontSize: 16, mr: 0.5 }} />
                      {post.readTime}
                    </Typography>
                  </Box>
                  
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {post.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Avatar src={post.author.avatar} sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="subtitle2">
                        {post.author.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              backgroundColor: '#1a237e',
              '&:hover': {
                backgroundColor: '#0d47a1'
              }
            }}
          >
            View All Stories
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
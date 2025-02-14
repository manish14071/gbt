"use client";
import React from "react";
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
  Avatar,
} from "@mui/material";
import { AccessTime, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "A Journey Through the Valley of Flowers",
    excerpt:
      "Discover the breathtaking beauty of Uttarakhand's most famous national park...",
    image: "/images/states/mysore.jpg",
    category: "Adventure",
    author: {
      name: "Arun Kumar",
      //avatar: "/path/to/your/avatar1.jpg"
    },
    date: "2024-02-01",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Hidden Gems of Rajasthan",
    excerpt:
      "Beyond the palaces and forts lies a world of unexplored wonders...",
    image: "/images/states/rajasthan.jpg",
    category: "Culture",
    author: {
      name: "Maya Patel",
      //avatar: "/api/placeholder/40/40"
    },
    date: "2024-01-28",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Kerala's Backwater Adventures",
    excerpt:
      "Experience the serene life on traditional houseboats in God's own country...",
    image: "/images/states/nagaland.jpg",
    category: "Travel Tips",
    author: {
      name: "Sarah Wilson",
      //avatar: "/api/placeholder/40/40"
    },
    date: "2024-01-25",
    readTime: "6 min read",
  },
];

export default function BlogSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              background: "linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            Travel Stories
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Inspiring adventures and travel tips from our community
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {blogPosts.map((post, index) => {
            const formattedDate = new Date(post.date).toLocaleDateString(
              "en-US",
              {
                month: "long",
                day: "numeric",
                year: "numeric",
              }
            );

            return (
              <Grid item xs={12} md={4} key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      sx={{
                        position: "relative",
                        height: 200,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                      {/* Gradient overlay */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "40%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                        }}
                      />
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={post.category}
                          size="small"
                          sx={{
                            background:
                              "linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)",
                            color: "white",
                            fontWeight: 600,
                            mr: 1,
                          }}
                        />
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <AccessTime sx={{ fontSize: 16 }} />
                          {post.readTime}
                        </Typography>
                      </Box>

                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{ fontWeight: "bold", lineHeight: 1.2 }}
                      >
                        {post.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {post.excerpt}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mt: 2,
                          padding: 1,
                          borderRadius: 1,
                          backgroundColor: "rgba(26, 35, 126, 0.05)",
                        }}
                      >
                        <Avatar
                          sx={{
                            mr: 1,
                            backgroundColor: "#1a237e",
                            color: "white",
                            width: 32,
                            height: 32,
                          }}
                        >
                          {post.author.name[0]}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2">
                            {post.author.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {formattedDate}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              background: "linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: 4,
              },
              transition: "all 0.3s ease",
            }}
          >
            View All Stories
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

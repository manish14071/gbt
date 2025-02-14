"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import { indianStatesDestination } from "./shared/data/indianStatesDestinations";


interface DestinationCard {
  id: number;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  slug: string;
}




const indianDestinations = indianStatesDestination.map(dest => ({
  ...dest,
  title: dest.name, // Map the name field to title
  image: dest.images[0] // Use first image as card image
}));






export default function EnhancedDestinations() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const itemsPerPage = isMobile ? 1 : 4;
  const router = useRouter()

  



  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + itemsPerPage >= indianDestinations.length ? 0 : prev + 1
      );
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(timer);
  }, [itemsPerPage]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= indianDestinations.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? indianDestinations.length - itemsPerPage : prev - 1
    );
  };

  const handleExplore = (slug: string) => {
    router.push(`/destinations/${slug}`);
  };

  const visibleDestinations = indianDestinations.slice(
    currentIndex,
    currentIndex + itemsPerPage
  ).map(dest => ({
    ...dest,
    title: dest.title || dest.name // Fallback to name if title doesn't exist
  }));

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        py: 8,
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            textAlign: "center",
            fontWeight: "bold",
            color: "#1a237e",
          }}
        >
          Discover Incredible India
        </Typography>

        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "white",
              "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              display: { xs: "none", md: "flex" },
            }}
          >
            <ArrowBack />
          </IconButton>

          <Grid container spacing={3}>
            {visibleDestinations.map((destination) => (
              <Grid item xs={12} sm={6} md={3} key={destination.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 8,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height={isMobile ? "200" : "250"}
                    image={destination.image}
                    alt={destination.title}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ color: "#1a237e" }}
                    >
                      {destination.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      {destination.description}
                    </Typography>
                    <Box
                      onClick={() => handleExplore(destination.slug)}
                      sx={
                        {
                          /* existing styles */
                        }
                      }
                    >
                      <Typography variant="subtitle1" sx={{ mr: 1 }}>
                        Explore More
                      </Typography>
                      <ArrowForward fontSize="small" />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "white",
              "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              display: { xs: "none", md: "flex" },
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>

        {/* Mobile Navigation Buttons */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            mt: 3,
            gap: 2,
          }}
        >
          <IconButton onClick={handlePrev} sx={{ bgcolor: "white" }}>
            <ArrowBack />
          </IconButton>
          <IconButton onClick={handleNext} sx={{ bgcolor: "white" }}>
            <ArrowForward />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

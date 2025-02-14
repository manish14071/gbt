"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Container,
  Typography,
  Box,
  Paper,
  IconButton,
  Tabs,
  Tab,
  Fade,
  useTheme,
  useMediaQuery,
  Chip,
  Grid,
  Button,
} from "@mui/material";
import {
  Star,
  Schedule as Clock,
  AttachMoney as DollarSign,
  Flight as Plane,
  Train,
  DirectionsCar as Car,
  ArrowBack,
  ArrowForward,
  PhotoLibrary,
  LocationOn,
  EventNote,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Destination {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  howToReach: {
    air: string;
    train: string;
    road: string;
  };
  activities: {
    name: string;
    duration: string;
    price: string;
    description: string;
  }[];
  images: string[];
}

interface DetailedDestinationProps {
  destination: Destination;
}

const TabPanel = ({
  children,
  value,
  index,
}: {
  children: React.ReactNode;
  value: number;
  index: number;
}) => (
  <div hidden={value !== index} className="py-6">
    <Fade in={value === index}>
      <div>{children}</div>
    </Fade>
  </div>
);

const DetailedDestination: React.FC<DetailedDestinationProps> = ({
  destination,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setIsMounted(true); // Mark client-side mount
  }, []);

  useEffect(() => {
    if (!isMounted || !destination?.images) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev + 1 >= destination.images.length ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [isMounted, destination?.images]);

  if (!isMounted) {
    return <div className="min-h-screen bg-gray-50" />; // Return empty container during SSR
  }

  const handleImageNavigation = (direction: string) => {
    if (direction === "next") {
      setCurrentImageIndex((prev) =>
        prev + 1 >= destination.images.length ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev === 0 ? destination.images.length - 1 : prev - 1
      );
    }
  };

  // Slider settings for the gallery
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: !isMobile,
    adaptiveHeight: true,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <Fade in={true} timeout={1000}>
          <div className="relative h-full">
            {isMounted && (
              <Image
                src={
                  destination.images?.[currentImageIndex] ||
                  "/fallback-image.jpg"
                }
                alt={destination.name}
                layout="fill"
                objectFit="cover"
                priority
                className="transition-opacity duration-500"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
          </div>
        </Fade>

        <Container maxWidth="xl" className="relative h-full">
          <Box className="absolute bottom-0 left-0 right-0 p-8">
            <Typography
              variant="h1"
              className="text-white font-bold mb-4"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontFamily: "Playfair Display, serif", // Use the globally loaded font
                fontWeight: 700,
              }}
            >
              {destination.name}
            </Typography>

            <Box className="flex items-center gap-4 mb-4">
              <Box className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(destination.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </Box>
              <Typography
                className="text-white"
                sx={{ fontFamily: "Roboto, sans-serif" }}
              >
                {destination.rating} ({destination.reviewCount} reviews)
              </Typography>
            </Box>

            <Box className="flex gap-2">
              <Chip
                icon={<EventNote className="text-blue-500" />}
                label={`Best Time: ${destination.bestTimeToVisit}`}
                className="bg-white"
                sx={{ fontFamily: "Roboto, sans-serif" }}
              />
            </Box>
          </Box>
        </Container>

        {/* Image Navigation */}
        <Box className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
          <IconButton
            onClick={() => handleImageNavigation("prev")}
            className="bg-white/80 hover:bg-white"
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={() => handleImageNavigation("next")}
            className="bg-white/80 hover:bg-white"
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </div>

      {/* Main Content */}
      <Container maxWidth="xl" className="py-12">
        <Paper elevation={3} className="p-6 mb-8">
          <Typography
            variant="body1"
            className="text-lg leading-relaxed"
            sx={{ fontFamily: "Roboto, sans-serif" }}
          >
            {destination.description}
          </Typography>
        </Paper>

        <Paper elevation={3} className="overflow-hidden">
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            className="border-b border-gray-200"
            sx={{ fontFamily: "Playfair Display, serif" }}
          >
            <Tab
              label="Highlights"
              icon={<LocationOn />}
              iconPosition="start"
            />
            <Tab label="Activities" icon={<Clock />} iconPosition="start" />
            <Tab label="How to Reach" icon={<Plane />} iconPosition="start" />
            <Tab label="Gallery" icon={<PhotoLibrary />} iconPosition="start" />
          </Tabs>

          <Box className="p-6">
            <TabPanel value={activeTab} index={0}>
              <Grid container spacing={3}>
                {destination.highlights?.map(
                  (highlight: any, index: number) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper
                        elevation={2}
                        className="p-4 flex items-center gap-3"
                      >
                        <LocationOn className="text-blue-500" />
                        <Typography sx={{ fontFamily: "Roboto, sans-serif" }}>
                          {highlight}
                        </Typography>
                      </Paper>
                    </Grid>
                  )
                )}
              </Grid>
            </TabPanel>

            <TabPanel value={activeTab} index={1}>
              <Grid container spacing={4}>
                {destination.activities?.map((activity, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper elevation={3} className="p-6">
                      <Typography
                        variant="h6"
                        className="mb-4"
                        sx={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {activity.name}
                      </Typography>
                      <Box className="space-y-3">
                        <Box className="flex items-center gap-2">
                          <Clock className="text-blue-500" />
                          <Typography sx={{ fontFamily: "Roboto, sans-serif" }}>
                            {activity.duration}
                          </Typography>
                        </Box>
                        <Box className="flex items-center gap-2">
                          <DollarSign className="text-blue-500" />
                          <Typography sx={{ fontFamily: "Roboto, sans-serif" }}>
                            {activity.price}
                          </Typography>
                        </Box>
                        <Typography
                          className="mt-4"
                          sx={{ fontFamily: "Roboto, sans-serif" }}
                        >
                          {activity.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={activeTab} index={2}>
              <Typography
                variant="h6"
                className="mb-4"
                sx={{ fontFamily: "Playfair Display, serif" }}
              >
                How to Reach
              </Typography>
              <Typography sx={{ fontFamily: "Roboto, sans-serif" }}>
                {destination.howToReach.air}
              </Typography>
              <Typography sx={{ fontFamily: "Roboto, sans-serif" }}>
                {destination.howToReach.train}
              </Typography>
              <Typography sx={{ fontFamily: "Roboto, sans-serif" }}>
                {destination.howToReach.road}
              </Typography>
            </TabPanel>

            <TabPanel value={activeTab} index={3}>
              <Slider {...sliderSettings}>
                {destination.images.map((image, index) => (
                  <Box key={index} sx={{ p: 2 }}>
                    <Image
                      src={image}
                      alt={destination.name}
                      width={800}
                      height={500}
                      layout="responsive"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </Box>
                ))}
              </Slider>
            </TabPanel>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default DetailedDestination;

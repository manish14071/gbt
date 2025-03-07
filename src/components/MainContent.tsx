"use client"

import { useEffect } from "react"
import { useRoute } from "./context/route-context"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Hero from "./Hero"
import Destinations from "./Destinations"
import Newsletter from "./NewsLetter"
import Map from "./Map"
import PhotoGalleryComponent from "./PhotoGalleryComponent"
import Testimonial from "./Testimonial"
import Blog from "./Blog"
import DetailedDestination from "./Detailed-destination"
import { indianStatesDestination } from "./shared/data/indianStatesDestinations"
import Experiences from "./Experiences"
import AboutSection from "./About"
import ContactSection from "./Contact"

interface MainContentProps {
  initialRoute: string
}

export default function MainContent({ initialRoute }: MainContentProps) {
  const { currentRoute, setInitialRoute } = useRoute()
  const featuredDestination = indianStatesDestination[0]

  // Set the initial route only once when component mounts
  useEffect(() => {
    setInitialRoute(initialRoute);
  }, [initialRoute, setInitialRoute]);

  // Render content based on current route
  const renderContent = () => {
    console.log('Current route:', currentRoute)
    
    switch (currentRoute) {
      case "/":
        return (
          <>
            <Hero />
            <Destinations />
            <Map />
            <Experiences />
            <PhotoGalleryComponent />
            <DetailedDestination destination={featuredDestination} />
            <Blog />
            <Testimonial />
            <Newsletter />
          </>
        )
      case "/destinations":
        return (
          <>
            <div className="pt-24 pb-8">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Explore Our Destinations</h1>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                  Discover the diverse landscapes, rich cultures, and breathtaking sights across India. From majestic
                  mountains to serene beaches, we have the perfect destination for every traveler.
                </p>
              </div>
            </div>
            <Destinations />
            <DetailedDestination destination={featuredDestination} />
            <Newsletter />
          </>
        )
      case "/experiences":
        return (
          <>
            <div className="pt-24 pb-8">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Unforgettable Experiences</h1>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                  Immerse yourself in authentic Indian experiences that go beyond typical tourism. Our carefully curated
                  activities connect you with the heart and soul of India.
                </p>
              </div>
            </div>
            <Experiences />
            <PhotoGalleryComponent />
            <Testimonial />
            <Newsletter />
          </>
        )
      case "/about":
        return <AboutSection />
      case "/contact":
        return <ContactSection />
      default:
        console.log('Hit default case with route:', currentRoute)
        return (
          <>
            <Hero />
            <Destinations />
            <Map />
            <Experiences />
            <PhotoGalleryComponent />
            <DetailedDestination destination={featuredDestination} />
            <Blog />
            <Testimonial />
            <Newsletter />
          </>
        )
    }
  }

  return (
    <>
      <Navbar />
      <main>{renderContent()}</main>
      <Footer />
    </>
  )
}


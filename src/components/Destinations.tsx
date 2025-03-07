"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardFooter } from "./ui/card"

import { cn } from "@/lib/utils"
import { indianStatesDestination } from "./shared/data/indianStatesDestinations"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"


interface DestinationCard {
  id: number
  title?: string
  name: string
  description: string
  images: string[]
  highlights: string[]
  slug: string
}

export default function EnhancedDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const router = useRouter()
  const carouselRef = useRef<HTMLDivElement>(null)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  // Pause autoplay when user interacts with carousel
  const pauseAutoPlay = () => {
    setAutoPlay(false)
    const timer = setTimeout(() => setAutoPlay(true), 10000)
    return () => clearTimeout(timer)
  }

  // Move handleNext declaration before its usage
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= indianStatesDestination.length ? 0 : prev + 1))
    pauseAutoPlay()
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, indianStatesDestination.length - itemsPerPage) : prev - 1))
    pauseAutoPlay()
  }

  // Screen size effect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(3)
      } else {
        setItemsPerPage(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(handleNext, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const handleExplore = (slug: string) => {
    router.push(`/destinations/${slug}`)
  }

  const handleTabClick = (index: number) => {
    setCurrentIndex(index)
    setActiveTab(index)
    pauseAutoPlay()
  }

  const visibleDestinations = indianStatesDestination.slice(currentIndex, currentIndex + itemsPerPage)

  // Handle case when we're at the end and don't have enough items
  const remainingCount = indianStatesDestination.length - (currentIndex + itemsPerPage)
  if (remainingCount < 0) {
    const extraNeeded = Math.abs(remainingCount)
    const extraItems = indianStatesDestination.slice(0, extraNeeded)
    visibleDestinations.push(...extraItems)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-xl mb-8 md:mb-0">
            <h2 className="text-3xl font-bold tracking-tight text-primary mb-3">Discover Incredible India</h2>
            <p className="text-muted-foreground text-lg">
              Explore the most breathtaking destinations across the diverse landscapes of India
            </p>
          </div>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="h-10 w-10 rounded-full"
              aria-label="Previous destination"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-10 w-10 rounded-full"
              aria-label="Next destination"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel Indicator */}
        <div className="hidden md:flex mb-8 overflow-x-auto pb-2 gap-2 scrollbar-hide">
          {indianStatesDestination.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 ease-in-out",
                index >= currentIndex && index < currentIndex + itemsPerPage ? "bg-primary w-8" : "bg-muted w-4",
              )}
              onClick={() => handleTabClick(index)}
              aria-label={`Go to destination ${index + 1}`}
            />
          ))}
        </div>

        {/* Main Carousel */}
        <div className="relative overflow-hidden" ref={carouselRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {visibleDestinations.map((destination, index) => (
                <motion.div
                  key={`${destination.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                >
                  <Card className="group h-full overflow-hidden border-0 bg-white dark:bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={destination.images[0] || "/placeholder.svg?height=256&width=384"}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-primary/90 hover:bg-primary text-white font-semibold">
                          <MapPin className="w-3.5 h-3.5 mr-1" />
                          {destination.name}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold tracking-tight mb-2 text-primary">
                        {destination.title || destination.name}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3 mb-4">{destination.description}</p>

                      {destination.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {destination.highlights.slice(0, 3).map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="font-normal">
                              {highlight}
                            </Badge>
                          ))}
                          {destination.highlights.length > 3 && (
                            <Badge variant="outline">+{destination.highlights.length - 3}</Badge>
                          )}
                        </div>
                      )}
                    </CardContent>

                    <CardFooter className="px-5 pb-5 pt-0">
                      <Button
                        onClick={() => handleExplore(destination.slug)}
                        variant="default"
                        className="w-full group-hover:bg-primary transition-colors duration-300"
                      >
                        Explore Destination
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile dots indicator */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-1.5">
            {Array.from({ length: Math.ceil(indianStatesDestination.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  Math.floor(currentIndex / itemsPerPage) === index ? "bg-primary scale-110" : "bg-muted",
                )}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


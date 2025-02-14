import Hero from '@/components/Hero'

import Destinations from '@/components/Destinations'
import Experiences from '@/components/Experiences'
import Newsletter from '@/components/NewsLetter'
import Map from '@/components/Map'
import PhotoGalleryComponent from '@/components/PhotoGalleryComponent'
import Testimonial from '@/components/Testimonial'
import Blog from '@/components/Blog'
import DetailedDestination from '@/components/Detailed-destination' 
import { indianStatesDestination } from '@/components/shared/data/indianStatesDestinations'

export default function Home() {
  const featuredDestination = indianStatesDestination[0];
  return (
    <>
      <Hero />
  
      <Destinations />
      <Map />
      <Experiences />
      <PhotoGalleryComponent />
      <DetailedDestination destination={featuredDestination}    />
      <Blog />
      <Testimonial />
      <Newsletter />
    </>
  )
}
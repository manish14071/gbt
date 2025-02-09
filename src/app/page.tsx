import Hero from '@/components/home/Hero'
import SearchBox from '@/components/home/SearchBox'
import Destinations from '@/components/home/Destinations'
import Experiences from '@/components/home/Experiences'
import Newsletter from '@/components/home/NewsLetter'
import Map from '@/components/home/Map'
import PhotoGalleryComponent from '@/components/home/PhotoGalleryComponent'
import Testimonial from '@/components/home/Testimonial'
import Blog from '@/components/home/Blog'
import DetailedDestination from '@/components/home/Detailed-destination'
export default function Home() {
  return (
    <>
      <Hero />
      <SearchBox />
      <Destinations />
      <Map />
      <Experiences />
      <PhotoGalleryComponent />
      <DetailedDestination />
      <Blog />
      <Testimonial />
      <Newsletter />
    </>
  )
}
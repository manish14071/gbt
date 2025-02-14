// app/destinations/[slug]/page.tsx
import { Metadata } from 'next'
import DetailedDestination from '@/components/Detailed-destination'
import { indianStatesDestination } from '@/components/shared/data/indianStatesDestinations'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const destination = indianStatesDestination.find(d => d.slug === params.slug)
  
  return {
    title: destination ? `${destination.name} | Global Borders Travel` : 'Destination Not Found'
  }
}

export default async function Page({ params }: Props) {
  const destination = indianStatesDestination.find(d => d.slug === params.slug)

  if (!destination) {
    return <div>Destination not found</div>
  }

  return <DetailedDestination destination={destination} />
}
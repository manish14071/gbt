// app/destinations/[slug]/page.tsx
import DetailedDestination from '@/components/Detailed-destination';
import { indianStatesDestination } from '@/components/shared/data/indianStatesDestinations';

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = indianStatesDestination.find(d => d.slug === params.slug);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return <DetailedDestination destination={destination} />;
}
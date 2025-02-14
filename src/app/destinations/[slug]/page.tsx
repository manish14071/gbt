// app/destinations/[slug]/page.tsx
import DetailedDestination from '@/components/Detailed-destination';
import { indianStatesDestination } from '@/components/shared/data/indianStatesDestinations';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DestinationPage({ params }: PageProps) {
  const resolvedParams = await params;
  const destination = indianStatesDestination.find(d => d.slug === resolvedParams.slug);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return <DetailedDestination destination={destination} />;
}
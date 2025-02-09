"use client"
import React, { useState } from 'react';
import { Star, MapPin, Clock, DollarSign, Plane, Train, Car } from 'lucide-react';

// This would typically come from your API or CMS
const destinationData = {
  id: 1,
  name: "Goa",
  rating: 4.8,
  reviewCount: 1250,
  description: "Goa, India's smallest state, is known for its pristine beaches, vibrant nightlife, rich Portuguese heritage, and delicious seafood. With its perfect blend of sun, sand, and culture, Goa offers something for every type of traveler.",
  highlights: [
    "45+ pristine beaches",
    "Portuguese architecture",
    "Vibrant nightlife",
    "Water sports activities",
    "Spice plantations",
    "Historic churches"
  ],
  bestTimeToVisit: "November to February",
  howToReach: {
    air: "Dabolim Airport (GOI)",
    train: "Madgaon Railway Station",
    road: "Well-connected by NH66"
  },
  activities: [
    {
      name: "Beach Hopping",
      duration: "Full Day",
      price: "₹2000/person",
      description: "Explore the most beautiful beaches of Goa"
    },
    {
      name: "Water Sports",
      duration: "Half Day",
      price: "₹1500/person",
      description: "Parasailing, jet skiing, and more"
    },
    {
      name: "Heritage Tour",
      duration: "Full Day",
      price: "₹2500/person",
      description: "Visit historic churches and Portuguese architecture"
    }
  ],
  images: [
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400"
  ]
};

const TabPanel = ({ children, value, index }) => {
  return value === index ? <div className="py-6">{children}</div> : null;
};

export default function DestinationTemplate() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src="/api/placeholder/1920/1080"
          alt={destinationData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
            <h1 className="text-white text-5xl font-bold mb-4">{destinationData.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(destinationData.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-white">
                {destinationData.rating} ({destinationData.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Description */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 text-lg">{destinationData.description}</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b">
            <nav className="flex">
              {['Highlights', 'Activities', 'How to Reach', 'Gallery'].map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === index
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Panels */}
          <TabPanel value={activeTab} index={0}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {destinationData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel value={activeTab} index={1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {destinationData.activities.map((activity, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">{activity.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <DollarSign className="w-4 h-4" />
                    <span>{activity.price}</span>
                  </div>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel value={activeTab} index={2}>
            <div className="space-y-4 p-4">
              <div className="flex items-center gap-4">
                <Plane className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-medium">By Air</h3>
                  <p className="text-gray-600">{destinationData.howToReach.air}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Train className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-medium">By Train</h3>
                  <p className="text-gray-600">{destinationData.howToReach.train}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Car className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-medium">By Road</h3>
                  <p className="text-gray-600">{destinationData.howToReach.road}</p>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={activeTab} index={3}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {destinationData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${destinationData.name} ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </TabPanel>
        </div>

        {/* Best Time to Visit */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Best Time to Visit</h2>
          <div className="flex items-center gap-2 text-gray-700">
            <Clock className="w-5 h-5 text-blue-500" />
            <span>{destinationData.bestTimeToVisit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
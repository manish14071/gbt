



interface Destination {
    id: number;
    slug: string;
    title?:string
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




  export const indianStatesDestination:Destination[] = [
    {
        id: 1,
        slug:"Goa",
        name: "Goa",
        rating: 4.8,
        reviewCount: 1250,
        description: "Famous for its stunning beaches, vibrant nightlife, and Portuguese heritage, Goa is the perfect destination for beach lovers and partygoers. Explore ancient churches, spice plantations, and thrilling water sports.",
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
          "/images/states/goa.jpg",
          "/images/states/beach.avif",
          "/images/states/goa.jpg",
          "/images/states/goa.jpg",
          "/images/states/goa.jpg",
          "/images/states/goa.jpg"
        ]
    },



    {
      "id": 2,
      "slug": "jammu-kashmir",
      "name": "Jammu & Kashmir",
      "rating": 4.9,
      "reviewCount": 1800,
      "description": "Known as 'Paradise on Earth,' Jammu & Kashmir offers breathtaking landscapes, serene lakes, and snow-capped mountains. Explore scenic valleys, historic temples, and thrilling adventure activities.",
      "highlights": [
        "Dal Lake & Houseboats",
        "Snow-capped mountains",
        "Tulip Gardens",
        "Gulmarg Ski Resort",
        "Spiritual temples & shrines",
        "Adventure activities"
      ],
      "bestTimeToVisit": "March to October (summer) & December to February (winter for snow activities)",
      "howToReach": {
        "air": "Srinagar Airport (SXR) & Jammu Airport (IXJ)",
        "train": "Jammu Tawi Railway Station",
        "road": "Well-connected via NH44"
      },
      "activities": [
        {
          "name": "Shikara Ride on Dal Lake",
          "duration": "1-2 Hours",
          "price": "₹1000/ride",
          "description": "Enjoy a relaxing boat ride on the famous Dal Lake."
        },
        {
          "name": "Gulmarg Skiing",
          "duration": "Half Day",
          "price": "₹3000/person",
          "description": "Experience skiing in one of India's best ski resorts."
        },
        {
          "name": "Vaishno Devi Pilgrimage",
          "duration": "Full Day",
          "price": "Free (except helicopter service)",
          "description": "Visit the sacred Hindu temple in the Trikuta Hills."
        }
      ],
      images: [
        "/images/states/goa.jpg",
        "/images/states/beach.avif",
        "/images/states/goa.jpg",
        "/images/states/goa.jpg",
        "/images/states/goa.jpg",
        "/images/states/goa.jpg"
      ]
  },


  {
    "id": 3,
    "slug": "himachal-pradesh",
    "name": "Himachal Pradesh",
    "rating": 4.8,
    "reviewCount": 1650,
    "description": "A haven for nature lovers and adventure seekers, Himachal Pradesh is home to scenic hill stations, trekking trails, and stunning temples.",
    "highlights": [
      "Shimla & Manali hill stations",
      "Paragliding in Bir Billing",
      "Trekking in the Himalayas",
      "Spiti Valley road trips",
      "Ancient temples & monasteries",
      "Apple orchards"
    ],
    "bestTimeToVisit": "March to June & October to February (for snowfall)",
    "howToReach": {
      "air": "Kullu-Manali Airport (KUU)",
      "train": "Kalka Railway Station",
      "road": "Well-connected via NH3 & NH5"
    },
    "activities": [
      {
        "name": "Rohtang Pass Excursion",
        "duration": "Full Day",
        "price": "₹3000/person",
        "description": "Scenic snow-covered mountain pass with adventure activities."
      },
      {
        "name": "Paragliding in Bir Billing",
        "duration": "30 Minutes",
        "price": "₹2500/person",
        "description": "Experience the thrill of flying over the beautiful Kangra Valley."
      },
      {
        "name": "Spiti Valley Jeep Safari",
        "duration": "5 Days",
        "price": "₹15000/person",
        "description": "Explore one of India's most remote and breathtaking valleys."
      }
    ],
    images: [
      "/images/states/goa.jpg",
      "/images/states/beach.avif",
      "/images/states/goa.jpg",
      "/images/states/goa.jpg",
      "/images/states/goa.jpg",
      "/images/states/goa.jpg"
    ]
},


{
  "id": 4,
  "slug": "uttarakhand",
  "name": "Uttarakhand",
  "rating": 4.7,
  "reviewCount": 1500,
  "description": "The Land of Gods, Uttarakhand is famous for its sacred temples, adventure sports, and breathtaking hill stations.",
  "highlights": [
    "Rishikesh - Yoga capital",
    "Char Dham pilgrimage",
    "Jim Corbett National Park",
    "Auli Skiing destination",
    "Nainital Lake",
    "Trekking & rafting"
  ],
  "bestTimeToVisit": "March to June & September to November",
  "howToReach": {
    "air": "Jolly Grant Airport (DED)",
    "train": "Haridwar & Dehradun Railway Station",
    "road": "Well-connected via NH7 & NH109"
  },
  "activities": [
    {
      "name": "River Rafting in Rishikesh",
      "duration": "2-4 Hours",
      "price": "₹1500/person",
      "description": "Experience thrilling rapids on the Ganges."
    },
    {
      "name": "Wildlife Safari at Jim Corbett",
      "duration": "Half Day",
      "price": "₹3000/person",
      "description": "Spot tigers and exotic wildlife in India's oldest national park."
    },
    {
      "name": "Trekking to Valley of Flowers",
      "duration": "4 Days",
      "price": "₹12000/person",
      "description": "Hike through a stunning valley filled with rare Himalayan flowers."
    }
  ],
  images: [
    "/images/states/goa.jpg",
    "/images/states/beach.avif",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg"
  ]
},


{
  "id": 5,
  "slug": "uttar-pradesh",
  "name": "Uttar Pradesh",
  "rating": 4.6,
  "reviewCount": 1400,
  "description": "A land of rich heritage, Uttar Pradesh is home to the iconic Taj Mahal, spiritual Varanasi, and vibrant cultural traditions.",
  "highlights": [
    "Taj Mahal - Seven Wonders of the World",
    "Varanasi Ghats & Ganga Aarti",
    "Lucknow's Nawabi cuisine",
    "Fatehpur Sikri",
    "Ayodhya - Lord Rama’s birthplace",
    "Kumbh Mela festival"
  ],
  "bestTimeToVisit": "October to March",
  "howToReach": {
    "air": "Lucknow, Varanasi, Agra Airports",
    "train": "Lucknow, Varanasi, Agra, Kanpur Railway Stations",
    "road": "Well-connected via NH19 & NH27"
  },
  "activities": [
    {
      "name": "Taj Mahal Tour",
      "duration": "Half Day",
      "price": "₹1000/person",
      "description": "Visit one of the most beautiful monuments in the world."
    },
    {
      "name": "Ganga Aarti in Varanasi",
      "duration": "Evening",
      "price": "Free",
      "description": "Experience the mesmerizing evening Aarti on the Ghats."
    },
    {
      "name": "Wildlife Safari at Dudhwa National Park",
      "duration": "Full Day",
      "price": "₹3000/person",
      "description": "Spot tigers and exotic birds in this lesser-known wildlife reserve."
    }
  ],
  images: [
    "/images/states/goa.jpg",
    "/images/states/beach.avif",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg"
  ]
},

{
  "id": 6,
  "slug": "delhi",
  "name": "Delhi",
  "rating": 4.7,
  "reviewCount": 1550,
  "description": "The capital of India, Delhi offers a mix of history, culture, and modern city life with stunning monuments and vibrant street food.",
  "highlights": [
    "India Gate & Rashtrapati Bhavan",
    "Red Fort & Jama Masjid",
    "Qutub Minar",
    "Lotus Temple & Akshardham",
    "Chandni Chowk food markets",
    "Shopping at Connaught Place"
  ],
  "bestTimeToVisit": "October to March",
  "howToReach": {
    "air": "Indira Gandhi International Airport (DEL)",
    "train": "New Delhi, Old Delhi, Hazrat Nizamuddin Railway Stations",
    "road": "Well-connected via NH44 & NH48"
  },
  "activities": [
    {
      "name": "Heritage Walk in Old Delhi",
      "duration": "Half Day",
      "price": "₹1200/person",
      "description": "Explore the historic streets and monuments of Old Delhi."
    },
    {
      "name": "Street Food Tour",
      "duration": "3 Hours",
      "price": "₹800/person",
      "description": "Taste delicious local dishes like chaat, kebabs, and parathas."
    },
    {
      "name": "Cycle Tour of India Gate & Rajpath",
      "duration": "2 Hours",
      "price": "₹1000/person",
      "description": "Enjoy a refreshing morning cycle ride around Delhi’s landmarks."
    }
  ],
  images: [
    "/images/states/goa.jpg",
    "/images/states/beach.avif",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg"
  ]
},

{
  "id": 7,
  "slug": "gujarat",
  "name": "Gujarat",
  "rating": 4.8,
  "reviewCount": 1300,
  "description": "A land of vibrant culture and historic wonders, Gujarat is known for its white salt desert, Asiatic lions, and colorful festivals.",
  "highlights": [
    "Rann of Kutch White Desert",
    "Gir National Park - Asiatic Lions",
    "Statue of Unity",
    "Dwarka & Somnath Temples",
    "Ahmedabad heritage city",
    "Navratri Festival celebrations"
  ],
  "bestTimeToVisit": "October to March",
  "howToReach": {
    "air": "Ahmedabad, Vadodara, Rajkot Airports",
    "train": "Ahmedabad & Surat Railway Stations",
    "road": "Well-connected via NH48 & NH27"
  },
  "activities": [
    {
      "name": "Rann Utsav Festival",
      "duration": "Full Day",
      "price": "₹5000/person",
      "description": "Experience the magical white desert with cultural performances."
    },
    {
      "name": "Gir National Park Safari",
      "duration": "Half Day",
      "price": "₹3000/person",
      "description": "Spot the majestic Asiatic lions in their natural habitat."
    },
    {
      "name": "Ahmedabad Heritage Walk",
      "duration": "2 Hours",
      "price": "₹1000/person",
      "description": "Discover the historical charm of Gujarat’s capital city."
    }
  ],
  images: [
    "/images/states/goa.jpg",
    "/images/states/beach.avif",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg"
  ]
},

{
  "id": 8,
  "slug": "manipur",
  "name": "Manipur",
  "rating": 4.6,
  "reviewCount": 1000,
  "description": "Known as the 'Jewel of India,' Manipur boasts lush valleys, pristine lakes, and a rich cultural heritage with vibrant traditions.",
  "highlights": [
    "Loktak Lake - Floating islands",
    "Kangla Fort",
    "Ima Keithel - Women’s market",
    "Shirui Lily Festival",
    "Thalon Caves",
    "Traditional dance performances"
  ],
  "bestTimeToVisit": "October to April",
  "howToReach": {
    "air": "Imphal Airport (IMF)",
    "train": "No direct rail; nearest station is Dimapur",
    "road": "Well-connected via NH2 & NH37"
  },
  "activities": [
    {
      "name": "Boating on Loktak Lake",
      "duration": "1-2 Hours",
      "price": "₹800/person",
      "description": "Explore the world's only floating lake."
    },
    {
      "name": "Visit Kangla Fort",
      "duration": "Half Day",
      "price": "₹500/person",
      "description": "Discover the historical fort of the Manipuri kings."
    },
    {
      "name": "Thalon Cave Trekking",
      "duration": "Full Day",
      "price": "₹2500/person",
      "description": "Adventure into one of India’s hidden cave systems."
    }
  ],
  images: [
    "/images/states/goa.jpg",
    "/images/states/beach.avif",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg"
  ]
},

{
  "id": 9,
  "slug": "meghalaya",
  "name": "Meghalaya",
  "rating": 4.9,
  "reviewCount": 1100,
  "description": "The 'Abode of Clouds,' Meghalaya is famous for its misty landscapes, living root bridges, and the cleanest village in Asia.",
  "highlights": [
    "Living Root Bridges",
    "Cherrapunji & Mawsynram - Wettest places on Earth",
    "Dawki River - Crystal clear waters",
    "Shillong - Scotland of the East",
    "Mawlynnong - Asia’s cleanest village",
    "Laitlum Canyons"
  ],
  "bestTimeToVisit": "October to May",
  "howToReach": {
    "air": "Shillong Airport (SHL)",
    "train": "No direct rail; nearest station is Guwahati",
    "road": "Well-connected via NH6"
  },
  "activities": [
    {
      "name": "Living Root Bridge Trek",
      "duration": "Half Day",
      "price": "₹1500/person",
      "description": "Hike to the famous root bridges of Meghalaya."
    },
    {
      "name": "Dawki River Boating",
      "duration": "1 Hour",
      "price": "₹1000/person",
      "description": "Enjoy a scenic boat ride on crystal-clear waters."
    },
    {
      "name": "Explore Mawlynnong",
      "duration": "Full Day",
      "price": "₹2000/person",
      "description": "Visit the cleanest village in Asia."
    }
  ],
  images: [
    "/images/states/goa.jpg",
    "/images/states/beach.avif",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg"
  ]
},


{
  "id": 10,
  "slug": "rajasthan",
  "name": "Rajasthan",
  "rating": 4.9,
  "reviewCount": 2000,
  "description": "The Land of Kings, Rajasthan is known for its grand palaces, golden deserts, and rich cultural heritage.",
  "highlights": [
    "Jaipur - The Pink City",
    "Jaisalmer - Thar Desert & Sand Dunes",
    "Udaipur - City of Lakes",
    "Jodhpur - The Blue City",
    "Ranthambore National Park - Tigers",
    "Traditional Rajasthani cuisine"
  ],
  "bestTimeToVisit": "October to March",
  "howToReach": {
    "air": "Jaipur, Udaipur, Jodhpur Airports",
    "train": "Jaipur, Jodhpur, Udaipur Railway Stations",
    "road": "Well-connected via NH48 & NH62"
  },
  "activities": [
    {
      "name": "Desert Safari in Jaisalmer",
      "duration": "Half Day",
      "price": "₹3500/person",
      "description": "Experience an exciting camel safari and overnight camping in the Thar Desert."
    },
    {
      "name": "City Palace Tour in Udaipur",
      "duration": "Half Day",
      "price": "₹2000/person",
      "description": "Explore the majestic palace with stunning architecture and lake views."
    },
    {
      "name": "Wildlife Safari at Ranthambore",
      "duration": "Full Day",
      "price": "₹3000/person",
      "description": "Spot tigers and diverse wildlife in one of India’s best national parks."
    }
  ],
  images: [
    "/images/states/goa.jpg",
    "/images/states/beach.avif",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg"
  ]
},

{
  "id": 11,
  "slug": "nagaland",
  "name": "Nagaland",
  "rating": 4.7,
  "reviewCount": 950,
  "description": "A land of vibrant tribal culture and picturesque landscapes, Nagaland is famous for its Hornbill Festival, rolling hills, and unique traditions.",
  "highlights": [
    "Hornbill Festival - Cultural extravaganza",
    "Dzukou Valley - Trekking paradise",
    "Kohima War Cemetery",
    "Khonoma - Asia’s first green village",
    "Mon - Land of Konyak headhunters",
    "Traditional Naga cuisine"
  ],
  "bestTimeToVisit": "October to May (December for Hornbill Festival)",
  "howToReach": {
    "air": "Dimapur Airport (DMU)",
    "train": "Dimapur Railway Station",
    "road": "Well-connected via NH29"
  },
  "activities": [
    {
      "name": "Hornbill Festival Experience",
      "duration": "Full Day",
      "price": "₹3000/person",
      "description": "Immerse yourself in the grand cultural celebrations of Nagaland."
    },
    {
      "name": "Dzukou Valley Trek",
      "duration": "2 Days",
      "price": "₹4000/person",
      "description": "Hike through one of India's most scenic valleys with stunning landscapes."
    },
    {
      "name": "Explore Khonoma Village",
      "duration": "Half Day",
      "price": "₹1500/person",
      "description": "Visit Asia’s first green village known for its sustainable practices."
    }
  ],
  images: [
    "/images/states/goa.jpg",
    "/images/states/beach.avif",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg",
    "/images/states/goa.jpg"
  ]
},

    // ... other destinations
  ];
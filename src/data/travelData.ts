export interface DestinationItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  fullStory: string;
  highlights: string[];
  bestSeason: string;
  idealDuration: string;
  cardBg: string;
  textVariant: 'secondary-container' | 'surface-container';
  image: string;
  alt: string;
}

export interface PackageItem {
  id: string;
  title: string;
  duration: string;
  isSignature?: boolean;
  description: string;
  colSpan: string;
  cardBg: string;
  textVariant: 'secondary-container' | 'surface-container';
  footerMetaType: 'icons' | 'text';
  footerLabel?: string;
  itineraryHighlights: { day: string; title: string; detail: string }[];
  inclusions: string[];
  travelStyle: string[];
}

export interface FleetItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  capacity: string;
  capacityIcon: string;
  luggage: string;
  bestFor: string;
  isHighlighted?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TravelStyleTag {
  id: string;
  label: string;
  variant: 'secondary' | 'surface' | 'highest';
  description: string;
}

export interface PromiseBlock {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  cardBg: string;
  textVariant: 'secondary-container' | 'surface-container';
}

export interface StoryItem {
  id: string;
  quote: string;
  initials: string;
  author: string;
  tripMeta: string;
  cardBg: string;
  avatarBg: string;
  avatarText: string;
  metaText: string;
  hasBorder?: boolean;
}

export interface JournalArticle {
  id: string;
  categoryMeta: string;
  title: string;
  summary: string;
  fullContent: string[];
  cardBg: string;
  metaColor: string;
  bodyColor: string;
  isFeatured?: boolean;
  image?: string;
  alt?: string;
}

export const HERO_IMAGES = {
  pebble1: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzpRXJxGZAA4yLXLNPHiaHuGfzRoj0uJFtG0MPaaZYU0P7pJ7Nca7bdY6WhmqjeAl01FioCR3qvOGzeT3oXOp5Hl9SkKr9ID93p561USjRL-a3CocQQpV4nOOOR7n9lnIxwMhK6_-LstyqsyslTkc__vCyIBmI6c9Q9S8go4E2tCJ16_pxp20PI7ItO8yfh_Qh86NMxIn1vApcGepr6NwVgUNW7Z4JIPCJj2xVbLZnNJRn8xMvS0X0',
    alt: 'A serene Kerala backwater waterway at golden sunrise with an authentic wooden houseboat moving slowly past lush emerald coconut palm groves. The calm reflective water mirrors the tranquil warm sky. The composition emphasizes organic stillness, tropical natural tones, and peaceful slow travel.',
  },
  pebble2: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTzlFd_OjgkfNLr7WtXPn5Tbu3p991tP6CWeD60L5vlQAdoYxIrKDXLhr6l11e1iTDcFsaWvcmYKPllHSAnxallf9wsi_v7juIXysLfg9Ionr1XV6A4KhcEcIHkgu1oZ8_LDa8J04mOkGYMLyekG7S1hXCx-NbK9737J0CTwTuna90-F9hL5wb8BL6fXBO4FyX5zuKqOXX71SlBTglp42nnk-g6uCX8DMJn3xk60xGke7W0xmbybYU',
    alt: 'Two delighted travelers laughing together on a sunlit seaside veranda framed by tropical foliage and terracotta tiles in coastal South India. Warm natural daylight softly illuminates their genuine expressions of joy and relaxed conversation during an intimate slow travel expedition.',
  },
  pebble3: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy0QJcYBcXKRfImYZ95DCn6Ihnbxvk2SnLJpdAS_A8uJHznFLkRKPxJ-aoCG8htbfgVcdothQsZc-DAFMozqKGJ90jjGAIg5FgkB70JAsZz8I7xJ-iQMvsA94DFbHmpVhgyUE3lt7RKEXl5Ykf8E1iiIfS7wyci8apISgKd4LROLr84XN373W-j9CrnHHSUiwHD4tRmq8JQ1yqUrs033ZLTlvdEgOn04diCGYvt3AZCyIqjlAZRxvJ',
    alt: 'Vibrant coastal fishing village in Kerala featuring traditional wooden outrigger boats resting gently on soft sandy shores under nodding palm trees at gentle dusk. Warm amber village lantern glows softly blend with oceanic twilight blues in a calm artisanal travel scene.',
  },
};

export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'kerala',
    name: 'Kerala',
    badge: 'Homeground',
    description: 'Backwaters, cardamom hills, boutique ancestral homes & coastal cuisine.',
    fullStory:
      'Our homeground and heartbeat. Experience Kerala far beyond standard tourist circuits—glide through narrow village canals in Kumarakom, wake to mist-draped tea estates in Munnar, and dine with heritage families in Fort Kochi.',
    highlights: [
      'Private solar-assisted kettuvallam cruises in quiet Alleppey & Kavalam canals',
      'Guided spice & botanical walks with small-scale growers in Wayanad & Thekkady',
      '120-year-old Syrian Christian & Malabar heritage homestays',
      'Private Kathakali & Kalaripayattu morning sessions with local masters',
    ],
    bestSeason: 'September to March (Monsoon retreats June–August)',
    idealDuration: '5 to 10 Days',
    cardBg: 'bg-secondary-container',
    textVariant: 'secondary-container',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDi-O5IxyYLhwiCXKskw2RaKAeMRAZYcDPewj_QWRaEX0k45NUzwgzLB0vt9luP91_EWNggU3vfTydBcbDbuXOqNNVypmT4hdOegRU3BEc05WuDJT4VSPSnN3v7FvgRc82fcIzI2r7pzuL0JKDEE_7ha666DcAwHF3jUVmrIEqHUXH9McQ9yQBnigzfBQD1_UR1svLc_eY1PviG6Djhy6zQMRCu7N-jd8TvpN0yCnBBvR7sqy7Yx1Ob',
    alt: 'Scenic rolling tea plantations in Munnar Kerala shrouded in ethereal morning mist, with organic curved greenery terraced hillsides and warm soft sunlight breaking through distant mountain ridges. A pure flat aesthetic capturing calm highlands and restorative natural beauty.',
  },
  {
    id: 'india',
    name: 'India',
    badge: 'Subcontinent',
    description: 'Desert fortress sanctuaries, Himalayan foothills & ancient temple trails.',
    fullStory:
      'Across the Indian subcontinent, we curate slow regional chapters that honor local craft and quiet sanctuaries—from sandstone havelis in Rajasthan to orchard retreats in Himachal and Chola temple towns in Tamil Nadu.',
    highlights: [
      'Restored boutique havelis & stepwell walks in Jodhpur and Udaipur',
      'Slow Himalayan foothill stays in Kumaon & Kangra Valley tea estates',
      'Chettinad culinary heritage & architectural trails in Tamil Nadu',
      'Dedicated inter-city chauffeurs and unhurried rail segments',
    ],
    bestSeason: 'October to April (Himalayas year-round)',
    idealDuration: '7 to 14 Days',
    cardBg: 'bg-surface-container-high',
    textVariant: 'surface-container',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBNfUlPurYL658nL28135B3eMd933XDunm99IBt7mU2PHaNe-PettUv3R2XQjwcGC-8tfXQsQshAduiEaOBf69oIW1nUnDMyx_NQVqkHliFDCVSolVX0hCqBNKn78GwMtnYTojuLgSXm0AghN1sUfY-Xux59-dEuWbADphxpqoLSmZQ6GBPAqWkkP6gRqa_ohg7nhlVrKRBxsH36sUUoqZvF4cmJhCWNFO1GRdltFYGOLOJW1IfE7yb',
    alt: 'A historic Rajasthani courtyard with sandstone archways, intimate lotus pond, and soft desert dawn light highlighting intricate handmade stone carvings. The warm neutral and terracotta palette captures relaxed regal heritage without modern rush.',
  },
  {
    id: 'asia',
    name: 'Asia',
    badge: 'Far East',
    description: 'Kyoto tea gardens, Sri Lankan highlands & Indonesian coastal retreats.',
    fullStory:
      'Thoughtful journeys across our neighboring Asian coastlines and highlands. Whether it is a scenic train ride through Sri Lanka’s tea country, artisan pottery villages in Northern Thailand, or quiet moss temples in Kyoto.',
    highlights: [
      'Boutique tea bungalow stays in Ella & Nuwara Eliya, Sri Lanka',
      'Craft & bamboo sanctuary trails in Chiang Mai and tranquil Krabi bays',
      'Ryokan mornings and private philosopher’s path walks in Kyoto',
      'Secluded coastal eco-villas in Sidemen and northern Bali',
    ],
    bestSeason: 'Year-round (Region dependent)',
    idealDuration: '6 to 12 Days',
    cardBg: 'bg-surface-container',
    textVariant: 'surface-container',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2jC3KpswQI74Zkwt8vyDWk4SyeBj4dQwSZLyrFMNS1bhAF1UPgbnJg7gjAuTgy9hqLo3_qWSAh6PUeJs0-y3Y16_Dix9x0vYN8IfZeUjxCZ_RGlujTan4eXc7yJwetiyKmtXxiTcY8gH-HTshomplYeFDJpJ4eXt1UkAzG2m7PAuu8_RX6I4eNfcY4Dan-ZQrdq4hwh9dKIxGeF_mOQ3pMLVe7Ma5v814ahp-snQe_JUuKY7kj-5s',
    alt: 'Quiet bamboo grove in Southeast Asia with soft natural dappled sunlight filtering through tall green stalks onto a smooth pebble walkway leading to a traditional wooden sanctuary. Calming, balanced, and deeply connected to nature.',
  },
  {
    id: 'middle-east',
    name: 'Middle East',
    badge: 'Oasis & Dunes',
    description: 'Starlit desert glamping, Muscat fjords & Dubai architectural wonders.',
    fullStory:
      'Just a short flight from Kerala, the Arabian peninsula offers dramatic desert silence, historic spice souks, and effortless family hospitality—crafted with senior-friendly pacing and private transfers.',
    highlights: [
      'Traditional wooden dhow evenings along Old Dubai Creek & Al Fahidi',
      'Low-impact Bedouin desert conservation camps under starlit skies',
      'Oman’s Hajar mountain wadis, Muscat coastal fjords & Nizwa souks',
      'Wheelchair-accessible & multi-generational family concierge care',
    ],
    bestSeason: 'October to April',
    idealDuration: '4 to 7 Days',
    cardBg: 'bg-secondary-container',
    textVariant: 'secondary-container',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2PPCG4ZUO1AJrggmVNMLmVMOstGrWLtVPvWeLyBsuOBo4rcuJBaaQYflpN7UWOcjP_cmSvbjvEgicQjkRKdgD2wYGiYK7LC9-_n3u2GO5tXzqjKZqUdgPDDjD2nrrrSlbbKtqTqQj0hm_o5HS2edbt9dboPnaVp0dTaCNCtq-LuhlXC2hqs-fHI4VPI9jRO-MS-sTR9LywMOwx5CMx9jDPrRQlBlj7ToeGyBm9WFb_ppH7P5nMlJF',
    alt: 'Majestic golden sand dunes of the Arabian desert under an indigo twilight sky dotted with clear desert stars and a cozy low-lit bedouin tent with linen cushions. Gentle warm ambient lighting accentuates peaceful desert solitude.',
  },
  {
    id: 'europe',
    name: 'Europe',
    badge: 'Old World',
    description: 'Tuscan vineyards, Swiss alpine trains & quaint Portuguese coastal fishing ports.',
    fullStory:
      'Unhurried European voyages built around scenic rail journeys, countryside agriturismos, and walkable historic quarters—Complete with Schengen visa guidance and first-class rail coordination from our Kochi desk.',
    highlights: [
      'Panoramic Bernina & Glacier Express alpine rail routes in Switzerland',
      'Family-run vineyard & olive grove stays in Tuscany and Umbria',
      'Atlantic coastal tramways and tilework walks in Lisbon & Porto',
      'End-to-end Schengen visa paperwork & travel insurance assistance',
    ],
    bestSeason: 'April to October',
    idealDuration: '8 to 14 Days',
    cardBg: 'bg-surface-container-high',
    textVariant: 'surface-container',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIvMnxUYV29yYpg6zLlxs-WshDqQq_zD6p9FeiCsl9rr9tt441GzTJVXKChvhOZ20QqbiMBdzzgri1lgC8IGZHwxCcoIZM1ByGXrHd9DffAIYI0fYq8T4X-iRAhHp3mKZvNFWuJe773tIos28WBbGnIEgLO1mXy41C14QpvR-JETlG9r2nMqS0tVstUNhQgZrId8TrzB7kwGAQNvUqHqgO3N8AsGEkCSC9PCJpMtlJS_JusFNEhlUv',
    alt: 'Charming pastel village along the Italian Amalfi coastline with terracotta roofs cascading toward deep azure waters under gentle Mediterranean midday sunshine. Soft coastal breeze and authentic cobblestone atmosphere evoke timeless relaxation.',
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'kerala-escape',
    title: 'Kerala Escape',
    duration: '6 Nights / 7 Days',
    isSignature: true,
    description:
      'Drift along quiet backwater channels on a solar-assisted houseboat, breathe spice-scented mountain air in Thekkady, and conclude with authentic coastal dining in historic Fort Kochi.',
    colSpan: 'md:col-span-7',
    cardBg: 'bg-surface-container',
    textVariant: 'surface-container',
    footerMetaType: 'icons',
    travelStyle: ['Family Journeys', 'Honeymoon & Romance', 'Domestic Kerala', 'Solo Mindfulness'],
    itineraryHighlights: [
      {
        day: 'Days 1–2',
        title: 'Fort Kochi Heritage & Harbor Breezes',
        detail: 'Arrive in Kochi. Settle into a 19th-century courtyard boutique home, stroll past Chinese fishing nets at dusk, and dine on fresh catch.',
      },
      {
        day: 'Days 3–4',
        title: 'Thekkady Cardamom Hills & Periyar Sanctuary',
        detail: 'Gentle drive into the Western Ghats. Walk with local spice cultivators, visit an organic pepper farm, and enjoy bamboo rafting at dawn.',
      },
      {
        day: 'Days 5–6',
        title: 'Alleppey & Kumarakom Slow Backwaters',
        detail: 'Board a private artisan houseboat with a dedicated chef, followed by a serene lakeside homestay tucked under coconut groves.',
      },
      {
        day: 'Day 7',
        title: 'Morning Toddy Shop Breakfast & Departure',
        detail: 'Savor warm appams and coconut stew before your chauffeur drops you smoothly at Cochin International Airport.',
      },
    ],
    inclusions: [
      'Handpicked Heritage Homestays & Eco-Villas',
      'Private AC Innova Crysta & Courteous Local Driver',
      'Private Day- & Overnight Kettuvallam Houseboat with Chef',
      '24/7 Fort Kochi WhatsApp Human Coordinator',
    ],
  },
  {
    id: 'dubai-holiday',
    title: 'Dubai Holiday',
    duration: '4 Nights / 5 Days',
    description:
      'Old creek dhow rides, Bedouin desert camps under dark skies, modern architecture walks, and seamless transfers.',
    colSpan: 'md:col-span-5',
    cardBg: 'bg-secondary-container',
    textVariant: 'secondary-container',
    footerMetaType: 'text',
    footerLabel: 'Family & Leisure',
    travelStyle: ['Family Journeys', 'Group Friends', 'International Discoveries'],
    itineraryHighlights: [
      {
        day: 'Day 1',
        title: 'Arrival & Old Dubai Creek Abra Crossing',
        detail: 'Private airport meet-and-greet, check-in at a calm boutique hotel, and an evening wooden dhow dinner cruise.',
      },
      {
        day: 'Day 2',
        title: 'Al Fahidi Historical Quarter & Spice Souks',
        detail: 'Morning guided walk through wind-tower courtyards, Emirati coffee tasting, and unhurried afternoon leisure.',
      },
      {
        day: 'Day 3',
        title: 'Desert Conservation Reserve & Starlit Dinner',
        detail: 'Gentle vintage Land Rover wildlife drive and private Bedouin camp dinner away from loud tourist crowds.',
      },
      {
        day: 'Days 4–5',
        title: 'Architectural Icons & Effortless Departure',
        detail: 'Private visit to Museum of the Future, Dubai Frame, and relaxed botanical garden walks before your flight home.',
      },
    ],
    inclusions: [
      'UAE Tourist Visa & Comprehensive Medical Insurance',
      'Private Chauffeur Transfers Throughout',
      'Senior- & Child-Friendly Pacing',
      'Curated Dining Reservations & Entry Passes',
    ],
  },
  {
    id: 'maldives-getaway',
    title: 'Maldives Getaway',
    duration: '4 Nights / 5 Days',
    description:
      'Overwater villas, tranquil reef snorkeling, and secluded private sandbank lunches surrounded by calm turquoise lagoons.',
    colSpan: 'md:col-span-4',
    cardBg: 'bg-surface-container-high',
    textVariant: 'surface-container',
    footerMetaType: 'text',
    footerLabel: 'Island Seclusion',
    travelStyle: ['Honeymoon & Romance', 'Solo Mindfulness', 'International Discoveries'],
    itineraryHighlights: [
      {
        day: 'Day 1',
        title: 'Speedboat or Seaplane to Your Atoll Sanctuary',
        detail: 'Direct connection from Kochi or Mumbai to Malé, followed by a scenic lagoon transfer to your overwater or beach villa.',
      },
      {
        day: 'Days 2–3',
        title: 'House Reef Snorkeling & Private Sandbank Picnic',
        detail: 'Swim alongside sea turtles with a marine biologist and enjoy a shaded linen picnic on an uninhabited coral sandbank.',
      },
      {
        day: 'Days 4–5',
        title: 'Sunset Dhoni Cruise & Overwater Spa',
        detail: 'Sail on a traditional Maldivian wooden dhoni at sunset before a restful final morning by the lagoon.',
      },
    ],
    inclusions: [
      'Boutique Atoll Resort or Local Island Eco-Villa',
      'Return Seaplane / Speedboat Transfers',
      'Half-Board or Full-Board Coastal Dining',
      'Guided House Reef Snorkeling Excursion',
    ],
  },
  {
    id: 'thailand-explorer',
    title: 'Thailand Explorer',
    duration: '6 Nights / 7 Days',
    description:
      'Chiang Mai artisan workshops, Bangkok river ferries, and limestone cove kayaking around serene Krabi bays.',
    colSpan: 'md:col-span-4',
    cardBg: 'bg-surface-container',
    textVariant: 'surface-container',
    footerMetaType: 'text',
    footerLabel: 'Culture & Nature',
    travelStyle: ['Group Friends', 'Solo Mindfulness', 'International Discoveries', 'Custom Whims'],
    itineraryHighlights: [
      {
        day: 'Days 1–2',
        title: 'Chiang Mai Mountain Craft & Indigo Workshops',
        detail: 'Stay in a leafy Lanna heritage lodge, learn natural indigo dyeing with local weavers, and visit quiet forest temples.',
      },
      {
        day: 'Days 3–4',
        title: 'Bangkok Chao Phraya River & Canal Life',
        detail: 'Explore Thonburi’s quiet klongs by longtail boat, sample Michelin-recognized street kitchens, and visit artisan shophouses.',
      },
      {
        day: 'Days 5–7',
        title: 'Krabi Limestone Lagoons & Mangrove Kayaking',
        detail: 'Paddle silently through emerald mangrove canyons at high tide and unwind on quiet Andaman shores.',
      },
    ],
    inclusions: [
      'Boutique Heritage & Coastal Stays',
      'Domestic Flights & Private Longtail Boats',
      'Private Artisan & Culinary Experiences',
      'Full Visa-on-Arrival Documentation Support',
    ],
  },
  {
    id: 'european-highlights',
    title: 'European Highlights',
    duration: '9 Nights / 10 Days',
    description:
      'Scenic panoramic railways through the Swiss Alps, historic Parisian walks, and relaxed vineyard stays in central Italy.',
    colSpan: 'md:col-span-4',
    cardBg: 'bg-secondary-container',
    textVariant: 'secondary-container',
    footerMetaType: 'text',
    footerLabel: 'Rail & Heritage',
    travelStyle: ['Honeymoon & Romance', 'Family Journeys', 'International Discoveries', 'Custom Whims'],
    itineraryHighlights: [
      {
        day: 'Days 1–3',
        title: 'Parisian Left Bank Strolls & Bistro Evenings',
        detail: 'Stay in a boutique Saint-Germain townhouse, enjoy morning bakery walks, and cruise the Seine at twilight.',
      },
      {
        day: 'Days 4–6',
        title: 'Swiss Alpine Passes by Panoramic Train',
        detail: 'Cross into Lucerne and Interlaken by first-class rail, riding cogwheel mountain trains to car-free alpine villages.',
      },
      {
        day: 'Days 7–10',
        title: 'Tuscan Countryside Agriturismo & Florence',
        detail: 'Cross the Alps into Italy for slow vineyard lunches, Renaissance art walks, and warm countryside hospitality.',
      },
    ],
    inclusions: [
      'First-Class Scenic Rail Passes & Seat Reservations',
      'Schengen Visa Appointment & Dossier Preparation',
      'Handpicked Central Boutique Hotels & Agriturismos',
      'Private Station Transfers & Local Walking Guides',
    ],
  },
];

export const FLEET_TIERS: FleetItem[] = [
  {
    id: 'local-rides',
    title: 'Local Rides',
    subtitle: 'Sedans (Dzire, Etios, Aura)',
    icon: 'directions_car',
    capacity: 'Capacity: Up to 3 Guests',
    capacityIcon: 'person',
    luggage: 'Luggage: 2 Large Bags',
    bestFor: 'Best for: City runs & Day hops',
    isHighlighted: false,
  },
  {
    id: 'private-travel',
    title: 'Private Travel',
    subtitle: 'Premium MPVs (Innova Crysta, Hycross)',
    icon: 'airport_shuttle',
    capacity: 'Capacity: Up to 6 Guests',
    capacityIcon: 'person',
    luggage: 'Luggage: 4 Large Bags',
    bestFor: 'Best for: Mountain & Coastal circuits',
    isHighlighted: true,
  },
  {
    id: 'small-groups',
    title: 'Small Groups',
    subtitle: 'Executive Vans (Tempo Traveller 12-17s)',
    icon: 'rv_hookup',
    capacity: 'Capacity: Up to 14 Guests',
    capacityIcon: 'groups',
    luggage: 'Luggage: Dedicated Boot Space',
    bestFor: 'Best for: Extended family excursions',
    isHighlighted: false,
  },
  {
    id: 'large-groups',
    title: 'Large Groups',
    subtitle: 'Luxury Coaches (26 to 45 Seater AC)',
    icon: 'directions_bus',
    capacity: 'Capacity: 20 to 45 Guests',
    capacityIcon: 'groups_3',
    luggage: 'Luggage: Full Underbelly Luggage Bay',
    bestFor: 'Best for: Corporate retreats & Events',
    isHighlighted: false,
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'flight-booking',
    title: 'Flight Booking',
    description: 'Domestic & international routes with flexible fares.',
    icon: 'flight',
  },
  {
    id: 'hotels-stays',
    title: 'Hotels & Stays',
    description: 'Handpicked heritage homestays and boutique eco-lodges.',
    icon: 'hotel',
  },
  {
    id: 'holiday-planning',
    title: 'Holiday Planning',
    description: 'Slow, intentional routes built around real living rhythms.',
    icon: 'calendar_month',
  },
  {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    description: 'Clear paperwork guidance for trouble-free departures.',
    icon: 'assignment_ind',
  },
  {
    id: 'insurance',
    title: 'Insurance',
    description: 'Comprehensive travel medical coverage & peace of mind.',
    icon: 'shield',
  },
  {
    id: 'transfers',
    title: 'Transfers',
    description: 'Airport pick-ups and inter-district chauffeur drives.',
    icon: 'commute',
  },
  {
    id: 'custom-trips',
    title: 'Custom Trips',
    description: 'Tailored itineraries with no fixed templates or rigid times.',
    icon: 'tune',
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    description: 'Mindful team offsites, seminars, and creative gatherings.',
    icon: 'business_center',
  },
];

export const TRAVEL_STYLE_TAGS: TravelStyleTag[] = [
  {
    id: 'family',
    label: 'Family Journeys',
    variant: 'secondary',
    description: 'Multi-generational routes with gentle transit, interconnecting heritage rooms, and senior-friendly care.',
  },
  {
    id: 'honeymoon',
    label: 'Honeymoon & Romance',
    variant: 'surface',
    description: 'Private backwater houseboats, candlelit spice-garden dinners, and secluded coastal pool villas.',
  },
  {
    id: 'solo',
    label: 'Solo Mindfulness',
    variant: 'secondary',
    description: 'Safe, vetted homestays, Ayurvedic wellness retreats, and unhurried reading days by the water.',
  },
  {
    id: 'friends',
    label: 'Group Friends',
    variant: 'surface',
    description: 'Private estate buyouts, plantation trails, kayaking coves, and curated local culinary crawls.',
  },
  {
    id: 'corporate',
    label: 'Corporate Offsites',
    variant: 'secondary',
    description: 'Inspiring boutique venues with high-speed connectivity, nature walks, and seamless group fleet logistics.',
  },
  {
    id: 'kerala',
    label: 'Domestic Kerala',
    variant: 'surface',
    description: 'Deep-rooted local journeys from Fort Kochi and Munnar to Wayanad and Kannur’s quiet beaches.',
  },
  {
    id: 'international',
    label: 'International Discoveries',
    variant: 'secondary',
    description: 'Handcrafted abroad itineraries across Asia, the Middle East, and Europe with full visa support.',
  },
  {
    id: 'custom',
    label: 'Custom Whims',
    variant: 'highest',
    description: 'Follow a specific passion—architecture, birdwatching, textile weaving, or heirloom coastal recipes.',
  },
];

export const TRAVEL_STYLE_IMAGE = {
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZn5Ej_yp_NwGqL5xErlQ5pkhojNAb6LCx2_AttG1XwLMp6QxlJgCtP2V1BN7pFGfYj9DCP2wNqtgWlvY1ZJRhg9DmeA8rAmbb01PR1zyhygeDVjqMZVIMcIlDRwxLmzdZwhtp2aYGlJsiBqyT60qhgKbmDm0WFL_jo-WV802E-6W9UZod1pl4X-YnvzoZuEP8kzCef-vnP3gUc-mAaJjJB7rX1Q-VnhDyPvMNiusT82elwlShTgis',
  alt: 'A solo woman traveler seated calmly on a woven bamboo mat overlooking quiet tropical backwaters with morning mist. Soft natural sun glow warms the scene, illustrating slow personal discovery, peaceful solitude, and restorative mindful travel.',
};

export const PROMISE_BLOCKS: PromiseBlock[] = [
  {
    id: 'personal-support',
    title: 'Personal Support',
    description:
      'A dedicated human coordinator assigned to you from departure to arrival. Direct WhatsApp check-ins, zero phone trees.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB67SzWG7dzCd34rJWILGxizKHsg9LmR6xdwPbchloLdOQQlDlZgK3XGKbqImZhMPomeSzEBnEF89Y4A8ZGZYQ3dST7k2EAVel7MVvU4-otW-mUDnylmIVGyVvYfXj10oMYaLPhFomahfpSYYt4i90Sm_OlvJt4r9Y755kdPP5xzKmpf6KwBsPTdBs8NXZW8GLMN85Vvwz6vi9kh0klZWS9hXIVH6pD8GcAgXeuF1UOHVZMUcSEIojD',
    alt: 'Warm local travel concierge at an open air desk talking warmly with guests over cups of spiced tea. Sunlight streams across a wooden table with hand-drawn maps in a cozy, relaxed coastal Kerala heritage space.',
    cardBg: 'bg-surface-container',
    textVariant: 'surface-container',
  },
  {
    id: 'local-knowledge',
    title: 'Local Knowledge',
    description:
      'We know the quiet ferry crossing times, the aunties who cook the best appams, and the hillside viewpoints untouched by tour buses.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA27mm72UzxKDGS5NUwuVA4BFC9n0B87YEaSLNerG7rnEaDk_V0vV0LSB6urkkCNaeviKh1Ak37qObFpJuDWi1PKb9pT-k_WvSZr-j04tdyklZBtCdaOPnvN4a5vAKNywzAQDJ_7wfTcY41V9H32ESgkM6fec6l3UL7WEPvn5u-kZSED4CAZsdtcMnhaFy-CjjWS8JaEuf0b-kv4jniv7By8Es8yIHjuDQubflLUgoczcYCUkFWy9gy',
    alt: 'Artisanal spice grower showing fresh green cardamom pods to curious visitors in the lush shaded foothills of Wayanad Kerala. Rich botanical textures, earthy soils, and friendly rural hospitality.',
    cardBg: 'bg-secondary-container',
    textVariant: 'secondary-container',
  },
  {
    id: 'travel-made-simple',
    title: 'Travel Made Simple',
    description:
      'One clear itinerary, verified stays, transparent quotes, and zero hidden surcharges or forced shopping stops.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA--5fmbrRkxU00RJ5wPVq2W1V4aviLQ_qHGG7B9HV8hEev55e6SY2OYOO_Ps3t1aMWj5Lzpk3vhUJZvmjl4hu7DaO6dQe01FpTQBjifHR7Yp45EtKZ-qkSnz8ZpklFCNJUQIrHwyoLWmlfYRJxCW61DXLr9ZH_AuJ0xKxhyqDyUqZbAKi4TgQK3KVDsv8B1yrddtd_VIAcknsUNR5Gh7bIggtvo1jC-ppa3oXlL9JdjlLyLxU4oQK8',
    alt: 'A clean, minimalist travel journal notebook resting on a wooden boat deck beside sunglasses and a fresh tender coconut with sea waves softly breaking in the background under clear skies.',
    cardBg: 'bg-surface-container-high',
    textVariant: 'surface-container',
  },
];

export const STORIES: StoryItem[] = [
  {
    id: 'story-1',
    quote:
      '"They didn\'t give us a standard tourist bus ride. We stayed at a 120-year-old Syrian Christian home by the river, eating steamed fish wrapped in banana leaves. Pure magic."',
    initials: 'AK',
    author: 'Ananya & Kartik',
    tripMeta: 'Kerala Backwaters • Bangalore',
    cardBg: 'bg-surface-container-lowest',
    avatarBg: 'bg-secondary-container',
    avatarText: 'text-primary-container',
    metaText: 'text-secondary',
    hasBorder: true,
  },
  {
    id: 'story-2',
    quote:
      '"Traveling with our 72-year-old mother to Dubai felt so daunting. Breeze & Banyan handled wheelchair assistance, quiet dining spots, and private drivers effortlessly."',
    initials: 'RS',
    author: 'Rashid S.',
    tripMeta: 'Dubai Family Journey • Kozhikode',
    cardBg: 'bg-secondary-container',
    avatarBg: 'bg-surface-container-lowest',
    avatarText: 'text-primary',
    metaText: 'text-on-secondary-container',
    hasBorder: false,
  },
  {
    id: 'story-3',
    quote:
      '"The Thailand route they set up took us past typical party spots straight into mountain craft villages and tranquil bay kayaking. Best holiday we have ever had."',
    initials: 'ML',
    author: 'Maya & Leo',
    tripMeta: 'Thailand Explorer • Mumbai',
    cardBg: 'bg-surface-container-lowest',
    avatarBg: 'bg-surface-container-high',
    avatarText: 'text-primary',
    metaText: 'text-secondary',
    hasBorder: true,
  },
  {
    id: 'story-4',
    quote:
      '"Their local driver Rajan was gentle, patient, and drove with such grace across the Munnar hairpins. Breeze & Banyan is our family\'s forever travel planner."',
    initials: 'DN',
    author: 'Deepak Nair',
    tripMeta: 'Hill Station Circuit • Chennai',
    cardBg: 'bg-surface-container',
    avatarBg: 'bg-secondary-container',
    avatarText: 'text-primary-container',
    metaText: 'text-secondary',
    hasBorder: false,
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'slow-boating-kerala',
    categoryMeta: 'Featured Essay • 7 min read',
    title: 'The Art of Slow Boating in Kerala',
    summary:
      'Why rushing through the backwaters is a missed opportunity. Reflections on waking to the sound of kingfishers, slow coconut curries, and river life unbothered by watches.',
    isFeatured: true,
    cardBg: 'bg-secondary-container',
    metaColor: 'text-primary-container',
    bodyColor: 'text-on-secondary-container',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFmFoLsdvMDDD5ETa8_-WRYWSAPREhPPoK1Q9TV7HWcWwAZ4LfCJeTxG6UA5D15CAcaJgGgWaJLL4pCr1FHHMLKLPAC86jAyWpmBF8TEEmXLQUprCHN5s6t00s38L7yTLsW4KxgpvdLGfa-qmBFW_T8wgEE_BRHjl_k-4_Mrm8yA_07XzMVRSR48ZhCNIFA2o5VQU5BTmPUos3ZLXsZ6uKeF3z2N7QNyyqgFNbP5yllWLZ80osjNee',
    alt: 'Traditional wooden canoe gliding slowly down a narrow green canal lined with duckweed and blooming wild water hyacinths in the Kerala backwaters. Golden dawn sunlight filters softly through hanging banyan tree roots.',
    fullContent: [
      'Most visitors meet the backwaters at noon and leave by nine the next morning—just enough time to snap a photo from the deck of a motorized houseboat along the widest, busiest waterway in Alleppey. Yet the true magic of Vembanad and its tributary canals begins only when the engines stop and the narrow village channels open up.',
      'In a hand-punted wooden country canoe (shikara or vallam), you move at the speed of walking. You hear the splash of a white-throated kingfisher diving into emerald water, the rhythmic slap of laundry against river stones, and the morning school ferry gliding past coconut groves.',
      'On our slow backwater journeys, we pair solar-assisted kettuvallams with two-night stays at family-run riverfront homesteads. Lunch isn’t a buffet—it is pearl spot fish (karimeen) marinated in freshly ground shallots and black pepper, wrapped in a banana leaf from the garden and seared slowly over coconut-husk embers.',
    ],
  },
  {
    id: 'monsoon-packing-western-ghats',
    categoryMeta: 'Packing • 4 min read',
    title: 'What to Pack for Monsoon in the Western Ghats',
    summary: 'Breathable linen, quick-dry canvas, and herbal mosquito balms that actually work.',
    cardBg: 'bg-surface-container',
    metaColor: 'text-secondary',
    bodyColor: 'text-secondary',
    fullContent: [
      'Between June and August, Kerala transforms into an emerald sanctuary. The Western Ghats drink in the southwest monsoon, waterfalls roar to life in Athirappilly and Wayanad, and Ayurvedic retreats enter their most restorative season (Karkidakam).',
      'Leave heavy denim and thick leather boots at home—humidity prevents heavy fabrics from drying overnight. Instead, pack unbleached cottons, loose handloom linen shirts, and open-weave sandals with sturdy rubber grip for mossy courtyard stones.',
      'We always keep sturdy golf umbrellas and locally distilled lemongrass-citronella balms inside every Breeze & Banyan vehicle so you can step out for hot chai whenever the rain pauses.',
    ],
  },
  {
    id: 'beyond-sadya-malabar-kitchens',
    categoryMeta: 'Culinary • 6 min read',
    title: 'Beyond Sadya: Exploring Malabar’s Coastal Kitchens',
    summary: 'Mussels cooked in roasted coconut, pathiri pancakes, and heirloom biryani pots in Thalassery.',
    cardBg: 'bg-surface-container-high',
    metaColor: 'text-secondary',
    bodyColor: 'text-secondary',
    fullContent: [
      'While the banana-leaf Sadya feast is justly celebrated, northern Kerala’s Malabar coast holds a culinary universe shaped by centuries of spice trade across the Arabian Sea.',
      'In Kozhikode and Thalassery, kitchens hum with the aroma of kaima—a short-grain, floral rice used instead of basmati for authentic Malabar dum biryani—layered with caramelized onions, cashews, and ghee.',
      'Our culinary itineraries invite you directly into home kitchens to learn the art of pressing paper-thin rice pathiris and slow-roasting fresh kallummakaya (green mussels) stuffed with spiced rice.',
    ],
  },
  {
    id: 'respectful-homestay-etiquette',
    categoryMeta: 'Etiquette • 5 min read',
    title: 'Respectful Homestay Etiquette: Being a Good Guest',
    summary: 'Small customs that open warm doors, from footwear rituals to kitchen appreciation.',
    cardBg: 'bg-secondary-container',
    metaColor: 'text-primary-container',
    bodyColor: 'text-on-secondary-container',
    fullContent: [
      'A Kerala homestay is not a hotel—it is an invitation into a living ancestral home, often cared for by the same family for three or four generations.',
      'Slipping off your outdoor footwear at the veranda threshold keeps the red-oxide or Athangudi tiled floors cool and spotless. Asking your host about the history of the timber rafters or the jackfruit tree in the courtyard often sparks evening conversations that become the highlight of your trip.',
      'If you have dietary preferences or wish to wake up late, simply share it openly on day one—Kerala hosts take immense pride in tailoring meals fresh to your rhythm.',
    ],
  },
];

export const ABOUT_IMAGE = {
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9VWzJd4r8hv8fOA3NMPkYzntyxc5CS9xSQk3Li5mErHgvJR_Gn98LzHdBMFBCCH5phWH0aJC0Rr9rOYFoBNxDqYZLnHdXAflXvddOU9El8BCU-zXoOLJ--fMN-4YFDbqYleivQ0_6E-BuVhiowrJ-2Pm34_oj-mGE4CAjKvTk3jJ9TDT5HPfFTU28aihch2SV764J7Zv-rldDTARxtFm67v8z_dSMckyce22iJPnQ73npVJVYERK5',
  alt: 'A historic heritage courtyard in Fort Kochi with blooming bougainvillea cascading over whitewashed walls, handcrafted wicker chairs, and a quiet brick pathway under sprawling leafy banyan canopy. Natural sunny light-mode atmosphere with warm earthy tones.',
};

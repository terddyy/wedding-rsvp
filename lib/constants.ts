import { VenueInfo, ItineraryEvent, RegistryItem } from '@/types';

export const WEDDING_DATE = process.env.NEXT_PUBLIC_WEDDING_DATE!;
export const COUPLE_NAMES = process.env.NEXT_PUBLIC_COUPLE_NAMES!;

export const VENUE: VenueInfo = {
  name: 'Kapitan Moy Restaurant',
  address: 'J. P. Rizal Street, San Roque',
  city: 'Marikina City',
  state: 'Metro Manila',
  zip: '1801',
  coordinates: {
    lat: 14.63065,
    lng: 121.09560,
  },
};

export const ITINERARY: ItineraryEvent[] = [
  {
    time: '3:00 PM',
    title: 'Guest Arrival',
    description: 'Please arrive and find your seats',
    location: 'Main Garden',
  },
  {
    time: '3:30 PM',
    title: 'Ceremony Begins',
    description: 'The ceremony will begin promptly',
    location: 'Garden Pavilion',
  },
  {
    time: '4:15 PM',
    title: 'Cocktail Hour',
    description: 'Enjoy drinks and hors d\'oeuvres',
    location: 'Terrace',
  },
  {
    time: '5:30 PM',
    title: 'Reception & Dinner',
    description: 'Dinner service and toasts',
    location: 'Grand Ballroom',
  },
  {
    time: '7:00 PM',
    title: 'First Dance',
    description: 'Join us on the dance floor',
    location: 'Grand Ballroom',
  },
  {
    time: '7:30 PM',
    title: 'Dancing & Celebration',
    description: 'Dance the night away!',
    location: 'Grand Ballroom',
  },
  {
    time: '10:00 PM',
    title: 'Grand Send-Off',
    description: 'Sparkler send-off for the newlyweds',
    location: 'Front Steps',
  },
];

export const REGISTRY: RegistryItem[] = [
  {
    name: 'Zola',
    url: 'https://www.zola.com',
  },
  {
    name: 'Amazon',
    url: 'https://www.amazon.com/wedding',
  },
  {
    name: 'Target',
    url: 'https://www.target.com/gift-registry',
  },
  {
    name: 'Crate & Barrel',
    url: 'https://www.crateandbarrel.com',
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/venue', label: 'Venue' },
  { href: '/itinerary', label: 'Itinerary' },
  { href: '/registry', label: 'Registry' },
  { href: '/rsvp', label: 'RSVP' },
];

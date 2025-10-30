import { VenueInfo, ItineraryEvent, RegistryItem, StoryMilestone } from '@/types';

export const WEDDING_DATE = process.env.NEXT_PUBLIC_WEDDING_DATE || '2026-06-15';
export const COUPLE_NAMES = process.env.NEXT_PUBLIC_COUPLE_NAMES || 'Sarah & Michael';

export const VENUE: VenueInfo = {
  name: 'The Grand Estate',
  address: '123 Wedding Lane',
  city: 'San Francisco',
  state: 'CA',
  zip: '94102',
  coordinates: {
    lat: 37.7749,
    lng: -122.4194,
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

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    date: 'Spring 2019',
    title: 'First Meeting',
    description: 'We met at a mutual friend\'s party and instantly connected over our shared love of hiking and terrible puns.',
    image: 'https://images.unsplash.com/photo-1529903984400-62e3442c6f84?w=800&h=600&fit=crop',
  },
  {
    date: 'Summer 2019',
    title: 'First Date',
    description: 'Our first official date was at a cozy Italian restaurant. We talked for hours and closed down the place.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
  },
  {
    date: 'Fall 2020',
    title: 'Moving In Together',
    description: 'We took the big step and moved into our first apartment together, along with our rescue dog, Charlie.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
  },
  {
    date: 'Winter 2023',
    title: 'The Proposal',
    description: 'On a snowy mountain hike at sunset, Michael got down on one knee. Sarah said yes before he could finish asking!',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
  },
  {
    date: 'Summer 2024',
    title: 'Wedding Planning',
    description: 'We spent months planning every detail of our special day, with plenty of cake tastings along the way.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
  },
  {
    date: 'June 15, 2026',
    title: 'Our Wedding Day',
    description: 'The day we\'ve been waiting for - celebrating our love with our closest family and friends!',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/story', label: 'Our Story' },
  { href: '/venue', label: 'Venue' },
  { href: '/itinerary', label: 'Itinerary' },
  { href: '/registry', label: 'Registry' },
  { href: '/rsvp', label: 'RSVP' },
];

import { VenueInfo, ItineraryEvent, RegistryItem, StoryMilestone } from '@/types';

export const WEDDING_DATE = process.env.NEXT_PUBLIC_WEDDING_DATE || '2026-06-15';
export const COUPLE_NAMES = process.env.NEXT_PUBLIC_COUPLE_NAMES || 'Sarah & Michael';

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

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    date: 'Spring 2019',
    title: 'First Meeting',
    description: 'We met at a mutual friend\'s party and instantly connected over our shared love of hiking and terrible puns.',
    image: 'https://picsum.photos/seed/meeting/800/600',
  },
  {
    date: 'Summer 2019',
    title: 'First Date',
    description: 'Our first official date was at a cozy Italian restaurant. We talked for hours and closed down the place.',
    image: 'https://picsum.photos/seed/firstdate/800/600',
  },
  {
    date: 'Fall 2020',
    title: 'Moving In Together',
    description: 'We took the big step and moved into our first apartment together, along with our rescue dog, Charlie.',
    image: 'https://picsum.photos/seed/home/800/600',
  },
  {
    date: 'Winter 2023',
    title: 'The Proposal',
    description: 'On a snowy mountain hike at sunset, Michael got down on one knee. Sarah said yes before he could finish asking!',
    image: 'https://picsum.photos/seed/proposal/800/600',
  },
  {
    date: 'Summer 2024',
    title: 'Wedding Planning',
    description: 'We spent months planning every detail of our special day, with plenty of cake tastings along the way.',
    image: 'https://picsum.photos/seed/planning/800/600',
  },
  {
    date: 'June 15, 2026',
    title: 'Our Wedding Day',
    description: 'The day we\'ve been waiting for - celebrating our love with our closest family and friends!',
    image: 'https://picsum.photos/seed/wedding/800/600',
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

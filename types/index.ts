export type RSVPStatus = 'attending' | 'not_attending' | 'pending';

export interface Guest {
  id: string;
  name: string;
  code_hash: string;
  rsvp_status: RSVPStatus;
  message?: string;
  used: boolean;
  submitted_at?: Date;
}

export interface RSVPFormData {
  name: string;
  rsvp_status: RSVPStatus;
  message?: string;
}

export interface AuthSession {
  guestId: string;
  code: string;
  expiresAt: Date;
}

export interface VenueInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ItineraryEvent {
  time: string;
  title: string;
  description: string;
  location?: string;
}

export interface RegistryItem {
  name: string;
  url: string;
  icon?: string;
}

export interface StoryMilestone {
  date: string;
  title: string;
  description: string;
  image?: string;
}

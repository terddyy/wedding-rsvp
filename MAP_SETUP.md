# 🗺️ Google Maps Setup Guide

## ✅ Current Setup
Your Google Maps is now configured and working with:
- **API Key**: Set in `.env.local` as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- **Current Location**: Kapitan Moy Restaurant, Marikina City
- **Coordinates**: Latitude 14.6507, Longitude 121.0987

## 📍 How to Change the Pin Location

### Method 1: Using Google Maps to Find Coordinates
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your venue or right-click on the exact location
3. Click on the coordinates that appear (e.g., "14.6507, 121.0987")
4. The coordinates will be copied to your clipboard

### Method 2: Drop a Pin
1. Go to [Google Maps](https://www.google.com/maps)
2. Right-click on the exact location you want
3. Select "What's here?"
4. The coordinates will appear at the bottom

### Update the Location
Edit `lib/constants.ts` and update the VENUE object:

```typescript
export const VENUE: VenueInfo = {
  name: 'Your Venue Name',
  address: 'Street Address',
  city: 'City Name',
  state: 'State/Province',
  zip: 'Postal Code',
  coordinates: {
    lat: 14.6507,  // ← Change this latitude
    lng: 121.0987, // ← Change this longitude
  },
};
```

## 🎯 Map Features
- ✅ Embedded Google Map with marker
- ✅ Zoom level set to 15 (good detail)
- ✅ "Get Directions" button opens navigation in Google Maps
- ✅ Responsive design (works on mobile)
- ✅ Fallback display if API key is missing

## 🔧 Troubleshooting

### Map not showing?
1. Check that `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is in `.env.local`
2. Restart your dev server after adding the API key
3. Make sure the API key has "Maps Embed API" enabled in Google Cloud Console

### Wrong location pin?
1. Double-check the latitude and longitude values
2. Latitude should be between -90 and 90
3. Longitude should be between -180 and 180
4. Format: Use decimal degrees (e.g., 14.6507, not 14°39'02.5")

### API Key Setup
If you need to enable or update your Google Maps API:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Enable "Maps Embed API"
4. Enable "Maps JavaScript API" (optional, for advanced features)
5. Copy your API key to `.env.local`

## 📝 Example Coordinates

**Philippines:**
- Manila: `14.5995, 120.9842`
- Quezon City: `14.6760, 121.0437`
- Marikina: `14.6507, 121.0987`

**Other Popular Wedding Venues:**
- Tagaytay: `14.1155, 120.9601`
- Antipolo: `14.5865, 121.1755`

## 🚀 Next Steps
- Test the map on your venue page: `/venue`
- Click "Get Directions" to verify it opens correctly
- Share the link with guests to ensure it works on mobile devices

# 🔧 Fix Google Maps API Authorization Error

## ❌ Error: "This API project is not authorized to use this API"

This means the **Maps Embed API** is not enabled for your Google Cloud project.

## ✅ Solution: Enable Maps Embed API

### Step-by-Step Instructions:

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Select Your Project**
   - Click the project dropdown at the top
   - Select the project associated with your API key

3. **Enable Maps Embed API**
   - Go to: https://console.cloud.google.com/apis/library/maps-embed-backend.googleapis.com
   - Or search "Maps Embed API" in the API Library
   - Click **"ENABLE"** button

4. **Also Enable These (Recommended)**
   - **Maps JavaScript API**: https://console.cloud.google.com/apis/library/maps-backend.googleapis.com
   - **Places API**: https://console.cloud.google.com/apis/library/places-backend.googleapis.com
   - **Geocoding API**: https://console.cloud.google.com/apis/library/geocoding-backend.googleapis.com

5. **Verify API Key Restrictions**
   - Go to: https://console.cloud.google.com/apis/credentials
   - Click on your API key
   - Under "API restrictions", choose:
     - **"Don't restrict key"** (for testing/development)
     - OR **"Restrict key"** and select:
       - ✅ Maps Embed API
       - ✅ Maps JavaScript API
       - ✅ Places API (optional)

6. **Add Website Restrictions (for production)**
   - Under "Website restrictions"
   - Add your domains:
     - `localhost:3000`
     - `*.vercel.app/*`
     - `yourdomain.com/*`

7. **Save and Wait**
   - Click **"SAVE"**
   - Wait 5-10 minutes for changes to propagate
   - Restart your dev server

## 🔄 Quick Enable Links

**Direct Links to Enable APIs:**
- Maps Embed API: https://console.cloud.google.com/apis/library/maps-embed-backend.googleapis.com
- Maps JavaScript API: https://console.cloud.google.com/apis/library/maps-backend.googleapis.com
- API Credentials: https://console.cloud.google.com/apis/credentials

## 🎯 After Enabling

1. **Restart your development server**
   ```bash
   # Stop the server (Ctrl+C)
   # Then restart
   npm run dev
   ```

2. **Clear browser cache**
   - Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or open in incognito/private window

3. **Test the map**
   - Visit: http://localhost:3000/venue
   - The map should now load with a pin marker

## ⚠️ Common Issues

### Still not working?
- Wait 5-10 minutes after enabling APIs
- Check if billing is enabled on your Google Cloud project
- Verify the API key in `.env.local` matches the one in Google Cloud Console
- Make sure you saved the API key restrictions

### Billing Required?
- Google Maps requires a billing account to be set up
- You get $200 free credit per month
- Maps Embed API is free for most use cases

## 📋 Checklist

- [ ] Opened Google Cloud Console
- [ ] Selected correct project
- [ ] Enabled "Maps Embed API"
- [ ] Checked API key restrictions (don't restrict or allow Maps Embed API)
- [ ] Saved changes
- [ ] Waited 5-10 minutes
- [ ] Restarted dev server
- [ ] Cleared browser cache
- [ ] Tested `/venue` page

## 🆘 Still Having Issues?

If the map still doesn't work:
1. Check browser console for specific error messages
2. Verify your API key is correct in `.env.local`
3. Make sure the API key starts with `AIza`
4. Try creating a new API key with no restrictions
5. Check that billing is enabled in Google Cloud

---

**Current API Key in .env.local:**
`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyDPixVGHV60IQc85ckNBbwjF-Y0vUEoeeI`

Go enable the Maps Embed API and you should be good to go! 🗺️

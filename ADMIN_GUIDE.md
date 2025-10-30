# 🔐 Admin Dashboard Guide

## How to Access the Admin Dashboard

Your wedding website now has a fully functional admin dashboard!

### **Access URL:**
```
http://localhost:3000/admin (Development)
https://your-site.vercel.app/admin (Production)
```

### **Default Password:**
```
wedding2026
```

**⚠️ IMPORTANT:** Change this password before deploying to production!

---

## 📊 Dashboard Features

### **1. Real-Time Statistics**
View at-a-glance metrics:
- **Total Guests** - Total number of invited guests
- **Attending** - Guests who confirmed attendance
- **Not Attending** - Guests who declined
- **Pending** - Guests who haven't responded yet
- **Plus Ones** - Number of guests bringing a +1

### **2. Guest List Table**
Complete view of all RSVPs with:
- Guest names
- RSVP status (Attending/Not Attending/Pending)
- Plus-one names
- Personal messages
- Submission timestamps

### **3. Export to CSV**
Download all RSVP data as a CSV file for:
- Printing guest lists
- Seating chart planning
- Final headcount for caterers
- Backup records

### **4. Refresh Data**
Manually refresh the dashboard to see the latest RSVPs in real-time

---

## 🎯 How to Use

### **Step 1: Login**
1. Go to `http://localhost:3000/admin`
2. Enter password: `wedding2026`
3. Click "Login"
4. Your authentication is saved in browser

### **Step 2: View RSVPs**
- See color-coded status for each guest:
  - 🟢 **Green** = Attending
  - 🔴 **Red** = Not Attending
  - 🟡 **Yellow** = Pending (not responded)

### **Step 3: Export Data**
1. Click "📊 Export CSV" button
2. File downloads automatically
3. Open in Excel, Google Sheets, or Numbers
4. Use for planning and tracking

### **Step 4: Refresh**
- Click "🔄 Refresh" to get latest data
- Auto-loads on page load

### **Step 5: Logout**
- Click "Logout" button when done
- Clears authentication from browser

---

## 🔒 Security Notes

### **Change the Password**

The admin password is used in two places:

**1. Client-side (Login Form):**
Edit `app/admin/page.tsx` line 32:
```typescript
const ADMIN_PASSWORD = 'your-secure-password-here';
```

**2. Server-side (API Authentication):**
Add to `.env.local`:
```bash
ADMIN_PASSWORD=your-secure-password-here
```

**⚠️ Important:** Both passwords must match for the admin dashboard to work!

### **Better Security (Recommended)**

For production, consider:
1. Using environment variables for the password
2. Implementing proper authentication (Better Auth)
3. Adding IP restrictions
4. Using Firebase Authentication with admin roles

### **Example with Environment Variable:**

1. Add to `.env.local`:
```bash
ADMIN_PASSWORD=your-super-secure-password
```

2. Update `app/admin/page.tsx`:
```typescript
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'wedding2026';
```

---

## 📱 Mobile Access

The admin dashboard is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

Perfect for checking RSVPs on-the-go!

---

## 🎨 Customization

### **Change Stats Colors**

Edit the color classes in `app/admin/page.tsx`:
- `bg-green-50` - Background color for cards
- `text-green-700` - Text color for labels
- `text-green-800` - Text color for numbers

### **Add More Filters**

You can filter by:
- Status (attending/not attending)
- Date range
- Plus ones only
- Messages included

---

## 💡 Tips & Tricks

### **Best Practices:**
1. **Check Daily** - Monitor RSVPs as they come in
2. **Export Weekly** - Keep backups of your data
3. **Share Access** - Share password with your partner
4. **Follow Up** - Use pending list to reach out to guests

### **Common Use Cases:**
- **Send Reminders:** Export pending guests and send follow-ups
- **Seating Chart:** Use attending list for table assignments
- **Meal Planning:** Count attendees + plus ones for catering
- **Thank You Notes:** Use messages to personalize thank yous

### **Keyboard Shortcuts:**
- `Enter` - Submit password on login screen
- `Ctrl/Cmd + R` - Refresh browser (also refreshes data)

---

## 🐛 Troubleshooting

### **Can't Login?**
- Check password spelling
- Clear browser cache
- Try incognito/private mode

### **No Data Showing?**
- Click Refresh button
- Check Firebase console
- Verify Firebase rules allow reading

### **Export Not Working?**
- Check browser popup blocker
- Try different browser
- File should auto-download as CSV

### **Password Not Working?**
- Verify password in code matches what you're typing
- Password is case-sensitive
- Default is: `wedding2026`

---

## 🚀 Advanced Features

### **Add More Admin Pages**

Create additional admin features:
- Guest management (add/edit/delete)
- Send email notifications
- Analytics and charts
- Gift tracking
- Seating arrangement tool

### **Connect to Firebase Admin**

For advanced management, you can:
1. Use Firebase console directly
2. Build custom admin tools
3. Integrate with email services
4. Add batch operations

---

## 📞 Need Help?

Common issues and solutions:
1. **Forgot password?** - Check `app/admin/page.tsx` line 31
2. **Need to add guests?** - Use `scripts/add-guests.ts`
3. **View raw data?** - Check Firebase Console
4. **Update guest info?** - Edit directly in Firebase

---

## ✅ Quick Checklist

Before your wedding:
- [ ] Change admin password to something secure
- [ ] Test admin dashboard on mobile
- [ ] Export initial guest list
- [ ] Share access with partner
- [ ] Bookmark admin URL
- [ ] Set up regular export schedule
- [ ] Test CSV export functionality
- [ ] Verify all stats are accurate

---

**You're all set!** 🎉

Access your admin dashboard at: http://localhost:3000/admin

Default password: `wedding2026`

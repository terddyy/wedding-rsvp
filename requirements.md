💍 MVP OVERVIEW

Product: Wedding Website with Code-Gated RSVP
Core Value Proposition:

A simple, elegant wedding site where only invited guests (with a code) can RSVP securely — no random submissions, no clunky logins.

🎯 MVP GOAL

✅ Let guests browse wedding details (home, story, venue, itinerary, registry)
✅ Let invited guests RSVP using a unique code
✅ Store RSVP data safely in Firebase Firestore
✅ Prevent anyone without a valid code from accessing or submitting

That’s your minimum viable product — everything else (like QR check-ins or reminders) can come later.

🧠 1. MVP TECH STACK

All chosen for speed, scalability, and low dev overhead:

Layer	Tool	Why
Frontend	Next.js 15 + React 19	Fast, SSR-ready, SEO-friendly wedding site
Styling	Tailwind + Framer Motion	Rapid design + smooth transitions
Database	Firebase Firestore	Realtime data, simple structure
Auth	Better Auth	Token-based, code-based sign-in, no email hassle
Hosting	Vercel	Easy deploy, free SSL, integrates with Next.js
Backend Logic	Firebase Functions	For secure validation and notifications

This setup means zero server maintenance, perfect for an event-driven MVP.

🧩 2. MVP FEATURE SET
Page	Access	MVP Purpose
🏠 Home	Public	Couple intro, countdown
💞 Our Story	Public	Timeline, gallery
📍 Venue	Public	Map, details
🕒 Itinerary	Public	Schedule
🎁 Registry	Public	Gift links
✉️ RSVP	Private	Code-gated form

Only the RSVP page requires authentication — the rest stays public.

🔐 3. MVP AUTHENTICATION FLOW (Better Auth)

This is where Better Auth shines — it replaces Firebase Auth with a flexible session-based system.

Flow:

Guest enters code on /rsvp

Server validates the code (via Firestore lookup)

Better Auth creates a session with guestId

Cookie-based session stored (HTTP-only)

Guest accesses /rsvp/form

After submission → code marked as used → session revoked

✅ Simple for users (just type code)
✅ Secure (token handled server-side)
✅ No clutter (no password/email reset nonsense)

🗄️ 4. MVP DATABASE STRUCTURE (Firestore)

Keep it lean — just one main collection:

Collection: guests

Field	Type	Description
id	string	Document ID
name	string	Guest name or family
code_hash	string	Hashed access code
rsvp_status	string	attending / not_attending / pending
plus_one	string	Optional
message	string	Optional
used	boolean	True if RSVP done
submitted_at	timestamp	Date submitted
🧱 5. MVP CORE WORKFLOW
Step	Action	System
1	Guest visits /rsvp	Next.js page
2	Inputs invitation code	React form
3	API validates code	Firebase Function
4	Better Auth issues session	Middleware
5	Guest fills RSVP form	Protected route /rsvp/form
6	Data saved to Firestore	Realtime write
7	Code marked used + session revoked	Function logic
8	Confirmation message displayed	Frontend UI

That’s your MVP loop: 1 path, 1 outcome, fully secure.

👩‍💼 6. MVP ADMIN DASHBOARD (Optional Phase 2)

If you want to manage guest data manually, add:

Feature	Purpose
Login (Better Auth admin)	Access control
Upload CSV guest list	Bulk import
Auto-generate codes	Randomized
View RSVP stats	Dashboard
Export data	For reports

You can postpone this until the main site + RSVP are stable.

🛡️ 7. SECURITY BEST PRACTICES FOR MVP
Category	Rule
Auth	Use Better Auth with httpOnly cookies
Firestore	Hash codes before saving
Rate Limiting	Limit invalid code attempts
Firestore Rules	request.auth.uid == resource.id
HTTPS	Enforced by Vercel
Privacy	Don’t return guest data until verified

Security = trust. Even in MVP, this must be in place.

💅 8. MVP UI & UX
Category	Recommendation
Design	Pastel colors, serif fonts, soft transitions
Fonts	Playfair Display (headings), Inter (body)
Animations	Framer Motion for fades & slides
Responsive	Tailwind grid & flex utilities
Accessibility	Proper semantics + readable contrast

Make it emotionally engaging — it’s a wedding site after all.

🚀 9. MVP DEPLOYMENT PIPELINE
Component	Platform	Description
Frontend	Vercel	Auto-deploy on push
Database	Firebase Firestore	Realtime sync
Auth	Better Auth	Next.js middleware
Server Functions	Firebase Cloud Functions	Code validation, email triggers
🧠 10. OPTIONAL MVP ADD-ONS (Phase 2+)
Feature	Description
Confirmation Emails	Sent after RSVP
Reminder Emails	To pending guests
QR Code Check-in	Generate per guest
Photo Gallery	Post-event sharing
Admin Notifications	New RSVP alerts
✅ MVP SUMMARY
Aspect	Description
Core Idea	Code-gated RSVP wedding website
Frontend	Next.js + React + Tailwind + Framer Motion
Backend	Firebase Firestore + Functions
Auth	Better Auth (code-based session login)
Hosting	Vercel (frontend), Firebase (backend)
Public Pages	Home, Story, Venue, Itinerary, Registry
Private Page	RSVP (only for valid codes)
Future Features	Admin dashboard, automations, QR
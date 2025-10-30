# 🎨 Color Customization Guide

## Where to Change Global Colors

### ✅ **Method 1: Tailwind Config** (Recommended)
📁 **File:** `tailwind.config.ts`  
📍 **Lines:** 8-48

```typescript
colors: {
  // 🌸 Primary Coral Pink
  coral: {
    50: '#fef6f5',
    100: '#fdecea',
    200: '#fcd9d5',
    300: '#f9bcb5',
    400: '#f4a7a0',  // ← MAIN COLOR (Change this!)
    500: '#ed7a6f',
    // ... more shades
  },
  
  // 🌿 Secondary Sage Green
  sage: {
    50: '#f6f7f3',
    // ...
    400: '#a3b18a',  // ← MAIN COLOR (Change this!)
    // ...
  },
  
  // ✨ Accent Gold
  gold: {
    50: '#fefbf0',
    // ...
    400: '#f6c667',  // ← MAIN COLOR (Change this!)
    // ...
  },
  
  // 🎨 Background Colors
  cream: '#FFF8F2',     // ← Change this!
  charcoal: '#3B3B3B',  // ← Change this!
}
```

**How to use after changing:**
```jsx
<div className="bg-coral-400 text-white">Hello</div>
<button className="bg-sage-400 hover:bg-gold-400">Click</button>
```

---

### ✅ **Method 2: CSS Variables** (For custom values)
📁 **File:** `app/globals.css`  
📍 **Lines:** 8-14

```css
:root {
  --coral: #F4A7A0;      /* ← Change primary color */
  --sage: #A3B18A;       /* ← Change secondary color */
  --gold: #F6C667;       /* ← Change accent color */
  --cream: #FFF8F2;      /* ← Change background */
  --charcoal: #3B3B3B;   /* ← Change text color */
  --white: #FFFFFF;
}
```

**How to use after changing:**
```css
.custom-element {
  background-color: var(--coral);
  color: var(--charcoal);
}
```

---

## 🎯 Quick Color Change Examples

### Example 1: Change Primary Color (Coral → Blue)

**In `tailwind.config.ts`:**
```typescript
coral: {
  400: '#3B82F6',  // Blue instead of coral
}
```

**In `app/globals.css`:**
```css
--coral: #3B82F6;  /* Blue */
```

---

### Example 2: Change Background (Cream → Pure White)

**In `tailwind.config.ts`:**
```typescript
cream: '#FFFFFF',
```

**In `app/globals.css`:**
```css
--cream: #FFFFFF;
```

---

### Example 3: Darker Text Color

**In `tailwind.config.ts`:**
```typescript
charcoal: '#1F1F1F',  // Darker gray
```

**In `app/globals.css`:**
```css
--charcoal: #1F1F1F;
```

---

## 🔄 After Changing Colors

### **Rebuild the site:**
```bash
npm run dev    # For development
npm run build  # For production
```

Your changes will appear immediately in dev mode!

---

## 🎨 Current Summer Floral Colors

| Color Name | Hex | Usage |
|------------|-----|-------|
| **Coral** | `#F4A7A0` | Primary buttons, accents, active states |
| **Sage** | `#A3B18A` | Secondary buttons, cards, links |
| **Gold** | `#F6C667` | Hover states, highlights, decorations |
| **Cream** | `#FFF8F2` | Page background, light cards |
| **Charcoal** | `#3B3B3B` | Text, headings |

---

## 💡 Pro Tips

1. **Use Tailwind colors for consistency**  
   Change in `tailwind.config.ts` → Use classes like `bg-coral-400`

2. **Use CSS variables for one-off custom styling**  
   Change in `globals.css` → Use `var(--coral)`

3. **Generate color shades automatically**  
   Visit: https://uicolors.app/create  
   Input your main color → Get full 50-900 scale

4. **Test contrast for accessibility**  
   Visit: https://webaim.org/resources/contrastchecker/  
   Ensure text is readable on backgrounds

---

## 📁 Files Reference

- **`tailwind.config.ts`** - Main color system (lines 8-48)
- **`app/globals.css`** - CSS variables (lines 8-14)
- **`.vscode/settings.json`** - VS Code config (fixes lint warnings)

---

**Need help?** The build is working perfectly! Just edit the colors and run `npm run dev` to see changes live.

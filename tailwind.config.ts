import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Summer Floral Color Palette
        coral: {
          50: '#fef6f5',
          100: '#fdecea',
          200: '#fcd9d5',
          300: '#f9bcb5',
          400: '#f4a7a0', // Primary coral
          500: '#ed7a6f',
          600: '#d95a4d',
          700: '#b6433a',
          800: '#973b33',
          900: '#7d3530',
        },
        sage: {
          50: '#f6f7f3',
          100: '#e9ebe2',
          200: '#d4d8c7',
          300: '#b8bfa3',
          400: '#a3b18a', // Secondary sage
          500: '#839670',
          600: '#697955',
          700: '#536046',
          800: '#444f3b',
          900: '#3a4433',
        },
        gold: {
          50: '#fefbf0',
          100: '#fdf4d5',
          200: '#fbe8a7',
          300: '#f8d76e',
          400: '#f6c667', // Accent gold
          500: '#f2af3b',
          600: '#e18f24',
          700: '#bc6e1e',
          800: '#98571e',
          900: '#7b481c',
        },
        cream: '#FFF8F2',
        charcoal: '#3B3B3B',
        customGreen: '#087830',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'bloom': 'bloom 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bloom: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
      },
      backgroundImage: {
        'floral-gradient': 'linear-gradient(135deg, #FFF8F2 0%, #F4A7A0 50%, #A3B18A 100%)',
        'summer-breeze': 'linear-gradient(to bottom, #FFF8F2 0%, rgba(244, 167, 160, 0.1) 50%, rgba(163, 177, 138, 0.1) 100%)',
      },
      boxShadow: {
        'floral': '0 4px 20px rgba(244, 167, 160, 0.25)',
        'soft': '0 2px 10px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;

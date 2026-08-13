/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        techno: ['Oxanium', 'sans-serif'],
      },
      animation: {
        'aura-pulse': 'aura-pulse 6s ease-in-out infinite',
        'float-particle': 'float-particle var(--float-dur, 4.5s) ease-in-out infinite',
        'icon-glow': 'icon-glow 3.5s ease-in-out infinite',
        'hud-pulse': 'hud-pulse 10s ease-in-out infinite',
      },
      keyframes: {
        'aura-pulse': {
          '0%, 100%': { opacity: '0.42', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.07)' },
        },
        'float-particle': {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0) rotate(0deg)',
          },
          '33%': {
            transform: 'translateY(-14px) translateX(4px) rotate(1deg)',
          },
          '66%': {
            transform: 'translateY(-6px) translateX(-5px) rotate(-1deg)',
          },
        },
        'icon-glow': {
          '0%, 100%': {
            opacity: '0.75',
            boxShadow: '0 0 18px rgb(139 92 246 / 0.25)',
          },
          '50%': {
            opacity: '1',
            boxShadow: '0 0 28px rgb(167 139 250 / 0.45)',
          },
        },
        'hud-pulse': {
          '0%, 100%': { opacity: '0.22' },
          '50%': { opacity: '0.48' },
        },
      },
    },
  },
  plugins: [],
}

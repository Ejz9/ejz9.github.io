/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Toggle via a class on <html> or <body>
  theme: {
    extend: {
      colors: {
        // Light/dark color variables (semantic)
        background: 'var(--color-background)',
        'background-soft': 'var(--color-background-soft)',
        'background-mute': 'var(--color-background-mute)',
        border: 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',
        heading: 'var(--color-heading)',
        text: 'var(--color-text)',
        'text-muted': 'var(--vt-c-text-light-2)',

        // Optional: mapped palette from your indigo accent and others
        'indigo-accent': '#7c3aed',
        // Add more aliases if you use them a lot
      },

      fontSize: {
        base: '15px', // you manually used this
      },

      animation: {
        'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },

      keyframes: {
        'pulse-slow': {
          '0%, 100%': {
            opacity: '1',
            textShadow: '0 0 1rem #7c3aed',
          },
          '50%': {
            opacity: '0.85',
            textShadow: '0 0 1.5rem #7c3aed',
          },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '3rem',
        },
      },
    },
  },
  plugins: [],
}
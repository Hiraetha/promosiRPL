/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#2C5EAD',
        'tech-blue': '#1591DC',
        'sky-azure': '#4BB8FA',
        'soft-blue': '#C4E2F5',
        'page-canvas': '#EEF3FA',
        'dark-text': '#111827',
        'muted-text': '#64748B',
        'surface-container-low': '#F4F8FC',
        navy: "#0F1D38",
        blue: {
          DEFAULT: "#2C5EAD",
          hover: "#234B8C",
          dark: "#1A3D73",
          electric: "#1591DC",
          sky: "#4BB8FA",
          ice: "#C4E2F5",
        },
        "light-blue": "#EDF6FC",
        surface: "#FFFFFF",
        background: "#EEF3FA",
        dark: "#111827",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '44px',
      },
      boxShadow: {
        'subtle': '0 10px 30px -10px rgba(15, 29, 56, 0.06)',
        'premium': '0 20px 50px -15px rgba(44, 94, 173, 0.16)',
        'glow': '0 0 35px rgba(21, 145, 220, 0.28)',
      },
    },
  },
  plugins: [],
}

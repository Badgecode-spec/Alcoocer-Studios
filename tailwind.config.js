/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        dash: {
          'to': { strokeDashoffset: '0' },
        }
      },
      animation: {
        scan: 'scan 4s ease-in-out infinite alternate',
        dash: 'dash 2s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
      },
      colors: {
        primary: "#2E4036",
        accent: "#E63B2E",
        background: "#F5F3EE",
        dark: "#1A1A1A",
        secondary: "#666666",
        borderlight: "#DDDDDD",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        drama: ['"Cormorant Garamond"', "serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      }
    },
  },
  plugins: [],
}

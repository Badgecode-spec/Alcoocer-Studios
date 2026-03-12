/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        body: ['system-ui', '"Helvetica Neue"', 'Arial', 'sans-serif'],
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

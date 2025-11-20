/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stake-blue': '#0066FF',
        'stake-dark': '#1a1a1a',
      },
    },
  },
  plugins: [],
}


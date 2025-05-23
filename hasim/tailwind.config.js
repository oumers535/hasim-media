/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img' : "url(./src/assets/banner01.jpeg)",
        'backgroundSize': 'cover', /* Ensures the image covers the entire area */
        'backgroundPosition': 'center', /* Centers the image */
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        instagram: {
          blue: '#1877F2',
          red: '#F56040',
          purple: '#C32AA3',
          pink: '#E1306C'
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Grand Hotel"', 'cursive']
      }
    },
  },
  plugins: [],
};
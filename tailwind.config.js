/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      midnight: '#05010D',
      'midnight-grey': '#f7f7fa',
      'orange-dark': '#d85721',
      'grey-20': '#e5e7eb',
      'grey-70': '#374151',
      'grey-90': '#111827',
    },
  },
  plugins: [],
}

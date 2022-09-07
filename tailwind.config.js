/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      midnight: '#05010D',
      'midnight-gray': '#f7f7fa',
      'orange-dark': '#d85721',
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,vue}', './index.html'],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        'nlw-gradient':
          'linear-gradient(89.86deg, #9572FC 10.08%, #43E7AD 53.94%, #E1D55D 100%)',
        galaxy: "url('./img/background-galaxy.png')"
      }
    }
  },
  plugins: []
}

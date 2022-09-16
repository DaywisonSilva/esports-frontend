/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,vue}', './index.html'],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
        'nlw-gradient':
          'linear-gradient(89.86deg, #9572FC 10.08%, #43E7AD 53.94%, #E1D55D 100%)',
        galaxy: "url('./img/background-galaxy.png')"
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'dekko': ['Dekko', 'sans-serif'],
      },
      backgroundImage: theme => ({
        'hero': 'url(../common/hero.jpg)',

        'filter-1': 'url(../common/filter-1.jpg)',
        'filter-2': 'url(../common/filter-2.jpg)',
        'filter-3': 'url(../common/filter-3.jpg)',

        'banner-manga': 'url(../common/manga-banner.jpg)',
        'banner-novel': 'url(../common/novels.jpg)',
        'banner-figure': 'url(../common/figure.jpg)',
        'banner-popular-series': 'url(../common/popular-series.jpg)',
      })
    },
  },
  plugins: [],
}

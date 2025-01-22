/** @type {import('tailwindcss').Config} */

const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1px",
        screens: {
          "2xl": "1200px"
        }
      }
    },
  },
  plugins: [
    iconsPlugin({
    // Select the icon collections you want to use
    // You can also ignore this option to automatically discover all individual icon packages you have installed
    // If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
    collections: getIconCollections(["tabler"]),
    // If you want to use all icons from @iconify/json, you can do this:
    // collections: getIconCollections("all"),
    // and the more recommended way is to use `dynamicIconsPlugin`, see below.
  }),],
}


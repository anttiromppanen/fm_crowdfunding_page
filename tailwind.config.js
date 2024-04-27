/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Commissioner", "sans-serif"],
      },
      colors: {
        userModerateCyan: "hsl(176, 50%, 47%)",
        userDarkCyan: "hsl(176, 72%, 28%)",
        userDarkGray: "hsl(0, 0%, 48%)",
        userOverlayBgColor: "hsla(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        userHeaderBgMobile: "url('/image-hero-mobile.jpg')",
        userHeaderBgDesktop: "url('/image-hero-desktop.jpg')",
      },
    },
  },
  plugins: [],
};

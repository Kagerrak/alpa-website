/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1-1000": "#091312",
        "secondary-900-main": "#222a2d",
        "primary-1-50-main": "#81fced",
        "shades-white": "#fff",
        "primary-2-900": "#131917",
        darkslategray: "#292f2f",
        powderblue: "#96ccbc",
      },
      spacing: {},
      fontFamily: {
        "paragraph-regular-bold": "'DM Sans'",
        inherit: "inherit",
        "mokoto-h3-desktop": "Mokoto",
      },
      borderRadius: {
        "981xl": "1000px",
        "7xl": "26px",
      },
    },
    fontSize: {
      base: "16px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "4xl": "23px",
      lg: "18px",
      "17xl": "36px",
      "3xl": "22px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

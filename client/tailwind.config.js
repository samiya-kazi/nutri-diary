/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        customTheme: {
          "primary": "#14b8a6",
          "secondary": "#0284c7",
          "accent": "#fde047",
          "neutral": "#292B3D",
          "base-100": "#cffafe",
          "info": "#38bdf8",
          "success": "#4ade80",
          "warning": "#eab308",
          "error": "#E8595B",
        },
      },
    ],
  },
}


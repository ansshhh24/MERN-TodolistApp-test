module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#be1558",
        "primary-dark": "#322514",
        "accent": "#e75874",
        "background": "#fbcbc9",
        "hovercolour":"#02DE20",
      },
      animation: {
        "loader": "loader 1s linear infinite",
      },
      keyframes: {
        loader: {
          "0%": { transform: "rotate(0) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.5)" },
          "100%": { transform: "rotate(360deg) scale(1)" }
        }
      },
       fontFamily: {
        'sans': ['Nunito', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
      borderRadius: {
        'xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

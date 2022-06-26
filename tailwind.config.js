module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-enter-right": "fade-in-right ease 1s ",
        "fade-enter-right-1": "fade-in-right ease 1s both 1s",
        "fade-enter-right-2": "fade-in-right ease 1s both 2s",
        "fade-enter-right-3": "fade-in-right ease 1s both 3s",
        "fade-enter-right-4": "fade-in-right ease 1s both 4s",

        "fade-enter-left": "fade-in-left ease 1s ",
        "fade-enter-left-1": "fade-in-left ease 1s both 1s",
        "fade-enter-left-2": "fade-in-left ease 1s both 2s",
        "fade-enter-left-3": "fade-in-left ease 1s both 3s",
        "fade-enter-left-4": "fade-in-left ease 1s both 4s",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Fredoka", "ui-rounded", "system-ui", "sans-serif"],
      mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
    },
    extend: {
      colors: {
        bg: "#dbe8f1",
        ink: "#30363a",
        muted: "#5f6b72",
        offblack: "#171b1f",
        electric: "#006eff",
        border: "#b7cad8",
      },
    },
  },
  plugins: [],
};

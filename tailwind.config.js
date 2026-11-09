/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0a09",
        bg2: "#12100e",
        ink: "#f3ece0",
        muted: "#a79d8d",
        gold: "#c9a45c",
        gold2: "#e6c985",
        line: "rgba(201,164,92,.25)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        cue: {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(260%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        cue: "cue 2s cubic-bezier(.16,1,.3,1) infinite",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        loading: "url('/assets/loadingBg.svg')",
        home_ray: "url('/assets/rays-left.png')",
        home_car: "url('/assets/home_car.png')",
      },
      backgroundSize: {
        "80": "80%",
        "150": "150%",
      },
    },
  },
  plugins: [],
};
export default config;

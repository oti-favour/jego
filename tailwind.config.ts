import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        loading: "url('/assets/loadingBg.webp')",
        hero_ray: "url('/assets/rays-left.webp')",
        hero_car: "url('/assets/home_car.webp')",
        intro: "url('/assets/intro_bg.webp')",
        power_pod: "url('/assets/power_pod.webp')",
        jego_pod: "url('/assets/jego_pod.webp')",
        lightning: "url('/assets/lightning.webp')",
        mobile_app_bg: "url('/assets/mobile_app_bg.webp')",
      },

      backgroundSize: {
        "15": "15%",
        "25": "25%",
        "40": "40%",
        "50": "50%",
        "80": "80%",
        "100": "100%",
        "150": "150%",
      },

      fontFamily: {
        gustavo: ["Gustavo", "sans-serif"],
        product: ["Product Sans", "sans-serif"],
        dela: ["Dela Gothic One", "sans-serif"],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brightTurquoise: "#00FFF4",
        darkOrange: "#FF8200",
        deepSeaGreen: "#007172",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 10s linear infinite",
      },
      transitionProperty: {
        width: "width",
      },
      transitionDuration: {
        "1s": "1s",
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config;

export default config;

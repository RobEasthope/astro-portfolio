import defaultTheme from "tailwindcss/defaultTheme";
import { fluidTypeSize } from "./src/utils/fluidTypeSize";

const BASE_UNIT = "1.5rem";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
      screens: {
        xs: "420px",
      },
      colors: {
        // Saffron colours
        ink: "rgb(21, 23, 24)",
        saffron: "rgba(255, 153, 51, 1)",
        darkSaffron: "rgba(250, 145, 46, 1)",
        imperialRed: "rgb(170, 0, 0)",
        japaneseRed: "rgb(193, 78, 95)",
        highlight: "$saffron",

        // Shadcn ui colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      fontFamily: {
        sans: ["aktiv-grotesk", ...defaultTheme.fontFamily.sans],
        plantin: ["plantin", ...defaultTheme.fontFamily.serif],
        sabon: ["linotype-sabon", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        xs: fluidTypeSize({
          min: 12,
          max: 14,
        }),
        sm: fluidTypeSize({
          min: 14,
          max: 16,
        }),
        base: fluidTypeSize({
          min: 16,
          max: 18,
        }),
        md: fluidTypeSize({
          min: 18,
          max: 21,
        }),
        lg: fluidTypeSize({
          min: 19,
          max: 32,
        }),
        xl: fluidTypeSize({
          min: 28,
          max: 42,
        }),
        "2xl": fluidTypeSize({
          min: 34,
          max: 56,
        }),
        "3xl": fluidTypeSize({
          min: 40,
          max: 76,
        }),
      },
      spacing: {
        0: "0",
        px: "1px",
        "2px": "2px",
        0.125: `calc(${BASE_UNIT} * 0.125)`,
        0.25: `calc(${BASE_UNIT} * 0.25)`,
        0.5: `calc(${BASE_UNIT} * 0.5)`,
        0.75: `calc(${BASE_UNIT} * 0.75)`,
        1: `calc(${BASE_UNIT} * 1)`,
        1.25: `calc(${BASE_UNIT} * 1.25)`,
        1.5: `calc(${BASE_UNIT} * 1.5)`,
        1.75: `calc(${BASE_UNIT} * 1.75)`,
        2: `calc(${BASE_UNIT} * 2)`,
        3: `calc(${BASE_UNIT} * 3)`,
        4: `calc(${BASE_UNIT} * 4)`,
        5: `calc(${BASE_UNIT} * 5)`,
        6: `calc(${BASE_UNIT} * 6)`,
        7: `calc(${BASE_UNIT} * 7)`,
        8: `calc(${BASE_UNIT} * 8)`,
        9: `calc(${BASE_UNIT} * 9)`,
        10: `calc(${BASE_UNIT} * 10)`,
        11: `calc(${BASE_UNIT} * 11)`,
        12: `calc(${BASE_UNIT} * 12)`,
        14: `calc(${BASE_UNIT} * 14)`,
        16: `calc(${BASE_UNIT} * 16)`,
        20: `calc(${BASE_UNIT} * 20)`,
        24: `calc(${BASE_UNIT} * 24)`,
        28: `calc(${BASE_UNIT} * 28)`,
        32: `calc(${BASE_UNIT} * 32)`,
        36: `calc(${BASE_UNIT} * 36)`,
        40: `calc(${BASE_UNIT} * 40)`,
        44: `calc(${BASE_UNIT} * 44)`,
        48: `calc(${BASE_UNIT} * 48)`,
        52: `calc(${BASE_UNIT} * 52)`,
        56: `calc(${BASE_UNIT} * 56)`,
        60: `calc(${BASE_UNIT} * 60)`,
        64: `calc(${BASE_UNIT} * 64)`,
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("tailwindcss-animate")],
};

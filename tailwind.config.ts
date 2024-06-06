import defaultTheme from "tailwindcss/defaultTheme";
import tailwindTypography from "@tailwindcss/typography";
import tailwindcssRadixColors from "tailwindcss-radix-colors";
import { fluidTypeSize } from "./src/utils/fluidTypeSize";

// Handle fluid spacing with clamp function
export const MIN_SPACING_SIZE = "16";
export const MAX_SPACING_SIZE = "19";
export const BASE_UNIT = `clamp(${MIN_SPACING_SIZE}px, calc(${MIN_SPACING_SIZE}px + (${MAX_SPACING_SIZE} - ${MIN_SPACING_SIZE}) * ((100vw - 320px) / (1934 - 320))), ${MAX_SPACING_SIZE}px)`;

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
        // Custom colours
        ink: "rgb(21, 23, 24)",
        saffron: "rgba(255, 153, 51, 1)",
        "dark-saffron": "rgba(250, 145, 46, 1)",
        "imperial-red": "rgb(170, 0, 0)",
        "japanese-red": "rgb(193, 78, 95)",
        "off-white": "rgba(170, 163, 128, 0.03)",
        terracotta: "hsl(var(--terracotta))",

        // UI colours
        "content-bkg": "var(--sage-2)",
        typography: "rgb(21, 23, 24)",
        link: "hsl(var(--terracotta))",
        decoration: "var(--ink-2)",

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
        lapture: ["jaf-lapture", ...defaultTheme.fontFamily.serif],
        "lapture-display": [
          "jaf-lapture-display",
          ...defaultTheme.fontFamily.serif,
        ],
      },
      fontSize: {
        xs: fluidTypeSize({
          minFontSize: 12,
          maxFontSize: 14,
        }),
        sm: fluidTypeSize({
          minFontSize: 14,
          maxFontSize: 16,
        }),
        base: fluidTypeSize({
          minFontSize: 16,
          maxFontSize: 19,
        }),
        md: fluidTypeSize({
          minFontSize: 18,
          maxFontSize: 21,
        }),
        lg: fluidTypeSize({
          minFontSize: 19,
          maxFontSize: 32,
        }),
        xl: fluidTypeSize({
          minFontSize: 28,
          maxFontSize: 42,
        }),
        "2xl": fluidTypeSize({
          minFontSize: 34,
          maxFontSize: 56,
        }),
        "3xl": fluidTypeSize({
          minFontSize: 40,
          maxFontSize: 76,
        }),
        "4xl": fluidTypeSize({
          minFontSize: 52,
          maxFontSize: 96,
        }),
      },
      spacing: {
        // Space scale
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

        // UI spacing
        "wide-content": "calc(44ch + 65ch + 2rem)",
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
      typography: {
        DEFAULT: {
          css: {
            ul: {
              paddingLeft: "1.375em",
            },
            "ul > li": {
              paddingLeft: "calc(0.375em*2)",
            },
            "ul > li::marker": {
              color: "rgb(21, 23, 24)",
            },
          },
        },
      },
    },
  },
  plugins: [tailwindTypography, tailwindcssRadixColors],
};

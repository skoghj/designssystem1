/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor - overwrite */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        50: "#FDE7E7",
        100: "#FBD0D0",
        200: "#F89B9B",
        300: "#F46C6C",
        400: "#F13C3C",
        500: "#E51111",
        600: "#B90E0E",
        700: "#8A0A0A",
        800: "#5A0707",
        900: "#2F0404",
        950: "#180202",
      },
      blue: {
        50: "#E2F5F9",
        100: "#C0EAF1",
        200: "#86D6E4",
        300: "#47C1D7",
        400: "#279BB0",
        500: "#196572",
        600: "#14515C",
        700: "#0F3B43",
        800: "#0A292E",
        900: "#051215",
        950: "#030B0D",
      },
      yellow: {
        50: "#FFFCE5",
        100: "#FFF9CC",
        200: "#FFF399",
        300: "#FFEE6B",
        400: "#FFE838",
        500: "#FFE205",
        600: "#D1B900",
        700: "#9E8C00",
        800: "#665A00",
        900: "#332D00",
        950: "#191700",
      },
      neutral: {
        50: "#ECEBEA",
        100: "#DBDAD7",
        200: "#B6B5AF",
        300: "#8F8E84",
        400: "#68675F",
        500: "#403F3A",
        600: "#33322E",
        700: "#252522",
        800: "#1B1A18",
        900: "#0D0D0C",
        950: "#050505",
      },
      white: "#fff",
      black: "#000",
    },

    /* Tilføj din egen spacing nedenfor */
    spacing: {
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      md: "48px",
      ml: "56px",
      l: "64px",
      lg: "72px",
      xl: "80px",
      "2xl": "88px",
      "3xl": "96px",
      "4xl": "104px",
      "5xl": "112px",
      "6xl": "120px",
      "7xl": "128px",
      "8xl": "136px",
      "9xl": "144px",
      "10xl": "152px",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      sans: ["Prompt", "sans-serif"],
      display: ["Courier", "monospace"] /* eksempel på ekstra font */,
    },

    /* Tilføj dit typografiske hierarki herunder text skal være "rem" i forhold til "webtilgængelighed og accessibilitet" VIGTIG!!!*/
    //I design, hvor **responsivitet og tilgængelighed** er vigtigt, er det bedst at bruge **rem**. Hvis du derimod har brug for **faste, præcise størrelser**, bør du bruge **px**./
    fontSize: {
      konsultativ: ["0.688rem", { lineHeight: "1.0rem" }],
      body: ["0.813rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }], //typisk body størrelse er 16px som 1rem
      small: ["1.5rem", { lineHeight: "2.25rem" }],
      medium: ["2rem", { lineHeight: "3rem" }],
      large: ["2.5rem", { lineHeight: "3.75rem" }],
      xlarge: ["3rem", { lineHeight: "4.5rem" }],
      //body:['13px', {lineHeight: '1.25rem'}],
      //small: ['24px', {lineHeight: '2.25rem'}],
      //medium: ['32px', {lineHeight: '3rem'}],
      //large: ['40px', {lineHeight: '3.75rem'}],
      //xlarge: ['48px', {lineHeight: '4.5rem'}],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    /* Borders - borderstørrelser herunder */
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
    },

    /* Border radius størrelser herunder-"px" er ændret ikke,endda devices er ændret men "rem" er passer godt til responsivitet fordi den ændrer sig efter størrelse på skærmen*/
    borderRadius: {
      DEFAULT: "1.25rem", // 20px (1.25 * 16px)
      none: "0rem", // 0px
      sm: "0.625rem", // 10px (0.625 * 16px)
      md: "1.5rem", // 24px (1.5 * 16px)
      lg: "2rem", // 32px (2 * 16px)
      xl: "2.5rem", // 40px (2.5 * 16px)
      "2xl": "3rem", // 48px (3 * 16px)
      "3xl": "3.5rem", // 56px (3.5 * 16px)
      full: "9999rem", // helt rund (pill-formet)
    },

    /* Box shadows herunder */
    boxShadow: {
      drop25: "4px 4px 4px 0 rgb(0 0 0 / 0.25)" /* x y blur spread farve / opacity */,
      drop50: "4px 4px 4px 0 rgb(0 0 0 / 0.5)",
      inner25: "inset 4px 4px 4px 0 rgb(0 0 0 / 0.25)",
      inner50: "inset 4px 4px 4px 0 rgb(0 0 0 / 0.5)",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};

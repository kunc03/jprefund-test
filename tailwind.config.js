/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

const pxToEm = ($px) => {
  return `${$px / 16}rem`;
};

const remBorderRadius = {
  1.5: pxToEm(1.5),
  4: pxToEm(4),
  8: pxToEm(8),
  12: pxToEm(12),
  21: pxToEm(21),
};

const remGap = {
  7: pxToEm(7),
  8: pxToEm(8),
  10: pxToEm(10),
  11: pxToEm(11),
  12: pxToEm(12),
  17: pxToEm(17),
  18: pxToEm(18),
  20: pxToEm(20),
  28: pxToEm(28),
  29: pxToEm(29),
  38: pxToEm(38),
  58: pxToEm(58),
};

const remPadding = {
  4.5: pxToEm(4.5),
  8: pxToEm(8),
  9.5: pxToEm(9.5),
  10: pxToEm(10),
  10.5: pxToEm(10.5),
  11: pxToEm(11),
  13: pxToEm(13),
  14: pxToEm(14),
  15: pxToEm(15),
  18: pxToEm(18),
  53: pxToEm(53),
  20: pxToEm(20),
  27.5: pxToEm(27.5),
  21: pxToEm(21),
  28: pxToEm(28),
  29: pxToEm(29),
  33.5: pxToEm(33.5),
  43: pxToEm(43),
  65: pxToEm(65),
  77: pxToEm(77),
};

const remMargin = {
  17: pxToEm(17),
  23: pxToEm(23),
  28.5: pxToEm(28.5),
  41: pxToEm(41),
};

const remSize = {
  2: pxToEm(2),
  4: pxToEm(4),
  5: pxToEm(5),
  10: pxToEm(10),
  15: pxToEm(15),
  16: pxToEm(16),
  18: pxToEm(18),
  20: pxToEm(20),
  23: pxToEm(23),
  24: pxToEm(24),
  26: pxToEm(26),
  40.8: pxToEm(40.8),
  42: pxToEm(42),
  38: pxToEm(38),
  48: pxToEm(48),
  53: pxToEm(53),
  56: pxToEm(56),
  64: pxToEm(64),
  68: pxToEm(68),
  73: pxToEm(73),
  74: pxToEm(74),
  90: pxToEm(90),
  100: pxToEm(100),
  120: pxToEm(120),
  128: pxToEm(128),
  138: pxToEm(138),
  164: pxToEm(164),
  187: pxToEm(187),
  192: pxToEm(192),
  210: pxToEm(210),
  231: pxToEm(231),
  249: pxToEm(249),
  254: pxToEm(254),
  285: pxToEm(285),
  300: pxToEm(300),
  309.65: pxToEm(309.65),
  318: pxToEm(318),
  324: pxToEm(324),
  334: pxToEm(334),
  340: pxToEm(340),
};

const remFontSize = {
  1010: [pxToEm(10), { lineHeight: pxToEm(10) }],
  1012: [pxToEm(10), { lineHeight: pxToEm(12) }],
  1022: [pxToEm(10), { lineHeight: pxToEm(22) }],
  1118: [pxToEm(11), { lineHeight: pxToEm(18) }],
  1217: [pxToEm(12), { lineHeight: pxToEm(17) }],
  1222: [pxToEm(12), { lineHeight: pxToEm(22) }],
  1215.6: [pxToEm(12), { lineHeight: pxToEm(15.6) }],
  1315: [pxToEm(13), { lineHeight: pxToEm(15) }],
  1313: [pxToEm(13), { lineHeight: pxToEm(13) }],
  1320: [pxToEm(13), { lineHeight: pxToEm(20) }],
  1322: [pxToEm(13), { lineHeight: pxToEm(22) }],
  1414: [pxToEm(14), { lineHeight: pxToEm(14) }],
  1416: [pxToEm(14), { lineHeight: pxToEm(16) }],
  1422: [pxToEm(14), { lineHeight: pxToEm(22) }],
  1515: [pxToEm(15), { lineHeight: pxToEm(15) }],
  1521: [pxToEm(15), { lineHeight: pxToEm(21) }],
  1522: [pxToEm(15), { lineHeight: pxToEm(22) }],
  1527: [pxToEm(15), { lineHeight: pxToEm(27) }],
  1613: [pxToEm(16), { lineHeight: pxToEm(13) }],
  1620.8: [pxToEm(16), { lineHeight: pxToEm(20.8) }],
  1622: [pxToEm(16), { lineHeight: pxToEm(22) }],
  1616: [pxToEm(16), { lineHeight: pxToEm(16) }],
  1626: [pxToEm(16), { lineHeight: pxToEm(26) }],
  1718: [pxToEm(17), { lineHeight: pxToEm(18) }],
  1722: [pxToEm(17), { lineHeight: pxToEm(22) }],
  1818: [pxToEm(18), { lineHeight: pxToEm(18) }],
  1822: [pxToEm(18), { lineHeight: pxToEm(22) }],
  2021: [pxToEm(20), { lineHeight: pxToEm(21) }],
  2022: [pxToEm(20), { lineHeight: pxToEm(22) }],
  2122: [pxToEm(21), { lineHeight: pxToEm(22) }],
  2437: [pxToEm(24), { lineHeight: pxToEm(37) }],
};

const tailwindConfig = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': pxToEm(1400),
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#ffffff',
        dark: '#F9F9F9',
      },
      black: '#000000',
      green: '#29ad19',
      blue: {
        DEFAULT: '#4f8be8',
        system: '#0099fa',
      },
      orange: {
        DEFAULT: '#ff9a00',
      },
      gray: {
        50: '#fafaf9',
        100: '#D9D9D9',
        200: '#909090',
        300: '#bfbfbf',
        400: '#cfcece',
        500: '#DCDCDC',
        105: '#8F8F8F',
        110: '#7a7a7a',
        DEFAULT: '#3f3f3f',
      },
      red: {
        DEFAULT: '#dd5c45',
        light: '#ff0000',
        dark: '#b91300',
      },
      shadow: '#000 / 0.15',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },

      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        ...remBorderRadius,
      },
      fontSize: { ...remFontSize },
      padding: {
        ...remPadding,
      },
      size: {
        ...remSize,
      },
      height: {
        ...remSize,
      },
      gap: {
        ...remGap,
      },
      width: {
        ...remSize,
      },
      margin: { ...remMargin },
      minHeight: { ...remSize },
      minWidth: { ...remSize },
      maxWidth: { ...remSize },
      maxHeight: { ...remSize },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
      boxShadow: {
        floating: '0px 2.6px 5.03px 0px rgba(0, 0, 0, 0.2)',
        drawer: '0px -3px 3px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default tailwindConfig;

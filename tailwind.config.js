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
};

const remPadding = {
  9.5: pxToEm(9.5),
  10: pxToEm(10),
  13: pxToEm(13),
  14: pxToEm(14),
  18: pxToEm(18),
  53: pxToEm(53),
  65: pxToEm(65),
};

const remSize = {
  2: pxToEm(2),
  4: pxToEm(4),
  5: pxToEm(5),
  15: pxToEm(15),
  18: pxToEm(18),
  23: pxToEm(23),
  24: pxToEm(24),
  26: pxToEm(26),
  42: pxToEm(42),
  38: pxToEm(38),
  53: pxToEm(53),
  68: pxToEm(68),
  73: pxToEm(73),
  100: pxToEm(100),
  120: pxToEm(120),
  138: pxToEm(138),
  210: pxToEm(210),
  231: pxToEm(231),
  249: pxToEm(249),
  285: pxToEm(285),
  300: pxToEm(300),
  340: pxToEm(340),
};

const remFontSize = {
  1010: [pxToEm(10), { lineHeight: pxToEm(10) }],
  1012: [pxToEm(10), { lineHeight: pxToEm(12) }],
  1022: [pxToEm(10), { lineHeight: pxToEm(22) }],
  1222: [pxToEm(12), { lineHeight: pxToEm(22) }],
  1215.6: [pxToEm(12), { lineHeight: pxToEm(15.6) }],
  1322: [pxToEm(13), { lineHeight: pxToEm(22) }],
  1414: [pxToEm(14), { lineHeight: pxToEm(14) }],
  1422: [pxToEm(14), { lineHeight: pxToEm(22) }],
  1515: [pxToEm(15), { lineHeight: pxToEm(15) }],
  1522: [pxToEm(15), { lineHeight: pxToEm(22) }],
  1620.8: [pxToEm(16), { lineHeight: pxToEm(20.8) }],
  1626: [pxToEm(16), { lineHeight: pxToEm(26) }],
  1822: [pxToEm(18), { lineHeight: pxToEm(22) }],
  2022: [pxToEm(20), { lineHeight: pxToEm(22) }],
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
        200: '#909090',
        300: '#bfbfbf',
        400: '#cfcece',
        500: '#DCDCDC',
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
      height: {
        ...remSize,
      },
      gap: {
        ...remGap,
      },
      width: {
        ...remSize,
      },
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
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

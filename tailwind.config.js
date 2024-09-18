/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

const pxToEm = ($px) => {
  return `${$px / 16}rem`;
};

const remBorderRadius = {
  1.5: pxToEm(1.5),
  2: pxToEm(2),
  4: pxToEm(4),
  6: pxToEm(6),
  8: pxToEm(8),
  11: pxToEm(11),
  12: pxToEm(12),
  14: pxToEm(14),
  21: pxToEm(21),
};

const remGap = {
  6: pxToEm(6),
  7: pxToEm(7),
  8: pxToEm(8),
  10: pxToEm(10),
  11: pxToEm(11),
  12: pxToEm(12),
  16: pxToEm(16),
  17: pxToEm(17),
  18: pxToEm(18),
  20: pxToEm(20),
  22: pxToEm(22),
  28: pxToEm(28),
  29: pxToEm(29),
  30: pxToEm(30),
  38: pxToEm(38),
  58: pxToEm(58),
  98: pxToEm(98),
  145: pxToEm(145),
};

const remPadding = {
  3: pxToEm(3),
  4: pxToEm(4),
  1.1: pxToEm(1),
  1.2: pxToEm(2),
  4.5: pxToEm(4.5),
  8: pxToEm(8),
  9.5: pxToEm(9.5),
  10: pxToEm(10),
  10.5: pxToEm(10.5),
  11: pxToEm(11),
  11.5: pxToEm(11.5),
  12: pxToEm(12),
  13: pxToEm(13),
  14: pxToEm(14),
  14.5: pxToEm(14.5),
  15: pxToEm(15),
  15.5: pxToEm(15.5),
  16: pxToEm(16),
  18: pxToEm(18),
  53: pxToEm(53),
  54: pxToEm(54),
  17.5: pxToEm(17.5),
  20: pxToEm(20),
  22.5: pxToEm(22.5),
  24: pxToEm(24),
  27.5: pxToEm(27.5),
  21: pxToEm(21),
  28: pxToEm(28),
  29: pxToEm(29),
  30: pxToEm(30),
  33.5: pxToEm(33.5),
  36: pxToEm(36),
  43: pxToEm(43),
  46: pxToEm(46),
  55: pxToEm(55),
  65: pxToEm(65),
  77: pxToEm(77),
  80: pxToEm(80),
  108: pxToEm(108),
};

const remMargin = {
  4: pxToEm(4),
  6: pxToEm(6),
  6.5: pxToEm(6.5),
  8: pxToEm(8),
  12: pxToEm(12),
  13: pxToEm(13),
  17: pxToEm(17),
  19: pxToEm(19),
  21: pxToEm(21),
  21.5: pxToEm(21.5),
  22: pxToEm(22),
  23: pxToEm(23),
  25: pxToEm(25),
  25.5: pxToEm(25.9),
  26: pxToEm(26),
  26.5: pxToEm(26.5),
  27: pxToEm(27),
  28: pxToEm(28),
  28.5: pxToEm(28.5),
  31: pxToEm(31),
  40: pxToEm(40),
  41: pxToEm(41),
  43: pxToEm(43),
  46: pxToEm(46),
  48: pxToEm(48),
  50: pxToEm(50),
  80: pxToEm(80),
  100: pxToEm(100),
};

const remSize = {
  2: pxToEm(2),
  4: pxToEm(4),
  5: pxToEm(5),
  10: pxToEm(10),
  14: pxToEm(14),
  15: pxToEm(15),
  16: pxToEm(16),
  18: pxToEm(18),
  20: pxToEm(20),
  22: pxToEm(22),
  23: pxToEm(23),
  24: pxToEm(24),
  26: pxToEm(26),
  34: pxToEm(34),
  40.8: pxToEm(40.8),
  42: pxToEm(42),
  38: pxToEm(38),
  48: pxToEm(48),
  50: pxToEm(50),
  52: pxToEm(52),
  53: pxToEm(53),
  56: pxToEm(56),
  58: pxToEm(58),
  64: pxToEm(64),
  68: pxToEm(68),
  73: pxToEm(73),
  74: pxToEm(74),
  90: pxToEm(90),
  100: pxToEm(100),
  111: pxToEm(111),
  120: pxToEm(120),
  128: pxToEm(128),
  131: pxToEm(131),
  138: pxToEm(138),
  145: pxToEm(145),
  154: pxToEm(154),
  160: pxToEm(160),
  164: pxToEm(164),
  173: pxToEm(173),
  187: pxToEm(187),
  192: pxToEm(192),
  210: pxToEm(210),
  231: pxToEm(231),
  249: pxToEm(249),
  254: pxToEm(254),
  265: pxToEm(265),
  285: pxToEm(285),
  292: pxToEm(292),
  300: pxToEm(300),
  301: pxToEm(301),
  309.65: pxToEm(309.65),
  318: pxToEm(318),
  324: pxToEm(324),
  334: pxToEm(334),
  340: pxToEm(340),
  353: pxToEm(353),
  423: pxToEm(423),
  451: pxToEm(451),
};

const remFontSize = {
  1010: [pxToEm(10), { lineHeight: pxToEm(10) }],
  1012: [pxToEm(10), { lineHeight: pxToEm(12) }],
  1022: [pxToEm(10), { lineHeight: pxToEm(22) }],
  1112: [pxToEm(11), { lineHeight: pxToEm(12) }],
  1116: [pxToEm(11), { lineHeight: pxToEm(16) }],
  1118: [pxToEm(11), { lineHeight: pxToEm(18) }],
  1213: [pxToEm(12), { lineHeight: pxToEm(13) }],
  1217: [pxToEm(12), { lineHeight: pxToEm(17) }],
  1222: [pxToEm(12), { lineHeight: pxToEm(22) }],
  1212: [pxToEm(12), { lineHeight: pxToEm(12) }],
  1215.6: [pxToEm(12), { lineHeight: pxToEm(15.6) }],
  1218: [pxToEm(12), { lineHeight: pxToEm(18) }],
  1219.64: [pxToEm(12), { lineHeight: pxToEm(19.64) }],
  1315: [pxToEm(13), { lineHeight: pxToEm(15) }],
  1313: [pxToEm(13), { lineHeight: pxToEm(13) }],
  1314: [pxToEm(13), { lineHeight: pxToEm(14) }],
  1320: [pxToEm(13), { lineHeight: pxToEm(20) }],
  1322: [pxToEm(13), { lineHeight: pxToEm(22) }],
  1414: [pxToEm(14), { lineHeight: pxToEm(14) }],
  1416: [pxToEm(14), { lineHeight: pxToEm(16) }],
  1422: [pxToEm(14), { lineHeight: pxToEm(22) }],
  1423: [pxToEm(14), { lineHeight: pxToEm(23) }],
  1515: [pxToEm(15), { lineHeight: pxToEm(15) }],
  1518: [pxToEm(15), { lineHeight: pxToEm(18) }],
  1521: [pxToEm(15), { lineHeight: pxToEm(21) }],
  1522: [pxToEm(15), { lineHeight: pxToEm(22) }],
  1527: [pxToEm(15), { lineHeight: pxToEm(27) }],
  1613: [pxToEm(16), { lineHeight: pxToEm(13) }],
  1620.8: [pxToEm(16), { lineHeight: pxToEm(20.8) }],
  1622: [pxToEm(16), { lineHeight: pxToEm(22) }],
  1616: [pxToEm(16), { lineHeight: pxToEm(16) }],
  1618: [pxToEm(16), { lineHeight: pxToEm(18) }],
  1626: [pxToEm(16), { lineHeight: pxToEm(26) }],
  1718: [pxToEm(17), { lineHeight: pxToEm(18) }],
  1722: [pxToEm(17), { lineHeight: pxToEm(22) }],
  1818: [pxToEm(18), { lineHeight: pxToEm(18) }],
  1918: [pxToEm(19), { lineHeight: pxToEm(18) }],
  1822: [pxToEm(18), { lineHeight: pxToEm(22) }],
  1826: [pxToEm(18), { lineHeight: pxToEm(26) }],
  2020: [pxToEm(20), { lineHeight: pxToEm(20) }],
  2021: [pxToEm(20), { lineHeight: pxToEm(21) }],
  2022: [pxToEm(20), { lineHeight: pxToEm(22) }],
  2122: [pxToEm(21), { lineHeight: pxToEm(22) }],
  2223: [pxToEm(22), { lineHeight: pxToEm(23) }],
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
        sm: pxToEm(640),
        md: pxToEm(786),
        lg: pxToEm(1024),
        xl: pxToEm(1280),
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
        80: '#F4F4F4',
        100: '#D9D9D9',
        150: '#9F9F9F',
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
        error: '#FF4B33',
        light: '#ff0000',
        dark: '#b91300',
      },
      shadow: '#000 / 0.15',
    },
    extend: {
      screens: {
        small: { min: '150px', max: '300px' },
        medium: { min: '300px', max: '400px' },
      },

      fontFamily: {
        sans: ['var(--font-sans)'],
      },

      borderWidth: {
        1.5: pxToEm(1.5),
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

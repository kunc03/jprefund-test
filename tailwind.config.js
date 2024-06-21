/** @type {import('tailwindcss').Config} */

module.exports = {
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
        '2xl': '1400px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      green: '#29ad19',
      blue: {
        DEFAULT: '#4f8be8',
        system: '#0099fa',
      },
      orange: {
        DEFAULT: '#ff9a00',
        dark: '#dd5c45',
      },
      gray: {
        50: '#fafaf9',
        200: '#909090',
        300: '#bfbfbf',
        400: '#cfcece',
        500: '#ededed',
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
        '2.5xl': '1.3125rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        sm: ['12px', { lineHeight: '22px' }],
        '2sm': ['14px', { lineHeight: '14px' }],
        md: ['15px', { lineHeight: '15px' }],
        lg: ['18px', { lineHeight: '22px' }],
      },
      padding: {
        2.5: '0.59375rem',
        3.5: '0.875rem',
        4.5: '1.125rem',
      },
      height: {
        4.5: '1.125rem',
        15: '3.75rem',
        16.5: '4.25rem',
        28.5: '7.5rem',
      },
      width: {
        4.5: '1.125rem',
        16.5: '4.25rem',
        28.5: '7.5rem',
        52.5: '13.125rem',
      },
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
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

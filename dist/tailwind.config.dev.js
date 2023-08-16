"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: function backgroundImage(theme) {
        return {
          'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))'
        };
      }
    },
    gradientColorStops: function gradientColorStops(theme) {
      return theme('colors');
    }
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus']
    }
  },
  plugins: [require('@tailwindcss/forms')({
    strategy: 'class'
  })]
};
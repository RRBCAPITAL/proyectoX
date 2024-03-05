const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transition: {
        'nicetransi': 'height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        extrabold: 800,
      },
      boxShadow: {
        'custom1': '-2rem 0 2rem rgba(0, 0, 0, 0.3)',
        'custom2': '0px 0px 62px -35px rgba(0,0,0,1)',
        'customwhite': '0px 0px 62px -35px rgba(123,0,255,1)',
        'dark': '0px 0px 5px -1px rgba(255,0,81,1)',
        'red': '0px 0px 12px 1px rgba(255,5,84,1)',
        'normal': '0px 0px 8px -4px rgba(12,0,61,1)',
        'p4': '0 0 8px #00b1ff',
        'p1': '0 0 8px rgba(130,0,250,1)',
      },
      backgroundColor: {
        // 'back-red': '#febd57',
        'back-red': '#00b1ff',
        'back-orange': '#FFD493', 
        'back-red-l': '#643d00',
        'back-redd': '#ff3d64',
        // 'back-red': '#ff3d64',
        // 'back-red-l': '#fff2f7',
        'dark-d': '#161616',
        // 'dark-l': '#3b3b3b'
        'dark-l': '#242526',
        'blackt': '#000000',
        'whitet': '#ffff'
      },
      borderColor: {
        'bor-red': '#00b1ff',
        'bor-red-l': '#643d00',
        // 'bor-red': '#ff3d64',
        // 'bor-red-l': '#fff2f7',
        'blackt': '#000000',
        'whitet': '#ffff'
      },
      textColor: {
        't-red': '#00b1ff',
        't-red-l': '#643d00',
        'blackt': '#000000',
        'whitet': '#ffff'
        // 't-red': '#ff3d64',
        // 't-red-l': '#fff2f7'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}

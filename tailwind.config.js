/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f4f7f4',
          100: '#e4ede4',
          200: '#c8dbc9',
          300: '#9dbf9e',
          400: '#6d9e6e',
          500: '#4a7f4b',
          600: '#39663a',
          700: '#2e5130',
          800: '#264228',
          900: '#1f3621',
        },
        cream: {
          50:  '#fdfcf8',
          100: '#faf7ef',
          200: '#f4edda',
          300: '#ebdfc0',
          400: '#deca98',
          500: '#cfb472',
        },
        warm: {
          50:  '#fdf8f3',
          100: '#faeee0',
          200: '#f3d9bc',
          300: '#e9be8e',
          400: '#dc9d5f',
          500: '#c87d3a',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'float':      'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
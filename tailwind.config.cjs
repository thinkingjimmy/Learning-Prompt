const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        sm: '4px',
      },
      screens: {
        sm: '0px',
        lg: '997px',
      },
      colors: {
        primary: {
          DEFAULT:
            'rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)',
          100: 'rgb(var(--docs-color-primary-100, 26 144 255) / <alpha-value>)',
          200: 'rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)',
        },
        secondary: {
          DEFAULT:
            'rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)',
          1000: 'rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)',
          900: 'rgb(var(--docs-color-secondary-900, 25 25 25) / <alpha-value>)',
          800: 'rgb(var(--docs-color-secondary-800, 38 38 38) / <alpha-value>)',
          700: 'rgb(var(--docs-color-secondary-700, 71 71 71) / <alpha-value>)',
        },
        text: {
          400: 'rgb(var(--docs-color-text-400, 153 153 153) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};

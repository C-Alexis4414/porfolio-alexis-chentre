module.exports = {
    darkMode: 'class',
    theme: {
      extend: {
        boxShadow: {
          'ix2': 'inset 0 3px 6px 0 rgba(0, 0, 0, 0.1)',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        }
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
      function ({ addUtilities }) {
        const newUtilities = {
          '.backface-hidden': {
            'backface-visibility': 'hidden',
          },
          '.perspective': {
            'perspective': '1000px',
          },
        }
        addUtilities(newUtilities, ['responsive', 'hover'])
      }
    ],
  }
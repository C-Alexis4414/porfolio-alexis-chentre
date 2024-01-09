module.exports = {
    darkMode: 'class',
    theme: {
      extend: {
        boxShadow: {
          'ix2': 'inset 0 3px 6px 0 rgba(0, 0, 0, 0.1)',
        },
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
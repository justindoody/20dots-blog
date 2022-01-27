module.exports = {
  content: [
    './app/views/**/*.html.haml',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js'
  ],
  options: {
    defaultExtractor: content => content.match(/[^<>"{\.'`\s]*[^<>"{\.'`\s:]/g) || [],
  },
  theme: {
    fontFamily: {
      'sidebar': ['"Avenir Next"', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      'sans': ["Helvetica Neue", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", 'Geneva', 'Verdana', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

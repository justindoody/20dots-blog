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
      'serif': ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif']
    },
    extend: {
      colors: {
        'medium-blue': '#4197e2'
      }
    }
  }
}

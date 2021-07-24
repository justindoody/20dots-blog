module.exports = {
    purge: {
        content: [
            './app/views/**/*.html.haml',
            './app/**/*.js',
        ],
        options: {
            defaultExtractor: content => content.match(/[^<>"{\.'`\s]*[^<>"{\.'`\s:]/g) || [],
        }
    },
    theme: {
        fontFamily: {
            'sidebar': ['"Avenir Next"', 'ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif']
        }
    },
    variants: {},
    plugins: [],
  }
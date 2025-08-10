/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B0000',
          50: '#FDEEED',
          100: '#FADDD9',
          200: '#F4BAB3',
          300: '#EE978C',
          400: '#E87466',
          500: '#E25140',
          600: '#D42E1A',
          700: '#B02213',
          800: '#8B1B0F',
          900: '#66140B',
          950: '#4A0F08'
        },
        accent: {
          DEFAULT: '#DAA520',
          50: '#FDF7E6',
          100: '#FBEECA',
          200: '#F7DC95',
          300: '#F3CB60',
          400: '#EFB92B',
          500: '#DAA520',
          600: '#B8891A',
          700: '#966D15',
          800: '#745110',
          900: '#52360B'
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#D4D4D4',
            '[class~="lead"]': {
              color: '#A3A3A3',
            },
            a: {
              color: '#DAA520',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            strong: {
              color: '#FAFAFA',
              fontWeight: '600',
            },
            'ol > li::marker': {
              fontWeight: '400',
              color: '#A3A3A3',
            },
            'ul > li::marker': {
              backgroundColor: '#A3A3A3',
            },
            hr: {
              borderColor: '#404040',
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: '#FAFAFA',
              borderLeftWidth: '0.25rem',
              borderLeftColor: '#DAA520',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            h1: {
              color: '#FAFAFA',
              fontWeight: '800',
            },
            h2: {
              color: '#FAFAFA',
              fontWeight: '700',
            },
            h3: {
              color: '#FAFAFA',
              fontWeight: '600',
            },
            h4: {
              color: '#FAFAFA',
              fontWeight: '600',
            },
            'figure figcaption': {
              color: '#A3A3A3',
            },
            code: {
              color: '#FAFAFA',
              fontWeight: '600',
            },
            'a code': {
              color: '#DAA520',
            },
            pre: {
              color: '#D4D4D4',
              backgroundColor: '#171717',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: '400',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            'pre code:before': {
              content: 'none',
            },
            'pre code:after': {
              content: 'none',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
            },
            thead: {
              color: '#FAFAFA',
              fontWeight: '600',
              borderBottomWidth: '1px',
              borderBottomColor: '#404040',
            },
            'thead th': {
              verticalAlign: 'bottom',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: '#262626',
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'top',
              paddingTop: '0.5714286em',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
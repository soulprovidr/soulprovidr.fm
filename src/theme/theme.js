import './fonts/hk-grotesk/hk-grotesk.css';

export const defaultTheme = {
  borders: {
    container: '1px solid #eee',
    input: '2px solid #aaa',
    error: '2px solid #E54D42',
    focus: '2px solid #308AEC'
  },
  colors: {
    accent: '#007bff',
    bg: '#fff',
    hover: '#f9f9f9',
    text: {
      primary: '#343a40',
      secondary: '#6c757d'
    },
    error: 'red'
  },
  fonts: {
    body: 'Inter, Helvetica Neue',
    heading: 'hk-grotesk'
  },
  fontSizes: [
    '0.512em',
    '0.64em',
    '0.8em',
    '1em',
    '1.25em',
    '1.563em',
    '1.953em',
    '2.441em',
    '3.052em'
  ],
  radii: [2, 4, 6, 8],
  shadows: ['0 4px 4px rgba(197, 211, 219, 0.25)'],
  space: [0, 4, 8, 16, 32, 48, 64, 128, 256, 512]
};

export const darkTheme = {
  ...defaultTheme,
  borders: {
    ...defaultTheme.borders,
    container: '1px solid #515151'
  },
  colors: {
    ...defaultTheme.colors,
    bg: '#222',
    hover: '#444',
    text: {
      ...defaultTheme.colors.text,
      primary: 'white'
    }
  }
};

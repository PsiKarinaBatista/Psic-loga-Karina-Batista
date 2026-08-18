export const colors = {
  primary: {
    50: '#fefbf0',
    100: '#fdf6e1',
    200: '#fbecc3',
    300: '#f8dd95',
    400: '#f4c95a',
    500: '#f0b52e',
    600: '#e19a1a',
    700: '#bb7516',
    800: '#955c1a',
    900: '#7a4d1a',
    950: '#a37400', // Cor principal especificada
  },
  neutral: {
    50: '#fdfcf9',
    100: '#f9f7f3',
    200: '#f3efe7',
    300: '#e9e2d7', // Cor neutra especificada
    400: '#d8cdbe',
    500: '#c4b5a0',
    600: '#ad9a7f',
    700: '#8f7d63',
    800: '#766752',
    900: '#5f5444',
    950: '#3d3326',
  },
  accent: {
    50: '#fef7e6',
    100: '#fdecc3',
    200: '#fbd98b',
    300: '#f8c04d',
    400: '#f5a320',
    500: '#f08c0e',
    600: '#e16e0a',
    700: '#bb540c',
    800: '#954212',
    900: '#7a3714',
    950: '#573d02', // Cor de destaque especificada
  },
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  }
} as const;

export type ColorKey = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary;

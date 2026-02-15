import { createTheme, MantineColorsTuple } from '@mantine/core';

const primaryColor: MantineColorsTuple = [
  '#f3edff',
  '#e2d5ff',
  '#c4a8ff',
  '#a478ff',
  '#894fff',
  '#7836ff',
  '#7042d2', // Primary (index 6)
  '#5e25e6',
  '#5320cd',
  '#4819b5',
];

export const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: primaryColor,
  },
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
        size: 'md',
      },
    },
    Container: {
      defaultProps: {
        size: 'xl',
      },
    },
  },
});

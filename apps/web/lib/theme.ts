import { createTheme, MantineColorsTuple } from '@mantine/core';

const primaryColor: MantineColorsTuple = [
  '#fff0f8',
  '#ffe1f0',
  '#ffc2e1',
  '#ffa3d2',
  '#ff85c3',
  '#fa80c9', // Primary (index 5)
  '#e64d9b',
  '#cc2b7f',
  '#b31566',
  '#99004d',
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

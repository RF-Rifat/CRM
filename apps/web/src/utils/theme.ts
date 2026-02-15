import { generateColors, neutral } from '@/utils';
import { createTheme, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core';


const primaryShades = generateColors('#D381B5'); // Generate shades for primary color
const secondaryShades = generateColors('#51459F'); // Generate shades for secondary color
const accentShades = generateColors('#B6346B'); // Generate shades for accent color

const themeOverride = createTheme({
  colors: {
    primary: primaryShades,
    secondary: secondaryShades,
    accent: accentShades,
    neutral: neutral, // Example neutral color
  },
  breakpoints: {
    xs: '30em',
    sm: '40em',
    md: '48em',
    lg: '64em',
    xl: '80em',
    xxl: '90em',
  },
  primaryColor: 'primary',
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

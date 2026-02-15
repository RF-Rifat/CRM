import { generateColors, generateColorsMap } from './color-generator';
import { neutral } from './colorData';
import { theme } from './theme';
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export { generateColors, generateColorsMap, neutral, theme, wait };

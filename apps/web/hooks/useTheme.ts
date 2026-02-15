import { useMantineColorScheme } from '@mantine/core';
import { useCallback, useEffect } from 'react';

export const useTheme = () => {
  const { colorScheme, setColorScheme, toggleColorScheme } =
    useMantineColorScheme();

  const handleToggle = useCallback(() => {
    toggleColorScheme();
  }, [toggleColorScheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (colorScheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [colorScheme]);

  return {
    theme: colorScheme,
    setTheme: setColorScheme,
    toggleTheme: handleToggle,
    isDark: colorScheme === 'dark',
  };
};

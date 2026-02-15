import { useTheme } from '@/hooks/useTheme';
import { ActionIcon } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ActionIcon
      onClick={toggleTheme}
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
      className="rounded-full border-none bg-gray-100 transition-colors dark:bg-gray-800"
    >
      {isDark ? (
        <IconSun size="1.2rem" className="text-yellow-400" />
      ) : (
        <IconMoon size="1.2rem" className="text-brand" />
      )}
    </ActionIcon>
  );
};

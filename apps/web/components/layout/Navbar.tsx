import { Logo } from '@/components/shared/Logo';
import { NavLinks } from '@/components/shared/NavLinks';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { ActionIcon, Group, Indicator } from '@mantine/core';
import { IconMenu2, IconNotification, IconSearch } from '@tabler/icons-react';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 right-0 left-0 z-[100] border-b border-transparent transition-all duration-300',
        scrolled
          ? 'border-gray-100 bg-white/90 py-3 shadow-md backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90'
          : 'bg-transparent py-5'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          <NavLinks />

          <Group gap="md">
            <Group gap="xs" className="hidden sm:flex">
              <ActionIcon
                variant="subtle"
                color="gray"
                size="lg"
                className="rounded-full"
              >
                <IconSearch size={20} />
              </ActionIcon>
              <Indicator color="brand" size={8} offset={4} withBorder>
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  size="lg"
                  className="rounded-full"
                >
                  <IconNotification size={20} />
                </ActionIcon>
              </Indicator>
            </Group>

            <ThemeToggle />

            <Button variant="filled" className="bg-brand hidden sm:block">
              Login
            </Button>

            <ActionIcon
              variant="subtle"
              color="gray"
              size="lg"
              className="md:hidden"
            >
              <IconMenu2 size={24} />
            </ActionIcon>
          </Group>
        </div>
      </Container>
    </header>
  );
};

import { Logo } from '@/components/shared/Logo';
import { NavLinks } from '@/components/shared/NavLinks';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ActionIcon, Group, Indicator } from '@mantine/core';
import { IconSearch, IconShoppingCart } from '@tabler/icons-react';
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
          ? 'border-gray-100 bg-white/90 py-3 shadow-md backdrop-blur-md'
          : 'bg-transparent py-5'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Group gap="xl">
            <Logo />
            <NavLinks />
          </Group>

          <Group gap="md">
            <ActionIcon
              variant="subtle"
              color="gray"
              size="lg"
              className="rounded-full"
            >
              <IconSearch size={20} />
            </ActionIcon>

            <Indicator color="violet" size={8} offset={4}>
              <ActionIcon
                variant="subtle"
                color="gray"
                size="lg"
                className="rounded-full"
              >
                <IconShoppingCart size={20} />
              </ActionIcon>
            </Indicator>

            <Button
              variant="filled"
              className="bg-violet-600 hover:bg-violet-700"
            >
              Login
            </Button>
          </Group>
        </div>
      </Container>
    </header>
  );
};

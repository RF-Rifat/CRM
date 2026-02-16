'use client'
import { Logo } from '@/components/shared/Logo';
import { NavLinks } from '@/components/shared/NavLinks';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import BagIcon from '@/src/assets/Bag.svg';
import SearchIcon from '@/src/assets/Search.svg';
import { ActionIcon, Group, Indicator } from '@mantine/core';
import { clsx } from 'clsx';
import Image from 'next/image';
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
              <Image src={SearchIcon} alt="Search" width={24} height={24} />
            </ActionIcon>

          
              <ActionIcon
                variant="subtle"
                color="gray"
                size="lg"
                className="rounded-full"
              >
                <Image src={BagIcon} alt="Bag" width={24} height={24} />
              </ActionIcon>
           

            <Button>Login</Button>
          </Group>
        </div>
      </Container>
    </header>
  );
};

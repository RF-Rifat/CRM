'use client';

import { Icon } from '@iconify/react';
import { Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

interface AdminSideNavProps {
  navItems: NavItem[];
}

export default function AdminSideNav({ navItems }: AdminSideNavProps) {
  const pathname = usePathname();

  return (
    <Stack gap="xs">
      <Text size="xs" tt="uppercase" fw={700} c="dimmed" mb="sm">
        Navigation
      </Text>

      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          style={{
            textDecoration: 'none',
            color:
              pathname === item.href
                ? 'var(--mantine-primary-color-filled)'
                : 'inherit',
            padding: '8px 12px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor:
              pathname === item.href
                ? 'var(--mantine-primary-color-light)'
                : 'transparent',
          }}
        >
          <Icon icon={item.icon} />
          <Text>{item.label}</Text>
        </Link>
      ))}
    </Stack>
  );
}

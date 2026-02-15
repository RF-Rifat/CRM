'use client';

import { AppShell, Burger, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { adminNavlinks } from '../../../../data/adminNavlinks';
import AdminSideNav from './AdminSideNav';

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Title order={3} c="primary">
              Admin Dashboard
            </Title>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AdminSideNav navItems={adminNavlinks} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
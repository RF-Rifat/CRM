'use client';
import { Icon } from '@iconify/react';
import { Button, Group, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import UserForm from './UserForm';
import UserList from './UserList';

const UserManagementContent = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Stack p={15}>
      <Group justify="space-between">
        <Text fw={600} fz={{ base: 20, md: 28 }}>
          User Management
        </Text>
        <Button onClick={open} leftSection={<Icon icon="lucide:plus" />}>
          Create User
        </Button>
      </Group>

      {/* user list */}
      <UserList />

      {/* user form modal */}
      <Modal
        opened={opened}
        onClose={close}
        title="Create New Plan"
        size="lg"
        centered
      >
        <UserForm mode="create" close={close} />
      </Modal>
    </Stack>
  );
};

export default UserManagementContent;

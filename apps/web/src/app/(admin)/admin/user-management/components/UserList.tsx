'use client';
import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Modal,
  Stack,
  Table,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { dummyUsers } from '../../../../../data/demoUsers';
import UserForm from './UserForm';

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'manager' | 'advertiser' | 'sales';
  status: 'active' | 'pending' | 'deactive';
  createdAt: Date;
  updatedAt: Date;
};

function UserList() {
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteOpened, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    open();
  };

  const handleDeleteClick = (user: User) => {
    setSelectedUser(user);
    openDelete();
  };

  const handleDelete = () => {
    closeDelete();
    notifications.show({
      title: 'Successfull',
      message: 'User deleted successfully!',
      color: 'green',
      autoClose: 3000,
    });
  };
  return (
    <>
      <Table stickyHeader stickyHeaderOffset={60} striped>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Role</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {dummyUsers.map(user => (
            <Table.Tr key={user.id}>
              <Table.Td>{user.name}</Table.Td>
              <Table.Td>{user.email}</Table.Td>
              <Table.Td>
                <Badge
                  miw={80}
                  color={
                    user.role === 'admin'
                      ? 'blue'
                      : user.role === 'manager'
                        ? 'green'
                        : user.role === 'advertiser'
                          ? 'yellow'
                          : 'gray'
                  }
                  variant="light"
                >
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Badge>
              </Table.Td>
              <Table.Td>
                <Badge
                  miw={80}
                  color={
                    user.status === 'active'
                      ? 'green'
                      : user.status === 'pending'
                        ? 'orange'
                        : 'red'
                  }
                  variant="light"
                >
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </Badge>
              </Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <ActionIcon
                    onClick={() => handleEditClick(user)}
                    variant="subtle"
                    color="blue"
                  >
                    <Icon icon="uil:edit" />
                  </ActionIcon>
                  <ActionIcon
                    onClick={() => handleDeleteClick(user)}
                    variant="subtle"
                    color="red"
                  >
                    <Icon icon="bx:trash" />
                  </ActionIcon>
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
        <Table.Caption>Scroll page to see sticky header</Table.Caption>
      </Table>
      {/* edti modal */}
      <Modal
        opened={opened}
        onClose={close}
        title="Create New Plan"
        size="lg"
        centered
      >
        <UserForm mode="edit" close={close} user={selectedUser} />
      </Modal>

      {/* delete modal */}
      <Modal
        opened={deleteOpened}
        onClose={closeDelete}
        title="Delete User"
        size="md"
        centered
      >
        <Stack>
          <Text>Are you sure you want to delete this user?</Text>
          <Group justify="end">
            <Button variant="default" onClick={closeDelete}>
              Cancel
            </Button>
            <Button bg="red" onClick={handleDelete}>
              Delete
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}

export default UserList;

'use client';
import { Icon } from '@iconify/react';
import { Button, Group, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CompanyForm from './CompanyForm';
import CompanyList from './CompanyList';

const CompanyManagementContent = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Stack p={15}>
      <Group justify="space-between">
        <Text fw={500} fz={{ base: 20, md: 26 }}>
          Company Management
        </Text>
        <Button leftSection={<Icon icon="lucide:plus" />} onClick={open}>
          Create Company
        </Button>
      </Group>

      <CompanyList />

      {/* create company modal */}
      {/* user form modal */}
      <Modal
        opened={opened}
        onClose={close}
        title="Create New Plan"
        size="lg"
        centered
      >
        <CompanyForm mode="create" close={close} />
      </Modal>
    </Stack>
  );
};

export default CompanyManagementContent;

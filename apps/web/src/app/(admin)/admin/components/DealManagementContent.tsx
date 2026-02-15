'use client';
import { Icon } from '@iconify/react';
import { Button, Group, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import DealForm from './DealForm';
import DealList from './DealList';

const DealManagementContent = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Stack py={15}>
      <Group justify="space-between">
        <Text c="primary" fw={600} fz={22}>
          Pipeline management
        </Text>
        <Button onClick={open} leftSection={<Icon icon="majesticons:plus" />}>
          Add deal
        </Button>
      </Group>

      {/* list of deals */}
      <DealList />

      {/* createDealmodal */}
      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        title={
          <Text fw={600} fz={20}>
            Create Deal
          </Text>
        }
      >
        {/* Modal content */}
        <DealForm mode="create" close={close} />
      </Modal>
    </Stack>
  );
};

export default DealManagementContent;

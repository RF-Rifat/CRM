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
import { dummyDeals } from '../../../../data/dummyDeals';
import { Deal } from '../../../../types/dealType';
import { getDealStageColor } from '../../../../utils/dealStageColor';
import DealForm from './DealForm';

const DealList = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteOpened, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const [selectedDeal, setSelectedDeal] = useState<Deal | undefined>(undefined);

  const handleEditClick = (deal: Deal) => {
    setSelectedDeal(deal);
    open();
  };

  const handleDeleteClick = (deal: Deal) => {
    setSelectedDeal(deal);
    openDelete();
  };

  const handleDelete = () => {
    closeDelete();
    notifications.show({
      title: 'Successfull',
      message: 'Deal deleted successfully!',
      color: 'green',
      autoClose: 3000,
    });
  };

  return (
    <Stack>
      <Table stickyHeader stickyHeaderOffset={60} striped>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Company Name</Table.Th>
            <Table.Th>Primary Contact</Table.Th>
            <Table.Th>Phone Number</Table.Th>
            <Table.Th>Total Cars</Table.Th>
            <Table.Th>Expected Revenue</Table.Th>
            <Table.Th>Deal Stage</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {dummyDeals.map(deal => (
            <Table.Tr key={deal.id}>
              <Table.Td>{deal.company.companyName}</Table.Td>
              <Table.Td>{deal.company.primaryContact.name}</Table.Td>
              <Table.Td>{deal.company.primaryContact.phone}</Table.Td>
              <Table.Td>{deal.numberOfCars}</Table.Td>
              <Table.Td>{deal.dealValue.toLocaleString()}$</Table.Td>
              <Table.Td>
                <Badge
                  variant="light"
                  color={getDealStageColor(deal.dealStage)}
                >
                  {deal.dealStage}
                </Badge>
              </Table.Td>

              <Table.Td>
                <Group gap="xs">
                  <ActionIcon
                    onClick={() => handleEditClick(deal)}
                    variant="subtle"
                    color="blue"
                  >
                    <Icon icon="uil:edit" />
                  </ActionIcon>
                  <ActionIcon
                    onClick={() => handleDeleteClick(deal)}
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

      {/* deal Edit modal */}
      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        title={
          <Text fw={600} fz={20}>
            Edit Deal
          </Text>
        }
      >
        {/* Modal content */}
        <DealForm mode="edit" close={close} deal={selectedDeal} />
      </Modal>

      {/* Delte modal */}
      <Modal
        opened={deleteOpened}
        onClose={closeDelete}
        title={
          <Text fw={600} fz={20}>
            Delete Deal
          </Text>
        }
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
    </Stack>
  );
};

export default DealList;

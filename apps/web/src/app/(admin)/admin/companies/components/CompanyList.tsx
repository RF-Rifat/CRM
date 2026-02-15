'use client';
import { Icon } from '@iconify/react';
import {
  ActionIcon,
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
import { dummyCompanies } from '../../../../../data/dummyCompanies';
import { Company } from '../../../../../types/companyType';
import CompanyForm from './CompanyForm';

const CompanyList = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | undefined>(
    undefined
  );
  const [deleteOpened, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const handleEditClick = (company: Company) => {
    setSelectedCompany(company);
    open();
  };

  const handleDeleteClick = (company: Company) => {
    setSelectedCompany(company);
    openDelete();
  };

  const handleDelete = () => {
    closeDelete();
    notifications.show({
      title: 'Successfull',
      message: 'Company deleted successfully!',
      color: 'green',
      autoClose: 3000,
    });
  };
  return (
    <>
      <Table stickyHeader stickyHeaderOffset={60} striped>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Company Name</Table.Th>
            <Table.Th>Primary Contact</Table.Th>
            <Table.Th>Contact Email</Table.Th>
            <Table.Th>Phone Number</Table.Th>

            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {dummyCompanies.map(company => (
            <Table.Tr key={company.primaryContact.id}>
              <Table.Td>{company.companyName}</Table.Td>
              <Table.Td>{company.primaryContact.name}</Table.Td>
              <Table.Td>{company.primaryContact.email}</Table.Td>
              <Table.Td>{company.primaryContact.phone}</Table.Td>

              <Table.Td>
                <Group gap="xs">
                  <ActionIcon
                    onClick={() => handleEditClick(company)}
                    variant="subtle"
                    color="blue"
                  >
                    <Icon icon="uil:edit" />
                  </ActionIcon>
                  <ActionIcon
                    onClick={() => handleDeleteClick(company)}
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
      {/* company edit modal */}
      <Modal
        opened={opened}
        onClose={close}
        title="Edit Company"
        size="lg"
        centered
      >
        <CompanyForm mode="edit" close={close} company={selectedCompany} />
      </Modal>

      {/* Delte modal */}
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
};

export default CompanyList;

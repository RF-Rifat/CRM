'use client';
import { Icon } from '@iconify/react';
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Group,
  List,
  Modal,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { Plan } from '../../../../../types/planType';
import PlanForm from './PlanForm';

interface PlanCardProps {
  plan: Plan;
}

const PlanCard = ({ plan }: PlanCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteOpened, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'green';
      case 'draft':
        return 'yellow';
      case 'inactive':
        return 'red';
      default:
        return 'gray';
    }
  };
  const handleDelete = () => {
    closeDelete();
    notifications.show({
      title: 'Successfull',
      message: 'Plan Deleted Successfully!',
      color: 'green',
      autoClose: 3000,
    });
  };
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
      <Stack gap="md" h="100%">
        {/* Header */}
        <Group justify="space-between" align="flex-start">
          <Title order={3} c="primary">
            {plan.title}
          </Title>
          <Badge variant="light" color={getStatusColor(plan.status)} size="sm">
            {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
          </Badge>
        </Group>

        {/* Pricing */}
        <Box>
          <Group gap="xs" mb="xs">
            <Text size="sm" c="dimmed">
              Installation Fee:
            </Text>
            <Text fw={600} c="green">
              ${plan.installationFee}
            </Text>
          </Group>
          <Group gap="xs">
            <Text size="sm" c="dimmed">
              Per Car/Month:
            </Text>
            <Text fw={600} c="blue">
              ${plan.pricePerCar}
            </Text>
          </Group>
        </Box>

        <Divider />

        {/* Features */}
        <Box>
          <Text fw={600} size="sm" mb="xs" c="green">
            {`${plan.features.length} Features`}
          </Text>

          <ScrollArea h={120} type="scroll">
            <List
              spacing="xs"
              size="sm"
              icon={
                <ThemeIcon color="green" size={16} radius="xl">
                  <Icon icon="lucide:check" />
                </ThemeIcon>
              }
            >
              {plan.features.map((feature, index) => (
                <List.Item key={index}>
                  <Text size="sm">{feature}</Text>
                </List.Item>
              ))}
            </List>
          </ScrollArea>
        </Box>

        {/* Limitations */}
        {plan.limitations && plan.limitations.length > 0 && (
          <Box>
            <Text fw={600} size="sm" mb="xs" c="orange">
              {`${plan.limitations.length} Limitations`}
            </Text>
            <List
              spacing="xs"
              size="sm"
              icon={
                <ThemeIcon color="orange" size={16} radius="xl">
                  <Icon icon="lucide:minus" />
                </ThemeIcon>
              }
            >
              {plan.limitations.map((limitation, index) => (
                <List.Item key={index}>
                  <Text size="sm" c="dimmed">
                    {limitation}
                  </Text>
                </List.Item>
              ))}
            </List>
          </Box>
        )}

        <Divider />

        {/* Action Buttons */}
        <Group justify="space-between" mt="auto">
          <Button
            onClick={open}
            variant="light"
            color="blue"
            size="sm"
            leftSection={<Icon icon="lucide:edit" />}
          >
            Edit Plan
          </Button>
          <Button
            onClick={openDelete}
            variant="light"
            color="red"
            size="sm"
            leftSection={<Icon icon="lucide:trash-2" />}
          >
            Delete
          </Button>
        </Group>
        {/* edit modal */}
        <Modal
          opened={opened}
          onClose={close}
          title="Create New Plan"
          size="lg"
          centered
        >
          <PlanForm mode="edit" close={close} plan={plan} />
        </Modal>

        {/* delete modal */}
        <Modal
          opened={deleteOpened}
          onClose={closeDelete}
          title="Delte Plan"
          size="md"
          centered
        >
          <Stack justify="center">
            <Text>Are you sure you want to delete this plan?</Text>
            <Group justify="end">
              <Button variant="default" onClick={closeDelete}>
                Cancel
              </Button>
              <Button color="red" onClick={handleDelete}>
                Delete
              </Button>
            </Group>
          </Stack>
        </Modal>
      </Stack>
    </Card>
  );
};

export default PlanCard;

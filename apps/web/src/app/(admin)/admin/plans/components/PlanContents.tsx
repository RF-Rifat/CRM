'use client';
import { Icon } from '@iconify/react';
import { Button, Grid, Group, Modal, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { demoPlans } from '../../../../../data/demoPlan';
import PlanCard from './PlanCard';
import PlanForm from './PlanForm';

const PlanContents = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Stack gap="lg">
      <Group justify="space-between">
        <Title order={2}>Plans Management</Title>
        <Button
          leftSection={<Icon icon="lucide:plus" />}
          onClick={open}
        >
          Add New Plan
        </Button>
      </Group>

      <Modal
        opened={opened}
        onClose={close}
        title="Create New Plan"
        size="lg"
        centered
      >
        <PlanForm mode="create" close={close} />
      </Modal>

      {/* Plans Grid */}
      <Stack gap="md">
        <Group justify="space-between" align="center">
          <Text size="lg" fw={600}>
            Available Plans ({demoPlans.length})
          </Text>
        </Group>

        <Grid>
          {demoPlans.map(plan => (
            <Grid.Col key={plan.id} span={{ base: 12, sm: 6, lg: 4 }}>
              <PlanCard plan={plan} />
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default PlanContents;

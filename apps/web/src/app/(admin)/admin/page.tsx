import { Card, Container, SimpleGrid, Text, Title } from '@mantine/core';
import DealManagementContent from './components/DealManagementContent';

export default function AdminHomePage() {
  return (
    <Container size="xl">
      <Title order={1} mb="lg">
        Admin Dashboard
      </Title>
      <Text mb="xl">
        Welcome to the admin dashboard. Use the navigation menu to access
        different sections.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={500} mb="xs">
            Analytics
          </Text>
          <Text size="sm" c="dimmed">
            View comprehensive analytics and insights about your system
            performance.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={500} mb="xs">
            Tasks
          </Text>
          <Text size="sm" c="dimmed">
            Manage and track all your tasks efficiently with our task management
            system.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={500} mb="xs">
            Plans
          </Text>
          <Text size="sm" c="dimmed">
            Create and manage strategic plans to achieve your business
            objectives.
          </Text>
        </Card>
      </SimpleGrid>
      <DealManagementContent />
    </Container>
  );
}

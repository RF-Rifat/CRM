import { Icon } from '@iconify/react';
import { Card, Group, Text } from '@mantine/core';

interface JournalStatCardProps {
  analytic: {
    id: number;
    icon: string;
    title: string;
    data: string;
    color: string;
  };
}

const JournalStatCard = ({ analytic }: JournalStatCardProps) => {
  return (
    <Card withBorder radius="md" shadow="md">
      <Group gap={5} justify="space-between">
        <Icon
          className="text-2xl"
          icon={analytic.icon}
          color={analytic.color}
        />
        <Text c="dimmed" fz={{ base: 14, sm: 16 }}>
          {analytic.title}
        </Text>
      </Group>
      <Text fw={600} fz={22} mx="auto">
        {analytic.data}
      </Text>
    </Card>
  );
};

export default JournalStatCard;

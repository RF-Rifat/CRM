import { Icon } from '@iconify/react';
import { Badge, Card, Group, Stack, Text } from '@mantine/core';

interface TaskStatProps {
  id?: number;
  icon: string;
  staus: string;
  title: string;
  info: string;
  color: string;
}

const TaskStatCard = ({ task }: { task: TaskStatProps }) => {
  return (
    <Card withBorder shadow="md">
      <Stack>
        <Group justify="space-between">
          <Icon icon={task.icon} color={task.color} className="text-2xl" />
          <Badge variant="light" color={task.color}>
            {task.staus}
          </Badge>
        </Group>
        <Text mx="auto">{task.info}</Text>
        <Text c="dimmed" mx="auto">
          {task.title}
        </Text>
      </Stack>
    </Card>
  );
};

export default TaskStatCard;

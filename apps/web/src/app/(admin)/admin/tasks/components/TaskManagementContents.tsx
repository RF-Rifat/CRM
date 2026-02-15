import { SimpleGrid, Stack } from '@mantine/core';
import TaskForm from './TaskForm';
import TaskStatCard from './TaskStatCard';

const TaskManagementContents = () => {
  const dummyTaksStats = [
    {
      id: 1,
      icon: 'fe:document',
      staus: 'total',
      title: 'Active Tasks',
      info: '20',
      color: 'blue',
    },
    {
      id: 2,
      icon: 'material-symbols:error-outline',
      staus: 'urgent',
      title: 'Overdue Tasks',
      info: '5',
      color: 'red',
    },
    {
      id: 3,
      icon: 'flowbite:clock-outline',
      staus: 'today',
      title: 'Due Today',
      info: '0',
      color: 'purple',
    },
    {
      id: 4,
      icon: 'mdi:tick-circle-outline',
      staus: 'completed',
      title: 'This Week',
      info: '7',
      color: 'green',
    },
  ];
  return (
    <Stack>
      <SimpleGrid cols={{ base: 2, md: 4 }}>
        {dummyTaksStats.map(task => (
          <TaskStatCard key={task.id} task={task} />
        ))}
      </SimpleGrid>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TaskForm />
      </SimpleGrid>
    </Stack>
  );
};

export default TaskManagementContents;

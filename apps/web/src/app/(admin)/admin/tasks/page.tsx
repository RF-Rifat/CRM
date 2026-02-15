import { Container, Text, Title } from '@mantine/core';
import TaskManagementContents from './components/TaskManagementContents';

const TasksPage = () => {
  return (
    <Container size="xl">
      <Title order={1} mb="lg">
        Tasks Management
      </Title>
      <Text>
        Welcome to the Tasks page. Here you can manage and track all your tasks.
      </Text>
      <TaskManagementContents />
    </Container>
  );
};

export default TasksPage;

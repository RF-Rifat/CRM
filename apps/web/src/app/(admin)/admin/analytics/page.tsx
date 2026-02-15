import { Text, Title, Container } from '@mantine/core';

const AnalyticsPage = () => {
  return (
    <Container size="xl">
      <Title order={1} mb="lg">
        Analytics Dashboard
      </Title>
      <Text>
        Welcome to the Analytics page. Here you can view various metrics and insights.
      </Text>
    </Container>
  );
};

export default AnalyticsPage;
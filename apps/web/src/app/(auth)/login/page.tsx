import { Container, Stack, Text, Title } from '@mantine/core';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <div className="bg-red-100/30">
      <Container size="sm" className="h-screen" py={50}>
        <Stack align="center" w="100%" gap="lg">
          <Title ta="center">Empty CRM Application</Title>
          <Text ta="center">Welcome to empty crm application</Text>
          <LoginForm />
        </Stack>
      </Container>
    </div>
  );
};

export default LoginPage;

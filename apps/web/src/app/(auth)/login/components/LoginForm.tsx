'use client';
import { Icon } from '@iconify/react';
import { Button, Card, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[^A-Za-z0-9]/,
      'Password must contain at least one special character'
    )
    .required('Password is required'),
});

const LoginForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: yupResolver(schema),
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log('Form values:', values);
    notifications.show({
      title: 'Successfull',
      message: 'Logged in successfully',
      icon: <Icon icon="gg:check-o" />,
      color: 'green',
      autoClose: 3000,
    });
  };

  return (
    <Card
      radius="md"
      withBorder
      p={25}
      maw={500}
      w="100%"
      // style={{
      //   width: '100%',
      //   maxWidth: '500px',
      //   minWidth: '300px'
      // }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Enter Your Email"
            placeholder="example@gmail.com"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Enter Your Password"
            placeholder=""
            {...form.getInputProps('password')}
          />
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Card>
  );
};

export default LoginForm;

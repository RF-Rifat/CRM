import {
  Button,
  Card,
  Group,
  Radio,
  Select,
  Stack,
  TextInput,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import * as yup from 'yup';
import { User } from '../../../../../types/userType';

interface UserFormProps {
  user?: User;
  mode: 'create' | 'edit';
  close: () => void;
}

// Yup validation schema
const schema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  phone: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Phone number must be at least 10 digits'),
  role: yup
    .string()
    .required('Role is required')
    .oneOf(['admin', 'manager', 'advertiser', 'sales'], 'Invalid role'),
  status: yup
    .string()
    .oneOf(['active', 'pending', 'deactive'], 'Invalid status'),
});

const UserForm = ({ user, mode, close }: UserFormProps) => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      role: '',
      status: mode === 'create' ? 'pending' : '',
    },
    validate: yupResolver(schema),
  });

  // Set initial values when editing
  useEffect(() => {
    if (mode === 'edit' && user) {
      form.setValues({
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        status: user.status,
      });
    }
  }, [user, mode]);

  const handleSubmit = (values: typeof form.values) => {
    console.log('Form submitted with values:', values);
    console.log('Mode:', mode);
    if (mode === 'create') {
      notifications.show({
        title: 'Successfull',
        message: 'Usre created successfully!',
        color: 'green',
        autoClose: 3000,
      });
    } else {
      notifications.show({
        title: 'Successfull',
        message: 'Usre updated successfully!',
        color: 'green',
        autoClose: 3000,
      });
    }

    // Here you would typically make an API call
    // For now, just logging to console as requested

    // Close the form after submission
    close();
  };

  const roleOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'manager', label: 'Manager' },
    { value: 'advertiser', label: 'Advertiser' },
    { value: 'sales', label: 'Sales' },
  ];

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending' },
    { value: 'deactive', label: 'Deactive' },
  ];

  return (
    <Card>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Name"
            placeholder="Enter full name"
            {...form.getInputProps('name')}
            required
          />

          <TextInput
            label="Email"
            placeholder="Enter email address"
            type="email"
            {...form.getInputProps('email')}
            required
          />

          <TextInput
            label="Phone Number"
            placeholder="Enter phone number"
            type="tel"
            {...form.getInputProps('phone')}
            required
          />

          <Radio.Group label="Role" {...form.getInputProps('role')} required>
            <Group gap="md" mt="xs">
              {roleOptions.map(option => (
                <Radio
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </Group>
          </Radio.Group>

          {mode === 'edit' && (
            <Select
              label="Status"
              placeholder="Select status"
              data={statusOptions}
              {...form.getInputProps('status')}
              required
              comboboxProps={{
                transitionProps: {
                  transition: 'scale-y',
                  duration: 200,
                },
                position: 'bottom-start',
              }}
            />
          )}

          <Group justify="flex-end" mt="md">
            <Button variant="outline" onClick={close}>
              Cancel
            </Button>
            <Button type="submit">
              {mode === 'create' ? 'Create User' : 'Update User'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Card>
  );
};

export default UserForm;

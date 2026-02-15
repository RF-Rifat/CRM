import { Button, Card, Select, Stack, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useEffect, useMemo } from 'react';
import * as yup from 'yup';
import { dummyUsers } from '../../../../../data/demoUsers';
import { Company } from '../../../../../types/companyType';
import { User } from '../../../../../types/userType';

interface CompanyFormProps {
  mode: 'create' | 'edit';
  close: () => void;
  company?: Company;
}

// Yup validation schema
const schema = yup.object({
  companyName: yup
    .string()
    .required('Company name is required')
    .min(2, 'Company name must be at least 2 characters'),
  primaryContact: yup.string().required('Primary contact is required'),
});

const CompanyForm = ({ mode, close, company }: CompanyFormProps) => {
  const users: User[] = dummyUsers;

  // Transform users data for Select component
  const userSelectData = users.map(user => ({
    value: user.id,
    label: `${user.name} (${user.email})`,
  }));

  // Calculate initial values based on mode and company
  const initialValues = useMemo(() => {
    if (mode === 'edit' && company) {
      // Find matching user by email since IDs don't match between dummyCompanies and dummyUsers
      const matchingUser = users.find(
        user => user.email === company.primaryContact.email
      );
      return {
        companyName: company.companyName,
        primaryContact: matchingUser ? matchingUser.id : '',
      };
    }
    return {
      companyName: '',
      primaryContact: '',
    };
  }, [mode, company, users]);

  const form = useForm({
    initialValues,
    validate: yupResolver(schema),
  });

  // Update form values when company changes (important for edit mode)
  useEffect(() => {
    if (mode === 'edit' && company) {
      const matchingUser = users.find(
        user => user.email === company.primaryContact.email
      );

      form.setValues({
        companyName: company.companyName,
        primaryContact: matchingUser ? matchingUser.id : '',
      });
    } else if (mode === 'create') {
      form.setValues({
        companyName: '',
        primaryContact: '',
      });
    }
  }, [company, mode, users]);

  const handleSubmit = (values: typeof form.values) => {
    // Find the selected user object
    const selectedUser = users.find(user => user.id === values.primaryContact);

    if (selectedUser) {
      // Structure the data according to Company type
      const companyData: Company = {
        companyName: values.companyName,
        primaryContact: selectedUser, // Complete User object
      };

      console.log('Form submitted with complete company data:', companyData);

      form.reset();
      close();
      notifications.show({
        title: 'Successful',
        message:
          mode === 'create'
            ? 'Company created successfully!'
            : 'Company updated successfully!',
        color: 'green',
        autoClose: 3000,
      });
    } else {
      console.log('Error: Selected user not found');
    }
  };
  console.log(form.values.primaryContact, 'cn');

  return (
    <Card>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Company Name"
            placeholder="Enter company name"
            {...form.getInputProps('companyName')}
          />
          <Select
            label="Primary Contact"
            placeholder="Select a user"
            data={userSelectData}
            value={form.values.primaryContact}
            onChange={value =>
              form.setFieldValue('primaryContact', value || '')
            }
            error={form.errors.primaryContact}
            comboboxProps={{
              transitionProps: {
                transition: 'scale-y',
                duration: 200,
              },
              position: 'bottom-start',
            }}
          />
          <Button type="submit" mt="md">
            {mode === 'create' ? 'Create Company' : 'Update Company'}
          </Button>
        </Stack>
      </form>
    </Card>
  );
};

export default CompanyForm;

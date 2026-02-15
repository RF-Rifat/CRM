'use client';
import { Icon } from '@iconify/react';
import {
  Button,
  Card,
  Group,
  NumberInput,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm, yupResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import * as yup from 'yup';
import { demoPlans } from '../../../../data/demoPlan';
import { dummyCompanies } from '../../../../data/dummyCompanies';
import { Company } from '../../../../types/companyType';
import { Deal } from '../../../../types/dealType';

interface DealFormProps {
  mode: 'create' | 'edit';
  close: () => void;
  deal?: Deal;
}

// Yup validation schema
const schema = yup.object({
  title: yup.string().required('Deal title is required'),
  company: yup.object().required('Company is required'),
  descriptioin: yup.string(),
  dealStage: yup.string().required('Deal stage is required'),
  servicePlan: yup.string().required('Service plan is required'),
  numberOfCars: yup
    .number()
    .min(1, 'Number of cars must be at least 1')
    .required('Number of cars is required'),
  dealValue: yup
    .number()
    .min(0, 'Deal value must be positive')
    .required('Deal value is required'),
  closeDate: yup.date().nullable(),
});

const DealForm = ({ mode, close, deal }: DealFormProps) => {
  // company options
  const companyOptions = dummyCompanies.map(company => {
    return {
      label: company.companyName,
      value: JSON.stringify(company), // Store entire company object as JSON string
    };
  });

  // deal stage options
  const dealStageOptions = [
    {
      label: 'Lead',
      value: 'lead',
    },
    {
      label: 'Qualified',
      value: 'qualified',
    },
    {
      label: 'Proposal',
      value: 'proposal',
    },
    {
      label: 'Negotiation',
      value: 'negotiation',
    },
    {
      label: 'Closed Won',
      value: 'closedWon',
    },
    {
      label: 'Closed Lost',
      value: 'closedLost',
    },
  ];

  // plan options
  const planOptions = demoPlans.map(plan => ({
    label: plan.title,
    value: plan.id,
  }));

  const form = useForm({
    initialValues: {
      title: '',
      company: null as Company | null,
      descriptioin: '',
      dealStage: '',
      servicePlan: '',
      numberOfCars: 1,
      dealValue: 0,
      closeDate: null as Date | string | null,
    },
    validate: yupResolver(schema),
  });

  // Calculate deal value when servicePlan or numberOfCars changes
  useEffect(() => {
    const selectedPlan = demoPlans.find(
      plan => plan.id === form.values.servicePlan
    );
    if (selectedPlan && form.values.numberOfCars > 0) {
      const installationFee = parseFloat(selectedPlan.installationFee);
      const pricePerCar = parseFloat(selectedPlan.pricePerCar);
      const calculatedValue =
        installationFee + pricePerCar * form.values.numberOfCars;
      form.setFieldValue('dealValue', calculatedValue);
    }
  }, [form.values.servicePlan, form.values.numberOfCars]);

  // Populate form when in edit mode
  useEffect(() => {
    if (mode === 'edit' && deal) {
      // Since deal.company is now a Company object, we can use it directly
      const dealCompany = deal.company;

      form.setValues({
        title: deal.title || '',
        company: dealCompany || null,
        descriptioin: deal.descriptioin || '',
        dealStage: deal.dealStage || '',
        servicePlan: deal.servicePlan || '',
        numberOfCars: deal.numberOfCars || 1,
        dealValue: deal.dealValue || 0,
        closeDate: deal.closeDate || null,
      });
    }
  }, [mode, deal]);

  const handleSubmit = (values: typeof form.values) => {
    console.log('Form submitted with values:', values);
    close();

    if (mode === 'create') {
      notifications.show({
        title: 'Successfull',
        message: 'Plan created successfully!',
        color: 'green',
        autoClose: 3000,
      });
    } else {
      notifications.show({
        title: 'Successfull',
        message: 'Plan updated successfully!',
        color: 'green',
        autoClose: 3000,
      });
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap={10}>
        <Card withBorder>
          <Stack gap={10}>
            <Text>Deal information</Text>
            <Select
              withAsterisk
              label="Company"
              placeholder="Select Company"
              data={companyOptions}
              value={
                form.values.company ? JSON.stringify(form.values.company) : null
              }
              onChange={value => {
                if (value) {
                  try {
                    const company = JSON.parse(value) as Company;
                    form.setFieldValue('company', company);
                  } catch (error) {
                    console.error('Error parsing company:', error);
                  }
                } else {
                  form.setFieldValue('company', null);
                }
              }}
              error={form.errors.company}
              comboboxProps={{
                transitionProps: {
                  transition: 'scale-y',
                  duration: 200,
                },
                position: 'bottom-start',
              }}
            />
            <TextInput
              label="Deal Title"
              placeholder="Enter Deal Title"
              withAsterisk
              {...form.getInputProps('title')}
            />
            <Textarea
              label="Description"
              placeholder="Enter deal description"
              {...form.getInputProps('descriptioin')}
            />
          </Stack>
        </Card>
        <Card withBorder>
          <Stack>
            <Group justify="space-between">
              <Select
                className="flex-grow"
                withAsterisk
                label="Deal Stage"
                placeholder="Select Stage"
                data={dealStageOptions}
                {...form.getInputProps('dealStage')}
                comboboxProps={{
                  transitionProps: {
                    transition: 'scale-y',
                    duration: 200,
                  },
                  position: 'bottom-start',
                }}
              />
              <Select
                className="flex-grow"
                withAsterisk
                label="Service Plan"
                placeholder="Select Plan"
                data={planOptions}
                {...form.getInputProps('servicePlan')}
                comboboxProps={{
                  transitionProps: {
                    transition: 'scale-y',
                    duration: 200,
                  },
                  position: 'bottom-start',
                }}
              />
            </Group>

            <Group justify="space-between">
              <NumberInput
                className="flex-grow"
                label="Number of Cars"
                placeholder="How many cars to include"
                withAsterisk
                min={1}
                {...form.getInputProps('numberOfCars')}
              />
              <NumberInput
                className="flex-grow"
                label="Deal value"
                placeholder="Calculated automatically"
                readOnly
                {...form.getInputProps('dealValue')}
              />
            </Group>
            <DatePickerInput
              label="Expected close date"
              placeholder="Pick date"
              rightSection={<Icon icon="uil:calender" />}
              value={form.values.closeDate}
              onChange={date => {
                form.setFieldValue('closeDate', date);
              }}
            />
          </Stack>
        </Card>
        <Group justify="end">
          <Button variant="light" onClick={close}>
            Cancel
          </Button>
          <Button type="submit">
            {mode === 'create' ? 'Create Deal' : 'Update Deal'}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default DealForm;

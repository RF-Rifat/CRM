'use client';
import { Icon } from '@iconify/react';
import {
  Button,
  Card,
  Group,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm, yupResolver } from '@mantine/form';
import * as yup from 'yup';
import { dummyDeals } from '../../../../../data/dummyDeals';

// Define form values interface
interface TaskFormValues {
  title: string;
  description: string;
  priority: string;
  dealId: string;
  expectedCloseDate: Date | null;
}

// Yup validation schema
const taskSchema = yup.object({
  title: yup
    .string()
    .required('Task title is required')
    .min(3, 'Title must be at least 3 characters'),
  description: yup.string().optional(),
  priority: yup
    .string()
    .oneOf(['low', 'medium', 'high'], 'Please select a valid priority')
    .required('Priority is required'),
  companyId: yup.string().required('Company selection is required'),
  expectedCloseDate: yup.date().nullable().optional(),
});

const TaskForm = () => {
  const form = useForm<TaskFormValues>({
    initialValues: {
      title: '',
      description: '',
      priority: '',
      dealId: '',
      expectedCloseDate: null,
    },
    validate: yupResolver(taskSchema),
  });

  const selectedDeal = dummyDeals.map(deal => {
    return {
      label: deal.title || deal.company.companyName,
      value: deal.id || '',
    };
  });

  const taskPriorities = [
    {
      label: 'Low',
      value: 'low',
    },
    {
      label: 'Medium',
      value: 'medium',
    },
    {
      label: 'High',
      value: 'high',
    },
  ];

  const handleSubmit = (values: TaskFormValues) => {
    console.log('Task Form Data:', values);
  };

  return (
    <Card withBorder>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Task Title"
            placeholder="Enter Title"
            {...form.getInputProps('title')}
          />
          <Textarea
            label="Description"
            placeholder="Enter Description"
            {...form.getInputProps('description')}
          />
          <Group justify="space-between">
            <Select
              label="Priority"
              placeholder="Select Priority"
              data={taskPriorities}
              className="flex-grow"
              {...form.getInputProps('priority')}
            />
            <DatePickerInput
              label="Expected close date"
              placeholder="Pick date"
              rightSection={<Icon icon="uil:calender" />}
              className="flex-grow"
              {...form.getInputProps('expectedCloseDate')}
            />
          </Group>
          <Select
            label="Deal"
            placeholder="Select a Deal"
            data={selectedDeal}
            className="flex-grow"
            {...form.getInputProps('dealId')}
          />
          <Button type="submit">Add Task</Button>
        </Stack>
      </form>
    </Card>
  );
};

export default TaskForm;

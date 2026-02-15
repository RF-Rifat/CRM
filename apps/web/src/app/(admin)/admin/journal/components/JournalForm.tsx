import { Icon } from '@iconify/react';
import {
  Button,
  Group,
  Radio,
  Select,
  SimpleGrid,
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
import { journalMood, journalTypes } from '../../../../../data/journalData';
import { JournalEntry } from '../../../../../types/journalEntryType';
import classes from './radioCard.style.module.css';

interface JournalFormProps {
  mode: 'create' | 'edit';
  close?: () => void;
  journalEntry?: JournalEntry;
}

// Yup validation schema
const schema = yup.object({
  title: yup.string().required('Title is required'),
  category: yup
    .string()
    .oneOf([
      'personal',
      'work',
      'clientMeeting',
      'salesActivity',
      'teamCollaboration',
      'goals',
      'ideas',
      'reflection',
    ])
    .required('Category is required'),
  mood: yup
    .string()
    .oneOf([
      'excellent',
      'good',
      'motivaded',
      'neutral',
      'challanged',
      'frustrated',
      'stressed',
    ])
    .required('Mood is required'),
  content: yup.string().required('Content is required'),
  entryDate: yup.date().required('Entry date is required'),
});

// Helper function to extract mood value without emoji
const getMoodValue = (moodName: string): string => {
  const moodMap: { [key: string]: string } = {
    '🚀 Excellent': 'excellent',
    '😊 Good': 'good',
    '💪 Motivaded': 'motivaded',
    '😐 Neutral': 'neutral',
    '🤔 Challanged': 'challanged',
    '😤 Frustrated': 'frustrated',
    '😰 Stressed': 'stressed',
  };
  return moodMap[moodName] || '';
};

// Helper function to get mood display name from value
const getMoodDisplayName = (moodValue: string): string => {
  const moodItem = journalMood.find(
    item => getMoodValue(item.name) === moodValue
  );
  return moodItem?.name || '';
};

const JournalForm = ({ mode, close, journalEntry }: JournalFormProps) => {
  const form = useForm({
    initialValues: {
      title: '',
      category: '',
      mood: '',
      content: '',
      entryDate: new Date(),
    },
    validate: yupResolver(schema),
  });

  // Populate form when in edit mode
  useEffect(() => {
    if (mode === 'edit' && journalEntry) {
      form.setValues({
        title: journalEntry.title,
        category: journalEntry.category,
        mood: journalEntry.mood,
        content: journalEntry.content,
        entryDate: new Date(journalEntry.entryDate),
      });
    }
  }, [mode, journalEntry]);

  const handleSubmit = (values: typeof form.values) => {
    console.log('Form Data:', values);
    // Here you would typically send the data to your API
    close?.();
    if (mode === 'create') {
      notifications.show({
        title: 'Successfull',
        message: 'New journal entry added',
        color: 'green',
        autoClose: 3000,
      });
    } else {
      notifications.show({
        title: 'Successfull',
        message: 'Journal Update successfully',
        color: 'green',
        autoClose: 3000,
      });
    }
  };

  const cards = journalMood.map(item => (
    <Radio.Card
      className={classes.root}
      radius="md"
      value={item.name}
      key={item.name}
    >
      <Group wrap="nowrap" align="flex-start">
        {/* <Radio.Indicator /> */}
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <Text>Journal Form</Text>
        <TextInput
          withAsterisk
          label="Title"
          placeholder="Enter a title for journal"
          {...form.getInputProps('title')}
        />
        <Group justify="space-between">
          <DatePickerInput
            className="flex-grow"
            w="48%"
            label="Pick date"
            placeholder="Pick date"
            rightSection={<Icon icon="uil:calender" />}
            {...form.getInputProps('entryDate')}
          />
          <Select
            w="48%"
            className="flex-grow"
            label="Category"
            placeholder="Pick value"
            comboboxProps={{
              transitionProps: {
                transition: 'scale-y',
                duration: 200,
              },
              position: 'bottom-start',
            }}
            data={journalTypes}
            {...form.getInputProps('category')}
          />
        </Group>
        <Text>How are you feeling today</Text>
        <Radio.Group
          value={getMoodDisplayName(form.values.mood)}
          onChange={value => form.setFieldValue('mood', getMoodValue(value))}
          error={form.errors.mood}
        >
          <SimpleGrid cols={{ base: 2, sm: 3 }}>{cards}</SimpleGrid>
        </Radio.Group>
        <Textarea
          withAsterisk
          placeholder="Write about your personal thoughts, experiences or reflections"
          label="Content"
          autosize
          minRows={6}
          maxRows={10}
          {...form.getInputProps('content')}
        />
        <Group justify="end">
          <Button variant="default" onClick={close}>
            Cancel
          </Button>
          <Button type="submit" leftSection={<Icon icon="jam:save" />}>
            {mode === 'edit' ? 'Update Entry' : 'Add Entry'}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default JournalForm;

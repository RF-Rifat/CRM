'use client';
import { Event, EventFormValues } from '@/types/eventType';
import { Icon } from '@iconify/react';
import {
  Button,
  Card,
  Group,
  Select,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { format } from 'date-fns';

interface EventFormProps {
  mode: 'create' | 'edit';
  close: () => void;
  event?: Event;
  selectedSlot?: { start: Date; end: Date };
  onSubmit: (values: EventFormValues) => void;
  onDelete?: () => void;
}

// Event types with colors and icons
const eventTypes = [
  {
    value: 'meeting',
    label: 'Meeting',
    color: 'blue',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    value: 'appointment',
    label: 'Appointment',
    color: 'green',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    value: 'reminder',
    label: 'Reminder',
    color: 'yellow',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    value: 'other',
    label: 'Other',
    color: 'purple',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
];

const EventForm = ({
  mode,
  close,
  event,
  selectedSlot,
  onSubmit,
  onDelete,
}: EventFormProps) => {
  const form = useForm<EventFormValues>({
    initialValues: {
      title: event?.title || '',
      description: event?.description || '',
      startTime: event
        ? format(event.start, 'HH:mm')
        : selectedSlot
          ? format(selectedSlot.start, 'HH:mm')
          : '',
      endTime: event
        ? format(event.end, 'HH:mm')
        : selectedSlot
          ? format(selectedSlot.end, 'HH:mm')
          : '',
      type: event?.type || 'meeting',
    },
    validate: {
      title: value =>
        value.length < 2 ? 'Title must be at least 2 characters' : null,
      startTime: value => (!value ? 'Start time is required' : null),
      endTime: value => (!value ? 'End time is required' : null),
    },
  });

  const handleSubmit = (values: EventFormValues) => {
    // Validate end time is after start time
    const [startHours, startMinutes] = values.startTime.split(':');
    const [endHours, endMinutes] = values.endTime.split(':');

    const startTime = parseInt(startHours) * 60 + parseInt(startMinutes);
    const endTime = parseInt(endHours) * 60 + parseInt(endMinutes);

    if (endTime <= startTime) {
      notifications.show({
        title: 'Invalid Time',
        message: 'End time must be after start time',
        color: 'red',
      });
      return;
    }

    onSubmit(values);
  };

  return (
    <Card withBorder shadow="sm" radius="md" p="lg">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">

          <TextInput
            label="Event Title"
            placeholder="Enter event title"
            required
            {...form.getInputProps('title')}
          />

          <Textarea
            label="Description"
            placeholder="Event description"
            rows={3}
            {...form.getInputProps('description')}
          />

          <Group grow>
            <TimeInput
              label="Start Time"
              placeholder="Select start time"
              required
              {...form.getInputProps('startTime')}
            />
            <TimeInput
              label="End Time"
              placeholder="Select end time"
              required
              {...form.getInputProps('endTime')}
            />
          </Group>

          <Select
            label="Event Type"
            placeholder="Choose event type"
            data={eventTypes.map(type => ({
              value: type.value,
              label: type.label,
            }))}
            required
            {...form.getInputProps('type')}
          />

          <Group justify="space-between" mt="lg">
            {mode === 'edit' && onDelete && (
              <Button
                variant="light"
                color="red"
                leftSection={<Icon icon="lucide:trash-2" width={16} height={16} />}
                onClick={onDelete}
              >
                Delete
              </Button>
            )}
            
            <Group ml="auto">
              <Button
                variant="light"
                onClick={close}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                leftSection={<Icon icon="lucide:save" width={16} height={16} />}
              >
                {mode === 'create' ? 'Create Event' : 'Update Event'}
              </Button>
            </Group>
          </Group>
        </Stack>
      </form>
    </Card>
  );
};

export default EventForm;

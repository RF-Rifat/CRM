// pages/calendar.js or app/calendar/page.js (depending on your Next.js version)
'use client';
import { Event, EventFormValues, SlotInfo } from '@/types/eventType';
import { Box, Group, Modal, Paper, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { format, getDay, parse, startOfWeek } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useCallback, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar-styles.css';
import EventForm from './EventForm';

// Setup the localizer for react-big-calendar
const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalenderContent() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<SlotInfo | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  // Handle slot selection (when clicking on empty calendar slots)
  const handleSelectSlot = useCallback(
    (slotInfo: SlotInfo) => {
      setSelectedSlot(slotInfo);
      setSelectedEvent(null);
      open();
    },
    [open]
  );

  // Handle event selection (when clicking on existing events)
  const handleSelectEvent = useCallback(
    (event: Event) => {
      setSelectedEvent(event);
      setSelectedSlot(null);
      open();
    },
    [open]
  );

  // Handle form submission
  const handleFormSubmit = (values: EventFormValues) => {
    try {
      const baseDate =
        selectedSlot?.start || selectedEvent?.start || new Date();

      // Create start and end dates
      const [startHours, startMinutes] = values.startTime.split(':');
      const [endHours, endMinutes] = values.endTime.split(':');

      const startDate = new Date(baseDate);
      startDate.setHours(parseInt(startHours), parseInt(startMinutes), 0, 0);

      const endDate = new Date(baseDate);
      endDate.setHours(parseInt(endHours), parseInt(endMinutes), 0, 0);

      const eventData: Event = {
        id: selectedEvent?.id || Date.now().toString(),
        title: values.title,
        description: values.description,
        start: startDate,
        end: endDate,
        type: values.type,
        resource: {
          type: values.type,
        },
      };

      if (selectedEvent) {
        // Update existing event
        setEvents(prev =>
          prev.map(event => (event.id === selectedEvent.id ? eventData : event))
        );
        notifications.show({
          title: 'Success',
          message: 'Event updated successfully',
          color: 'green',
        });
      } else {
        // Add new event
        setEvents(prev => [...prev, eventData]);
        notifications.show({
          title: 'Success',
          message: 'Event created successfully',
          color: 'green',
        });
      }

      close();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Failed to save event',
        color: 'red',
      });
    }
  };

  // Handle event deletion
  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents(prev => prev.filter(event => event.id !== selectedEvent.id));
      notifications.show({
        title: 'Success',
        message: 'Event deleted successfully',
        color: 'green',
      });
      close();
    }
  };

  // Custom event style based on type - bubbly design
  const eventStyleGetter = (event: Event) => {
    let backgroundColor = '#3174ad';
    let gradient = 'linear-gradient(135deg, #3174ad 0%, #4a90e2 100%)';

    switch (event.type) {
      case 'meeting':
        backgroundColor = '#3b82f6';
        gradient = 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)';
        break;
      case 'appointment':
        backgroundColor = '#10b981';
        gradient = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
        break;
      case 'reminder':
        backgroundColor = '#f59e0b';
        gradient = 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)';
        break;
      case 'other':
        backgroundColor = '#8b5cf6';
        gradient = 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)';
        break;
    }

    return {
      style: {
        background: gradient,
        borderRadius: '12px',
        color: 'white',
        border: 'none',
        display: 'block',
        fontWeight: '500',
        fontSize: '12px',
        padding: '4px 8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.2s ease',
      },
    };
  };

  return (
    <Paper
      p={{ base: 'sm', sm: 'lg' }}
      // radius={{ base: 'lg', md: 'xl' }}
      // style={{
      //   background: 'linear-gradient(135deg, #f8f9ff 0%, #fff8f8 100%)',
      //   border: '1px solid #e8eaf6',
      // }}
    >
      <Group justify="space-between" mb={{ base: 'md', md: 'xl' }}>
        <Title
          c="primary"
          order={2}
          // size={{ base: 'h3', md: 'h2' }}
        >
          Calendar
        </Title>
      </Group>

      <Box
        style={{
          height: 'clamp(400px, 70vh, 800px)',
          minHeight: '400px',
          borderRadius: '16px',
          overflow: 'auto',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          selectable
          popup
          views={['month', 'week', 'day']}
          defaultView="week"
          eventPropGetter={eventStyleGetter}
          style={{ height: '100%' }}
        />
      </Box>

      {/* Event Form Modal */}
      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        centered
        title={
          <Text fw={500} fz={24}>
            {selectedEvent ? 'Edit Event' : 'Add Event'}
          </Text>
        }
      >
        <EventForm
          mode={selectedEvent ? 'edit' : 'create'}
          close={close}
          event={selectedEvent || undefined}
          selectedSlot={selectedSlot || undefined}
          onSubmit={handleFormSubmit}
          onDelete={selectedEvent ? handleDeleteEvent : undefined}
        />
      </Modal>
    </Paper>
  );
}

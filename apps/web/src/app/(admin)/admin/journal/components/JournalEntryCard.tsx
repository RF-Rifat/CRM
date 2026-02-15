'use client';
import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Modal,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { JournalEntry } from '../../../../../types/journalEntryType';
import { getJournalMoodColor } from '../../../../../utils/journalMoodColor';
import JournalForm from './JournalForm';

interface JournalEntryCardProps {
  journalEntry: JournalEntry;
}
const JournalEntryCard = ({ journalEntry }: JournalEntryCardProps) => {
  const [selectedJournalId, setSelectedJournalId] = useState<string>('');
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteOpened, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const getEmoji = (mood: string) => {
    const moodMap: { [key: string]: string } = {
      excellent: '🚀',
      good: '😊',
      motivaded: '💪',
      neutral: '😐',
      challanged: '🤔',
      frustrated: '😤',
      stressed: '😰',
    };
    return moodMap[mood] || '';
  };

  // handle delete click
  const handleDeleteClick = (id: string) => {
    setSelectedJournalId(id);
    openDelete();
  };

  const handleDelete = () => {
    closeDelete();
    notifications.show({
      title: 'Successfull',
      message: 'Journal deleted successfully!',
      color: 'green',
      autoClose: 3000,
    });
  };

  return (
    <Card withBorder>
      <Stack>
        <Group justify="space-between">
          <Group>
            <Text>{getEmoji(journalEntry.mood)}</Text>
            <Text fw={600} fz={18}>
              {journalEntry.title}
            </Text>
          </Group>

          <Group gap={5}>
            <Icon icon="uil:calender" className="text-gray-400" />
            <Text c="dimmed">
              {new Date(journalEntry.createdAt).toLocaleDateString('en-US', {
                month: 'short', // "Oct"
                day: 'numeric', // "25"
                // year: 'numeric', // include if you want the year
              })}
            </Text>
          </Group>
        </Group>
        {/* entry content */}
        <ScrollArea
          type="scroll" // Explicitly set to ensure scrolling behavior
          scrollbarSize={6}
          styles={{
            root: {
              maxHeight: '100px', // Maximum height before scrolling
              overflowY: 'auto', // Ensure scrolling when content overflows
            },
            viewport: {
              paddingRight: '6px', // Optional: adjust for scrollbar width
            },
          }}
        >
          <Text c="dimmed" style={{ wordBreak: 'break-word' }}>
            {journalEntry.content}
          </Text>
        </ScrollArea>

        <Group justify="space-between">
          <Badge variant="light" color={getJournalMoodColor(journalEntry.mood)}>
            {journalEntry.mood}
          </Badge>
          {/* buttons */}
          <Group gap={5}>
            <ActionIcon variant="transparent" onClick={open}>
              <Icon icon="uil:edit" className="text-xl text-blue-500" />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              onClick={() => handleDeleteClick(journalEntry.id || '')}
            >
              <Icon icon="bx:trash" className="text-xl text-red-500" />
            </ActionIcon>
          </Group>
        </Group>

        {/* journal edit modal */}
        <Modal
          opened={opened}
          onClose={close}
          size="lg"
          title={
            <Text fw={600} fz={20}>
              New Journal Entry
            </Text>
          }
        >
          <JournalForm mode="edit" close={close} journalEntry={journalEntry} />
        </Modal>

        {/* journal delete modal */}
        <Modal
          opened={deleteOpened}
          onClose={closeDelete}
          size="md"
          title={
            <Text fw={600} fz={20}>
              Delete this journal
            </Text>
          }
        >
          <Text>Do you want to delte this journal?</Text>
          <Group justify="end" py={10}>
            <Button variant="default" onClick={closeDelete}>
              Cancel
            </Button>
            <Button onClick={handleDelete}>Delete</Button>
          </Group>
        </Modal>
      </Stack>
    </Card>
  );
};

export default JournalEntryCard;

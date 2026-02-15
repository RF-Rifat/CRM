'use client';
import { Icon } from '@iconify/react';
import {
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Modal,
  Pagination,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { MonthPicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import {
  dummyJournalAnalytics,
  dummyJournalEntries,
} from '../../../../../data/dummyJournalEntries';
import { journalMood, journalTypes } from '../../../../../data/journalData';
import JournalEntryCard from './JournalEntryCard';
import JournalForm from './JournalForm';
import JournalStatCard from './JournalStatCard';

const JournalContents = () => {
  // calculating current month for the month picker
  const getCurrentMonth = () => {
    const today = new Date();
    const year = today.getFullYear();
    const monthNum = String(today.getMonth() + 1).padStart(2, '0');
    return `${year}-${monthNum}-01`;
  };
  const [opened, { open, close }] = useDisclosure(false);
  const [month, setMonth] = useState<string | null>(getCurrentMonth());
  const [activePage, setPage] = useState(1);

  console.log(month, 'month');

  const journalMoodSelect = journalMood.map(mood => {
    return {
      label: mood.name,
      value: mood.name,
    };
  });

  return (
    <>
      <Stack p={10}>
        <Group justify="space-between">
          <Stack>
            <Title>Journal</Title>
            <Text c="dimmed">
              Capture your thoughts, ideas, and reflections
            </Text>
          </Stack>
          <Button
            leftSection={<Icon icon="majesticons:plus-line" />}
            onClick={open}
          >
            New Entry
          </Button>
        </Group>
        <SimpleGrid cols={{ base: 2, md: 4 }}>
          {dummyJournalAnalytics.map(analytic => (
            <JournalStatCard key={analytic.id} analytic={analytic} />
          ))}
        </SimpleGrid>
        <Text>Journal Entires</Text>
        <Grid>
          <Grid.Col span={{ base: 12, lg: 4 }} hiddenFrom="lg">
            <Stack>
              <Card mx="auto">
                <MonthPicker value={month} onChange={setMonth} />
              </Card>
              <Card withBorder>
                <Stack>
                  <TextInput
                    label="Search entry"
                    placeholder="Search entries by title"
                  />
                  <Select
                    label="Categories"
                    placeholder="Pick a category"
                    data={journalTypes}
                  />
                  <Select
                    label="Mood"
                    placeholder="Pick a mood"
                    data={journalMoodSelect}
                  />
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <ScrollArea h={450}>
              <Stack>
                {dummyJournalEntries.map(entry => (
                  <JournalEntryCard key={entry.id} journalEntry={entry} />
                ))}
              </Stack>
            </ScrollArea>
            <Flex p={10} justify="center">
              <Pagination value={activePage} onChange={setPage} total={5} />
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }} visibleFrom="lg">
            <Stack>
              <Card withBorder>
                <Stack>
                  <TextInput
                    label="Search entry"
                    placeholder="Search entries by title"
                  />
                  <Select
                    label="Categories"
                    placeholder="Pick a category"
                    data={journalTypes}
                  />
                  <Select
                    label="Mood"
                    placeholder="Pick a mood"
                    data={journalMoodSelect}
                  />
                </Stack>
              </Card>
              <Card mx="auto">
                <MonthPicker value={month} onChange={setMonth} />
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
      {/* Journal form */}
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
        <JournalForm mode="create" close={close} />
      </Modal>
    </>
  );
};

export default JournalContents;

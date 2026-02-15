import { JournalEntry } from '../types/journalEntryType';

export const dummyJournalEntries: JournalEntry[] = [
  {
    id: '1',
    userId: 'u1',
    title: 'Morning Reflection',
    category: 'personal',
    mood: 'good',
    content:
      'Started the day with meditation and a short walk. Feeling energized and ready to take on tasks.',
    entryDate: new Date('2025-09-20T08:00:00Z'),
    createdAt: new Date('2025-09-20T08:10:00Z'),
    updatedAt: new Date('2025-09-20T08:10:00Z'),
  },
  {
    id: '2',
    userId: 'u1',
    title: 'Client Kickoff Meeting',
    category: 'clientMeeting',
    mood: 'motivaded',
    content:
      'Met with ABC Corp for project kickoff. They seemed excited about the roadmap. Need to prepare follow-up notes and next week’s deliverables. Met with ABC Corp for project kickoff. They seemed excited about the roadmap. Need to prepare follow-up notes and next week’s deliverables. Met with ABC Corp for project kickoff. They seemed excited about the roadmap. Need to prepare follow-up notes and next week’s deliverables. Met with ABC Corp for project kickoff. They seemed excited about the roadmap. Need to prepare follow-up notes and next week’s deliverables. Met with ABC Corp for project kickoff. They seemed excited about the roadmap. Need to prepare follow-up notes and next week’s deliverables. Met with ABC Corp for project kickoff. They seemed excited about the roadmap. Need to prepare follow-up notes and next week’s deliverables. Met with ABC Corp for project kickoff. They seemed excited about the roadmap. Need to prepare follow-up notes and next week’s deliverables. Met with ABC Corp for project kickoff. They seemed excited about the roadmap. Need to prepare follow-up notes and next week’s deliverables.',
    entryDate: new Date('2025-09-20T11:30:00Z'),
    createdAt: new Date('2025-09-20T11:40:00Z'),
    updatedAt: new Date('2025-09-20T11:40:00Z'),
  },
  {
    id: '3',
    userId: 'u2',
    title: 'Sales Follow-up Calls',
    category: 'salesActivity',
    mood: 'challanged',
    content:
      'Made 5 follow-up calls today. Some prospects are interested, but facing budget objections. Need to refine pitch.',
    entryDate: new Date('2025-09-21T14:00:00Z'),
    createdAt: new Date('2025-09-21T14:15:00Z'),
    updatedAt: new Date('2025-09-21T14:15:00Z'),
  },
  {
    id: '4',
    userId: 'u3',
    title: 'Weekly Team Collaboration',
    category: 'teamCollaboration',
    mood: 'excellent',
    content:
      'Great sync with the team today. Everyone shared progress openly, and we planned the sprint backlog effectively.',
    entryDate: new Date('2025-09-21T16:00:00Z'),
    createdAt: new Date('2025-09-21T16:10:00Z'),
    updatedAt: new Date('2025-09-21T16:10:00Z'),
  },
  {
    id: '5',
    userId: 'u1',
    title: 'Ideas for New Feature',
    category: 'ideas',
    mood: 'motivaded',
    content:
      'Thinking about adding AI-based recommendations to improve user engagement. Drafting a proposal for the next review.',
    entryDate: new Date('2025-09-22T09:30:00Z'),
    createdAt: new Date('2025-09-22T09:45:00Z'),
    updatedAt: new Date('2025-09-22T09:45:00Z'),
  },
  {
    id: '6',
    userId: 'u2',
    title: 'End of Day Reflection',
    category: 'reflection',
    mood: 'stressed',
    content:
      'Felt overwhelmed with overlapping deadlines. Need to plan better tomorrow and delegate tasks where possible.',
    entryDate: new Date('2025-09-22T19:00:00Z'),
    createdAt: new Date('2025-09-22T19:05:00Z'),
    updatedAt: new Date('2025-09-22T19:05:00Z'),
  },
];

export const dummyJournalAnalytics = [
  {
    id: 1,
    icon: 'ion:book-outline',
    title: 'Total Entreis',
    data: '40',
    color: 'blue',
  },
  {
    id: 2,
    icon: 'uil:calender',
    title: 'This Week',
    data: '5',
    color: 'green',
  },
  {
    id: 3,
    icon: 'iconamoon:heart-light',
    title: 'Avg Mood',
    data: 'Good',
    color: 'orange',
  },
  {
    id: 4,
    icon: 'streamline:graph-arrow-increase-remix',
    title: 'Streak',
    data: '11',
    color: 'purple',
  },
];

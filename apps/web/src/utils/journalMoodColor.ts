type JournalMood =
  | 'excellent'
  | 'good'
  | 'motivaded'
  | 'neutral'
  | 'challanged'
  | 'frustrated'
  | 'stressed';

// Function to get color based on journal mood
export const getJournalMoodColor = (mood: string): string => {
  switch (mood) {
    case 'excellent':
      return 'green';
    case 'good':
      return 'blue';
    case 'motivaded':
      return 'orange';
    case 'neutral':
      return 'yellow';
    case 'challanged':
      return 'purple';
    case 'frustrated':
      return 'red';
    case 'stressed':
      return 'orange';
    default:
      return 'gray'; // fallback color
  }
};

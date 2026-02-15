export interface JournalEntry {
  id?: string;
  userId: string;
  title: string;
  category:
    | 'personal'
    | 'work'
    | 'clientMeeting'
    | 'salesActivity'
    | 'teamCollaboration'
    | 'goals'
    | 'ideas'
    | 'reflection';
  mood:
    | 'excellent'
    | 'good'
    | 'motivaded'
    | 'neutral'
    | 'challanged'
    | 'frustrated'
    | 'stressed';
  content: string;
  entryDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

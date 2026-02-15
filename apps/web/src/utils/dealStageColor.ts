type DealStage =
  | 'lead'
  | 'qualified'
  | 'proposal'
  | 'negotiation'
  | 'closedWon'
  | 'closedLost';

// Function to get color based on deal stage
export const getDealStageColor = (dealStage: DealStage): string => {
  switch (dealStage) {
    case 'lead':
      return 'yellow';
    case 'qualified':
      return 'blue';
    case 'proposal':
      return 'orange';
    case 'negotiation':
      return 'purple';
    case 'closedWon':
      return 'green';
    case 'closedLost':
      return 'red';
    default:
      return 'gray'; // fallback color
  }
};

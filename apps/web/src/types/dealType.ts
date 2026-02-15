import { Company } from './companyType';

export interface Deal {
  id?: string;
  title: string;
  numberOfCars: number;
  company: Company;
  descriptioin?: string;
  dealStage:
    | 'lead'
    | 'qualified'
    | 'proposal'
    | 'negotiation'
    | 'closedWon'
    | 'closedLost';
  servicePlan: string;

  dealValue: number;
  closeDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

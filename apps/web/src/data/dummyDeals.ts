import { Deal } from '../types/dealType';
import { demoPlans } from './demoPlan';
import { dummyCompanies } from './dummyCompanies';

const companies = dummyCompanies;
const plans = demoPlans;

export const dummyDeals: Deal[] = [
  {
    id: 'd1',
    title: 'Fleet Expansion for Alpha Motors',
    numberOfCars: 15,
    company: dummyCompanies[0],
    descriptioin: 'Alpha Motors is expanding their fleet with premium SUVs.',
    dealStage: 'qualified',
    servicePlan: demoPlans[0].id,
    dealValue: 250000,
    closeDate: new Date('2025-10-15'),
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-09-15'),
  },
  {
    id: 'd2',
    title: 'Service Renewal for Beta Logistics',
    numberOfCars: 8,
    company: dummyCompanies[1],
    descriptioin: 'Renewal of service contract for existing vehicles.',
    dealStage: 'proposal',
    servicePlan: demoPlans[1].id,
    dealValue: 95000,
    closeDate: new Date('2025-11-01'),
    createdAt: new Date('2025-02-12'),
    updatedAt: new Date('2025-09-10'),
  },
  {
    id: 'd3',
    title: 'EV Fleet for Gamma Technologies',
    numberOfCars: 20,
    company: dummyCompanies[2],
    descriptioin: 'Proposal for a full electric vehicle fleet.',
    dealStage: 'negotiation',
    servicePlan: demoPlans[2].id,
    dealValue: 400000,
    closeDate: new Date('2025-12-20'),
    createdAt: new Date('2025-04-01'),
    updatedAt: new Date('2025-09-18'),
  },
  {
    id: 'd4',
    title: 'Luxury Car Leasing for Delta Enterprises',
    numberOfCars: 5,
    company: dummyCompanies[3],
    descriptioin: 'Leasing luxury cars for executive use.',
    dealStage: 'closedWon',
    servicePlan: demoPlans[3].id,
    dealValue: 180000,
    closeDate: new Date('2025-07-25'),
    createdAt: new Date('2025-01-20'),
    updatedAt: new Date('2025-07-25'),
  },
];

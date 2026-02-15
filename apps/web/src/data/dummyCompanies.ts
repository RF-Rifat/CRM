// adjust your import path

import { Company } from '../types/companyType';
import { dummyUsers } from './demoUsers';
const users = dummyUsers;

export const dummyCompanies: Company[] = [
  {
    id: 'X7bPqW9mZkL3nT8r',
    companyName: 'TechNova Solutions',
    primaryContact: users[0],
  },
  {
    id: 'R4tYmN2vJpQ8xF6w',
    companyName: 'GreenField Marketing',
    primaryContact: users[1],
  },
  {
    id: 'K9nHsD5cVbM2rP7q',
    companyName: 'Skyline Advertising',
    primaryContact: users[2],
  },
  {
    id: 'Z3gTwL8fXrQ6mJ9v',
    companyName: 'NextGen Retail',
    primaryContact: users[3],
  },
];

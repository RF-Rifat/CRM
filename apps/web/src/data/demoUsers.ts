import { User } from '../types/userType';

export const dummyUsers: User[] = [
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1-555-123-4567',
    role: 'admin',
    status: 'active',
    createdAt: new Date('2025-01-15T10:00:00Z'),
    updatedAt: new Date('2025-09-10T14:30:00Z'),
  },
  {
    id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1-555-987-6543',
    role: 'manager',
    status: 'pending',
    createdAt: new Date('2025-03-22T09:15:00Z'),
    updatedAt: new Date('2025-08-05T11:45:00Z'),
  },
  {
    id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    phone: '+1-555-456-7890',
    role: 'advertiser',
    status: 'active',
    createdAt: new Date('2025-06-10T12:00:00Z'),
    updatedAt: new Date('2025-09-15T16:20:00Z'),
  },
  {
    id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9',
    name: 'Bob Wilson',
    email: 'bob.wilson@example.com',
    phone: '+1-555-321-1234',
    role: 'sales',
    status: 'deactive',
    createdAt: new Date('2025-02-28T08:30:00Z'),
    updatedAt: new Date('2025-07-20T10:10:00Z'),
  },
];

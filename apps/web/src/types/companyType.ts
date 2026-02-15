import { User } from './userType';

export interface Company {
  id?: string;
  companyName: string;
  primaryContact: User;
}

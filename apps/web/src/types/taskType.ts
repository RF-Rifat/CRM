export interface Task {
  id?: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
}

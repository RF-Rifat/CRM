export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;

  role: 'admin' | 'manager' | 'advertiser' | 'sales';
  status: 'active' | 'pending' | 'deactive';
  createdAt: Date;
  updatedAt: Date;
};

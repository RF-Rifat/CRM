export interface Plan {
  id: string;
  title: string;
  installationFee: string;
  pricePerCar: string;
  features: string[];
  limitations: string[];
  status: 'draft' | 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
};

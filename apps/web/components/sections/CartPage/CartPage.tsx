'use client';

import { Container } from '@/components/ui/Container';
import { CartTopbar } from './CartTopbar';

export const CartPage = () => {
  return (
    <div className="min-h-screen bg-white pt-[100px]">
      <Container>
        <CartTopbar />

        {/* Placeholder for content */}
        <div className="py-8">{/* Content goes here */}</div>
      </Container>
    </div>
  );
};

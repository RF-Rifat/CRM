'use client';

import { Container } from '@/components/ui/Container';
import { DynamicTopBar } from '../DynamicTopBar/DynamicTopBar';
import { NearyouPageCards } from './NearyouPageCards';

export const NearyouPage = () => {
  return (
    <section className="py-20">
      <Container>
        <DynamicTopBar
          title="Places Near you"
          onPrev={() => console.log('Prev')}
          onNext={() => console.log('Next')}
        />
        <NearyouPageCards />
      </Container>
    </section>
  );
};

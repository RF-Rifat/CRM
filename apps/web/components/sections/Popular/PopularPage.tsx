'use client';

import { Container } from '@/components/ui/Container';
import { DynamicTopBar } from '../DynamicTopBar/DynamicTopBar';
import { PopularPageCards } from './PopularPageCards';

export const PopularPage = () => {
  return (
    <section className="py-20">
      <Container>
        <DynamicTopBar
          title="Popular Now"
          onPrev={() => console.log('Prev')}
          onNext={() => console.log('Next')}
        />
        <PopularPageCards />
      </Container>
    </section>
  );
};

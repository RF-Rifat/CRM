'use client';

import { SimpleGrid } from '@mantine/core';
import { NearyouPageCard } from '../NearyouPage/NearyouPageCard';

// Asset imports
import near1 from '@/src/assets/near1.png';
import pLike from '@/src/assets/p-like.svg';
import pLocationIcon from '@/src/assets/p-locationIcon.svg';

const DUMMY_POPULAR = Array(8).fill({
  image: near1,
  title: 'Premium City Center Office',
  location: 'Business District',
  locationIcon: pLocationIcon,
  meta: '85k / mo',
  metaIcon: pLike,
  price: '2,800',
});

export const PopularPageCards = () => {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing={32}
      verticalSpacing={48}
      w="100%"
    >
      {DUMMY_POPULAR.map((place, index) => (
        <NearyouPageCard key={index} {...place} />
      ))}
    </SimpleGrid>
  );
};

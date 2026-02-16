'use client';

import { SimpleGrid } from '@mantine/core';
import { NearyouPageCard } from '../NearyouPage/NearyouPageCard';

// Asset imports
import like from '@/src/assets/like.svg';
import locationIcon from '@/src/assets/locationIcon.svg';
import near1 from '@/src/assets/near1.png';

const DUMMY_POPULAR = Array(8).fill({
  image: near1,
  title: 'Premium City Center Office',
  location: 'Business District',
  locationIcon: locationIcon,
  meta: '85k / mo',
  metaIcon: like,
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

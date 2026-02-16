'use client';

import { SimpleGrid } from '@mantine/core';
import { NearyouPageCard } from './NearyouPageCard';

// Asset imports
import like from '@/src/assets/like.svg';
import locationIcon from '@/src/assets/locationIcon.svg';
import near1 from '@/src/assets/near1.png';

const DUMMY_PLACES = Array(8).fill({
  image: near1,
  title: 'Street-Facing Storefront Window',
  location: 'Downtown area',
  locationIcon: locationIcon,
  meta: '45k / mo',
  metaIcon: like,
  price: '1,500',
});

export const NearyouPageCards = () => {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing={32}
      verticalSpacing={48}
      w="100%"
    >
      {DUMMY_PLACES.map((place, index) => (
        <NearyouPageCard key={index} {...place} />
      ))}
    </SimpleGrid>
  );
};

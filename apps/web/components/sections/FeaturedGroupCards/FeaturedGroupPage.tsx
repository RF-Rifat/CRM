'use client';

import cardStore from '@/src/assets/cardStore.svg';
import { Container, SimpleGrid } from '@mantine/core';
import { FeaturedGroupCard } from './FeaturedGroupCard';

export const FeaturedGroupPage = () => {
  const cardsData = [
    {
      title: 'Lorem',
      description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
      icon: cardStore,
    },
    {
      title: 'Lorem',
      description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
      icon: cardStore,
    },
    {
      title: 'Lorem',
      description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
      icon: cardStore,
    },
    {
      title: 'Lorem',
      description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
      icon: cardStore,
    },
    {
      title: 'Lorem',
      description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
      icon: cardStore,
    },
    {
      title: 'Lorem',
      description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet',
      icon: cardStore,
    },
  ];

  return (
    <section className="py-20">
      <Container size="lg">
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing={0}
          verticalSpacing={0}
        >
          {cardsData.map((card, index) => (
            <FeaturedGroupCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};

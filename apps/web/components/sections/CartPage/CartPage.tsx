'use client';

import { Container } from '@/components/ui/Container';
import { Box, Grid, SimpleGrid } from '@mantine/core';
import Image from 'next/image';
import { NearyouPageCard } from '../NearyouPage/NearyouPageCard';
import { CartTopbar } from './CartTopbar';

// Asset imports for dummy data
import arrowDown from '@/src/assets/arrowDown.svg';
import like from '@/src/assets/like.svg';
import locationIcon from '@/src/assets/locationIcon.svg';
import mapImg from '@/src/assets/map.png';
import near1 from '@/src/assets/near1.png';

const DUMMY_CARDS = Array(4).fill({
  image: near1,
  title: 'Street-Facing Storefront Window',
  location: 'Downtown area',
  locationIcon: locationIcon,
  meta: '45k / mo',
  metaIcon: like,
  price: '1,500',
});

export const CartPage = () => {
  return (
    <div className="min-h-screen bg-white pt-[100px]">
      <Container>
        <CartTopbar />

        <div className="py-8">
          <Grid gutter={40}>
            {/* Left Group - 50% */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <SimpleGrid cols={2} spacing="lg">
                {DUMMY_CARDS.map((card, index) => (
                  <NearyouPageCard key={index} {...card} />
                ))}
              </SimpleGrid>
            </Grid.Col>

            {/* Right Group - 50% */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box
                className="relative h-full overflow-hidden rounded-[24px]"
                style={{
                  minHeight: '400px',
                  maxHeight: '732px',
                }}
              >
                <Image
                  src={mapImg}
                  alt="Map"
                  fill
                  style={{ objectFit: 'cover' }}
                />

                {/* Impressions Button Overlay */}
                <Box
                  className="absolute top-4 right-4 overflow-hidden rounded-full bg-white shadow-md transition-transform hover:scale-105"
                  style={{ zIndex: 10, cursor: 'pointer' }}
                >
                  <Box className="flex items-center  px-3 py-2">
                    <span
                      style={{
                        color: '#111827',
                        fontSize: '12px',
                        fontWeight: 600,
                        fontFamily: 'var(--font-inter), sans-serif',
                      }}
                    >
                      Impressions
                    </span>
                    <Image src={arrowDown} alt="arrow" width={20} height={20} />
                  </Box>
                </Box>
              </Box>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

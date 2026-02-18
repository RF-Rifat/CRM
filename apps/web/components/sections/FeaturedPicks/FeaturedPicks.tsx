'use client';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import rocketIcon from '@/src/assets/rocket.svg';
import { Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';
// import { GlassCardSection } from '../GlassCardSection/GlassCardSection';
import { FeaturedGroupPage } from '../FeaturedGroupCards/FeaturedGroupPage';
import { FeaturedCarousel } from './FeaturedCarousel';
import { FilterChip } from './FilterChip';

export const FeaturedPicks = () => {
  return (
    <section className="px-6 py-10">
      <div className="bg-violet-50 relative mx-auto max-w-[1440px] rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]">
        <div className="relative pb-24">
          <Container>
            <Stack gap={60} align="center" pt={80}>
              {/* Header area */}
              <Stack gap="md" align="center" className="text-center">
                <Group
                  gap="xs"
                  justify="center"
                  className="mb-6 text-[#444444]"
                >
                  <Image src={rocketIcon} alt="rocket" width={18} height={18} />
                  <Text
                    size="sm"
                    fw={600}
                    className="font-face-inter tracking-widest uppercase"
                  >
                    Featured
                  </Text>
                </Group>
                <Typography variant="h1" className="text-3xl text-[#222222]">
                  Picks based on
                </Typography>

                {/* Filter Chips group */}
                <Group gap="sm" justify="center">
                  <FilterChip label="Cpm" active />
                  <FilterChip label="Near a tourist Spot" />
                  <FilterChip label="ROI" />
                  <FilterChip label="Street-facing placement" />
                  <FilterChip label="Highest foot traffic" />
                </Group>
              </Stack>
            </Stack>
          </Container>

          {/* New Standalone Carousel Section */}
          <FeaturedCarousel />

          <Container>
            <Stack gap={60} align="center">
              {/* Bottom Content section */}
              <Stack gap="xl" align="center" className="max-w-xl text-center">
                <Text c="#666666" size="lg" className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Cursus <br /> nunc
                  quis blandit arcu pharetra pharetra. Donec <br /> porttitor
                  amet.
                </Text>

                <div className="rounded-2xl bg-gradient-to-b from-gray-300 to-transparent p-[2px] transition-all hover:scale-105 hover:shadow-xl active:scale-95">
                  <button className="text-brand font-face-poppins rounded-2xl bg-white px-14 py-4 font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                    Learn More
                  </button>
                </div>
              </Stack>
            </Stack>
          </Container>
        </div>

        <div>
          {/* test component */}
          <FeaturedGroupPage />
        </div>
      </div>
    </section>
  );
};

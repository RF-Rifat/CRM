import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import rocketIcon from '@/src/assets/rocket.svg';
import { Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { FeaturedCarousel } from './FeaturedCarousel';
import { FilterChip } from './FilterChip';
import { GlassCardSection } from '../GlassCardSection/GlassCardSection';

export const FeaturedPicks = () => {
  return (
    <section className="px-6 py-10">
      <div className="relative mx-auto max-w-[1440px] rounded-[3.5rem] bg-violet-50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]">
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
                  Lorem ipsum dolor sit amet consectetur. Cursus nunc quis
                  blandit arcu pharetra pharetra. Donec porttitor amet.
                </Text>

                <button className="rounded-2xl border-2 border-gray-100 bg-white px-10 py-4 font-bold text-[#6366f1] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all hover:scale-105 hover:shadow-xl active:scale-95">
                  Learn More
                </button>
              </Stack>
            </Stack>
          </Container>
        </div>

        <div>
          <GlassCardSection />
        </div>
      </div>
    </section>
  );
};

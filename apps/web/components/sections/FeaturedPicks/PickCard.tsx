import { Typography } from '@/components/ui/Typography';
import locationIcon from '@/src/assets/locationIcon.svg';
import redBuildingImg from '@/src/assets/redBuilding.png';
import { Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';

const PickChip = ({ label }: { label: string }) => (
  <div className="rounded-full border border-white/80 bg-white/20 px-3 py-1.5 backdrop-blur-md">
    <Text size="xs" fw={500} c="#444444">
      {label}
    </Text>
  </div>
);

export const PickCard = () => {
  return (
    <div className="relative mx-auto w-full">
      {/* Background Card (Glass Design) - Only extends on Y-axis */}
      <div className="absolute inset-x-0 -top-0 bottom-[-2rem] -z-10 rounded-[2.5rem] border border-white/60 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl">
        {/* Edge Reflections */}
        <div className="absolute top-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[0.3px]" />
        <div className="absolute bottom-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[0.3px]" />
      </div>

      {/* Foreground Card (80% White Glass) */}
      <div className="relative flex w-full overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
        {/* Left Section - Image */}
        <div className="relative w-[40%] overflow-hidden rounded-[1.5rem] shadow-inner ring-1 ring-white/40">
          {/* Glossy Border Overlay for Image */}
          <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.5rem] border border-white/40 shadow-[inset_0_2px_10px_rgba(255,255,255,0.4)]" />

          <Image
            src={redBuildingImg}
            alt="Street-Facing Storefront Window"
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Right Section - Content */}
        <div className="flex w-[60%] flex-col justify-between py-2 pr-2 pl-6">
          <Stack gap="xs">
            <div className="space-y-1">
              <Typography className="leading-tight font-bold !text-[#222222]">
                Street-Facing Storefront <br /> Window
              </Typography>

              <Group gap={4}>
                <Image
                  src={locationIcon}
                  alt="location"
                  width={16}
                  height={16}
                />
                <Text size="xs" c="#7c3aed" fw={600}>
                  5th Ave & 23rd St, Flatiron District
                </Text>
              </Group>
            </div>

            <Text
              size="xs"
              c="#666666"
              className="line-clamp-3 leading-relaxed"
            >
              A street-facing window on a busy shopping street with steady foot
              traffic throughout the day. Highly visible storefront window
              located on a busy pedestrian street.
            </Text>

            {/* Tags (Simplified design: border and background only) */}
            <Stack gap={6}>
              <Group gap="xs">
                {[
                  'High foot traffic area',
                  'StoreFront',
                  'Near a tourist Spot',
                ].map(tag => (
                  <PickChip key={tag} label={tag} />
                ))}
              </Group>
              <Group gap="xs">
                {['Weather-protected surface', 'Street-facing placement'].map(
                  tag => (
                    <PickChip key={tag} label={tag} />
                  )
                )}
              </Group>
            </Stack>
          </Stack>

          <div className="mt-4 flex items-center justify-between">
            <Group gap={4} align="baseline">
              <Text fw={700} className="text-2xl" c="#7c3aed">
                $4800.00
              </Text>
              <Text size="xs" c="#888888">
                / month
              </Text>
            </Group>

            <button className="bg-brand relative flex items-center gap-2 overflow-hidden rounded-xl px-6 py-3 shadow-[0_15px_30px_-5px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 active:scale-95">
              {/* 3D Glassy Button Effects */}
              <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-white/30 to-transparent" />
              <div className="absolute top-0 bottom-0 left-1 w-[1px] bg-white/40" />

              <Text fw={600} c="white" size="sm">
                View Details
              </Text>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import locationIcon from '@/src/assets/locationIcon.svg';
import redBuildingImg from '@/src/assets/redBuilding.png';
import { Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';

export const PickCard = () => {
  return (
    <div className="relative isolate mx-auto w-full">
      {/* Background Card (Glass Design) - Only extends on Y-axis */}
      <div className="absolute -top-4 -right-[2.5%] -bottom-4 -left-[2.5%] z-0 rounded-2xl border border-white/80 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl">
        {/* Edge Reflections */}
        <div className="absolute top-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[0.3px]" />
        <div className="absolute bottom-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[0.3px]" />
      </div>

      {/* Foreground Card (80% White Glass) */}
      <div className="relative z-10 -ml-[9%] flex w-[118%] overflow-hidden rounded-2xl border border-white/80 bg-white/40 px-3 py-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
        {/* Left Section - Image */}
        <div className="relative w-[40%] overflow-hidden rounded-xl">
          <Image
            src={redBuildingImg}
            alt="Street-Facing Storefront Window"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Right Section - Content */}
        <div className="flex w-[60%] flex-col">
          <Stack gap="xs">
            <div>
              <Typography className="mb-2 leading-6 font-bold text-[#222222]">
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

            {/* Tags (Using same glass effect as FilterChips) */}
            <div className="flex gap-2">
              <button className="relative cursor-pointer rounded-full border border-white/80 bg-[#e4e4e4]/40 px-2 text-[12px] font-medium text-gray-600 shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_1px_5px_rgba(255,255,255,0.3),inset_0_-1px_5px_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/20">
                High foot traffic area
              </button>
              <button className="relative cursor-pointer rounded-full border border-white/80 bg-white/10 px-2 text-[12px] font-medium text-gray-600 shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_1px_5px_rgba(255,255,255,0.3),inset_0_-1px_5px_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/20">
                StoreFront
              </button>
              <button className="relative cursor-pointer rounded-full border border-white/80 bg-white/10 px-4 py-1.5 text-xs font-medium text-gray-600 shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_1px_5px_rgba(255,255,255,0.3),inset_0_-1px_5px_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/20">
                Near a tourist Spot
              </button>
            </div>
            <Group gap="xs">
              <button className="relative cursor-pointer rounded-full border border-white/80 bg-white/10 px-4 py-1.5 text-xs font-medium text-gray-600 shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_1px_5px_rgba(255,255,255,0.3),inset_0_-1px_5px_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/20">
                Weather-protected surface
              </button>
              <button className="relative cursor-pointer rounded-full border border-white/80 bg-white/10 px-4 py-1.5 text-xs font-medium text-gray-600 shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_1px_5px_rgba(255,255,255,0.3),inset_0_-1px_5px_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/20">
                Street-facing placement
              </button>
            </Group>
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

            <Button>View Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

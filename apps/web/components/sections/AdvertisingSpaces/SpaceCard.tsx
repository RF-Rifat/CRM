import { Stack, Text } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';

interface SpaceCardProps {
  title: string;
}

export const SpaceCard = ({ title }: SpaceCardProps) => {
  return (
    <Stack gap="xs" className="group cursor-pointer mb-0">
      {/* Outer Visual Container with thick border effect */}
      <div className="relative aspect-[4/2.75] w-full overflow-hidden rounded-3xl bg-[#EBE3FA] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
        {/* Inner Content Area with subtle border */}
        <div className="h-full w-full rounded-2xl border-[1px] border-white/80 bg-[#EBE3FA]">
          {/* Subtle inner shadow/bevel effect */}
          <div className="h-full w-full rounded-2xl border border-[#DCD3F2]/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]" />
        </div>
      </div>

      {/* Label Bar with 3D Glossy Effect */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#C49CE6] to-[#A880D1] px-6 py-5 shadow-[0_10px_20px_-5px_rgba(124,58,237,0.3)] transition-all duration-300 group-hover:-translate-y-1">
        {/* Left Side Pill Glow Reflection */}
        <div className="absolute top-[10%] left-2 h-[80%] w-3 rounded-full bg-white/60 blur-[3px]" />

        {/* Bottom Highlight for 3D look */}
        <div className="absolute right-4 bottom-1 left-4 h-[4px] rounded-full bg-white/30 blur-[2px]" />

        {/* Subtle Top Edge Highlight */}
        <div className="absolute top-0 right-0 left-0 h-[1px] bg-white/40" />

        <div className="relative z-10 flex items-center justify-between">
          <Text fw={500} c="white" size="lg" className="tracking-wide">
            {title}
          </Text>
          <IconArrowUp size={24} color="white" stroke={1.5} />
        </div>
      </div>
    </Stack>
  );
};

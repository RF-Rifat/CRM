import { Text } from '@mantine/core';

interface FilterChipProps {
  label: string;
  active?: boolean;
  size?: 'sm' | 'md';
}

export const FilterChip = ({
  label,
  active = false,
  size = 'md',
}: FilterChipProps) => {
  const sizeClasses = size === 'sm' ? 'px-4 py-1.5' : 'px-8 py-2.5';
  const textVariant = size === 'sm' ? 'sm' : 'md';

  return (
    <div
      className={`relative cursor-pointer rounded-full border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 ${sizeClasses} ${
        active
          ? 'bg-white/40 shadow-[inset_0_2px_10px_rgba(255,255,255,0.8),inset_0_-2px_10px_rgba(255,255,255,0.4)]'
          : 'bg-white/10 shadow-[inset_0_1px_5px_rgba(255,255,255,0.3),inset_0_-1px_5px_rgba(255,255,255,0.1)] hover:scale-[1.02] hover:bg-white/20'
      }`}
    >
      {/* Top Rim Reflection */}
      <div className="absolute top-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[0.3px]" />

      {/* Bottom Rim Reflection */}
      <div className="absolute bottom-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[0.3px]" />

      {/* Extreme End Glows */}
      <div className="absolute top-[15%] bottom-[15%] left-[3px] w-[5px] rounded-full bg-white/25 blur-[1px]" />
      <div className="absolute top-[15%] right-[3px] bottom-[15%] w-[5px] rounded-full bg-white/25 blur-[1px]" />

      <Text
        size={textVariant}
        c={active ? '#222222' : '#444444'}
        fw={500}
        className="relative z-10 tracking-wide"
      >
        {label}
      </Text>
    </div>
  );
};

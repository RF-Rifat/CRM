'use client';

import { Box, Group, Text, UnstyledButton } from '@mantine/core';
import {
  IconArrowLeft,
  IconArrowRight,
  IconChevronRight,
} from '@tabler/icons-react';
import React from 'react';

interface DynamicTopBarProps {
  title: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export const DynamicTopBar: React.FC<DynamicTopBarProps> = ({
  title,
  onPrev,
  onNext,
}) => {
  return (
    <Group justify="space-between" align="center" className="mb-8" w="100%">
      {/* Left side: Title + Chevron */}
      <Group gap="sm" align="center" justify="center">
        <Text
          className="font-bold tracking-tight"
          fz={42}
          c="black"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {title}
        </Text>
        <Box
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
          component="button"
        >
          <IconChevronRight size={28} className="text-gray-900" stroke={2.5} />
        </Box>
      </Group>

      {/* Right side: Navigation Arrows */}
      <Group gap="sm">
        <UnstyledButton
          onClick={onPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full transition-all hover:bg-gray-50 active:scale-95"
          style={{ border: '1px solid #E5E7EB' }}
          aria-label="Previous"
        >
          <IconArrowLeft size={28} className="text-gray-400" stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          onClick={onNext}
          className="flex h-12 w-12 items-center justify-center rounded-full transition-all hover:bg-gray-50 active:scale-95"
          style={{ border: '1px solid #000000' }}
          aria-label="Next"
        >
          <IconArrowRight size={28} className="text-black" stroke={1.5} />
        </UnstyledButton>
      </Group>
    </Group>
  );
};

'use client';

import { Group, Text, UnstyledButton } from '@mantine/core';
import {
  IconAdjustmentsHorizontal,
  IconChevronDown,
  IconFilter,
  IconLayoutGrid,
  IconMap,
  IconSearch,
} from '@tabler/icons-react';
import { useState } from 'react';

export const CartTopbar = () => {
  const [view, setView] = useState<'map' | 'grid'>('map');
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  return (
    <div className="w-full py-4">
      {/* 3-Column Grid Layout */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Group 1: Title (Left Aligned) */}
        <div className="flex items-center justify-start">
          <Text size="40px" fw={600} c={'#000000'} className="tracking-tight">
            Food Cart
          </Text>
        </div>

        {/* Group 2: Search/Date + Settings (Center Aligned) */}
        <div className="flex items-center justify-center gap-3">
          {/* Search / Date Bar */}
          <div className="flex w-[600px] items-center justify-between rounded-full bg-[#F3F5F7] py-2 pr-2 pl-8">
            <div className="flex">
              <Group gap="xs" className="border-r border-gray-300 pr-10 pl-4">
                <span className="font-poppins text-sm font-medium text-gray-500">
                  Start Date
                </span>
              </Group>
              <Group gap="xs" className="pr-10 pl-4">
                <span className="font-poppins text-sm font-medium text-gray-500">
                  End Date
                </span>
              </Group>
            </div>
            <div className="flex">
              <button className="flex items-center gap-1 px-4 text-sm font-medium text-black">
                Rideshare
                <IconChevronDown size={16} color="grey" />
              </button>
              <div className="bg-brand ml-4 flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-105 active:scale-95">
                <IconSearch size={28} />
              </div>
            </div>
          </div>

          {/* Settings Icon */}
          <button className="flex h-12 w-12 items-center justify-center rounded-full border-1 border-gray-300 transition-colors hover:bg-gray-50 text-black">
            <IconAdjustmentsHorizontal size={20} className="" />
          </button>
        </div>

        {/* Group 3: View Toggle + Filter (Right Aligned) */}
        <div className="flex items-center justify-end gap-3">
          {/* Divider */}
          <div className="mx-2 h-12 w-[1px] bg-gray-300" />

          {/* View Toggle */}
          <div className="flex justify-between rounded-full border border-gray-300 py-1 gap-1">
            <button
              onClick={() => setView('map')}
              className={`ml-2 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                view === 'map'
                  ? 'bg-brand text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <IconMap size={18} />
              Map
            </button>
            <button
              onClick={() => setView('grid')}
              className={`mr-2 flex items-center gap-2 rounded-full px-4 py-2 transition-all ${
                view === 'grid'
                  ? 'bg-brand text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <IconLayoutGrid size={18} />
              <span className="font-bold">Grid</span>
            </button>
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-2 rounded-full bg-black px-6 py-2.5 text-white transition-transform hover:scale-105 active:scale-95">
            <IconFilter size={18} />
            <span className="text-sm font-medium">Filter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

'use client';
import searchIcon from '@/src/assets/Search.svg';
import { Stack } from '@mantine/core';
import Image from 'next/image';

export const HeroSearch = () => {
  return (
    <div className="mt-5 flex w-full max-w-2xl items-center rounded-3xl border border-gray-100 bg-[#CDC9C9]/10 py-2 pr-2 pl-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]">
      {/* Ad Space Section */}
      <div className="flex-1 cursor-pointer py-1">
        <Stack gap={0}>
          <span className="text-xs font-medium text-gray-400">Ad Space</span>
          <span className="text-md font-bold text-[#444444]">StoreFront</span>
        </Stack>
      </div>

      {/* Divider */}
      <div className="mx-4 h-10 w-[1px] bg-gray-200" />

      {/* From Section */}
      <div className="flex-1 cursor-pointer py-1">
        <Stack gap={0}>
          <span className="text-xs font-medium text-gray-400">From</span>
          <span className="text-md font-bold text-[#444444]">Nov 5, 2026</span>
        </Stack>
      </div>

      {/* Divider */}
      <div className="mx-4 h-10 w-[1px] bg-gray-200" />

      {/* To Section */}
      <div className="flex-1 cursor-pointer py-1">
        <Stack gap={0}>
          <span className="text-xs font-medium text-gray-400">To</span>
          <span className="text-md font-bold text-[#444444]">Nov 25, 2026</span>
        </Stack>
      </div>

      {/* Search Button */}
      <button className="bg-brand ml-4 flex h-12 w-12 items-center justify-center rounded-xl p-3 shadow-[0_10px_20px_-5px_rgba(124,58,237,0.3)] transition-all hover:scale-105 active:scale-95">
        <div className="flex items-center justify-center">
          <Image
            src={searchIcon}
            width={20}
            alt="Search"
            className="object-contain brightness-0 invert"
          />
        </div>
      </button>
    </div>
  );
};

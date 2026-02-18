'use client';
import { Button } from '@/components/ui/Button';
import carIcon from '@/src/assets/car.svg';
import foodIcon from '@/src/assets/food.svg';
import pStoreIcon from '@/src/assets/p-store.svg';
import { Group, Stack } from '@mantine/core';
import Image from 'next/image';

interface HeroFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const HeroFilters = ({
  activeFilter,
  setActiveFilter,
}: HeroFiltersProps) => {
  const filterItems = [
    { label: 'All', icon: null },
    { label: 'Rideshare', icon: carIcon },
    { label: 'StoreFront', icon: pStoreIcon },
    { label: 'Food Cart', icon: foodIcon },
  ];

  return (
    <Stack gap="" className="w-fit">
      <div className="flex w-fit items-center rounded-2xl border-2 border-gray-100 bg-white p-1 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]">
        <Group gap={4} wrap="nowrap">
          {filterItems.map(item => {
            const isActive = activeFilter === item.label;

            return (
              <Button
                key={item.label}
                size="sm"
                onClick={() => setActiveFilter(item.label)}
                className={cn(
                  'flex items-center gap-2 rounded-xl px-6 py-2 text-sm font-bold transition-all',
                  isActive
                    ? 'bg-brand'
                    : 'border-none bg-transparent text-[#555555] shadow-none hover:bg-gray-50'
                )}
                style={
                  !isActive
                    ? {
                        background: 'none',
                        boxShadow: 'none',
                        border: 'none',
                        color: '#555555',
                        paddingLeft: '1.5rem',
                        paddingRight: '1.5rem',
                      }
                    : {
                        background: 'var(--color-brand)',
                        paddingLeft: '1.5rem',
                        paddingRight: '1.5rem',
                      }
                }
              >
                <span className="flex items-center gap-2">
                  {item.icon && (
                    <span className="relative h-6 w-6 transition-transform group-hover:scale-110">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        fill
                        sizes="24px"
                        className={cn(
                          'object-contain',
                          isActive ? 'brightness-0 invert' : ''
                        )}
                      />
                    </span>
                  )}
                  <span
                    className={cn(
                      'font-semibold',
                      isActive ? 'text-white' : 'text-[#555555]'
                    )}
                  >
                    {item.label}
                  </span>
                </span>
              </Button>
            );
          })}
        </Group>
      </div>
    </Stack>
  );
};

// Helper for conditional classes if not already imported
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

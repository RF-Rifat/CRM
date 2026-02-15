import { Button } from '@/components/ui/Button';
import carIcon from '@/src/assets/car.svg';
import foodIcon from '@/src/assets/food.svg';
import storeIcon from '@/src/assets/store.svg';
import { Group, Stack } from '@mantine/core';
import Image from 'next/image';

export const HeroFilters = () => {
  const filterItems = [
    { label: 'Ridshare', icon: carIcon },
    { label: 'StoreFront', icon: storeIcon },
    { label: 'Food Cart', icon: foodIcon },
  ];

  return (
    <Stack gap="" className="w-fit">
      <div className="flex w-fit items-center rounded-2xl border-2 border-gray-100 bg-white p-1 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]">
        <Button
          size="sm"
          className="rounded-xl px-6 py-2 text-sm font-bold shadow-[0_15px_30px_-5px_rgba(124,58,237,0.4)]"
        >
          All
        </Button>

        <Group gap="lg" px="lg">
          {filterItems.map(item => (
            <div
              key={item.label}
              className="group flex cursor-pointer items-center gap-2 transition-all hover:opacity-80"
            >
              <div className="relative h-6 w-6 transition-transform group-hover:scale-110">
                <Image
                  src={item.icon}
                  alt={item.label}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-md font-semibold text-[#555555]">
                {item.label}
              </span>
            </div>
          ))}
        </Group>
      </div>
    </Stack>
  );
};

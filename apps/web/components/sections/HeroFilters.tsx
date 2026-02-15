import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { Badge, Group, Stack } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import {
  IconBuildingStore,
  IconCar,
  IconSearch,
  IconToolsKitchen2,
} from '@tabler/icons-react';

const categories = [
  { label: 'Storefronts', icon: <IconBuildingStore size={14} />, active: true },
  { label: 'Rideshare', icon: <IconCar size={14} />, active: false },
  { label: 'Food carts', icon: <IconToolsKitchen2 size={14} />, active: false },
];

export const HeroFilters = () => {
  return (
    <Stack gap="xl" className="w-full max-w-2xl">
      <div className="flex flex-col gap-4">
        <Typography
          variant="caption"
          weight="semibold"
          color="secondary"
          className="text-xs tracking-widest uppercase"
        >
          Popular:
        </Typography>
        <Group gap="sm">
          {categories.map(cat => (
            <Badge
              key={cat.label}
              variant={cat.active ? 'filled' : 'outline'}
              color={cat.active ? 'brand' : 'gray'}
              size="lg"
              radius="xl"
              leftSection={cat.icon}
              className="h-9 cursor-pointer px-4 transition-transform hover:scale-105"
            >
              {cat.label}
            </Badge>
          ))}
        </Group>
      </div>

      <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl md:flex-row dark:border-gray-700 dark:bg-gray-800">
        <div className="grid w-full flex-grow grid-cols-1 gap-2 md:grid-cols-2">
          <DateInput
            placeholder="Start Date"
            variant="unstyled"
            className="border-r border-gray-100 px-4 py-2 dark:border-gray-700"
          />
          <DateInput
            placeholder="End Date"
            variant="unstyled"
            className="px-4 py-2"
          />
        </div>
        <div className="flex w-full items-center gap-2 p-2 md:w-auto">
          <div className="mx-2 hidden h-8 w-px bg-gray-200 md:block dark:bg-gray-700" />
          <Button className="bg-brand flex h-12 w-full items-center justify-center rounded-xl p-0 md:h-12 md:w-14">
            <IconSearch size={22} color="white" />
          </Button>
        </div>
      </div>

      <Group gap="lg" className="text-sm font-medium">
        <div className="flex items-center gap-2">
          <div className="bg-brand h-1.5 w-1.5 rounded-full" />
          <Typography color="secondary">Last click attribution</Typography>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
          <Typography color="secondary">Go live in 5 days</Typography>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          <Typography color="secondary">Best deals on earth</Typography>
        </div>
      </Group>
    </Stack>
  );
};

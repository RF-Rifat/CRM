import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { Badge, Group, Select, Stack } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconSearch } from '@tabler/icons-react';

const categories = [
  { label: 'Storefronts', active: true },
  { label: 'Rideshare', active: false },
  { label: 'Food carts', active: false },
];

export const HeroFilters = () => {
  return (
    <Stack gap="xl" className="w-full max-w-2xl">
      <div className="flex items-center gap-4">
        <Typography
          variant="caption"
          weight="semibold"
          color="secondary"
          className="shrink-0 text-xs tracking-widest uppercase"
        >
          Popular:
        </Typography>
        <Group gap="sm">
          {categories.map(cat => (
            <Badge
              key={cat.label}
              variant="outline"
              color="#555555"
              size="lg"
              radius="xl"
              className="h-9 cursor-pointer px-4 transition-transform hover:scale-105"
            >
              {cat.label}
            </Badge>
          ))}
        </Group>
      </div>

      <div className="flex flex-col items-center gap-2 rounded-2xl bg-gray-50 p-2 md:flex-row">
        <div className="grid w-full flex-grow grid-cols-1 gap-2 md:grid-cols-2">
          <DateInput
            placeholder="Start Date"
            variant="unstyled"
            className="border-r border-gray-200 px-4 py-2"
          />
          <DateInput
            placeholder="End Date"
            variant="unstyled"
            className="px-4 py-2"
          />
        </div>
        <div className="flex w-full items-center gap-2 md:w-auto">
          <div className="mx-2 hidden h-8 w-px bg-gray-200 md:block" />
          <Select
            placeholder="Rideshare"
            data={['Storefronts', 'Rideshare', 'Food carts']}
            defaultValue="Rideshare"
            variant="unstyled"
            className="w-32 px-2"
          />
          <Button className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 p-0 hover:bg-violet-700">
            <IconSearch size={22} color="white" />
          </Button>
        </div>
      </div>

      <Group gap="lg" className="text-sm font-medium">
        <Typography color="secondary">Last click attribution</Typography>
        <span className="text-gray-300">•</span>
        <Typography color="secondary">Go live in 5 days</Typography>
        <span className="text-gray-300">•</span>
        <Typography color="secondary">Best deals on earth</Typography>
      </Group>
    </Stack>
  );
};

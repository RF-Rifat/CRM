import { Typography } from '@/components/ui/Typography';
import { ActionIcon, Badge, Card, Group, Image, Stack } from '@mantine/core';
import {
  IconBolt,
  IconMapPin,
  IconMinus,
  IconNavigation,
  IconPlus,
} from '@tabler/icons-react';

export const HeroMapPreview = () => {
  return (
    <div className="bg-brand/5 dark:bg-brand/10 relative aspect-square w-full overflow-hidden rounded-[40px] p-8 md:aspect-auto md:h-[600px]">
      {/* Decorative Grid/Map Background Effect */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#7042D2 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Central Card */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <Card
          radius="lg"
          shadow="xl"
          p="md"
          className="w-[340px] border-none backdrop-blur-xl dark:bg-gray-900/90"
        >
          <Card.Section>
            <div className="relative p-2">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
                height={180}
                radius="md"
                alt="Storefront"
              />
              <Badge
                color="brand"
                variant="filled"
                className="absolute top-4 left-4 shadow-lg"
              >
                Street-Facing
              </Badge>
            </div>
          </Card.Section>

          <Stack gap="xs" mt="sm">
            <Typography variant="h3" weight="bold" className="text-xl">
              Downtown Storefront
            </Typography>
            <Group gap="xs">
              <IconMapPin size={14} className="text-brand" />
              <Typography variant="caption" color="secondary">
                Commercial District • 45k / mo
              </Typography>
            </Group>

            <hr className="my-1 border-gray-100 dark:border-gray-800" />

            <Group justify="space-between">
              <Typography
                variant="h3"
                weight="bold"
                color="brand"
                className="text-lg"
              >
                $1,500 / Month
              </Typography>
              <ActionIcon variant="light" color="brand" radius="xl">
                <IconBolt size={18} />
              </ActionIcon>
            </Group>
          </Stack>
        </Card>
      </div>

      {/* Floating Badges (Map Markers) */}
      <div className="absolute top-[15%] left-[10%] animate-bounce [animation-duration:3s]">
        <div className="bg-brand/20 border-brand/30 flex items-center gap-2 rounded-full border p-1 px-3 backdrop-blur-md">
          <div className="bg-brand h-2 w-2 rounded-full" />
          <Typography variant="caption" weight="bold" color="brand">
            12K
          </Typography>
        </div>
      </div>

      <div className="absolute right-[15%] bottom-[20%] animate-bounce [animation-duration:4s]">
        <div className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 p-1 px-3 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
          <Typography variant="caption" weight="bold" className="text-blue-500">
            32K
          </Typography>
        </div>
      </div>

      <div className="absolute top-[25%] right-[20%]">
        <div className="rounded-2xl border border-purple-500/30 bg-purple-500/20 p-2 backdrop-blur-md">
          <IconNavigation size={24} className="rotate-45 text-purple-600" />
        </div>
      </div>

      {/* Map Controls */}
      <Stack className="absolute right-10 bottom-10" gap="xs">
        <ActionIcon
          variant="white"
          radius="md"
          size="xl"
          className="text-gray-500 shadow-lg"
        >
          <IconPlus size={20} />
        </ActionIcon>
        <ActionIcon
          variant="white"
          radius="md"
          size="xl"
          className="text-gray-500 shadow-lg"
        >
          <IconMinus size={20} />
        </ActionIcon>
      </Stack>
    </div>
  );
};

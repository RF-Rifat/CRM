import { Box, Group, Stack, Text } from '@mantine/core';
import NextImage, { StaticImageData } from 'next/image';
import React from 'react';

interface NearyouPageCardProps {
  image: string | StaticImageData;
  title: string;
  location: string;
  locationIcon: any;
  meta: string;
  metaIcon: any;
  price: string;
}

export const NearyouPageCard: React.FC<NearyouPageCardProps> = ({
  image,
  title,
  location,
  locationIcon,
  meta,
  metaIcon,
  price,
}) => {
  return (
    <Box className="w-full">
      {/* Image Container */}
      <Box
        className="relative mb-4 overflow-hidden"
        style={{ borderRadius: '24px', height: '300px' }}
      >
        <NextImage
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 hover:scale-110"
        />
      </Box>

      {/* Content Stack */}
      <Stack gap={10}>
        <Text
          size="20px"
          fw={400}
          c="#1F2937"
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            marginBottom: 10,
          }}
          w={250}
        >
          {title}
        </Text>

        {/* Metadata Group */}
        <Group gap={8} align="center" wrap="nowrap" className="mb-2">
          <Group gap={4} wrap="nowrap">
            <NextImage
              src={locationIcon}
              alt="location"
              width={18}
              height={18}
            />
            <Text size="sm" c="#6B7280" fw={500}>
              {location}
            </Text>
          </Group>

          <Box className="h-1 w-1 rounded-full bg-gray-300" />

          <Group gap={4} wrap="nowrap">
            <NextImage src={metaIcon} alt="meta" width={18} height={18} />
            <Text size="sm" c="#6B7280" fw={500}>
              {meta}
            </Text>
          </Group>
        </Group>

        {/* Price Group */}
        <Group gap={4} align="baseline">
          <Text size="20px" fw={500} c="black">
            ${price}/
          </Text>
          <Text
            size="14px"
            fw={500}
            c="#9CA3AF"
            className="tracking-tighter"
          >
            Month
          </Text>
        </Group>
      </Stack>
    </Box>
  );
};

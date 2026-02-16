'use client';

import { Box, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

interface FeaturedGroupCardProps {
  title: string;
  description: string;
  icon?: string | any;
}

export const FeaturedGroupCard: React.FC<FeaturedGroupCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Box
      className="font-inter relative flex flex-col transition-all duration-300 hover:translate-y-[-4px]"
      style={{
        background: '#FFFFFF40',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid #FFFFFF',
        borderRadius: '12px',
        padding: '24px',
        width: '100%',
        boxShadow: 'inset 6px 6px 15px #0000000D',
      }}
    >
      {/* Icon Wrapper with glass effect */}
      <Box
        className="mb-6 flex items-center justify-center"
        style={{
          width: '56px',
          height: '56px',
          // background: 'linear-gradient(180deg, #FFFFFF66 0%, #FFFFFF00 5%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '2px solid #FFFFFF',
          borderRadius: '12px',
          boxShadow: '0 4px 12px 0 #0000000D',
        }}
      >
        {icon && (
          <div className="relative h-6 w-6">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
        )}
      </Box>

      <Stack gap="xs">
        <Text c="#1F2937" className="text-lg">
          {title}
        </Text>
        <Text c="#6B7280" size="sm" className="leading-relaxed">
          {description}
        </Text>
      </Stack>
    </Box>
  );
};

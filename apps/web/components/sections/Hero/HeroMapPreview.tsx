'use client';
import mapPicture from '@/src/assets/map picture.png';
import { Card, Image } from '@mantine/core';

export const HeroMapPreview = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <Card
        radius="24px"
        p="xl"
        style={{
          backgroundColor: 'rgba(144, 101, 237, 0.15)',
          width: '100%',
          maxWidth: '715px',
        }}
        className="overflow-hidden shadow-2xl"
      >
        <Card.Section>
          <Image
            src={mapPicture.src}
            alt="Map Preview"
            className="h-auto w-full"
          />
        </Card.Section>
      </Card>
    </div>
  );
};

import { Navbar } from '@/components/layout/Navbar';
import { AdvertisingSpaces } from '@/components/sections/AdvertisingSpaces/AdvertisingSpaces';
import { FeaturedPicks } from '@/components/sections/FeaturedPicks/FeaturedPicks';
import { Hero } from '@/components/sections/Hero/Hero';
import { Stack } from '@mantine/core';
import { NearyouPage } from '../../components/sections/NearyouPage/NearyouPage';
import { PopularPage } from '../../components/sections/Popular/PopularPage';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Stack gap={0}>
          <Hero />
          <AdvertisingSpaces />
          <FeaturedPicks />
          <NearyouPage />
          <PopularPage />
        </Stack>
      </main>

      {/* Footer Placeholder */}
      {/* <footer className="border-t border-gray-100 bg-gray-50 py-10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          © 2026 Empty Works. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
}

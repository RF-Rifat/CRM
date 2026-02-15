import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stack } from '@mantine/core';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Stack gap={0}>
          <Hero />
          {/* Add more sections here as they are implemented */}
          <section className="border-t border-gray-100 bg-white py-20">
            {/* AdvertisingSpaces section will go here */}
          </section>
        </Stack>
      </main>

      {/* Footer Placeholder */}
      <footer className="border-t border-gray-100 bg-gray-50 py-10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          © 2026 Empty Works. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

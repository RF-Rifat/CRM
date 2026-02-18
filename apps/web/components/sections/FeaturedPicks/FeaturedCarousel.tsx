'use client';
import { Carousel } from '@mantine/carousel';
import { PickCard } from './PickCard';

export const FeaturedCarousel = () => {
  return (
    <div className="relative w-full overflow-visible py-20">
      <Carousel
        slideSize={{ base: '85%', sm: '80%', md: '75%' }}
        slideGap="xl"
        withControls={false}
        withIndicators={false}
        height="100%"
        emblaOptions={{ loop: true, align: 'center' }}
      >
        <Carousel.Slide>
          <div className="mx-auto flex max-w-[700px] justify-center py-6 transition-all duration-500 hover:scale-[1.02]">
            <PickCard />
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="mx-auto flex max-w-[700px] justify-center py-6 transition-all duration-500 hover:scale-[1.02]">
            <PickCard />
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="mx-auto flex max-w-[700px] justify-center py-6 transition-all duration-500 hover:scale-[1.02]">
            <PickCard />
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

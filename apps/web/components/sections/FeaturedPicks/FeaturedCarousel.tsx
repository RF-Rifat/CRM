import redBuildingImg from '@/src/assets/redBuilding.png';
import Image from 'next/image';
import { PickCard } from './PickCard';

export const FeaturedCarousel = () => {
  return (
    <div className="relative w-full overflow-visible py-20">
      <div className="flex items-center justify-center">
        {/* Left Side Card */}
        <div className="absolute top-1/2 left-[2%] w-[24%] -translate-y-1/2 scale-[0.85] transition-all duration-500 hover:scale-90 lg:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/10 shadow-2xl backdrop-blur-xl">
            <Image src={redBuildingImg} alt="" fill className="object-cover" />
            {/* Edge Reflections for Glass Side Card */}
            <div className="absolute top-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[0.3px]" />
          </div>
        </div>

        {/* Main Card (Centered, smaller max-width) */}
        <div className="relative z-20 w-full max-w-2xl transition-all duration-500 hover:scale-[1.02]">
          <PickCard />
        </div>

        {/* Right Side Card */}
        <div className="absolute top-1/2 right-[2%] w-[24%] -translate-y-1/2 scale-[0.85] transition-all duration-500 hover:scale-90 lg:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/10 shadow-2xl backdrop-blur-xl">
            <Image src={redBuildingImg} alt="" fill className="object-cover" />
            {/* Edge Reflections for Glass Side Card */}
            <div className="absolute top-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[0.3px]" />
          </div>
        </div>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -z-20 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/40 blur-[150px]" />
    </div>
  );
};

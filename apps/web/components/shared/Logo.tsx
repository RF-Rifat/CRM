import { Typography } from '@/components/ui/Typography';
import logoIcon from '@/src/assets/pink-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="group flex items-center gap-2 no-underline">
      <div className="flex h-10 w-10 items-center justify-center transition-transform group-hover:scale-110">
        <Image src={logoIcon} alt="Empty Logo" width={32} height={32} />
      </div>
      <Typography
        variant="h3"
        color="brand"
        className="font-semibold tracking-tight uppercase"
      >
        Empty
      </Typography>
    </Link>
  );
};

import { Typography } from '@/components/ui/Typography';
import { IconDeviceLaptop } from '@tabler/icons-react';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="group flex items-center gap-2 no-underline">
      <div className="bg-brand flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:rotate-12">
        <IconDeviceLaptop size={24} color="white" stroke={2.5} />
      </div>
      <Typography
        variant="h3"
        weight="bold"
        color="brand"
        className="tracking-tight uppercase"
      >
        Empty
      </Typography>
    </Link>
  );
};

import { clsx, type ClassValue } from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const links = [
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'How We Do It', href: '/how-it-works' },
  { label: 'For Agencies', href: '/agencies' },
];

export const NavLinks = () => {
  const router = useRouter();

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'hover:text-brand relative py-1 text-sm font-medium transition-all duration-200',
            router.pathname === link.href
              ? 'text-brand border-brand border-b-2'
              : 'text-text-secondary dark:text-gray-400'
          )}
        >
          {link.label}
          <span className="bg-brand absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </nav>
  );
};

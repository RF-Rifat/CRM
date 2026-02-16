'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales } from './locale-setter/setLocale';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    if (!pathname) return;

    const segments = pathname.split('/');
    if (segments.length < 2) return;

    segments[1] = locale;

    // Set preferred language cookie
    document.cookie = `preferred-language=${locale}; path=/; max-age=31536000; SameSite=Lax`;

    // Navigate to the new language path
    router.push(segments.join('/'));
    // or router.replace(segments.join('/')) to avoid history entry
  };

  return (
    <div className="flex gap-4">
      {locales.map(locale => (
        <button
          key={locale}
          onClick={() => switchLanguage(locale)}
          className="rounded border px-4 py-2"
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

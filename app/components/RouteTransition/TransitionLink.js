'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from './TransitionContext';

export default function TransitionLink({ href, children, onClick, ...props }) {
  const router = useRouter();
  const pathname = usePathname();
  const { triggerTransition } = useTransition();

  const handleClick = (e) => {
    // Let external links, hash links, and same-page links pass through
    if (
      href === pathname ||
      href.startsWith('#') ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      e.metaKey ||
      e.ctrlKey
    ) {
      if (onClick) onClick(e);
      return;
    }

    e.preventDefault();
    if (onClick) onClick(e);

    triggerTransition(() => {
      router.push(href);
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTransition } from './TransitionContext';
import styles from './RouteTransition.module.css';

export default function RouteTransition() {
  const { isTransitioning } = useTransition();
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className={`${styles.overlay} ${isTransitioning ? styles.active : ''}`}
      aria-hidden="true"
    >
      <div className={styles.overlayContent}>
        <Image
          src="/images/logo-new.jpeg"
          alt="Upper Amenfi Community Bank PLC"
          width={64}
          height={64}
          className={styles.logoImg}
          priority
        />
        <div className={styles.loaderLogoText}>
          <span className={styles.loaderLogoName}>UPPER AMENFI</span>
          <span className={styles.loaderLogoName}>COMMUNITY BANK PLC.</span>
          <div className={styles.loaderLogoDivider} />
          <span className={styles.loaderLogoSub}>ALWAYS AT YOUR SERVICE</span>
        </div>
      </div>
    </div>
  );
}

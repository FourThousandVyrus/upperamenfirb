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
        {/* Bank logo */}
        <div className={styles.logoMark}>
          <Image
            src="/images/logo.png"
            alt="Upper Amenfi Rural Bank"
            width={180}
            height={50}
            className={styles.logoImg}
            priority
          />
        </div>
        <div className={styles.loadingText}>Loading</div>
        <div className={styles.progressBar}>
          <div
            className={`${styles.progressFill} ${isTransitioning ? styles.progressActive : ''}`}
          />
        </div>
        <div className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
    </div>
  );
}

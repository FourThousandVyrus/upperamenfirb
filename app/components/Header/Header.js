'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import TransitionLink from '../RouteTransition/TransitionLink';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Users,
  Building2,
  Heart,
  Newspaper,
  Calculator,
  Shield,
  Smartphone,
} from 'lucide-react';

const navItems = [
  { href: '/products-services', label: 'Products & Services' },
  { href: '/loans', label: 'Loans' },
  { href: '/branches', label: 'Branches' },
];

const aboutLinks = [
  { href: '/about', label: 'Our Story', icon: <Users size={16} /> },
  { href: '/governance', label: 'Leadership & Governance', icon: <Building2 size={16} /> },
  { href: '/csr', label: 'Community Impact', icon: <Heart size={16} /> },
  { href: '/news', label: 'News & Updates', icon: <Newspaper size={16} /> },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className={`${styles.header} ${isTransparent ? styles.transparent : styles.solid}`}>
        <div className={styles.headerInner}>
          {/* Logo */}
          <TransitionLink href="/" className={styles.logo}>
            <Image src="/images/logo.png" alt="Upper Amenfi Rural Bank Limited" className={styles.logoImg} width={327} height={92} priority />
          </TransitionLink>

          {/* Desktop Nav */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <TransitionLink
                key={item.label}
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
              >
                {item.label}
              </TransitionLink>
            ))}

            {/* About Mega Menu */}
            <div
              className={styles.megaWrapper}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button className={`${styles.navLink} ${styles.megaTrigger}`}>
                About <ChevronDown size={14} className={megaOpen ? styles.chevronOpen : ''} />
              </button>
              {megaOpen && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuInner}>
                    {aboutLinks.map((link) => (
                      <TransitionLink key={link.href} href={link.href} className={styles.megaItem}>
                        <span className={styles.megaItemIcon}>{link.icon}</span>
                        {link.label}
                      </TransitionLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <TransitionLink href="/rates" className={styles.utilLink}>Rates</TransitionLink>
            <TransitionLink href="/contact" className={`btn btn-glow btn-sm ${styles.ctaBtn}`}>
              Open Account
            </TransitionLink>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobileNav}>
            <div className={styles.mobileSection}>
              <span className={styles.mobileSectionLabel}>Banking</span>
              <TransitionLink href="/products-services" className={styles.mobileLink}>Personal Banking</TransitionLink>
              <TransitionLink href="/products-services" className={styles.mobileLink}>Business Banking</TransitionLink>
              <TransitionLink href="/loans" className={styles.mobileLink}>Loans & Credit</TransitionLink>
            </div>

            <div className={styles.mobileSection}>
              <span className={styles.mobileSectionLabel}>Company</span>
              {aboutLinks.map((link) => (
                <TransitionLink key={link.href} href={link.href} className={styles.mobileLink}>
                  {link.label}
                </TransitionLink>
              ))}
            </div>

            <div className={styles.mobileSection}>
              <span className={styles.mobileSectionLabel}>Tools & Support</span>
              <TransitionLink href="/calculators" className={styles.mobileLink}>Calculators</TransitionLink>
              <TransitionLink href="/ussd-guide" className={styles.mobileLink}>USSD Guide</TransitionLink>
              <TransitionLink href="/branches" className={styles.mobileLink}>Find a Branch</TransitionLink>
              <TransitionLink href="/rates" className={styles.mobileLink}>Current Rates</TransitionLink>
              <TransitionLink href="/security-tips" className={styles.mobileLink}>Security Tips</TransitionLink>
              <TransitionLink href="/contact" className={styles.mobileLink}>Contact Us</TransitionLink>
            </div>

            <div className={styles.mobileCta}>
              <TransitionLink href="/contact" className="btn btn-glow btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Open an Account <ArrowRight size={18} />
              </TransitionLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

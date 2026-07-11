'use client';
import { useState, useEffect } from 'react';
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
  TrendingUp,
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products-services', label: 'Products & Services' },
  { href: '/branches', label: 'Branches' },
];

const moneyLinks = [
  { href: '/loans', label: 'Loan Products', icon: <TrendingUp size={16} /> },
  { href: '/credit', label: 'Open an Account', icon: <Building2 size={16} /> },
];

const aboutLinks = [
  { href: '/about', label: 'Our Story', icon: <Users size={16} /> },
  { href: '/governance', label: 'Leadership & Governance', icon: <Building2 size={16} /> },
  { href: '/investor-relations', label: 'Investor Relations', icon: <TrendingUp size={16} /> },
  { href: '/csr', label: 'Community Impact', icon: <Heart size={16} /> },
  { href: '/news', label: 'News & Updates', icon: <Newspaper size={16} /> },
];

function closeMenus(setMobileOpen, setMegaOpen, setMoneyOpen) {
  setMobileOpen(false);
  setMegaOpen(false);
  setMoneyOpen(false);
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [moneyOpen, setMoneyOpen] = useState(false);
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

  const handleNavClick = () => closeMenus(setMobileOpen, setMegaOpen, setMoneyOpen);

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className={`${styles.header} ${isTransparent ? styles.transparent : styles.solid}`}>
        <div className={styles.headerInner}>
          {/* Logo */}
          <TransitionLink href="/" className={styles.logo} onClick={handleNavClick}>
            <Image
              src="/images/logo-new.jpeg"
              alt="Upper Amenfi Community Bank PLC"
              className={styles.logoImg}
              width={48}
              height={48}
              priority
            />
            <div className={styles.logoText}>
              <span className={styles.logoName}>UPPER AMENFI</span>
              <span className={styles.logoName}>COMMUNITY BANK PLC.</span>
              <div className={styles.logoDivider} />
              <span className={styles.logoSub}>ALWAYS AT YOUR SERVICE</span>
            </div>
          </TransitionLink>

          {/* Desktop Nav */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <TransitionLink
                key={item.label}
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                onClick={handleNavClick}
              >
                {item.label}
              </TransitionLink>
            ))}

            {/* Money Solutions Mega Menu */}
            <div
              className={styles.megaWrapper}
              onMouseEnter={() => setMoneyOpen(true)}
              onMouseLeave={() => setMoneyOpen(false)}
            >
              <button className={`${styles.navLink} ${styles.megaTrigger}`}>
                Money Solutions <ChevronDown size={14} className={moneyOpen ? styles.chevronOpen : ''} />
              </button>
              {moneyOpen && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuInner}>
                    {moneyLinks.map((link) => (
                      <TransitionLink key={link.href} href={link.href} className={styles.megaItem} onClick={handleNavClick}>
                        <span className={styles.megaItemIcon}>{link.icon}</span>
                        {link.label}
                      </TransitionLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
                      <TransitionLink key={link.href} href={link.href} className={styles.megaItem} onClick={handleNavClick}>
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
            <TransitionLink href="/rates" className={styles.utilLink} onClick={handleNavClick}>Rates</TransitionLink>
            <TransitionLink href="/contact" className={styles.utilLink} onClick={handleNavClick}>Contact Us</TransitionLink>
            <TransitionLink href="/contact" className={`btn btn-glow btn-sm ${styles.ctaBtn}`} onClick={handleNavClick}>
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
              <span className={styles.mobileSectionLabel}>Money Solutions</span>
              <TransitionLink href="/loans" className={styles.mobileLink} onClick={handleNavClick}>Loan Products</TransitionLink>
              <TransitionLink href="/credit" className={styles.mobileLink} onClick={handleNavClick}>Open an Account</TransitionLink>
            </div>

            <div className={styles.mobileSection}>
              <span className={styles.mobileSectionLabel}>Company</span>
              {aboutLinks.map((link) => (
                <TransitionLink key={link.href} href={link.href} className={styles.mobileLink} onClick={handleNavClick}>
                  {link.label}
                </TransitionLink>
              ))}
            </div>

            <div className={styles.mobileSection}>
              <span className={styles.mobileSectionLabel}>Tools & Support</span>
              <TransitionLink href="/calculators" className={styles.mobileLink} onClick={handleNavClick}>Calculators</TransitionLink>
              <TransitionLink href="/ussd-guide" className={styles.mobileLink} onClick={handleNavClick}>USSD Guide</TransitionLink>
              <TransitionLink href="/branches" className={styles.mobileLink} onClick={handleNavClick}>Find a Branch</TransitionLink>
              <TransitionLink href="/rates" className={styles.mobileLink} onClick={handleNavClick}>Current Rates</TransitionLink>
              <TransitionLink href="/security-tips" className={styles.mobileLink} onClick={handleNavClick}>Security Tips</TransitionLink>
              <TransitionLink href="/contact" className={styles.mobileLink} onClick={handleNavClick}>Contact Us</TransitionLink>
            </div>

            <div className={styles.mobileCta}>
              <TransitionLink href="/contact" className="btn btn-glow btn-lg" style={{ width: '100%', justifyContent: 'center' }} onClick={handleNavClick}>
                Open an Account <ArrowRight size={18} />
              </TransitionLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

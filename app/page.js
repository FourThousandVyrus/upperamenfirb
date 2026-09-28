'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ScrollReveal from './components/ScrollReveal';
import AnimatedCounter from './components/AnimatedCounter';
import TransitionLink from './components/RouteTransition/TransitionLink';
import OrganicDivider from './components/OrganicDivider';

import {
  Shield,
  Clock,
  Users,
  Building2,
  Briefcase,
  Banknote,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  MapPin,
  Smartphone,
  Check,
  Handshake,
  Zap,
  Heart,
} from 'lucide-react';

/* ── Hand-drawn SVG elements ── */
function HandDrawnArrow({ className }) {
  return (
    <svg className={className} width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 34C20 28 45 12 80 14C95 15 108 20 114 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0" />
      <path d="M106 12L116 17L108 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HandDrawnCircle({ className }) {
  return (
    <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 6C42 5 54 14 55 28C56 40 46 54 32 55C18 56 5 44 5 30C5 16 16 7 30 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  );
}

function HandDrawnUnderline({ className }) {
  return (
    <svg className={className} width="280" height="16" viewBox="0 0 280 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C40 4 80 14 120 8C160 2 200 12 240 6C258 3 272 8 278 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function HandDrawnStar({ className }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.5 9L22 9.5L16 14.5L18 22L12 17.5L6 22L8 14.5L2 9.5L9.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

const testimonialsData = [
  {
    quote: "Upper Amenfi Community Bank helped me grow my cocoa business from 2 acres to 15 acres. Their loan process is quick and the staff truly care about your success.",
    name: 'Kwame Asante',
    role: 'Cocoa Farmer, Sefwi Wiawso',
    img: '/images/avatar_kwame.webp',
    tint: 'cream',
  },
  {
    quote: "As a market trader, I needed a bank that understands my business. Their susu collection service and quick loans have been a lifeline for my family.",
    name: 'Abena Mensah',
    role: 'Market Trader, Wassa Ankwaso',
    img: '/images/avatar_abena.webp',
    tint: 'lavender',
  },
  {
    quote: "The agency banking service brings the bank to our village. I no longer have to travel hours to access my savings. This is truly banking for the people.",
    name: 'Yaw Boateng',
    role: 'Teacher, Enchi',
    img: '/images/avatar_yaw.webp',
    tint: 'mint',
  },
  {
    quote: "I've been with UACB for over 20 years. They supported my children's education through their salary advance loans. I trust them completely.",
    name: 'Grace Owusu',
    role: 'Nurse, Bogoso',
    img: '/images/avatar_grace.webp',
    tint: 'cream',
  },
  {
    quote: "The USSD banking makes everything easy. I can check my balance and transfer money even without internet. Very convenient for us in the rural areas.",
    name: 'Kofi Adjei',
    role: 'Shop Owner, Samreboi',
    img: '/images/avatar_kofi.webp',
    tint: 'lavender',
  },
  {
    quote: "When no other bank would open a branch here, UACB came. Now our community has access to proper banking for the first time.",
    name: 'Ama Darko',
    role: 'Chief, Dadieso',
    img: '/images/avatar_ama.webp',
    tint: 'mint',
  },
];

const photostripData = [
  { src: '/images/branch_strip.webp', caption: 'Our Branches' },
  { src: '/images/community_strip.webp', caption: 'Our Community' },
  { src: '/images/people_strip.webp', caption: 'Our People' },
  { src: '/images/impact_strip.webp', caption: 'Our Impact' },
  { src: '/images/customers_strip.webp', caption: 'Our Customers' },
];

/* ── Main Homepage ── */
export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        hero.style.setProperty('--mouse-x', x.toString());
        hero.style.setProperty('--mouse-y', y.toString());
      });
    };

    hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — OVERSIZED TYPOGRAPHY HERO
          ═══════════════════════════════════════════ */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLayout}>
            {/* Left: Massive type */}
            <div className={styles.heroText}>
              <h1 className={styles.heroHeadline}>
                Banking Local<br />
                is Banking<br />
                <span className={styles.heroAccent}>Better.</span>
              </h1>

              <HandDrawnUnderline className={styles.heroUnderline} />

              <div className={styles.heroCtas}>
                <TransitionLink href="/contact" className="btn btn-glow btn-lg">
                  Open an Account
                  <ArrowRight size={18} />
                </TransitionLink>
                <TransitionLink href="/products-services" className="btn btn-outline-light btn-lg">
                  Explore Products
                </TransitionLink>
              </div>

              {/* Inline stat chips */}
              <div className={styles.heroStats}>
                <div className={styles.heroStatChip}>
                  <AnimatedCounter end={39} suffix="+" />
                  <span>Years</span>
                </div>
                <div className={styles.heroStatDivider} />
                <div className={styles.heroStatChip}>
                  <AnimatedCounter end={19} />
                  <span>Branches</span>
                </div>
                <div className={styles.heroStatDivider} />
                <div className={styles.heroStatChip}>
                  <AnimatedCounter end={875} prefix="₵" suffix="M+" />
                  <span>Deposits</span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Curved Visual with Floating Dashboard Card */}
            <div className={styles.heroVisual}>
              <div className={styles.heroImageWrap}>
                <div className={styles.heroImageFrame}>
                  <Image
                    sizes="(max-width: 900px) 100vw, 55vw"
                    src="/images/best_rural_bank_branded.webp"
                    alt="Upper Amenfi Rural Bank — Banking Local is Banking Better"
                    width={800}
                    height={850}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                  />
                  <div className={styles.heroImageOverlay} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — BENTO PRODUCT GRID
          ═══════════════════════════════════════════ */}
      <section className={styles.productsSection}>
        <div className="container-wide">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className="section-eyebrow">Our Services</span>
              <h2 className="section-title">Financial Solutions<br />That Work For You</h2>
              <p className="section-desc centered">
                From savings accounts to business loans, flexible products designed for individuals and businesses in our communities.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.bentoGrid}>
            {/* Large card — Current Account */}
            <ScrollReveal delay={0} className={styles.bentoLarge}>
              <div className={`${styles.bentoCard} ${styles.bentoCardDark}`}>
                <div className={styles.bentoCardContent}>
                  <div className={styles.bentoCardIcon}>
                    <Shield size={28} />
                  </div>
                  <h3>Current Account</h3>
                  <p>Operated by individuals, sole proprietary concerns, partnership firms, companies, clubs, and organizations with regular transactions.</p>
                  <TransitionLink href="/products-services" className={styles.bentoLink}>
                    Learn More <ArrowRight size={16} />
                  </TransitionLink>
                </div>
                <div className={styles.bentoCardImage}>
                  <Image sizes="(max-width: 900px) 100vw, 40vw"
                    src="/images/stock/stock-card-payment.webp"
                    alt="Professional managing finances"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Small card — Fixed Deposit */}
            <ScrollReveal delay={100} className={styles.bentoSmall}>
              <div className={`${styles.bentoCard} ${styles.bentoCardGold}`}>
                <div className={styles.bentoCardIcon}>
                  <Banknote size={26} />
                </div>
                <h3>Fixed Deposit</h3>
                <p>A distinct savings account that pays a fixed rate of interest. Highly competitive rates from <strong>14% to 18% p.a.</strong></p>
                <TransitionLink href="/products-services" className={styles.bentoLink}>
                  Learn More <ArrowRight size={16} />
                </TransitionLink>
              </div>
            </ScrollReveal>

            {/* Small card — Susu Accounts */}
            <ScrollReveal delay={200} className={styles.bentoSmall}>
              <div className={`${styles.bentoCard} ${styles.bentoCardGreen}`}>
                <div className={styles.bentoCardIcon}>
                  <Users size={26} />
                </div>
                <h3>Susu Accounts</h3>
                <p>Mobilization of cash savings at a defined daily or weekly minimum. Perfect for traders, market women, and farmers.</p>
                <TransitionLink href="/products-services" className={styles.bentoLink}>
                  Learn More <ArrowRight size={16} />
                </TransitionLink>
              </div>
            </ScrollReveal>

            {/* Tiny card — USSD quick access */}
            <ScrollReveal delay={300} className={styles.bentoTiny}>
              <div className={`${styles.bentoCard} ${styles.bentoCardPurple}`}>
                <Smartphone size={22} className={styles.bentoTinyIcon} />
                <h4>USSD Banking</h4>
                <p className={styles.bentoTinyDial}>*992#</p>
                <p className={styles.bentoTinyDesc}>No internet needed</p>
                <TransitionLink href="/ussd-guide" className={styles.bentoLink}>
                  Learn How <ArrowRight size={14} />
                </TransitionLink>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <OrganicDivider color="var(--bg-gold-tint)" variant="organic" />

      {/* ═══════════════════════════════════════════
          SECTION 4 — WHY WE'RE DIFFERENT
          ═══════════════════════════════════════════ */}
      <section className={styles.differentSection}>
        <div className="container-wide">
          <div className={styles.differentLayout}>
            <div className={styles.differentText}>
              <ScrollReveal>
                <span className="section-eyebrow">Why Choose Us</span>
                <h2 className="section-title">Not Just a Bank.<br />A Community Partner.</h2>
              </ScrollReveal>

              <div className={styles.differentItems}>
                {[
                  {
                    num: '01',
                    icon: <Zap size={20} />,
                    title: 'Decisions in 24 Hours',
                    desc: 'No endless paperwork. Our streamlined process means you get answers fast when you need them most.',
                  },
                  {
                    num: '02',
                    icon: <Handshake size={20} />,
                    title: 'No Hidden Fees',
                    desc: 'Transparent pricing on every product. What you see is what you pay — the way banking should be.',
                  },
                  {
                    num: '03',
                    icon: <Heart size={20} />,
                    title: 'Community First',
                    desc: 'Every cedi deposited stays in our communities. We invest in the people who trust us with their future.',
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 120}>
                    <div className={styles.differentItem}>
                      <div className={styles.differentItemNum}>{item.num}</div>
                      <div className={styles.differentItemContent}>
                        <div className={styles.differentItemIcon}>{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal className={styles.differentVisual}>
              <div className={styles.differentImageWrap}>
                <Image sizes="(max-width: 900px) 100vw, 42vw"
                  src="/images/stock/stock-community.webp"
                  alt="Community gathering in Ghana"
                  width={700}
                  height={800}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Hand-drawn star accents */}
                <HandDrawnStar className={styles.differentStar1} />
                <HandDrawnStar className={styles.differentStar2} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — OUR STORY TIMELINE
          ═══════════════════════════════════════════ */}
      <section className={styles.timelineSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className="section-eyebrow">Our Journey</span>
              <h2 className="section-title" style={{ color: 'white' }}>39 Years of Growing Together</h2>
            </div>
          </ScrollReveal>

          <div className={styles.timeline}>
            {[
              {
                year: '1987',
                title: 'Founded',
                desc: 'Upper Amenfi Rural Bank was incorporated on 13th August 1987 and commenced operations on 2nd September 1994.',
                accent: 'green',
              },
              {
                year: '2000',
                title: '10 Branches',
                desc: 'Expanded to 10 branches across the Western Region, bringing banking closer to rural communities.',
                accent: 'gold',
              },
              {
                year: '2015',
                title: 'Digital Banking',
                desc: 'Launched USSD banking (*992#) enabling millions of transactions without internet access.',
                accent: 'blue',
              },
              {
                year: '2023',
                title: 'Re-Registration',
                desc: 'Re-registered under the Companies Act 2019 as Upper Amenfi Community Bank PLC with new Registration Number PLO00080223.',
                accent: 'purple',
              },
              {
                year: '2025',
                title: 'GH¢670M Assets',
                desc: 'Total assets grew to GH¢669.7M with deposits of GH¢614.7M and net profit of GH¢18.1M.',
                accent: 'gold',
              },
              {
                year: '2026',
                title: 'GH¢931M Assets',
                desc: 'Record-breaking year — total assets reached GH¢930.7M, deposits GH¢875M, with 5,401 employees across 19 locations.',
                accent: 'green',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className={styles.timelineItem}>
                <div className={`${styles.timelineDot} ${styles[`timelineDot${item.accent.charAt(0).toUpperCase() + item.accent.slice(1)}`]}`} />
                <div className={styles.timelineCard}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <OrganicDivider color="var(--bg-paper)" variant="torn" />

      {/* ═══════════════════════════════════════════
          SECTION 6 — TESTIMONIALS
          ═══════════════════════════════════════════ */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className="section-eyebrow">What People Say</span>
              <h2 className="section-title">Trusted by Thousands</h2>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.testimonialRow}>
          <div className={styles.testimonialTrack}>
            {testimonialsData.concat(testimonialsData).map((t, i) => (
              <div key={i} className={`${styles.testimonialCard} ${styles[`testTint${t.tint.charAt(0).toUpperCase() + t.tint.slice(1)}`]}`}>
                <div className={styles.quoteStars}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} fill="currentColor" />
                  ))}
                </div>
                <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.quotePerson}>
                  <div className={styles.quoteAvatar}>
                    <Image sizes="56px" src={t.img} alt={t.name} width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div className={styles.quoteName}>{t.name}</div>
                    <div className={styles.quoteRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — COMMUNITY PHOTO STRIP
          ═══════════════════════════════════════════ */}
      <section className={styles.photoStrip}>
        <div className={styles.photoStripTrack}>
          {photostripData.concat(photostripData).map((photo, i) => (
            <div key={i} className={styles.photoCard}>
              <div className={styles.photoCardInner}>
                <Image sizes="(max-width: 768px) 70vw, 340px"
                  src={photo.src}
                  alt={photo.caption}
                  width={500}
                  height={350}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span className={styles.photoCaption}>{photo.caption}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — FINAL CTA
          ═══════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaMesh} />
        <div className={`${styles.ctaFloater} ${styles.ctaFloater1}`} />
        <div className={`${styles.ctaFloater} ${styles.ctaFloater2}`} />

        <div className="container">
          <ScrollReveal variant="scale">
            <div className={styles.ctaInner}>
              <HandDrawnStar className={styles.ctaStar1} />
              <HandDrawnStar className={styles.ctaStar2} />
              <h2>Start Your Journey Today</h2>
              <p className={styles.ctaDesc}>
                Join thousands of customers who trust Upper Amenfi Community Bank for their financial future.
              </p>
              <div className={styles.ctaButtons}>
                <TransitionLink href="/contact" className="btn btn-glow btn-lg">
                  Open an Account <ArrowRight size={18} />
                </TransitionLink>
                <TransitionLink href="/branches" className="btn btn-outline-light btn-lg">
                  Find a Branch <MapPin size={18} />
                </TransitionLink>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

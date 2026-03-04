'use client';
import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ScrollReveal from './components/ScrollReveal';
import AnimatedCounter from './components/AnimatedCounter';
import TransitionLink from './components/RouteTransition/TransitionLink';
import WaveDivider from './components/WaveDivider';
import TiltCard from './components/TiltCard';
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
  Landmark,
  Smartphone,
} from 'lucide-react';

export default function Home() {
  const heroRef = useRef(null);
  const orbRefs = useRef([]);

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

        orbRefs.current.forEach((orb, i) => {
          if (!orb) return;
          const depth = [30, 20, 40][i];
          orb.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        });
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
      {/* ===== ANIMATED HERO ===== */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroMesh}>
          <div ref={el => orbRefs.current[0] = el} className={`${styles.heroOrb} ${styles.heroOrb1}`} />
          <div ref={el => orbRefs.current[1] = el} className={`${styles.heroOrb} ${styles.heroOrb2}`} />
          <div ref={el => orbRefs.current[2] = el} className={`${styles.heroOrb} ${styles.heroOrb3}`} />
          <div className={styles.heroGrid} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <Shield size={14} />
              Licensed by Bank of Ghana
            </div>
            <h1>
              The Future of<br />
              Rural Banking.<br />
              <span>Right Here.</span>
            </h1>
            <p className={styles.heroDesc}>
              37 years of trust. 18 branches across 3 regions. Empowering
              communities with modern, secure financial services.
            </p>
            <div className={styles.heroCtas}>
              <TransitionLink href="/contact" className="btn btn-glow btn-lg">
                Open an Account <ArrowRight size={18} />
              </TransitionLink>
              <TransitionLink href="/products-services" className="btn btn-outline-light btn-lg">
                Explore Products
              </TransitionLink>
            </div>
          </div>

          <div className={styles.heroVisual}>
            {/* Main Image */}
            <div className={styles.heroMainImage}>
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Banking professional assisting a customer"
                width={560}
                height={460}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>

            {/* Secondary Overlay Image */}
            <div className={styles.heroSecondImage}>
              <Image
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&q=80"
                alt="Community gathering in Ghana"
                width={220}
                height={160}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>

            {/* Floating Card — Years */}
            <div className={`${styles.floatCard} ${styles.floatCard1}`}>
              <div className={styles.floatCardIcon}>
                <Clock size={18} />
              </div>
              <div className={styles.floatCardValue}><AnimatedCounter end={37} suffix="+" /></div>
              <div className={styles.floatCardLabel}>Years of Trust</div>
            </div>

            {/* Floating Card — Branches */}
            <div className={`${styles.floatCard} ${styles.floatCard2}`}>
              <div className={styles.floatCardIcon}>
                <MapPin size={18} />
              </div>
              <div className={styles.floatCardValue}><AnimatedCounter end={18} /></div>
              <div className={styles.floatCardLabel}>Branches • 5 Regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP + AWARDS (merged) ===== */}
      <section className={styles.trustStrip}>
        <div className="container">
          <div className={styles.trustGrid}>
            {[
              { icon: <Clock size={22} />, end: 37, suffix: '+', label: 'Years of Service' },
              { icon: <Building2 size={22} />, end: 18, label: 'Branches Nationwide' },
              { icon: <MapPin size={22} />, end: 5, label: 'Regions Covered' },
              { icon: <TrendingUp size={22} />, end: 588, prefix: '₵', suffix: 'M+', label: 'Total Deposits' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className={styles.trustValue}>
                      {stat.prefix || ''}<AnimatedCounter end={stat.end} suffix={stat.suffix || ''} />
                    </div>
                    <div className={styles.trustLabel}>{stat.label}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Awards row merged in */}
          <div className={styles.awardsRow}>
            <div className={styles.awardItem}>
              <Award size={16} className={styles.awardIcon} /> Best Rural Bank 2025
            </div>
            <div className={styles.awardItem}>
              <Shield size={16} className={styles.awardIcon} /> Bank of Ghana Licensed
            </div>
            <div className={styles.awardItem}>
              <Landmark size={16} className={styles.awardIcon} /> Ghana Deposit Protection
            </div>
            <div className={styles.awardItem}>
              <TrendingUp size={16} className={styles.awardIcon} /> 37+ Years of Growth
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="var(--bg-white)" />

      {/* ===== PRODUCT OVERVIEW CARDS ===== */}
      <section className={styles.productsSection}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-eyebrow">Our Services</span>
              <h2 className="section-title">Financial Solutions That Work For You</h2>
              <p className="section-desc centered">
                From savings accounts to business loans, we offer flexible products designed for individuals and businesses in our communities.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.productsGrid}>
            <ScrollReveal delay={0}>
              <TiltCard className={styles.productCard}>
                <div className={styles.productCardImage}>
                  <Image
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75"
                    alt="Professional woman managing finances"
                    width={600}
                    height={360}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.productCardIcon}>
                  <Shield size={26} />
                </div>
                <h3>Personal Banking</h3>
                <p>Save, grow, and protect your money with flexible savings, current accounts, fixed deposits, and susu collections.</p>
                <TransitionLink href="/products-services" className={styles.productCardLink}>
                  Learn More <ArrowRight size={16} />
                </TransitionLink>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <TiltCard className={styles.productCard}>
                <div className={styles.productCardImage}>
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=75"
                    alt="Business professional in meeting"
                    width={600}
                    height={360}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.productCardIcon}>
                  <Briefcase size={26} />
                </div>
                <h3>Business Banking</h3>
                <p>Capital and tools to accelerate your growth with commercial loans, overdraft facilities, and agency banking.</p>
                <TransitionLink href="/products-services" className={styles.productCardLink}>
                  Learn More <ArrowRight size={16} />
                </TransitionLink>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <TiltCard className={styles.productCard}>
                <div className={styles.productCardImage}>
                  <Image
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=75"
                    alt="Loan documents being signed"
                    width={600}
                    height={360}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.productCardIcon}>
                  <Banknote size={26} />
                </div>
                <h3>Loans & Credit</h3>
                <p>Get approvals in under 3 hours. Easy loans, salary loans, microfinance, and specialized credit solutions.</p>
                <TransitionLink href="/loans" className={styles.productCardLink}>
                  Learn More <ArrowRight size={16} />
                </TransitionLink>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY IMPACT ===== */}
      <section className={styles.impactSection}>
        <div className={styles.impactBg}>
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=70"
            alt="Community celebration in Ghana"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.impactOverlay} />
        </div>

        <div className="container">
          <div className={styles.impactContent}>
            <ScrollReveal>
              <div className="text-center">
                <span className="section-eyebrow" style={{ color: 'var(--accent-300)' }}>Community Impact</span>
                <h2 style={{ color: 'white', marginBottom: '12px' }}>
                  Building Stronger Communities
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '0 auto' }}>
                  Every deposit, every loan, and every transaction contributes to the growth of our communities.
                </p>
              </div>
            </ScrollReveal>

            <div className={styles.impactGrid}>
              {[
                { value: 275, suffix: 'K+', label: 'Jobs Created Through Lending' },
                { value: 588, prefix: '₵', suffix: 'M', label: 'Total Customer Deposits' },
                { value: 37, suffix: '+', label: 'Years Serving Communities' },
                { value: 18, label: 'Branches Across Ghana' },
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className={styles.impactStat}>
                    <div className={styles.impactValue}>
                      {stat.prefix || ''}
                      <AnimatedCounter end={stat.value} suffix={stat.suffix || ''} />
                    </div>
                    <div className={styles.impactLabel}>{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="var(--bg-cream)" />

      {/* ===== TESTIMONIALS — INFINITE TICKER ===== */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-eyebrow">What People Say</span>
              <h2 className="section-title">Trusted by Thousands</h2>
            </div>
          </ScrollReveal>
        </div>

        {/* Ticker — items are duplicated for seamless infinite scroll */}
        <div className={styles.testimonialTicker}>
          {[
            {
              quote: "Upper Amenfi Rural Bank helped me grow my cocoa business from 2 acres to 15 acres. Their loan process is quick and the staff truly care about your success.",
              name: 'Kwame Asante',
              role: 'Cocoa Farmer, Sefwi Wiawso',
              img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=75',
            },
            {
              quote: "As a market trader, I needed a bank that understands my business. Their susu collection service and quick loans have been a lifeline for my family.",
              name: 'Abena Mensah',
              role: 'Market Trader, Asankrangwa',
              img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=75',
            },
            {
              quote: "The agency banking service brings the bank to our village. I no longer have to travel hours to access my savings. This is truly banking for the people.",
              name: 'Yaw Boateng',
              role: 'Teacher, Enchi',
              img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=75',
            },
            {
              quote: "I've been with UARB for over 20 years. They supported my children's education through their salary advance loans. I trust them completely.",
              name: 'Grace Owusu',
              role: 'Nurse, Bogoso',
              img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=75',
            },
            {
              quote: "The USSD banking makes everything easy. I can check my balance and transfer money even without internet. Very convenient for us in the rural areas.",
              name: 'Kofi Adjei',
              role: 'Shop Owner, Samreboi',
              img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=75',
            },
            {
              quote: "When no other bank would open a branch here, UARB came. Now our community has access to proper banking for the first time.",
              name: 'Ama Darko',
              role: 'Chief, Dadieso',
              img: 'https://images.unsplash.com/photo-1546961342-ea5f71b193f3?w=100&q=75',
            },
          ].concat([
            {
              quote: "Upper Amenfi Rural Bank helped me grow my cocoa business from 2 acres to 15 acres. Their loan process is quick and the staff truly care about your success.",
              name: 'Kwame Asante',
              role: 'Cocoa Farmer, Sefwi Wiawso',
              img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=75',
            },
            {
              quote: "As a market trader, I needed a bank that understands my business. Their susu collection service and quick loans have been a lifeline for my family.",
              name: 'Abena Mensah',
              role: 'Market Trader, Asankrangwa',
              img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=75',
            },
            {
              quote: "The agency banking service brings the bank to our village. I no longer have to travel hours to access my savings. This is truly banking for the people.",
              name: 'Yaw Boateng',
              role: 'Teacher, Enchi',
              img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=75',
            },
            {
              quote: "I've been with UARB for over 20 years. They supported my children's education through their salary advance loans. I trust them completely.",
              name: 'Grace Owusu',
              role: 'Nurse, Bogoso',
              img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=75',
            },
            {
              quote: "The USSD banking makes everything easy. I can check my balance and transfer money even without internet. Very convenient for us in the rural areas.",
              name: 'Kofi Adjei',
              role: 'Shop Owner, Samreboi',
              img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=75',
            },
            {
              quote: "When no other bank would open a branch here, UARB came. Now our community has access to proper banking for the first time.",
              name: 'Ama Darko',
              role: 'Chief, Dadieso',
              img: 'https://images.unsplash.com/photo-1546961342-ea5f71b193f3?w=100&q=75',
            },
          ]).map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.quoteStars}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.quotePerson}>
                <div className={styles.quoteAvatar}>
                  <Image src={t.img} alt={t.name} width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div className={styles.quoteName}>{t.name}</div>
                  <div className={styles.quoteRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== QUICK DIGITAL ACCESS ===== */}
      <section className={styles.digitalBanner}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.digitalBannerInner}>
              <div className={styles.digitalBannerContent}>
                <Smartphone size={28} className={styles.digitalBannerIcon} />
                <div>
                  <h3>Bank From Any Phone</h3>
                  <p>No internet needed. Dial <strong>*992#</strong> to check balances, transfer funds, and buy airtime instantly.</p>
                </div>
              </div>
              <TransitionLink href="/ussd-guide" className="btn btn-glow btn-md">
                Learn How <ArrowRight size={16} />
              </TransitionLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaMesh} />
        <div className={`${styles.ctaFloater} ${styles.ctaFloater1}`} />
        <div className={`${styles.ctaFloater} ${styles.ctaFloater2}`} />

        <div className="container">
          <ScrollReveal variant="scale">
            <div className={styles.ctaInner}>
              <h2>Start Your Journey Today</h2>
              <p className={styles.ctaDesc}>
                Join thousands of customers who trust Upper Amenfi Rural Bank for their financial future.
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

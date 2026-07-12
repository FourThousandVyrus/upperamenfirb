'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Clock, Banknote, Users, TrendingUp, Heart, Truck,
  CheckCircle2, Phone, ArrowRight, ChevronRight, Zap,
  Briefcase, Shield, Landmark, MapPin,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import OrganicDivider from '../components/OrganicDivider';
import styles from './loans.module.css';

/* ── Loan product data ── */
const loanProducts = [
  {
    id: 'susu',
    icon: <Users size={24} />,
    title: 'Susu Loan',
    tagline: 'Grow Your Petty Trade',
    color: 'green',
    badge: null,
    desc: 'Designed for petty traders who want to expand their business. Built around your Susu savings history, this loan lets you borrow and repay on a schedule that matches your cash flow — daily or weekly.',
    who: 'Petty traders, market women, small-scale farmers with active Susu accounts.',
  },
  {
    id: 'commercial',
    icon: <Briefcase size={24} />,
    title: 'Commercial Loans & Overdraft',
    tagline: 'Fuel Your Business Growth',
    color: 'gold',
    badge: null,
    desc: 'Working capital and expansion financing for businesses of all sizes. We offer both term loans and overdraft facilities to individuals, corporate bodies, churches, societies, and enterprises — because growing together is our mission.',
    who: 'Current account holders needing capital for business expansion.',
  },
  {
    id: 'salary',
    icon: <Landmark size={24} />,
    title: 'Salary Loans & Overdraft',
    tagline: 'For Salaried Workers',
    color: 'blue',
    badge: null,
    desc: 'Pre-qualified loans for salaried professionals who channel their income through UACB. Repayment is automatic — deducted directly from your salary. No stress, no reminders, no hassle.',
    who: 'Salaried workers with salary accounts at UACB.',
  },
  {
    id: 'easy',
    icon: <Zap size={24} />,
    title: 'Easy Loan',
    tagline: 'Approved in Under 3 Hours',
    color: 'gold',
    badge: 'Under 3 Hours',
    desc: 'The fastest loan at UACB. If you are a government employee on the Controller and Accountant General Department\'s payroll, you can apply and receive funds the same day — often in under three hours.',
    who: 'Government employees on the CAGD payroll.',
  },
  {
    id: 'funeral',
    icon: <Heart size={24} />,
    title: 'Funeral & Social Loans',
    tagline: 'For Life\'s Important Moments',
    color: 'purple',
    badge: null,
    desc: 'When life calls for a gathering — whether a wedding ceremony, funeral rites, or community celebration — this loan provides the funds you need with compassionate repayment terms and low interest rates.',
    who: 'Any customer with a savings account at UACB.',
  },
  {
    id: 'microfinance',
    icon: <Users size={24} />,
    title: 'Micro Finance Loans',
    tagline: 'Group Lending, Bigger Impact',
    color: 'green',
    badge: null,
    desc: 'Grow your micro business through group-based lending. Form a solidarity group of 5 to 10 or more members, save together, and access affordable capital. Members serve as guarantors for each other, making this a community-powered path to financial growth.',
    who: 'Groups of men and women owning small or micro enterprises.',
  },
  {
    id: 'transport',
    icon: <Truck size={24} />,
    title: 'Transport Loans',
    tagline: 'Own Your Vehicle',
    color: 'blue',
    badge: null,
    desc: 'Whether you are already in the transport business or looking to own a vehicle for commercial purposes, our transport loans provide the financing you need with flexible terms and competitive rates.',
    who: 'Transport business owners and aspiring vehicle owners.',
  },
];

/* ── Microfinance eligibility ── */
const eligibility = [
  'Must be at least 18 years old and in good mental health',
  'Must participate in legal economic activities with sufficient cash flow for loan repayment',
  'Must reside in the community for a minimum of six months',
  'Must not be affiliated with any other Credit Savings Association (CSA) of UACB or any other financial institution',
  'Must be accepted by members and belong to a Solidarity Group of the CSA',
  'Members of one family cannot form one group or belong to the same solidarity group',
  'Women will predominate among group members — men must not exceed 20% of total members',
];

/* ── Hand-drawn SVG ── */
function HandDrawnUnderline({ className }) {
  return (
    <svg className={className} width="200" height="14" viewBox="0 0 200 14" fill="none">
      <path d="M2 10C30 4 60 12 90 7C120 2 150 10 180 6C190 4 196 7 198 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function HandDrawnStar({ className }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.5 9L22 9.5L16 14.5L18 22L12 17.5L6 22L8 14.5L2 9.5L9.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function LoansPage() {
  const [expandedLoan, setExpandedLoan] = useState(null);

  return (
    <>
      {/* ═══ CINEMATIC HERO ═══ */}
      <div className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1600&q=80"
          alt="Business growth and capital"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className="container">
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <span>Loan Products</span>
            </div>
            <h1>Capital for<br />the <span className={styles.heroAccent}>Builders</span></h1>
            <HandDrawnUnderline className={styles.heroUnderline} />
            <p className={styles.heroDesc}>
              We understand that your business is unique, and you need solutions
              that fit your long-term financial and non-financial goals. That&apos;s why
              we offer seven distinct loan products.
            </p>
            <div className={styles.heroChips}>
              <div className={styles.heroChip}>
                <Zap size={16} />
                <span>Same-Day Approval</span>
              </div>
              <div className={styles.heroChip}>
                <Shield size={16} />
                <span>7 Loan Products</span>
              </div>
              <div className={styles.heroChip}>
                <Phone size={16} />
                <span>+233 509 314 527</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ LOAN PRODUCTS ═══ */}
      <section className={styles.section}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className="section-eyebrow">Loan Products</span>
              <h2 className="section-title">Financing That Fits<br />Your Goals</h2>
              <p className="section-desc centered">
                From same-day Easy Loans to group microfinance — we have the
                right product for every stage of your financial journey.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.loanGrid}>
            {loanProducts.map((loan, i) => (
              <ScrollReveal key={loan.id} delay={i * 60}>
                <div
                  className={`${styles.loanCard} ${styles[`loan${loan.color.charAt(0).toUpperCase() + loan.color.slice(1)}`]}`}
                  onClick={() => setExpandedLoan(expandedLoan === loan.id ? null : loan.id)}
                >
                  {loan.badge && (
                    <div className={styles.loanBadge}>{loan.badge}</div>
                  )}
                  <div className={styles.loanCardHeader}>
                    <div className={`${styles.loanIcon} ${styles[`loanIcon${loan.color.charAt(0).toUpperCase() + loan.color.slice(1)}`]}`}>
                      {loan.icon}
                    </div>
                    <div>
                      <h3>{loan.title}</h3>
                      <span className={styles.loanTagline}>{loan.tagline}</span>
                    </div>
                  </div>
                  <p className={styles.loanDesc}>{loan.desc}</p>
                  <div className={styles.loanWho}>
                    <span className={styles.loanWhoLabel}>Who it&apos;s for:</span> {loan.who}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <OrganicDivider color="var(--bg-gold-tint)" variant="torn" />

      {/* ═══ MICROFINANCE DEEP-DIVE ═══ */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.splitLayout}>
            <div>
              <ScrollReveal>
                <span className="section-eyebrow">Microfinance</span>
                <h2 className="section-title">Group Lending for<br />Small Enterprises</h2>
                <p style={{ marginBottom: 24 }}>
                  Our microfinance program empowers small business owners through
                  group-based lending. Form a solidarity group, save together, and
                  access affordable capital to grow your micro business.
                </p>
              </ScrollReveal>

              <div className={styles.eligibilityList}>
                <h4>Eligibility Criteria</h4>
                <ul>
                  {eligibility.map((e, i) => (
                    <ScrollReveal key={i} delay={i * 60}>
                      <li className={styles.eligibilityItem}>
                        <span className={styles.eligibilityIcon}><CheckCircle2 size={15} /></span>
                        <span>{e}</span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>
            </div>

            <ScrollReveal className={styles.splitVisual}>
              <div className={styles.splitImageWrap}>
                <Image
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80"
                  alt="Community group meeting"
                  width={800}
                  height={600}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <HandDrawnStar className={styles.splitStar1} />
              <HandDrawnStar className={styles.splitStar2} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ HOW TO APPLY ═══ */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.splitLayout}>
            <div>
              <ScrollReveal>
                <span className="section-eyebrow">Get Started</span>
                <h2 className="section-title">How to Apply</h2>
                <p style={{ marginBottom: 32 }}>
                  Getting a loan is simple. Follow these steps and our team will
                  guide you through every stage of the process.
                </p>
              </ScrollReveal>

              <div className={styles.stepsList}>
                {[
                  {
                    num: '1',
                    title: 'Visit Any Branch',
                    desc: 'Walk into any of our 19 branches and speak with a loan officer. They will help you choose the right product.',
                  },
                  {
                    num: '2',
                    title: 'Submit Your Documents',
                    desc: 'Complete the loan application form and provide two passport photographs, three recent payslips (for salary/easy loans), and a valid photo ID.',
                  },
                  {
                    num: '3',
                    title: 'Assessment & Approval',
                    desc: 'Our team reviews your application. Easy Loans are approved same-day — often in under three hours.',
                  },
                  {
                    num: '4',
                    title: 'Receive Your Funds',
                    desc: 'Once approved, funds are disbursed directly to your account. No delays, no hidden fees.',
                  },
                ].map((s, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className={styles.stepCard}>
                      <div className={styles.stepNum}>{s.num}</div>
                      <div>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <ScrollReveal className={styles.splitVisual}>
              <div className={styles.contactCard}>
                <h3>Need Help?</h3>
                <p>
                  Our loan officers are ready to assist you. Call us directly or
                  visit any of our 19 branches across Ghana.
                </p>
                <div className={styles.contactPhones}>
                  <a href="tel:+233509314527" className={styles.contactPhone}>
                    <Phone size={16} /> +233 (0) 509 314 527
                  </a>
                  <a href="tel:+233553498729" className={styles.contactPhone}>
                    <Phone size={16} /> +233 (0) 553 498 729
                  </a>
                </div>
                <Link href="/branches" className="btn btn-gold btn-md" style={{ marginTop: 24 }}>
                  Find a Branch <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaMesh} />
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaInner}>
              <h2>Ready to Apply?</h2>
              <p className={styles.ctaDesc}>
                Visit any of our 19 branches or call us today. Our loan officers
                are ready to help you find the right financing.
              </p>
              <div className={styles.ctaButtons}>
                <a href="tel:+233509314527" className="btn btn-glow btn-lg">
                  <Phone size={18} /> Call Now
                </a>
                <Link href="/branches" className="btn btn-outline-light btn-lg">
                  Find a Branch <MapPin size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

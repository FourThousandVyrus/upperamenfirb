'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, Banknote, Users, TrendingUp, Heart, Truck, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

const loans = [
    { icon: <Clock size={22} />, title: 'Easy Loan (Under 3 Hours)', desc: 'Quick-access loans for government employees. Apply and receive funds the same day. Designed for urgent financial needs with minimal paperwork.' },
    { icon: <Banknote size={22} />, title: 'Commercial Loans & Overdraft', desc: 'Working capital and expansion financing for businesses. Competitive rates with flexible repayment terms tailored to your cash flow.' },
    { icon: <TrendingUp size={22} />, title: 'Salary Loans & Overdraft', desc: 'Pre-qualified loans for salaried workers. Deductions are made directly from your salary for hassle-free repayment.' },
    { icon: <Users size={22} />, title: 'Susu Loan', desc: 'Loans backed by your Susu savings history. Available to both individual and group Susu savers. Quick processing.' },
    { icon: <Heart size={22} />, title: 'Funeral & Social Loans', desc: 'Financial support during social events and emergencies. Low interest rates with compassionate repayment terms.' },
    { icon: <Truck size={22} />, title: 'Transport Loans', desc: 'Vehicle financing for commercial and personal transport. Flexible terms with the vehicle as collateral.' },
];

const eligibility = [
    'Must belong to a recognised group of 5 to 10 or more members',
    'Group members must be in the same line of business or trade',
    'Members must save regularly for at least three months',
    'Group members serve as guarantors for each other',
    'Must attend mandatory financial literacy training',
    'Loan amount based on savings history and group assessment',
    'Regular repayment builds credit for larger future loans',
];

export default function LoansPage() {
    return (
        <>
            {/* Hero */}
            <div className={styles.pageHeroCinematic}>
                <Image src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1600&q=80" alt="Business growth" width={1600} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="heroText">
                    <h1>Capital for the Builders</h1>
                </div>
            </div>

            {/* Loan Products */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-eyebrow">Loan Products</span>
                        <h2 className="section-title">Financing That Fits Your Goals</h2>
                        <p className="section-desc">
                            From same-day business loans to group microfinance — we provide the
                            capital that helps communities grow.
                        </p>
                    </ScrollReveal>

                    <div className={styles.cardGrid}>
                        {loans.map((l, i) => (
                            <ScrollReveal key={i} delay={i * 60}>
                                <div className={styles.card}>
                                    <div className={styles.cardIcon}>{l.icon}</div>
                                    <h3>{l.title}</h3>
                                    <p>{l.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Microfinance */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div>
                                <span className="section-eyebrow">Microfinance</span>
                                <h2>Group Lending for Small Enterprises</h2>
                                <p style={{ marginBottom: 24 }}>
                                    Our microfinance program empowers small business owners through
                                    group-based lending. Form a group, save together, and access
                                    affordable capital.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {eligibility.map((e, i) => (
                                        <li key={i} style={{
                                            display: 'flex', alignItems: 'flex-start', gap: 10,
                                            marginBottom: 12, fontSize: '0.9rem', color: 'var(--text-body)'
                                        }}>
                                            <CheckCircle size={16} style={{ color: 'var(--accent-500)', flexShrink: 0, marginTop: 3 }} />
                                            {e}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.splitImageWrap}>
                                <Image src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80" alt="Community group" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* How to Apply */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div>
                                <span className="section-eyebrow">Get Started</span>
                                <h2>How to Apply</h2>
                                <p style={{ marginBottom: 32 }}>
                                    Getting a loan is simple. Follow these steps and our team will
                                    guide you through every stage of the process.
                                </p>

                                <div className={styles.stepper}>
                                    {[
                                        { num: '1', title: 'Visit Any Branch', desc: 'Walk into any of our 18 branches and speak with a loan officer.' },
                                        { num: '2', title: 'Submit Your Application', desc: 'Complete the loan application form with required documents.' },
                                        { num: '3', title: 'Assessment & Approval', desc: 'Our team reviews your application. Easy loans approved same-day.' },
                                        { num: '4', title: 'Receive Your Funds', desc: 'Once approved, funds are disbursed directly to your account.' },
                                    ].map((s, i) => (
                                        <div key={i} className={styles.step}>
                                            <div className={styles.stepNum}>{s.num}</div>
                                            <div className={styles.stepBody}>
                                                <h4>{s.title}</h4>
                                                <p>{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ background: 'var(--primary-900)', borderRadius: 'var(--radius-xl)', padding: '48px 36px' }}>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', color: 'white', marginBottom: 16 }}>Need Help?</h3>
                                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', marginBottom: 28 }}>
                                    Our loan officers are ready to assist you.
                                    Call us directly or visit any branch.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    <a href="tel:+233533519373" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--accent-300)', fontSize: '0.95rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                                        <Phone size={16} /> +233 533 519 373
                                    </a>
                                    <a href="tel:+233312091556" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--accent-300)', fontSize: '0.95rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                                        <Phone size={16} /> +233 312 091 556
                                    </a>
                                </div>
                                <Link href="/branches" className="btn btn-gold btn-md" style={{ marginTop: 28 }}>
                                    Find a Branch
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

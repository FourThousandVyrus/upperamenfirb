'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, Users, Briefcase, Building, GraduationCap, Church, Scale, Shield, UserCheck, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

const accountTypes = [
    { icon: <User size={20} />, title: 'Individual Account', reqs: ['Valid Ghana Card or National ID', 'One recent passport-size photograph', 'Proof of residence (utility bill)', 'Initial deposit', 'Completed application form'] },
    { icon: <Users size={20} />, title: 'Joint Account', reqs: ['Ghana Cards for all signatories', 'Passport photos of all parties', 'Joint account mandate form', 'Proof of address for all signatories', 'Initial deposit'] },
    { icon: <Briefcase size={20} />, title: 'Sole Proprietorship', reqs: ['Business registration certificate', 'Ghana Card of proprietor', 'Tax Identification Number (TIN)', 'Proof of business address', 'Initial deposit'] },
    { icon: <Users size={20} />, title: 'Partnership', reqs: ['Partnership deed / agreement', 'Ghana Cards of all partners', 'Business registration certificate', 'TIN certificate', 'Resolution to open account'] },
    { icon: <Building size={20} />, title: 'Corporate / LLC', reqs: ['Certificate of Incorporation', 'Company regulations / Articles', 'Board resolution', 'Ghana Cards of directors', 'TIN and SSNIT certificates'] },
    { icon: <Users size={20} />, title: 'Societies / Clubs / Associations', reqs: ['Constitution of the society', 'Minutes authorizing account opening', 'Ghana Cards of signatories', 'List of executive members', 'Registration certificate (if any)'] },
    { icon: <GraduationCap size={20} />, title: 'School Account', reqs: ['School registration documents', 'Ghana Cards of signatories', 'Resolution from school management', 'GES registration (if applicable)', 'Initial deposit'] },
    { icon: <Church size={20} />, title: 'Church / Religious Body', reqs: ['Church registration certificate', 'Constitution or by-laws', 'Ghana Cards of signatories', 'Authorization from church leadership', 'Initial deposit'] },
    { icon: <Scale size={20} />, title: 'Government Agencies', reqs: ['Official authorization letter', 'Ghana Cards of signatories', 'Mandate from responsible authority', 'TIN certificate', 'Initial deposit'] },
    { icon: <Shield size={20} />, title: 'Trust Account', reqs: ['Trust deed document', 'Ghana Cards of trustees', 'Letter of authorization', 'Proof of address', 'Initial deposit'] },
    { icon: <UserCheck size={20} />, title: 'Student Account', reqs: ['Student ID card', 'Ghana Card or Birth Certificate', 'One passport photo', 'Parental consent (if minor)', 'Minimum initial deposit'] },
];

const steps = [
    { num: '1', title: 'Prepare Your Documents', desc: 'Gather the required documents based on the account type you want to open.' },
    { num: '2', title: 'Visit Any Branch', desc: 'Walk into any of our 18 branches. Our staff will guide you through the process.' },
    { num: '3', title: 'Complete the Application', desc: 'Fill out the account opening form with the help of our customer service team.' },
    { num: '4', title: 'Make Your Initial Deposit', desc: 'Make your initial deposit and receive your account details. You\'re ready to bank!' },
];

export default function CreditPage() {
    const [openIdx, setOpenIdx] = useState(0);

    return (
        <>
            <div className={styles.pageHero}>
                <div className={styles.pageHeroInner}>
                    <h1>Open Your Account</h1>
                    <p className={styles.pageHeroSubtitle}>
                        Start banking with us in four simple steps. All you need is a Ghana Card.
                    </p>
                </div>
            </div>

            {/* Process Steps */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div>
                                <span className="section-eyebrow">How It Works</span>
                                <h2>Four Simple Steps</h2>
                                <p style={{ marginBottom: 32 }}>
                                    Opening an account with Upper Amenfi Rural Bank is quick and
                                    straightforward. Here&apos;s what to expect.
                                </p>
                                <div className={styles.stepper}>
                                    {steps.map((s, i) => (
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
                            <div className={styles.splitImageWrap}>
                                <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Customer service" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Account Types */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Account Types</span>
                            <h2 className="section-title">Requirements by Account Type</h2>
                            <p className="section-desc centered">
                                Select an account type below to see the specific documents
                                and requirements needed.
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className={styles.accordion} style={{ maxWidth: 720, margin: '40px auto 0' }}>
                        {accountTypes.map((a, idx) => (
                            <ScrollReveal key={idx} delay={idx * 30}>
                                <div className={styles.accordionItem}>
                                    <button
                                        className={styles.accordionHeader}
                                        onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                                    >
                                        <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                            <span style={{ color: 'var(--navy)' }}>{a.icon}</span>
                                            {a.title}
                                        </span>
                                        <ChevronDown size={16} className={`${styles.accordionArrow} ${openIdx === idx ? styles.open : ''}`} />
                                    </button>
                                    <div className={`${styles.accordionBody} ${openIdx === idx ? styles.open : ''}`}>
                                        <div className={styles.accordionContent}>
                                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                                {a.reqs.map((r, ri) => (
                                                    <li key={ri} style={{
                                                        display: 'flex', alignItems: 'center', gap: 10,
                                                        marginBottom: 10, fontSize: '0.9rem', color: 'var(--text-body)'
                                                    }}>
                                                        <CheckCircle size={15} style={{ color: 'var(--accent-500)', flexShrink: 0 }} />
                                                        {r}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.sectionDark}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <h2 style={{ color: 'white' }}>Ready to Get Started?</h2>
                            <p className="section-desc centered" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>
                                Visit any of our 18 branches or contact us to open your account today.
                            </p>
                            <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
                                <Link href="/branches" className="btn btn-gold btn-md">Find a Branch</Link>
                                <Link href="/contact" className="btn btn-outline btn-md" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>Contact Us</Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

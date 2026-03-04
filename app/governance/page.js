'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Shield, Users, Building, Lock, UserCheck, Landmark } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const management = [
    { name: 'General Manager', initials: 'GM' },
    { name: 'Operations Manager', initials: 'OM' },
    { name: 'Finance Manager', initials: 'FM' },
    { name: 'Credit Manager', initials: 'CM' },
    { name: 'Internal Auditor', initials: 'IA' },
    { name: 'Risk & Compliance', initials: 'RC' },
    { name: 'HR Manager', initials: 'HR' },
    { name: 'IT Manager', initials: 'IT' },
    { name: 'Marketing Manager', initials: 'MM' },
    { name: 'Treasury Manager', initials: 'TM' },
    { name: 'Legal Officer', initials: 'LO' },
];

export default function GovernancePage() {
    return (
        <>
            {/* Hero */}
            <div className={styles.pageHeroCinematic}>
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" alt="Corporate building" width={1600} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="heroText">
                    <h1>The People Behind Your Trust</h1>
                </div>
            </div>

            {/* Structure */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div>
                                <span className="section-eyebrow">Corporate Structure</span>
                                <h2>Built on Accountability</h2>
                                <p style={{ marginBottom: 24 }}>
                                    Upper Amenfi Rural Bank PLC is governed by a Board of Directors elected by
                                    shareholders at the Annual General Meeting. The Board provides strategic
                                    direction and oversight while day-to-day operations are managed by an
                                    experienced professional team.
                                </p>
                                <div className={styles.cardGrid} style={{ marginTop: 24, gridTemplateColumns: '1fr 1fr' }}>
                                    {[
                                        { icon: <Users size={18} />, title: 'Shareholders', desc: 'Elected at Annual General Meeting' },
                                        { icon: <Landmark size={18} />, title: 'Board of Directors', desc: 'Strategic direction & oversight' },
                                        { icon: <UserCheck size={18} />, title: 'Management Team', desc: 'Day-to-day operations' },
                                        { icon: <Building size={18} />, title: 'Branch Managers', desc: '18 branches across 3 regions' },
                                    ].map((c, i) => (
                                        <div key={i} className={styles.card}>
                                            <div className={styles.cardIcon}>{c.icon}</div>
                                            <h3>{c.title}</h3>
                                            <p>{c.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.splitImageWrap}>
                                <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" alt="Professional team" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Management Team */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Leadership</span>
                            <h2 className="section-title">Key Management Team</h2>
                            <p className="section-desc centered">
                                Our experienced management team drives the bank&apos;s strategic objectives
                                and ensures excellence in service delivery.
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className={styles.teamGrid}>
                        {management.map((m, i) => (
                            <ScrollReveal key={i} delay={i * 40}>
                                <div className={styles.teamCard}>
                                    <div className={styles.teamAvatar}>{m.initials}</div>
                                    <h4>{m.name}</h4>
                                    <p>Senior Management</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Staff Stats */}
            <section className={styles.sectionDark}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow" style={{ color: 'var(--accent-300)' }}>Our People</span>
                            <h2 style={{ color: 'white' }}>Strength in Numbers</h2>
                        </div>
                    </ScrollReveal>
                    <div className={styles.statsRow} style={{ marginTop: 40 }}>
                        {[
                            { value: 168, label: 'Regular Staff' },
                            { value: 218, label: 'Mobile Bankers' },
                            { value: 92, label: 'Security Staff' },
                            { value: 18, label: 'Branch Managers' },
                        ].map((s, i) => (
                            <ScrollReveal key={i} delay={i * 80}>
                                <div className={styles.statCard}>
                                    <h3><AnimatedCounter end={s.value} /></h3>
                                    <p>{s.label}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational Security */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div className={styles.splitImageWrap}>
                                <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80" alt="Security" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div>
                                <span className="section-eyebrow">Security</span>
                                <h2>Operational Security</h2>
                                <p style={{ marginBottom: 24 }}>
                                    The bank employs robust security measures across all 18 branches and operations
                                    to protect customers&apos; deposits, transactions, and personal information.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {[
                                        '92 dedicated security personnel across all branches',
                                        '24/7 electronic surveillance systems',
                                        'Cash-in-transit armed escort protocols',
                                        'Regular security audits and risk assessments',
                                        'Staff security awareness training programs',
                                        'Fraud detection and prevention systems',
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-body)' }}>
                                            <Lock size={15} style={{ color: 'var(--navy)', flexShrink: 0 }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

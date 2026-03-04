'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Shield, Users, MapPin, TrendingUp, Award, Landmark, Heart, Target, Eye, Star, Lock, Building2, CheckCircle } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <div className={styles.pageHeroCinematic}>
                <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80" alt="Community gathering" width={1600} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="heroText">
                    <h1>Born From the Soil.<br />Built for the People.</h1>
                </div>
            </div>

            {/* Stats Row */}
            <section style={{ padding: '0', marginTop: '-40px', position: 'relative', zIndex: 2 }}>
                <div className="container">
                    <div className={styles.statsRow}>
                        {[
                            { value: 37, suffix: '+', label: 'Years Operating' },
                            { value: 18, label: 'Branches' },
                            { value: 588, suffix: 'M', label: 'Total Deposits (₵)' },
                            { value: 3, label: 'Regions Covered' },
                        ].map((s, i) => (
                            <ScrollReveal key={i} delay={i * 80}>
                                <div className={styles.statCard}>
                                    <h3><AnimatedCounter end={s.value} suffix={s.suffix || ''} /></h3>
                                    <p>{s.label}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Origin Story */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div className={styles.splitImageWrap}>
                                <Image src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80" alt="Cocoa farming community" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div>
                                <span className="section-eyebrow">Our Story</span>
                                <h2>37 Years of Community Trust</h2>
                                <p style={{ marginBottom: 16 }}>
                                    Upper Amenfi Rural Bank was established in 1988 by a group of visionary
                                    farmers and community leaders in the Wassa Amenfi District. What began as
                                    a small savings institution has grown into one of Ghana&apos;s most successful
                                    rural banks, serving over three regions.
                                </p>
                                <p>
                                    Today, UARB operates 18 branches with a staff complement of over 470
                                    employees, including 218 mobile bankers who bring banking to your doorstep.
                                    We remain committed to our founding mission: empowering communities
                                    through accessible financial services.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Purpose</span>
                            <h2 className="section-title">Our Mission &amp; Vision</h2>
                        </div>
                    </ScrollReveal>

                    <div className={styles.cardGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 40 }}>
                        <ScrollReveal delay={0}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Target size={22} /></div>
                                <h3>Our Mission</h3>
                                <p>To mobilize deposits from individuals, groups, and corporate institutions for
                                    the socio-economic development of our operational areas through efficient and
                                    professional banking services.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={80}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Eye size={22} /></div>
                                <h3>Our Vision</h3>
                                <p>To become the most preferred, efficient, and profitable rural bank in Ghana,
                                    leading in financial inclusion and community empowerment.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={160}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Star size={22} /></div>
                                <h3>Core Values</h3>
                                <p>Integrity, professionalism, teamwork, customer-centricity, and innovation
                                    guide everything we do across all 18 branches and communities.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Awards & Recognition */}
            <section className={styles.sectionDark}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow" style={{ color: 'var(--accent-300)' }}>Recognition</span>
                            <h2 style={{ color: 'white' }}>Awards &amp; Achievements</h2>
                            <p className="section-desc centered" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                Recognized locally and nationally for excellence in rural banking.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className={styles.cardGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', marginTop: 40 }}>
                        {[
                            { icon: <Award size={20} />, title: 'Best Rural Bank', desc: 'Recognized for outstanding performance in rural banking' },
                            { icon: <Shield size={20} />, title: 'PLC Status', desc: 'Upgraded to Public Limited Company status' },
                            { icon: <TrendingUp size={20} />, title: 'Consistent Growth', desc: '37 consecutive years of growth and stability' },
                            { icon: <Landmark size={20} />, title: 'Ghana Deposit Protection', desc: 'Full membership ensuring customer deposits are protected' },
                        ].map((a, i) => (
                            <ScrollReveal key={i} delay={i * 80}>
                                <div className={styles.card}>
                                    <div className={styles.cardIconGold}>{a.icon}</div>
                                    <h3>{a.title}</h3>
                                    <p>{a.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security & Trust */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div>
                                <span className="section-eyebrow">Security & Trust</span>
                                <h2>Your Money. Our Fortress.</h2>
                                <p style={{ marginBottom: 24 }}>
                                    Backed by the Bank of Ghana and protected by advanced security infrastructure, your deposits are safe with us.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: '9999px', background: 'var(--primary-100)', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
                                        <Landmark size={14} /> Bank of Ghana
                                    </span>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: '9999px', background: 'var(--primary-100)', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
                                        <Shield size={14} /> Ghana Deposit Protection
                                    </span>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: '9999px', background: 'var(--primary-100)', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
                                        <Building2 size={14} /> ARB Apex Bank
                                    </span>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: '9999px', background: 'var(--primary-100)', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--font-heading)', color: 'var(--navy)' }}>
                                        <Award size={14} /> PLC Status
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {[
                                        '24/7 Transaction Monitoring',
                                        'Encrypted Financial Data',
                                        'Biometric E-Zwich Security',
                                        'Multi-Layer Fraud Protection',
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-body)' }}>
                                            <CheckCircle size={16} style={{ color: 'var(--green-500)', flexShrink: 0 }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: 180, height: 180, borderRadius: '50%', background: 'var(--primary-100)', border: '2px solid var(--border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                    <Lock size={56} style={{ color: 'var(--navy)', opacity: 0.7 }} />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Community Impact */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div>
                                <span className="section-eyebrow">Impact</span>
                                <h2>More Than a Bank</h2>
                                <p style={{ marginBottom: 16 }}>
                                    We believe banking should uplift communities, not just serve them.
                                    Through our CSR initiatives, we&apos;ve invested in education,
                                    infrastructure, healthcare, and agriculture.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {[
                                        'Annual scholarships for outstanding students',
                                        'School construction and renovation projects',
                                        'Medical equipment donations to community clinics',
                                        'Agricultural support programs for cocoa farmers',
                                        'Road rehabilitation in farming communities',
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-body)' }}>
                                            <Heart size={15} style={{ color: 'var(--accent-500)', flexShrink: 0 }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <Link href="/csr" className="btn btn-primary btn-md" style={{ marginTop: 28 }}>
                                    See Our Full Impact
                                </Link>
                            </div>
                            <div className={styles.splitImageWrap}>
                                <Image src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" alt="Education support" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

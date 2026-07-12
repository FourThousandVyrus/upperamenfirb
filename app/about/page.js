'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Shield, Users, MapPin, TrendingUp, Award, Landmark, Heart, Target, Eye, Star, Lock, Building2, CheckCircle, BookOpen, Handshake, Briefcase, Scale, Globe, Sprout } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const coreValues = [
    { value: 'Commitment to Work', behaviors: 'Punctuality, Regularity to work, Loyalty, dedication, Reliability.' },
    { value: 'Timeliness', behaviors: 'Prompt Customer Service, Reliability, Accuracy, State-of-Art Technology, and Adherence to policies, processes and procedures.' },
    { value: 'Discipline', behaviors: 'Respect for authority, Mutual respect, Strict adherence to Dress Code.' },
    { value: 'Integrity', behaviors: 'Honesty, Accountability, Good sense of responsibility, Strict compliance to the Operational Manual.' },
    { value: 'Professionalism', behaviors: 'Good communication, Etiquette and Good manners, Competence, Self-Development, Secrecy, Positive Thinking and "Can Do" Attitude, Team Work.' },
    { value: 'Competitiveness', behaviors: 'Networking, Innovation, Diversification, Staff motivation, Research, Enrollment on to New Government Programme.' },
    { value: 'Community Development', behaviors: 'Good corporate social responsibility, Community service.' },
    { value: 'Shareholder Interests', behaviors: 'Good communication to shareholders, Creating value for shareholders.' },
];

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
                            { value: 39, suffix: '+', label: 'Years Operating' },
                            { value: 19, label: 'Branches' },
                            { value: 875, suffix: 'M+', label: 'Total Deposits (₵)' },
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
                                <h2>39 Years of Community Trust</h2>
                                <p style={{ marginBottom: 16 }}>
                                    According to history, the Wassa Amenfi Traditional Council in the Western Region only had one rural bank in the 1980s, located at Wassa Akropong. The bank (UARB Plc) emanated from and carved itself out of Wassa Akropong. The separation occurred due to a distance disadvantage for customers, primarily cocoa farmers, who had to walk a considerable distance to cash the Akuafo Cheque, the government&apos;s primary method of payment to farmers.
                                </p>
                                <p style={{ marginBottom: 16 }}>
                                    Thousands of our cherished cocoa farmers in and around our catchment areas, especially communities like Wassa Ankaasie, Jedua II, Beposo, Agona Amenfi, Wassa Juabo, Adjakaa Manso Jukwaa-Hemang, and Wassa Ankwawso, were left excluded and stranded on how to get their cocoa sales proceeds through the Akuafo-Cheque System.
                                </p>
                                <p style={{ marginBottom: 16 }}>
                                    However, with the good intentions of the chiefs and elders in the aforementioned communities and their brisk, innovative financial ideas, they decided to set up a community bank. The establishment of Upper Amenfi Rural Bank Plc came about through the purchase of shares by the concerned communities. The bank chose Wassa Ankwawso as its headquarters.
                                </p>
                                <p>
                                    The promoters of this bank chose <strong>Cocoa Pod</strong> as the bank&apos;s logo, signifying that the bank seeded from a typical cocoa-growing area and for the farmers.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Licensing Status */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div>
                                <span className="section-eyebrow">Licensing Status</span>
                                <h2>Established by the Bank of Ghana</h2>
                                <p style={{ marginBottom: 16 }}>
                                    Incorporated on 13th August, 1987 (with Bank of Ghana License No. 123 issued on 18th August, 1987), Upper Amenfi Rural Bank commenced operations on 2nd September, 1994, to support local agriculture and commerce. It has grown to become one of the premier rural banks in the Western, Western North, and Central regions of Ghana.
                                </p>
                                <p style={{ marginBottom: 16 }}>
                                    Following a path of continuous strategic improvement, the bank officially re-registered on 15th February, 2023 under the Companies Act 2019 (Act 992) as a Public Limited Company with Registration Number <strong>PL000080223</strong>, adopting the official name <strong>UPPER AMENFI COMMUNITY BANK PLC</strong>.
                                </p>
                                <p>
                                    As of December 2025, the bank boasts a paid-up capital of <strong>GH¢6.08 million</strong>, a customer deposit base of <strong>GH¢875.00 million</strong>, and total assets of <strong>GH¢930.70 million</strong>, serving our communities across three regions with 19 locations.
                                </p>
                            </div>
                            <div className={styles.splitImageWrap}>
                                <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" alt="Banking operations" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Customer Portfolio */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">2025 Customer Portfolio</span>
                            <h2 className="section-title">Growing With Our Customers</h2>
                            <p className="section-desc centered" style={{ maxWidth: 'min(700px, 100%)' }}>
                                Active customers are subscribing to our numerous tailor-made products and services in our 19 branches located in various parts of Ghana. Our success story has significantly improved the economic and social well-being of millions of Ghanaians.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className={styles.cardGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 24, marginTop: 40 }}>
                        <ScrollReveal delay={0}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Globe size={22} /></div>
                                <h3>Digital Services</h3>
                                <p>SMS, E-Zwich, ATM, Agency banking, ACH, Apexlink (i-Trans transfers), WUMT, USSD, mobile banking — we&apos;ve simplified access to financial services.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={80}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Briefcase size={22} /></div>
                                <h3>Comprehensive Products</h3>
                                <p>Microfinancing, business loans, salary loans, funeral loans, farmer&apos;s loans, overdrafts — a full spectrum of financial solutions.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={160}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Sprout size={22} /></div>
                                <h3>Job Creation</h3>
                                <p>UACB Plc has contributed to the creation of over 275,000 direct and indirect jobs across the bank&apos;s catchment areas and Ghana as a whole.</p>
                            </div>
                        </ScrollReveal>
                    </div>
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

                    <div className={styles.cardGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 24, marginTop: 40 }}>
                        <ScrollReveal delay={0}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Target size={22} /></div>
                                <h3>Our Mission</h3>
                                <p>To Encourage, Sustain the Habit of Savings and Alleviate Poverty.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={80}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Eye size={22} /></div>
                                <h3>Our Vision</h3>
                                <p>To be the leading Community Bank in the country.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={160}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Heart size={22} /></div>
                                <h3>Our Promise</h3>
                                <p>The bank&apos;s vision and mission are driven by the range of solutions it offers to bridge the gap between the banked, underbanked, and unbanked in the financial service industry.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Core Values Table */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Who We Are</span>
                            <h2 className="section-title">Our Core Values</h2>
                            <p className="section-desc centered" style={{ maxWidth: 600 }}>
                                The principles that guide every interaction with our customers, shareholders, and communities.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div style={{ marginTop: 40, maxWidth: 'min(800px, 100%)', margin: '40px auto 0' }}>
                        {coreValues.map((v, i) => (
                            <ScrollReveal key={i} delay={i * 40}>
                                <div className={styles.coreValueRow} style={{
                                    borderBottom: i < coreValues.length - 1 ? '1px solid var(--border-default)' : 'none',
                                }}>
                                    <div className={styles.coreValueLabel}>
                                        {v.value}
                                    </div>
                                    <div className={styles.coreValueDesc}>
                                        {v.behaviors}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
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

                    <div className={styles.cardGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(230px, 100%), 1fr))', marginTop: 40 }}>
                        {[
                            { icon: <Award size={20} />, title: 'Best Rural Bank', desc: 'Recognized for outstanding performance in rural banking' },
                            { icon: <Shield size={20} />, title: 'PLC Status', desc: 'Upgraded to Public Limited Company status in 2022' },
                            { icon: <TrendingUp size={20} />, title: 'Consistent Growth', desc: '39 consecutive years of growth and stability' },
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
                                    Backed by the Bank of Ghana and protected by advanced security infrastructure, your deposits are safe with us. We require partnerships with current and potential shareholders, customers, regulatory authorities, and business associations.
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
                                        'Highly Trusted Network Systems',
                                        'Security for All Customers\' Deposits',
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-body)' }}>
                                            <CheckCircle size={16} style={{ color: 'var(--green-500)', flexShrink: 0 }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.splitImageWrap}>
                                <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80" alt="Security infrastructure" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                                    We believe banking should uplift communities, not just serve them. Through our CSR initiatives, we&apos;ve invested in education, infrastructure, healthcare, and agriculture.
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

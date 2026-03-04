'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Banknote, TrendingUp, Shield, Users, Wallet, PiggyBank, CreditCard, Smartphone, ArrowRight, Repeat, MessageSquare, Send, Globe, Building, CheckCircle, ChevronDown } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

const products = [
    {
        title: 'Fixed Deposit',
        icon: <Banknote size={22} />,
        desc: 'A fixed deposit account pays a fixed rate of interest until a given maturity date. It may be withdrawn upon prior notice to the bank and/or by having a penalty levied. The rate of return is very attractive and highly competitive.',
        features: [
            'Applicants must hold an existing account with the bank',
            'Accepts a specified sum determined by the bank, payable at maturity',
            'Minimum deposit duration: 3 months',
            'Flexible tenors: 3, 6, 9, or 12 months',
            'Premature redemption subject to emergencies — customer loses 10% of interest accrued',
            'Fixed Deposit Certificates may be offered as collateral for bank loans',
        ],
        benefits: [
            'Encourages a savings habit for a longer period',
            'Earn a higher interest rate than normal savings',
            'Invest as much as possible with no upper limit',
            'Can be pledged as security for borrowing',
        ],
    },
    {
        title: 'Normal Savings',
        icon: <PiggyBank size={22} />,
        desc: 'Normal savings accounts are meant for individuals operating singly or jointly with other individuals, associations, clubs, and organizations. The main objective is to promote a culture of savings.',
        features: [
            'No restriction on the amount of deposit',
            'Continuing nature — no maximum period of holding',
            'Classified as dormant after 3 years of inactivity',
            'Withdrawal frequency may be regulated by the bank',
            'Minimum balance of GH₵50.00 required to keep account active',
            'Cheques may be lodged into the account, subject to clearing',
            'Interest-bearing account — rate determined by the bank periodically',
        ],
        benefits: [
            'Statements of account given upon request',
            'Savings can be used as security to apply for loans',
            'Interest calculated on a daily basis and credited monthly',
        ],
    },
    {
        title: 'Susu Savings',
        icon: <Users size={22} />,
        desc: 'An innovative savings product involving the mobilization of cash savings at a defined daily or weekly minimum amount. Designed for clients who find it difficult to leave their homes and workplaces to visit a branch — perfect for traders, market women, and farmers.',
        features: [
            'Mobile banker visits your doorstep daily',
            'Minimum daily deposit: GH₵5.00',
            'Weekly minimum total: GH₵35.00',
            'Monthly collection: not less than GH₵30.00',
            'Minimum GH₵30.00 balance to keep account active',
            'Interest paid to depositors maintaining minimum monthly balance (as determined by management)',
            'Withdraw from your Susu account at any time',
        ],
        benefits: [
            'Save without visiting a branch',
            'Perfect for traders, market women, and farmers',
            'Build savings automatically with daily collections',
            'Available at markets, shops, and farms',
            'Group and individual accounts available',
        ],
    },
    {
        title: 'Current Account',
        icon: <CreditCard size={22} />,
        desc: 'Can be operated by individuals, sole proprietors, partnership firms, companies, clubs, associations, trusts, government bodies, and cooperative societies. Also known as a demand deposit account, ideal for those with regular transactions.',
        features: [
            'Non-interest-bearing account',
            'Cheque-bearing account — cheque book issuance',
            'May attract a Cost on Turnover (COT) or service charge',
            'Continuing nature — 3 years of inactivity classifies as dormant',
            'Overdraft facility available (short-term funds subject to interest)',
            'Monthly statements provided',
        ],
        benefits: [
            'Access to bank credit facilities',
            'Fully networked and efficient banking services',
            'Access to financial information',
            'Instant statements of account upon request',
        ],
    },
    {
        title: 'Salary Account',
        icon: <Wallet size={22} />,
        desc: 'Designed for all salaried workers in both public and private sectors who receive their salaries and allowances through a bank. This specialized account comes with automatic salary channeling and loan access.',
        features: [
            'Automatic salary channeling from employer',
            'Access to salary loans',
            'ATM and E-Zwich card access',
            'SMS notification on salary credit',
            'No monthly maintenance fee',
        ],
        benefits: [
            'Instant access to your salary on payday',
            'Pre-qualified for salary-backed loans',
            'Zero maintenance charges',
            'Full digital banking access',
        ],
    },
];

export default function ProductsServicesPage() {
    const [openIdx, setOpenIdx] = useState(0);

    return (
        <>
            {/* Hero */}
            <div className={styles.pageHeroCinematic}>
                <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80" alt="Banking services" width={1600} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="heroText">
                    <h1>Every Account Tells a Story</h1>
                </div>
            </div>

            {/* Deposit Products */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-eyebrow">Deposit Products</span>
                        <h2 className="section-title">Savings &amp; Accounts</h2>
                        <p className="section-desc">
                            From micro-savings with doorstep collection to high-yield fixed deposits —
                            choose the account that fits your lifestyle.
                        </p>
                    </ScrollReveal>

                    <div className={styles.accordion} style={{ maxWidth: '100%', marginTop: 40 }}>
                        {products.map((p, idx) => (
                            <ScrollReveal key={idx} delay={idx * 50}>
                                <div className={styles.accordionItem}>
                                    <button
                                        className={styles.accordionHeader}
                                        onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                                    >
                                        <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                            <span style={{ color: 'var(--accent-500)' }}>{p.icon}</span>
                                            {p.title}
                                        </span>
                                        <ChevronDown size={16} className={`${styles.accordionArrow} ${openIdx === idx ? styles.open : ''}`} />
                                    </button>
                                    <div className={`${styles.accordionBody} ${openIdx === idx ? styles.open : ''}`}>
                                        <div className={styles.accordionContent}>
                                            <p style={{ marginBottom: 20, lineHeight: 1.75, color: 'var(--text-body)' }}>{p.desc}</p>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                                                <div>
                                                    <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--navy)', marginBottom: 12, fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Features</h4>
                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                        {p.features.map((f, fi) => (
                                                            <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10, fontSize: '0.88rem', color: 'var(--text-body)' }}>
                                                                <CheckCircle size={15} style={{ color: 'var(--accent-500)', flexShrink: 0, marginTop: 3 }} />
                                                                {f}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--navy)', marginBottom: 12, fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Benefits</h4>
                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                        {p.benefits.map((b, bi) => (
                                                            <li key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10, fontSize: '0.88rem', color: 'var(--text-body)' }}>
                                                                <Shield size={15} style={{ color: 'var(--navy)', flexShrink: 0, marginTop: 3 }} />
                                                                {b}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Digital Services */}
            <section className={styles.sectionDark}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow" style={{ color: 'var(--accent-300)' }}>Digital Services</span>
                            <h2 style={{ color: 'white' }}>Banking Beyond Branches</h2>
                            <p className="section-desc centered" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                Access your money and manage transactions from anywhere
                                with our suite of digital banking tools.
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className={styles.cardGrid}>
                        {[
                            { icon: <Smartphone size={20} />, title: 'USSD Mobile Banking', desc: 'Dial our short code from any phone — no internet needed. Check balances, transfer funds, and buy airtime instantly.' },
                            { icon: <CreditCard size={20} />, title: 'E-Zwich & ATM', desc: 'Biometric smart cards accepted at ATMs nationwide. Withdraw cash, check balances, and make purchases at POS terminals.' },
                            { icon: <ArrowRight size={20} />, title: 'Apexlink', desc: 'Transfer money between rural banks across Ghana instantly through the ARB Apex Bank network.' },
                            { icon: <Building size={20} />, title: 'Agency Banking', desc: 'Bank through authorized agents in your community. Make deposits, withdrawals, and payments without visiting a branch.' },
                            { icon: <Wallet size={20} />, title: 'Mobile Money Link', desc: 'Connect your mobile money wallet (MTN MoMo, Vodafone Cash, AirtelTigo Money) directly to your bank account.' },
                            { icon: <Repeat size={20} />, title: 'ACH Clearing', desc: 'Automated Clearing House for direct deposits, salary payments, and electronic payment processing.' },
                            { icon: <MessageSquare size={20} />, title: 'SMS Banking', desc: 'Real-time SMS alerts on all account transactions. Stay informed about credits, debits, and balance changes.' },
                            { icon: <Send size={20} />, title: 'WUMT Services', desc: 'Send and receive Western Union money transfers at all our branches. Fast international remittances.' },
                        ].map((s, i) => (
                            <ScrollReveal key={i} delay={i * 50}>
                                <div className={styles.card}>
                                    <div className={styles.cardIconGold}>{s.icon}</div>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <h2 className="section-title">Ready to Open an Account?</h2>
                            <p className="section-desc centered" style={{ marginBottom: 32 }}>
                                Visit any of our 18 branches or contact us to get started. All you need is a Ghana Card.
                            </p>
                            <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
                                <Link href="/credit" className="btn btn-glow btn-md">Account Requirements</Link>
                                <Link href="/branches" className="btn btn-outline btn-md">Find a Branch</Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

import Link from 'next/link';
import { TrendingUp, Percent, Clock } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
    title: 'Rates & Fees | Upper Amenfi Rural Bank PLC',
    description: 'View our competitive savings interest rates, loan rates, and service fees. Transparent pricing for all banking products.',
};

export default function RatesPage() {
    return (
        <>
            <div className={styles.pageHero}>
                <div className={styles.pageHeroInner}>
                    <h1>Rates &amp; Fees</h1>
                    <p className={styles.pageHeroSubtitle}>
                        Transparent pricing on all our banking products. Updated quarterly.
                    </p>
                </div>
            </div>

            {/* Rate Highlights */}
            <section style={{ padding: '0', marginTop: '-20px', position: 'relative', zIndex: 2 }}>
                <div className="container">
                    <div className={styles.statsRow} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        <ScrollReveal>
                            <div className={styles.statCard}>
                                <div style={{ color: 'var(--accent-500)', marginBottom: 8 }}><TrendingUp size={24} /></div>
                                <h3 style={{ fontSize: '1.5rem' }}>Up to 18%</h3>
                                <p>Fixed Deposit Rate (12 months)</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={80}>
                            <div className={styles.statCard}>
                                <div style={{ color: 'var(--accent-500)', marginBottom: 8 }}><Percent size={24} /></div>
                                <h3 style={{ fontSize: '1.5rem' }}>From 28%</h3>
                                <p>Loan Interest Rate</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={160}>
                            <div className={styles.statCard}>
                                <div style={{ color: 'var(--accent-500)', marginBottom: 8 }}><Clock size={24} /></div>
                                <h3 style={{ fontSize: '1.5rem' }}>No Fee</h3>
                                <p>Account Maintenance</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Savings Rates */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-eyebrow">Deposit Rates</span>
                        <h2 className="section-title">Savings &amp; Fixed Deposit Rates</h2>
                        <p className="section-desc" style={{ marginBottom: 32 }}>
                            Earn competitive interest on your savings. Rates are reviewed quarterly.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className={styles.tableWrapper}>
                            <table className={styles.ratesTable}>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Tenor</th>
                                        <th>Interest Rate (p.a.)</th>
                                        <th>Min. Deposit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>Normal Savings</strong></td><td>On demand</td><td><span className={styles['highlight-rate']}>8.0%</span></td><td>GH₵ 20</td></tr>
                                    <tr><td><strong>Susu Savings</strong></td><td>On demand</td><td><span className={styles['highlight-rate']}>7.5%</span></td><td>GH₵ 1</td></tr>
                                    <tr><td><strong>Fixed Deposit</strong></td><td>3 months</td><td><span className={styles['highlight-rate']}>14.0%</span></td><td>GH₵ 500</td></tr>
                                    <tr><td><strong>Fixed Deposit</strong></td><td>6 months</td><td><span className={styles['highlight-rate']}>16.0%</span></td><td>GH₵ 500</td></tr>
                                    <tr><td><strong>Fixed Deposit</strong></td><td>12 months</td><td><span className={styles['highlight-rate']}>18.0%</span></td><td>GH₵ 500</td></tr>
                                    <tr><td><strong>Current Account</strong></td><td>On demand</td><td><span className={styles['highlight-rate']}>—</span></td><td>GH₵ 100</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Loan Rates */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-eyebrow">Lending Rates</span>
                        <h2 className="section-title">Loan Interest Rates</h2>
                        <p className="section-desc" style={{ marginBottom: 32 }}>
                            Competitive lending rates for personal, business, and microfinance loans.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className={styles.tableWrapper}>
                            <table className={styles.ratesTable}>
                                <thead>
                                    <tr>
                                        <th>Loan Type</th>
                                        <th>Rate (p.a.)</th>
                                        <th>Max Tenor</th>
                                        <th>Processing Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>Easy Loan</strong></td><td><span className={styles['highlight-rate']}>28%</span></td><td>12 months</td><td>2%</td></tr>
                                    <tr><td><strong>Salary Loan</strong></td><td><span className={styles['highlight-rate']}>28%</span></td><td>24 months</td><td>2%</td></tr>
                                    <tr><td><strong>Commercial Loan</strong></td><td><span className={styles['highlight-rate']}>30%</span></td><td>36 months</td><td>3%</td></tr>
                                    <tr><td><strong>Susu Loan</strong></td><td><span className={styles['highlight-rate']}>30%</span></td><td>12 months</td><td>2%</td></tr>
                                    <tr><td><strong>Microfinance</strong></td><td><span className={styles['highlight-rate']}>32%</span></td><td>12 months</td><td>2%</td></tr>
                                    <tr><td><strong>Funeral / Social</strong></td><td><span className={styles['highlight-rate']}>28%</span></td><td>6 months</td><td>1%</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Disclaimer */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                                <strong>Disclaimer:</strong> Rates shown are indicative and subject to change
                                without prior notice. Final rates may depend on individual assessment, loan
                                amount, collateral, and prevailing market conditions. Please visit any branch
                                or call our hotline for the most current rates.
                            </p>
                            <Link href="/contact" className="btn btn-glow btn-md" style={{ marginTop: 24 }}>
                                Contact Us for Details
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

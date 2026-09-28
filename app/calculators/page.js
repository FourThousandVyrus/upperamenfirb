'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, TrendingUp, PiggyBank, ArrowRight, Info, Building2, TableProperties } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

const loanProducts = [
    { name: 'Easy Loan', rate: 28, maxTenure: 12, fee: 2 },
    { name: 'Salary Loan', rate: 28, maxTenure: 24, fee: 2 },
    { name: 'Commercial Loan', rate: 30, maxTenure: 36, fee: 3 },
    { name: 'Susu Loan', rate: 30, maxTenure: 12, fee: 2 },
    { name: 'Microfinance', rate: 32, maxTenure: 12, fee: 2 },
    { name: 'Funeral / Social Loan', rate: 28, maxTenure: 6, fee: 1 },
];

const savingsProducts = [
    { name: 'Normal Savings', rate: 8.0 },
    { name: 'Susu Savings', rate: 7.5 },
    { name: 'Fixed Deposit (3 months)', rate: 14.0 },
    { name: 'Fixed Deposit (6 months)', rate: 16.0 },
    { name: 'Fixed Deposit (12 months)', rate: 18.0 },
];

function formatCurrency(num) {
    return '₵' + num.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function LoanCalculator() {
    const [amount, setAmount] = useState(5000);
    const [tenure, setTenure] = useState(12);
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [showSchedule, setShowSchedule] = useState(false);

    const product = loanProducts[selectedProduct];
    const monthlyRate = product.rate / 100 / 12;
    const monthlyPayment = monthlyRate > 0
        ? (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1)
        : amount / tenure;
    const totalPayment = monthlyPayment * tenure;
    const totalInterest = totalPayment - amount;
    const processingFee = amount * (product.fee / 100);

    // Amortization schedule
    const schedule = [];
    let balance = amount;
    for (let m = 1; m <= tenure; m++) {
        const interest = balance * monthlyRate;
        const principalPart = Math.min(monthlyPayment - interest, balance);
        balance = Math.max(balance - principalPart, 0);
        schedule.push({ month: m, payment: monthlyPayment, interest, principal: principalPart, balance });
    }

    const principalPct = (amount / totalPayment) * 100;

    return (
        <div className={styles.calcCard}>
            <div className={styles.calcCardHeader}>
                <Calculator size={22} />
                <h3>Loan Repayment Calculator</h3>
            </div>

            <div className={styles.calcForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="loan-product-select">Loan Product</label>
                    <select id="loan-product-select" value={selectedProduct} onChange={(e) => setSelectedProduct(Number(e.target.value))}>
                        {loanProducts.map((p, i) => (
                            <option key={p.name} value={i}>{p.name} — {p.rate}% p.a.</option>
                        ))}
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="loan-amount-input">Loan Amount (GH₵)</label>
                    <input
                        id="loan-amount-input"
                        type="number"
                        min="100"
                        max="500000"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value) || 0)}
                    />
                    <input
                        type="range"
                        min="500"
                        max="100000"
                        step="500"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className={styles.rangeSlider}
                        aria-label="Loan amount slider"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="loan-tenure-input">Tenure (Months) — Max {product.maxTenure}</label>
                    <input
                        id="loan-tenure-input"
                        type="number"
                        min="1"
                        max={product.maxTenure}
                        value={tenure > product.maxTenure ? product.maxTenure : tenure}
                        onChange={(e) => setTenure(Math.min(Number(e.target.value) || 1, product.maxTenure))}
                    />
                    <input
                        type="range"
                        min="1"
                        max={product.maxTenure}
                        value={tenure > product.maxTenure ? product.maxTenure : tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className={styles.rangeSlider}
                        aria-label="Loan tenure slider"
                    />
                </div>
            </div>

            <div className={styles.calcResults}>
                <div className={styles.calcResultItem}>
                    <span>Monthly Repayment</span>
                    <strong className={styles.calcHighlight}>{formatCurrency(monthlyPayment)}</strong>
                </div>
                <div className={styles.calcResultItem}>
                    <span>Total Interest</span>
                    <strong>{formatCurrency(totalInterest)}</strong>
                </div>
                <div className={styles.calcResultItem}>
                    <span>Processing Fee ({product.fee}%)</span>
                    <strong>{formatCurrency(processingFee)}</strong>
                </div>
                <div className={styles.calcResultItem} style={{ borderTop: '2px solid var(--border-default)', paddingTop: 16 }}>
                    <span>Total Amount Payable</span>
                    <strong className={styles.calcHighlight}>{formatCurrency(totalPayment + processingFee)}</strong>
                </div>
            </div>

            {/* Principal vs Interest breakdown */}
            <div style={{ margin: '20px 0 4px' }}>
                <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    fontSize: '0.75rem', fontWeight: 600, fontFamily: 'var(--font-heading)',
                    color: 'var(--text-muted)', marginBottom: 6,
                }}>
                    <span>Principal {principalPct.toFixed(0)}%</span>
                    <span>Interest {(100 - principalPct).toFixed(0)}%</span>
                </div>
                <div style={{
                    display: 'flex', height: 12, borderRadius: 'var(--radius-pill)',
                    overflow: 'hidden', background: 'var(--bg-warm)',
                }} aria-hidden="true">
                    <div style={{ width: `${principalPct}%`, background: 'var(--primary-600)', transition: 'width 0.4s' }} />
                    <div style={{ width: `${100 - principalPct}%`, background: 'var(--accent-500)', transition: 'width 0.4s' }} />
                </div>
            </div>

            {/* Amortization schedule toggle */}
            <button
                onClick={() => setShowSchedule(!showSchedule)}
                style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    marginTop: 16, padding: '10px 16px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid var(--border-default)',
                    background: showSchedule ? 'var(--primary-50)' : 'transparent',
                    color: 'var(--primary-700)',
                    fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s',
                }}
                aria-expanded={showSchedule}
            >
                <TableProperties size={15} />
                {showSchedule ? 'Hide Repayment Schedule' : 'View Repayment Schedule'}
            </button>

            {showSchedule && (
                <div className={styles.tableWrapper} style={{ marginTop: 16, maxHeight: 320, overflowY: 'auto' }}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Payment</th>
                                <th>Interest</th>
                                <th>Principal</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.map((row) => (
                                <tr key={row.month}>
                                    <td>{row.month}</td>
                                    <td>{formatCurrency(row.payment)}</td>
                                    <td style={{ color: 'var(--accent-600)' }}>{formatCurrency(row.interest)}</td>
                                    <td style={{ color: 'var(--green-500)' }}>{formatCurrency(row.principal)}</td>
                                    <td>{formatCurrency(row.balance)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className={styles.calcDisclaimer}>
                <Info size={14} />
                <span>This is an estimate only. Actual terms may vary. Visit any branch for a formal offer.</span>
            </div>
        </div>
    );
}

function SavingsCalculator() {
    const [principal, setPrincipal] = useState(1000);
    const [monthly, setMonthly] = useState(200);
    const [years, setYears] = useState(3);
    const [selectedProduct, setSelectedProduct] = useState(0);

    const product = savingsProducts[selectedProduct];
    const monthlyRate = product.rate / 100 / 12;
    const months = years * 12;

    // Future value with monthly contributions
    let balance = principal;
    for (let i = 0; i < months; i++) {
        balance = (balance + monthly) * (1 + monthlyRate);
    }
    const totalDeposited = principal + (monthly * months);
    const interestEarned = balance - totalDeposited;

    return (
        <div className={styles.calcCard}>
            <div className={styles.calcCardHeader}>
                <PiggyBank size={22} />
                <h3>Savings Growth Calculator</h3>
            </div>

            <div className={styles.calcForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="savings-product-select">Savings Product</label>
                    <select id="savings-product-select" value={selectedProduct} onChange={(e) => setSelectedProduct(Number(e.target.value))}>
                        {savingsProducts.map((p, i) => (
                            <option key={p.name} value={i}>{p.name} — {p.rate}% p.a.</option>
                        ))}
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="savings-principal-input">Initial Deposit (GH₵)</label>
                    <input
                        id="savings-principal-input"
                        type="number"
                        min="0"
                        value={principal}
                        onChange={(e) => setPrincipal(Number(e.target.value) || 0)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="savings-monthly-input">Monthly Contribution (GH₵)</label>
                    <input
                        id="savings-monthly-input"
                        type="number"
                        min="0"
                        value={monthly}
                        onChange={(e) => setMonthly(Number(e.target.value) || 0)}
                    />
                    <input
                        type="range"
                        min="0"
                        max="5000"
                        step="50"
                        value={monthly}
                        onChange={(e) => setMonthly(Number(e.target.value))}
                        className={styles.rangeSlider}
                        aria-label="Monthly contribution slider"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="savings-years-input">Duration (Years)</label>
                    <input
                        id="savings-years-input"
                        type="number"
                        min="1"
                        max="30"
                        value={years}
                        onChange={(e) => setYears(Math.min(Number(e.target.value) || 1, 30))}
                    />
                    <input
                        type="range"
                        min="1"
                        max="20"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className={styles.rangeSlider}
                        aria-label="Duration slider"
                    />
                </div>
            </div>

            <div className={styles.calcResults}>
                <div className={styles.calcResultItem}>
                    <span>Total Deposited</span>
                    <strong>{formatCurrency(totalDeposited)}</strong>
                </div>
                <div className={styles.calcResultItem}>
                    <span>Interest Earned</span>
                    <strong style={{ color: 'var(--green-500)' }}>{formatCurrency(interestEarned)}</strong>
                </div>
                <div className={styles.calcResultItem} style={{ borderTop: '2px solid var(--border-default)', paddingTop: 16 }}>
                    <span>Projected Balance</span>
                    <strong className={styles.calcHighlight}>{formatCurrency(balance)}</strong>
                </div>
            </div>

            <div className={styles.calcDisclaimer}>
                <Info size={14} />
                <span>Projections assume consistent contributions and fixed rates. Actual returns may vary.</span>
            </div>
        </div>
    );
}

export default function CalculatorsPage() {
    return (
        <>
            <div className={styles.pageHero}>
                <div className={styles.pageHeroInner}>
                    <h1>Financial Calculators</h1>
                    <p className={styles.pageHeroSubtitle}>
                        Plan your finances with our interactive tools. Estimate loan repayments and project savings growth using UACB&apos;s actual rates.
                    </p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.calcGrid}>
                        <ScrollReveal>
                            <LoanCalculator />
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <SavingsCalculator />
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={200}>
                        <div className={styles.calcCta}>
                            <Building2 size={24} style={{ color: 'var(--gold-warm)' }} />
                            <div>
                                <h3>Ready to Get Started?</h3>
                                <p>Visit any of our 19 branches across Ghana to open an account or apply for a loan.</p>
                            </div>
                            <Link href="/branches" className="btn btn-glow btn-md">
                                Find a Branch <ArrowRight size={16} />
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

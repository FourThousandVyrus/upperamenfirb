'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, TrendingUp, PiggyBank, ArrowRight, Info, Building2 } from 'lucide-react';
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

    const product = loanProducts[selectedProduct];
    const monthlyRate = product.rate / 100 / 12;
    const monthlyPayment = monthlyRate > 0
        ? (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1)
        : amount / tenure;
    const totalPayment = monthlyPayment * tenure;
    const totalInterest = totalPayment - amount;
    const processingFee = amount * (product.fee / 100);

    return (
        <div className={styles.calcCard}>
            <div className={styles.calcCardHeader}>
                <Calculator size={22} />
                <h3>Loan Repayment Calculator</h3>
            </div>

            <div className={styles.calcForm}>
                <div className={styles.formGroup}>
                    <label>Loan Product</label>
                    <select value={selectedProduct} onChange={(e) => setSelectedProduct(Number(e.target.value))}>
                        {loanProducts.map((p, i) => (
                            <option key={p.name} value={i}>{p.name} — {p.rate}% p.a.</option>
                        ))}
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label>Loan Amount (GH₵)</label>
                    <input
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
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Tenure (Months) — Max {product.maxTenure}</label>
                    <input
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
                    <label>Savings Product</label>
                    <select value={selectedProduct} onChange={(e) => setSelectedProduct(Number(e.target.value))}>
                        {savingsProducts.map((p, i) => (
                            <option key={p.name} value={i}>{p.name} — {p.rate}% p.a.</option>
                        ))}
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label>Initial Deposit (GH₵)</label>
                    <input
                        type="number"
                        min="0"
                        value={principal}
                        onChange={(e) => setPrincipal(Number(e.target.value) || 0)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Monthly Contribution (GH₵)</label>
                    <input
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
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Duration (Years)</label>
                    <input
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
                        Plan your finances with our interactive tools. Estimate loan repayments and project savings growth using UARB&apos;s actual rates.
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
                                <p>Visit any of our 18 branches across Ghana to open an account or apply for a loan.</p>
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

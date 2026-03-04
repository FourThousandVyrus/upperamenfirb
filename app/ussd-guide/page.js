'use client';

import Link from 'next/link';
import {
    Smartphone, Hash, ArrowRight, CheckCircle, AlertCircle,
    Wallet, ArrowLeftRight, Phone, CreditCard, HelpCircle, Shield,
    Radio, Users, Send, Globe
} from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

const menuOptions = [
    {
        number: '1',
        title: 'Check Balance',
        icon: Wallet,
        description: 'View your current account balance instantly.',
        steps: ['Dial *992#', 'Select 1 — Check Balance', 'Enter your 4-digit PIN', 'Your balance is displayed'],
    },
    {
        number: '2',
        title: 'Transfer Funds',
        icon: ArrowLeftRight,
        description: 'Send money to other UARB accounts or mobile money wallets.',
        steps: ['Dial *992#', 'Select 2 — Transfer', 'Choose: UARB Account or Mobile Money', 'Enter recipient details & amount', 'Confirm with your PIN'],
    },
    {
        number: '3',
        title: 'Buy Airtime',
        icon: Phone,
        description: 'Top up airtime for yourself or others on any network.',
        steps: ['Dial *992#', 'Select 3 — Buy Airtime', 'Choose: Self or Others', 'Enter phone number & amount', 'Confirm with your PIN'],
    },
    {
        number: '4',
        title: 'Mini Statement',
        icon: CreditCard,
        description: 'View your last 5 transactions.',
        steps: ['Dial *992#', 'Select 4 — Mini Statement', 'Enter your 4-digit PIN', 'Recent transactions are displayed'],
    },
    {
        number: '5',
        title: 'Change PIN',
        icon: Shield,
        description: 'Update your USSD banking PIN for security.',
        steps: ['Dial *992#', 'Select 5 — Change PIN', 'Enter current PIN', 'Enter new 4-digit PIN', 'Confirm new PIN'],
    },
];

const troubleshooting = [
    {
        problem: '"Connection problem or invalid MMI code"',
        solution: 'Ensure you have network signal. Try again in a few minutes. If the issue persists, restart your phone.',
    },
    {
        problem: '"Transaction failed"',
        solution: 'Check that you have sufficient balance. Verify that the recipient details are correct. Try again.',
    },
    {
        problem: '"Account locked" or too many wrong PINs',
        solution: 'Visit your nearest UARB branch with your Ghana Card to reset your PIN.',
    },
    {
        problem: 'USSD session times out too quickly',
        solution: 'The session expires after 60 seconds. Have your details ready before dialing. Start again if it times out.',
    },
    {
        problem: 'Cannot register for USSD banking',
        solution: 'Visit any UARB branch with your Ghana Card. Staff will register your phone number and set up your PIN.',
    },
];

export default function UssdGuidePage() {
    return (
        <>
            <div className={styles.pageHero}>
                <div className={styles.pageHeroInner}>
                    <h1>USSD Banking Guide</h1>
                    <p className={styles.pageHeroSubtitle}>
                        Bank from any phone — no internet required. Dial <strong style={{ color: 'var(--accent-300)' }}>*992#</strong> to get started.
                    </p>
                </div>
            </div>

            {/* Digital Services Overview */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div>
                                <span className="section-eyebrow">Always Available</span>
                                <h2>Your Bank, Always Open</h2>
                                <p style={{ marginBottom: 20, color: 'var(--text-muted)' }}>
                                    Access essential banking services without needing a smartphone or internet connection. Our digital channels are designed for everyone.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                    {[
                                        { icon: <Smartphone size={16} />, label: 'USSD Banking (*992#)' },
                                        { icon: <CreditCard size={16} />, label: 'E-Zwich Biometric Card' },
                                        { icon: <Radio size={16} />, label: 'SMS Banking Alerts' },
                                        { icon: <Users size={16} />, label: 'Agent Banking Points' },
                                        { icon: <Send size={16} />, label: 'Apexlink Transfers' },
                                        { icon: <Globe size={16} />, label: 'MoMo Integration' },
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', color: 'var(--text-body)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-white)', border: '1px solid var(--border-default)' }}>
                                            <span style={{ color: 'var(--accent-500)', flexShrink: 0 }}>{item.icon}</span>
                                            {item.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.splitImageWrap}>
                                <img
                                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=75"
                                    alt="Woman using phone for mobile banking"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* How to Get Started */}
            <section className={styles.section}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Get Started</span>
                            <h2 className="section-title">How to Register</h2>
                            <p className="section-desc centered">
                                USSD banking works on any phone — smartphone or feature phone. No internet or app download needed.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className={styles.stepsRow}>
                        {[
                            { step: 1, title: 'Visit a Branch', desc: 'Go to any of our 18 branches with your Ghana Card' },
                            { step: 2, title: 'Register', desc: 'Staff will link your phone number to your account' },
                            { step: 3, title: 'Set Your PIN', desc: 'Create a secure 4-digit PIN for USSD transactions' },
                            { step: 4, title: 'Start Banking', desc: 'Dial *992# from your registered phone to begin' },
                        ].map((item, idx) => (
                            <ScrollReveal key={item.step} delay={idx * 100}>
                                <div className={styles.stepCard}>
                                    <div className={styles.stepNumber}>{item.step}</div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* USSD Menu Options */}
            <section className={styles.sectionAlt}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">*992# Menu</span>
                            <h2 className="section-title">What You Can Do</h2>
                            <p className="section-desc centered">
                                Here&apos;s a complete guide to every option available on the *992# USSD menu.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className={styles.ussdMenu}>
                        {menuOptions.map((option, idx) => (
                            <ScrollReveal key={option.title} delay={idx * 80}>
                                <div className={styles.ussdCard}>
                                    <div className={styles.ussdCardHeader}>
                                        <div className={styles.ussdNumber}>
                                            <option.icon size={18} />
                                            <span>Option {option.number}</span>
                                        </div>
                                        <h3>{option.title}</h3>
                                        <p>{option.description}</p>
                                    </div>
                                    <div className={styles.ussdSteps}>
                                        {option.steps.map((step, i) => (
                                            <div key={i} className={styles.ussdStep}>
                                                <CheckCircle size={14} style={{ color: 'var(--green-500)', flexShrink: 0 }} />
                                                <span>{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Troubleshooting */}
            <section className={styles.section}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Help</span>
                            <h2 className="section-title">Troubleshooting</h2>
                            <p className="section-desc centered">
                                Having issues? Here are solutions to common USSD banking problems.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className={styles.troubleshootList}>
                        {troubleshooting.map((item, idx) => (
                            <ScrollReveal key={idx} delay={idx * 60}>
                                <div className={styles.troubleshootItem}>
                                    <div className={styles.troubleshootProblem}>
                                        <AlertCircle size={16} style={{ color: 'var(--error)', flexShrink: 0 }} />
                                        <strong>{item.problem}</strong>
                                    </div>
                                    <div className={styles.troubleshootSolution}>
                                        <CheckCircle size={16} style={{ color: 'var(--green-500)', flexShrink: 0 }} />
                                        <span>{item.solution}</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal delay={200}>
                        <div className={styles.calcCta}>
                            <HelpCircle size={24} style={{ color: 'var(--gold-warm)' }} />
                            <div>
                                <h3>Still Need Help?</h3>
                                <p>Contact our support team or visit any branch for USSD banking assistance.</p>
                            </div>
                            <Link href="/contact" className="btn btn-glow btn-md">
                                Contact Us <ArrowRight size={16} />
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

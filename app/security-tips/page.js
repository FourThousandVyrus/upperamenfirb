import Link from 'next/link';
import {
    Shield, AlertTriangle, Phone, Mail, Lock, Eye, EyeOff,
    MessageSquare, Smartphone, CreditCard, Users, ArrowRight, Info
} from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
    title: 'Security Tips & Fraud Awareness',
    description: 'Protect yourself from scams and fraud. Learn how Upper Amenfi Rural Bank keeps your money safe and what you can do to stay secure.',
};

const scamTypes = [
    {
        icon: MessageSquare,
        title: 'Phishing Messages',
        description: 'Fraudsters send fake SMS or emails pretending to be from UARB, asking you to click a link or share your PIN.',
        tip: 'UARB will never send you a link asking for your PIN, password, or account details via SMS or email.',
    },
    {
        icon: Phone,
        title: 'Phone Call Scams',
        description: 'Someone calls pretending to be a bank officer and asks for your account number, PIN, or OTP code.',
        tip: 'Never share your PIN, OTP, or passwords over the phone. UARB staff will never ask for these.',
    },
    {
        icon: Users,
        title: 'Impersonation Fraud',
        description: 'Scammers pose as bank agents, mobile money operators, or government officials to trick you into sending money.',
        tip: 'Always verify identities at a branch. Our official mobile bankers carry UARB-branded ID cards.',
    },
    {
        icon: Smartphone,
        title: 'Mobile Money Scams',
        description: 'Fraudsters ask you to approve transactions, claim you won a prize, or request "reversal" of a fake payment.',
        tip: 'Never approve transactions you did not initiate. There is no prize that requires you to send money first.',
    },
    {
        icon: CreditCard,
        title: 'Card Skimming',
        description: 'Devices attached to ATMs or POS terminals capture your card details and PIN.',
        tip: 'Always inspect the ATM before use. Cover the keypad when entering your PIN. Report any suspicious devices.',
    },
    {
        icon: Lock,
        title: 'Account Takeover',
        description: 'Criminals gain access to your account by stealing your login credentials or SIM swapping.',
        tip: 'Use strong, unique passwords. Never share your USSD PIN. Contact us immediately if your SIM is deactivated unexpectedly.',
    },
];

const safetyTips = [
    'Never share your PIN, password, or OTP with anyone — not even bank staff',
    'Do not click on links in unsolicited SMS or email messages',
    'Always verify caller identity before sharing any information',
    'Keep your USSD PIN (*992#) secret and change it regularly',
    'Report lost or stolen cards immediately by calling +233 533 519 373',
    'Monitor your account regularly for unauthorized transactions',
    'Use strong passwords that combine letters, numbers, and symbols',
    'Do not write your PIN on your card or keep it in your wallet',
    'Be cautious of "too good to be true" offers or prizes',
    'Lock your phone with a PIN, pattern, or biometric authentication',
];

export default function SecurityTipsPage() {
    return (
        <>
            <div className={styles.pageHero}>
                <div className={styles.pageHeroInner}>
                    <h1>Security Tips &amp; Fraud Awareness</h1>
                    <p className={styles.pageHeroSubtitle}>
                        Your security is our priority. Learn how to protect yourself from common scams and keep your money safe.
                    </p>
                </div>
            </div>

            {/* Important Warning */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.warningBanner}>
                            <AlertTriangle size={24} />
                            <div>
                                <h3>Important Notice</h3>
                                <p>
                                    Upper Amenfi Rural Bank will <strong>NEVER</strong> ask you for your PIN, password, OTP, or
                                    full account details via phone call, SMS, email, or social media. If someone contacts you
                                    claiming to be from UARB and requests this information, it is a scam.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Common Scam Types */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Know the Threats</span>
                            <h2 className="section-title">Common Types of Fraud</h2>
                            <p className="section-desc centered">
                                Understanding how scammers operate is your first line of defense.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className={styles.scamGrid}>
                        {scamTypes.map((scam, idx) => (
                            <ScrollReveal key={scam.title} delay={idx * 80}>
                                <div className={styles.scamCard}>
                                    <div className={styles.scamIcon}>
                                        <scam.icon size={22} />
                                    </div>
                                    <h3>{scam.title}</h3>
                                    <p>{scam.description}</p>
                                    <div className={styles.scamTip}>
                                        <Shield size={14} />
                                        <span>{scam.tip}</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety Tips Checklist */}
            <section className={styles.section}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Stay Safe</span>
                            <h2 className="section-title">Your Security Checklist</h2>
                            <p className="section-desc centered">
                                Follow these best practices to keep your accounts and personal information secure.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className={styles.tipsList}>
                        {safetyTips.map((tip, idx) => (
                            <ScrollReveal key={idx} delay={idx * 50}>
                                <div className={styles.tipItem}>
                                    <div className={styles.tipNumber}>{idx + 1}</div>
                                    <p>{tip}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Report Fraud */}
            <section className={styles.sectionDark}>
                <div className="container" style={{ maxWidth: 700 }}>
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Report Fraud</span>
                            <h2 className="section-title">Suspect Fraud? Act Immediately</h2>
                            <p className="section-desc centered" style={{ marginBottom: 36 }}>
                                If you suspect unauthorized activity on your account or have been targeted by a scam,
                                contact us immediately.
                            </p>

                            <div className={styles.reportChannels}>
                                <a href="tel:+233533519373" className={styles.reportChannel}>
                                    <Phone size={20} />
                                    <div>
                                        <strong>Call Our Hotline</strong>
                                        <span>+233 533 519 373</span>
                                    </div>
                                </a>
                                <a href="mailto:info@uarb.com.gh" className={styles.reportChannel}>
                                    <Mail size={20} />
                                    <div>
                                        <strong>Email Us</strong>
                                        <span>info@uarb.com.gh</span>
                                    </div>
                                </a>
                                <Link href="/branches" className={styles.reportChannel}>
                                    <Shield size={20} />
                                    <div>
                                        <strong>Visit a Branch</strong>
                                        <span>Find your nearest branch</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

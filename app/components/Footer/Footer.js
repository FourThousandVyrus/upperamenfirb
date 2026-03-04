'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import TransitionLink from '../RouteTransition/TransitionLink';
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Shield,
    Award,
    Landmark,
    Building2,
    Send,
    CheckCircle,
} from 'lucide-react';

const footerLinks = {
    banking: [
        { href: '/products-services', label: 'Savings Accounts' },
        { href: '/products-services', label: 'Current Accounts' },
        { href: '/products-services', label: 'Fixed Deposits' },
        { href: '/loans', label: 'Personal Loans' },
        { href: '/loans', label: 'Business Loans' },
        { href: '/loans', label: 'Microfinance' },
    ],
    company: [
        { href: '/about', label: 'Our Story' },
        { href: '/governance', label: 'Leadership' },
        { href: '/csr', label: 'Community Impact' },
        { href: '/news', label: 'News & Updates' },
        { href: '/rates', label: 'Current Rates' },
    ],
    support: [
        { href: '/contact', label: 'Contact Us' },
        { href: '/branches', label: 'Find a Branch' },
        { href: '/calculators', label: 'Calculators' },
        { href: '/ussd-guide', label: 'USSD Guide' },
        { href: '/security-tips', label: 'Security Tips' },
        { href: '/contact', label: 'FAQs' },
    ],
};

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 4000);
    };

    return (
        <footer className={styles.footer}>
            {/* Newsletter Banner */}
            <div className={styles.newsletter}>
                <div className="container">
                    <div className={styles.newsletterInner}>
                        <div>
                            <h3>Stay Updated</h3>
                            <p>Get the latest news, rates, and financial tips delivered to your inbox.</p>
                        </div>
                        {subscribed ? (
                            <div className={styles.newsletterSuccess}>
                                <CheckCircle size={20} />
                                <span>Thank you for subscribing!</span>
                            </div>
                        ) : (
                            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    className={styles.newsletterInput}
                                    placeholder="Enter your email address"
                                    aria-label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="btn btn-glow btn-md">
                                    Subscribe <Send size={15} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className={styles.footerMain}>
                <div className="container">
                    <div className={styles.footerGrid}>
                        {/* Brand */}
                        <div className={styles.footerBrand}>
                            <TransitionLink href="/" className={styles.footerLogo}>
                                <Image src="/images/logo.png" alt="Upper Amenfi Rural Bank Limited" width={327} height={92} />
                            </TransitionLink>
                            <p className={styles.footerBrandDesc}>
                                Empowering communities with modern, secure financial services for over 37 years across Western and Ashanti regions of Ghana.
                            </p>
                            <div className={styles.socialLinks}>
                                <a href="https://www.facebook.com/upperamenfirb" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
                                    <Facebook size={18} />
                                </a>
                                <a href="https://twitter.com/upperamenfirb" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialLink}>
                                    <Twitter size={18} />
                                </a>
                                <a href="https://www.instagram.com/upperamenfirb" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                                    <Instagram size={18} />
                                </a>
                                <a href="https://www.linkedin.com/company/upperamenfirb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Banking Links */}
                        <div className={styles.footerCol}>
                            <h4>Banking</h4>
                            <ul>
                                {footerLinks.banking.map((link) => (
                                    <li key={link.label}>
                                        <TransitionLink href={link.href}>{link.label}</TransitionLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className={styles.footerCol}>
                            <h4>Company</h4>
                            <ul>
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <TransitionLink href={link.href}>{link.label}</TransitionLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div className={styles.footerCol}>
                            <h4>Support</h4>
                            <ul>
                                {footerLinks.support.map((link) => (
                                    <li key={link.label}>
                                        <TransitionLink href={link.href}>{link.label}</TransitionLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className={styles.footerCol}>
                            <h4>Contact</h4>
                            <div className={styles.contactItems}>
                                <div className={styles.contactItem}>
                                    <Phone size={14} />
                                    <a href="tel:+233312091556" style={{ color: 'inherit', textDecoration: 'none' }}>+233 312 091 556</a>
                                </div>
                                <div className={styles.contactItem}>
                                    <Mail size={14} />
                                    <span>info@uarb.com.gh</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <MapPin size={14} />
                                    <span>Asankrangwa, Western Region, Ghana</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Regulatory Badges */}
            <div className={styles.badges}>
                <div className="container">
                    <div className={styles.badgesInner}>
                        <div className={styles.badge}>
                            <Shield size={16} /> Licensed by Bank of Ghana
                        </div>
                        <div className={styles.badge}>
                            <Landmark size={16} /> Ghana Deposit Protection
                        </div>
                        <div className={styles.badge}>
                            <Building2 size={16} /> ARB Apex Bank Member
                        </div>
                        <div className={styles.badge}>
                            <Award size={16} /> PLC Status
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className="container">
                    <div className={styles.bottomInner}>
                        <span>&copy; 2026 Upper Amenfi Rural Bank PLC. All rights reserved.</span>
                        <div className={styles.bottomLinks}>
                            <TransitionLink href="/privacy">Privacy Policy</TransitionLink>
                            <TransitionLink href="/terms">Terms of Service</TransitionLink>
                            <TransitionLink href="/privacy#cookies">Cookie Policy</TransitionLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

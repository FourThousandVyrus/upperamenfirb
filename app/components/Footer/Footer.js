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
        { href: '/governance', label: 'Leadership & Governance' },
        { href: '/investor-relations', label: 'Investor Relations' },
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
    return (
        <footer className={styles.footer}>
            {/* Main Footer */}
            <div className={styles.footerMain}>
                <div className="container">
                    <div className={styles.footerGrid}>
                        {/* Brand */}
                        <div className={styles.footerBrand}>
                        <TransitionLink href="/" className={styles.footerLogo}>
                            <Image
                                src="/images/logo-new.jpeg"
                                alt="Upper Amenfi Community Bank PLC"
                                className={styles.footerLogoImg}
                                width={48}
                                height={48}
                            />
                            <div className={styles.footerLogoText}>
                                <span className={styles.footerLogoName}>UPPER AMENFI</span>
                                <span className={styles.footerLogoName}>COMMUNITY BANK PLC.</span>
                                <div className={styles.footerLogoDivider} />
                                <span className={styles.footerLogoSub}>ALWAYS AT YOUR SERVICE</span>
                            </div>
                        </TransitionLink>
                            <p className={styles.footerBrandDesc}>
                                Empowering communities with modern, secure financial services for over 39 years across Western, Western North, and Central regions of Ghana.
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
                                    <a href="tel:+233509314527" style={{ color: 'inherit', textDecoration: 'none' }}>+233 (0) 509 314 527</a>
                                </div>
                                <div className={styles.contactItem}>
                                    <Mail size={14} />
                                    <span>info@upperamenfirb.com</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <MapPin size={14} />
                                    <span>Wassa Ankwaso, Western Region, Ghana</span>
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

            {/* Disclaimer */}
            <div className={styles.disclaimer}>
                <div className="container">
                    <p>
                        <strong>Disclaimer:</strong> Upper Amenfi Community Bank PLC is licensed and regulated by the Bank of Ghana.
                        The information provided on this website is for general informational purposes only and does not constitute financial, investment, or legal advice.
                        Product features, interest rates, and fees are subject to change without notice and may vary depending on individual circumstances.
                        The Bank of Ghana deposit insurance covers eligible deposits up to the applicable limit.
                        For personalized advice, please visit any of our branches or contact our customer service team.
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className="container">
                    <div className={styles.bottomInner}>
                        <span>&copy; {new Date().getFullYear()} Upper Amenfi Community Bank PLC. All rights reserved.</span>
                        <div className={styles.bottomLinks}>
                            <TransitionLink href="/privacy">Privacy Policy</TransitionLink>
                            <TransitionLink href="/terms">Terms of Service</TransitionLink>
                            <TransitionLink href="/privacy#cookies" className={styles.bottomLinks}>Cookie Policy</TransitionLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

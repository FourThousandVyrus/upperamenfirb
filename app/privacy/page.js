import Link from 'next/link';
import styles from '../inner.module.css';

export const metadata = {
    title: 'Privacy Policy',
    description: 'Upper Amenfi Rural Bank PLC privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
    return (
        <>
            <div className={styles.pageHero}>
                <div className={styles.pageHeroInner}>
                    <h1>Privacy Policy</h1>
                    <p className={styles.pageHeroSubtitle}>
                        How we collect, use, and protect your personal information.
                    </p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className={styles.legalContent}>
                        <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>
                            <strong>Last Updated:</strong> March 1, 2026
                        </p>

                        <h2>1. Introduction</h2>
                        <p>
                            Upper Amenfi Rural Bank PLC (&quot;UARB&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
                            protecting the privacy and security of your personal information. This Privacy Policy explains how we collect,
                            use, store, and protect information gathered through our website (upperamenfirb.com).
                        </p>
                        <p>
                            We comply with the Ghana Data Protection Act, 2012 (Act 843) and other applicable data protection regulations.
                        </p>

                        <h2>2. Information We Collect</h2>
                        <h3>Information You Provide</h3>
                        <ul>
                            <li>Full name, email address, and phone number when you submit a contact form</li>
                            <li>Messages and inquiries you send us through the website</li>
                            <li>Email address when you subscribe to our newsletter</li>
                        </ul>

                        <h3>Information Collected Automatically</h3>
                        <ul>
                            <li>Browser type, operating system, and device information</li>
                            <li>IP address and approximate geographic location</li>
                            <li>Pages visited, time spent on pages, and navigation patterns</li>
                            <li>Referring website or source</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Send you newsletters and banking updates (with your consent)</li>
                            <li>Improve our website and user experience</li>
                            <li>Analyze website traffic and usage patterns</li>
                            <li>Comply with legal and regulatory obligations</li>
                        </ul>

                        <h2>4. Cookies</h2>
                        <p>
                            Our website uses cookies — small text files stored on your device — to enhance your browsing experience.
                            We use cookies for:
                        </p>
                        <ul>
                            <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                            <li><strong>Preference cookies:</strong> Remember your settings and choices</li>
                        </ul>
                        <p>
                            You can manage cookie preferences through our cookie consent banner or your browser settings.
                        </p>

                        <h2>5. Data Sharing</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties. We may share your data with:
                        </p>
                        <ul>
                            <li>Bank of Ghana and regulatory bodies as required by law</li>
                            <li>ARB Apex Bank Limited in the course of normal banking operations</li>
                            <li>Service providers who assist with website hosting and analytics (under strict confidentiality agreements)</li>
                        </ul>

                        <h2>6. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information against
                            unauthorized access, alteration, disclosure, or destruction. These measures include:
                        </p>
                        <ul>
                            <li>SSL/TLS encryption for data in transit</li>
                            <li>Secure server infrastructure</li>
                            <li>Regular security reviews and updates</li>
                            <li>Access controls limiting data access to authorized personnel</li>
                        </ul>

                        <h2>7. Your Rights</h2>
                        <p>Under the Ghana Data Protection Act, 2012, you have the right to:</p>
                        <ul>
                            <li>Access the personal data we hold about you</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data (subject to legal obligations)</li>
                            <li>Object to or restrict certain processing of your data</li>
                            <li>Withdraw consent at any time</li>
                        </ul>

                        <h2>8. Data Retention</h2>
                        <p>
                            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
                            policy, or as required by law. Contact form submissions are retained for up to 12 months.
                            Newsletter subscriptions remain active until you unsubscribe.
                        </p>

                        <h2>9. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or
                            content of these external sites. We encourage you to read their privacy policies.
                        </p>

                        <h2>10. Children&apos;s Privacy</h2>
                        <p>
                            Our website is not directed at children under 18. We do not knowingly collect personal information from
                            children. If you believe a child has provided us with personal data, please contact us.
                        </p>

                        <h2>11. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
                            &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
                        </p>

                        <h2>12. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
                        </p>
                        <ul>
                            <li><strong>Email:</strong> info@uarb.com.gh</li>
                            <li><strong>Phone:</strong> +233 533 519 373</li>
                            <li><strong>Address:</strong> Upper Amenfi Rural Bank PLC, Ankwaso, Wassa Amenfi, P.O. Box 399, Dunkwa-on-Offin</li>
                        </ul>
                        <p>
                            You may also contact the <strong>Data Protection Commission of Ghana</strong> if you believe your data
                            protection rights have been violated.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

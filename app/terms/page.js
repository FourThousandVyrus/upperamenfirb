import Link from 'next/link';
import styles from '../inner.module.css';

export const metadata = {
    title: 'Terms & Conditions',
    description: 'Terms and conditions for using the Upper Amenfi Rural Bank PLC website.',
};

export default function TermsPage() {
    return (
        <>
            <div className={styles.pageHero}>
                <div className={styles.pageHeroInner}>
                    <h1>Terms &amp; Conditions</h1>
                    <p className={styles.pageHeroSubtitle}>
                        Please read these terms carefully before using our website.
                    </p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className={styles.legalContent}>
                        <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>
                            <strong>Last Updated:</strong> March 1, 2026
                        </p>

                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Upper Amenfi Rural Bank PLC (&quot;UARB&quot;) website at upperamenfirb.com,
                            you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms,
                            please do not use our website.
                        </p>

                        <h2>2. Website Purpose</h2>
                        <p>
                            This website is an informational and promotional platform for Upper Amenfi Rural Bank PLC. It provides
                            details about our banking products, services, branch network, and corporate information. This website
                            does not provide online banking services, account access, or transaction capabilities.
                        </p>

                        <h2>3. Accuracy of Information</h2>
                        <p>
                            While we strive to keep all information on this website accurate and up-to-date, we do not guarantee the
                            completeness or accuracy of any content. Interest rates, fees, and product details displayed are indicative
                            and may change without prior notice. For the most current rates and terms, please visit any of our branches
                            or contact us directly.
                        </p>

                        <h2>4. Calculator Disclaimer</h2>
                        <p>
                            The loan and savings calculators provided on this website are for illustrative purposes only. Results are
                            estimates based on the information you provide and do not constitute a loan offer, financial advice, or
                            guarantee. Actual terms, rates, and amounts may vary. Please consult with our staff for accurate
                            calculations and formal product offers.
                        </p>

                        <h2>5. Intellectual Property</h2>
                        <p>
                            All content on this website — including text, graphics, logos, images, and software — is the property of
                            Upper Amenfi Rural Bank PLC and is protected by Ghanaian and international copyright laws. You may not
                            reproduce, distribute, or create derivative works from this content without our written permission.
                        </p>

                        <h2>6. User Conduct</h2>
                        <p>When using this website, you agree not to:</p>
                        <ul>
                            <li>Submit false, misleading, or fraudulent information through our forms</li>
                            <li>Attempt to gain unauthorized access to any part of the website</li>
                            <li>Use the website for any unlawful purpose</li>
                            <li>Transmit malware, viruses, or harmful code</li>
                            <li>Scrape, crawl, or collect data from the website without permission</li>
                        </ul>

                        <h2>7. Contact Form &amp; Communications</h2>
                        <p>
                            Information submitted through our contact forms is used solely to respond to your inquiries.
                            By submitting a form, you consent to being contacted by UARB via the email or phone number you provide.
                            We will not share your contact information with third parties for marketing purposes.
                        </p>

                        <h2>8. Third-Party Links</h2>
                        <p>
                            Our website may contain links to external websites (e.g., Google Maps, social media platforms).
                            These links are provided for convenience only. UARB is not responsible for the content, privacy practices,
                            or availability of third-party websites.
                        </p>

                        <h2>9. Limitation of Liability</h2>
                        <p>
                            Upper Amenfi Rural Bank PLC shall not be liable for any direct, indirect, incidental, or consequential
                            damages arising from your use of this website. This includes, but is not limited to, damages resulting
                            from reliance on information provided, service interruptions, or inability to access the website.
                        </p>

                        <h2>10. Governing Law</h2>
                        <p>
                            These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of
                            Ghana. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ghana.
                        </p>

                        <h2>11. Regulatory Information</h2>
                        <p>
                            Upper Amenfi Rural Bank PLC is licensed and regulated by the Bank of Ghana. We are a member of ARB Apex
                            Bank Limited and participate in the Ghana Deposit Protection Scheme operated by the Ghana Deposit
                            Protection Corporation.
                        </p>

                        <h2>12. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms and Conditions at any time. Changes take effect immediately upon
                            posting. Continued use of the website after changes are posted constitutes acceptance of the revised terms.
                        </p>

                        <h2>13. Contact</h2>
                        <p>For questions about these Terms and Conditions, please contact:</p>
                        <ul>
                            <li><strong>Email:</strong> info@uarb.com.gh</li>
                            <li><strong>Phone:</strong> +233 533 519 373</li>
                            <li><strong>Head Office:</strong> Upper Amenfi Rural Bank PLC, Ankwaso, Wassa Amenfi, P.O. Box 399, Dunkwa-on-Offin</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

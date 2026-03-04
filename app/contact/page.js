'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Globe, Hash, Clock, Building2, ArrowRight, CheckCircle, Loader2, ChevronDown } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

const faqs = [
    { q: 'What do I need to open an account?', a: 'A valid Ghana Card (or national ID), one passport photo, and an initial deposit. Visit any of our 18 branches to get started.' },
    { q: 'How long does loan approval take?', a: 'Easy loans for government employees are approved in under 3 hours. Other loans typically take 2-5 business days.' },
    { q: 'Can I access my account from my phone?', a: 'Yes! Use our USSD mobile banking code *992# from any phone — no internet required. You can check balances, transfer funds, and more. See our USSD Guide for details.' },
    { q: 'What are your operating hours?', a: 'Monday to Friday: 8:30 AM - 4:30 PM. Saturday: 9:00 AM - 1:00 PM. Closed on Sundays and public holidays.' },
    { q: 'Is my money safe?', a: 'Yes. UARB is fully licensed by Bank of Ghana and your deposits are protected under the Ghana Deposit Protection scheme.' },
    { q: 'How do I report a lost card?', a: 'Call our hotline immediately at +233 533 519 373 or visit any branch. We will block the card and issue a replacement.' },
    { q: 'What savings products do you offer?', a: 'We offer Normal Savings (8% p.a.), Susu Savings (7.5% p.a.), Fixed Deposits (14-18% p.a.), Current Accounts, and Salary Accounts. Visit any branch to learn more.' },
    { q: 'How can I estimate my loan repayment?', a: 'Use our free online Loan Calculator to estimate monthly repayments based on your loan amount, tenure, and product type.' },
    { q: 'Do you offer Western Union services?', a: 'Yes! You can send and receive money via Western Union Money Transfer (WUMT) at select branches. Visit our branches page to find a location near you.' },
    { q: 'How many branches does UARB have?', a: 'We have 18 branches across 5 regions of Ghana — Western, Western North, Central, Eastern, and Ashanti regions.' },
];

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState(-1);
    const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', subject: '', message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: 'YOUR_WEB3FORMS_KEY', // Replace with your Web3Forms access key
                    subject: `UARB Website Enquiry: ${formData.subject}`,
                    from_name: formData.name,
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    topic: formData.subject,
                    message: formData.message,
                }),
            });

            if (res.ok) {
                setFormStatus('success');
                setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 4000);
            }
        } catch {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 4000);
        }
    };

    return (
        <>
            {/* Hero */}
            <div className={styles.pageHero}>
                <div className={styles.pageHeroInner}>
                    <h1>Get in Touch</h1>
                    <p className={styles.pageHeroSubtitle}>
                        We&apos;re here to help. Reach us by phone, email, or visit any of our 18 branches across Ghana.
                    </p>
                </div>
            </div>

            {/* Contact Grid */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        <ScrollReveal>
                            <div className={styles.contactCard}>
                                <h3>Contact Information</h3>

                                <div className={styles.contactEntry}>
                                    <div className={styles.contactIcon}><Building2 size={18} /></div>
                                    <div>
                                        <h4>Head Office</h4>
                                        <p>Upper Amenfi Rural Bank PLC<br />Ankwaso, Wassa Amenfi</p>
                                    </div>
                                </div>

                                <div className={styles.contactEntry}>
                                    <div className={styles.contactIcon}><Mail size={18} /></div>
                                    <div>
                                        <h4>Mailing Address</h4>
                                        <p>P.O. Box 399, Dunkwa-on-Offin</p>
                                    </div>
                                </div>

                                <div className={styles.contactEntry}>
                                    <div className={styles.contactIcon}><Phone size={18} /></div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>
                                            <a href="tel:+233533519373" style={{ color: 'var(--navy)', fontWeight: 600 }}>+233 533 519 373</a><br />
                                            <a href="tel:+233312091556" style={{ color: 'var(--navy)', fontWeight: 600 }}>+233 312 091 556</a>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.contactEntry}>
                                    <div className={styles.contactIcon}><Mail size={18} /></div>
                                    <div>
                                        <h4>Email</h4>
                                        <p><a href="mailto:info@uarb.com.gh" style={{ color: 'var(--navy)', fontWeight: 600 }}>info@uarb.com.gh</a></p>
                                    </div>
                                </div>

                                <div className={styles.contactEntry}>
                                    <div className={styles.contactIcon}><Globe size={18} /></div>
                                    <div>
                                        <h4>Digital Banking</h4>
                                        <p>USSD: *992#</p>
                                    </div>
                                </div>

                                <div className={styles.contactEntry}>
                                    <div className={styles.contactIcon}><Clock size={18} /></div>
                                    <div>
                                        <h4>Working Hours</h4>
                                        <p>Mon – Fri: 8:30 AM – 4:30 PM<br />Saturday: 9:00 AM – 1:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <div className={styles.contactCard}>
                                <h3>Send Us a Message</h3>

                                {formStatus === 'success' ? (
                                    <div style={{
                                        textAlign: 'center', padding: '48px 24px',
                                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
                                    }}>
                                        <CheckCircle size={48} style={{ color: 'var(--green-500)' }} />
                                        <h4 style={{ fontSize: '1.1rem' }}>Message Sent!</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className={styles.formGroup}>
                                            <label>Full Name</label>
                                            <input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Phone Number</label>
                                            <input type="tel" name="phone" placeholder="e.g. 0533 519 373" value={formData.phone} onChange={handleChange} required />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Email Address</label>
                                            <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Subject</label>
                                            <select name="subject" value={formData.subject} onChange={handleChange} required>
                                                <option value="">Select a topic</option>
                                                <option>Account Opening</option>
                                                <option>Loan Enquiry</option>
                                                <option>Technical Support</option>
                                                <option>Complaint</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Message</label>
                                            <textarea name="message" placeholder="Tell us how we can help..." value={formData.message} onChange={handleChange} required />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-glow btn-md"
                                            style={{ width: '100%', justifyContent: 'center' }}
                                            disabled={formStatus === 'sending'}
                                        >
                                            {formStatus === 'sending' ? (
                                                <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                                            ) : (
                                                <>Send Message <ArrowRight size={16} /></>
                                            )}
                                        </button>
                                        {formStatus === 'error' && (
                                            <p style={{ color: 'var(--error)', fontSize: '0.85rem', marginTop: 12, textAlign: 'center' }}>
                                                Something went wrong. Please try again or call us directly.
                                            </p>
                                        )}
                                    </form>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Support</span>
                            <h2 className="section-title">Frequently Asked Questions</h2>
                        </div>
                    </ScrollReveal>

                    <div className={styles.accordion} style={{ maxWidth: 720, margin: '40px auto 0' }}>
                        {faqs.map((faq, idx) => (
                            <ScrollReveal key={idx} delay={idx * 50}>
                                <div className={styles.accordionItem}>
                                    <button
                                        className={styles.accordionHeader}
                                        onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                                    >
                                        {faq.q}
                                        <ChevronDown size={16} className={`${styles.accordionArrow} ${openFaq === idx ? styles.open : ''}`} />
                                    </button>
                                    <div className={`${styles.accordionBody} ${openFaq === idx ? styles.open : ''}`}>
                                        <div className={styles.accordionContent}>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.65 }}>{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

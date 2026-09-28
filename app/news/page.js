import Image from 'next/image';
import Link from 'next/link';
import { Calendar, FileText } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

const newsItems = [
    {
        category: 'Announcement',
        date: 'July 2026',
        title: '36th Annual General Meeting Highlights',
        excerpt: 'Shareholders and stakeholders gathered for the bank\'s 36th AGM held on 4th July 2026. Highlights include the approval of a GH¢ 0.08221 dividend per share (totaling GH¢ 2,499,603.52), election of three new board members, and review of record financial performance with total assets reaching GH¢ 930.7 million.',
        img: '/images/stock/stock-meeting-notes.webp',
        featured: true,
    },
    {
        category: 'Notice',
        date: 'Ongoing',
        title: 'Dormant Account Reactivation',
        excerpt: 'We wish to inform our cherished customers who have not been transacting on their accounts to kindly visit any of our branches with a valid National Identification Card (Ghana Card) to reactivate their accounts and continue enjoying our services.',
        img: '/images/branch_strip.webp',
        link: '/DORMANT-ACCOUNT.pdf',
        linkLabel: 'View Dormant Accounts List',
    },
    {
        category: 'Announcement',
        date: 'July 2025',
        title: '35th Annual General Meeting Highlights',
        excerpt: 'Shareholders gathered at the Forecourt of the Bank premises in Wassa Akropong for the 35th AGM held on 5th July 2025. The bank reported a 79.5% growth in total assets to GH¢ 669.7 million and approved a dividend of GH¢ 0.10 per share (totaling GH¢ 2,079,590.68).',
        img: '/images/stock/stock-meeting-notes.webp',
    },
    {
        category: 'Community',
        date: 'December 2023',
        title: 'Annual Scholarship Awards Ceremony',
        excerpt: '50 outstanding students from our operating communities received educational scholarships, continuing our commitment to investing in the next generation.',
        img: '/images/stock/stock-education.webp',
    },
    {
        category: 'Digital',
        date: 'November 2023',
        title: 'Enhanced USSD Mobile Banking Platform',
        excerpt: 'Our updated USSD banking platform now supports faster transactions, balance inquiries, and mini-statements from any mobile phone.',
        img: '/images/stock/stock-mobile-banking.webp',
    },
    {
        category: 'Growth',
        date: 'September 2023',
        title: 'Manso Nkwanta Branch Marks Third Anniversary',
        excerpt: 'Our newest branch celebrates three years of serving the Wassa Amenfi Central community with deposits exceeding GH₵15 million.',
        img: '/images/stock/stock-building.webp',
    },
    {
        category: 'CSR',
        date: 'August 2023',
        title: 'Road Rehabilitation in Wassa Amenfi',
        excerpt: 'The bank contributed to the rehabilitation of 12km of community road linking farming communities to the Ankwaso market center.',
        img: '/images/stock/stock-community-gathering.webp',
    },
    {
        category: 'Financial Literacy',
        date: 'July 2023',
        title: 'Susu Savers Workshop Series',
        excerpt: 'Over 200 market traders participated in our financial literacy workshop series, learning budgeting, saving strategies, and loan management skills.',
        img: '/images/stock/stock-card-payment.webp',
    },
];

export default function NewsPage() {
    const featured = newsItems[0];
    const rest = newsItems.slice(1);

    return (
        <>
            <div className={styles.pageHero}>
                <div className={styles.pageHeroInner}>
                    <h1>News &amp; Insights</h1>
                    <p className={styles.pageHeroSubtitle}>
                        Stay updated with the latest from Upper Amenfi Community Bank.
                    </p>
                </div>
            </div>

            {/* Featured */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div className={styles.splitImageWrap}>
                                <Image sizes="(max-width: 900px) 100vw, 55vw" src={featured.img} alt={featured.title} width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div>
                                <span style={{
                                    fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: 700,
                                    textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-500)',
                                    marginBottom: 8, display: 'block'
                                }}>{featured.category}</span>
                                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: 12 }}>{featured.title}</h2>
                                <p style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 16 }}>
                                    <Calendar size={14} /> {featured.date}
                                </p>
                                <p style={{ fontSize: '1rem', lineHeight: 1.75 }}>{featured.excerpt}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* More News */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-eyebrow">More Updates</span>
                        <h2 className="section-title">Recent News</h2>
                    </ScrollReveal>
                    <div className={styles.cardGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', marginTop: 32 }}>
                        {rest.map((n, i) => (
                            <ScrollReveal key={i} delay={i * 80}>
                                <div className={styles.imageCard}>
                                    <div className={styles.imageCardImg}>
                                        <Image sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src={n.img} alt={n.title} width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className={styles.imageCardBody}>
                                        <span style={{
                                            fontFamily: 'var(--font-heading)', fontSize: '0.68rem', fontWeight: 700,
                                            textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-500)',
                                            display: 'block', marginBottom: 6
                                        }}>{n.category}</span>
                                        <h3>{n.title}</h3>
                                        <p style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 8 }}>
                                            <Calendar size={12} /> {n.date}
                                        </p>
                                        <p>{n.excerpt}</p>
                                        {n.link && (
                                            <a href={n.link} target="_blank" rel="noopener noreferrer" style={{
                                                display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12,
                                                fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary-600)',
                                                textDecoration: 'none', borderBottom: '1.5px solid var(--accent-500)', paddingBottom: 2
                                            }}>
                                                <FileText size={14} /> {n.linkLabel}
                                            </a>
                                        )}
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

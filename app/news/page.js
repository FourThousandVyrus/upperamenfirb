import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
    title: 'News & Updates | Upper Amenfi Rural Bank PLC',
    description: 'Stay updated with the latest news, community events, and financial insights from Upper Amenfi Rural Bank.',
};

const newsItems = [
    {
        category: 'Announcement',
        date: 'January 2024',
        title: '35th Annual General Meeting Highlights',
        excerpt: 'Shareholders and stakeholders gathered for the bank\'s milestone 35th AGM to review financial performance, approve dividends, and chart the path forward for continued growth across three regions.',
        img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
        featured: true,
    },
    {
        category: 'Community',
        date: 'December 2023',
        title: 'Annual Scholarship Awards Ceremony',
        excerpt: '50 outstanding students from our operating communities received educational scholarships, continuing our commitment to investing in the next generation.',
        img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    },
    {
        category: 'Digital',
        date: 'November 2023',
        title: 'Enhanced USSD Mobile Banking Platform',
        excerpt: 'Our updated USSD banking platform now supports faster transactions, balance inquiries, and mini-statements from any mobile phone.',
        img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
    },
    {
        category: 'Growth',
        date: 'September 2023',
        title: 'Manso Nkwanta Branch Marks Third Anniversary',
        excerpt: 'Our newest branch celebrates three years of serving the Wassa Amenfi Central community with deposits exceeding GH₵15 million.',
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    },
    {
        category: 'CSR',
        date: 'August 2023',
        title: 'Road Rehabilitation in Wassa Amenfi',
        excerpt: 'The bank contributed to the rehabilitation of 12km of community road linking farming communities to the Ankwaso market center.',
        img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
    },
    {
        category: 'Financial Literacy',
        date: 'July 2023',
        title: 'Susu Savers Workshop Series',
        excerpt: 'Over 200 market traders participated in our financial literacy workshop series, learning budgeting, saving strategies, and loan management skills.',
        img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
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
                        Stay updated with the latest from Upper Amenfi Rural Bank.
                    </p>
                </div>
            </div>

            {/* Featured */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div className={styles.splitImageWrap}>
                                <Image src={featured.img} alt={featured.title} width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    <div className={styles.cardGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: 32 }}>
                        {rest.map((n, i) => (
                            <ScrollReveal key={i} delay={i * 80}>
                                <div className={styles.imageCard}>
                                    <div className={styles.imageCardImg}>
                                        <Image src={n.img} alt={n.title} width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

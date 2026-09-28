'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Hammer, Tractor, Building2, Heart } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

const csrItems = [
    {
        icon: <Building2 size={22} />,
        title: 'Ankwawso Community Centre',
        desc: 'Dedicated GH¢ 225,345 to the construction and development of the Ankwawso Community Centre, providing a high-quality venue for civic assemblies, social events, and local development planning.',
        img: '/images/stock/stock-building.webp',
    },
    {
        icon: <Hammer size={22} />,
        title: 'Juabo Road Infrastructure',
        desc: 'Invested GH¢ 187,650 in the crucial Juabo Road construction project, facilitating transportation of agricultural produce and connecting rural communities to regional markets.',
        img: '/images/stock/stock-construction.webp',
    },
    {
        icon: <Hammer size={22} />,
        title: 'Road Repairs (Diaso, Ankwaso, Humjibre)',
        desc: 'Provided GH¢ 150,000 for critical road maintenance and rehabilitation works on the routes connecting Diaso, Ankwaso, and Humjibre, improving road safety and regional transport logistics.',
        img: '/images/stock/stock-community.webp',
    },
    {
        icon: <Tractor size={22} />,
        title: 'Agricultural Support & Farmers\' Day',
        desc: 'Allocated GH¢ 46,290 to support the annual District Farmers\' Day celebrations across 8 district assemblies, providing tools, rewards, and cash prizes to local farmers.',
        img: '/images/stock/stock-agriculture.webp',
    },
    {
        icon: <Heart size={22} />,
        title: 'Ankasie & Dominase Clean Water',
        desc: 'Funded clean water initiatives in Ankasie and Dominase (totaling GH¢ 18,155) to supply clean, potable water systems to rural schools and clinics, preventing water-borne illnesses.',
        img: '/images/stock/stock-charity-hands.webp',
    },
    {
        icon: <GraduationCap size={22} />,
        title: 'Education & Scholarship Funding',
        desc: 'Supported the Manso Amenfi Education Office and awarded scholarships (totaling GH¢ 6,700) to brilliant but needy students in secondary and tertiary institutions to cover tuition and study materials.',
        img: '/images/stock/stock-education.webp',
    },
];

export default function CSRPage() {
    return (
        <>
            {/* Hero */}
            <div className={styles.pageHeroCinematic}>
                <Image sizes="100vw" src="/images/stock/stock-education.webp" alt="Community" width={1600} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className={styles.heroText}>
                    <h1>Where Your Money Makes a Difference</h1>
                </div>
            </div>

            {/* Intro */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div style={{ maxWidth: 'min(680px, 100%)' }}>
                            <span className="section-eyebrow">Social Responsibility</span>
                            <h2 className="section-title">Investing in Our Communities</h2>
                            <p className="section-desc">
                                Upper Amenfi Community Bank PLC is deeply committed to social responsibility and community development. In the 2024 fiscal year, the bank invested a total of <strong>GH¢ 665,445</strong> back into local education, infrastructure, healthcare, agricultural support, and community services, continuing the proud legacy of the cocoa farmers who founded us.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CSR Items - Editorial Style */}
            {csrItems.map((item, i) => (
                <section key={i} className={i % 2 === 0 ? styles.section : styles.sectionAlt} style={{ paddingTop: i === 0 ? 0 : undefined }}>
                    <div className="container">
                        <ScrollReveal>
                            <div className={`${styles.splitLayout} ${i % 2 !== 0 ? styles.reversed : ''}`}>
                                <div className={styles.splitImageWrap}>
                                    <Image sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src={item.img} alt={item.title} width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <div className={styles.cardIconGold} style={{ marginBottom: 20 }}>{item.icon}</div>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{item.title}</h2>
                                    <p style={{ marginTop: 16, maxWidth: 'min(480px, 100%)' }}>{item.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            ))}

            {/* Impact CTA */}
            <section className={styles.sectionDark}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow" style={{ color: 'var(--accent-300)' }}>Annual Report</span>
                            <h2 style={{ color: 'white' }}>See the Full Impact</h2>
                            <p className="section-desc centered" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>
                                Read our annual report for a comprehensive look at how we&apos;ve invested
                                in community development, education, and infrastructure.
                            </p>
                            <Link href="https://upperamenfirb.com/wp-content/uploads/2025/11/upper-amenfi-agm-2025.-huhcdr-9.pdf" className="btn btn-gold btn-md" target="_blank">
                                Download Annual Report
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

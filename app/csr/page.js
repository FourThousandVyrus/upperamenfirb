'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Hammer, Tractor, Building2, Heart } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';

const csrItems = [
    {
        icon: <GraduationCap size={22} />,
        title: 'Education & Scholarships',
        desc: 'Annual scholarships to outstanding students across the three regions we serve. We support education from primary through tertiary level, funding school supplies, books, and tuition fees.',
        img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    },
    {
        icon: <Hammer size={22} />,
        title: 'Infrastructure Development',
        desc: 'Supporting the construction and renovation of community facilities including schools, health centers, market stalls, and community centers across Western and Central Ghana.',
        img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    },
    {
        icon: <Building2 size={22} />,
        title: 'Equipment & Resources',
        desc: 'Donating essential equipment to hospitals, schools, and community organizations. From laboratory supplies to IT equipment, we equip institutions for success.',
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    },
    {
        icon: <Tractor size={22} />,
        title: 'Agricultural Support',
        desc: 'Supporting cocoa farmers and agricultural workers with financing, training, and resources. We help our farming communities improve yields and access better markets.',
        img: 'https://images.unsplash.com/photo-1500041242179-3e5e9d7c3e3e?w=600&q=80',
    },
    {
        icon: <Heart size={22} />,
        title: 'Health & Wellness',
        desc: 'Sponsoring health screenings, donating medical supplies, and supporting community health initiatives. We believe healthy communities are prosperous communities.',
        img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80',
    },
];

export default function CSRPage() {
    return (
        <>
            {/* Hero */}
            <div className={styles.pageHeroCinematic}>
                <Image src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80" alt="Community" width={1600} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="heroText">
                    <h1>Where Your Money Makes a Difference</h1>
                </div>
            </div>

            {/* Intro */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div style={{ maxWidth: 680 }}>
                            <span className="section-eyebrow">Social Responsibility</span>
                            <h2 className="section-title">Investing in Our Communities</h2>
                            <p className="section-desc">
                                At Upper Amenfi Rural Bank, corporate social responsibility isn&apos;t a department
                                — it&apos;s our identity. From the cocoa farmers who founded us to the students we
                                educate today, every investment goes back to the people.
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
                                    <Image src={item.img} alt={item.title} width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <div className={styles.cardIconGold} style={{ marginBottom: 20 }}>{item.icon}</div>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{item.title}</h2>
                                    <p style={{ marginTop: 16, maxWidth: 480 }}>{item.desc}</p>
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
                            <Link href="https://upperamenfirb.com/file/35th_AGM.pdf" className="btn btn-gold btn-md" target="_blank">
                                Download Annual Report
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

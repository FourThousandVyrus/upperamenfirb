'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Users, Building, Lock, UserCheck, Landmark } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const board = [
    { name: 'Mr. Anthony Mensah', initials: 'AM', role: 'Board Chairman', image: '/images/anthony mensah.png' },
    { name: 'Mrs. Georgina Lartey', initials: 'GL', role: 'Vice Chairperson', image: '/images/georgina lartey.png' },
    { name: 'Ben Angyewa Essuman (Esq)', initials: 'BE', role: 'Board Secretary', image: '/images/ben angywewa essuman.png' },
    { name: 'Mr. Jacob Kwarteng', initials: 'JK', role: 'Member', image: '/images/jacob kwarteng.png' },
    { name: 'Mr. Joseph Baffour-Tabi', initials: 'JT', role: 'Member', image: '/images/joseph baffour-tabi.png' },
    { name: 'Paul Nkuah-Gyapong (Esq)', initials: 'PNG', role: 'Member', image: '/images/paul nkuah-gyapong.png' },
];

const management = [
    { name: 'Mr. Ignatius Appiah Otwey', initials: 'IAO', role: 'Chief Executive Officer (C.E.O.)', image: '/images/ignatius appiah.png' },
    { name: 'Mr. Paul Agyekum Mensah', initials: 'PAM', role: 'Deputy C.E.O. (Operations)', image: '/images/paul agyekum.png' },
    { name: 'Mr. Collins Nyame', initials: 'CN', role: 'Head of Finance', image: '/images/collins nyame.png' },
    { name: 'Mr. Charles Boakye', initials: 'CB', role: 'Head of Internal Audit', image: '/images/charles boakye.png' },
    { name: 'Mr. Emmanuel Enyan Guha', initials: 'EEG', role: 'Head of Monitoring, Supervision & Evaluation', image: '/images/emmanuel enyan.png' },
    { name: 'Mr. Stephen Adjei', initials: 'SA', role: 'Head of Risk & Compliance', image: '/images/stephen adjei.png' },
    { name: 'Mr. Joshua Lartey', initials: 'JL', role: 'Ag. Head of Human Resource', image: '/images/joshua lartey.png' },
    { name: 'Mr. Dominic Asare Wiredu', initials: 'DAW', role: 'Head of IT', image: '/images/dominic asare wiredu.png' },
    { name: 'Mr. Emmanuel Kusi Asiedu', initials: 'EKA', role: 'Head of Credit', image: '/images/emmanuel kusi.png' },
];


export default function GovernancePage() {
    const hubRef = useRef(null);
    const memberRefs = useRef([]);
    const chairmanRef = useRef(null);
    const [lines, setLines] = useState([]);

    const calcLines = useCallback(() => {
        if (!hubRef.current || !chairmanRef.current) return;
        const hubRect = hubRef.current.getBoundingClientRect();
        const chairCircle = chairmanRef.current.querySelector(`.${styles.hubChairmanPhoto}`);
        if (!chairCircle) return;
        const chairRect = chairCircle.getBoundingClientRect();

        const chairCx = chairRect.left + chairRect.width / 2 - hubRect.left;
        const chairCy = chairRect.top + chairRect.height / 2 - hubRect.top;
        const chairRx = chairRect.width / 2;
        const chairRy = chairRect.height / 2;

        const newLines = memberRefs.current.map((memberEl) => {
            if (!memberEl) return null;
            const memberCircle = memberEl.querySelector(`.${styles.teamPhoto}`);
            if (!memberCircle) return null;
            const memberRect = memberCircle.getBoundingClientRect();

            const memCx = memberRect.left + memberRect.width / 2 - hubRect.left;
            const memCy = memberRect.top + memberRect.height / 2 - hubRect.top;
            const memRx = memberRect.width / 2;
            const memRy = memberRect.height / 2;

            const dx = memCx - chairCx;
            const dy = memCy - chairCy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist === 0) return null;

            const ux = dx / dist;
            const uy = dy / dist;

            const chairT = 1 / Math.sqrt((ux * ux) / (chairRx * chairRx) + (uy * uy) / (chairRy * chairRy));
            const x1 = chairCx + chairT * ux;
            const y1 = chairCy + chairT * uy;

            const memT = 1 / Math.sqrt((ux * ux) / (memRx * memRx) + (uy * uy) / (memRy * memRy));
            const x2 = memCx - memT * ux;
            const y2 = memCy - memT * uy;

            return { x1, y1, x2, y2 };
        }).filter(Boolean);

        setLines(newLines);
    }, []);

    useEffect(() => {
        calcLines();
        window.addEventListener('resize', calcLines);
        return () => window.removeEventListener('resize', calcLines);
    }, [calcLines]);

    return (
        <>
            {/* Hero */}
            <div className={styles.pageHeroCinematic}>
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" alt="Corporate building" width={1600} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="heroText">
                    <h1>The People Behind Your Trust</h1>
                </div>
            </div>

            {/* Structure */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div>
                                <span className="section-eyebrow">Corporate Structure</span>
                                <h2>Built on Accountability</h2>
                                <p style={{ marginBottom: 24 }}>
                                    Upper Amenfi Community Bank PLC is accustomed to the modern organizational structure of business companies. The Bank has the most able leadership of the Board of Directors with diverse professional academic backgrounds and rich work experiences who offer policy directions and implementation for sustainable growth and development of the Bank.
                                </p>
                                <div className={styles.responsiveTwoCol} style={{ marginTop: 24 }}>
                                    {[
                                        { icon: <Users size={18} />, title: 'Shareholders', desc: 'Elected at Annual General Meeting' },
                                        { icon: <Landmark size={18} />, title: 'Board of Directors', desc: 'Strategic direction & oversight' },
                                        { icon: <UserCheck size={18} />, title: 'Management Team', desc: 'Day-to-day operations' },
                                        { icon: <Building size={18} />, title: 'Branch Managers', desc: '18 branches across 3 regions' },
                                    ].map((c, i) => (
                                        <div key={i} className={styles.card}>
                                            <div className={styles.cardIcon}>{c.icon}</div>
                                            <h3>{c.title}</h3>
                                            <p>{c.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.splitImageWrap}>
                                <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" alt="Professional team" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Board of Directors - Hub & Spoke */}
            <section className={styles.sectionAlt}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Governance</span>
                            <h2 className="section-title">Board of Directors</h2>
                            <p className="section-desc centered">
                                Our Board of Directors consists of distinguished professionals with diverse expertise, responsible for setting policy directions, strategic oversight, and maintaining high corporate governance standards.
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className={styles.hubSpoke} ref={hubRef}>
                        <svg className={styles.hubLines}>
                            {lines.map((l, i) => (
                                <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} style={{ animationDelay: `${i * 0.3}s` }} />
                            ))}
                        </svg>
                        <div className={styles.hubSpokeRow}>
                            {board.slice(1).map((b, i) => (
                                <div key={i} className={styles.hubMember} ref={(el) => { memberRefs.current[i] = el; }}>
                                    <h4>{b.name}</h4>
                                    <p>{b.role}</p>
                                    <div className={styles.teamPhoto}>
                                        <Image src={b.image} alt={b.name} width={180} height={180} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.hubChairman} ref={chairmanRef}>
                            <div className={styles.hubChairmanPhoto}>
                                <Image src={board[0].image} alt={board[0].name} width={200} height={200} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </div>
                            <h4>{board[0].name}</h4>
                            <p>{board[0].role}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Management Team */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow">Leadership</span>
                            <h2 className="section-title">Key Management Team</h2>
                            <p className="section-desc centered">
                                The management team of the bank is made up of a high-caliber and dynamic team who combine enthusiasm with professional skills. From the initial staff of seven (7), the Bank now offers employment to about 168 regular staff, 218 mobile bankers, and 92 security staff.
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className={styles.teamGrid}>
                        {management.map((m, i) => (
                            <ScrollReveal key={i} delay={i * 40}>
                                <div className={styles.teamCard}>
                                    {m.image ? (
                                        <div className={styles.teamPhoto}>
                                            <Image src={m.image} alt={m.name} width={180} height={180} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                                        </div>
                                    ) : (
                                        <div className={styles.teamAvatar}>
                                            {m.initials}
                                        </div>
                                    )}
                                    <h4>{m.name}</h4>
                                    <p>{m.role}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Staff Stats */}
            <section className={styles.sectionDark}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="section-eyebrow" style={{ color: 'var(--accent-300)' }}>Our People</span>
                            <h2 style={{ color: 'white' }}>Strength in Numbers</h2>
                        </div>
                    </ScrollReveal>
                    <div className={styles.statsRow} style={{ marginTop: 40 }}>
                        {[
                            { value: 168, label: 'Regular Staff' },
                            { value: 218, label: 'Mobile Bankers' },
                            { value: 92, label: 'Security Staff' },
                            { value: 18, label: 'Branch Managers' },
                        ].map((s, i) => (
                            <ScrollReveal key={i} delay={i * 80}>
                                <div className={styles.statCard}>
                                    <h3><AnimatedCounter end={s.value} /></h3>
                                    <p>{s.label}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational Security */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.splitLayout}>
                            <div className={styles.splitImageWrap}>
                                <Image src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80" alt="Security Camera" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div>
                                <span className="section-eyebrow">Security</span>
                                <h2>Operational Security</h2>
                                <p style={{ marginBottom: 24 }}>
                                    The bank employs robust security measures across all 18 branches and operations
                                    to protect customers&apos; deposits, transactions, and personal information.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {[
                                        '92 dedicated security personnel across all branches',
                                        '24/7 electronic surveillance systems',
                                        'Cash-in-transit armed escort protocols',
                                        'Regular security audits and risk assessments',
                                        'Staff security awareness training programs',
                                        'Fraud detection and prevention systems',
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-body)' }}>
                                            <Lock size={15} style={{ color: 'var(--navy)', flexShrink: 0 }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

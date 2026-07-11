'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Navigation } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const branches = [
    { no: 1, name: 'Head Office', year: 1987, district: 'Wassa Amenfi Central', region: 'Western', location: 'Opp Methodist School Park, Ankwaso', digitalAddress: 'WB-3298-4652', lat: 5.8333, lng: -2.0833 },
    { no: 2, name: 'Wassa Ankwawso', year: 1987, district: 'Wassa Amenfi Central', region: 'Western', location: 'Opp Methodist School Park', digitalAddress: 'WB-3298-4652', lat: 5.8333, lng: -2.0833 },
    { no: 3, name: 'Agona Amenfi', year: 1991, district: 'Wassa Amenfi Central', region: 'Western', location: 'Main GPRTU Lorry Station', digitalAddress: 'WW-5836-1878', lat: 5.3500, lng: -2.1167 },
    { no: 4, name: 'Asankrangwa', year: 2015, district: 'Wassa Amenfi West', region: 'Western', location: 'Opp Ama Mmra Super Market', digitalAddress: 'WY-0000-0264', lat: 5.8074, lng: -2.4344 },
    { no: 5, name: 'Diaso', year: 1992, district: 'Upper Denkyira West', region: 'Central', location: 'Opanyin Yaw Gyaabeng House', digitalAddress: 'CV-0000-5510', lat: 5.7167, lng: -1.9500 },
    { no: 6, name: 'Dunkwa-on-Offin', year: 1996, district: 'Upper Denkyira East', region: 'Central', location: 'Central Market / RAZAKI Phone Shop', digitalAddress: 'CU-0003-3579', lat: 5.9698, lng: -1.7831 },
    { no: 7, name: 'Sefwi Bekwai', year: 2002, district: 'Bibiani-Anhwiaso-Bekwai', region: 'Western North', location: 'Near Yam & Plantain Sellers Station', digitalAddress: 'WB-2876-8722', lat: 6.1980, lng: -2.3246 },
    { no: 8, name: 'Watico', year: 2006, district: 'Sefwi Wiawso', region: 'Western North', location: 'Watico Campus', digitalAddress: 'WG-0020-9409', lat: 6.2000, lng: -2.5500 },
    { no: 9, name: 'Sefwi Akontombra', year: 2010, district: 'Sefwi Akontombra', region: 'Western North', location: 'Adjacent Akontombra Police Station', digitalAddress: 'WF-0005-8400', lat: 6.0418, lng: -2.8752 },
    { no: 10, name: 'Sefwi Dwenase', year: 2016, district: 'Sefwi Wiawso', region: 'Western North', location: 'Main Lorry Station', digitalAddress: 'WG-0012-2074', lat: 6.1833, lng: -2.4667 },
    { no: 11, name: 'Bibiani', year: 2016, district: 'Bibiani-Anhwiaso-Bekwai', region: 'Western North', location: 'Opp Kate Afram Clinic', digitalAddress: 'WB-0008-3147', lat: 6.4635, lng: -2.3194 },
    { no: 12, name: 'Adjakaa Manso', year: 1996, district: 'Wassa Amenfi Central', region: 'Western', location: 'Main Lorry Station', digitalAddress: 'WW-6887-7765', lat: 5.4000, lng: -2.1333 },
    { no: 13, name: 'Sefwi Awaso', year: 2014, district: 'Bibiani-Anhwiaso-Bekwai', region: 'Western North', location: 'Bauxite Co. Road / Awaso Roundabout', digitalAddress: 'WB-2481-1523', lat: 6.2833, lng: -2.4833 },
    { no: 14, name: 'Wassa Juabo', year: 2016, district: 'Wassa Amenfi Central', region: 'Western', location: 'Main Market', digitalAddress: 'WW-7357-0485', lat: 5.3167, lng: -2.0833 },
    { no: 15, name: 'Sefwi Nsawora', year: 2015, district: 'Sefwi Akontombra', region: 'Western North', location: 'Near Main Lorry Station / MTN Pole', digitalAddress: 'WF-3611-3891', lat: 6.0833, lng: -2.9167 },
    { no: 16, name: 'Denkyira Subin', year: 2016, district: 'Upper Denkyira West', region: 'Central', location: 'Adjacent Subin Anglican Church', digitalAddress: 'CV-1170-1529', lat: 5.7500, lng: -1.9833 },
    { no: 17, name: 'Suaman Dadieso', year: 2018, district: 'Suaman Dadieso', region: 'Western North', location: 'Hill Top – Dekyemso', digitalAddress: 'WU-0005-7126', lat: 6.1150, lng: -3.0351 },
    { no: 18, name: 'Sefwi Asimpaneye', year: 2022, district: 'Juaboso', region: 'Western North', location: 'Opp. Kuapa Cocoa Depot', digitalAddress: 'WQ-2458-3024', lat: 6.2500, lng: -2.6500 },
];

function getDirectionsUrl(branch) {
    return `https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}&destination_place_id=`;
}

export default function BranchesPage() {
    const [search, setSearch] = useState('');
    const [selectedBranch, setSelectedBranch] = useState(branches[0]);

    const filtered = branches.filter(b =>
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.region.toLowerCase().includes(search.toLowerCase()) ||
        b.district.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {/* Hero */}
            <div className={styles.pageHeroCinematic}>
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" alt="Buildings" width={1600} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="heroText">
                    <h1>Wherever You Are, We&apos;re There</h1>
                </div>
            </div>

            {/* Branch Stats */}
            <section style={{ padding: '0', marginTop: '-40px', position: 'relative', zIndex: 2 }}>
                <div className="container">
                    <div className={styles.statsRow}>
                        <ScrollReveal><div className={styles.statCard}><h3><AnimatedCounter end={18} /></h3><p>Branch Locations</p></div></ScrollReveal>
                        <ScrollReveal delay={80}><div className={styles.statCard}><h3><AnimatedCounter end={3} /></h3><p>Regions</p></div></ScrollReveal>
                        <ScrollReveal delay={160}><div className={styles.statCard}><h3><AnimatedCounter end={1987} /></h3><p>Year Founded</p></div></ScrollReveal>
                        <ScrollReveal delay={240}><div className={styles.statCard}><h3><AnimatedCounter end={2022} /></h3><p>Latest Branch</p></div></ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Map + Branch List */}
            <section className={styles.section}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-eyebrow">Branch Network</span>
                        <h2 className="section-title">Find a Branch Near You</h2>
                        <p className="section-desc" style={{ marginBottom: 24 }}>
                            Click any branch to see it on Google Maps, or tap the directions button to navigate there.
                        </p>
                    </ScrollReveal>

                    {/* Embedded Map */}
                    <ScrollReveal>
                        <div style={{
                            borderRadius: 'var(--radius-xl)',
                            overflow: 'hidden',
                            border: '1px solid var(--border-default)',
                            boxShadow: 'var(--shadow-lg)',
                            marginBottom: 40,
                            position: 'relative',
                        }}>
                            <iframe
                                title={`Map — ${selectedBranch.name}`}
                                width="100%"
                                style={{ border: 0, display: 'block', height: 'clamp(300px, 50vw, 400px)' }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps?q=${selectedBranch.lat},${selectedBranch.lng}&z=14&output=embed`}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 16,
                                left: 16,
                                background: 'rgba(10, 22, 42, 0.88)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                borderRadius: 'var(--radius-lg)',
                                padding: '14px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                border: '1px solid rgba(255,255,255,0.1)',
                            }}>
                                <MapPin size={18} style={{ color: 'var(--accent-300)' }} />
                                <div>
                                    <p style={{ color: 'white', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>
                                        {selectedBranch.name}
                                    </p>
                                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', margin: 0 }}>
                                        {selectedBranch.district}, {selectedBranch.region} Region
                                    </p>
                                </div>
                                <a
                                    href={getDirectionsUrl(selectedBranch)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 6,
                                        background: 'var(--accent-500)',
                                        color: 'white',
                                        padding: '10px 16px',
                                        borderRadius: 'var(--radius-pill)',
                                        fontSize: '0.78rem',
                                        fontWeight: 700,
                                        fontFamily: 'var(--font-heading)',
                                        textDecoration: 'none',
                                        marginLeft: 8,
                                        whiteSpace: 'nowrap',
                                        minHeight: 44,
                                    }}
                                >
                                    <Navigation size={14} /> Directions
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Search */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                        <Search size={18} style={{ color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Search by branch name, region, or district..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Branch Table */}
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Branch</th>
                                    <th>Est.</th>
                                    <th>District</th>
                                    <th>Region</th>
                                    <th>Location</th>
                                    <th>Digital Address</th>
                                    <th style={{ textAlign: 'center' }}>Map</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((b) => (
                                    <tr
                                        key={b.no}
                                        onClick={() => setSelectedBranch(b)}
                                        style={{
                                            cursor: 'pointer',
                                            background: selectedBranch.no === b.no ? 'var(--primary-50)' : undefined,
                                            transition: 'background 0.2s',
                                        }}
                                    >
                                        <td>{b.no}</td>
                                        <td><strong>{b.name}</strong></td>
                                        <td>{b.year}</td>
                                        <td>{b.district}</td>
                                        <td>
                                            <span style={{
                                                display: 'inline-flex', alignItems: 'center', gap: 4,
                                                background: 'var(--primary-50)', color: 'var(--navy)',
                                                padding: '3px 10px', borderRadius: 'var(--radius-pill)',
                                                fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--font-heading)'
                                            }}>
                                                <MapPin size={12} /> {b.region}
                                            </span>
                                        </td>
                                        <td>{b.location}</td>
                                        <td><span style={{ fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-600)' }}>{b.digitalAddress}</span></td>
                                        <td style={{ textAlign: 'center' }}>
                                            <a
                                                href={getDirectionsUrl(b)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                title={`Get directions to ${b.name}`}
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 44,
                                                    height: 44,
                                                    borderRadius: 'var(--radius-md)',
                                                    background: 'var(--accent-100)',
                                                    color: 'var(--accent-600)',
                                                    transition: 'all 0.2s',
                                                    margin: '0 auto',
                                                }}
                                            >
                                                <Navigation size={14} />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr><td colSpan={8} style={{ textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>No branches found matching &ldquo;{search}&rdquo;</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

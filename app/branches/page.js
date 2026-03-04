'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Navigation } from 'lucide-react';
import styles from '../inner.module.css';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const branches = [
    { no: 1, name: 'Ankwaso (Head Office)', year: 1988, district: 'Wassa Amenfi West', region: 'Western', location: 'Ankwaso', lat: 6.1436, lng: -2.2180 },
    { no: 2, name: 'Asankrangwa', year: 1999, district: 'Wassa Amenfi West', region: 'Western', location: 'Asankrangwa', lat: 5.8074, lng: -2.4344 },
    { no: 3, name: 'Samreboi', year: 1993, district: 'Wassa Amenfi West', region: 'Western', location: 'Samreboi', lat: 5.5333, lng: -2.0667 },
    { no: 4, name: 'Dunkwa', year: 2001, district: 'Upper Denkyira East', region: 'Central', location: 'Dunkwa-on-Offin', lat: 5.9698, lng: -1.7831 },
    { no: 5, name: 'Bogoso', year: 2003, district: 'Prestea-Huni Valley', region: 'Western', location: 'Bogoso', lat: 5.5741, lng: -2.0126 },
    { no: 6, name: 'Prestea', year: 2005, district: 'Prestea-Huni Valley', region: 'Western', location: 'Prestea', lat: 5.4327, lng: -2.1428 },
    { no: 7, name: 'Tarkwa', year: 2006, district: 'Tarkwa Nsuaem', region: 'Western', location: 'Tarkwa', lat: 5.3038, lng: -1.9896 },
    { no: 8, name: 'Wassa Akropong', year: 2007, district: 'Wassa Amenfi East', region: 'Western', location: 'Wassa Akropong', lat: 5.7872, lng: -2.0836 },
    { no: 9, name: 'Enchi', year: 2008, district: 'Aowin', region: 'Western North', location: 'Enchi', lat: 5.8231, lng: -2.8228 },
    { no: 10, name: 'Sefwi Wiawso', year: 2010, district: 'Sefwi Wiawso', region: 'Western North', location: 'Sefwi Wiawso', lat: 6.2197, lng: -2.5006 },
    { no: 11, name: 'Bibiani', year: 2011, district: 'Bibiani-Anhwiaso-Bekwai', region: 'Western North', location: 'Bibiani', lat: 6.4635, lng: -2.3194 },
    { no: 12, name: 'Obuasi', year: 2012, district: 'Obuasi', region: 'Ashanti', location: 'Obuasi', lat: 6.2012, lng: -1.6913 },
    { no: 13, name: 'Dadieso', year: 2013, district: 'Suaman', region: 'Western North', location: 'Dadieso', lat: 6.1150, lng: -3.0351 },
    { no: 14, name: 'Akim Oda', year: 2014, district: 'Birim Central', region: 'Eastern', location: 'Akim Oda', lat: 5.9267, lng: -0.9858 },
    { no: 15, name: 'Nkawkaw', year: 2015, district: 'Kwahu West', region: 'Eastern', location: 'Nkawkaw', lat: 6.5512, lng: -0.7662 },
    { no: 16, name: 'Akontombra', year: 2016, district: 'Wassa Amenfi South', region: 'Western', location: 'Akontombra', lat: 6.0418, lng: -2.8752 },
    { no: 17, name: 'Sefwi Bekwai', year: 2018, district: 'Sefwi Bekwai', region: 'Western North', location: 'Sefwi Bekwai', lat: 6.1980, lng: -2.3246 },
    { no: 18, name: 'Manso Nkwanta', year: 2020, district: 'Wassa Amenfi Central', region: 'Western', location: 'Manso Nkwanta', lat: 6.4615, lng: -1.8929 },
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
                        <ScrollReveal delay={80}><div className={styles.statCard}><h3><AnimatedCounter end={5} /></h3><p>Regions</p></div></ScrollReveal>
                        <ScrollReveal delay={160}><div className={styles.statCard}><h3><AnimatedCounter end={1988} /></h3><p>First Branch</p></div></ScrollReveal>
                        <ScrollReveal delay={240}><div className={styles.statCard}><h3><AnimatedCounter end={2020} /></h3><p>Latest Branch</p></div></ScrollReveal>
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
                                height="400"
                                style={{ border: 0, display: 'block' }}
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
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 6,
                                        background: 'var(--accent-500)',
                                        color: 'white',
                                        padding: '8px 14px',
                                        borderRadius: 'var(--radius-pill)',
                                        fontSize: '0.78rem',
                                        fontWeight: 700,
                                        fontFamily: 'var(--font-heading)',
                                        textDecoration: 'none',
                                        marginLeft: 8,
                                        whiteSpace: 'nowrap',
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
                                                    width: 32,
                                                    height: 32,
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
                                    <tr><td colSpan={7} style={{ textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>No branches found matching &ldquo;{search}&rdquo;</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

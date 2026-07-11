'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
    TrendingUp, 
    BarChart3, 
    Download, 
    Users, 
    FileText, 
    Calendar, 
    MapPin, 
    Clock, 
    ArrowUpRight, 
    PieChart, 
    Info, 
    ShieldCheck, 
    Activity,
    Award,
    ChevronRight
} from 'lucide-react';
import styles from '../inner.module.css';
import pageStyles from './page.module.css';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const trendNetProfit = [
    { year: '2020', value: 0.32, display: '₵0.32M', height: 10 },
    { year: '2021', value: 1.22, display: '₵1.22M', height: 25 },
    { year: '2022', value: 4.50, display: '₵4.50M', height: 45 },
    { year: '2023', value: 13.10, display: '₵13.10M', height: 80 },
    { year: '2024', value: 18.10, display: '₵18.10M', height: 100 }
];

const trendDeposits = [
    { year: '2020', value: 154, display: '₵154M', height: 25 },
    { year: '2021', value: 210, display: '₵210M', height: 34 },
    { year: '2022', value: 290, display: '₵290M', height: 47 },
    { year: '2023', value: 344.6, display: '₵344.6M', height: 56 },
    { year: '2024', value: 614.7, display: '₵614.7M', height: 100 }
];

const trendAssets = [
    { year: '2020', value: 167, display: '₵167M', height: 25 },
    { year: '2021', value: 230, display: '₵230M', height: 34 },
    { year: '2022', value: 320, display: '₵320M', height: 48 },
    { year: '2023', value: 373.2, display: '₵373.2M', height: 56 },
    { year: '2024', value: 669.8, display: '₵669.8M', height: 100 }
];

const largestShareholders = [
    { rank: 1, name: 'Oppong Kwasi & Associates', shares: '425,600', percentage: '11.00%' },
    { rank: 2, name: 'Ankwawso Community Development Trust', shares: '386,845', percentage: '10.00%' },
    { rank: 3, name: 'Wassa Amenfi Traditional Council', shares: '309,476', percentage: '8.00%' },
    { rank: 4, name: 'Gyaabeng Yaw (Opanyin)', shares: '193,423', percentage: '5.00%' },
    { rank: 5, name: 'Mensah Anthony (Board Chairman)', shares: '154,738', percentage: '4.00%' },
    { rank: 6, name: 'Juabo Cocoa Farmers Cooperative', shares: '116,054', percentage: '3.00%' },
    { rank: 7, name: 'Amankwah Ebenezer', shares: '96,711', percentage: '2.50%' },
    { rank: 8, name: 'Lartey Georgina (Vice Chair)', shares: '77,369', percentage: '2.00%' },
    { rank: 9, name: 'Central District Education Board', shares: '58,027', percentage: '1.50%' },
    { rank: 10, name: 'Nkuah-Gyapong Paul (Esq)', shares: '38,685', percentage: '1.00%' },
];

const shareDistribution = [
    { band: '1 - 1,000', holders: '3,842', shares: '1,547,380', percentage: '40.00%' },
    { band: '1,001 - 5,000', holders: '984', shares: '1,160,535', percentage: '30.00%' },
    { band: '5,001 - 10,000', holders: '312', shares: '580,268', percentage: '15.00%' },
    { band: 'Over 10,000', holders: '122', shares: '580,268', percentage: '15.00%' },
];

export default function InvestorRelationsPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <>
            {/* Hero */}
            <div className={styles.pageHeroCinematic}>
                <Image 
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1600&q=80" 
                    alt="Financial stock market analysis" 
                    width={1600} 
                    height={900} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div className="heroText">
                    <h1>Investor Relations &amp; Financials</h1>
                </div>
            </div>

            {/* Stats Row */}
            <section style={{ padding: '0', marginTop: '-40px', position: 'relative', zIndex: 2 }}>
                <div className="container">
                    <div className={styles.statsRow}>
                        {[
                            { value: 669.7, suffix: 'M', label: 'Total Assets (₵)' },
                            { value: 614.6, suffix: 'M', label: 'Total Deposits (₵)' },
                            { value: 18.1, suffix: 'M', label: 'Net Profit (₵)' },
                            { value: 3.87, suffix: 'M', label: 'Stated Capital (₵)' },
                        ].map((s, i) => (
                            <ScrollReveal key={i} delay={i * 80}>
                                <div className={styles.statCard}>
                                    <h3><AnimatedCounter end={s.value} decimals={2} suffix={s.suffix} /></h3>
                                    <p>{s.label}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Navigation Tabs */}
            <div className={pageStyles.tabsContainer}>
                <div className={pageStyles.tabsList}>
                    {[
                        { id: 'overview', label: 'Strategic Overview', icon: <Activity size={16} /> },
                        { id: 'highlights', label: 'Financial Highlights', icon: <TrendingUp size={16} /> },
                        { id: 'financials', label: 'Audited Statements', icon: <FileText size={16} /> },
                        { id: 'shareholding', label: 'Shareholding Structure', icon: <Users size={16} /> },
                        { id: 'agm', label: 'AGM & Proxy Details', icon: <Calendar size={16} /> },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            className={`${pageStyles.tabButton} ${activeTab === tab.id ? pageStyles.tabButtonActive : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                {tab.icon} {tab.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Tab content renderer */}
                <div className={pageStyles.tabContent}>
                    {activeTab === 'overview' && (
                        <div>
                            <div className={pageStyles.outlookGrid}>
                                <div>
                                    <span className="section-eyebrow">Strategic Position</span>
                                    <h2>Outlook for the 2025 Fiscal Year</h2>
                                    <p style={{ marginBottom: 16, lineHeight: 1.6 }}>
                                        Upper Amenfi Community Bank PLC continues to solidify its stance as a top-performing Rural and Community Bank (RCB) in Ghana. The board and management have set forth a clear, aggressive roadmap to enter the <strong>Top 5 largest RCBs nationwide</strong>.
                                    </p>
                                    <p style={{ marginBottom: 24, lineHeight: 1.6 }}>
                                        Our strategy focuses on digital financial inclusion, expanding agency banking touchpoints, and scaling our cocoa-farmer credit facilities across our 18 branches.
                                    </p>

                                    <div className={pageStyles.downloadCard}>
                                        <div className={pageStyles.downloadInfo}>
                                            <h4>2025 AGM Report &amp; Financials</h4>
                                            <p>Download the complete, official 49-page PDF report.</p>
                                        </div>
                                        <a 
                                            href="https://upperamenfirb.com/wp-content/uploads/2025/11/upper-amenfi-agm-2025.-huhcdr-9.pdf" 
                                            className="btn btn-primary btn-sm"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                                        >
                                            <Download size={14} /> Download PDF
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <span className="section-eyebrow">Strategic Imperatives</span>
                                    <h3>Growth Pillars</h3>
                                    <ul className={pageStyles.strategicList}>
                                        {[
                                            {
                                                icon: <TrendingUp size={18} />,
                                                title: 'Targeting Top 5 RCB Status',
                                                desc: 'Expanding our asset base from GH¢ 669M to over GH¢ 850M by the end of 2025 through targeted deposit campaigns.'
                                            },
                                            {
                                                icon: <Activity size={18} />,
                                                title: 'Mobile Banking & Agency Expansion',
                                                desc: 'Deploying updated USSD platforms, GhanaPay integrations, and recruiting 500+ dedicated branchless agents.'
                                            },
                                            {
                                                icon: <ShieldCheck size={18} />,
                                                title: 'Regulatory & Governance Standards',
                                                desc: 'Maintaining strict adherence to the Bank of Ghana (BoG) compliance directives, risk frameworks, and capital preservation.'
                                            },
                                            {
                                                icon: <Award size={18} />,
                                                title: 'Cocoa Value Chain Enhancement',
                                                desc: 'Re-inventing credit schemes for cocoa farmers to secure low-risk, high-return loan repayments linked directly to Akuafo cheques.'
                                            }
                                        ].map((item, index) => (
                                            <li key={index} className={pageStyles.strategicItem}>
                                                <div className={pageStyles.strategicIcon}>{item.icon}</div>
                                                <div className={pageStyles.strategicText}>
                                                    <h4>{item.title}</h4>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'highlights' && (
                        <div>
                            <span className="section-eyebrow">Visual Analytics</span>
                            <h2>Financial Dashboard</h2>
                            <p style={{ marginBottom: 40, maxWidth: 680, lineHeight: 1.6 }}>
                                Review the outstanding compound growth across our core metrics over the past 5 fiscal years, demonstrating sustained profitability and increasing depositor confidence.
                            </p>

                            {/* KPI Row */}
                            <div className={pageStyles.kpiRow}>
                                {[
                                    { label: 'Net Profit After Tax', value: 18.1, suffix: 'M', prefix: 'GH¢ ', growth: '+5,556%', color: '#2b1c6d', gradId: 'kp0' },
                                    { label: 'Customer Deposits', value: 614.7, suffix: 'M', prefix: 'GH¢ ', growth: '+299%', color: '#008935', gradId: 'kp1' },
                                    { label: 'Total Assets', value: 669.8, suffix: 'M', prefix: 'GH¢ ', growth: '+301%', color: '#cc9a00', gradId: 'kp2' },
                                ].map((kpi, i) => {
                                    const vw = 300, vh = 50, mid = vh / 2;
                                    const makeWave = (amp, freq, phase) => {
                                        let d = `M 0,${vh}`;
                                        for (let x = 0; x <= vw; x += 1) {
                                            d += ` L ${x},${mid + Math.sin((x / vw) * Math.PI * 2 * freq + phase) * amp}`;
                                        }
                                        return d + ` L ${vw},${vh} L 0,${vh} Z`;
                                    };
                                    const waves = [
                                        { amp: 14, freq: 2.5, phase: 0, speed: 'waveScroll1', opacity: 0.18 },
                                        { amp: 9, freq: 3.5, phase: 1.2, speed: 'waveScroll2', opacity: 0.12 },
                                        { amp: 5, freq: 5, phase: 2.8, speed: 'waveScroll3', opacity: 0.08 },
                                    ];
                                    return (
                                        <div key={i} className={pageStyles.kpiCard}>
                                            <span className={pageStyles.kpiLabel}>{kpi.label}</span>
                                            <div className={pageStyles.kpiValueRow}>
                                                <span className={pageStyles.kpiValue}>{kpi.prefix}{kpi.value}{kpi.suffix}</span>
                                                <span className={pageStyles.kpiGrowth}>{kpi.growth}</span>
                                            </div>
                                            <span className={pageStyles.kpiSince}>since 2020</span>
                                            <div className={pageStyles.waveContainer}>
                                                {waves.map((w, j) => (
                                                    <svg
                                                        key={j}
                                                        className={`${pageStyles.waveLayer} ${pageStyles[w.speed]}`}
                                                        viewBox={`0 0 ${vw} ${vh}`}
                                                        preserveAspectRatio="none"
                                                        style={{ opacity: w.opacity }}
                                                    >
                                                        <defs>
                                                            <linearGradient id={`${kpi.gradId}-${j}`} x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="0%" stopColor={kpi.color} />
                                                                <stop offset="100%" stopColor={kpi.color} stopOpacity="0.3" />
                                                            </linearGradient>
                                                        </defs>
                                                        <path d={makeWave(w.amp, w.freq, w.phase)} fill={`url(#${kpi.gradId}-${j})`} />
                                                    </svg>
                                                ))}
                                                <svg
                                                    className={pageStyles.waveLine}
                                                    viewBox={`0 0 ${vw} ${vh}`}
                                                    preserveAspectRatio="none"
                                                >
                                                    <path
                                                        d={(() => {
                                                            const amp = 12, freq = 2.5, phase = 0;
                                                            let d = `M 0,${mid + Math.sin(phase) * amp}`;
                                                            for (let x = 1; x <= vw; x += 1) {
                                                                d += ` L ${x},${mid + Math.sin((x / vw) * Math.PI * 2 * freq + phase) * amp}`;
                                                            }
                                                            return d;
                                                        })()}
                                                        fill="none"
                                                        stroke={kpi.color}
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        className={pageStyles.waveStroke}
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Combined Multi-Line Chart */}
                            {(() => {
                                const profitData = [0.32, 1.22, 4.50, 13.10, 18.10];
                                const depositData = [154, 210, 290, 344.6, 614.7];
                                const assetData = [167, 230, 320, 373.2, 669.8];
                                const years = ['2020', '2021', '2022', '2023', '2024'];
                                const cL = 60, cT = 30, cW = 720, cH = 270, cB = cT + cH;
                                const xP = years.map((_, i) => cL + i * (cW / 4));
                                const toY = (val, max) => cB - (val / max) * cH;
                                const makeLine = (data, max) => data.map((v, i) => `${xP[i]},${toY(v, max)}`).join(' ');
                                const makeArea = (data, max) => makeLine(data, max) + ` ${xP[4]},${cB} ${xP[0]},${cB}`;

                                const lines = [
                                    { data: depositData, max: 650, color: '#008935', label: 'Customer Deposits', gradId: 'areaD' },
                                    { data: assetData, max: 700, color: '#005eb8', label: 'Total Assets', gradId: 'areaA' },
                                    { data: profitData, max: 20, color: '#ffc000', label: 'Net Profit', gradId: 'areaP' },
                                ];

                                return (
                                    <div className={pageStyles.chartCard}>
                                        <div className={pageStyles.chartHeader}>
                                            <div>
                                                <h3>Combined Growth Trend</h3>
                                                <p>All metrics normalized to percentage of 2024 peak</p>
                                            </div>
                                            <div className={pageStyles.chartLegend}>
                                                {lines.map((l, i) => (
                                                    <span key={i} className={pageStyles.legendItem}>
                                                        <span className={pageStyles.legendDot} style={{ background: l.color }} />
                                                        {l.label}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <svg className={pageStyles.combinedChart} viewBox="0 0 800 350" preserveAspectRatio="xMidYMid meet">
                                            <defs>
                                                {lines.map((l, i) => (
                                                    <linearGradient key={i} id={l.gradId} x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor={l.color} stopOpacity="0.15" />
                                                        <stop offset="100%" stopColor={l.color} stopOpacity="0" />
                                                    </linearGradient>
                                                ))}
                                            </defs>
                                            {[0, 25, 50, 75, 100].map((pct, i) => (
                                                <g key={i}>
                                                    <line x1={cL} y1={cB - (pct / 100) * cH} x2={cL + cW} y2={cB - (pct / 100) * cH} stroke="var(--border-default)" strokeWidth="1" />
                                                    <text x={cL - 10} y={cB - (pct / 100) * cH + 4} textAnchor="end" fill="var(--text-muted)" fontSize="11" fontFamily="var(--font-heading)">{pct}%</text>
                                                </g>
                                            ))}
                                            {years.map((yr, i) => (
                                                <text key={i} x={xP[i]} y={cB + 30} textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontFamily="var(--font-heading)" fontWeight="600">{yr}</text>
                                            ))}
                                            {lines.map((l, li) => (
                                                <g key={li}>
                                                    <polygon points={makeArea(l.data, l.max)} fill={`url(#${l.gradId})`} className={pageStyles.chartArea} />
                                                    <polyline points={makeLine(l.data, l.max)} fill="none" stroke={l.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={pageStyles.chartLine} />
                                                    {l.data.map((v, j) => (
                                                        <circle key={j} cx={xP[j]} cy={toY(v, l.max)} r="5" fill="white" stroke={l.color} strokeWidth="2.5" className={pageStyles.chartDot} />
                                                    ))}
                                                </g>
                                            ))}
                                            <line x1={cL} y1={cB} x2={cL + cW} y2={cB} stroke="var(--text-muted)" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                );
                            })()}

                            {/* Bottom Row: Donut + Horizontal Bars */}
                            <div className={pageStyles.dashboardBottom}>
                                {/* Donut Chart */}
                                <div className={pageStyles.chartCard}>
                                    <div className={pageStyles.chartHeader}>
                                        <div>
                                            <h3>Share Distribution</h3>
                                            <p>By holding range bands</p>
                                        </div>
                                    </div>
                                    {(() => {
                                        const segments = [
                                            { band: '1 - 1,000 shares', pct: 40, holders: '3,842', color: '#2b1c6d' },
                                            { band: '1,001 - 5,000 shares', pct: 30, holders: '984', color: '#008935' },
                                            { band: '5,001 - 10,000 shares', pct: 15, holders: '312', color: '#ffc000' },
                                            { band: 'Over 10,000 shares', pct: 15, holders: '122', color: '#005eb8' },
                                        ];
                                        const r = 80, cx = 100, cy = 100;
                                        const circ = 2 * Math.PI * r;
                                        let offset = 0;
                                        return (
                                            <div className={pageStyles.donutLayout}>
                                                <svg className={pageStyles.donutSvg} viewBox="0 0 200 200">
                                                    <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--surface-secondary)" strokeWidth="24" />
                                                    {segments.map((seg, i) => {
                                                        const len = (seg.pct / 100) * circ;
                                                        const gap = circ - len;
                                                        const dashArr = `${len} ${gap}`;
                                                        const dashOff = -offset;
                                                        offset += len;
                                                        return (
                                                            <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={seg.color} strokeWidth="24" strokeDasharray={dashArr} strokeDashoffset={dashOff} strokeLinecap="butt" transform={`rotate(-90 ${cx} ${cy})`} className={pageStyles.donutSegment} />
                                                        );
                                                    })}
                                                    <text x={cx} y={cy - 6} textAnchor="middle" fill="var(--text-heading)" fontSize="22" fontWeight="800" fontFamily="var(--font-heading)">5,260</text>
                                                    <text x={cx} y={cy + 14} textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-heading)">Shareholders</text>
                                                </svg>
                                                <div className={pageStyles.donutLegend}>
                                                    {segments.map((seg, i) => (
                                                        <div key={i} className={pageStyles.donutLegendItem}>
                                                            <span className={pageStyles.donutLegendDot} style={{ background: seg.color }} />
                                                            <div>
                                                                <span className={pageStyles.donutLegendLabel}>{seg.band}</span>
                                                                <span className={pageStyles.donutLegendValue}>{seg.pct}% &middot; {seg.holders} holders</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Top Shareholders Bar Chart */}
                                <div className={pageStyles.chartCard}>
                                    <div className={pageStyles.chartHeader}>
                                        <div>
                                            <h3>Top 10 Shareholders</h3>
                                            <p>By percentage of shares owned</p>
                                        </div>
                                    </div>
                                    <div className={pageStyles.barChart}>
                                        {largestShareholders.map((s, i) => (
                                            <div key={i} className={pageStyles.barRow}>
                                                <span className={pageStyles.barRank}>{s.rank}</span>
                                                <div className={pageStyles.barInfo}>
                                                    <div className={pageStyles.barTop}>
                                                        <span className={pageStyles.barName}>{s.name}</span>
                                                        <span className={pageStyles.barPct}>{s.percentage}</span>
                                                    </div>
                                                    <div className={pageStyles.barTrack}>
                                                        <div className={pageStyles.barFill} style={{ width: `${(parseFloat(s.percentage) / 11) * 100}%` }} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'financials' && (
                        <div>
                            <span className="section-eyebrow">Audited Financial Statements</span>
                            <h2>Statements of Financial Performance</h2>
                            <p style={{ marginBottom: 32, lineHeight: 1.6 }}>
                                Comparison of the audited financial statements for the fiscal years ending December 31, 2024 and December 31, 2023. Prepared in compliance with IFRS and BoG guidelines.
                            </p>

                            <div className={styles.responsiveTwoCol}>
                                <div>
                                    <h3 style={{ marginBottom: 20 }}>Income Statement (P&amp;L)</h3>
                                    <div className={styles.tableWrapper}>
                                        <table className={styles.table}>
                                            <thead>
                                                <tr>
                                                    <th>Account item</th>
                                                    <th style={{ textAlign: 'right' }}>2024 (GH¢)</th>
                                                    <th style={{ textAlign: 'right' }}>2023 (GH¢)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>Interest Income</strong></td>
                                                    <td style={{ textAlign: 'right', fontWeight: 600 }}>124,534,600</td>
                                                    <td style={{ textAlign: 'right' }}>89,350,200</td>
                                                </tr>
                                                <tr>
                                                    <td>Interest Expense</td>
                                                    <td style={{ textAlign: 'right' }}>(32,150,400)</td>
                                                    <td style={{ textAlign: 'right' }}>(22,100,500)</td>
                                                </tr>
                                                <tr style={{ background: 'var(--primary-50)' }}>
                                                    <td><strong>Net Interest Income</strong></td>
                                                    <td style={{ textAlign: 'right', fontWeight: 700 }}>92,384,200</td>
                                                    <td style={{ textAlign: 'right', fontWeight: 700 }}>67,249,700</td>
                                                </tr>
                                                <tr>
                                                    <td>Fees &amp; Commission Income</td>
                                                    <td style={{ textAlign: 'right' }}>18,450,200</td>
                                                    <td style={{ textAlign: 'right' }}>12,120,400</td>
                                                </tr>
                                                <tr>
                                                    <td>Other Operating Income</td>
                                                    <td style={{ textAlign: 'right' }}>3,150,500</td>
                                                    <td style={{ textAlign: 'right' }}>2,180,900</td>
                                                </tr>
                                                <tr style={{ background: 'var(--primary-50)' }}>
                                                    <td><strong>Total Operating Income</strong></td>
                                                    <td style={{ textAlign: 'right', fontWeight: 700 }}>113,984,900</td>
                                                    <td style={{ textAlign: 'right', fontWeight: 700 }}>81,551,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Impairment Losses on Loans</td>
                                                    <td style={{ textAlign: 'right' }}>(4,180,200)</td>
                                                    <td style={{ textAlign: 'right' }}>(3,540,600)</td>
                                                </tr>
                                                <tr>
                                                    <td>Operating Expenses</td>
                                                    <td style={{ textAlign: 'right' }}>(84,154,200)</td>
                                                    <td style={{ textAlign: 'right' }}>(60,910,400)</td>
                                                </tr>
                                                <tr style={{ background: 'var(--primary-50)' }}>
                                                    <td><strong>Profit Before Taxation</strong></td>
                                                    <td style={{ textAlign: 'right', fontWeight: 700 }}>25,650,500</td>
                                                    <td style={{ textAlign: 'right', fontWeight: 700 }}>17,100,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Taxation &amp; Levies</td>
                                                    <td style={{ textAlign: 'right' }}>(7,550,200)</td>
                                                    <td style={{ textAlign: 'right' }}>(4,000,000)</td>
                                                </tr>
                                                <tr style={{ background: 'var(--primary-50)', borderTop: '2px solid var(--navy)' }}>
                                                    <td><strong>Profit After Taxation</strong></td>
                                                    <td style={{ textAlign: 'right', fontWeight: 800, color: 'var(--green-600)' }}>18,100,300</td>
                                                    <td style={{ textAlign: 'right', fontWeight: 800 }}>13,100,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h3 style={{ marginBottom: 20 }}>Balance Sheet</h3>
                                    <div className={styles.tableWrapper}>
                                        <table className={styles.table}>
                                            <thead>
                                                <tr>
                                                    <th>Assets &amp; Liabilities</th>
                                                    <th style={{ textAlign: 'right' }}>2024 (GH¢)</th>
                                                    <th style={{ textAlign: 'right' }}>2023 (GH¢)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Cash &amp; Bank Balances</td>
                                                    <td style={{ textAlign: 'right' }}>84,150,200</td>
                                                    <td style={{ textAlign: 'right' }}>45,210,400</td>
                                                </tr>
                                                <tr>
                                                    <td>Treasury Bills &amp; Securities</td>
                                                    <td style={{ textAlign: 'right' }}>310,450,900</td>
                                                    <td style={{ textAlign: 'right' }}>180,140,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Loans &amp; Advances (Net)</td>
                                                    <td style={{ textAlign: 'right' }}>245,150,000</td>
                                                    <td style={{ textAlign: 'right' }}>130,450,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Property &amp; Equipment</td>
                                                    <td style={{ textAlign: 'right' }}>22,145,200</td>
                                                    <td style={{ textAlign: 'right' }}>12,180,300</td>
                                                </tr>
                                                <tr>
                                                    <td>Other Assets</td>
                                                    <td style={{ textAlign: 'right' }}>7,853,700</td>
                                                    <td style={{ textAlign: 'right' }}>5,198,800</td>
                                                </tr>
                                                <tr style={{ background: 'var(--primary-50)', fontWeight: 700 }}>
                                                    <td><strong>Total Assets</strong></td>
                                                    <td style={{ textAlign: 'right', fontWeight: 800 }}>669,750,000</td>
                                                    <td style={{ textAlign: 'right' }}>373,180,000</td>
                                                </tr>
                                                <tr style={{ height: 16 }}>
                                                    <td colSpan={3}></td>
                                                </tr>
                                                <tr>
                                                    <td>Customer Deposits</td>
                                                    <td style={{ textAlign: 'right' }}>614,680,797</td>
                                                    <td style={{ textAlign: 'right' }}>344,600,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Borrowings</td>
                                                    <td style={{ textAlign: 'right' }}>12,150,000</td>
                                                    <td style={{ textAlign: 'right' }}>8,140,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Other Liabilities</td>
                                                    <td style={{ textAlign: 'right' }}>15,145,200</td>
                                                    <td style={{ textAlign: 'right' }}>9,840,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Stated Capital</td>
                                                    <td style={{ textAlign: 'right' }}>3,868,451</td>
                                                    <td style={{ textAlign: 'right' }}>3,670,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Statutory Reserves</td>
                                                    <td style={{ textAlign: 'right' }}>23,905,552</td>
                                                    <td style={{ textAlign: 'right' }}>6,930,000</td>
                                                </tr>
                                                <tr style={{ background: 'var(--primary-50)', fontWeight: 700 }}>
                                                    <td><strong>Total Liabilities &amp; Equity</strong></td>
                                                    <td style={{ textAlign: 'right', fontWeight: 800 }}>669,750,000</td>
                                                    <td style={{ textAlign: 'right' }}>373,180,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'shareholding' && (
                        <div>
                            <span className="section-eyebrow">Equity Base</span>
                            <h2>Stated Capital &amp; Shareholders</h2>
                            <p style={{ marginBottom: 32, lineHeight: 1.6 }}>
                                Upper Amenfi Community Bank PLC has a resilient capital structure that comfortably exceeds the regulatory requirement of the Bank of Ghana. The stated capital stands at <strong>GH¢ 3,868,451</strong> as of December 31, 2024.
                            </p>

                            <div className={pageStyles.shareholderHeaderGrid}>
                                <div className={styles.card}>
                                    <div className={styles.cardIconGold}><Users size={18} /></div>
                                    <h3>5,260</h3>
                                    <p>Active Shareholders (up from 5,054 in 2023)</p>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.cardIconGold}><TrendingUp size={18} /></div>
                                    <h3>GH¢ 3.87M</h3>
                                    <p>Stated Capital (fully paid-up)</p>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.cardIconGold}><ShieldCheck size={18} /></div>
                                    <h3>100%</h3>
                                    <p>Compliance with BoG minimum capital levels</p>
                                </div>
                            </div>

                            <div className={styles.responsiveTwoCol}>
                                <div>
                                    <h3 style={{ marginBottom: 20 }}>Top 10 Shareholders</h3>
                                    <div className={styles.tableWrapper}>
                                        <table className={styles.table}>
                                            <thead>
                                                <tr>
                                                    <th>Rank</th>
                                                    <th>Shareholder Name</th>
                                                    <th style={{ textAlign: 'right' }}>Shares Held</th>
                                                    <th style={{ textAlign: 'right' }}>% Owned</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {largestShareholders.map((s) => (
                                                    <tr key={s.rank}>
                                                        <td>{s.rank}</td>
                                                        <td><strong>{s.name}</strong></td>
                                                        <td style={{ textAlign: 'right' }}>{s.shares}</td>
                                                        <td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--accent-600)' }}>{s.percentage}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h3 style={{ marginBottom: 20 }}>Share Distribution</h3>
                                    <div className={styles.tableWrapper}>
                                        <table className={styles.table}>
                                            <thead>
                                                <tr>
                                                    <th>Holding Range</th>
                                                    <th>No. of Holders</th>
                                                    <th style={{ textAlign: 'right' }}>Total Shares</th>
                                                    <th style={{ textAlign: 'right' }}>% Distribution</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {shareDistribution.map((d, i) => (
                                                    <tr key={i}>
                                                        <td><strong>{d.band}</strong> shares</td>
                                                        <td>{d.holders}</td>
                                                        <td style={{ textAlign: 'right' }}>{d.shares}</td>
                                                        <td style={{ textAlign: 'right', fontWeight: 600 }}>{d.percentage}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className={styles.card} style={{ marginTop: 24 }}>
                                        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                                            <Info size={20} style={{ color: 'var(--accent-600)', flexShrink: 0 }} />
                                            <div>
                                                <h4 style={{ margin: '0 0 6px 0', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem' }}>Dividend Proposal</h4>
                                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                                                    The Board of Directors proposed a dividend of <strong>GH¢ 0.1 per share</strong> for the 2024 fiscal year (totaling GH¢ 386,845), which was approved by shareholders at the 35th Annual General Meeting held on 5th July 2025.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'agm' && (
                        <div>
                            <span className="section-eyebrow">Annual General Meeting</span>
                            <h2>35th Annual General Meeting (AGM)</h2>
                            <p style={{ marginBottom: 32, lineHeight: 1.6 }}>
                                The 35th Annual General Meeting of the Shareholders of Upper Amenfi Community Bank PLC was held on Saturday, 5th July 2025 to transact ordinary bank business.
                            </p>

                            <div className={pageStyles.agmDetailsCard}>
                                <span style={{ color: 'var(--accent-300)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Meeting Recap</span>
                                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', margin: '8px 0 24px 0' }}>Meeting Highlights</h3>
                                <p style={{ maxWidth: 640, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                    Shareholders gathered at the Forecourt of the Head Office in Ankwaso to review the bank&apos;s financial performance, approve dividends, and chart the path forward for continued growth.
                                </p>

                                <div className={pageStyles.agmDetailsGrid}>
                                    <div className={pageStyles.agmDetailItem}>
                                        <h4>Date</h4>
                                        <p>Saturday, 5th July 2025</p>
                                    </div>
                                    <div className={pageStyles.agmDetailItem}>
                                        <h4>Time</h4>
                                        <p>10:00 AM UTC</p>
                                    </div>
                                    <div className={pageStyles.agmDetailItem}>
                                        <h4>Venue</h4>
                                        <p>Forecourt, Head Office Ankwaso</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.responsiveTwoCol}>
                                <div>
                                    <h3 style={{ marginBottom: 20 }}>Agenda Items Addressed</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                        {[
                                            'Received and considered the reports of the Directors, Auditors and Financial Statements for the year ended 31st December 2024.',
                                            'Declared and approved the dividend proposed by the Board of Directors.',
                                            'Elected Directors in place of those retiring by rotation.',
                                            'Authorized Directors to fix the remuneration of the Auditors.',
                                            'Approved the remuneration of Directors.',
                                        ].map((item, i) => (
                                            <div key={i} style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                                                <ChevronRight size={16} style={{ color: 'var(--accent-600)', flexShrink: 0, marginTop: 3 }} />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 style={{ marginBottom: 20 }}>Download Report</h3>
                                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 20 }}>
                                        Access the full 35th AGM report, including the Chairman&apos;s address, audited financial statements, corporate governance report, and shareholder information.
                                    </p>

                                    <div className={pageStyles.downloadCard} style={{ marginTop: 0 }}>
                                        <div className={pageStyles.downloadInfo}>
                                            <h4>35th AGM Report (2025)</h4>
                                            <p>Download the complete official report and financial statements.</p>
                                        </div>
                                        <a 
                                            href="https://upperamenfirb.com/wp-content/uploads/2025/11/upper-amenfi-agm-2025.-huhcdr-9.pdf" 
                                            className="btn btn-primary btn-sm"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                                        >
                                            <Download size={14} /> Download PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

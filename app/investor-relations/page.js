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
    { year: '2020', value: 0.32, display: '₵0.32M', height: 18 },
    { year: '2021', value: 1.22, display: '₵1.22M', height: 25 },
    { year: '2022', value: 4.50, display: '₵4.50M', height: 45 },
    { year: '2023', value: 13.10, display: '₵13.10M', height: 80 },
    { year: '2024', value: 18.10, display: '₵18.10M', height: 100 },
    { year: '2025', value: 16.32, display: '₵16.32M', height: 90 }
];

const trendDeposits = [
    { year: '2020', value: 154, display: '₵154M', height: 18 },
    { year: '2021', value: 210, display: '₵210M', height: 24 },
    { year: '2022', value: 290, display: '₵290M', height: 33 },
    { year: '2023', value: 344.6, display: '₵344.6M', height: 39 },
    { year: '2024', value: 614.7, display: '₵614.7M', height: 70 },
    { year: '2025', value: 875.0, display: '₵875.0M', height: 100 }
];

const trendAssets = [
    { year: '2020', value: 167, display: '₵167M', height: 18 },
    { year: '2021', value: 230, display: '₵230M', height: 25 },
    { year: '2022', value: 320, display: '₵320M', height: 34 },
    { year: '2023', value: 373.2, display: '₵373.2M', height: 40 },
    { year: '2024', value: 669.8, display: '₵669.8M', height: 72 },
    { year: '2025', value: 930.7, display: '₵930.7M', height: 100 }
];

export default function InvestorRelationsPage() {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedAgm, setSelectedAgm] = useState('36');
    const [isLoading, setIsLoading] = useState(false);

    const handleReportChange = (val) => {
        if (val === selectedAgm) return;
        setIsLoading(true);
        setTimeout(() => {
            setSelectedAgm(val);
            setIsLoading(false);
        }, 750);
    };

    const currentLargestShareholders = selectedAgm === '36' ? [
        { rank: 1, name: 'Unallocated Share', shares: '3,038,390', percentage: '9.98%' },
        { rank: 2, name: 'Nartey Desmond Afutu', shares: '1,050,000', percentage: '3.45%' },
        { rank: 3, name: 'Mireku Nelly', shares: '850,000', percentage: '2.79%' },
        { rank: 4, name: 'Branch Management Staff Association', shares: '584,884', percentage: '1.92%' },
        { rank: 5, name: 'Junior Staff Association', shares: '737,315', percentage: '2.42%' },
        { rank: 6, name: 'Apo Benjamin Tetteh', shares: '700,000', percentage: '2.30%' },
        { rank: 7, name: 'Cudjoe Joana Gyan', shares: '615,493', percentage: '2.02%' },
        { rank: 8, name: 'Ignatius O Appiah', shares: '564,512', percentage: '1.86%' },
        { rank: 9, name: 'Paul Agyekum Mensah', shares: '535,193', percentage: '1.76%' },
        { rank: 10, name: 'Collins Nyame', shares: '532,400', percentage: '1.75%' },
    ] : [
        { rank: 1, name: 'Junior Staff Association', shares: '598,963', percentage: '3.13%' },
        { rank: 2, name: 'Unallocated Share', shares: '533,966', percentage: '2.79%' },
        { rank: 3, name: 'Cudjoe Joana Gyan', shares: '500,000', percentage: '2.61%' },
        { rank: 4, name: 'Ignatius O. Appiah', shares: '452,446', percentage: '2.37%' },
        { rank: 5, name: 'Paul Agyekum Mensah', shares: '429,369', percentage: '2.24%' },
        { rank: 6, name: 'Collins Nyame', shares: '424,909', percentage: '2.22%' },
        { rank: 7, name: 'Charles Boakye', shares: '395,040', percentage: '2.07%' },
        { rank: 8, name: 'Susu Staff', shares: '374,990', percentage: '1.96%' },
        { rank: 9, name: 'Branch Management Staff Association', shares: '304,540', percentage: '1.59%' },
        { rank: 10, name: 'Louis Mensah', shares: '304,653', percentage: '1.59%' },
    ];

    const currentShareDistribution = selectedAgm === '36' ? [
        { band: '1 - 1,000', holders: '4,427', shares: '922,134', percentage: '3.03%' },
        { band: '1,001 - 5,000', holders: '509', shares: '1,143,189', percentage: '3.76%' },
        { band: '5,001 - 10,000', holders: '78', shares: '606,454', percentage: '1.99%' },
        { band: 'Over 10,000', holders: '248', shares: '27,737,025', percentage: '91.21%' },
    ] : [
        { band: '1 - 1,000', holders: '4,537', shares: '942,920', percentage: '4.93%' },
        { band: '1,001 - 5,000', holders: '439', shares: '957,451', percentage: '5.00%' },
        { band: '5,001 - 10,000', holders: '57', shares: '356,635', percentage: '1.86%' },
        { band: 'Over 10,000', holders: '227', shares: '16,874,463', percentage: '88.20%' },
    ];

    return (
        <>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>

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

            {/* Main Interactive Dashboard Area */}
            <div style={{ position: 'relative', minHeight: 'clamp(300px, 50vw, 600px)' }}>
                {isLoading && (
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 100,
                        transition: 'opacity 0.2s ease'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 16,
                            padding: 'clamp(20px, 5vw, 32px) clamp(24px, 5vw, 48px)',
                            background: 'white',
                            borderRadius: '16px',
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid var(--border-default)',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                border: '4px solid var(--border-default)',
                                borderTop: '4px solid var(--navy)',
                                borderRadius: '50%',
                                animation: 'spin 0.8s linear infinite'
                            }}></div>
                            <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)' }}>
                                Switching to {selectedAgm === '36' ? '35th' : '36th'} AGM Data...
                            </span>
                        </div>
                    </div>
                )}

                {/* Stats Row */}
                <section style={{ padding: '0', marginTop: '-40px', position: 'relative', zIndex: 2 }}>
                    <div className="container">
                        <div className={styles.statsRow}>
                            {[
                                { value: selectedAgm === '36' ? 930.7 : 669.75, suffix: 'M', label: 'Total Assets (₵)' },
                                { value: selectedAgm === '36' ? 875.0 : 614.68, suffix: 'M', label: 'Total Deposits (₵)' },
                                { value: selectedAgm === '36' ? 16.32 : 18.10, suffix: 'M', label: 'Net Profit (₵)' },
                                { value: selectedAgm === '36' ? 6.08 : 3.87, suffix: 'M', label: 'Stated Capital (₵)' },
                            ].map((s, i) => (
                                <div key={`${selectedAgm}-${i}`} className={styles.statCard}>
                                    <h3><AnimatedCounter end={s.value} decimals={2} suffix={s.suffix} /></h3>
                                    <p>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Report Selector Header Bar - Moved under stats row */}
                <div className="container" style={{ marginTop: '24px', marginBottom: '8px', position: 'relative', zIndex: 2 }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        flexWrap: 'wrap', 
                        gap: 16,
                        padding: '16px 24px',
                        background: 'var(--surface-secondary)',
                        borderRadius: '12px',
                        border: '1px solid var(--border-default)'
                    }}>
                        <div>
                            <span className="section-eyebrow" style={{ marginBottom: 4 }}>Annual Reporting</span>
                            <h2 style={{ margin: 0, fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                                {selectedAgm === '36' ? '36th AGM Corporate Performance (FY 2025)' : '35th AGM Corporate Performance (FY 2024)'}
                            </h2>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <span className={pageStyles.toggleLabel}>Select Report:</span>
                            <div className={pageStyles.agmTogglePills}>
                                <button 
                                    className={`${pageStyles.togglePill} ${selectedAgm === '36' ? pageStyles.activePill : ''}`}
                                    onClick={() => handleReportChange('36')}
                                    disabled={isLoading}
                                >
                                    36th AGM (2025)
                                </button>
                                <button 
                                    className={`${pageStyles.togglePill} ${selectedAgm === '35' ? pageStyles.activePill : ''}`}
                                    onClick={() => handleReportChange('35')}
                                    disabled={isLoading}
                                >
                                    35th AGM (2024)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

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
                                    <h2>Outlook for the {selectedAgm === '36' ? '2026' : '2025'} Fiscal Year</h2>
                                    <p style={{ marginBottom: 16, lineHeight: 1.6 }}>
                                        Upper Amenfi Community Bank PLC continues to solidify its stance as a top-performing Rural and Community Bank (RCB) in Ghana. The board and management have set forth a clear, aggressive roadmap to enter the <strong>Top 5 largest RCBs nationwide</strong>.
                                    </p>
                                    <p style={{ marginBottom: 24, lineHeight: 1.6 }}>
                                        Our strategy focuses on digital financial inclusion, expanding agency banking touchpoints, and scaling our cocoa-farmer credit facilities across our 19 branches.
                                    </p>

                                    <div className={pageStyles.downloadCard}>
                                        <div className={pageStyles.downloadInfo}>
                                            <h4>{selectedAgm === '36' ? '36th' : '35th'} AGM Report &amp; Financials</h4>
                                            <p>Download the complete, official {selectedAgm === '36' ? '72-page' : '64-page'} PDF report.</p>
                                        </div>
                                        <a 
                                            href={selectedAgm === '36' ? '/36th_AGM_Report.pdf' : 'https://upperamenfirb.com/wp-content/uploads/2025/11/upper-amenfi-agm-2025.-huhcdr-9.pdf'} 
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
                                                desc: selectedAgm === '36' 
                                                    ? 'Expanding our asset base from GH¢ 930M to over GH¢ 1.2 Billion by the end of 2026 through targeted deposit campaigns.'
                                                    : 'Expanding our asset base from GH¢ 670M to over GH¢ 800M by the end of 2025 through targeted deposit campaigns.'
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
                                Review the outstanding growth across our core metrics, demonstrating sustained profitability and increasing depositor confidence.
                            </p>

                            {/* KPI Row */}
                            <div className={pageStyles.kpiRow}>
                                {[
                                    { 
                                        label: 'Net Profit After Tax', 
                                        value: selectedAgm === '36' ? 16.32 : 18.10, 
                                        suffix: 'M', 
                                        prefix: 'GH¢ ', 
                                        growth: selectedAgm === '36' ? '-10.1%' : '+559%', 
                                        color: '#2b1c6d', 
                                        gradId: 'kp0' 
                                    },
                                    { 
                                        label: 'Customer Deposits', 
                                        value: selectedAgm === '36' ? 875.0 : 614.7, 
                                        suffix: 'M', 
                                        prefix: 'GH¢ ', 
                                        growth: selectedAgm === '36' ? '+42.4%' : '+78.4%', 
                                        color: '#008935', 
                                        gradId: 'kp1' 
                                    },
                                    { 
                                        label: 'Total Assets', 
                                        value: selectedAgm === '36' ? 930.7 : 669.8, 
                                        suffix: 'M', 
                                        prefix: 'GH¢ ', 
                                        growth: selectedAgm === '36' ? '+39.0%' : '+79.5%', 
                                        color: '#cc9a00', 
                                        gradId: 'kp2' 
                                    },
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
                                        <div key={`${selectedAgm}-${i}`} className={pageStyles.kpiCard}>
                                            <span className={pageStyles.kpiLabel}>{kpi.label}</span>
                                            <div className={pageStyles.kpiValueRow}>
                                                <span className={pageStyles.kpiValue}>{kpi.prefix}{kpi.value}{kpi.suffix}</span>
                                                <span className={pageStyles.kpiGrowth}>{kpi.growth}</span>
                                            </div>
                                            <span className={pageStyles.kpiSince}>year-over-year growth</span>
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
                                const profitData = selectedAgm === '36' ? [0.32, 1.22, 4.50, 13.10, 18.10, 16.32] : [0.32, 1.22, 4.50, 13.10, 18.10];
                                const depositData = selectedAgm === '36' ? [154, 210, 290, 344.6, 614.7, 875.0] : [154, 210, 290, 344.6, 614.7];
                                const assetData = selectedAgm === '36' ? [167, 230, 320, 373.2, 669.8, 930.7] : [167, 230, 320, 373.2, 669.8];
                                const years = selectedAgm === '36' ? ['2020', '2021', '2022', '2023', '2024', '2025'] : ['2020', '2021', '2022', '2023', '2024'];
                                const cL = 60, cT = 30, cW = 720, cH = 270, cB = cT + cH;
                                const xP = years.map((_, i) => cL + i * (cW / (years.length - 1)));
                                const toY = (val, max) => cB - (val / max) * cH;
                                const makeLine = (data, max) => data.map((v, i) => `${xP[i]},${toY(v, max)}`).join(' ');
                                const makeArea = (data, max) => makeLine(data, max) + ` ${xP[years.length - 1]},${cB} ${xP[0]},${cB}`;

                                const lines = [
                                    { data: depositData, max: 1000, color: '#008935', label: 'Customer Deposits', gradId: 'areaD' },
                                    { data: assetData, max: 1000, color: '#005eb8', label: 'Total Assets', gradId: 'areaA' },
                                    { data: profitData, max: 22, color: '#ffc000', label: 'Net Profit', gradId: 'areaP' },
                                ];

                                return (
                                    <div className={pageStyles.chartCard}>
                                        <div className={pageStyles.chartHeader}>
                                            <div>
                                                <h3>Combined Growth Trend</h3>
                                                <p>All metrics normalized to percentage of {selectedAgm === '36' ? '2025' : '2024'} peak</p>
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
                                        const segments = selectedAgm === '36' ? [
                                            { band: '1 - 1,000 shares', pct: 3, holders: '4,427', color: '#2b1c6d' },
                                            { band: '1,001 - 5,000 shares', pct: 4, holders: '509', color: '#008935' },
                                            { band: '5,001 - 10,000 shares', pct: 2, holders: '78', color: '#ffc000' },
                                            { band: 'Over 10,000 shares', pct: 91, holders: '248', color: '#005eb8' },
                                        ] : [
                                            { band: '1 - 1,000 shares', pct: 5, holders: '4,537', color: '#2b1c6d' },
                                            { band: '1,001 - 5,000 shares', pct: 5, holders: '439', color: '#008935' },
                                            { band: '5,001 - 10,000 shares', pct: 2, holders: '57', color: '#ffc000' },
                                            { band: 'Over 10,000 shares', pct: 88, holders: '227', color: '#005eb8' },
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
                                                    <text x={cx} y={cy - 6} textAnchor="middle" fill="var(--text-heading)" fontSize="22" fontWeight="800" fontFamily="var(--font-heading)">{selectedAgm === '36' ? '5,262' : '5,260'}</text>
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
                                        {currentLargestShareholders.map((s, i) => (
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
                             <div style={{ marginBottom: 32 }}>
                                 <h2>Statements of Financial Performance</h2>
                                 <p style={{ margin: 0, lineHeight: 1.6, maxWidth: 680 }}>
                                     Comparison of the audited financial statements for the fiscal years ending {selectedAgm === '36' ? 'December 31, 2025 and December 31, 2024' : 'December 31, 2024 and December 31, 2023'}. Prepared in compliance with IFRS and Bank of Ghana guidelines.
                                 </p>
                             </div>

                            <div className={styles.responsiveTwoCol}>
                                {selectedAgm === '36' ? (
                                    <>
                                        {/* 36th AGM - 2025 vs 2024 */}
                                        <div>
                                            <h3 style={{ marginBottom: 20 }}>Income Statement (P&amp;L)</h3>
                                            <div className={styles.tableWrapper}>
                                                <table className={styles.table}>
                                                    <thead>
                                                        <tr>
                                                            <th>Account item</th>
                                                            <th style={{ textAlign: 'right' }}>2025 (GH¢)</th>
                                                            <th style={{ textAlign: 'right' }}>2024 (GH¢)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Interest Income</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 600 }}>145,957,481</td>
                                                            <td style={{ textAlign: 'right' }}>95,044,795</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Interest Expense</td>
                                                            <td style={{ textAlign: 'right' }}>(24,207,536)</td>
                                                            <td style={{ textAlign: 'right' }}>(17,362,311)</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)' }}>
                                                            <td><strong>Net Interest Income</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>121,749,945</td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>77,682,483</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fees &amp; Commission Income (Net)</td>
                                                            <td style={{ textAlign: 'right' }}>4,652,703</td>
                                                            <td style={{ textAlign: 'right' }}>2,590,318</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other Operating Income</td>
                                                            <td style={{ textAlign: 'right' }}>2,390,131</td>
                                                            <td style={{ textAlign: 'right' }}>758,127</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)' }}>
                                                            <td><strong>Total Operating Income</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>128,792,779</td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>81,030,929</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Impairment Losses on Loans</td>
                                                            <td style={{ textAlign: 'right' }}>(1,006,909)</td>
                                                            <td style={{ textAlign: 'right' }}>(3,555,904)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Operating Expenses</td>
                                                            <td style={{ textAlign: 'right' }}>(104,472,099)</td>
                                                            <td style={{ textAlign: 'right' }}>(67,638,859)</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)' }}>
                                                            <td><strong>Profit Before Taxation</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>23,313,772</td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>9,836,167</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Taxation &amp; Levies</td>
                                                            <td style={{ textAlign: 'right' }}>(6,995,727)</td>
                                                            <td style={{ textAlign: 'right' }}>(2,949,255)</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)', borderTop: '2px solid var(--navy)' }}>
                                                            <td><strong>Profit After Taxation</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 800, color: 'var(--green-600)' }}>16,318,046</td>
                                                            <td style={{ textAlign: 'right', fontWeight: 800 }}>6,886,913</td>
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
                                                            <th style={{ textAlign: 'right' }}>2025 (GH¢)</th>
                                                            <th style={{ textAlign: 'right' }}>2024 (GH¢)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Cash &amp; Bank Balances</td>
                                                            <td style={{ textAlign: 'right' }}>388,399,841</td>
                                                            <td style={{ textAlign: 'right' }}>193,953,951</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Treasury Bills &amp; Securities</td>
                                                            <td style={{ textAlign: 'right' }}>359,156,971</td>
                                                            <td style={{ textAlign: 'right' }}>371,916,512</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Loans &amp; Advances (Net)</td>
                                                            <td style={{ textAlign: 'right' }}>158,620,622</td>
                                                            <td style={{ textAlign: 'right' }}>76,935,715</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Property &amp; Equipment</td>
                                                            <td style={{ textAlign: 'right' }}>11,385,784</td>
                                                            <td style={{ textAlign: 'right' }}>6,184,363</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other Assets</td>
                                                            <td style={{ textAlign: 'right' }}>13,090,346</td>
                                                            <td style={{ textAlign: 'right' }}>5,360,406</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)', fontWeight: 700 }}>
                                                            <td><strong>Total Assets</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 800 }}>930,653,565</td>
                                                            <td style={{ textAlign: 'right' }}>654,350,947</td>
                                                        </tr>
                                                        <tr style={{ height: 16 }}>
                                                            <td colSpan={3}></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Customer Deposits</td>
                                                            <td style={{ textAlign: 'right' }}>875,030,873</td>
                                                            <td style={{ textAlign: 'right' }}>614,680,797</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Borrowings</td>
                                                            <td style={{ textAlign: 'right' }}>937,922</td>
                                                            <td style={{ textAlign: 'right' }}>1,823,922</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other Liabilities</td>
                                                            <td style={{ textAlign: 'right' }}>18,376,713</td>
                                                            <td style={{ textAlign: 'right' }}>18,010,538</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Stated Capital</td>
                                                            <td style={{ textAlign: 'right' }}>6,079,159</td>
                                                            <td style={{ textAlign: 'right' }}>3,868,451</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Statutory Reserves</td>
                                                            <td style={{ textAlign: 'right' }}>8,214,238</td>
                                                            <td style={{ textAlign: 'right' }}>4,134,727</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Revaluation Reserve</td>
                                                            <td style={{ textAlign: 'right' }}>39,404</td>
                                                            <td style={{ textAlign: 'right' }}>39,404</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Retained Earnings</td>
                                                            <td style={{ textAlign: 'right' }}>21,975,255</td>
                                                            <td style={{ textAlign: 'right' }}>11,793,108</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)', fontWeight: 700 }}>
                                                            <td><strong>Total Liabilities &amp; Equity</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 800 }}>930,653,565</td>
                                                            <td style={{ textAlign: 'right' }}>654,350,947</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* 35th AGM - 2024 vs 2023 */}
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
                                                            <td style={{ textAlign: 'right', fontWeight: 600 }}>110,858,520</td>
                                                            <td style={{ textAlign: 'right' }}>61,876,482</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Interest Expense</td>
                                                            <td style={{ textAlign: 'right' }}>(17,362,311)</td>
                                                            <td style={{ textAlign: 'right' }}>(10,169,961)</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)' }}>
                                                            <td><strong>Net Interest Income</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>93,496,209</td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>51,706,521</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fees &amp; Commission Income (Net)</td>
                                                            <td style={{ textAlign: 'right' }}>2,590,318</td>
                                                            <td style={{ textAlign: 'right' }}>2,135,066</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other Operating Income</td>
                                                            <td style={{ textAlign: 'right' }}>758,127</td>
                                                            <td style={{ textAlign: 'right' }}>1,392,453</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)' }}>
                                                            <td><strong>Total Operating Income</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>96,844,654</td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>55,234,039</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Impairment Losses on Loans</td>
                                                            <td style={{ textAlign: 'right' }}>(3,555,904)</td>
                                                            <td style={{ textAlign: 'right' }}>(3,800,000)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Operating Expenses</td>
                                                            <td style={{ textAlign: 'right' }}>(67,638,859)</td>
                                                            <td style={{ textAlign: 'right' }}>(43,485,478)</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)' }}>
                                                            <td><strong>Profit Before Taxation</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>25,649,892</td>
                                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>7,948,562</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Taxation &amp; Levies</td>
                                                            <td style={{ textAlign: 'right' }}>(7,503,247)</td>
                                                            <td style={{ textAlign: 'right' }}>(5,195,252)</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)', borderTop: '2px solid var(--navy)' }}>
                                                            <td><strong>Profit After Taxation</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 800, color: 'var(--green-600)' }}>18,146,646</td>
                                                            <td style={{ textAlign: 'right', fontWeight: 800 }}>2,753,310</td>
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
                                                            <td style={{ textAlign: 'right' }}>177,673,041</td>
                                                            <td style={{ textAlign: 'right' }}>137,975,651</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Funds with Other Financial Institutions</td>
                                                            <td style={{ textAlign: 'right' }}>18,500,000</td>
                                                            <td style={{ textAlign: 'right' }}>22,791,154</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Treasury Bills &amp; Securities</td>
                                                            <td style={{ textAlign: 'right' }}>139,350,431</td>
                                                            <td style={{ textAlign: 'right' }}>101,558,027</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Loans &amp; Advances (Net)</td>
                                                            <td style={{ textAlign: 'right' }}>76,935,715</td>
                                                            <td style={{ textAlign: 'right' }}>69,952,544</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Property &amp; Equipment</td>
                                                            <td style={{ textAlign: 'right' }}>6,184,362</td>
                                                            <td style={{ textAlign: 'right' }}>7,598,099</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other Assets</td>
                                                            <td style={{ textAlign: 'right' }}>4,943,816</td>
                                                            <td style={{ textAlign: 'right' }}>5,996,990</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)', fontWeight: 700 }}>
                                                            <td><strong>Total Assets</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 800 }}>669,748,083</td>
                                                            <td style={{ textAlign: 'right' }}>373,178,710</td>
                                                        </tr>
                                                        <tr style={{ height: 16 }}>
                                                            <td colSpan={3}></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Customer Deposits</td>
                                                            <td style={{ textAlign: 'right' }}>614,680,797</td>
                                                            <td style={{ textAlign: 'right' }}>344,603,811</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Current Tax Liabilities</td>
                                                            <td style={{ textAlign: 'right' }}>4,137,402</td>
                                                            <td style={{ textAlign: 'right' }}>4,020,696</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Deferred Tax Liabilities</td>
                                                            <td style={{ textAlign: 'right' }}>449,288</td>
                                                            <td style={{ textAlign: 'right' }}>641,009</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other Liabilities</td>
                                                            <td style={{ textAlign: 'right' }}>14,136,981</td>
                                                            <td style={{ textAlign: 'right' }}>8,468,331</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Borrowings</td>
                                                            <td style={{ textAlign: 'right' }}>1,823,922</td>
                                                            <td style={{ textAlign: 'right' }}>520,202</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Provisions</td>
                                                            <td style={{ textAlign: 'right' }}>3,424,269</td>
                                                            <td style={{ textAlign: 'right' }}>2,175,635</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Stated Capital</td>
                                                            <td style={{ textAlign: 'right' }}>3,868,451</td>
                                                            <td style={{ textAlign: 'right' }}>3,668,700</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Revaluation Reserve</td>
                                                            <td style={{ textAlign: 'right' }}>39,404</td>
                                                            <td style={{ textAlign: 'right' }}>39,404</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Statutory Reserves</td>
                                                            <td style={{ textAlign: 'right' }}>6,949,660</td>
                                                            <td style={{ textAlign: 'right' }}>2,412,998</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Retained Earnings</td>
                                                            <td style={{ textAlign: 'right' }}>20,237,908</td>
                                                            <td style={{ textAlign: 'right' }}>6,627,924</td>
                                                        </tr>
                                                        <tr style={{ background: 'var(--primary-50)', fontWeight: 700 }}>
                                                            <td><strong>Total Liabilities &amp; Equity</strong></td>
                                                            <td style={{ textAlign: 'right', fontWeight: 800 }}>669,748,083</td>
                                                            <td style={{ textAlign: 'right' }}>373,178,710</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'shareholding' && (
                        <div>
                            <span className="section-eyebrow">Equity Base</span>
                            <h2>Stated Capital &amp; Shareholders</h2>
                            <p style={{ marginBottom: 32, lineHeight: 1.6 }}>
                                Upper Amenfi Community Bank PLC has a resilient capital structure that comfortably exceeds the regulatory requirement of the Bank of Ghana. The stated capital stands at <strong>GH¢ {selectedAgm === '36' ? '6,079,159' : '3,868,451'}</strong> as of December 31, {selectedAgm === '36' ? '2025' : '2024'}.
                            </p>

                            <div className={pageStyles.shareholderHeaderGrid}>
                                <div className={styles.card}>
                                    <div className={styles.cardIconGold}><Users size={18} /></div>
                                    <h3>{selectedAgm === '36' ? '5,262' : '5,260'}</h3>
                                    <p>Active Shareholders (up from {selectedAgm === '36' ? '5,260 in 2024' : '4,821 in 2023'})</p>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.cardIconGold}><TrendingUp size={18} /></div>
                                    <h3>GH¢ {selectedAgm === '36' ? '6.08M' : '3.87M'}</h3>
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
                                                {currentLargestShareholders.map((s) => (
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
                                                {currentShareDistribution.map((d, i) => (
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
                                                    {selectedAgm === '36' 
                                                        ? 'The Board of Directors proposed a dividend of GH¢ 0.08221 per share for the 2025 fiscal year (totaling GH¢ 2,499,603.52), which was approved by shareholders at the 36th Annual General Meeting held on 4th July 2026.' 
                                                        : 'The Board of Directors proposed a dividend of GH¢ 0.10 per share for the 2024 fiscal year (totaling GH¢ 2,079,590.68), which was approved by shareholders at the 35th Annual General Meeting held on 5th July 2025.'}
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
                            <h2>{selectedAgm === '36' ? '36th' : '35th'} Annual General Meeting (AGM)</h2>
                            <p style={{ marginBottom: 32, lineHeight: 1.6 }}>
                                The {selectedAgm === '36' ? '36th' : '35th'} Annual General Meeting of the Shareholders of Upper Amenfi Community Bank PLC was held on {selectedAgm === '36' ? 'Saturday, 4th July 2026' : 'Saturday, 5th July 2025'} to transact ordinary bank business.
                            </p>

                            <div className={pageStyles.agmDetailsCard}>
                                <span style={{ color: 'var(--accent-300)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Meeting Recap</span>
                                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', margin: '8px 0 24px 0' }}>Meeting Highlights</h3>
                                <p style={{ maxWidth: 640, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                    Shareholders gathered at the Forecourt of the Bank premises in {selectedAgm === '36' ? 'Ankwawso' : 'Wassa Akropong'} to review the bank&apos;s financial performance, approve dividends, and address key corporate updates.
                                </p>

                                <div className={pageStyles.agmDetailsGrid}>
                                    <div className={pageStyles.agmDetailItem}>
                                        <h4>Date</h4>
                                        <p>{selectedAgm === '36' ? 'Saturday, 4th July 2026' : 'Saturday, 5th July 2025'}</p>
                                    </div>
                                    <div className={pageStyles.agmDetailItem}>
                                        <h4>Time</h4>
                                        <p>10:00 AM UTC</p>
                                    </div>
                                    <div className={pageStyles.agmDetailItem}>
                                        <h4>Venue</h4>
                                        <p>Forecourt, Bank Premises, {selectedAgm === '36' ? 'Ankwawso' : 'Wassa Akropong'}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.responsiveTwoCol}>
                                <div>
                                    <h3 style={{ marginBottom: 20 }}>Agenda Items Addressed</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                        {[
                                            `Received and adopted the reports of the Directors, Auditors and Financial Statements for the year ended 31st December ${selectedAgm === '36' ? '2025' : '2024'}.`,
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
                                    <h3 style={{ marginBottom: 20 }}>Annual Reports Archive</h3>
                                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 20 }}>
                                        Access our official Annual General Meeting (AGM) reports, containing detailed financial disclosures, board reports, and statements.
                                    </p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                        <div className={pageStyles.downloadCard} style={{ marginTop: 0 }}>
                                            <div className={pageStyles.downloadInfo}>
                                                <h4>36th AGM Report (2026)</h4>
                                                <p>Most recent report for the financial year ended Dec 31, 2025.</p>
                                            </div>
                                            <a 
                                                href="/36th_AGM_Report.pdf" 
                                                className="btn btn-primary btn-sm"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                                            >
                                                <Download size={14} /> Download PDF
                                            </a>
                                        </div>

                                        <div className={pageStyles.downloadCard} style={{ marginTop: 0 }}>
                                            <div className={pageStyles.downloadInfo}>
                                                <h4>35th AGM Report (2025)</h4>
                                                <p>Report for the financial year ended Dec 31, 2024.</p>
                                            </div>
                                            <a 
                                                href="https://upperamenfirb.com/wp-content/uploads/2025/11/upper-amenfi-agm-2025.-huhcdr-9.pdf" 
                                                className="btn btn-secondary btn-sm"
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
                        </div>
                    )}
                </div>
            </div>
            </div>
        </>
    );
}

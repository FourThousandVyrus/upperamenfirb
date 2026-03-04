import Link from 'next/link';
import { Home, ArrowRight, Phone, MapPin, Search } from 'lucide-react';

export const metadata = {
    title: '404 — Page Not Found',
};

export default function NotFound() {
    return (
        <div style={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 24px',
            background: 'var(--gradient-hero)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 50% 30%, rgba(255, 192, 0, 0.08) 0%, transparent 50%)',
            }} />

            <div style={{
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                maxWidth: 560,
            }}>
                <div style={{
                    fontSize: 'clamp(5rem, 12vw, 8rem)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    background: 'var(--gradient-accent)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                    marginBottom: '8px',
                }}>
                    404
                </div>

                <h1 style={{
                    color: 'white',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    marginBottom: '12px',
                }}>
                    Page Not Found
                </h1>

                <p style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    marginBottom: '36px',
                }}>
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let us help you find what you need.
                </p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    justifyContent: 'center',
                    marginBottom: '48px',
                }}>
                    <Link href="/" className="btn btn-glow btn-md">
                        <Home size={16} /> Back to Home
                    </Link>
                    <Link href="/contact" className="btn btn-outline-light btn-md">
                        Contact Us <ArrowRight size={16} />
                    </Link>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '12px',
                    textAlign: 'left',
                }}>
                    {[
                        { href: '/products-services', icon: Search, label: 'Our Products' },
                        { href: '/loans', icon: Search, label: 'Loan Options' },
                        { href: '/branches', icon: MapPin, label: 'Find a Branch' },
                        { href: '/rates', icon: Search, label: 'Current Rates' },
                    ].map((item) => (
                        <Link key={item.href} href={item.href} style={{
                            display: 'flex', alignItems: 'center', gap: '10px',
                            padding: '14px 16px', borderRadius: 'var(--radius-md)',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.85rem', fontWeight: 500,
                            transition: 'all 0.2s',
                            textDecoration: 'none',
                        }}>
                            <item.icon size={15} style={{ color: 'var(--gold-warm)', flexShrink: 0 }} />
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

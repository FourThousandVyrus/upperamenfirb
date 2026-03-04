'use client';

import { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('uarb-cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('uarb-cookie-consent', 'accepted');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem('uarb-cookie-consent', 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            right: '24px',
            maxWidth: '520px',
            background: 'var(--bg-dark)',
            color: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
            zIndex: 9999,
            animation: 'slideInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
            <button
                onClick={decline}
                aria-label="Close"
                style={{
                    position: 'absolute', top: '12px', right: '12px',
                    color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none',
                    cursor: 'pointer', padding: '4px',
                }}
            >
                <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: 'rgba(255, 192, 0, 0.15)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                    <Shield size={20} style={{ color: 'var(--gold-warm)' }} />
                </div>
                <div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '6px', color: 'white', fontFamily: 'var(--font-heading)' }}>
                        We Value Your Privacy
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>
                        We use cookies to enhance your browsing experience and analyze site traffic.
                        By clicking &quot;Accept&quot;, you consent to our use of cookies.
                    </p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                        <button onClick={accept} className="btn btn-gold btn-sm">Accept</button>
                        <button onClick={decline} className="btn btn-outline-light btn-sm">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

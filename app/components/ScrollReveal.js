'use client';
import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
    children,
    variant = 'up',
    delay = 0,
    threshold = 0.15,
    className = '',
}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const variantClass = {
        up: 'reveal',
        scale: 'reveal-scale',
        left: 'reveal-left',
        right: 'reveal-right',
    }[variant] || 'reveal';

    return (
        <div
            ref={ref}
            className={`${variantClass} ${visible ? 'visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

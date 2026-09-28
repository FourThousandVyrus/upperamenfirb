'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, FileText, CornerDownLeft } from 'lucide-react';
import styles from './SearchModal.module.css';

const INDEX = [
  { title: 'Home', desc: 'Banking local is banking better. 39+ years serving our communities.', href: '/', tags: 'home main start' },
  { title: 'About Us', desc: 'Our story since 1987 — born from cocoa farming communities in Wassa Amenfi.', href: '/about', tags: 'history story vision mission values cocoa founded' },
  { title: 'Products & Services', desc: 'Savings, current accounts, fixed deposits, Susu, and digital banking.', href: '/products-services', tags: 'savings current account fixed deposit susu ezwich apexlink products services' },
  { title: 'Loan Products', desc: 'Easy loans in under 3 hours, salary, commercial, susu and funeral loans.', href: '/loans', tags: 'loan borrow money salary commercial microfinance funeral easy' },
  { title: 'Open an Account', desc: 'Open an account in 4 simple steps with your Ghana Card.', href: '/credit', tags: 'open account new customer requirements ghana card kyc steps' },
  { title: 'Branches', desc: '19 locations across Western, Western North, and Central Regions.', href: '/branches', tags: 'branch location near me map directions atmr network' },
  { title: 'Rates & Fees', desc: 'Fixed deposits up to 18% p.a., savings at 8%, transparent fees.', href: '/rates', tags: 'rates interest fees charges pricing deposit' },
  { title: 'Calculators', desc: 'Estimate loan repayments and project savings growth.', href: '/calculators', tags: 'calculator loan repayment savings amortization tool estimate' },
  { title: 'USSD Banking Guide', desc: 'Bank from any phone with *992# — no internet needed.', href: '/ussd-guide', tags: 'ussd 992 mobile banking phone transfer balance guide' },
  { title: 'Investor Relations', desc: 'Financial reports, AGM documents, and shareholder information.', href: '/investor-relations', tags: 'investor shares agm annual report dividend shareholder financials' },
  { title: 'Governance', desc: 'Board of Directors, management team, and corporate governance.', href: '/governance', tags: 'board directors management leadership governance compliance' },
  { title: 'CSR & Community', desc: 'Scholarships, school construction, healthcare, and community projects.', href: '/csr', tags: 'csr community scholarship social responsibility education health donation' },
  { title: 'News & Updates', desc: 'AGM highlights, branch news, and financial literacy workshops.', href: '/news', tags: 'news updates events announcements dormant reactivation' },
  { title: 'Security Tips', desc: 'Protect yourself from scams, phishing, and fraud.', href: '/security-tips', tags: 'security fraud scam phishing safety protect tips otp pin' },
  { title: 'Contact Us', desc: 'Call, email, or visit our head office at Ankwaso.', href: '/contact', tags: 'contact phone email address help support enquiry faq whatsapp' },
  { title: 'Privacy Policy', desc: 'How we collect, use, and protect your personal information.', href: '/privacy', tags: 'privacy data protection policy personal information' },
  { title: 'Terms of Service', desc: 'Terms governing the use of our services.', href: '/terms', tags: 'terms conditions service legal agreement' },
];

function score(item, q) {
  const query = q.toLowerCase();
  const title = item.title.toLowerCase();
  const desc = item.desc.toLowerCase();
  const tags = item.tags.toLowerCase();
  let s = 0;
  if (title.startsWith(query)) s += 100;
  else if (title.includes(query)) s += 60;
  if (desc.includes(query)) s += 30;
  if (tags.includes(query)) s += 40;
  // word-boundary matches in tags
  if (tags.split(' ').some((t) => t.startsWith(query))) s += 25;
  return s;
}

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const router = useRouter();

  const results = query.trim()
    ? INDEX.map((item) => ({ item, s: score(item, query.trim()) }))
        .filter((r) => r.s > 0)
        .sort((a, b) => b.s - a.s)
        .slice(0, 7)
        .map((r) => r.item)
    : [];

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = useCallback((href) => {
    onClose();
    router.push(href);
  }, [onClose, router]);

  const onKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, results.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && results[activeIdx]) go(results[activeIdx].href);
  };

  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [activeIdx]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Site search">
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.inputRow}>
          <Search size={18} className={styles.searchIcon} />
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            placeholder="Search pages, products, branches..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIdx(0); }}
            onKeyDown={onKeyDown}
            aria-label="Search the site"
          />
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close search">
            <X size={16} />
          </button>
        </div>

        <div className={styles.results} ref={listRef}>
          {query.trim() && results.length === 0 && (
            <p className={styles.empty}>No results for &ldquo;{query}&rdquo;. Try &ldquo;loan&rdquo;, &ldquo;susu&rdquo; or &ldquo;branch&rdquo;.</p>
          )}
          {!query.trim() && (
            <div className={styles.hintWrap}>
              <p className={styles.hintTitle}>Popular</p>
              {['Loans', 'Susu', 'USSD *992#', 'Branches', 'Fixed Deposit'].map((t) => (
                <button key={t} className={styles.chip} onClick={() => setQuery(t.split(' ')[0])}>
                  {t}
                </button>
              ))}
            </div>
          )}
          {results.map((item, i) => (
            <button
              key={item.href}
              data-active={i === activeIdx}
              className={`${styles.result} ${i === activeIdx ? styles.resultActive : ''}`}
              onClick={() => go(item.href)}
              onMouseEnter={() => setActiveIdx(i)}
            >
              <FileText size={16} className={styles.resultIcon} />
              <span className={styles.resultBody}>
                <span className={styles.resultTitle}>{item.title}</span>
                <span className={styles.resultDesc}>{item.desc}</span>
              </span>
              {i === activeIdx && <CornerDownLeft size={13} className={styles.enterIcon} />}
            </button>
          ))}
        </div>

        <div className={styles.footer}>
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>Enter</kbd> open</span>
          <span><kbd>Esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}

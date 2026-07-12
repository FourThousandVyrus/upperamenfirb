'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  User, Users, Briefcase, Building, GraduationCap, Church,
  Scale, Shield, UserCheck, ArrowRight, FileText, CheckCircle2,
  Clock, ClipboardList, Landmark, Handshake, ChevronRight,
  Building2, Heart,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import OrganicDivider from '../components/OrganicDivider';
import styles from './credit.module.css';

/* ── Account type data ── */
const accountTypes = [
  {
    id: 'individual',
    icon: <User size={22} />,
    title: 'Individual Account',
    shortDesc: 'For single persons managing personal finances.',
    color: 'gold',
    reqs: [
      { text: 'Verified Ghana Card as valid identification', icon: <CheckCircle2 size={15} /> },
      { text: 'Two current passport-size photographs', icon: <CheckCircle2 size={15} /> },
      { text: 'Utility bill, tenancy agreement, or GPS address as proof of address', icon: <CheckCircle2 size={15} /> },
      { text: 'Letter of introduction (for salaried accounts)', icon: <CheckCircle2 size={15} /> },
      { text: 'Completed account opening form', icon: <CheckCircle2 size={15} /> },
      { text: 'Complete UACB standard mandate and risk profile', icon: <CheckCircle2 size={15} /> },
      { text: 'Scan and upload signature card the same day', icon: <CheckCircle2 size={15} /> },
    ],
  },
  {
    id: 'joint',
    icon: <Users size={22} />,
    title: 'Joint Account',
    shortDesc: 'Shared by two or more individuals with equal access.',
    color: 'purple',
    reqs: [
      { text: 'Application letter signed by all operators', icon: <CheckCircle2 size={15} /> },
      { text: 'Two current passport photographs of each operator', icon: <CheckCircle2 size={15} /> },
      { text: 'Verified Ghana Card for each signatory', icon: <CheckCircle2 size={15} /> },
      { text: 'Proof of address for all signatories', icon: <CheckCircle2 size={15} /> },
      { text: 'Completed account opening form and UACB standard mandate', icon: <CheckCircle2 size={15} /> },
      { text: 'Risk profile completed', icon: <CheckCircle2 size={15} /> },
      { text: 'Scan and upload signature card the same day', icon: <CheckCircle2 size={15} /> },
    ],
    note: 'Survivorship Clause applies — if one account holder passes away, the surviving holder inherits the account.',
  },
  {
    id: 'sole',
    icon: <Briefcase size={22} />,
    title: 'Sole Proprietorship',
    shortDesc: 'For individuals trading under a registered business name.',
    color: 'green',
    reqs: [
      { text: 'Signed application from the proprietor/proprietress', icon: <CheckCircle2 size={15} /> },
      { text: 'Form A — business name registration', icon: <CheckCircle2 size={15} /> },
      { text: 'Certificate of Registration of the Business', icon: <CheckCircle2 size={15} /> },
      { text: 'Two current passport photographs of the proprietor', icon: <CheckCircle2 size={15} /> },
      { text: 'Verified Ghana Card of the proprietor', icon: <CheckCircle2 size={15} /> },
      { text: 'Completed account opening form, standard mandate, and risk profile', icon: <CheckCircle2 size={15} /> },
      { text: 'Scan and upload signature card the same day', icon: <CheckCircle2 size={15} /> },
    ],
  },
  {
    id: 'partnership',
    icon: <Handshake size={22} />,
    title: 'Partnership Account',
    shortDesc: 'For unincorporated business entities managed by two or more partners.',
    color: 'blue',
    reqs: [
      { text: 'Application signed by all partners (or as the deed specifies)', icon: <CheckCircle2 size={15} /> },
      { text: 'Form B — partnership registration', icon: <CheckCircle2 size={15} /> },
      { text: 'Certificate of Registration of the Business', icon: <CheckCircle2 size={15} /> },
      { text: 'Two current passport photographs of each operator', icon: <CheckCircle2 size={15} /> },
      { text: 'Certified true copy of the Partnership Agreement/Deed', icon: <CheckCircle2 size={15} /> },
      { text: 'Verified Ghana Card for each signatory', icon: <CheckCircle2 size={15} /> },
      { text: 'Completed account opening form, standard mandate, and risk profile', icon: <CheckCircle2 size={15} /> },
      { text: 'At least two partners must verify the potential customer', icon: <CheckCircle2 size={15} /> },
    ],
  },
  {
    id: 'corporate',
    icon: <Building size={22} />,
    title: 'Corporate / LLC',
    shortDesc: 'For registered limited liability companies under the Companies Act.',
    color: 'gold',
    reqs: [
      { text: 'Board resolution authorizing the account opening', icon: <CheckCircle2 size={15} /> },
      { text: 'Certificate of Incorporation', icon: <CheckCircle2 size={15} /> },
      { text: 'Certified true copy of Form 3 from the Registrar of Companies', icon: <CheckCircle2 size={15} /> },
      { text: 'Certified true copy of the Constitution', icon: <CheckCircle2 size={15} /> },
      { text: 'Two current passport photographs of each operator', icon: <CheckCircle2 size={15} /> },
      { text: 'Verified Ghana Card for each signatory', icon: <CheckCircle2 size={15} /> },
      { text: 'Legal search report from the Office of the Registrar of Companies', icon: <CheckCircle2 size={15} /> },
      { text: 'Proof of residential address for each director or shareholder', icon: <CheckCircle2 size={15} /> },
      { text: 'Completed account opening form, standard mandate, and risk profile', icon: <CheckCircle2 size={15} /> },
    ],
  },
  {
    id: 'societies',
    icon: <Landmark size={22} />,
    title: 'Societies, Clubs & Associations',
    shortDesc: 'For nonprofit entities with constitutional governance.',
    color: 'purple',
    reqs: [
      { text: 'Resolution authorizing account opening (referencing meeting minutes)', icon: <CheckCircle2 size={15} /> },
      { text: 'Bye-laws or Constitution of the society', icon: <CheckCircle2 size={15} /> },
      { text: 'Two current passport photographs of each operator', icon: <CheckCircle2 size={15} /> },
      { text: 'Verified Ghana Cards for all signatories', icon: <CheckCircle2 size={15} /> },
      { text: 'Completed account opening form and UACB standard mandate', icon: <CheckCircle2 size={15} /> },
      { text: 'Risk profile completed', icon: <CheckCircle2 size={15} /> },
    ],
  },
  {
    id: 'school',
    icon: <GraduationCap size={22} />,
    title: 'School Account',
    shortDesc: 'For educational institutions with proper accreditation.',
    color: 'green',
    reqs: [
      { text: 'Board resolution to open the account', icon: <CheckCircle2 size={15} /> },
      { text: 'Certificate of Incorporation', icon: <CheckCircle2 size={15} /> },
      { text: 'Certified true copies of Form 3 and the Constitution', icon: <CheckCircle2 size={15} /> },
      { text: 'Approval from the National Schools Inspectorate Authority', icon: <CheckCircle2 size={15} /> },
      { text: 'Two current passport photographs of each operator', icon: <CheckCircle2 size={15} /> },
      { text: 'Verified Ghana Card for each signatory', icon: <CheckCircle2 size={15} /> },
      { text: 'Legal search report and proof of address for directors', icon: <CheckCircle2 size={15} /> },
      { text: 'Completed account opening form, standard mandate, and risk profile', icon: <CheckCircle2 size={15} /> },
    ],
  },
  {
    id: 'church',
    icon: <Church size={22} />,
    title: 'Church / Religious Body',
    shortDesc: 'For churches and religious organizations.',
    color: 'blue',
    reqs: [
      { text: 'Resolution to open the account', icon: <CheckCircle2 size={15} /> },
      { text: 'Certificate of Incorporation of the Church', icon: <CheckCircle2 size={15} /> },
      { text: 'Certified true copies of Form 3 and the Constitution', icon: <CheckCircle2 size={15} /> },
      { text: 'Two current passport photographs of each operator', icon: <CheckCircle2 size={15} /> },
      { text: 'Verified Ghana Card for each signatory', icon: <CheckCircle2 size={15} /> },
      { text: 'Legal search report from the Registrar of Companies', icon: <CheckCircle2 size={15} /> },
      { text: 'Proof of residential address for each director or shareholder', icon: <CheckCircle2 size={15} /> },
      { text: 'Completed account opening form, standard mandate, and risk profile', icon: <CheckCircle2 size={15} /> },
    ],
  },
  {
    id: 'government',
    icon: <Building2 size={22} />,
    title: 'Government Agencies',
    shortDesc: 'For government-owned entities including district assemblies and hospitals.',
    color: 'gold',
    reqs: [
      { text: 'Application to open an account', icon: <CheckCircle2 size={15} /> },
      { text: 'Certified copy of the resolution from the Controller and Accountant General', icon: <CheckCircle2 size={15} /> },
      { text: 'Two current passport photographs of each operator', icon: <CheckCircle2 size={15} /> },
      { text: 'Verified Ghana Card for each signatory', icon: <CheckCircle2 size={15} /> },
      { text: 'Letter of confirmation from the Controller and Accountant General', icon: <CheckCircle2 size={15} /> },
      { text: 'Personal identification of the Chief Executive Officer', icon: <CheckCircle2 size={15} /> },
      { text: 'Completed account opening form and UACB standard mandate', icon: <CheckCircle2 size={15} /> },
      { text: 'CEO and Head of Compliance/AMLRO approval (high-risk/PEP accounts)', icon: <CheckCircle2 size={15} /> },
    ],
    note: 'Government agency accounts are flagged as high-risk/PEP and require additional approval from the CEO and Head of Compliance.',
  },
  {
    id: 'trust',
    icon: <Shield size={22} />,
    title: 'Trust Account',
    shortDesc: 'Managed by a custodian on behalf of a minor under 18.',
    color: 'green',
    reqs: [
      { text: 'Completed account opening form', icon: <CheckCircle2 size={15} /> },
      { text: 'Two current passport photographs of each operator', icon: <CheckCircle2 size={15} /> },
      { text: 'UACB standard mandate completed', icon: <CheckCircle2 size={15} /> },
      { text: 'Copy of the minor\'s birth certificate or international passport', icon: <CheckCircle2 size={15} /> },
      { text: 'Document designating the individual as legal guardian', icon: <CheckCircle2 size={15} /> },
      { text: 'Parent or guardian\'s ID matching the primary identification', icon: <CheckCircle2 size={15} /> },
      { text: 'Risk profile completed', icon: <CheckCircle2 size={15} /> },
    ],
    note: 'The account reverts to the child at age 18. Only savings or time deposit accounts are permitted — no current accounts.',
  },
  {
    id: 'student',
    icon: <UserCheck size={22} />,
    title: 'Student Account',
    shortDesc: 'For students with school ID or admission letter.',
    color: 'purple',
    reqs: [
      { text: 'Completed account opening form', icon: <CheckCircle2 size={15} /> },
      { text: 'Two current passport photographs', icon: <CheckCircle2 size={15} /> },
      { text: 'Ghana Card or Birth Certificate', icon: <CheckCircle2 size={15} /> },
      { text: 'Confirmed school ID', icon: <CheckCircle2 size={15} /> },
      { text: 'Admission letter with photo (if no school ID)', icon: <CheckCircle2 size={15} /> },
      { text: 'UACB standard mandate completed', icon: <CheckCircle2 size={15} /> },
      { text: 'Risk profile completed', icon: <CheckCircle2 size={15} /> },
    ],
    note: 'Students under 18 are only eligible if there is a documented need such as school fees or student loans.',
  },
];

/* ── Credit procedure steps ── */
const creditSteps = [
  {
    num: '01',
    title: 'Be an Existing Customer',
    desc: 'You must be a customer of Upper Amenfi Community Bank with a satisfactory account standing.',
    icon: <UserCheck size={22} />,
  },
  {
    num: '02',
    title: 'Request a Loan Form',
    desc: 'Visit any of our 19 branches and pick up a loan application form from the customer service desk.',
    icon: <ClipboardList size={22} />,
  },
  {
    num: '03',
    title: 'Write Your Application',
    desc: 'Prepare a formal letter addressed to the branch manager stating the loan amount, purpose, and desired repayment duration.',
    icon: <FileText size={22} />,
  },
  {
    num: '04',
    title: 'Submit Your Documents',
    desc: 'Provide a valid Ghana Card, a recent passport photograph, and your employer\'s letter of undertaking (for Mining & Easy loans).',
    icon: <Landmark size={22} />,
  },
  {
    num: '05',
    title: 'Sign the Agreement',
    desc: 'Complete the Pre-Credit Agreement form. Our team will review your application and get back to you promptly.',
    icon: <Handshake size={22} />,
  },
];

/* ── Hand-drawn SVG ── */
function HandDrawnUnderline({ className }) {
  return (
    <svg className={className} width="200" height="14" viewBox="0 0 200 14" fill="none">
      <path d="M2 10C30 4 60 12 90 7C120 2 150 10 180 6C190 4 196 7 198 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function HandDrawnStar({ className }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.5 9L22 9.5L16 14.5L18 22L12 17.5L6 22L8 14.5L2 9.5L9.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function CreditPage() {
  const [activeTab, setActiveTab] = useState('individual');
  const activeAccount = accountTypes.find(a => a.id === activeTab);

  return (
    <>
      {/* ═══ CINEMATIC HERO ═══ */}
      <div className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80"
          alt="Banking documents and pen"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className="container">
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <span>Open an Account</span>
            </div>
            <h1>Open Your<br /><span className={styles.heroAccent}>Account</span></h1>
            <HandDrawnUnderline className={styles.heroUnderline} />
            <p className={styles.heroDesc}>
              Whether you&apos;re saving for the future, running a business, or managing an institution — we have the right account for you. All you need is a Ghana Card.
            </p>
            <div className={styles.heroChips}>
              <div className={styles.heroChip}>
                <Clock size={16} />
                <span>4 Simple Steps</span>
              </div>
              <div className={styles.heroChip}>
                <Shield size={16} />
                <span>Bank of Ghana Licensed</span>
              </div>
              <div className={styles.heroChip}>
                <Building2 size={16} />
                <span>18 Branches</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ CREDIT PROCEDURES ═══ */}
      <section className={styles.section}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className="section-eyebrow">Credit Procedures</span>
              <h2 className="section-title">How to Apply for a Loan</h2>
              <p className="section-desc centered">
                Getting a loan from Upper Amenfi Community Bank is straightforward.
                Follow these five steps from application to approval.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.creditSteps}>
            {creditSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={styles.creditStep}>
                  <div className={styles.creditStepNum}>{step.num}</div>
                  <div className={styles.creditStepIcon}>{step.icon}</div>
                  <div className={styles.creditStepBody}>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                  {i < creditSteps.length - 1 && <div className={styles.creditStepConnector} />}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <OrganicDivider color="var(--bg-gold-tint)" variant="torn" />

      {/* ═══ ACCOUNT OPENING REQUIREMENTS ═══ */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className="section-eyebrow">Account Opening</span>
              <h2 className="section-title">Choose Your Account Type</h2>
              <p className="section-desc centered">
                Select the account that fits your needs. Each type has specific requirements
                — we&apos;ve listed everything you need to bring.
              </p>
            </div>
          </ScrollReveal>

          {/* Tab Selector */}
          <div className={styles.tabBar}>
            {accountTypes.map((a) => (
              <button
                key={a.id}
                className={`${styles.tab} ${activeTab === a.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(a.id)}
              >
                <span className={styles.tabIcon}>{a.icon}</span>
                <span className={styles.tabTitle}>{a.title}</span>
              </button>
            ))}
          </div>

          {/* Active Account Detail */}
          {activeAccount && (
            <div className={styles.accountDetail}>
              <div className={styles.accountDetailHeader}>
                <div className={`${styles.accountDetailIcon} ${styles[`icon${activeAccount.color.charAt(0).toUpperCase() + activeAccount.color.slice(1)}`]}`}>
                  {activeAccount.icon}
                </div>
                <div>
                  <h3>{activeAccount.title}</h3>
                  <p>{activeAccount.shortDesc}</p>
                </div>
              </div>

              <div className={styles.accountReqs}>
                <h4>Required Documents</h4>
                <ul>
                  {activeAccount.reqs.map((req, i) => (
                    <li key={i} className={styles.reqItem}>
                      <span className={styles.reqIcon}>{req.icon}</span>
                      <span>{req.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeAccount.note && (
                <div className={styles.accountNote}>
                  <Heart size={16} />
                  <p>{activeAccount.note}</p>
                </div>
              )}

              <Link href="/contact" className="btn btn-gold btn-md" style={{ marginTop: 24 }}>
                Start Your Application <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.splitLayout}>
            <div>
              <ScrollReveal>
                <span className="section-eyebrow">Getting Started</span>
                <h2 className="section-title">Opening Your Account<br />in Four Steps</h2>
              </ScrollReveal>

              <div className={styles.stepsList}>
                {[
                  {
                    num: '1',
                    title: 'Gather Your Documents',
                    desc: 'Check the requirements for your account type above and prepare all necessary documents.',
                  },
                  {
                    num: '2',
                    title: 'Visit Any Branch',
                    desc: 'Walk into any of our 19 branches across 3 regions. Our team will guide you through everything.',
                  },
                  {
                    num: '3',
                    title: 'Complete the Application',
                    desc: 'Fill out the account opening form with help from our customer service team. It takes just minutes.',
                  },
                  {
                    num: '4',
                    title: 'Make Your First Deposit',
                    desc: 'Complete your initial deposit and receive your account details immediately. Welcome to UACB!',
                  },
                ].map((s, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className={styles.stepCard}>
                      <div className={styles.stepNum}>{s.num}</div>
                      <div>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal className={styles.splitVisual}>
              <div className={styles.splitImageWrap}>
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                  alt="Customer opening an account at the bank"
                  width={800}
                  height={600}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <HandDrawnStar className={styles.splitStar1} />
              <HandDrawnStar className={styles.splitStar2} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaMesh} />
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaInner}>
              <h2>Ready to Get Started?</h2>
              <p className={styles.ctaDesc}>
                Visit any of our 19 branches or reach out to us online.
                Our team is ready to help you open your account today.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/branches" className="btn btn-glow btn-lg">
                  Find a Branch <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';

export const metadata = {
  title: 'You Are Offline',
};

export default function OfflinePage() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px',
    }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--text-heading)', marginBottom: 12 }}>
        You&apos;re Offline
      </h1>
      <p style={{ color: 'var(--text-body)', maxWidth: 480, lineHeight: 1.7, marginBottom: 24 }}>
        It looks like you have no internet connection. Previously visited pages are still
        available. You can also bank with us anytime via USSD — dial <strong>*992#</strong> from any phone.
      </p>
      <Link href="/" className="btn btn-glow">
        Back to Home
      </Link>
    </div>
  );
}

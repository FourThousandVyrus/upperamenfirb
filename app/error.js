'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '40px 20px',
      textAlign: 'center',
    }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 12, color: 'var(--primary-900)' }}>
        Something went wrong
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 24, maxWidth: 400 }}>
        We apologize for the inconvenience. Please try again or contact our support team.
      </p>
      <button
        onClick={reset}
        style={{
          padding: '12px 28px',
          borderRadius: 9999,
          background: 'var(--gradient-accent)',
          color: 'var(--primary-900)',
          fontWeight: 700,
          fontFamily: 'var(--font-heading)',
          border: 'none',
          cursor: 'pointer',
          fontSize: '0.9rem',
        }}
      >
        Try Again
      </button>
    </div>
  );
}

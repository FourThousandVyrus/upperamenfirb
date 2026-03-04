export default function WaveDivider({ color = 'var(--bg-cream)', flip = false, className = '' }) {
  return (
    <div
      className={className}
      style={{
        lineHeight: 0,
        overflow: 'hidden',
        transform: flip ? 'rotate(180deg)' : undefined,
        marginTop: flip ? '-1px' : undefined,
        marginBottom: flip ? undefined : '-1px',
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '48px', display: 'block' }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default function OrganicDivider({ color = 'var(--bg-white)', variant = 'wave' }) {
  if (variant === 'wave') {
    return (
      <div
        style={{
          width: '100%',
          lineHeight: 0,
          marginTop: '-1px',
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '60px' }}
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'organic') {
    return (
      <div
        style={{
          width: '100%',
          lineHeight: 0,
          marginTop: '-1px',
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '70px' }}
        >
          <path
            d="M0,60 C180,20 360,80 540,50 C720,20 900,70 1080,40 C1200,25 1350,55 1440,35 L1440,100 L0,100 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'torn') {
    return (
      <div
        style={{
          width: '100%',
          lineHeight: 0,
          marginTop: '-2px',
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '30px' }}
        >
          <path
            d="M0,20 L40,18 L80,22 L120,16 L160,24 L200,14 L240,26 L280,12 L320,28 L360,10 L400,26 L440,14 L480,24 L520,16 L560,22 L600,12 L640,28 L680,8 L720,26 L760,14 L800,24 L840,10 L880,28 L920,16 L960,22 L1000,12 L1040,26 L1080,10 L1120,24 L1160,14 L1200,26 L1240,12 L1280,24 L1320,16 L1360,22 L1400,14 L1440,20 L1440,40 L0,40 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  return null;
}

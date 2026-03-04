import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Upper Amenfi Rural Bank — Modern Rural Banking in Ghana';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1048 0%, #2b1c6d 50%, #3a2a85 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-60px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 192, 0, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-80px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 137, 53, 0.12) 0%, transparent 70%)',
          }}
        />

        {/* Gold accent line */}
        <div
          style={{
            width: '80px',
            height: '4px',
            background: '#ffc000',
            borderRadius: '4px',
            marginBottom: '32px',
          }}
        />

        {/* Bank name */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            textAlign: 'center',
            letterSpacing: '-0.02em',
            marginBottom: '8px',
          }}
        >
          Upper Amenfi Rural Bank
        </div>

        <div
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#ffc000',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          PLC
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(255, 255, 255, 0.6)',
            textAlign: 'center',
            maxWidth: '600px',
            lineHeight: 1.5,
          }}
        >
          37+ years of trusted banking across 18 branches in Ghana
        </div>

        {/* Bottom badges */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '48px',
          }}
        >
          {['Bank of Ghana Licensed', 'Ghana Deposit Protection', 'ARB Apex Bank Member'].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.35)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}

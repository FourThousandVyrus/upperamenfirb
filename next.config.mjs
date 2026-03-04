/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
    ];
  },
  // Image optimization — allow external domains used across pages
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
    // Modern formats for smaller file sizes
    formats: ['image/avif', 'image/webp'],
    // Responsive sizes used throughout the site
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  // Enable gzip/brotli compression
  compress: true,
  // Strict mode for catching bugs
  reactStrictMode: true,
  // Power optimizations
  poweredByHeader: false,
  // Allow external tunnel origins
  experimental: {
    allowedDevOrigins: ["*.ngrok-free.app", "localhost:3000"],
  },
};

export default nextConfig;

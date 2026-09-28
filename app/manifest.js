export default function manifest() {
  return {
    name: 'Upper Amenfi Community Bank PLC',
    short_name: 'UACB',
    description:
      '39+ years of trusted community banking. Savings, loans, Susu, and digital banking across 19 branches in Ghana.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1048',
    theme_color: '#2b1c6d',
    orientation: 'portrait-primary',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}

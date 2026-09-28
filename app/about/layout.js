export const metadata = {
    title: 'About Us — Our Story, Mission & Vision',
    description:
        'Learn about Upper Amenfi Community Bank PLC — founded in 1987 by visionary farmers in Wassa Amenfi. 39+ years of community-focused banking across 19 branches in Western, Western North, and Central Ghana.',
    keywords: ['about UACB', 'community bank history Ghana', 'Wassa Amenfi banking', 'Bank of Ghana licensed', 'community banking Ghana'],
    alternates: { canonical: '/about' },
    openGraph: {
        title: 'About Upper Amenfi Community Bank PLC',
        description: '39+ years of trusted community banking. Founded by farmers, built for communities.',
        url: '/about',
        images: [{ url: '/images/stock/stock-community-gathering.webp', alt: 'UACB community' }],
    },
};

export default function AboutLayout({ children }) {
    return children;
}

export const metadata = {
    title: 'About Us — Our Story, Mission & Vision',
    description:
        'Learn about Upper Amenfi Community Bank PLC — founded in 1988 by visionary farmers in Wassa Amenfi. 37+ years of community-focused banking across 18 branches in Western, Western North, and Central Ghana.',
    keywords: ['about UARB', 'community bank history Ghana', 'Wassa Amenfi banking', 'Bank of Ghana licensed', 'community banking Ghana'],
    alternates: { canonical: '/about' },
    openGraph: {
        title: 'About Upper Amenfi Community Bank PLC',
        description: '37+ years of trusted community banking. Founded by farmers, built for communities.',
        url: '/about',
        images: [{ url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80', alt: 'UARB community' }],
    },
};

export default function AboutLayout({ children }) {
    return children;
}

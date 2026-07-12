export const metadata = {
    title: 'News & Updates — Community Events & Financial Insights',
    description:
        'Stay updated with the latest news from Upper Amenfi Community Bank: AGM highlights, scholarship awards, digital banking updates, branch openings, CSR initiatives, and financial literacy workshops.',
    keywords: ['UACB news', 'community bank news Ghana', 'AGM highlights', 'community events Ghana banking', 'financial literacy workshops'],
    alternates: { canonical: '/news' },
    openGraph: {
        title: 'News & Updates | Upper Amenfi Community Bank',
        description: 'Latest news, community events, and financial insights from UACB.',
        url: '/news',
    },
};

export default function NewsLayout({ children }) {
    return children;
}

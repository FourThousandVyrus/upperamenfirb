export const metadata = {
    title: 'News & Updates — Community Events & Financial Insights',
    description:
        'Stay updated with the latest news from Upper Amenfi Rural Bank: AGM highlights, scholarship awards, digital banking updates, branch openings, CSR initiatives, and financial literacy workshops.',
    keywords: ['UARB news', 'rural bank news Ghana', 'AGM highlights', 'community events Ghana banking', 'financial literacy workshops'],
    alternates: { canonical: '/news' },
    openGraph: {
        title: 'News & Updates | Upper Amenfi Rural Bank',
        description: 'Latest news, community events, and financial insights from UARB.',
        url: '/news',
    },
};

export default function NewsLayout({ children }) {
    return children;
}

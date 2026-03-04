export const metadata = {
    title: 'Loan Products — Personal, Business & Microfinance Loans',
    description:
        'Explore loan options at Upper Amenfi Rural Bank: Easy loans approved in under 3 hours, salary loans, commercial loans, Susu microfinance, funeral loans, and transport financing across Ghana.',
    keywords: ['bank loans Ghana', 'easy loan Ghana', 'salary loan', 'microfinance loan', 'commercial loan Ghana', 'Susu loan', 'quick loan approval'],
    alternates: { canonical: '/loans' },
    openGraph: {
        title: 'Loan Products | Upper Amenfi Rural Bank',
        description: 'Same-day easy loans, salary advances, and microfinance for communities across Ghana.',
        url: '/loans',
        images: [{ url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&q=80', alt: 'Business growth financing' }],
    },
};

export default function LoansLayout({ children }) {
    return children;
}

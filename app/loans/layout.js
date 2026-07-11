export const metadata = {
    title: 'Loan Products — Personal, Business & Microfinance Loans',
    description:
        'Explore seven loan options at Upper Amenfi Community Bank: Easy loans approved in under 3 hours, salary loans, commercial loans, Susu microfinance, funeral loans, transport financing, and more across Ghana.',
    keywords: ['bank loans Ghana', 'easy loan Ghana', 'salary loan', 'microfinance loan', 'commercial loan Ghana', 'Susu loan', 'quick loan approval', 'transport loan Ghana', 'funeral loan'],
    alternates: { canonical: '/loans' },
    openGraph: {
        title: 'Loan Products | Upper Amenfi Community Bank',
        description: 'Seven loan products from same-day Easy Loans to group microfinance — capital for every stage of your financial journey.',
        url: '/loans',
        images: [{ url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&q=80', alt: 'Business growth financing' }],
    },
};

export default function LoansLayout({ children }) {
    return children;
}

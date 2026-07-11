export const metadata = {
    title: 'Branch Locator — 18 Branches Across Ghana',
    description:
        'Find an Upper Amenfi Community Bank branch near you. 18 locations across Western, Western North, Central, Eastern, and Ashanti Regions. Search by name, region, or district.',
    keywords: ['UARB branches', 'community bank locations Ghana', 'bank near me Ghana', 'Western Region banks', 'Tarkwa bank', 'Dunkwa bank'],
    alternates: { canonical: '/branches' },
    openGraph: {
        title: 'Branch Locator | Upper Amenfi Community Bank',
        description: '18 branches across 5 regions in Ghana. Find the nearest location.',
        url: '/branches',
    },
};

export default function BranchesLayout({ children }) {
    return children;
}

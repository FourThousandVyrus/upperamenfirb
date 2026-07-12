export const metadata = {
    title: 'Branch Locator — 19 Branches Across Ghana',
    description:
        'Find an Upper Amenfi Community Bank branch near you. 19 locations across Western, Western North, and Central Regions of Ghana. Search by name, region, or district.',
    keywords: ['UACB branches', 'community bank locations Ghana', 'bank near me Ghana', 'Western Region banks', 'Tarkwa bank', 'Dunkwa bank'],
    alternates: { canonical: '/branches' },
    openGraph: {
        title: 'Branch Locator | Upper Amenfi Community Bank',
        description: '19 branches across 3 regions in Ghana. Find the nearest location.',
        url: '/branches',
    },
};

export default function BranchesLayout({ children }) {
    return children;
}

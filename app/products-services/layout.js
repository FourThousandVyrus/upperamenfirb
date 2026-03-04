export const metadata = {
    title: 'Products & Services — Savings, Current & Susu Accounts',
    description:
        'Upper Amenfi Rural Bank deposit products: Normal Savings (8% p.a.), Susu doorstep collection, Fixed Deposits up to 18%, Current Accounts, and Salary Accounts. Plus USSD mobile banking, E-Zwich, and Apexlink.',
    keywords: ['savings account Ghana', 'Susu savings', 'fixed deposit Ghana', 'current account rural bank', 'USSD mobile banking Ghana', 'E-Zwich', 'Apexlink transfer'],
    alternates: { canonical: '/products-services' },
    openGraph: {
        title: 'Products & Services | Upper Amenfi Rural Bank',
        description: 'Savings, fixed deposits, Susu, and digital banking. Earn up to 18% on fixed deposits.',
        url: '/products-services',
    },
};

export default function ProductsLayout({ children }) {
    return children;
}

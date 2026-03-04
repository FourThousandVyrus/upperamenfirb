export default function sitemap() {
    const baseUrl = 'https://upperamenfirb.com';
    const lastModified = new Date('2026-03-01');

    const routes = [
        { path: '/', priority: 1.0, changeFrequency: 'weekly' },
        { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/products-services', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/loans', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/rates', priority: 0.9, changeFrequency: 'weekly' },
        { path: '/branches', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/credit', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/calculators', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/governance', priority: 0.6, changeFrequency: 'yearly' },
        { path: '/csr', priority: 0.7, changeFrequency: 'monthly' },
        { path: '/news', priority: 0.8, changeFrequency: 'weekly' },
        { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
        { path: '/ussd-guide', priority: 0.7, changeFrequency: 'yearly' },
        { path: '/security-tips', priority: 0.7, changeFrequency: 'yearly' },
        { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
        { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}

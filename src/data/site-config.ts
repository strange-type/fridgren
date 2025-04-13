export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://fridgren.se',
    title: 'Daniel Fridgren',
    subtitle: 'Father of three. Lateral thinker. Intuition driven. Pattern connector. Strategic Designer at In Wise Company',
    description: 'A personal website showcasing my work and thoughts on design and technology.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/fridgren'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/fridgren'
        }
    ],
    hero: {
        image: {
            src: '/hero.jpg',
            alt: 'An image of Daniel Fridgren',
        },
        text: "I am a creator who provide expertise in areas ranging from digital product processes, strategy and innovation to UX- and service design. Through my consulting studio, I help my clients craft what’s new by mapping, reframing, prototyping and strategic design. By fusing design expertise and life experience with lateral, big-picture thinking, I guide my clients with heart through their digital evolution, helping them create tangible value at all touchpoints.",
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to my newsletter',
        text: 'All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

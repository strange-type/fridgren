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
    subtitle: 'Father of three, lateral thinking, intuition driven, pattern connector and strategic Designer at In Wise Company',
    description: 'A personal website showcasing my work and thoughts on design and technology.',
    image: {
        src: '/site-preview.jpg',
        alt: 'Fridgren'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    footerNavLinks: [

    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/fridgren'
        },
        {
            text: 'Twitter',
            href: 'https://twitter.com/fridgren'
        }
    ],
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

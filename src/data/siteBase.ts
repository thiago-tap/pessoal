export const siteBase = {
  name: 'Thiago',
  fullName: 'Thiago Albuquerque de Paula',
  url: 'https://thiago.catiteo.com',
  birthDate: '1991-05-30',
  location: 'Brasília (DF)',
  email: 'thiago@catiteo.com',
  photos: {
    hero: '/images/thiago-hero.jpg',
    heroDesktop: '/images/thiago-hero-desktop.jpg',
    about: '/images/thiago-about.jpg',
    family: '/images/thiago-familia.jpg',
    /** Responsive WebP/JPEG sets for <picture> (LCP / weight). */
    heroMobileSrcset: {
      webp: '/images/thiago-hero-640.webp 640w, /images/thiago-hero-960.webp 960w, /images/thiago-hero-1200.webp 1200w',
      jpeg: '/images/thiago-hero-640.jpg 640w, /images/thiago-hero-960.jpg 960w, /images/thiago-hero-1200.jpg 1200w',
    },
    heroDesktopSrcset: {
      webp: '/images/thiago-hero-desktop-1200.webp 1200w, /images/thiago-hero-desktop-1600.webp 1600w, /images/thiago-hero-desktop-2000.webp 2000w',
      jpeg: '/images/thiago-hero-desktop-1200.jpg 1200w, /images/thiago-hero-desktop-1600.jpg 1600w, /images/thiago-hero-desktop-2000.jpg 2000w',
    },
    aboutSrcset: {
      webp: '/images/thiago-about-320.webp 320w, /images/thiago-about-480.webp 480w, /images/thiago-about-640.webp 640w',
      jpeg: '/images/thiago-about-320.jpg 320w, /images/thiago-about-480.jpg 480w, /images/thiago-about-640.jpg 640w',
    },
    familySrcset: {
      webp: '/images/thiago-familia-480.webp 480w, /images/thiago-familia-720.webp 720w, /images/thiago-familia-960.webp 960w',
      jpeg: '/images/thiago-familia-480.jpg 480w, /images/thiago-familia-720.jpg 720w, /images/thiago-familia-960.jpg 960w',
    },
  },
  socialHrefs: {
    instagram: 'https://www.instagram.com/thiagaotap/',
    whatsappBase: 'https://wa.me/5561992401116',
    linkedin: 'https://www.linkedin.com/in/thiago-albuquerque-de-paula/',
    github: 'https://github.com/thiago-tap',
    telegram: 'https://t.me/Thiago_TAP',
    x: 'https://twitter.com/ThiagaoTAP',
    email: 'mailto:thiago@catiteo.com',
  },
  stack: {
    backend: [
      'Java',
      'Quarkus',
      'Spring Boot',
      'PHP/Laravel',
      'APIs REST',
      'Hibernate/JPA',
      'Node.js',
      'Maven',
    ],
    frontend: [
      'Angular',
      'React',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'HTML/CSS',
      'RxJS',
    ],
    data: ['SQL', 'PostgreSQL', 'MySQL', 'Oracle', 'Redis', 'MinIO'],
    devops: [
      'Docker',
      'Docker Swarm',
      'Traefik',
      'Linux',
      'Nginx',
      'GitHub Actions',
      'Jenkins',
      'Cloud',
    ],
    quality: [
      'Git',
      'GitHub',
      'GitLab',
      'SonarQube',
      'JUnit',
      'Karma/Jasmine',
      'Scrum',
      'Information Security',
    ],
    product: ['Astro', 'HUGO', 'n8n', 'WordPress'],
  },
  projectMeta: [
    {
      name: 'Perfil.id',
      href: 'https://perfil.id/',
      image: '/images/projects/logos/perfil-id.svg',
      logoVariant: 'wide' as const,
    },
    {
      name: 'Catiteo',
      href: 'https://catiteo.com/',
      image: '/images/projects/logos/catiteo.png',
      logoVariant: 'wide' as const,
    },
    {
      name: 'AZEN CO.',
      href: 'https://www.azenco.com.br/',
      image: '/images/projects/logos/azen.png',
      logoVariant: 'wide' as const,
    },
    {
      name: 'Instituto IMAV',
      href: 'https://institutoimav.com.br/',
      image: '/images/projects/logos/imav.png',
      logoVariant: 'mark' as const,
    },
  ],
} as const;

export type Locale = 'pt' | 'en';
export type LogoVariant = (typeof siteBase.projectMeta)[number]['logoVariant'];

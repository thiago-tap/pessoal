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
    backend: ['Java', 'Quarkus', 'Spring Boot', 'PHP/Laravel', 'APIs REST', 'SQL'],
    frontend: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    quality: ['Git', 'Scrum', 'JUnit', 'Karma/Jasmine', 'SonarQube'],
    also: ['WordPress', 'Docker'],
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

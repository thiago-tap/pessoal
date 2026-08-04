export const site = {
  name: 'Thiago',
  fullName: 'Thiago Albuquerque de Paula',
  title: 'Thiago — Desenvolvedor Full-Stack',
  description:
    'Desenvolvedor Full-Stack em Brasília. Sistemas críticos, produtos próprios com propósito — vida ancorada em Deus e na família.',
  url: 'https://thiago.catiteo.com',
  birthDate: '1991-05-30',
  location: 'Brasília (DF)',
  email: 'thiago@catiteo.com',
  tagline: 'Desenvolvedor Full-Stack · Games & tech · Cristão · Família',
  heroSupport:
    'Full-stack em Brasília. Sistemas críticos no dia a dia, produtos próprios com propósito — e uma vida ancorada em Deus e na família.',
  photos: {
    hero: '/images/thiago-hero.jpg',
    about: '/images/thiago-about.jpg',
    family: '/images/thiago-familia.jpg',
  },
  social: {
    /** CTA do hero / redes em geral */
    primary: {
      label: 'Instagram',
      href: 'https://www.instagram.com/thiagaotap/',
    },
    /** CTA da seção Contato — conversa direta */
    contact: {
      label: 'WhatsApp',
      href: 'https://wa.me/5561992401116?text=Ol%C3%A1%20Thiago!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar.',
    },
    links: [
      {
        id: 'instagram',
        label: 'Instagram',
        href: 'https://www.instagram.com/thiagaotap/',
      },
      {
        id: 'whatsapp',
        label: 'WhatsApp',
        href: 'https://wa.me/5561992401116?text=Ol%C3%A1%20Thiago!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar.',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/thiago-albuquerque-de-paula/',
      },
      {
        id: 'github',
        label: 'GitHub',
        href: 'https://github.com/thiago-tap',
      },
      {
        id: 'telegram',
        label: 'Telegram',
        href: 'https://t.me/Thiago_TAP',
      },
      {
        id: 'x',
        label: 'X',
        href: 'https://twitter.com/ThiagaoTAP',
      },
      {
        id: 'email',
        label: 'E-mail',
        href: 'mailto:thiago@catiteo.com',
      },
    ],
  },
  milestones: [
    {
      year: '2010',
      title: 'Centrosoft Tecnologia',
      detail: 'Início em Java corporativo — desenvolvimento e evolução de sistemas para diferentes segmentos.',
    },
    {
      year: '2019',
      title: 'Tenil Agência Digital',
      detail:
        'Analista de sistemas: web full-cycle — código, servidores, banco e atendimento ao cliente.',
    },
    {
      year: 'Paralelo',
      title: 'Negócios próprios',
      detail: 'AZEN CO., Catiteo, perfil.id e sites para clientes — produto real ponta a ponta.',
    },
    {
      year: '2022',
      title: 'Minsait / Indra',
      detail:
        'Full-stack em projetos corporativos de grande porte — aplicações e APIs em ambiente de alta criticidade.',
    },
    {
      year: '2025',
      title: 'Pós-graduações',
      detail:
        'Aprofundamento em desenvolvimento web, segurança, redes, dados e administração de banco de dados.',
    },
  ],
  projects: [
    {
      name: 'perfil.id',
      description:
        'Perfis na internet mais profissionais (e menos genéricos) para pessoas e pequenos negócios — com qualidade de produto e preço acessível.',
      href: 'https://perfil.id/',
      image: '/images/projects/logos/perfil-id.svg',
    },
    {
      name: 'Catiteo',
      description:
        'Serviço de extrema qualidade para quem quer algo a mais na internet: sites complexos e sistemas sob medida.',
      href: 'https://catiteo.com/',
      image: '/images/projects/logos/catiteo.png',
    },
    {
      name: 'AZEN CO.',
      description:
        'Marca de roupa com propósito: identidade, intenção e fé — minimalismo e autenticidade num mundo de ruído.',
      href: 'https://www.azenco.com.br/',
      image: '/images/projects/logos/azen.png',
    },
    {
      name: 'Instituto IMAV',
      description:
        'Presença digital institucional com visual cuidado e foco em clareza — um dos trabalhos entregues para cliente.',
      href: 'https://institutoimav.com.br/',
      image: '/images/projects/logos/imav.png',
    },
  ],
  stack: {
    backend: ['Java', 'Quarkus', 'Spring Boot', 'PHP/Laravel', 'APIs REST', 'SQL'],
    frontend: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    quality: ['Git', 'Scrum', 'JUnit', 'Karma/Jasmine', 'SonarQube'],
    also: ['WordPress', 'Docker'],
  },
} as const;

export type SocialLink = (typeof site.social.links)[number];

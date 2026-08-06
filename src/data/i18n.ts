import { siteBase, type Locale } from './siteBase';

type Milestone = { year: string; title: string; detail: string };
type ProjectCopy = { description: string };
type AboutSection = { heading: string; html: string };

type ContentBundle = {
  locale: Locale;
  htmlLang: string;
  ogLocale: string;
  pathPrefix: string;
  alternatePath: string;
  alternateLabel: string;
  title: string;
  description: string;
  tagline: string;
  heroSupport: string;
  heroKicker: string;
  heroCtaAbout: string;
  skipLink: string;
  nav: { href: string; label: string }[];
  themeLabel: string;
  themeAria: string;
  menuOpen: string;
  menuClose: string;
  navAria: string;
  navMobileAria: string;
  brandAria: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  about: {
    label: string;
    title: string;
    lead: string;
    familyCaption: string;
    photoAlt: string;
    familyAlt: string;
    pullQuote: string;
    /** Short scan summary — rendered with set:html */
    summaryHtml: string;
    sections: AboutSection[];
  };
  timeline: {
    label: string;
    title: string;
    lead: string;
    asideQuote: string;
    asideNote: string;
    milestones: Milestone[];
  };
  projects: {
    label: string;
    title: string;
    lead: string;
    visit: string;
    featuredKicker: string;
    items: ProjectCopy[];
  };
  stack: {
    label: string;
    title: string;
    lead: string;
    groups: { title: string; key: keyof typeof siteBase.stack; blurb: string }[];
  };
  contact: {
    label: string;
    title: string;
    lead: string;
    whatsappCta: string;
    emailLabel: string;
    networksLabel: string;
    footerNavAria: string;
    whatsappMessage: string;
  };
  cookie: {
    message: string;
    accept: string;
    reject: string;
  };
  ui: {
    yearsOld: string;
  };
};

const pt: ContentBundle = {
  locale: 'pt',
  htmlLang: 'pt-BR',
  ogLocale: 'pt_BR',
  pathPrefix: '',
  alternatePath: '/en/',
  alternateLabel: 'EN',
  title: 'Thiago — Desenvolvedor Full-Stack',
  description:
    'Desenvolvedor Full-Stack em Brasília. Sistemas críticos, produtos próprios com propósito — vida ancorada em Deus e na família.',
  tagline: 'Full-Stack em Brasília · fé e família',
  heroSupport:
    'Sistemas que não podem falhar no trabalho; produtos próprios com propósito — e uma vida ancorada em Deus e na família.',
  heroKicker: 'Brasília · Full-Stack',
  heroCtaPrimary: 'Vamos conversar no WhatsApp',
  heroCtaSecondary: 'Instagram',
  heroCtaAbout: 'Ver sobre ↓',
  skipLink: 'Ir para o conteúdo',
  nav: [
    { href: '#sobre', label: 'Sobre' },
    { href: '#trajetoria', label: 'Trajetória' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#stack', label: 'Stack' },
    { href: '#contato', label: 'Contato' },
  ],
  themeLabel: 'Tema',
  themeAria: 'Alternar tema claro e escuro',
  menuOpen: 'Abrir menu',
  menuClose: 'Fechar menu',
  navAria: 'Principal',
  navMobileAria: 'Menu mobile',
  brandAria: 'Thiago — início',
  about: {
    label: 'Sobre',
    title: 'Quem sou eu',
    lead: 'Código em sistemas críticos, produtos próprios com cara — e uma vida que não separa fé, família e trabalho.',
    familyCaption: 'Deus e a família no centro',
    photoAlt: 'Thiago Albuquerque de Paula',
    familyAlt: 'Thiago e Thais Mara',
    pullQuote: 'Tecnologia, para mim, é ferramenta para servir pessoas — não um fim em si.',
    summaryHtml: `Sou <strong>${siteBase.fullName}</strong>, tenho <strong><span data-age></span> anos</strong>, vivo em <strong>${siteBase.location}</strong> e trabalho full-stack em ambientes de <strong>alta criticidade</strong>. Casado com <strong>Thais Mara</strong> — <strong>Deus e a família</strong> filtram o que vale construir. Se você busca técnica séria com conversa direta, estamos falando a mesma língua.`,
    sections: [
      {
        heading: 'Fé e ofício',
        html: `Sou cristão, com fé em Deus e uma paixão genuína por <strong>Jesus Cristo</strong>. Isso muda o jeito de trabalhar: prazo sem enrolação, qualidade sem teatro, segurança sem atalho. Quero ser alguém mais íntegro e útil a cada ano; o código é só um dos lugares onde isso aparece.`,
      },
      {
        heading: 'Sistemas de ponta a ponta',
        html: `O que me prende na área é enxergar o sistema inteiro: legado que precisa viver, API que não pode cair, tela que alguém usa sob pressão. Gosto de modernizar sem quebrar o que já funciona, cuidar de performance e entregar interface que a pessoa entende sem manual. Fora do teclado, a mesma curiosidade vira <strong>jogos de tabuleiro</strong> e <strong>games digitais</strong> — regras, sistemas, convivência.`,
      },
      {
        heading: 'No trabalho',
        html: `Na <strong>Minsait/Indra</strong>, participo de projetos corporativos de grande porte: aplicações e APIs em que estabilidade, segurança e qualidade de código são o trabalho, não o slide. Backend robusto (Java, Quarkus, Spring) + frontend cuidadoso (Angular e o ecossistema web), com testes e evolução contínua.`,
      },
      {
        heading: 'Produtos próprios',
        html: `Fora do expediente, construo produto de ponta a ponta. O <strong>Perfil.id</strong> nasceu da frustração com perfis genéricos. A <strong>Catiteo</strong> é o braço para sites e sistemas sob medida. A <strong>AZEN CO.</strong> é marca de roupa com identidade, intenção e fé. Cada projeto existe porque resolve uma dor real — não porque “ficava bonito no portfólio”.`,
      },
      {
        heading: 'O que ofereço',
        html: `Produto bem feito, conversa direta e trabalho que respeita quem vai usar — e quem vai viver com as consequências do que foi entregue.`,
      },
    ],
  },
  timeline: {
    label: 'Trajetória',
    title: 'Marcos que contam a história',
    lead: 'Do Java corporativo aos sistemas críticos — e aos negócios construídos em paralelo.',
    asideQuote: 'Estabilidade, segurança e qualidade de código são o trabalho — não o slide.',
    asideNote: 'Uma linha do tempo curta. O que importa é o que ainda está no ar.',
    milestones: [
      {
        year: '2010',
        title: 'Centrosoft Tecnologia',
        detail:
          'Início em Java corporativo — desenvolvimento e evolução de sistemas para diferentes segmentos.',
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
        detail: 'AZEN CO., Catiteo, Perfil.id e sites para clientes — produto real ponta a ponta.',
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
          'Web, segurança da informação, redes, ciência de dados/Big Data, DBA, qualidade de software, cloud e BI — reforço paralelo à prática em sistemas críticos.',
      },
    ],
  },
  projects: {
    label: 'Projetos',
    title: 'Trabalho com cara e propósito',
    lead: 'Produtos próprios e entrega para cliente — cada um com problema claro, não uma lista para impressionar.',
    visit: 'Visitar',
    featuredKicker: 'Marca em destaque',
    items: [
      {
        description:
          'Chega de página genérica. Perfis profissionais para pessoas e pequenos negócios — visual cuidado, narrativa clara e preço que não assusta.',
      },
      {
        description:
          'Quando template não resolve: sites complexos e sistemas sob medida, com acabamento de quem vai conviver com o resultado no ar.',
      },
      {
        description:
          'Roupa com direção — identidade, intenção e fé. Minimalismo e autenticidade para quem cansou do ruído das marcas vazias.',
      },
      {
        description:
          'Presença digital institucional alinhada à missão da organização: clareza, credibilidade e um visual que sustenta confiança — entrega real para cliente.',
      },
    ],
  },
  stack: {
    label: 'Stack',
    title: 'Ferramentas que uso de verdade',
    lead: 'Curada — o núcleo do trabalho crítico e do produto próprio, sem inventário infinito.',
    groups: [
      {
        title: 'Backend & APIs',
        key: 'backend',
        blurb: 'Quando a API não pode cair e o legado ainda precisa viver.',
      },
      {
        title: 'Frontend',
        key: 'frontend',
        blurb: 'Angular, React e Vue no dia a dia — interfaces claras sob pressão.',
      },
      {
        title: 'Dados',
        key: 'data',
        blurb: 'SQL e armazenamento do corporativo ao objeto.',
      },
      {
        title: 'DevOps & Cloud',
        key: 'devops',
        blurb: 'Containers, proxy, CI/CD e operação com pé no chão.',
      },
      {
        title: 'Qualidade & DevSecOps',
        key: 'quality',
        blurb: 'Git, testes, Sonar e segurança no ciclo — não só no slide.',
      },
      {
        title: 'Produto & automação',
        key: 'product',
        blurb: 'Sites estáticos, CMS e automações que tiram trabalho repetitivo.',
      },
    ],
  },
  cookie: {
    message:
      'Usamos cookies de analytics (Google Analytics / Tag Manager) para entender o uso do site. Você pode aceitar ou continuar só com o essencial.',
    accept: 'Aceitar',
    reject: 'Só essencial',
  },
  contact: {
    label: 'Contato',
    title: 'Vamos conversar',
    lead: 'Prefere conversar direto? Chama no WhatsApp — as outras redes estão abaixo.',
    whatsappCta: 'Conversar no WhatsApp',
    emailLabel: 'E-mail',
    networksLabel: 'Outras redes',
    footerNavAria: 'Rodapé',
    whatsappMessage: 'Olá Thiago! Vi seu site e gostaria de conversar.',
  },
  ui: {
    yearsOld: 'anos',
  },
};

const en: ContentBundle = {
  locale: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  pathPrefix: '/en',
  alternatePath: '/',
  alternateLabel: 'PT',
  title: 'Thiago — Full-Stack Developer',
  description:
    'Full-stack developer in Brasília. Mission-critical systems, purpose-driven products — a life anchored in God and family.',
  tagline: 'Full-Stack in Brasília · faith and family',
  heroSupport:
    'Systems that cannot fail at work; purpose-driven products of my own — and a life anchored in God and family.',
  heroKicker: 'Brasília · Full-Stack',
  heroCtaPrimary: "Let's talk on WhatsApp",
  heroCtaSecondary: 'Instagram',
  heroCtaAbout: 'About me ↓',
  skipLink: 'Skip to content',
  nav: [
    { href: '#sobre', label: 'About' },
    { href: '#trajetoria', label: 'Journey' },
    { href: '#projetos', label: 'Projects' },
    { href: '#stack', label: 'Stack' },
    { href: '#contato', label: 'Contact' },
  ],
  themeLabel: 'Theme',
  themeAria: 'Toggle light and dark theme',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  navAria: 'Primary',
  navMobileAria: 'Mobile menu',
  brandAria: 'Thiago — home',
  about: {
    label: 'About',
    title: 'Who I am',
    lead: 'Code in critical systems, products with character — and a life that does not separate faith, family, and work.',
    familyCaption: 'God and family at the center',
    photoAlt: 'Thiago Albuquerque de Paula',
    familyAlt: 'Thiago and Thais Mara',
    pullQuote: 'Technology, for me, is a tool to serve people — not an end in itself.',
    summaryHtml: `I'm <strong>${siteBase.fullName}</strong>, <strong><span data-age></span> years old</strong>, based in <strong>${siteBase.location}</strong>, building full-stack software in <strong>high-criticality</strong> environments. Married to <strong>Thais Mara</strong> — <strong>God and family</strong> filter what is worth building. If you want serious craft and a direct conversation, we are speaking the same language.`,
    sections: [
      {
        heading: 'Faith and craft',
        html: `I'm a Christian, with faith in God and a genuine love for <strong>Jesus Christ</strong>. That changes how I work: deadlines without excuses, quality without theater, security without shortcuts. I want to become more integral and useful every year; code is just one place that shows up.`,
      },
      {
        heading: 'End-to-end systems',
        html: `What keeps me in this field is seeing the whole system: legacy that must keep running, APIs that cannot go down, screens people use under pressure. I like modernizing without breaking what already works, caring about performance, and shipping interfaces people understand without a manual. Away from the keyboard, the same curiosity becomes <strong>board games</strong> and <strong>digital games</strong>.`,
      },
      {
        heading: 'At work',
        html: `At <strong>Minsait/Indra</strong>, I contribute to large corporate projects: applications and APIs where stability, security, and code quality are the job — not the slide deck. Solid backend (Java, Quarkus, Spring) + careful frontend (Angular and the web stack), with tests and continuous evolution.`,
      },
      {
        heading: 'Own products',
        html: `Outside work hours, I build product end to end. <strong>Perfil.id</strong> came from frustration with generic profiles. <strong>Catiteo</strong> covers complex sites and custom systems. <strong>AZEN CO.</strong> is an apparel brand with identity, intention, and faith. Each project exists because it solves a real pain — not because it “looked good in a portfolio”.`,
      },
      {
        heading: 'What I offer',
        html: `Well-made product, direct conversation, and work that respects the people who will use it — and live with what was shipped.`,
      },
    ],
  },
  timeline: {
    label: 'Journey',
    title: 'Milestones that tell the story',
    lead: 'From corporate Java to critical systems — and businesses built in parallel.',
    asideQuote: 'Stability, security, and code quality are the job — not the slide deck.',
    asideNote: 'A short timeline. What matters is what is still running in production.',
    milestones: [
      {
        year: '2010',
        title: 'Centrosoft Tecnologia',
        detail:
          'Started in corporate Java — building and evolving systems across different industries.',
      },
      {
        year: '2019',
        title: 'Tenil Digital Agency',
        detail:
          'Systems analyst: full-cycle web — code, servers, databases, and client delivery.',
      },
      {
        year: 'Alongside',
        title: 'Own businesses',
        detail: 'AZEN CO., Catiteo, Perfil.id, and client sites — real product end to end.',
      },
      {
        year: '2022',
        title: 'Minsait / Indra',
        detail:
          'Full-stack on large corporate projects — applications and APIs in high-criticality environments.',
      },
      {
        year: '2025',
        title: 'Graduate studies',
        detail:
          'Web, information security, networks, data science/Big Data, DBA, software quality, cloud, and BI — deepening practice on critical systems.',
      },
    ],
  },
  projects: {
    label: 'Projects',
    title: 'Work with character and purpose',
    lead: 'Own products and client delivery — each with a clear problem, not a vanity list.',
    visit: 'Visit',
    featuredKicker: 'Featured brand',
    items: [
      {
        description:
          'No more generic pages. Professional profiles for people and small businesses — careful visuals, clear narrative, approachable pricing.',
      },
      {
        description:
          'When a template is not enough: complex sites and custom systems, finished by someone who will live with the result in production.',
      },
      {
        description:
          'Apparel with direction — identity, intention, and faith. Minimalism and authenticity for anyone tired of empty brand noise.',
      },
      {
        description:
          'Institutional digital presence aligned with the organization’s mission: clarity, credibility, and a visual that builds trust — real client delivery.',
      },
    ],
  },
  stack: {
    label: 'Stack',
    title: 'Tools I actually use',
    lead: 'Curated — the core of critical work and own products, not an infinite inventory.',
    groups: [
      {
        title: 'Backend & APIs',
        key: 'backend',
        blurb: 'When the API cannot go down and legacy still has to live.',
      },
      {
        title: 'Frontend',
        key: 'frontend',
        blurb: 'Angular, React, and Vue day to day — clear interfaces under pressure.',
      },
      {
        title: 'Data',
        key: 'data',
        blurb: 'SQL and storage from corporate systems to object stores.',
      },
      {
        title: 'DevOps & Cloud',
        key: 'devops',
        blurb: 'Containers, proxies, CI/CD, and grounded operations.',
      },
      {
        title: 'Quality & DevSecOps',
        key: 'quality',
        blurb: 'Git, tests, Sonar, and security in the cycle — not only on the slide.',
      },
      {
        title: 'Product & automation',
        key: 'product',
        blurb: 'Static sites, CMS, and automations that remove repetitive work.',
      },
    ],
  },
  cookie: {
    message:
      'We use analytics cookies (Google Analytics / Tag Manager) to understand site usage. You can accept or continue with essentials only.',
    accept: 'Accept',
    reject: 'Essentials only',
  },
  contact: {
    label: 'Contact',
    title: "Let's talk",
    lead: 'Prefer a direct conversation? Message me on WhatsApp — the other networks are below.',
    whatsappCta: 'Chat on WhatsApp',
    emailLabel: 'Email',
    networksLabel: 'Other networks',
    footerNavAria: 'Footer',
    whatsappMessage: 'Hi Thiago! I saw your site and would like to talk.',
  },
  ui: {
    yearsOld: 'years old',
  },
};

const bundles: Record<Locale, ContentBundle> = { pt, en };

export type SiteContent = ReturnType<typeof getContent>;

export function getContent(locale: Locale) {
  const copy = bundles[locale];
  const whatsappHref = `${siteBase.socialHrefs.whatsappBase}?text=${encodeURIComponent(copy.contact.whatsappMessage)}`;

  const allLinks = [
    { id: 'whatsapp' as const, label: 'WhatsApp', href: whatsappHref },
    { id: 'instagram' as const, label: 'Instagram', href: siteBase.socialHrefs.instagram },
    { id: 'linkedin' as const, label: 'LinkedIn', href: siteBase.socialHrefs.linkedin },
    { id: 'github' as const, label: 'GitHub', href: siteBase.socialHrefs.github },
    { id: 'telegram' as const, label: 'Telegram', href: siteBase.socialHrefs.telegram },
    { id: 'x' as const, label: 'X', href: siteBase.socialHrefs.x },
    { id: 'email' as const, label: copy.contact.emailLabel, href: siteBase.socialHrefs.email },
  ];

  const heroLinkIds = new Set(['whatsapp', 'instagram', 'linkedin', 'github']);

  const social = {
    primary: { label: copy.heroCtaSecondary, href: siteBase.socialHrefs.instagram },
    contact: { label: 'WhatsApp', href: whatsappHref },
    heroLinks: allLinks.filter((link) => heroLinkIds.has(link.id)),
    links: allLinks,
  };

  const projectItems = siteBase.projectMeta.map((meta, index) => ({
    ...meta,
    description: copy.projects.items[index]?.description ?? '',
    featured: meta.name === 'AZEN CO.',
  }));

  const stackGroups = copy.stack.groups.map((group) => ({
    title: group.title,
    blurb: group.blurb,
    items: [...siteBase.stack[group.key]],
  }));

  return {
    ...siteBase,
    ...copy,
    social,
    projectItems,
    stackGroups,
    canonical: copy.locale === 'en' ? `${siteBase.url}/en/` : `${siteBase.url}/`,
  };
}

/** @deprecated Prefer getContent — kept for gradual imports */
export const site = getContent('pt');
export type SocialLink = SiteContent['social']['links'][number];

import { siteBase, type Locale } from './siteBase';

type Milestone = { year: string; title: string; detail: string };
type ProjectCopy = { description: string };

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
  about: {
    label: string;
    title: string;
    lead: string;
    familyCaption: string;
    photoAlt: string;
    familyAlt: string;
    /** Trusted site copy — rendered with set:html */
    paragraphsHtml: string[];
  };
  timeline: {
    label: string;
    title: string;
    lead: string;
    milestones: Milestone[];
  };
  projects: {
    label: string;
    title: string;
    lead: string;
    visit: string;
    items: ProjectCopy[];
  };
  stack: {
    label: string;
    title: string;
    lead: string;
    groups: { title: string; key: keyof typeof siteBase.stack }[];
  };
  contact: {
    label: string;
    title: string;
    lead: string;
    whatsappCta: string;
    emailLabel: string;
    footerNavAria: string;
    whatsappMessage: string;
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
  tagline: 'Desenvolvedor Full-Stack · Games & tech · Cristão · Família',
  heroSupport:
    'Full-stack em Brasília. Sistemas que não podem falhar no trabalho; produtos próprios com propósito — e uma vida ancorada em Deus e na família.',
  heroKicker: 'Brasília · Full-Stack',
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
    paragraphsHtml: [
      `Sou <strong>${siteBase.fullName}</strong>, tenho <strong><span data-age></span> anos</strong> e vivo em <strong>${siteBase.location}</strong>. Trabalho como desenvolvedor full-stack — do banco à interface — com obsessão por coisa que aguenta o tranco no mundo real. Sou casado com <strong>Thais Mara</strong>; <strong>Deus e a família</strong> não são “detalhe da bio”: são o filtro do que vale a pena construir. Se um projeto não cabe nessa vida, ele não entra na fila.`,
      `Sou cristão, com fé em Deus e uma paixão genuína por <strong>Jesus Cristo</strong>. Isso muda o jeito de trabalhar: prazo sem enrolação, qualidade sem teatro, segurança sem atalho. Tecnologia, para mim, é ferramenta para <strong>servir pessoas</strong> — não um fim em si. Quero ser alguém mais íntegro e útil a cada ano; o código é só um dos lugares onde isso aparece.`,
      `O que me prende na área é enxergar o sistema inteiro: legado que precisa viver, API que não pode cair, tela que alguém usa sob pressão. Gosto de modernizar sem quebrar o que já funciona, cuidar de performance e entregar interface que a pessoa entende sem manual. Fora do teclado, a mesma curiosidade vira <strong>jogos de tabuleiro</strong> e <strong>games digitais</strong> — regras, sistemas, convivência. Nerd assumido, com método.`,
      `No dia a dia profissional, atuo em ambientes de <strong>alta criticidade</strong>. Na <strong>Minsait/Indra</strong>, participo de projetos corporativos de grande porte: aplicações e APIs em que estabilidade, segurança e qualidade de código são o trabalho, não o slide. Backend robusto (Java, Quarkus, Spring) + frontend cuidadoso (Angular e o ecossistema web), com testes e evolução contínua — o tipo de entrega que só aparece quando o sistema está no ar e ninguém percebe.`,
      `Fora do expediente, construo produto de ponta a ponta. O <strong>Perfil.id</strong> nasceu da frustração com perfis genéricos: pessoas e pequenos negócios merecem presença online profissional <strong>sem preço de agência</strong>. A <strong>Catiteo</strong> é o braço para quem precisa de mais — site complexo, sistema sob medida, acabamento de quem vai assinar o resultado. A <strong>AZEN CO.</strong> é outra frente: marca de roupa com identidade, intenção e fé — minimalismo e autenticidade num mercado barulhento. Cada um desses projetos existe porque resolve uma dor real, não porque “ficava bonito no portfólio”.`,
      `Se você chegou até aqui, provavelmente busca alguém que una técnica séria com clareza de propósito. É isso que ofereço: produto bem feito, conversa direta e trabalho que respeita quem vai usar — e quem vai viver com as consequências do que foi entregue.`,
    ],
  },
  timeline: {
    label: 'Trajetória',
    title: 'Marcos que contam a história',
    lead: 'Do Java corporativo aos sistemas críticos — e aos negócios construídos em paralelo.',
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
          'Aprofundamento em desenvolvimento web, segurança, redes, dados e administração de banco de dados.',
      },
    ],
  },
  projects: {
    label: 'Projetos',
    title: 'Trabalho com cara e propósito',
    lead: 'Produtos próprios e entrega para cliente — cada um com problema claro, não uma lista para impressionar.',
    visit: 'Visitar',
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
    lead: 'Curada — sem barras de progresso, sem inventário infinito.',
    groups: [
      { title: 'Backend', key: 'backend' },
      { title: 'Frontend', key: 'frontend' },
      { title: 'Qualidade & entrega', key: 'quality' },
      { title: 'Também', key: 'also' },
    ],
  },
  contact: {
    label: 'Contato',
    title: 'Vamos conversar',
    lead: 'Prefere conversar direto? Chama no WhatsApp — as outras redes estão a um clique.',
    whatsappCta: 'Conversar no WhatsApp',
    emailLabel: 'E-mail',
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
  tagline: 'Full-Stack Developer · Games & tech · Christian · Family',
  heroSupport:
    'Full-stack in Brasília. Systems that cannot fail at work; purpose-driven products of my own — and a life anchored in God and family.',
  heroKicker: 'Brasília · Full-Stack',
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
    paragraphsHtml: [
      `I'm <strong>${siteBase.fullName}</strong>, <strong><span data-age></span> years old</strong>, based in <strong>${siteBase.location}</strong>. I work as a full-stack developer — from database to UI — obsessed with software that holds up in the real world. I'm married to <strong>Thais Mara</strong>; <strong>God and family</strong> are not a bio footnote: they filter what is worth building. If a project does not fit that life, it does not make the list.`,
      `I'm a Christian, with faith in God and a genuine love for <strong>Jesus Christ</strong>. That changes how I work: deadlines without excuses, quality without theater, security without shortcuts. Technology, for me, is a tool to <strong>serve people</strong> — not an end in itself. I want to become more integral and useful every year; code is just one place that shows up.`,
      `What keeps me in this field is seeing the whole system: legacy that must keep running, APIs that cannot go down, screens people use under pressure. I like modernizing without breaking what already works, caring about performance, and shipping interfaces people understand without a manual. Away from the keyboard, the same curiosity becomes <strong>board games</strong> and <strong>digital games</strong> — rules, systems, fellowship. An unapologetic nerd, with method.`,
      `Day to day, I work in <strong>high-criticality</strong> environments. At <strong>Minsait/Indra</strong>, I contribute to large corporate projects: applications and APIs where stability, security, and code quality are the job — not the slide deck. Solid backend (Java, Quarkus, Spring) + careful frontend (Angular and the web stack), with tests and continuous evolution — the kind of delivery you notice when the system stays up and nobody has to panic.`,
      `Outside work hours, I build product end to end. <strong>Perfil.id</strong> came from frustration with generic profiles: people and small businesses deserve a professional online presence <strong>without agency pricing</strong>. <strong>Catiteo</strong> is the arm for when you need more — complex sites, custom systems, finish from someone who will stand behind the result. <strong>AZEN CO.</strong> is another front: an apparel brand with identity, intention, and faith — minimalism and authenticity in a noisy market. Each project exists because it solves a real pain, not because it “looked good in a portfolio”.`,
      `If you made it this far, you are probably looking for someone who pairs serious craft with clear purpose. That is what I offer: well-made product, direct conversation, and work that respects the people who will use it — and live with what was shipped.`,
    ],
  },
  timeline: {
    label: 'Journey',
    title: 'Milestones that tell the story',
    lead: 'From corporate Java to critical systems — and businesses built in parallel.',
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
          'Deepening web development, security, networks, data, and database administration.',
      },
    ],
  },
  projects: {
    label: 'Projects',
    title: 'Work with character and purpose',
    lead: 'Own products and client delivery — each with a clear problem, not a vanity list.',
    visit: 'Visit',
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
    lead: 'Curated — no progress bars, no infinite inventory.',
    groups: [
      { title: 'Backend', key: 'backend' },
      { title: 'Frontend', key: 'frontend' },
      { title: 'Quality & delivery', key: 'quality' },
      { title: 'Also', key: 'also' },
    ],
  },
  contact: {
    label: 'Contact',
    title: "Let's talk",
    lead: 'Prefer a direct conversation? Message me on WhatsApp — the other networks are one click away.',
    whatsappCta: 'Chat on WhatsApp',
    emailLabel: 'Email',
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

  const social = {
    primary: { label: 'Instagram', href: siteBase.socialHrefs.instagram },
    contact: { label: 'WhatsApp', href: whatsappHref },
    links: [
      { id: 'instagram' as const, label: 'Instagram', href: siteBase.socialHrefs.instagram },
      { id: 'whatsapp' as const, label: 'WhatsApp', href: whatsappHref },
      { id: 'linkedin' as const, label: 'LinkedIn', href: siteBase.socialHrefs.linkedin },
      { id: 'github' as const, label: 'GitHub', href: siteBase.socialHrefs.github },
      { id: 'telegram' as const, label: 'Telegram', href: siteBase.socialHrefs.telegram },
      { id: 'x' as const, label: 'X', href: siteBase.socialHrefs.x },
      { id: 'email' as const, label: copy.contact.emailLabel, href: siteBase.socialHrefs.email },
    ],
  };

  const projectItems = siteBase.projectMeta.map((meta, index) => ({
    ...meta,
    description: copy.projects.items[index]?.description ?? '',
  }));

  const stackGroups = copy.stack.groups.map((group) => ({
    title: group.title,
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

# Site pessoal — Thiago Albuquerque de Paula

Site estático em **Astro**, publicado em **[thiago.catiteo.com](https://thiago.catiteo.com)** via GitHub Pages.

## Stack

- [Astro](https://astro.build) (HTML estático)
- CSS com tema **dark** (padrão) + **light** (toggle)
- Deploy automático com GitHub Actions

## Desenvolvimento

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Estrutura

| Caminho | Função |
| --- | --- |
| `src/pages/index.astro` | Página única |
| `src/data/site.ts` | Textos, links, projetos, stack |
| `src/components/` | Hero, Sobre, Trajetória, Projetos, Stack, Contato |
| `public/images/` | Fotos do site |
| `public/CNAME` | Domínio `thiago.catiteo.com` |
| `.github/workflows/deploy.yml` | Deploy no GitHub Pages |

## Fotos (`public/images/`)

Hoje os três arquivos ainda são o **mesmo placeholder** (avatar do GitHub). Substitua pelos arquivos reais mantendo os nomes:

| Arquivo | Uso | Qual foto enviar |
| --- | --- | --- |
| `thiago-hero.jpg` | Hero (fundo) | Retrato principal (estúdio com luz quente **ou** blazer/fundo natural) |
| `thiago-about.jpg` | Sobre (retrato) | Blazer profissional (se o hero for o de estúdio) |
| `thiago-familia.jpg` | Sobre (família) | Foto do casamento com Thais Mara |
| — | Não usar no v1 | Selfie da praia (sem camisa) |

Como enviar: arraste os 3 arquivos nesta conversa **ou** faça commit direto em `public/images/` na `main`.

## Publicação (`thiago.catiteo.com`)

1. Repo GitHub → **Settings → Pages → Source: GitHub Actions**
2. DNS do `catiteo.com`: registro **CNAME** `thiago` → `thiago-tap.github.io`
3. Push em `main` dispara o workflow de build + deploy

## Conteúdo editável

Quase tudo fica em `src/data/site.ts` (tagline, redes, projetos, marcos, stack). Textos longos do Sobre estão em `src/components/About.astro`.

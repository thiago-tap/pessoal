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

## Fotos e logos (`public/images/`)

| Arquivo | Uso |
| --- | --- |
| `thiago-hero.jpg` | Hero |
| `thiago-about.jpg` | Sobre (retrato) |
| `thiago-familia.jpg` | Sobre (família) |
| `projects/logos/perfil-id.svg` | Logo perfil.id |
| `projects/logos/catiteo.png` | Logo Catiteo |
| `projects/logos/azen.png` | Logo AZEN CO. |
| `projects/logos/imav.png` | Logo Instituto IMAV (ícone; falta wordmark completa) |

Preferência: PNG/SVG com **fundo transparente**. Para logos com texto branco, o card já usa placa escura.

## Continuar o projeto

Ver o handoff completo: [`docs/HANDOFF.md`](docs/HANDOFF.md) (o que já foi feito + o que falta).

## Publicação (`thiago.catiteo.com`)

1. Repo GitHub → **Settings → Pages → Source: GitHub Actions**
2. DNS do `catiteo.com`: registro **CNAME** `thiago` → `thiago-tap.github.io`
3. Push em `main` dispara o workflow de build + deploy

## Conteúdo editável

Quase tudo fica em `src/data/site.ts` (tagline, redes, projetos, marcos, stack). Textos longos do Sobre estão em `src/components/About.astro`.

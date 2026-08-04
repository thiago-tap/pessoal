# Site pessoal — Thiago

Site estático em **Astro**, publicado em **GitHub Pages** com domínio `thiago.catiteo.com`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push em `main` dispara o workflow em `.github/workflows/deploy.yml`.

No repositório GitHub: **Settings → Pages → Source: GitHub Actions**.

DNS (Cloudflare / provedor do `catiteo.com`): CNAME `thiago` → `thiago-tap.github.io`.

## Foto do hero

Substitua `public/images/thiago.png` pelo retrato escolhido (a segunda foto da conversa). O arquivo atual é um placeholder do avatar do GitHub.

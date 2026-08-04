# Handoff — Site pessoal (thiago.catiteo.com)

Documento para continuar o projeto em outra máquina.
Última atualização: **2026-08-04**.

---

## Status rápido

| Item | Estado |
| --- | --- |
| Site em produção | ✅ https://thiago.catiteo.com |
| Versão EN | ✅ https://thiago.catiteo.com/en/ |
| Repo | ✅ https://github.com/thiago-tap/pessoal |
| Branch de trabalho / deploy | **`main` apenas** (push → GitHub Pages) |
| Stack | Astro estático + CSS (dark/light) |
| Idiomas | PT-BR (padrão) + EN (`/en/`) |

> **Fluxo:** continue sempre em `main`. Não use feature branches para este site — o deploy de produção sai direto do `main`.

---

## Como subir o ambiente

```bash
git clone https://github.com/thiago-tap/pessoal.git
cd pessoal
npm install
npm run dev
```

Build local:

```bash
npm run build
npm run preview
```

Publicar: commit + push em `main`. O workflow `.github/workflows/deploy.yml` faz o resto.

DNS já configurado: `thiago.catiteo.com` → CNAME → `thiago-tap.github.io`.

---

## O que já foi feito

### Produto

- Página pessoal com seções: Hero → Sobre → Trajetória → Projetos → Stack → Contato.
- Hero: nome **Thiago** + tagline; CTA principal Instagram; foto full-bleed.
- Contato: CTA WhatsApp com mensagem pré-preenchida.
- Redes: Instagram, WhatsApp, LinkedIn, GitHub, Telegram, X, e-mail.
- Projetos com logos: Perfil.id, Catiteo, AZEN CO., Instituto IMAV (marca circular — ok).
- Hero desktop usa recorte landscape (`thiago-hero-desktop.jpg`) via `<picture>`.
- Tema dark/light + nav mobile.
- **i18n PT/EN** com toggle no header (`/` ↔ `/en/`).

### Conteúdo editável (i18n)

| Caminho | Função |
| --- | --- |
| `src/data/siteBase.ts` | Dados compartilhados (fotos, links, stack técnica) |
| `src/data/i18n.ts` | Copy PT + EN + `getContent(locale)` |
| `src/components/*` | Seções (recebem `content`) |
| `src/pages/index.astro` | PT |
| `src/pages/en/index.astro` | EN |
| `public/images/` | Fotos e logos |

---

## Pendências

**Nenhuma pendência de produto aberta.** Manutenção futura:

- Atualizar marcos / projetos / redes quando algo mudar
- Ajustar copy PT ou EN em `src/data/i18n.ts`
- Se surgir wordmark do IMAV: trocar `public/images/projects/logos/imav.png` e `logoVariant` para `'wide'` em `siteBase.ts`

---

## Dicas

- Logos com branco (AZEN, Perfil.id) usam placa escura nos cards.
- Deploy ~30–60s após push em `main`. Hard refresh se a imagem não atualizar.
- WhatsApp: mensagem localizada por idioma em `i18n.ts`.

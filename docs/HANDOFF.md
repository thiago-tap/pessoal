# Handoff — Site pessoal (thiago.catiteo.com)

Documento para continuar o projeto em outra máquina.
Última atualização: **2026-08-04**.

---

## Status rápido

| Item | Estado |
| --- | --- |
| Site em produção | ✅ https://thiago.catiteo.com |
| Repo | ✅ https://github.com/thiago-tap/pessoal |
| Branch de trabalho / deploy | **`main` apenas** (push → GitHub Pages) |
| Stack | Astro estático + CSS (dark/light) |
| Idioma | PT-BR (EN ficou para depois) |

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

### Produto (decisões travadas no grill)

- Página pessoal (não portfolio genérico de agência).
- Seções: **Hero → Sobre → Trajetória → Projetos → Stack → Contato**.
- Hero: nome **Thiago** + tagline; CTA principal **Instagram**.
- Contato: CTA principal **WhatsApp** (“Vamos conversar”) com mensagem pré-preenchida.
- Redes: Instagram, WhatsApp, LinkedIn, GitHub, Telegram, X, e-mail.
- Projetos: perfil.id, Catiteo, AZEN CO., Instituto IMAV.
- Domínio: `thiago.catiteo.com`.
- PT primeiro; EN depois.

### Técnico / UI

- Site Astro com conteúdo central em `src/data/site.ts`.
- Tema dark (padrão) + toggle light.
- Nav mobile (hamburger).
- Idade calculada automaticamente a partir de `birthDate` (`1991-05-30`).
- Timeline com motion.
- Fotos reais:
  - `public/images/thiago-hero.jpg` — retrato estúdio (hero)
  - `public/images/thiago-about.jpg` — formal/terno (sobre)
  - `public/images/thiago-familia.jpg` — casamento/família
- Crop do hero ajustado (`object-position` mais para o topo).
- Projetos: **logos das marcas** (não mais prints de homepage).
  - `public/images/projects/logos/perfil-id.svg`
  - `public/images/projects/logos/catiteo.png`
  - `public/images/projects/logos/azen.png`
  - `public/images/projects/logos/imav.png` ← hoje só o **ícone** (marca circular)

### Deploy / domínio

- `public/CNAME` com `thiago.catiteo.com`
- GitHub Actions → GitHub Pages
- HTTPS ok em produção

---

## Mapa de arquivos importantes

| Caminho | O que editar |
| --- | --- |
| `src/data/site.ts` | Nome, tagline, links, projetos, marcos, stack |
| `src/components/About.astro` | Textos longos do Sobre |
| `src/components/Hero.astro` | Layout/copy curta do hero |
| `src/components/Projects.astro` | Cards / estilo das logos |
| `src/components/Header.astro` | Nav + toggle de tema |
| `src/styles/global.css` | Tokens de cor, tipografia, fundo |
| `public/images/` | Fotos e logos |
| `.github/workflows/deploy.yml` | Pipeline de publish |

---

## O que ainda precisa ser feito

### Prioridade alta

1. **Logo completa do IMAV**  
   Hoje está só o símbolo circular (fica pequeno ao lado das wordmarks).  
   Quando tiver PNG/SVG com texto “Instituto IMAV” (fundo transparente):
   - substituir `public/images/projects/logos/imav.png`
   - manter o mesmo nome de arquivo **ou** atualizar o path em `src/data/site.ts`
   - commit + push em `main`

### Próximas melhorias (não bloqueantes)

2. **Versão em inglês** (decidido para depois)  
   - i18n simples (rotas `/en` ou toggle)  
   - traduzir `site.ts` + textos do Sobre

3. **QA visual fino**  
   - Revisar contraste das logos no tema claro (placa escura já ajuda AZEN/perfil.id)  
   - Conferir mobile: nav, hero crop, cards de projetos  
   - Hard refresh / CDN cache após deploys grandes de imagem

4. **Conteúdo opcional**  
   - Ajustar copy se quiser tom mais curto/longo  
   - Incluir/remover redes em `site.social.links`  
   - Atualizar marcos da trajetória quando algo mudar

5. **Docs internas**  
   - `docs/superpowers/plans/2026-08-04-site-v1.1-polish.md` está **desatualizado** (fotos já integradas). Pode apagar ou arquivar.

---

## Como trocar a logo do IMAV (passo a passo)

```bash
# na pasta do repo
# 1) coloque o arquivo novo
cp ~/Downloads/logo-imav-completa.png public/images/projects/logos/imav.png

# 2) (opcional) otimizar tamanho — manter fundo transparente
# 3) conferir local
npm run dev

# 4) publicar
git add public/images/projects/logos/imav.png
git commit -m "Update IMAV full wordmark logo"
git push origin main
```

Se o arquivo for SVG:

1. Salve como `public/images/projects/logos/imav.svg`
2. Em `src/data/site.ts`, mude `image` do IMAV para `/images/projects/logos/imav.svg`

---

## Dicas práticas (aprendidas nesta sessão)

- Anexos de imagem no chat do Cursor **nem sempre** viram arquivo no workspace. Upload pelo GitHub (ou `curl`/copiar local) é mais confiável.
- Logos com partes **brancas** (AZEN, perfil.id) precisam de fundo escuro — por isso o “logo plate” escuro nos cards.
- Prints de homepage foram abandonados de propósito: competiam com as fotos pessoais e o crop sempre quebrava.
- Deploy costuma levar ~30–60s após o push em `main`. Se não atualizar, force refresh (Ctrl/Cmd+Shift+R).

---

## Checklist ao abrir em outra máquina

- [ ] `git pull origin main`
- [ ] `npm install`
- [ ] `npm run dev` → http://localhost:4321
- [ ] Abrir produção: https://thiago.catiteo.com
- [ ] Trocar logo IMAV quando disponível
- [ ] (Opcional) planejar i18n EN

---

## Contatos / dados já no código

- E-mail: `thiago@catiteo.com`
- Instagram: `@thiagaotap`
- WhatsApp CTA já com texto pré-preenchido em `site.ts`

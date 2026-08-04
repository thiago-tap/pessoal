# Prompt: análise completa + brainstorm + backlog de melhorias

Copie o bloco abaixo e cole no Cursor Agent (com Agent Skills ligado).
Substitua os placeholders.

---

## Prompt (copiar)

```text
Quero uma revisão de design/UX/produto deste projeto — análise profunda, brainstorm e backlog priorizado.
NÃO implemente código ainda. Entregue só o relatório final.

Contexto do projeto:
- Repo / pasta: [CAMINHO OU “este workspace”]
- URL local ou produção (se houver): [URL]
- Tipo de superfície: [landing | portfolio | SaaS product | dashboard | docs | outro]
- Público-alvo: [quem usa]
- Objetivo principal do visitante/usuário: [ex.: conversão, credibilidade, contratar, comprar]
- Tom desejado (opcional): [ex.: editorial, premium, minimal, técnico]
- Referências de marca/design (opcional): [URLs ou “use Linear / Stripe / …” da biblioteca awesome-design-md]
- Há 3D / Three.js no escopo? [sim/não]
- Idiomas: [PT / EN / ambos]

### Orquestração de skills (obrigatório)

Use as skills instaladas nesta ordem. Não ative direções estéticas conflitantes ao mesmo tempo
(ex.: não misture industrial-brutalist-ui + minimalist-ui + high-end-visual-design como “verdade”
simultânea — escolha UMA direção recomendada e cite as outras só como alternativas).

1) **brainstorming** (se disponível) + leitura do brief
   - Inferir tipo de página, audience, constraints.
   - Declaração “Design Read” em 1 linha (como no design-taste-frontend).
   - 1 pergunta só se o brief for ambíguo demais; senão, assuma e declare.

2) **redesign-existing-projects**
   - Auditoria do estado atual (hierarquia, espaçamento, tipografia, consistência, slop).
   - Separar: preservar / melhorar / redesenhar.

3) **design-taste-frontend** (+ **gpt-taste** só se precisar de motion/layout mais agressivo)
   - Anti-slop: o que parece template/IA.
   - Dials sugeridos: VARIANCE / MOTION / DENSITY (1–10) com justificativa.

4) **impeccable**
   - Rodar mentalmente (e com scripts se aplicável) as lentes: critique, audit, polish, distill,
     typeset, layout, clarify, harden, adapt (mobile/desktop).
   - Se existir PRODUCT.md / DESIGN.md / .impeccable, carregar contexto antes.
   - Listar anti-patterns detectáveis (fontes genéricas, cards aninhados, contraste ruim, etc.).

5) **playwright-cli** (se houver URL)
   - Abrir desktop (~1440) e mobile (~390).
   - Snapshot/screenshot das views principais (hero, seções críticas, formulários/CTAs).
   - Anotar cortes, overflow, contraste, tap targets, hierarquia quebrada.

6) **awesome-design-md** (referência, não copiar cegamente)
   - Se eu citei uma marca, usar o DESIGN.md correspondente em
     `~/.cursor/references/awesome-design-md/design-md/…`
   - Senão, sugerir 1–2 DESIGN.md próximos do “Design Read” e explicar o porquê.
   - Extrair só tokens/regras úteis (não clonar a marca).

7) Direção visual (escolher UMA primária)
   - default portfolio/landing premium: **high-end-visual-design** OU **minimalist-ui**
   - se o brief pedir brutalismo: **industrial-brutalist-ui**
   - se o brief pedir Stitch/DESIGN.md export: **stitch-design-taste**
   - skills de imagegen (**imagegen-frontend-web/mobile**, **brandkit**, **image-to-code**)
     só se eu pedir comps visuais; neste prompt, NÃO gerar imagens — só indicar se comps ajudariam.

8) **img2threejs**
   - Só se houver 3D no escopo ou oportunidade clara; senão, pular com “N/A”.

9) **full-output-enforcement**
   - O relatório final deve ser completo, sem placeholders (“TODO”, “etc.”, “mais tarde”).

### Formato de entrega (obrigatório)

# Design Read
Uma linha.

# Achados (por severidade)
## Bloqueadores
## Altos
## Médios
## Baixos
Cada item: problema → evidência (arquivo/URL/seção) → impacto.

# Brainstorm (opções, não soluções fechadas)
3–5 direções possíveis com trade-offs. Marque a recomendada.

# Backlog priorizado de melhorias
Tabela:
| ID | Melhoria | Por quê | Skill/lente | Esforço (S/M/L) | Impacto (S/M/L) | Dependência |

Ordene por Impacto/Esforço. Máx. 15 itens. Sem filler.

# Quick wins (≤ 1 dia)
Lista curta.

# Não fazer
Anti-padrões e tentação de “polish infinito”.

# Próximo passo sugerido
Um único comando/prompt para eu colar depois e COMEÇAR a implementar só o top do backlog
(ex.: “/impeccable polish hero” ou “implemente IDs B1–B3”).
```

---

## Variante curta (mesmo fluxo, menos texto)

```text
Analise este projeto com as skills: redesign-existing-projects, design-taste-frontend,
impeccable (critique+audit+polish+adapt), playwright-cli (desktop+mobile se houver URL),
e uma referência de ~/.cursor/references/awesome-design-md se fizer sentido.
Faça brainstorm de 3–5 direções, escolha uma, e entregue backlog priorizado (máx. 15)
+ quick wins. Sem implementar código. Relatório completo (full-output-enforcement).
Projeto: [CAMINHO] · URL: [URL] · Tipo: [portfolio/landing/…] · Objetivo: […]
```

## Notas

- Skills de estilo conflitantes: use **uma** direção; as outras só como alternativas no brainstorm.
- `img2threejs` / imagegen: só sob demanda.
- Depois do relatório, rode o “Próximo passo sugerido” numa mensagem nova para implementar.

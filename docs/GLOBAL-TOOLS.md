# Global agent tools (Cursor)

Installed for use across projects on this machine.

## Skills (`~/.cursor/skills/`)

| Tool | How to use | Source |
|------|------------|--------|
| **taste-skill** (`design-taste-frontend`, + variants) | Ask agent to follow taste / anti-slop frontend rules | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) |
| **impeccable** | `/impeccable init`, `/impeccable audit`, `/impeccable polish`, … | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) |
| **playwright-cli** | Shell: `playwright-cli open <url>` then snapshot/click | [@playwright/cli](https://playwright.dev/agent-cli/introduction) |
| **img2threejs** | `/img2threejs` + reference image → procedural Three.js | [img2threejs](https://github.com/img2threejs/img2threejs) |

Also mirrored under `~/.agents/skills/` and `~/.claude/skills/` where applicable.

## Design references (`~/.cursor/references/awesome-design-md/`)

Collection of `DESIGN.md` files (Linear, Stripe, Vercel, etc.).

Usage per project:
```bash
cp ~/.cursor/references/awesome-design-md/design-md/linear.app/DESIGN.md ./DESIGN.md
# then: "build a page that follows DESIGN.md"
```

Browse: https://github.com/voltagent/awesome-design-md

## Playwright CLI binary

```bash
export PATH="$HOME/.local/bin:$PATH"   # already in ~/.bashrc
playwright-cli open https://example.com --headed
playwright-cli snapshot
```

## Reinstall / update (run on any new machine)

```bash
# Taste
npx skills add https://github.com/Leonxlnx/taste-skill -g -y --skill '*'
mkdir -p ~/.cursor/skills && cp -a ~/.agents/skills/* ~/.cursor/skills/ 2>/dev/null || true

# Impeccable (Cursor global)
printf '2\ncursor\nglobal\n' | npx impeccable install

# Playwright CLI
npm install -g @playwright/cli --prefix ~/.local
export PATH="$HOME/.local/bin:$PATH"
cd ~ && playwright-cli install --skills
cp -a ~/.claude/skills/playwright-cli ~/.cursor/skills/

# img2threejs
git clone --depth 1 https://github.com/img2threejs/img2threejs.git ~/.cursor/skills/img2threejs

# awesome-design-md
git clone --depth 1 https://github.com/voltagent/awesome-design-md.git ~/.cursor/references/awesome-design-md
```

## Cursor settings tip

Enable **Agent Skills** in Cursor Settings → Rules (Nightly may be required for some skill features).

Reload the window after installing skills.

# AI Website Cloner Template — Requirements

## System Requirements

### Minimum Environment
- **Node.js:** v24.0.0 or higher
- **npm:** v10.0.0 or higher (bundled with Node.js)
- **OS:** Windows 11 / macOS 13+ / Ubuntu 22.04+
- **Disk Space:** 500MB for dependencies, 1GB+ for assets

### Recommended Environment
- **Node.js:** v24.x (latest stable)
- **RAM:** 8GB+ for running dev server and browser simultaneously
- **Network:** Stable connection for downloading npm packages

---

## Dependency Groups

### Core Dependencies (Production)
| Package | Version | Purpose |
|---------|---------|---------|
| next | ^16.2.4 | React framework |
| react | 19.2.4 | UI library |
| react-dom | 19.2.4 | DOM renderer |
| shadcn | ^4.1.0 | UI component library |
| class-variance-authority | ^0.7.1 | Component variant utilities |
| clsx | ^2.1.1 | Conditional class merging |
| tailwind-merge | ^3.5.0 | Tailwind class merging |
| lucide-react | ^1.6.0 | Icon library |
| tw-animate-css | ^1.4.0 | Animation utilities |
| @base-ui/react | ^1.3.0 | Base UI components |

### Dev Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| tailwindcss | ^4 | CSS framework |
| @tailwindcss/postcss | ^4 | PostCSS plugin for Tailwind |
| typescript | ^5 | TypeScript compiler |
| @types/node | ^24 | Node.js type definitions |
| @types/react | ^19 | React type definitions |
| @types/react-dom | ^19 | React DOM type definitions |
| eslint | ^9 | Linting |
| eslint-config-next | 16.2.1 | Next.js ESLint config |

---

## Environment Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/JCodesMore/ai-website-cloner-template.git
cd ai-website-cloner-template
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run check` | Run lint + typecheck + build |

---

## Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | npm dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `next.config.ts` | Next.js configuration |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `postcss.config.mjs` | PostCSS configuration |
| `.eslintrc.json` | ESLint configuration |

---

## Project Structure

```
ai-website-cloner-template/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui primitives
│   │   └── icons.tsx     # Extracted SVG icons
│   ├── lib/              # Utilities (cn() helper)
│   ├── types/            # TypeScript interfaces
│   ├── hooks/            # Custom React hooks
│   └── contexts/         # React contexts (ThemeContext)
├── public/
│   ├── images/           # Downloaded site images
│   ├── videos/           # Downloaded site videos
│   └── seo/             # Favicons, OG images
├── docs/
│   ├── research/         # Inspection outputs
│   ├── design-references/ # Screenshots
│   └── plans/            # Implementation plans
├── scripts/              # Asset download scripts
└── REQUIREMENTS.md       # This file
```

---

## Optional Tools

### For Website Cloning
| Tool | Purpose |
|------|---------|
| Claude Code | AI coding agent for reverse-engineering |
| Firecrawl | Web content extraction (optional) |
| Playwright | Browser automation for screenshots |

### For Development
| Tool | Purpose |
|------|---------|
| nvm (Node Version Manager) | Manage multiple Node.js versions |
| pnpm / yarn | Alternative package managers |

---

## Troubleshooting

### Node.js Version Error
```
Error: Node.js version must be >= 24
```
**Solution:** Upgrade Node.js to v24 or higher

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install
```
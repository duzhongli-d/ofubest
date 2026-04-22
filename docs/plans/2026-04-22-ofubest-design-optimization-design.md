# ofubest Design Optimization Plan

## Context

The website was previously "MiniMax" branded and has been refactored to "ofubest". The current design uses generic styling with warm orange accents. This optimization aims to create a cohesive futuristic AI brand identity through:

- Logo redesign with abstract "o" motif
- Unified design language across all components
- Cyber gradient color palette (purple → blue → cyan)
- Clean depth styling with subtle shadows

## Design Language

### Color Palette — Cyber Spectrum

```css
/* Dark Mode */
--background: oklch(0.08 0 0);          /* Deep black */
--foreground: oklch(0.985 0 0);          /* White */
--primary: oklch(0.55 0.2 280);          /* Electric blue */
--primary-hover: oklch(0.5 0.2 280);
--accent: oklch(0.7 0.15 200);          /* Cyan tint */
--accent-foreground: oklch(0.985 0 0);

/* Gradients */
--gradient-start: oklch(0.6 0.2 300);    /* Purple */
--gradient-mid: oklch(0.55 0.2 280);     /* Blue */
--gradient-end: oklch(0.5 0.15 200);     /* Cyan */

/* Cards */
--card-bg: oklch(0.12 0 0);
--card-hover: oklch(0.15 0 0);
--card-border: oklch(1 0 0 / 8%);
--card-shadow: oklch(0 0 0 / 40%);

/* Text hierarchy */
--text-primary: oklch(0.985 0 0);
--text-secondary: oklch(0.7 0 0);
--text-muted: oklch(0.5 0 0);
```

### Typography
- Font: Geist (sans-serif), fallback to system-ui
- Logo text: 18px, font-weight 600, letter-spacing 0.02em
- Headings: 14px semibold
- Body: 14px regular
- Captions: 12px

### Spacing
- Navigation height: 64px
- Card border-radius: 16px
- Container max-width: 1440px
- Section padding: 24px–48px

### Motion
- Hover transitions: 200ms ease-out
- Dropdown animations: fade + 8px translate up
- Card hover: translateY -2px with intensified shadow

---

## Component Specifications

### 1. Logo Redesign

**Mark Design:**
- Abstract circular "o" form — concentric rings with orbital nodes
- 3 orbital nodes suggesting AI processing/data flow
- Central glowing core representing intelligence
- Gradient fill: purple → blue → cyan

**Layout:**
```
[Icon 32×32] [ofubest text 140px wide]
```

**Implementation:**
- File: `src/components/Logo.tsx`
- Icon uses `viewBox="0 0 32 32"` with 3 concentric elements
- Gradient applied via `<linearGradient>` in `<defs>`
- Text remains "ofubest" in clean sans-serif

---

### 2. Navigation Bar

**Structure:**
- Fixed position, full width, 64px height
- Transparent background (glass effect via backdrop-blur: none needed)
- 1px gradient accent line at top (purple → blue → cyan, 80% opacity)
- Subtle bottom shadow on scroll

**Layout:**
```
[Logo] ─── [Models | Products | Platform | News | About] ─── [Theme] [EN] [Login]
```

**File:** `src/components/Navigation.tsx`

**Changes:**
- Background: transparent (remove dark:bg-[#0a0a0a]/80)
- Add gradient border at top using `::before` pseudo-element
- Height: 64px (increase from 16/4rem)
- Logo size: 140×36px

---

### 3. Carousel Components (ModelMatrixCarousel, ProductMatrixCarousel)

**Card Treatment:**
- Background: oklch(0.12 0 0) dark / white light
- Border: 1px oklch(1 0 0 / 8%)
- Border-radius: 16px
- Shadow: 0 4px 24px oklch(0 0 0 / 40%)
- Inner top highlight: inset 0 1px 0 oklch(1 0 0 / 5%)

**Hover State:**
- Card elevates: translateY -2px
- Shadow intensifies: 0 8px 32px oklch(0 0 0 / 50%)
- Border brightens to 12% opacity

**Navigation Dots:**
- Size: 8px circles
- Default: oklch(0.5 0 0)
- Active: gradient fill (purple → cyan)

**Files:**
- `src/components/ModelMatrixCarousel.tsx`
- `src/components/ProductMatrixCarousel.tsx`

---

### 4. Footer

**Structure:**
- Background: oklch(0.08 0 0)
- 1px gradient accent line at top (matching nav)
- Multi-column link grid
- Bottom bar with legal info

**Brand Column:**
- Logo at top
- Email: bd@ofubest.io
- Social icons with gradient border rings
- QR codes in 84×84px rounded cards

**Files:**
- `src/components/Footer.tsx`

**Changes:**
- Add gradient border at top using `::before`
- Update icon hover states to use theme-aware colors
- Ensure text hierarchy follows new color tokens

---

## CSS Token Updates

**File:** `src/app/globals.css`

Add new cyber gradient tokens:

```css
/* Cyber gradient tokens */
--gradient-start: oklch(0.6 0.2 300);   /* Purple */
--gradient-mid: oklch(0.55 0.2 280);    /* Blue */
--gradient-end: oklch(0.5 0.15 200);    /* Cyan */

--card-bg: oklch(0.12 0 0);
--card-hover: oklch(0.15 0 0);
--card-border: oklch(1 0 0 / 8%);
--card-shadow: oklch(0 0 0 / 40%);
```

---

## Implementation Order

1. **CSS Updates** (`globals.css`) — Add cyber gradient tokens
2. **Logo** (`Logo.tsx`) — New abstract "o" mark with gradient
3. **Navigation** (`Navigation.tsx`) — Transparent bg + gradient accent line
4. **Carousels** (`ModelMatrixCarousel.tsx`, `ProductMatrixCarousel.tsx`) — Card shadows
5. **Footer** (`Footer.tsx`) — Gradient accent line + social icon styling

---

## Verification

### Visual Checklist
- [ ] Logo shows abstract "o" with purple-blue-cyan gradient
- [ ] Navigation has gradient line at top, transparent body
- [ ] Cards have layered shadows (4px + 24px depth)
- [ ] Card hover elevates with intensified shadow
- [ ] Footer has matching gradient accent line at top
- [ ] Social icons have gradient border treatment
- [ ] Light mode maintains contrast and readability

### Browser Testing
1. Open `http://localhost:3000`
2. Toggle dark/light mode — verify gradient colors adapt
3. Hover over navigation items — check fade transitions
4. Click carousel navigation — verify dot states
5. Scroll to footer — verify gradient line consistency

---

## Files to Modify

1. `src/app/globals.css` — Add cyber gradient tokens
2. `src/components/Logo.tsx` — New mark design
3. `src/components/Navigation.tsx` — Transparent bg + gradient line
4. `src/components/ModelMatrixCarousel.tsx` — Card shadow system
5. `src/components/ProductMatrixCarousel.tsx` — Card shadow system
6. `src/components/Footer.tsx` — Gradient accent + icon styling
# ProductMatrixCarousel Component Specification

## Overview
- **Target file:** `src/components/ProductMatrixCarousel.tsx`
- **Screenshot:** `docs/design-references/minimaxi-homepage-desktop.png`
- **Interaction model:** Horizontal scroll carousel with prev/next buttons

## DOM Structure

```
section (py-20 bg-black)
├── div (max-w-[1440px] mx-auto px-6)
│   ├── div (header - text-center mb-12)
│   │   ├── h2: "AI 产品矩阵"
│   │   └── p: "从智能对话到视频创作..."
│   └── div (carousel container)
│       ├── button (prev - disabled at start)
│       ├── button (next)
│       └── div (cards track)
│           ├── Card: MiniMax Agent
│           ├── Card: 海螺视频
│           ├── Card: MiniMax Audio
│           ├── Card: 海螺视频Agent (NEW)
│           └── Card: 星野
```

## Computed Styles

### Section
- padding: 80px 0
- backgroundColor: #000000

### Carousel Container
- position: relative
- padding: 0 48px

### Product Card
- flexShrink: 0
- width: 280px
- borderRadius: 16px
- overflow: hidden
- cursor: pointer

### Card Image Container
- width: 100%
- height: 200px
- position: relative
- overflow: hidden

### Card Image
- width: 100%
- height: 100%
- objectFit: cover
- transition: transform 0.5s ease

### Card Overlay
- absolute bottom-0 left-0 right-0
- padding: 16px
- background: linear-gradient(transparent, rgba(0,0,0,0.8))

### Card Title
- fontSize: 18px
- fontWeight: 600
- color: white

### Card Description
- fontSize: 14px
- color: rgba(255,255,255,0.7)

### Card Badge
- top: 12px
- left: 12px
- padding: 4px 12px
- backgroundColor: rgba(99, 102, 241, 0.9)
- borderRadius: 9999px
- fontSize: 12px
- color: white

## Cards Data

1. **MiniMax Agent**
   - Description: "简单指令，创意无限"
   - Link: https://agent.minimaxi.com

2. **海螺视频**
   - Description: "每个想法都是一部大片"
   - Link: https://hailuoai.com/video

3. **MiniMax Audio**
   - Description: "超拟人AI声音创意"
   - Link: https://hailuoai.com/audio

4. **海螺视频Agent** (NEW)
   - Description: "Vibe Videoing 零门槛，成片直出"
   - Link: /news/video-agent

5. **星野**
   - Description: "骤入佳境，流连星野"
   - Link: https://www.xingyeai.com

## Responsive Behavior
- **Desktop (1440px):** 5 cards visible
- **Tablet (768px):** 3-4 cards
- **Mobile (390px):** 1-2 cards
- **Breakpoint:** ~768px
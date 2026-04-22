# HeroCarousel Component Specification

## Overview
- **Target file:** `src/components/HeroCarousel.tsx`
- **Screenshot:** `docs/design-references/minimaxi-homepage-desktop.png`
- **Interaction model:** Time-driven auto-play carousel with prev/next buttons

## DOM Structure

```
section (relative, overflow-hidden, bg-gradient-to-b from-dark to-darker)
├── div (max-w-[1440px] mx-auto)
│   ├── button (prev, absolute left-4 top-1/2)
│   ├── button (next, absolute right-4 top-1/2)
│   └── div (carousel track - flex transition-transform)
│       ├── Slide 1: Music 2.6 with genre cards
│       ├── Slide 2: M2.7 with feature cards
│       ├── Slide 3: 2025 Performance with banner
│       ├── Slide 4: Token Plan with benefit cards
│       ├── Slide 5: Hailuo 2.3 banner
│       ├── Slide 6: Speech 2.8 with voice samples
│       ├── Slide 7: Agent banner
│       └── Slide 8: M2-her banner
```

## Computed Styles

### Carousel Container
- position: relative
- width: 100%
- height: 600px (desktop), 500px (tablet), 400px (mobile)
- backgroundColor: transparent

### Navigation Buttons
- position: absolute
- top: 50%
- transform: translateY(-50%)
- width: 48px
- height: 48px
- borderRadius: 50%
- backgroundColor: rgba(255,255,255,0.1)
- backdropFilter: blur(10px)
- border: 1px solid rgba(255,255,255,0.2)
- hover: backgroundColor rgba(255,255,255,0.2)
- transition: all 0.2s

### Slide Track
- display: flex
- transition: transform 0.5s ease-out

## Slide 1: Music 2.6

### Container
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 48px
- padding: 60px 80px
- alignItems: center

### Left Content
- heading: "ofubest Music 2.6"
- subtitle paragraph
- 2 buttons: "即刻接入API", "了解更多"

### Right Content - Genre Cards Grid
- display: grid
- gridTemplateColumns: repeat(4, 1fr)
- gap: 16px

### Genre Card
- position: relative
- width: 100%
- aspectRatio: 1
- borderRadius: 16px
- overflow: hidden
- hover: scale(1.05), transition 0.3s
- Genre types: Cover, Pop, Hyperpop, Electronic, Trap, EDM (8 cards total)
- Each card has: image (absolute), label overlay at bottom

## Slide 2: M2.7

### Container
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 48px
- padding: 60px 80px

### Left Content
- heading: "ofubest M2.7"
- subtitle paragraph
- 3 buttons: "即刻接入API", "立即体验Agent", "了解更多"

### Right Content - Feature Cards
- display: flex
- flexDirection: column
- gap: 16px

### Feature Card
- padding: 20px
- backgroundColor: rgba(255,255,255,0.05)
- borderRadius: 12px
- border: 1px solid rgba(255,255,255,0.1)
- tilt effect on hover (3D transform)

## Slide 3: 2025 Performance

### Container
- padding: 60px 80px

### Content
- heading: "2025年全年业绩"
- subtitle: "迈向AI时代的平台型公司"
- link: "了解更多"
- banner image (full width)

## Slide 4: Token Plan

### Container
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 48px
- padding: 60px 80px

### Left Content
- heading: "Token Plan"
- subtitle paragraph
- 2 buttons: "即刻接入API", "订阅"

### Right Content - Benefit Cards
- 3 cards: 最强模型, 包月畅用, 开箱即用

## Slide 5: Hailuo 2.3

### Container
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 48px
- padding: 60px 80px

### Left Content
- heading: "ofubest Hailuo 2.3"
- subtitle: "动静皆非凡：极致动态，入微传情"
- 3 links

### Right Content
- Banner image with tilt effect

## Slide 6: Speech 2.8

### Container
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 48px
- padding: 60px 80px

### Left Content
- heading: "ofubest Speech 2.8"
- subtitle: "赋予 AI 语音'人的温度'"
- 3 links

### Right Content
- 3 voice sample cards (rounded images)
- Samples: 睡前低语, 恐怖故事, 哥布林的交易

## Slide 7: Agent

### Container
- padding: 60px 80px

### Content
- heading: "ofubest Agent"
- subtitle: "智能助手..."
- 2 links
- Banner image

## Slide 8: M2-her

### Container
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 48px
- padding: 60px 80px

### Left Content
- heading: "ofubest M2-her"
- subtitle: "多角色沉浸扮演..."
- 2 links

### Right Content
- Banner image with tilt effect

## Assets Used
- Music genre images (Cover, Pop, Hyperpop, Electronic, Trap, EDM)
- Model feature card images
- Banner illustrations for various slides

## Text Content

### Slide 1 - Music 2.6
- Heading: "ofubest Music 2.6"
- Subtitle: "Cover 翻唱、器乐提升、Agent 集成，让每个人都能成为音乐创作者"
- Button 1: "即刻接入API" → platform.minimaxi.com/docs/api-reference/music-generation
- Button 2: "了解更多" → /news/music-26

### Slide 2 - M2.7
- Heading: "ofubest M2.7"
- Subtitle: "开启模型的自我进化，相比 M2.5 在实战能力上有显著的提升"
- Feature 1: "Agent Harness 能力" / "构建自我进化的 Agent harness"
- Feature 2: "强工程与 Coding 能力" / "一个真正理解生产系统的模型"
- Feature 3: "复杂 Office 自动化能力" / "支持复杂 Excel / Word / PPT 办公任务及多轮编辑"

## Responsive Behavior
- **Desktop (1440px):** Full 2-column layout, 600px height
- **Tablet (768px):** 2-column with reduced gaps, 500px height
- **Mobile (390px):** Single column stack, images full-width, 400px height
- **Breakpoint:** ~768px
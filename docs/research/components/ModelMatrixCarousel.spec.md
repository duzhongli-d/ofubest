# ModelMatrixCarousel Component Specification

## Overview
- **Target file:** `src/components/ModelMatrixCarousel.tsx`
- **Screenshot:** `docs/design-references/minimaxi-homepage-desktop.png`
- **Interaction model:** Horizontal scroll carousel with prev/next buttons

## DOM Structure

```
section (py-20 bg-ofubest-bg-dark)
├── div (max-w-[1440px] mx-auto px-6)
│   ├── div (header - text-center mb-12)
│   │   ├── h2: "全栈模型矩阵"
│   │   └── p: "涵盖文本、语音、视频、图像与音乐五大方向..."
│   └── div (carousel container)
│       ├── button (prev - absolute left-0)
│       ├── button (next - absolute right-0)
│       └── div (cards track - flex gap-6 overflow-x-auto)
│           ├── Card: ofubest M2.7
│           ├── Card: ofubest Music 2.6
│           ├── Card: Hailuo 2.3 / 2.3 Fast
│           ├── Card: ofubest Speech 2.8
│           ├── Card: ofubest M2-her
│           └── Card: ofubest MCP Server
```

## Computed Styles

### Section
- padding: 80px 0
- backgroundColor: #0a0a0a (--ofubest-bg-dark)

### Header
- textAlign: center
- marginBottom: 48px

### Heading
- fontSize: 36px
- fontWeight: 600
- color: white
- marginBottom: 12px

### Subtitle
- fontSize: 16px
- color: rgba(255,255,255,0.6)
- maxWidth: 600px
- margin: 0 auto

### Carousel Container
- position: relative
- padding: 0 48px

### Navigation Buttons
- position: absolute
- top: 50%
- transform: translateY(-50%)
- width: 40px
- height: 40px
- borderRadius: 50%
- backgroundColor: rgba(255,255,255,0.1)
- border: 1px solid rgba(255,255,255,0.2)
- disabled: opacity 0.3, cursor not-allowed

### Cards Track
- display: flex
- gap: 24px
- overflowX: auto
- scrollBehavior: smooth
- padding: 8px 0
- /* Hide scrollbar */
- scrollbarWidth: none
- &::-webkit-scrollbar: display: none

### Model Card
- flexShrink: 0
- width: 280px
- backgroundColor: #141414
- borderRadius: 16px
- overflow: hidden
- cursor: pointer
- transition: transform 0.3s, box-shadow 0.3s
- hover: transform translateY(-4px), box-shadow 0 8px 32px rgba(0,0,0,0.4)

### Card Image
- width: 100%
- height: 200px
- objectFit: cover

### Card Badge
- top: 12px
- right: 12px
- padding: 4px 12px
- backgroundColor: rgba(99, 102, 241, 0.9)
- borderRadius: 9999px
- fontSize: 12px
- fontWeight: 500
- color: white

### Card Content
- padding: 20px

### Card Title
- fontSize: 16px
- fontWeight: 600
- color: white
- marginBottom: 8px

### Card Type
- fontSize: 12px
- color: rgba(255,255,255,0.5)
- marginBottom: 12px

### Card Description
- fontSize: 14px
- color: rgba(255,255,255,0.7)
- lineHeight: 1.5

## Cards Data

1. **ofubest M2.7** (NEW)
   - Type: Text Model
   - Description: "模型自我进化，以技术突破驱动生产力革新"
   - Link: /news/minimax-m27-zh
   - Image: from downloaded assets

2. **ofubest Music 2.6** (NEW)
   - Type: Music Model
   - Description: "翻唱入心，器乐入魂"
   - Link: /news/music-26

3. **Hailuo 2.3 / 2.3 Fast** (NEW)
   - Type: Video Model
   - Description: "动静皆非凡：极致动态，入微传情"
   - Link: /news/minimax-hailuo-23

4. **ofubest Speech 2.8** (NEW)
   - Type: Audio Model
   - Description: "赋予 AI 语音'人的温度'"
   - Link: /news/minimax-speech-28

5. **ofubest M2-her** (NEW)
   - Type: Text Model
   - Description: "多角色沉浸扮演，驾驭长轮次复杂场景"
   - Link: /news/minimax-m2-her-技术深度解析

6. **ofubest MCP Server**
   - Type: MCP
   - Description: "视频生成、图像生成、语音生成和声音克隆工具现已向开发者开放"
   - Link: /news/minimax-mcp

## Responsive Behavior
- **Desktop (1440px):** 6 cards visible, scroll to see more
- **Tablet (768px):** 3-4 cards visible
- **Mobile (390px):** 1-2 cards visible, smaller card width
- **Breakpoint:** ~768px

## No Scrollbar CSS
```css
/* Hide scrollbar */
-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar { display: none; }
```
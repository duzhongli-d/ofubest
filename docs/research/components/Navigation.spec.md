# Navigation Component Specification

## Overview
- **Target file:** `src/components/Navigation.tsx`
- **Screenshot:** `docs/design-references/minimaxi-homepage-desktop.png`
- **Interaction model:** Hover-driven dropdown menus, fixed position

## DOM Structure

```
nav (fixed top, z-50, bg-dark/80 backdrop-blur-md)
├── div (max-w-[1440px] mx-auto px-6)
│   ├── a (Logo - MiniMax)
│   ├── div (nav items - flex gap-8)
│   │   ├── div (模型 dropdown trigger) → dropdown
│   │   ├── div (产品 dropdown trigger) → dropdown
│   │   ├── div (开放平台 dropdown trigger) → dropdown
│   │   ├── div (新闻动态 - simple link)
│   │   └── div (关于我们 dropdown trigger) → dropdown
│   └── div (right side - flex items gap-4)
│       ├── a (EN → minimax.io)
│       └── div (登录 dropdown trigger) → dropdown
```

## Computed Styles

### Nav Container
- position: fixed
- top: 0
- zIndex: 50
- width: 100%
- backgroundColor: rgba(10, 10, 10, 0.8) with backdrop-blur
- borderBottom: 1px solid rgba(255,255,255,0.1)
- padding: 0 24px

### Nav Inner
- maxWidth: 1440px
- margin: 0 auto
- display: flex
- alignItems: center
- justifyContent: space-between
- height: 64px

### Logo
- width: 140px
- height: auto

### Nav Items
- display: flex
- gap: 32px (8 * 4px base)
- fontSize: 14px
- color: rgba(255,255,255,0.9)

### Dropdown Menus
- backgroundColor: #141414
- border: 1px solid rgba(255,255,255,0.1)
- borderRadius: 12px
- padding: 16px 20px
- boxShadow: 0 8px 32px rgba(0,0,0,0.5)
- minWidth: 600px for model dropdown

### Dropdown Item Groups
- display: flex
- flexDirection: column
- gap: 12px

### Dropdown Links
- fontSize: 14px
- color: rgba(255,255,255,0.7)
- hover: color white
- transition: color 0.2s

## States & Behaviors

### Nav Item Hover
- color: white
- transition: color 0.2s

### Dropdown Open
- opacity: 1
- visibility: visible
- transform: translateY(0)
- transition: all 0.2s ease

### Dropdown Closed
- opacity: 0
- visibility: hidden
- transform: translateY(-8px)

### Login Dropdown
- width: 280px
- right: 0

## Assets
- Logo: SVG or img from downloaded assets
- No additional icons required for nav

## Text Content (verbatim)

### Nav Items
- 模型 (with dropdown)
- 产品 (with dropdown)
- 开放平台 (with dropdown)
- 新闻动态
- 关于我们 (with dropdown)

### Model Dropdown Content
- 文本: MiniMax M2.7, M2.5, M2-Her, M2.1, M2
- 语音: MiniMax Speech 2.8, 2.6, 2.5
- 视频: MiniMax Hailuo 2.3 / 2.3 Fast, Hailuo 02
- 音乐: MiniMax Music 2.6, 2.5+, 2.5, 2.0, 1.5

### Product Dropdown Content
- Agent → agent.minimaxi.com
- 海螺视频 → hailuoai.com
- 语音 → minimaxi.com/audio
- 星野 → xingyeai.com

### Platform Dropdown Content
- 文档中心 → platform.minimaxi.com/docs
- Token Plan → platform.minimaxi.com/subscribe/token-plan
- 产品定价 → platform.minimaxi.com/docs/pricing/overview
- 平台登录 → platform.minimaxi.com/user-center/basic-information

### About Dropdown Content
- 公司介绍 → /about
- 投资者关系 → ir.minimaxi.com
- 加入我们 → /careers

### Login Dropdown Content
- API 开放平台 → platform.minimaxi.com/login
- MiniMax Agent → agent.minimaxi.com
- 海螺视频 → hailuoai.com
- MiniMax 语音 → minimaxi.com/audio

### Language Switcher
- EN → https://www.minimax.io/

## Responsive Behavior
- **Desktop (1440px):** Full nav with all items visible
- **Mobile (390px):** Hamburger menu with collapsible nav
- **Breakpoint:** ~768px
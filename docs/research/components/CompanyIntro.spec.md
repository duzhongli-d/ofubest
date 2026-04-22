# CompanyIntro Component Specification

## Overview
- **Target file:** `src/components/CompanyIntro.tsx`
- **Screenshot:** `docs/design-references/minimaxi-homepage-desktop.png`
- **Interaction model:** Static content

## DOM Structure

```
section (py-20 bg-[#050505])
├── div (max-w-[1440px] mx-auto px-6)
│   ├── div (header - text-center mb-12)
│   │   ├── h2: "MiniMax"
│   │   └── p: "全球领先的通用人工智能科技公司"
│   ├── div (description - max-w-4xl mx-auto text-center)
│   │   └── p: Long paragraph about company mission
│   └── div (stats grid - grid grid-cols-4 gap-8)
│       ├── Stat 1: 0+ 服务国家及地区
│       ├── Stat 2: 0亿+ 全球个人用户
│       ├── Stat 3: 214,000+ 企业客户及开发者
│       └── Stat 4: 0+ 企业服务覆盖国家
```

## Computed Styles

### Section
- padding: 80px 0
- backgroundColor: #050505

### Header
- textAlign: center
- marginBottom: 48px

### Heading
- fontSize: 48px
- fontWeight: 700
- color: white
- marginBottom: 16px

### Subtitle
- fontSize: 20px
- color: rgba(255,255,255,0.6)

### Description
- fontSize: 16px
- lineHeight: 1.8
- color: rgba(255,255,255,0.7)
- maxWidth: 896px (96 * 9.33px)
- margin: 0 auto 64px
- textAlign: left

### Stats Grid
- display: grid
- gridTemplateColumns: repeat(4, 1fr)
- gap: 32px
- padding: 0 48px

### Stat Item
- textAlign: center

### Stat Number
- fontSize: 48px
- fontWeight: 700
- color: white
- marginBottom: 8px

### Stat Label
- fontSize: 14px
- color: rgba(255,255,255,0.5)

## Text Content

### Heading
MiniMax

### Subtitle
全球领先的通用人工智能科技公司

### Description
自2022年初成立以来，我们以"与所有人共创智能"为使命，致力于推动人工智能科技前沿发展，实现通用人工智能（AGI）。MiniMax 自主研发了一系列多模态通用大模型，具备强大的代码和 Agent 能力，以及超长上下文处理能力，能够理解、生成并整合包括文本、音频、图像、视频和音乐在内的多种模态。

基于这些自研模型，我们面向全球推出一系列 AI 原生产品，包括 MiniMax Agent、海螺AI、MiniMax Audio、星野等，以及面向企业和开发者的开放平台，共同为全球用户提供极致的智能体验。

### Stats
1. "0+" - 服务国家及地区
2. "0亿+" - 全球个人用户
3. "214,000+" - 企业客户及开发者
4. "0+" - 企业服务覆盖国家

## Responsive Behavior
- **Desktop (1440px):** 4-column grid, large font sizes
- **Tablet (768px):** 2-column grid (2x2)
- **Mobile (390px):** Single column stack
- **Breakpoint:** ~768px for 2 columns, ~480px for single column
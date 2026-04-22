# Footer Component Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/minimaxi-homepage-desktop.png`
- **Interaction model:** Static with link hover states

## DOM Structure

```
footer (bg-[#0a0a0a] text-white)
├── div (max-w-[1440px] mx-auto px-6 py-16)
│   ├── div (top section - flex justify-between gap-16)
│   │   ├── div (brand column)
│   │   │   ├── img (logo)
│   │   │   ├── p (email: bd@minimax.io)
│   │   │   ├── div (social links)
│   │   │   └── div (WeChat QR codes - 3 images)
│   │   └── div (links grid - grid grid-cols-4 gap-12)
│   │       ├── Links: 研究 (研究文章列表)
│   │       ├── Links: 产品 (产品链接列表)
│   │       ├── Links: 开放平台 (平台链接列表)
│   │       └── Links: 关于我们 (公司链接列表)
│   └── div (bottom section - flex justify-between items-center)
│       ├── p (copyright + legal links)
│       └── div (ICP info)
```

## Computed Styles

### Footer
- backgroundColor: #0a0a0a
- paddingTop: 64px
- paddingBottom: 32px

### Top Section
- display: flex
- justifyContent: space-between
- gap: 64px
- marginBottom: 48px
- paddingBottom: 48px
- borderBottom: 1px solid rgba(255,255,255,0.1)

### Brand Column
- width: 200px

### Logo
- width: 140px
- height: auto
- marginBottom: 24px

### Email
- fontSize: 14px
- color: rgba(255,255,255,0.6)
- marginBottom: 16px

### Social Links
- display: flex
- gap: 16px
- marginBottom: 32px

### Social Icon
- width: 24px
- height: 24px
- color: rgba(255,255,255,0.6)
- hover: color white

### WeChat QR Section
- display: flex
- gap: 16px

### QR Item
- width: 84px
- height: 84px
- backgroundColor: white
- borderRadius: 8px
- padding: 4px

### QR Label
- fontSize: 12px
- color: rgba(255,255,255,0.5)
- textAlign: center
- marginTop: 8px

### Links Grid
- display: grid
- gridTemplateColumns: repeat(4, 1fr)
- gap: 48px

### Link Column
- display: flex
- flexDirection: column
- gap: 16px

### Column Heading
- fontSize: 14px
- fontWeight: 600
- color: white
- marginBottom: 8px

### Link List
- display: flex
- flexDirection: column
- gap: 12px

### Link Item
- fontSize: 14px
- color: rgba(255,255,255,0.6)
- hover: color white
- transition: color 0.2s

### Bottom Section
- display: flex
- justifyContent: space-between
- alignItems: center
- paddingTop: 32px

### Copyright
- fontSize: 12px
- color: rgba(255,255,255,0.4)

### Legal Links
- display: flex
- gap: 24px

### Legal Link
- fontSize: 12px
- color: rgba(255,255,255,0.4)
- hover: color rgba(255,255,255,0.7)

### ICP Info
- display: flex
- alignItems: center
- gap: 8px
- fontSize: 12px
- color: rgba(255,255,255,0.4)

### ICP Icon
- width: 16px
- height: 16px

## Link Content

### 研究 (Research)
- MiniMax M2.7 → /news/minimax-m27-zh
- MiniMax M2.5 → /news/minimax-m25
- MiniMax M2-her → /news/minimax-m2-her-技术深度解析
- MiniMax M2.1 → /news/minimax-m21
- MiniMax M2 → /news/minimax-m2
- MiniMax Speech 2.8 → /news/minimax-speech-28
- MiniMax Hailuo 2.3 → /news/minimax-hailuo-23
- MiniMax Music 2.6 → /news/music-26
- MiniMax Music 2.5+ → /news/music-25-2
- MiniMax Music 2.0 → /news/minimax-music-20

### 产品 (Products)
- Agent → https://agent.minimaxi.com/
- 海螺视频 → https://hailuoai.com/video
- 语音 → https://www.minimaxi.com/audio
- 星野 → https://www.xingyeai.com/

### 开放平台 (Platform)
- 文档中心 → https://platform.minimaxi.com/docs
- Token Plan → https://platform.minimaxi.com/subscribe/token-plan
- 产品定价 → https://platform.minimaxi.com/docs/pricing/overview
- 平台登录 → https://platform.minimaxi.com/user-center/basic-information

### 关于我们 (About)
- 公司介绍 → /about
- 加入我们 → /careers

### Social Links
- GitHub → https://github.com/MiniMax-AI
- HuggingFace → https://huggingface.co/MiniMaxAI
- Discord → https://discord.gg/DPC4AHFCBw

### Legal
- ©上海稀宇科技有限公司 2026 版权所有
- 隐私条款 → https://platform.minimaxi.com/protocol/privacy-policy
- 用户协议 → https://platform.minimaxi.com/protocol/user-agreement
- 涉企侵权举报专用邮箱: qinquan@minimaxi.com
- 沪公网安备 31010402010179号
- 沪ICP备2023003282号-38

## Responsive Behavior
- **Desktop (1440px):** Full 4-column layout
- **Tablet (768px):** 2-column grid for links
- **Mobile (390px):** Single column, QR codes in horizontal scroll
- **Breakpoint:** ~768px
# ofubest Homepage Page Topology

## Section Order (top to bottom)

### 1. Navigation Bar (Fixed)
- **Position:** Fixed top, z-index high
- **Structure:** Logo left, nav items center, language+login right
- **Dropdowns:** 模型, 产品, 开放平台, 关于我们, 新闻动态
- **Interaction:** Hover-triggered dropdown menus

### 2. Hero Carousel (Main)
- **Position:** Flow content, full-width
- **Structure:**
  - Left/right arrow navigation buttons
  - Multiple slides that auto-advance
  - First slide: "ofubest Music 2.6" with 8 genre cards (Cover, Pop, Hyperpop, Electronic, Trap, EDM...)
  - Second slide: "ofubest M2.7" with 3 feature cards
  - Third slide: "2025年全年业绩" with banner image
  - Fourth slide: "Token Plan" with 3 benefit cards
  - Fifth slide: "ofubest Hailuo 2.3"
  - Sixth slide: "ofubest Speech 2.8" with 3 voice sample cards
  - Seventh slide: "ofubest Agent" with banner
  - Eighth slide: "ofubest M2-her" with banner
- **Interaction:** Time-driven auto-play, button-controlled prev/next

### 3. Model Matrix Carousel ("全栈模型矩阵")
- **Position:** Flow content
- **Structure:** Section with heading + carousel of 6 model cards
  - ofubest M2.7 (Text Model)
  - ofubest Music 2.6 (Music Model)
  - Hailuo 2.3 / 2.3 Fast (Video Model)
  - ofubest Speech 2.8 (Audio Model)
  - ofubest M2-her (Text Model)
  - ofubest MCP Server (MCP)
- **Interaction:** Horizontal scroll carousel with prev/next buttons

### 4. Product Matrix ("AI 产品矩阵")
- **Position:** Flow content
- **Structure:** Section with heading + carousel of 5 product cards
  - ofubest Agent
  - 海螺视频 (Hailuo Video)
  - ofubest Audio
  - 海螺视频Agent (NEW)
  - 星野 (Xingye)
- **Interaction:** Horizontal scroll carousel with prev/next buttons

### 5. Company Introduction ("ofubest")
- **Position:** Flow content
- **Structure:**
  - Heading + subtitle
  - Long descriptive paragraph about company
  - 4 statistics: 服务国家及地区 (0+), 全球个人用户 (0亿+), 企业客户及开发者 (214,000+), 企业服务覆盖国家 (0+)
- **Interaction:** Static content

### 6. Footer
- **Position:** Flow content, bottom
- **Structure:**
  - Top: Logo + social links + WeChat QR codes (3 QR images)
  - Middle: 4-column link grid (研究, 产品, 开放平台, 关于我们)
  - Bottom: Copyright + legal links + ICP registration
- **Interaction:** Link hover states, QR code display

## Layout Architecture

- **Container:** Max-width ~1440px centered
- **Section spacing:** Padding-based, sections flow vertically
- **Grid system:** CSS Grid/Flexbox mix
- **Z-index layers:**
  - Navigation: highest
  - Dropdown menus: below nav
  - Hero carousel: flow
  - Modals/dialogs: if any

## Fixed/Sticky Elements

1. **Navigation bar:** Fixed position, always visible on top

## Responsive Breakpoints

- **~768px:** Tablet breakpoint - 2-column grids
- **~390px:** Mobile - single column, likely hamburger nav
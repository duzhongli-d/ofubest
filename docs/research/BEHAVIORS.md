# MiniMax Homepage Behaviors

## Interaction Model Summary

- **Header:** Fixed navigation bar with dropdown menus on hover/click. Language switcher, login dropdown.
- **Hero Carousel:** Horizontal carousel with auto-play (time-driven), manual prev/next buttons. Cards show different models/products.
- **Scroll behavior:** Page scrolls normally, no scroll-snap, no Lenis. Smooth scroll via CSS.
- **Hover states:** Cards with image zoom effects, buttons with opacity/scale transitions.
- **Model cards:** Have hover scale/transform animations.

## Scroll Behavior

- **Scroll behavior:** CSS `scroll-behavior: smooth` on body
- **No Lenis or Locomotive Scroll detected**
- **No scroll-snap containers** found

## Header Behavior

The nav bar is a dropdown menu system:
- "模型" (Models) dropdown shows text/speech/video/music model links
- "产品" (Products) dropdown with Agent, Hailuo Video, Audio, Xingye
- "开放平台" (Platform) dropdown with docs, pricing, login
- "关于我们" (About) dropdown with company info, investors, careers
- Language switcher "EN" links to minimax.io
- Login button reveals a dropdown with platform links

## Hero Carousel

- **Type:** Horizontal carousel with time-based auto-advance
- **Navigation:** Prev/Next buttons on left/right sides
- **Cards per slide:** 8 music genre cards in first slide, 3 feature cards in second
- **Content per slide:** Different products (Music 2.6, M2.7, 2025 performance, Token Plan, Hailuo 2.3, Speech 2.8, Agent, M2-her)
- **Auto-play:** Time-driven, likely ~5 seconds per slide
- **Indicators:** None visible, just prev/next buttons

## Card Hover States

Music genre cards (Cover, Pop, Hyperpop, Electronic, Trap, EDM):
- **Scale:** `scale(1.05)` on hover
- **Duration:** 0.3s or similar transition
- **Images:** Position absolute with overflow hidden

Model feature cards:
- **3D tilt effect:** `perspective(1000px) rotateX/Y` based on mouse position
- **Shadow:** Dynamic shadow based on tilt angle

## No Scroll-Driven Animations

- No IntersectionObserver-triggered animations detected
- No position:sticky elements aside from fixed nav
- No scroll-snap-type containers

## Footer

- Multi-column layout with research links, product links, platform links, about links
- Social media links (GitHub, HuggingFace, Discord)
- WeChat QR codes (3 QR code images)
- Contact email, privacy policy, user agreement links
- ICP registration info

## Color Scheme

From CSS analysis:
- **Primary background:** Not explicitly defined (transparent body)
- **Text colors:** Dark gray/black for headings, medium gray for body
- **Accent colors:** Blue/violet for links and highlights (#6366f1 or similar)
- **Footer:** Dark background (#0a0a0a or similar), white text

## Fonts

- **Primary font:** MiSans, PingFang SC, Microsoft YaHei, Arial, sans-serif
- **No custom Google Fonts detected**
- Chinese language support via system fonts

## Responsive Behavior

- Mobile (390px): Single column layout, hamburger menu expected
- Tablet (768px): 2-column grid for cards
- Desktop (1440px): Full layout with multi-column grids

## Key Animations

1. **Hero card transitions:** Opacity fade between carousel slides
2. **Music genre cards:** Scale + brightness on hover
3. **Feature cards (M2.7 section):** 3D tilt effect on mouse move
4. **Navigation dropdowns:** Fade in/out on hover
5. **Carousel navigation:** Arrow buttons with hover opacity change
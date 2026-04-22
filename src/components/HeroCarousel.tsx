"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Slide data
const slides = [
  {
    id: "music-2-6",
    titleIcon: "/images/hero-title-icon.png",
    heading: "ofubest Music 2.6",
    subtitle: "Cover 翻唱、器乐提升、Agent 集成，让每个人都能成为音乐创作者",
    buttons: [
      { text: "即刻接入API", href: "https://platform.ofubest.com/docs/api-reference/music-generation" },
      { text: "了解更多", href: "/news/music-26" },
    ],
    genreCards: [
      { image: "/images/music-cover.png", label: "Cover", tags: ["New", "翻唱"] },
      { image: "/images/music-pop.png", label: "Pop", tags: ["Pop", "Melody"] },
      { image: "/images/music-hyperpop.png", label: "Hyperpop", tags: ["New", "Dance", "Club"] },
      { image: "/images/music-electronic.png", label: "Electronic", tags: ["New", "Drive", "Sports"] },
      { image: "/images/music-trap.png", label: "Trap", tags: ["New", "Video Scoring"] },
      { image: "/images/music-edm.png", label: "EDM", tags: ["New", "Epic", "Game"] },
      { image: "/images/music-electronic.png", label: "Electronic", tags: ["New", "Drive", "Sports"] },
      { image: "/images/music-pop.png", label: "Pop", tags: ["Pop", "Melody"] },
    ],
  },
  {
    id: "m2-7",
    titleIcon: "/images/m27-title-icon.png",
    heading: "ofubest M2.7",
    subtitle: "开启模型的自我进化，相比 M2.5 在实战能力上有显著的提升",
    buttons: [
      { text: "即刻接入API", href: "https://platform.ofubest.com" },
      { text: "立即体验Agent", href: "/agent" },
      { text: "了解更多", href: "/news/m2-7" },
    ],
    featureCards: [
      { title: "Agent Harness 能力", desc: "构建自我进化的 Agent harness" },
      { title: "强工程与 Coding 能力", desc: "一个真正理解生产系统的模型" },
      { title: "复杂 Office 自动化能力", desc: "支持复杂 Excel / Word / PPT 办公任务及多轮编辑" },
    ],
  },
  {
    id: "performance-2025",
    heading: "2025年全年业绩",
    subtitle: "迈向AI时代的平台型公司",
    linkText: "了解更多",
    linkHref: "/news/2025-performance",
    banner: "/images/model-m27.png",
  },
  {
    id: "token-plan",
    titleIcon: "/images/token-plan-icon.png",
    heading: "Token Plan",
    subtitle: "专为开发者定制的超高性价比 token 套餐",
    buttons: [
      { text: "即刻接入API", href: "https://platform.ofubest.com" },
      { text: "订阅", href: "/token-plan" },
    ],
    benefitCards: [
      { title: "最强模型", desc: "生产级交付" },
      { title: "包月畅用", desc: "不焦虑，越多越划算" },
      { title: "开箱即用", desc: "一键接入主流开发工具" },
    ],
  },
  {
    id: "hailuo-2-3",
    titleIcon: "/images/hailuo23-title-icon.png",
    heading: "ofubest Hailuo 2.3",
    subtitle: "动静皆非凡：极致动态，入微传情",
    links: [
      { text: "即刻体验", href: "/hailuo" },
      { text: "了解更多", href: "/news/hailuo-23" },
      { text: "查看案例", href: "/cases/hailuo" },
    ],
    banner: "/images/model-hailuo23.png",
  },
  {
    id: "speech-2-8",
    titleIcon: "/images/speech28-title-icon.png",
    heading: "ofubest Speech 2.8",
    subtitle: "赋予 AI 语音'人的温度'",
    links: [
      { text: "即刻体验", href: "/speech" },
      { text: "了解更多", href: "/news/speech-28" },
      { text: "API 文档", href: "/docs/api-reference/speech" },
    ],
    voiceSamples: [
      { image: "/images/voice-sample-1.png", label: "睡前低语", tags: ["日语", "ASMR"] },
      { image: "/images/voice-sample-2.png", label: "恐怖故事", tags: ["英语", "恐怖"] },
      { image: "/images/voice-sample-3.png", label: "哥布林的交易", tags: ["英语", "角色"] },
    ],
  },
  {
    id: "agent",
    titleIcon: "/images/agent-title-icon.png",
    heading: "ofubest Agent",
    subtitle: "智能助手，为您的工作和生活提供全方位支持。",
    links: [
      { text: "即刻体验", href: "/agent" },
      { text: "了解更多", href: "/news/agent" },
    ],
    banner: "/images/product-agent.png",
  },
  {
    id: "m2-her",
    titleIcon: "/images/m2her-title-icon.png",
    heading: "ofubest M2-her",
    subtitle: "多角色沉浸扮演，驾驭长轮次复杂场景",
    links: [
      { text: "即刻体验", href: "/m2-her" },
      { text: "了解更多", href: "/news/m2-her" },
    ],
    banner: "/images/model-m2her.png",
  },
]

const INTERVAL_MS = 5000

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    setTransitioning(true)
    setCurrent(index)
    setTimeout(() => setTransitioning(false), 500)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(next, INTERVAL_MS)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered, next])

  return (
    <section
      className="relative w-full overflow-hidden dark:bg-gradient-to-b dark:from-[#0a0a0a] dark:to-[#050505] bg-gradient-to-b from-gray-100 to-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1440px] mx-auto relative overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full dark:bg-white/10 bg-black/10 backdrop-blur-md dark:border-white/20 border-black/20 dark:hover:bg-white/20 hover:bg-black/20 transition-all duration-200 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 dark:dark:text-white text-black text-black" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full dark:bg-white/10 bg-black/10 backdrop-blur-md dark:border-white/20 border-black/20 dark:hover:bg-white/20 hover:bg-black/20 transition-all duration-200 flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 dark:dark:text-white text-black text-black" />
        </button>

        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0"
              style={{ height: "600px" }}
            >
              <SlideContent slide={slide} isActive={index === current} />
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                i === current ? "dark:bg-white bg-black w-6" : "dark:bg-white/30 bg-black/30 hover:dark:bg-white/50 hover:bg-black/50"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SlideContent({ slide, isActive }: { slide: (typeof slides)[0]; isActive: boolean }) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (key: string) => {
    setImageErrors(prev => ({ ...prev, [key]: true }))
  }

  // Slide 1: Music 2.6
  if (slide.id === "music-2-6") {
    return (
      <div className="grid grid-cols-2 gap-12 px-20 py-16 h-full items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold dark:text-white text-black">ofubest</span>
            {slide.titleIcon && (
              <div className="relative w-[44px] h-[44px]">
                {!imageErrors[`titleIcon-${slide.id}`] ? (
                  <Image
                    src={slide.titleIcon}
                    alt=""
                    fill
                    className="object-contain"
                    onError={() => handleImageError(`titleIcon-${slide.id}`)}
                  />
                ) : null}
              </div>
            )}
            <span className="text-3xl font-bold dark:text-white text-black">{slide.heading.replace("ofubest ", "")}</span>
          </div>
          <p className="text-lg dark:text-white/70 text-black/70 max-w-md">{slide.subtitle}</p>
          <div className="flex gap-4 mt-4">
            {slide.buttons?.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10 bg-black/10 hover:bg-black/20 border border-black/10 dark:text-white text-black font-medium transition-all duration-200"
              >
                {btn.text}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {slide.genreCards?.map((card, i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {!imageErrors[`genre-${i}`] ? (
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={() => handleImageError(`genre-${i}`)}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0a0a0a] from-gray-200 to-gray-100" />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t dark:from-black/80 dark:to-transparent from-white/80 to-transparent">
                <span className="text-xs dark:text-white/90 text-black/90 font-medium">{card.label}</span>
                {card.tags && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {card.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-[10px] dark:text-white/60 text-black/60">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Slide 2: M2.7
  if (slide.id === "m2-7") {
    return (
      <div className="grid grid-cols-2 gap-12 px-20 py-16 h-full items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold dark:text-white text-black">ofubest</span>
            {slide.titleIcon && (
              <div className="relative w-[44px] h-[44px]">
                {!imageErrors[`titleIcon-${slide.id}`] ? (
                  <Image
                    src={slide.titleIcon}
                    alt=""
                    fill
                    className="object-contain"
                    onError={() => handleImageError(`titleIcon-${slide.id}`)}
                  />
                ) : null}
              </div>
            )}
            <span className="text-3xl font-bold dark:text-white text-black">{slide.heading.replace("ofubest ", "")}</span>
          </div>
          <p className="text-lg dark:text-white/70 text-black/70 max-w-md">{slide.subtitle}</p>
          <div className="flex gap-4 mt-4 flex-wrap">
            {slide.buttons?.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10 bg-black/10 hover:bg-black/20 border border-black/10 dark:text-white text-black font-medium transition-all duration-200"
              >
                {btn.text}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {slide.featureCards?.map((card, i) => (
            <div
              key={i}
              className="group p-5 rounded-xl dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 bg-black/5 border border-black/10 hover:bg-black/10 transition-all duration-300 hover:translate-x-2"
              style={{ perspective: "1000px" }}
            >
              <div className="transition-transform duration-300 group-hover:rotate-y-3">
                <h3 className="dark:text-white text-black font-semibold text-lg">{card.title}</h3>
                <p className="dark:text-white/60 text-black/60 text-sm mt-1">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Slide 3: 2025 Performance
  if (slide.id === "performance-2025") {
    return (
      <div className="flex flex-col justify-center px-20 py-16 h-full gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold dark:text-white text-black">{slide.heading}</h2>
          <p className="text-lg dark:text-white/70 text-black/70">{slide.subtitle}</p>
          {slide.linkText && (
            <a
              href={slide.linkHref}
              className="inline-flex items-center dark:text-white/70 text-black/70 hover:dark:text-white/70 hover:text-black transition-colors mt-2"
            >
              {slide.linkText}
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
        <div className="relative w-full h-64 rounded-2xl overflow-hidden">
          {!imageErrors["banner"] ? (
            <Image
              src={slide.banner || ""}
              alt="2025 Performance Banner"
              fill
              className="object-cover"
              onError={() => handleImageError("banner")}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r dark:from-[#1a1a1a] dark:to-[#0a0a0a] from-gray-200 to-gray-100 flex items-center justify-center">
              <span className="dark:text-white/40 text-black/40 text-sm">Banner Image</span>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Slide 4: Token Plan
  if (slide.id === "token-plan") {
    return (
      <div className="grid grid-cols-2 gap-12 px-20 py-16 h-full items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold dark:text-white text-black">Token</span>
            {slide.titleIcon && (
              <div className="relative w-[44px] h-[44px]">
                {!imageErrors[`titleIcon-${slide.id}`] ? (
                  <Image
                    src={slide.titleIcon}
                    alt=""
                    fill
                    className="object-contain"
                    onError={() => handleImageError(`titleIcon-${slide.id}`)}
                  />
                ) : null}
              </div>
            )}
            <span className="text-3xl font-bold dark:text-white text-black">Plan</span>
          </div>
          <p className="text-lg dark:text-white/70 text-black/70 max-w-md">{slide.subtitle}</p>
          <div className="flex gap-4 mt-4">
            {slide.buttons?.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10 bg-black/10 hover:bg-black/20 border border-black/10 dark:text-white text-black font-medium transition-all duration-200"
              >
                {btn.text}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {slide.benefitCards?.map((card, i) => (
            <div
              key={i}
              className="p-5 rounded-xl dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 bg-black/5 border border-black/10 hover:bg-black/10 transition-all duration-300"
            >
              <h3 className="dark:text-white text-black font-semibold text-sm">{card.title}</h3>
              <p className="dark:text-white/60 text-black/60 text-xs mt-2">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Slide 5: Hailuo 2.3
  if (slide.id === "hailuo-2-3") {
    return (
      <div className="grid grid-cols-2 gap-12 px-20 py-16 h-full items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold dark:text-white text-black">ofubest</span>
            {slide.titleIcon && (
              <div className="relative w-[44px] h-[44px]">
                {!imageErrors[`titleIcon-${slide.id}`] ? (
                  <Image
                    src={slide.titleIcon}
                    alt=""
                    fill
                    className="object-contain"
                    onError={() => handleImageError(`titleIcon-${slide.id}`)}
                  />
                ) : null}
              </div>
            )}
            <span className="text-3xl font-bold dark:text-white text-black">{slide.heading.replace("ofubest ", "")}</span>
          </div>
          <p className="text-lg dark:text-white/70 text-black/70 max-w-md">{slide.subtitle}</p>
          <div className="flex gap-4 mt-4 flex-wrap">
            {slide.links?.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="inline-flex items-center dark:text-white/70 text-black/70 hover:dark:text-white/70 hover:text-black transition-colors"
              >
                {link.text}
                {i < (slide.links?.length ?? 0) - 1 && <span className="mx-3 dark:text-white/30 text-black/30">|</span>}
              </a>
            ))}
          </div>
        </div>
        <div className="relative h-80 rounded-2xl overflow-hidden group">
          {!imageErrors["banner"] ? (
            <Image
              src={slide.banner || ""}
              alt="Hailuo 2.3"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => handleImageError("banner")}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0a0a0a] from-gray-200 to-gray-100 flex items-center justify-center">
              <span className="dark:text-white/40 text-black/40 text-sm">Hailuo Banner</span>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Slide 6: Speech 2.8
  if (slide.id === "speech-2-8") {
    return (
      <div className="grid grid-cols-2 gap-12 px-20 py-16 h-full items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold dark:text-white text-black">ofubest</span>
            {slide.titleIcon && (
              <div className="relative w-[44px] h-[44px]">
                {!imageErrors[`titleIcon-${slide.id}`] ? (
                  <Image
                    src={slide.titleIcon}
                    alt=""
                    fill
                    className="object-contain"
                    onError={() => handleImageError(`titleIcon-${slide.id}`)}
                  />
                ) : null}
              </div>
            )}
            <span className="text-3xl font-bold dark:text-white text-black">{slide.heading.replace("ofubest ", "")}</span>
          </div>
          <p className="text-lg dark:text-white/70 text-black/70 max-w-md">{slide.subtitle}</p>
          <div className="flex gap-4 mt-4 flex-wrap">
            {slide.links?.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="inline-flex items-center dark:text-white/70 text-black/70 hover:dark:text-white/70 hover:text-black transition-colors"
              >
                {link.text}
                {i < (slide.links?.length ?? 0) - 1 && <span className="mx-3 dark:text-white/30 text-black/30">|</span>}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          {slide.voiceSamples?.map((sample, i) => (
            <div
              key={i}
              className="relative flex-1 aspect-square rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {!imageErrors[`voice-${i}`] ? (
                <Image
                  src={sample.image}
                  alt={sample.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={() => handleImageError(`voice-${i}`)}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0a0a0a] from-gray-200 to-gray-100" />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t dark:from-black/80 dark:to-transparent from-white/80 to-transparent">
                <span className="text-sm dark:text-white/90 text-black/90 font-medium">{sample.label}</span>
                {sample.tags && (
                  <div className="flex gap-1 mt-1">
                    {sample.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-[10px] dark:text-white/60 text-black/60">{tag}{tagIdx < (sample.tags?.length ?? 0) - 1 ? " · " : ""}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Slide 7: Agent
  if (slide.id === "agent") {
    return (
      <div className="flex flex-col justify-center px-20 py-16 h-full gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold dark:text-white text-black">ofubest</span>
            {slide.titleIcon && (
              <div className="relative w-[44px] h-[44px]">
                {!imageErrors[`titleIcon-${slide.id}`] ? (
                  <Image
                    src={slide.titleIcon}
                    alt=""
                    fill
                    className="object-contain"
                    onError={() => handleImageError(`titleIcon-${slide.id}`)}
                  />
                ) : null}
              </div>
            )}
            <span className="text-3xl font-bold dark:text-white text-black">{slide.heading.replace("ofubest ", "")}</span>
          </div>
          <p className="text-lg dark:text-white/70 text-black/70 max-w-lg">{slide.subtitle}</p>
          <div className="flex gap-4 mt-2 flex-wrap">
            {slide.links?.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="inline-flex items-center dark:text-white/70 text-black/70 hover:dark:text-white/70 hover:text-black transition-colors"
              >
                {link.text}
                {i < (slide.links?.length ?? 0) - 1 && <span className="mx-3 dark:text-white/30 text-black/30">|</span>}
              </a>
            ))}
          </div>
        </div>
        <div className="relative w-full h-64 rounded-2xl overflow-hidden group">
          {!imageErrors["banner"] ? (
            <Image
              src={slide.banner || ""}
              alt="Agent Banner"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => handleImageError("banner")}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r dark:from-[#1a1a1a] dark:to-[#0a0a0a] from-gray-200 to-gray-100 flex items-center justify-center">
              <span className="dark:text-white/40 text-black/40 text-sm">Agent Banner</span>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Slide 8: M2-her
  if (slide.id === "m2-her") {
    return (
      <div className="grid grid-cols-2 gap-12 px-20 py-16 h-full items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold dark:text-white text-black">ofubest</span>
            {slide.titleIcon && (
              <div className="relative w-[44px] h-[44px]">
                {!imageErrors[`titleIcon-${slide.id}`] ? (
                  <Image
                    src={slide.titleIcon}
                    alt=""
                    fill
                    className="object-contain"
                    onError={() => handleImageError(`titleIcon-${slide.id}`)}
                  />
                ) : null}
              </div>
            )}
            <span className="text-3xl font-bold dark:text-white text-black">{slide.heading.replace("ofubest ", "")}</span>
          </div>
          <p className="text-lg dark:text-white/70 text-black/70 max-w-md">{slide.subtitle}</p>
          <div className="flex gap-4 mt-4 flex-wrap">
            {slide.links?.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="inline-flex items-center dark:text-white/70 text-black/70 hover:dark:text-white/70 hover:text-black transition-colors"
              >
                {link.text}
                {i < (slide.links?.length ?? 0) - 1 && <span className="mx-3 dark:text-white/30 text-black/30">|</span>}
              </a>
            ))}
          </div>
        </div>
        <div className="relative h-80 rounded-2xl overflow-hidden group">
          {!imageErrors["banner"] ? (
            <Image
              src={slide.banner || ""}
              alt="M2-her"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => handleImageError("banner")}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0a0a0a] from-gray-200 to-gray-100 flex items-center justify-center">
              <span className="dark:text-white/40 text-black/40 text-sm">M2-her Banner</span>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}
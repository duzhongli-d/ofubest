"use client"

import { useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ModelCard {
  title: string
  type: string
  description: string
  link: string
  isNew?: boolean
  image?: string
}

const modelCards: ModelCard[] = [
  {
    title: "ofubest M2.7",
    type: "Text Model",
    description: "模型自我进化，以技术突破驱动生产力革新",
    link: "/news/minimax-m27-zh",
    isNew: true,
  },
  {
    title: "ofubest Music 2.6",
    type: "Music Model",
    description: "翻唱入心，器乐入魂",
    link: "/news/music-26",
    isNew: true,
  },
  {
    title: "Hailuo 2.3 / 2.3 Fast",
    type: "Video Model",
    description: "动静皆非凡：极致动态，入微传情",
    link: "/news/minimax-hailuo-23",
    isNew: true,
  },
  {
    title: "ofubest Speech 2.8",
    type: "Audio Model",
    description: "赋予 AI 语音'人的温度'",
    link: "/news/minimax-speech-28",
    isNew: true,
  },
  {
    title: "ofubest M2-her",
    type: "Text Model",
    description: "多角色沉浸扮演，驾驭长轮次复杂场景",
    link: "/news/minimax-m2-her-技术深度解析",
    isNew: true,
  },
  {
    title: "ofubest MCP Server",
    type: "MCP",
    description: "视频生成、图像生成、语音生成和声音克隆工具现已向开发者开放",
    link: "/news/minimax-mcp",
  },
]

function ModelCardComponent({
  card,
  cardImage,
}: {
  card: ModelCard
  cardImage?: string
}) {
  return (
    <Link
      href={card.link}
      className={cn(
        "flex-shrink-0 w-[280px]",
        "dark:bg-[#141414] bg-gray-200 rounded-2xl overflow-hidden",
        "cursor-pointer transition-all duration-300",
        "hover:translate-y-[-4px] hover:shadow-lg hover:shadow-black/40",
        "block"
      )}
    >
      {/* Card Image */}
      <div className="relative w-full h-[200px] bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
        {cardImage ? (
          <img
            src={cardImage}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full dark:bg-white/10 bg-black/10 flex items-center justify-center">
              <span className="text-2xl font-bold dark:text-white text-black">
                {card.title.charAt(0)}
              </span>
            </div>
          </div>
        )}

        {/* NEW Badge */}
        {card.isNew && (
          <div className="absolute top-3 right-3 bg-primary/90 dark:text-black text-white text-xs px-2 py-1 rounded-full font-medium">
            NEW
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold dark:text-white text-black mb-2">{card.title}</h3>
        <p className="text-xs dark:text-white/50 text-black/50 mb-3">{card.type}</p>
        <p className="text-sm dark:text-white/70 text-black/70 leading-relaxed">
          {card.description}
        </p>
      </div>
    </Link>
  )
}

function ChevronButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right"
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "absolute top-1/2 -translate-y-1/2",
        "w-10 h-10 rounded-full",
        "dark:bg-white/10 bg-black/10 border dark:border-white/20 border-black/20",
        "flex items-center justify-center",
        "transition-all duration-200",
        "hover:dark:bg-white/20 bg-black/20",
        "disabled:opacity-30 disabled:cursor-not-allowed",
        direction === "left" ? "left-0" : "right-0"
      )}
    >
      <svg
        className={cn("w-5 h-5 dark:text-white text-black", direction === "left" ? "" : "rotate-180")}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  )
}

export function ModelMatrixCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 304 // 280px card width + 24px gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-20 dark:bg-[#0a0a0a] bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-semibold dark:text-white text-black mb-3">
            全栈模型矩阵
          </h2>
          <p className="text-base dark:text-white/60 text-black/60 max-w-[600px] mx-auto">
            涵盖文本、语音、视频、图像与音乐五大方向。助力开发者高效构建智能应用
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-12">
          {/* Navigation Buttons */}
          <ChevronButton direction="left" onClick={() => scroll("left")} />
          <ChevronButton direction="right" onClick={() => scroll("right")} />

          {/* Cards Track */}
          <div
            ref={scrollContainerRef}
            className={cn(
              "flex gap-6 overflow-x-auto",
              "scroll-smooth py-2",
              /* Hide scrollbar */
              "scrollbar-width-none",
              "[-ms-overflow-style:none]",
              "[&::-webkit-scrollbar]:hidden"
            )}
          >
            {modelCards.map((card, index) => (
              <ModelCardComponent key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModelMatrixCarousel

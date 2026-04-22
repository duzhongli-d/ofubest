"use client"

import { useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProductCard {
  title: string
  description: string
  link: string
  isNew?: boolean
  image?: string
}

const productCards: ProductCard[] = [
  {
    title: "MiniMax Agent",
    description: "简单指令，创意无限",
    link: "https://agent.minimaxi.com",
  },
  {
    title: "海螺视频",
    description: "每个想法都是一部大片",
    link: "https://hailuoai.com/video",
  },
  {
    title: "MiniMax Audio",
    description: "超拟人AI声音创意",
    link: "https://hailuoai.com/audio",
  },
  {
    title: "海螺视频Agent",
    description: "Vibe Videoing 零门槛，成片直出",
    link: "/news/video-agent",
    isNew: true,
  },
  {
    title: "星野",
    description: "骤入佳境，流连星野",
    link: "https://www.xingyeai.com",
  },
]

function ProductCardComponent({ card }: { card: ProductCard }) {
  return (
    <Link
      href={card.link}
      className={cn(
        "flex-shrink-0 w-[280px] rounded-2xl overflow-hidden cursor-pointer block",
        "dark:bg-[#141414] bg-gray-200"
      )}
    >
      {/* Card Image */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50" />
        {card.image && (
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}

        {/* NEW Badge */}
        {card.isNew && (
          <div className="absolute top-3 left-3 bg-primary/90 dark:text-black text-white text-xs px-2 py-1 rounded-full font-medium">
            NEW
          </div>
        )}

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-lg font-semibold dark:text-white text-black">{card.title}</h3>
        </div>
      </div>

      {/* Card Description */}
      <div className="p-4">
        <p className="text-sm dark:text-white/70 text-black/70">{card.description}</p>
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
        "bg-white/10 border border-white/20",
        "flex items-center justify-center",
        "transition-all duration-200",
        "hover:bg-white/20",
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

export function ProductMatrixCarousel() {
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
    <section className="py-20 bg-black">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-semibold dark:text-white text-black mb-3">
            AI 产品矩阵
          </h2>
          <p className="text-base dark:text-white text-black/60 max-w-[600px] mx-auto">
            从智能对话到视频创作，从声音合成到虚拟角色，MiniMax 为你打造全方位 AI 体验
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
            {productCards.map((card, index) => (
              <ProductCardComponent key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductMatrixCarousel

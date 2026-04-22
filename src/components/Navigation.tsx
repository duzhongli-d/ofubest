"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/ThemeContext"

interface NavItem {
  label: string
  href?: string
  children?: NavItemChild[]
}

interface NavItemChild {
  label: string
  href: string
  description?: string
}

const modelCategories: NavItemChild[] = [
  {
    label: "文本",
    href: "#",
    description: "MiniMax 大语言模型",
  },
  {
    label: "MiniMax M2.7",
    href: "#",
  },
  {
    label: "MiniMax M2.5",
    href: "#",
  },
  {
    label: "MiniMax M2-Her",
    href: "#",
  },
  {
    label: "MiniMax M2.1",
    href: "#",
  },
  {
    label: "MiniMax M2",
    href: "#",
  },
  {
    label: "语音",
    href: "#",
    description: "MiniMax 语音模型",
  },
  {
    label: "MiniMax Speech 2.8",
    href: "#",
  },
  {
    label: "MiniMax Speech 2.6",
    href: "#",
  },
  {
    label: "MiniMax Speech 2.5",
    href: "#",
  },
  {
    label: "视频",
    href: "#",
    description: "MiniMax 视频生成模型",
  },
  {
    label: "Hailuo 2.3",
    href: "#",
  },
  {
    label: "Hailuo 2.3 Fast",
    href: "#",
  },
  {
    label: "Hailuo 02",
    href: "#",
  },
  {
    label: "音乐",
    href: "#",
    description: "MiniMax 音乐生成模型",
  },
  {
    label: "MiniMax Music 2.6",
    href: "#",
  },
  {
    label: "MiniMax Music 2.5+",
    href: "#",
  },
  {
    label: "MiniMax Music 2.5",
    href: "#",
  },
  {
    label: "MiniMax Music 2.0",
    href: "#",
  },
  {
    label: "MiniMax Music 1.5",
    href: "#",
  },
]

const productItems: NavItemChild[] = [
  {
    label: "Agent",
    href: "https://agent.minimaxi.com",
  },
  {
    label: "海螺视频",
    href: "https://hailuoai.com",
  },
  {
    label: "语音",
    href: "https://www.minimaxi.com/audio",
  },
  {
    label: "星野",
    href: "https://xingyeai.com",
  },
]

const platformItems: NavItemChild[] = [
  {
    label: "文档中心",
    href: "https://platform.minimaxi.com/docs",
  },
  {
    label: "Token Plan",
    href: "https://platform.minimaxi.com/subscribe/token-plan",
  },
  {
    label: "产品定价",
    href: "https://platform.minimaxi.com/docs/pricing/overview",
  },
  {
    label: "平台登录",
    href: "https://platform.minimaxi.com/user-center/basic-information",
  },
]

const aboutItems: NavItemChild[] = [
  {
    label: "公司介绍",
    href: "/about",
  },
  {
    label: "投资者关系",
    href: "https://ir.minimaxi.com",
  },
  {
    label: "加入我们",
    href: "/careers",
  },
]

const loginItems: NavItemChild[] = [
  {
    label: "API 开放平台",
    href: "https://platform.minimaxi.com/login",
  },
  {
    label: "MiniMax Agent",
    href: "https://agent.minimaxi.com",
  },
  {
    label: "海螺视频",
    href: "https://hailuoai.com",
  },
  {
    label: "MiniMax 语音",
    href: "https://www.minimaxi.com/audio",
  },
]

const newsItems: NavItemChild[] = [
  {
    label: "最新资讯",
    href: "/news",
  },
]

const navItems: NavItem[] = [
  {
    label: "模型",
    children: modelCategories,
  },
  {
    label: "产品",
    children: productItems,
  },
  {
    label: "开放平台",
    children: platformItems,
  },
  {
    label: "新闻动态",
    children: newsItems,
  },
  {
    label: "关于我们",
    children: aboutItems,
  },
]

function Dropdown({
  children,
  items,
  className,
}: {
  children: React.ReactNode
  items: NavItemChild[]
  className?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseEnter = () => setIsOpen(true)
    const handleMouseLeave = () => setIsOpen(false)

    const wrapper = dropdownRef.current
    if (!wrapper) return

    wrapper.addEventListener("mouseenter", handleMouseEnter)
    wrapper.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      wrapper.removeEventListener("mouseenter", handleMouseEnter)
      wrapper.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      {children}
      <div
        className={cn(
          "absolute top-full left-0 z-50 opacity-0 invisible translate-y-[-8px] transition-all duration-200 ease-out",
          "data-[open=true]:opacity-100 data-[open=true]:visible data-[open=true]:translate-y-0",
          className
        )}
        data-open={isOpen}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div
          className={cn(
            "dark:bg-[#141414] bg-white border dark:border-white/10 border-black/10 rounded-xl shadow-xl p-4",
            "min-w-[600px]"
          )}
        >
          <div className="grid grid-cols-4 gap-x-8 gap-y-3">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200",
                  "block py-1"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function LoginDropdown({
  children,
  items,
}: {
  children: React.ReactNode
  items: NavItemChild[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseEnter = () => setIsOpen(true)
    const handleMouseLeave = () => setIsOpen(false)

    const wrapper = dropdownRef.current
    if (!wrapper) return

    wrapper.addEventListener("mouseenter", handleMouseEnter)
    wrapper.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      wrapper.removeEventListener("mouseenter", handleMouseEnter)
      wrapper.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      {children}
      <div
        className={cn(
          "absolute top-full right-0 z-50 opacity-0 invisible translate-y-[-8px] transition-all duration-200 ease-out",
          "data-[open=true]:opacity-100 data-[open=true]:visible data-[open=true]:translate-y-0"
        )}
        data-open={isOpen}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div
          className={cn(
            "dark:bg-[#141414] bg-white border dark:border-white/10 border-black/10 rounded-xl shadow-xl p-4",
            "w-[280px]"
          )}
        >
          <div className="flex flex-col gap-3">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200",
                  "block py-1"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItemWithDropdown({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseEnter = () => setIsOpen(true)
    const handleMouseLeave = () => setIsOpen(false)

    const wrapper = dropdownRef.current
    if (!wrapper) return

    wrapper.addEventListener("mouseenter", handleMouseEnter)
    wrapper.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      wrapper.removeEventListener("mouseenter", handleMouseEnter)
      wrapper.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className={cn(
          "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200",
          "flex items-center gap-1"
        )}
      >
        {label}
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={cn(
          "absolute top-full left-0 z-50 opacity-0 invisible translate-y-[-8px] transition-all duration-200 ease-out",
          "data-[open=true]:opacity-100 data-[open=true]:visible data-[open=true]:translate-y-0"
        )}
        data-open={isOpen}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </div>
    </div>
  )
}

export function Navigation() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "dark:bg-[#0a0a0a]/80 bg-white/80 backdrop-blur-md",
        "dark:border-white/10 border-black/10",
        "px-6"
      )}
    >
      <div
        className={cn(
          "max-w-[1440px] mx-auto",
          "flex items-center justify-between",
          "h-16"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg
            width="140"
            height="28"
            viewBox="0 0 140 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14z"
              fill="url(#paint0_linear)"
            />
            <text
              x="32"
              y="20"
              fill="white"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fontWeight="bold"
            >
              MiniMax
            </text>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0"
                y1="14"
                x2="28"
                y2="14"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>
        </Link>

        {/* Nav Items */}
        <div className="flex items-center gap-8">
          {navItems.map((item, index) => {
            if (item.href) {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200"
                  )}
                >
                  {item.label}
                </Link>
              )
            }

            if (item.label === "模型") {
              return (
                <NavItemWithDropdown key={index} label={item.label}>
                  <div
                    className={cn(
                      "dark:bg-[#141414] bg-white border dark:border-white/10 border-black/10 rounded-xl shadow-xl p-4",
                      "min-w-[600px]"
                    )}
                  >
                    <div className="grid grid-cols-4 gap-x-8 gap-y-3">
                      {modelCategories.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className={cn(
                            "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200",
                            "block py-1"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavItemWithDropdown>
              )
            }

            if (item.label === "产品") {
              return (
                <NavItemWithDropdown key={index} label={item.label}>
                  <div
                    className={cn(
                      "dark:bg-[#141414] bg-white border dark:border-white/10 border-black/10 rounded-xl shadow-xl p-4",
                      "min-w-[280px]"
                    )}
                  >
                    <div className="flex flex-col gap-3">
                      {productItems.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className={cn(
                            "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200",
                            "block py-1"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavItemWithDropdown>
              )
            }

            if (item.label === "开放平台") {
              return (
                <NavItemWithDropdown key={index} label={item.label}>
                  <div
                    className={cn(
                      "dark:bg-[#141414] bg-white border dark:border-white/10 border-black/10 rounded-xl shadow-xl p-4",
                      "min-w-[280px]"
                    )}
                  >
                    <div className="flex flex-col gap-3">
                      {platformItems.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className={cn(
                            "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200",
                            "block py-1"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavItemWithDropdown>
              )
            }

            if (item.label === "关于我们") {
              return (
                <NavItemWithDropdown key={index} label={item.label}>
                  <div
                    className={cn(
                      "dark:bg-[#141414] bg-white border dark:border-white/10 border-black/10 rounded-xl shadow-xl p-4",
                      "min-w-[200px]"
                    )}
                  >
                    <div className="flex flex-col gap-3">
                      {aboutItems.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className={cn(
                            "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200",
                            "block py-1"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavItemWithDropdown>
              )
            }

            if (item.label === "新闻动态") {
              return (
                <NavItemWithDropdown key={index} label={item.label}>
                  <div
                    className={cn(
                      "dark:bg-[#141414] bg-white border dark:border-white/10 border-black/10 rounded-xl shadow-xl p-4",
                      "min-w-[200px]"
                    )}
                  >
                    <div className="flex flex-col gap-3">
                      {newsItems.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className={cn(
                            "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200",
                            "block py-1"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavItemWithDropdown>
              )
            }

            return null
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={cn(
              "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200",
              "p-1"
            )}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <Link
            href="https://www.minimax.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200"
            )}
          >
            EN
          </Link>

          <LoginDropdown items={loginItems}>
            <button
              className={cn(
                "text-sm dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black transition-colors duration-200",
                "flex items-center gap-1"
              )}
            >
              登录
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </LoginDropdown>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

const researchLinks = [
  { label: "MiniMax M2.7", href: "/news/minimax-m27-zh" },
  { label: "MiniMax M2.5", href: "/news/minimax-m25" },
  { label: "MiniMax M2-her", href: "/news/minimax-m2-her-技术深度解析" },
  { label: "MiniMax M2.1", href: "/news/minimax-m21" },
  { label: "MiniMax M2", href: "/news/minimax-m2" },
  { label: "MiniMax Speech 2.8", href: "/news/minimax-speech-28" },
  { label: "MiniMax Hailuo 2.3", href: "/news/minimax-hailuo-23" },
  { label: "MiniMax Music 2.6", href: "/news/music-26" },
  { label: "MiniMax Music 2.5+", href: "/news/music-25-2" },
  { label: "MiniMax Music 2.0", href: "/news/minimax-music-20" },
]

const productLinks = [
  { label: "Agent", href: "https://agent.minimaxi.com/" },
  { label: "海螺视频", href: "https://hailuoai.com/video" },
  { label: "语音", href: "https://www.minimaxi.com/audio" },
  { label: "星野", href: "https://www.xingyeai.com/" },
]

const platformLinks = [
  { label: "文档中心", href: "https://platform.minimaxi.com/docs" },
  { label: "Token Plan", href: "https://platform.minimaxi.com/subscribe/token-plan" },
  { label: "产品定价", href: "https://platform.minimaxi.com/docs/pricing/overview" },
  { label: "平台登录", href: "https://platform.minimaxi.com/user-center/basic-information" },
]

const aboutLinks = [
  { label: "公司介绍", href: "/about" },
  { label: "加入我们", href: "/careers" },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/MiniMax-AI" },
  { label: "HuggingFace", href: "https://huggingface.co/MiniMaxAI" },
  { label: "Discord", href: "https://discord.gg/DPC4AHFCBw" },
]

const legalLinks = [
  { label: "隐私条款", href: "https://platform.minimaxi.com/protocol/privacy-policy" },
  { label: "用户协议", href: "https://platform.minimaxi.com/protocol/user-agreement" },
]

interface LinkColumnProps {
  heading: string
  links: { label: string; href: string }[]
}

function LinkColumn({ heading, links }: LinkColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-white mb-2">{heading}</h3>
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

function SocialIcon({ label }: { label: string }) {
  // Placeholder squares for social icons
  return (
    <div
      className="w-6 h-6 bg-white/20 rounded flex items-center justify-center"
      title={label}
    >
      <span className="text-xs text-white/60">{label[0]}</span>
    </div>
  )
}

function WeChatQRCode({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[84px] h-[84px] bg-white rounded-lg p-1">
        <div className="w-full h-full bg-white/20 rounded" />
      </div>
      <span className="text-xs text-white/50 text-center">{label}</span>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Top Section */}
        <div className="flex justify-between gap-16 mb-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="w-[200px]">
            {/* Logo */}
            <div className="mb-6">
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
            </div>

            {/* Email */}
            <p className="text-sm text-white/60 mb-4">bd@minimax.io</p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>

            {/* WeChat QR Codes */}
            <div className="flex gap-4">
              <WeChatQRCode label="产品合作" />
              <WeChatQRCode label="开发者" />
              <WeChatQRCode label="商务合作" />
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-4 gap-12 flex-1">
            <LinkColumn heading="研究" links={researchLinks} />
            <LinkColumn heading="产品" links={productLinks} />
            <LinkColumn heading="开放平台" links={platformLinks} />
            <LinkColumn heading="关于我们" links={aboutLinks} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center pt-8">
          {/* Copyright and Legal */}
          <div className="flex flex-col gap-2">
            <p className="text-xs text-white/40">
              ©上海稀宇科技有限公司 2026 版权所有
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:qinquan@minimaxi.com"
                className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                涉企侵权举报专用邮箱: qinquan@minimaxi.com
              </a>
            </div>
          </div>

          {/* ICP Info */}
          <div className="flex items-center gap-2 text-xs text-white/40">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>沪公网安备 31010402010179号</span>
            <span>|</span>
            <span>沪ICP备2023003282号-38</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

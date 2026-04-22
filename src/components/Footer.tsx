"use client"

import Link from "next/link"
import { Logo } from "./Logo"

const researchLinks = [
  { label: "ofubest M2.7", href: "/news/minimax-m27-zh" },
  { label: "ofubest M2.5", href: "/news/minimax-m25" },
  { label: "ofubest M2-her", href: "/news/minimax-m2-her-技术深度解析" },
  { label: "ofubest M2.1", href: "/news/minimax-m21" },
  { label: "ofubest M2", href: "/news/minimax-m2" },
  { label: "ofubest Speech 2.8", href: "/news/minimax-speech-28" },
  { label: "ofubest Hailuo 2.3", href: "/news/minimax-hailuo-23" },
  { label: "ofubest Music 2.6", href: "/news/music-26" },
  { label: "ofubest Music 2.5+", href: "/news/music-25-2" },
  { label: "ofubest Music 2.0", href: "/news/minimax-music-20" },
]

const productLinks = [
  { label: "Agent", href: "https://agent.ofubest.com/" },
  { label: "海螺视频", href: "https://hailuoai.com/video" },
  { label: "语音", href: "https://www.ofubest.com/audio" },
  { label: "星野", href: "https://www.xingyeai.com/" },
]

const platformLinks = [
  { label: "文档中心", href: "https://platform.ofubest.com/docs" },
  { label: "Token Plan", href: "https://platform.ofubest.com/subscribe/token-plan" },
  { label: "产品定价", href: "https://platform.ofubest.com/docs/pricing/overview" },
  { label: "平台登录", href: "https://platform.ofubest.com/user-center/basic-information" },
]

const aboutLinks = [
  { label: "公司介绍", href: "/about" },
  { label: "加入我们", href: "/careers" },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ofubest-AI" },
  { label: "HuggingFace", href: "https://huggingface.co/ofubestAI" },
  { label: "Discord", href: "https://discord.gg/DPC4AHFCBw" },
]

const legalLinks = [
  { label: "隐私条款", href: "https://platform.ofubest.com/protocol/privacy-policy" },
  { label: "用户协议", href: "https://platform.ofubest.com/protocol/user-agreement" },
]

interface LinkColumnProps {
  heading: string
  links: { label: string; href: string }[]
}

function LinkColumn({ heading, links }: LinkColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold dark:text-white text-black mb-2">{heading}</h3>
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm dark:text-white dark:text-white/60 text-black/60 hover:dark:text-white hover:text-black transition-colors duration-200"
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
      className="w-6 h-6 dark:bg-white/20 bg-black/20 rounded flex items-center justify-center"
      title={label}
    >
      <span className="text-xs dark:text-white/60 text-black/60">{label[0]}</span>
    </div>
  )
}

function WeChatQRCode({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[84px] h-[84px] bg-white rounded-lg p-1">
        <div className="w-full h-full dark:bg-white/20 bg-black/20 rounded" />
      </div>
      <span className="text-xs dark:text-white/50 text-black/50 text-center">{label}</span>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="dark:bg-[#0a0a0a] bg-gray-100 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-12 pb-12 border-b dark:border-white/10 border-black/10">
          {/* Brand Column */}
          <div className="w-full lg:w-[200px]">
            {/* Logo */}
            <div className="mb-6">
              <Logo />
            </div>

            {/* Email */}
            <p className="text-sm dark:text-white/60 text-black/60 mb-4">bd@ofubest.io</p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-white dark:text-white/60 text-black/60 hover:dark:text-white hover:text-black transition-colors duration-200"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 flex-1 pl-12 lg:pl-24">
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
            <p className="text-xs dark:text-white/40 text-black/40">
              ©上海稀宇科技有限公司 2026 版权所有
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs dark:text-white/40 text-black/40 hover:dark:text-white/70 hover:text-black transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:qinquan@ofubest.com"
                className="text-xs dark:text-white/40 text-black/40 hover:dark:text-white/70 hover:text-black transition-colors duration-200"
              >
                涉企侵权举报专用邮箱: qinquan@ofubest.com
              </a>
            </div>
          </div>

          {/* ICP Info */}
          <div className="flex items-center gap-2 text-xs dark:text-white/40 text-black/40">
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

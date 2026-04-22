"use client"

import { useTheme } from "@/contexts/ThemeContext"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <svg
      width="140"
      height="36"
      viewBox="0 0 140 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      suppressHydrationWarning
    >
      <defs>
        {/* Cyber gradient for icon */}
        <linearGradient id="cyber-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333EA" />   {/* Purple */}
          <stop offset="50%" stopColor="#3B82F6" />   {/* Blue */}
          <stop offset="100%" stopColor="#06B6D4" />  {/* Cyan */}
        </linearGradient>

        {/* White gradient for dark mode */}
        <linearGradient id="white-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.7" />
        </linearGradient>

        {/* Text gradient for light mode */}
        <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9333EA" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        {/* Glow filter for core */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Icon: Abstract "o" with orbital nodes */}
      <g transform="translate(0, 2)">
        {/* Outer ring */}
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke={isDark ? "url(#white-gradient)" : "url(#cyber-gradient)"}
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />

        {/* Middle ring */}
        <circle
          cx="16"
          cy="16"
          r="10"
          fill="none"
          stroke={isDark ? "url(#white-gradient)" : "url(#cyber-gradient)"}
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Inner ring */}
        <circle
          cx="16"
          cy="16"
          r="6"
          fill={isDark ? "url(#white-gradient)" : "url(#cyber-gradient)"}
          fillOpacity="0.15"
          stroke={isDark ? "url(#white-gradient)" : "url(#cyber-gradient)"}
          strokeWidth="1"
        />

        {/* Orbital node 1 - top */}
        <circle
          cx="16"
          cy="2"
          r="2"
          fill={isDark ? "#FFFFFF" : "url(#cyber-gradient)"}
          filter={isDark ? "url(#glow)" : undefined}
        />

        {/* Orbital node 2 - bottom-left */}
        <circle
          cx="4"
          cy="24"
          r="2"
          fill={isDark ? "#FFFFFF" : "url(#cyber-gradient)"}
          filter={isDark ? "url(#glow)" : undefined}
        />

        {/* Orbital node 3 - bottom-right */}
        <circle
          cx="28"
          cy="24"
          r="2"
          fill={isDark ? "#FFFFFF" : "url(#cyber-gradient)"}
          filter={isDark ? "url(#glow)" : undefined}
        />

        {/* Central core */}
        <circle
          cx="16"
          cy="16"
          r="3"
          fill={isDark ? "url(#white-gradient)" : "url(#cyber-gradient)"}
          filter="url(#glow)"
        />
      </g>

      {/* Text "ofubest" */}
      <text
        x="40"
        y="24"
        fill={isDark ? "#FFFFFF" : "url(#text-gradient)"}
        fontFamily="Geist, system-ui, sans-serif"
        fontSize="18"
        fontWeight="600"
        letterSpacing="0.02em"
      >
        ofubest
      </text>
    </svg>
  )
}

export default Logo
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "light" | "dark"
  size?: "sm" | "md" | "lg" | "xl"
}

export default function GlobalBordersTravelsLogo({ className, variant = "default", size = "md" }: LogoProps) {
  // Size mapping
  const sizeMap = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
    xl: "h-16",
  }

  // Color mapping based on variant
  const getColors = () => {
    switch (variant) {
      case "light":
        return {
          primary: "#ffffff",
          secondary: "#a3e0ff",
          accent: "#4dabf5",
          text: "#ffffff",
        }
      case "dark":
        return {
          primary: "#1e293b",
          secondary: "#0f172a",
          accent: "#3b82f6",
          text: "#e2e8f0",
        }
      default:
        return {
          primary: "#3b82f6", // Blue
          secondary: "#60a5fa",
          accent: "#1d4ed8",
          text: "#1e293b",
        }
    }
  }

  const colors = getColors()

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("relative", sizeMap[size])}>
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-full w-auto")}>
          {/* Globe Base */}
          <circle cx="60" cy="60" r="50" fill={colors.primary} />

          {/* Globe Gradient Overlay */}
          <circle cx="60" cy="60" r="50" fill="url(#globe-gradient)" />

          {/* Globe Grid Lines */}
          <path
            d="M60 10C60 10 60 110 60 110M10 60C10 60 110 60 110 60"
            stroke={colors.secondary}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Latitude Lines */}
          <path
            d="M20 60C20 60 100 60 100 60M30 40C30 40 90 40 90 40M30 80C30 80 90 80 90 80"
            stroke={colors.secondary}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 4"
          />

          {/* Longitude Curves */}
          <path
            d="M60 10C40 10 20 30 20 60C20 90 40 110 60 110"
            stroke={colors.secondary}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 4"
          />

          <path
            d="M60 10C80 10 100 30 100 60C100 90 80 110 60 110"
            stroke={colors.secondary}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 4"
          />

          {/* Flight Path */}
          <path
            d="M30 75C40 65 50 40 70 35C90 30 100 45 95 55"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="0 0"
          />

          {/* Airplane */}
          <g transform="translate(95, 55) rotate(-30)">
            <path d="M0,0 L-8,4 L-6,0 L-8,-4 Z" fill="white" />
          </g>

          {/* Location Pin */}
          <circle cx="30" cy="75" r="3" fill={colors.accent} />
          <circle cx="30" cy="75" r="5" stroke={colors.accent} strokeWidth="1" fill="none" />

          {/* Border Ring */}
          <circle cx="60" cy="60" r="54" stroke={colors.accent} strokeWidth="2.5" fill="none" />

          {/* Defs for gradients */}
          <defs>
            <linearGradient id="globe-gradient" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors.secondary} stopOpacity="0.7" />
              <stop offset="1" stopColor={colors.primary} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        className={cn("flex flex-col", {
          "text-white": variant === "light",
          "text-slate-800 dark:text-white": variant === "default",
          "text-slate-900 dark:text-slate-100": variant === "dark",
        })}
      >
        <span
          className={cn("font-bold leading-tight", {
            "text-sm": size === "sm",
            "text-base": size === "md",
            "text-lg": size === "lg",
            "text-xl": size === "xl",
          })}
        >
          Global Borders
        </span>
        <span
          className={cn("font-light leading-tight", {
            "text-xs": size === "sm",
            "text-sm": size === "md",
            "text-base": size === "lg",
            "text-lg": size === "xl",
          })}
        >
          Travels
        </span>
      </div>
    </div>
  )
}


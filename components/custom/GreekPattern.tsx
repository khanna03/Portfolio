/**
 * Greek Meander Pattern Component
 * 
 * Renders SVG-based geometric patterns inspired by ancient Greek motifs.
 * Supports different variants ("horizontal", "corner", "panel") to be used as subtle background accents.
 */
"use client";

import { cn } from "@/lib/utils";

interface GreekPatternProps {
  className?: string;
  variant?: "horizontal" | "corner" | "panel";
  opacity?: number;
}

export default function GreekPattern({
  className,
  variant = "horizontal",
  opacity = 0.15,
}: GreekPatternProps) {
  if (variant === "horizontal") {
    return (
      <div
        className={cn("w-full h-4 overflow-hidden pointer-events-none select-none", className)}
        style={{ opacity }}
      >
        <svg
          width="100%"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-gold-500 fill-none"
          strokeWidth="1"
        >
          <defs>
            <pattern id="greek-meander" width="40" height="16" patternUnits="userSpaceOnUse">
              <path d="M 0 8 L 24 8 L 24 2 L 12 2 L 12 12 L 32 12 L 32 4 L 40 4" />
            </pattern>
          </defs>
          <rect width="100%" height="16" fill="url(#greek-meander)" />
        </svg>
      </div>
    );
  }

  if (variant === "corner") {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("stroke-gold-500/30 fill-none pointer-events-none select-none", className)}
        strokeWidth="1.5"
        style={{ opacity }}
      >
        {/* Greek meander corner design */}
        <path d="M 2 46 L 2 2 L 46 2 M 6 42 L 6 6 L 42 6 M 10 38 L 10 10 L 38 10 M 14 34 L 14 14 L 34 14 M 18 30 L 18 18 L 30 18" />
      </svg>
    );
  }

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none select-none mix-blend-overlay animate-greek-pulse",
        className
      )}
      style={{ opacity: opacity * 0.5 }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="greek-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 0 30 L 20 30 L 20 10 L 10 10 L 10 20 L 40 20 L 40 40 L 0 40 M 60 30 L 40 30 L 40 50 L 50 50 L 50 40 L 20 40 L 20 60"
              fill="none"
              stroke="url(#gold-gradient)"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43, 85%, 55%)" />
            <stop offset="100%" stopColor="hsl(43, 80%, 42%)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#greek-grid)" />
      </svg>
    </div>
  );
}

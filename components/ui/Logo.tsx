import { cn } from "@/lib/utils";

/**
 * Perceptyne wordmark + brand glyph. The mark is the official Perceptyne
 * shape (same path as the brand asset), rendered solid with a violet→indigo
 * gradient. `dark` = light text for dark backgrounds.
 */
export function Logo({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 262 351"
        className="h-6 w-[18px] shrink-0"
        fill="none"
        aria-hidden
      >
        <path
          d="M102.314 1.30371H159.686C176.213 1.30371 189.658 16.2194 189.658 34.7969V46.9512C189.658 65.9753 203.452 81.4453 220.632 81.4453H231.526C248.054 81.4453 261.5 96.361 261.5 114.938V236.669C261.5 255.246 248.054 270.163 231.526 270.163H220.632C203.452 270.163 189.658 285.632 189.658 304.656V316.811C189.658 335.388 176.213 350.304 159.686 350.304H146.065C129.538 350.304 116.093 335.388 116.093 316.811V301.617C116.093 283.04 129.538 268.124 146.065 268.124H156.961C174.141 268.124 187.935 252.655 187.935 233.631V117.786C187.934 98.7625 174.141 83.293 156.961 83.293H105.039C87.8589 83.293 74.0656 98.7625 74.0654 117.786V128.612C74.0656 147.636 87.8588 163.105 105.039 163.105H115.934C132.461 163.106 145.907 178.021 145.907 196.599V211.791C145.907 230.368 132.461 245.285 115.934 245.285H102.314C85.7869 245.285 72.3419 230.368 72.3418 211.791V199.638C72.3418 180.614 58.5482 165.144 41.3682 165.144H30.4727C13.9453 165.143 0.500169 150.228 0.5 131.65V114.938C0.5 96.3611 13.9452 81.4455 30.4727 81.4453H41.3682C58.5482 81.4453 72.3418 65.9753 72.3418 46.9512V34.7969C72.342 16.2194 85.7869 1.30371 102.314 1.30371Z"
          fill={dark ? "url(#logo_grad_dark)" : "url(#logo_grad)"}
        />
        <defs>
          <linearGradient id="logo_grad" x1="0" y1="0" x2="262" y2="351" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1A1F" />
            <stop offset="1" stopColor="#3A2A6B" />
          </linearGradient>
          <linearGradient id="logo_grad_dark" x1="0" y1="0" x2="262" y2="351" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#C4B5FD" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className={cn(
          "text-[19px] font-semibold tracking-tight",
          dark ? "text-white" : "text-black"
        )}
      >
        Perceptyne<span className="text-violet-400">.</span>
      </span>
    </div>
  );
}

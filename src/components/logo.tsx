import React from "react";

/**
 * Utility function to conditionally join Tailwind class names.
 * Replaces the need for external libraries like clsx or @/lib/utils.
 * @param {...(string | boolean | null | undefined)} inputs
 * @returns {string}
 */
const cn = (...inputs: (string | boolean | null | undefined)[]): string => {
  return inputs.filter(Boolean).join(" ");
};

// --- Component Props Interfaces ---

interface BaseLogoProps {
  className?: string;
  uniColor?: boolean; 
}

interface LogoStrokeProps {
  className?: string;
}

// --- Logo Components ---

/**
 * The main full logo component, featuring an abstract icon and the text 'personal-portfolio'.
 */
export const Logo: React.FC<BaseLogoProps> = ({ className, uniColor }) => {
  return (
    <svg
      viewBox="0 0 180 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "text-gray-900 dark:text-gray-50 h-6 w-auto transition duration-300",
        className
      )}
    >
      <defs>
        <linearGradient
          id="portfolio-logo-gradient"
          x1="0"
          y1="10"
          x2="180" 
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#06B6D4" /> {/* Cyan 500 */}
          <stop offset="1" stopColor="#6366F1" /> {/* Indigo 500 */}
        </linearGradient>
      </defs>

      <path
        d="M9 1 L17 10 L9 19 L1 10 Z"
        fill={uniColor ? "currentColor" : "url(#portfolio-logo-gradient)"}
        stroke={uniColor ? "currentColor" : "none"}
        strokeWidth="1"
      />

      <text
        x="20" // Text start position
        y="15" // Vertical alignment
        className="font-mono font-bold"
        fontSize="14"
        fill="currentColor"
      >
        personal-portfolio
      </text>
    </svg>
  );
};

export const LogoIcon: React.FC<BaseLogoProps> = ({ className, uniColor }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6 transition duration-300", className)}
    >
      <defs>
        <linearGradient
          id="portfolio-icon-gradient"
          x1="0"
          y1="10"
          x2="20"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#06B6D4" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>

      <path
        d="M10 2 L18 10 L10 18 L2 10 Z"
        fill={uniColor ? "currentColor" : "url(#portfolio-icon-gradient)"}
        stroke={uniColor ? "currentColor" : "none"}
        strokeWidth="1"
      />
    </svg>
  );
};

export const LogoStroke: React.FC<LogoStrokeProps> = ({ className }) => {
  return (
    <svg
      className={cn(
        "size-7 w-7 text-gray-900 dark:text-gray-50 transition duration-300",
        className
      )}
      viewBox="0 0 24 24" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L20 6V18L12 22L4 18V6L12 2Z"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

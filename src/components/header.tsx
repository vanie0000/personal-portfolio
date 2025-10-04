'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest: number) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const tailwindClasses = {
    background: "bg-white dark:bg-gray-900",
    mutedForeground: "text-gray-500 dark:text-gray-400",
    accentForeground: "text-gray-900 dark:text-gray-100",
  };

  return (
    <header className="h-20">
      <nav
        data-state={menuState ? "active" : "inactive"}
        className="fixed z-20 w-full pt-2"
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
            scrolled && "bg-white/50 dark:bg-gray-900/50 backdrop-blur-2xl"
          )}
        >
          <motion.div
            key={1}
            // The main container uses justify-between to push the children to the far left and far right
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6",
              scrolled && "lg:py-4"
            )}
          >
            {/* 1. LEFT SIDE: Logo & Mobile Toggle Button */}
            {/* This div only needs to ensure the logo is on the left and the button is visible on mobile */}
            <div className="flex w-full items-center justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                {/* Using conditional class toggling instead of custom data attributes for broader compatibility */}
                <Menu
                  className={cn(
                    "m-auto size-6 duration-200 transition-transform",
                    menuState
                      ? "rotate-180 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 duration-200 transition-transform",
                    menuState
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-180 scale-0 opacity-0"
                  )}
                />
              </button>
            </div>

            {/* 2. RIGHT SIDE: Desktop Navigation Links (Hidden on Mobile) */}
            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        tailwindClasses.mutedForeground,
                        "hover:text-cyan-500 block duration-150"
                      )}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Mobile Menu Overlay Content (Shown only when menuState is active on mobile) */}
            <div
              className={cn(
                tailwindClasses.background,
                "mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:hidden lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
                // Display block on mobile when active, hidden otherwise
                menuState ? "block" : "hidden"
              )}
            >
              {/* This is the mobile list of links */}
              <ul className="space-y-6 text-base">
                {menuItems.map((item, index) => (
                  <li key={index} onClick={() => setMenuState(false)}>
                    <Link
                      href={item.href}
                      className={cn(
                        tailwindClasses.mutedForeground,
                        "hover:text-cyan-500 block duration-150"
                      )}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};
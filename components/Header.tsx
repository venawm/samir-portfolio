"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import { MobileNav } from "./MobileNav";

// Define types for props
interface HeaderProps {
  className?: string;
}

// Define types for navigation item
export interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [header, setHeader] = useState<boolean>(false);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we're scrolling up or down
      if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      // Update header state based on scroll position
      if (currentScrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={`
        ${
          header
            ? "py-3 backdrop-blur-md bg-white/80 dark:bg-accent/90"
            : "py-5 dark:bg-transparent"
        }
        ${!isScrollingUp && "translate-y-[-100%]"}
        sticky top-0 z-30 transition-all duration-300
        ${pathname === "/" && "bg-[#fafafa]/80"}
        ${className}
      `}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Logo />
          </motion.div>

          <div className="flex items-center gap-x-8">
            <Nav
              containerStyles="hidden xl:flex gap-x-10 items-center"
              linkStyles="relative px-2 py-1 text-sm font-medium hover:text-primary transition-all duration-200"
              underlineStyles="absolute left-0 bottom-0 h-[1px] bg-primary w-0 group-hover:w-full transition-all duration-200"
            />

            <div className="flex items-center gap-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThemeToggler />
              </motion.div>

              {/* Mobile Nav */}
              <div className="xl:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle divider that appears when scrolled */}
      <AnimatePresence>
        {header && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-gray-700/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

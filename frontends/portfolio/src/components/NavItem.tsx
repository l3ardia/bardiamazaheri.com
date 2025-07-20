"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export const NavItem = ({ href, children }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <motion.li whileHover={{ y: -2 }} className="mx-2">
      <Link
        href={href}
        className={`px-2 py-1 rounded-md transition-colors duration-300 ${
          isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        {children}
      </Link>
    </motion.li>
  );
};

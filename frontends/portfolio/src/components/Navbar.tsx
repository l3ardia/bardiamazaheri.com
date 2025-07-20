"use client";
import { NavItem } from "@/components/NavItem";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/open-source", label: "Open Source" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">Bardia Mazaheri</Link>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-800" />
        </button>
        <ul className="hidden md:flex">
          {links.map((l) => (
            <NavItem key={l.href} href={l.href}>
              {l.label}
            </NavItem>
          ))}
        </ul>
      </nav>
      {/* mobile menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white px-4 pb-4 space-y-2"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block w-full py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
};

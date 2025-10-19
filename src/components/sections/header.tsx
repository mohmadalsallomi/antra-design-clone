"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '#', label: 'Projects', hasDropdown: true },
  { href: '#', label: 'Pages', hasDropdown: true },
  { href: '#', label: 'Blog', hasDropdown: true },
  { href: '#', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/40 to-transparent">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex h-[80px] items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              OUSUS TEMPLATES
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 text-base font-medium text-white transition-colors hover:text-[#caa05c]"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={16} />}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10">
                    <Search size={18} />
                </button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="text-white">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] transform bg-background transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 h-[80px]">
            <Link href="/" className="text-3xl font-bold text-primary" onClick={() => setIsMenuOpen(false)}>
              OUSUS TEMPLATES
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <X size={32} />
            </button>
        </div>
        <nav className="mt-8 flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 text-2xl text-white transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={20} />}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
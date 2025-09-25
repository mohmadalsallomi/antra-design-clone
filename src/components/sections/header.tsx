"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Search, LayoutGrid, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '#', label: 'Projects', hasDropdown: true },
  { href: '#', label: 'Pages', hasDropdown: true },
  { href: '#', label: 'Blog', hasDropdown: true },
  { href: '#', label: 'Contact Us' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent">
        <div className="mx-auto max-w-[1240px] px-4">
          <div className="flex h-[100px] items-center justify-between">
            <Link href="/" className="text-4xl font-bold text-primary">
              antra
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 text-base font-medium text-white transition-colors hover:text-primary"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={16} />}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
                <a href="tel:+480123678900" className="flex items-center gap-3 text-white">
                    <Phone size={28} className="text-primary" />
                    <div>
                    <p className="text-sm text-gray-300">Call Us Phone</p>
                    <p className="text-base font-semibold">(+480) 123 678 900</p>
                    </div>
                </a>
                <Link
                    href="#"
                    className="rounded-[24px] bg-primary py-4 px-8 text-base font-medium text-primary-foreground transition-transform hover:scale-105"
                >
                    Get A Quote!
                </Link>
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-white transition-colors hover:bg-white/10 hover:border-primary">
                    <Search size={20} />
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-white transition-colors hover:bg-white/10 hover:border-primary">
                    <LayoutGrid size={20} />
                </button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="text-white">
                <Menu size={32} />
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
        <div className="flex items-center justify-between p-5 h-[100px]">
            <Link href="/" className="text-4xl font-bold text-primary" onClick={() => setIsMenuOpen(false)}>
              antra
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
            <div className="mt-8 flex flex-col items-center gap-8">
                <a href="tel:+480123678900" className="flex items-center gap-3 text-white">
                    <Phone size={28} className="text-primary" />
                    <div>
                        <p className="text-sm text-gray-300">Call Us Phone</p>
                        <p className="text-base font-semibold">(+480) 123 678 900</p>
                    </div>
                </a>
                <Link
                    href="#"
                    className="rounded-[24px] bg-primary py-4 px-8 text-base font-medium text-primary-foreground transition-transform hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Get A Quote!
                </Link>
            </div>
        </nav>
      </div>
    </>
  );
}
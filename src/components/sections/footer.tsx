"use client";

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const galleryImages = [
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-8-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-8.jpg" },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-9-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-9.jpg" },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-5-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-5.jpg" },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-6-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-6.jpg" },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-1-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-1.jpg" },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-11-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-11.jpg" },
];

const contactItems = [
  { Icon: MapPin, text: "5609 E Sprague Ave, Spokane Valley, WA 99212, USA", href: "mailto:hello@example.com" },
  { Icon: Phone, text: "+(084) 456-0789", href: "tel:+(084)456-0789" },
  { Icon: Mail, text: "support@example.com", href: "mailto:support@example.com" },
];

const socialLinks = [
  { Icon: Facebook, href: "https://www.facebook.com/themelexus", label: "Facebook" },
  { Icon: Twitter, href: "https://twitter.com/themelexus", label: "Twitter" },
  { Icon: Instagram, href: "https://instagram.com/themelexus", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
];

const Footer: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#caa05c] rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-[#caa05c] rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#caa05c] rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-[#caa05c] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      {/* Main Footer Content */}
      <div className="border-b border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Logo & Tagline */}
            <div className={`space-y-6 lg:col-span-1 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 animate-pulse hover:animate-none">
                  OUSUS TEMPLATE
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#caa05c] to-[#b89551] rounded-full animate-pulse hover:animate-none"></div>
              </div>
              <p className="max-w-xs text-gray-300 text-base leading-relaxed animate-fade-in">
                We Shape Interior Designs, Crafting Timeless and Inspiring Spaces
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-[#caa05c] rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 animate-bounce hover:animate-none"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <link.Icon size={18} className="text-gray-300 hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className={`lg:col-span-1 transform transition-all duration-1200 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h4 className="text-lg font-semibold text-white mb-6 animate-pulse">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { text: "About Us", href: "/about" },
                  { text: "Our Services", href: "/services" },
                  { text: "Portfolio", href: "/portfolio" },
                  { text: "Contact", href: "/contact" },
                  { text: "Blog", href: "/blog" }
                ].map((link, index) => (
                  <li 
                    key={index}
                    className="transform transition-all duration-500 hover:translate-x-2"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-[#caa05c] transition-all duration-300 text-sm hover:scale-105 hover:font-semibold"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className={`lg:col-span-1 transform transition-all duration-1400 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h4 className="text-lg font-semibold text-white mb-6 animate-pulse">Contact Info</h4>
              <ul className="space-y-4">
                {contactItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 transform transition-all duration-500 hover:scale-105"
                    style={{ animationDelay: `${index * 150 + 600}ms` }}
                  >
                    <div className="w-8 h-8 bg-[#caa05c]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 hover:bg-[#caa05c]/40 transition-all duration-300 hover:scale-110">
                      <item.Icon className="text-[#caa05c] hover:rotate-12 transition-transform duration-300" size={16} />
                    </div>
                    <a 
                      href={item.href} 
                      className="text-gray-300 hover:text-[#caa05c] transition-all duration-300 text-sm leading-relaxed hover:scale-105"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Gallery */}
            <div className={`lg:col-span-1 transform transition-all duration-1600 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h4 className="text-lg font-semibold text-white mb-6 animate-pulse">Gallery</h4>
              <div className="grid grid-cols-3 gap-3">
                {galleryImages.slice(0, 6).map((img, index) => (
                  <a 
                    key={index} 
                    href={img.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block overflow-hidden rounded-lg group aspect-square transform transition-all duration-500 hover:scale-110 hover:rotate-3"
                    style={{ animationDelay: `${index * 100 + 800}ms` }}
                  >
                    <Image
                      src={img.src}
                      alt={`Gallery image ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-125 group-hover:brightness-75 group-hover:contrast-110"
                    />
                    <div className="absolute inset-0 bg-[#caa05c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-6 relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className={`text-gray-400 text-sm transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              © 2024 OUSUS TEMPLATE. All rights reserved.
            </div>
            <div className={`text-gray-400 text-sm transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Copyright Mohammed Al Salomi
            </div>
          </div>
        </div>
        
        {/* Floating particles animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-[#caa05c] rounded-full animate-bounce opacity-30" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-8 right-1/3 w-1 h-1 bg-[#caa05c] rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-6 left-2/3 w-1.5 h-1.5 bg-[#caa05c] rounded-full animate-bounce opacity-35" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
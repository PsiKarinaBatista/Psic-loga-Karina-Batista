"use client";
import { useEffect, useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-lg border-b border-neutral-dark/20" 
          : "bg-transparent" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Branding */}
        <Link className="flex items-center gap-3 group" href="/">
          <div className="w-10 h-8 flex items-center justify-center">
            <FiBookOpen 
              className="w-8 h-8 text-primary transition-colors duration-200 group-hover:text-primary-light" 
              aria-hidden="true" 
            />
          </div>
          <div className="transition-transform duration-300 group-hover:translate-x-1">
            <h1 className="text-lg font-semibold text-neutral-dark">
              Karina Batista
            </h1>
            <p className="text-xs text-neutral-dark/70 font-medium tracking-wider">
              Psicologia Integrativa
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "#services", label: "Serviços" },
            { href: "#about", label: "Sobre" },
            { href: "#testimonials", label: "Depoimentos" },
            { href: "#contact", label: "Contato" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group text-neutral-dark/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <div className="w-px h-6 bg-neutral-dark/30 mx-2"></div>

          
        </nav>

        
      </div>
    </header>
  );
}

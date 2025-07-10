"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Soluciones", href: "/solutions" },
  { name: "Innovación + IA", href: "/Innovation" },
  { name: "Proyectos", href: "/Projects" },
  { name: "Por qué IB360", href: "/PorQueIB360" },
  { name: "Soporte 24/7", href: "/Soporte" },
  { name: "Contacto", href: "/Contact" },
];

export function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const shouldBeTransparent = isLandingPage && !isScrolled;

  return (
    <>
      <header className={`fixed top-0 z-30 w-full transition-all duration-300 ${shouldBeTransparent ? 'bg-transparent' : 'bg-white border-b border-[#e0e0e0]'} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-[1230px] mx-auto flex items-center justify-between h-20 px-4">
          <Link href="/">
            <Image
              src={shouldBeTransparent ? "/logo/grupoib360white.png" : "/logo/grupoib360.png"}
              alt="IB360 Logo"
              width={80}
              height={40}
              priority
            />
          </Link>
          {/* Desktop Nav */}
          <nav className="gap-6 text-base items-center hidden min-[951px]:flex">
            {navLinks.map((link) => {
              const isContacto = link.name === "Contacto";
              if (isContacto) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 border-2 border-[#0f4761] text-white bg-[#0f4761] rounded-lg hover:bg-transparent hover:text-[#0f4761] transition-all duration-200 flex items-center"
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    (pathname === link.href || (link.href === "/" && pathname === "/"))
                      ? "text-[#f0952a] flex items-center"
                      : shouldBeTransparent ? "text-white hover:text-[#f0952a] transition-colors flex items-center" : "text-[#646464] hover:text-[#f0952a] transition-colors flex items-center"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          {/* Hamburger Icon for <=950px */}
          <button
            className="min-[951px]:hidden flex items-center justify-center w-10 h-10 ml-2"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">Open menu</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={shouldBeTransparent ? "text-white" : "text-[#0f4761]"}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 h-screen bg-white flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#0f4761]">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => {
              const isContacto = link.name === "Contacto";
              const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isContacto
                      ? "px-6 py-3 border-2 border-[#0f4761] text-white bg-[#0f4761] rounded-lg hover:bg-transparent hover:text-[#0f4761] transition-all duration-200 text-xl"
                      : `text-xl hover:text-[#f0952a] transition-colors ${
                          isActive ? "text-[#f0952a]" : "text-[#646464]"
                        }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}

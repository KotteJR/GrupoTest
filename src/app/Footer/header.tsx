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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 100);
      
      // Show/hide header based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const shouldBeTransparent = isLandingPage && !isScrolled;
  
  return (
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
        <nav className="flex gap-6 text-base font-medium items-center">
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
      </div>
    </header>
  );
}

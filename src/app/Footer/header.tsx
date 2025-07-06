"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Soluciones", href: "/solutions" },
  { name: "Innovación + IA", href: "/Innovation" },
  { name: "Proyectos", href: "/Projects" },
  { name: "Por qué IB360", href: "/PorQueIB360" },
  { name: "Soporte 24/7", href: "/Contact" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 z-30 w-full bg-white border-b border-[#e0e0e0]">
      <div className="max-w-[1230px] mx-auto flex items-center justify-between h-20 px-4">
        <Link href="/">
          <Image
            src="/logo/grupoib360.png"
            alt="IB360 Logo"
            width={80}
            height={40}
            priority
          />
        </Link>
        <nav className="flex gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                (pathname === link.href || (link.href === "/" && pathname === "/"))
                  ? "text-[#f0952a]"
                  : "text-[#646464] hover:text-[#f0952a] transition-colors"
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

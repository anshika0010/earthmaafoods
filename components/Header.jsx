"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiShoppingCart, FiX, FiMenu } from "react-icons/fi";
import earthmaalogoblue from "../assets/images/earthmaalogo(blue).webp";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/productlist", label: "PRODUCTS" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logo, setLogo] = useState(earthmaalogoblue);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      setScrolled(isScrolled);

    
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/35 backdrop-blur-md shadow-sm"
            : "bg-white/50 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 z-10">
              <Image
                src={logo}
                alt="Earthmaa logo"
                width={120}
                height={55}
                className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[155px] h-auto transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation - md and above */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                // Make About & Blog links black regardless of scroll
                const isSpecialPage =
                  pathname === "/about" || pathname === "/blog" || pathname === "/productlist" || pathname === "/productlist/productdetail";
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm lg:text-base font-semibold tracking-wider transition-colors duration-200 group
          ${isSpecialPage ? "text-black" : scrolled ? "text-gray-800" : "text-white"}
          ${pathname === link.href ? "text-sky-400" : "hover:text-sky-400"}`}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-4 lg:gap-5">
              <Link href="/productlist" aria-label="Search">
                <FiSearch
                  className={`text-xl lg:text-2xl cursor-pointer transition-colors duration-200 hover:text-yellow-400 ${
                    scrolled ? "text-gray-800" : "text-black"
                  }`}
                />
              </Link>
              <Link href="/cart" aria-label="Cart">
                <div className="relative">
                  <FiShoppingCart
                    className={`text-xl lg:text-2xl cursor-pointer transition-colors duration-200 hover:text-yellow-400 ${
                      scrolled ? "text-gray-800" : "text-black"
                    }`}
                  />
                  {/* Optional cart badge */}
                  {/* <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span> */}
                </div>
              </Link>
            </div>

            {/* Mobile: Icons + Hamburger */}
            <div className="flex md:hidden items-center gap-4">
              <Link href="/productlist" aria-label="Search">
                <FiSearch className="text-xl text-black cursor-pointer hover:text-yellow-400 transition-colors" />
              </Link>
              <Link href="/cart" aria-label="Cart">
                <FiShoppingCart className="text-xl text-black cursor-pointer hover:text-yellow-400 transition-colors" />
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="text-red-700 p-1 rounded-md hover:bg-white/10 transition-colors"
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <Image
              src={earthmaalogoblue}
              alt="Earthmaa logo"
              width={110}
              height={50}
              className="h-auto"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <FiX size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col px-6 py-6 space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center py-3 px-3 rounded-lg text-sm font-semibold tracking-wider transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-sky-50 text-sky-500"
                    : "text-gray-700 hover:bg-gray-50 hover:text-sky-500"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Bottom Icons */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-gray-100">
            <div className="flex items-center gap-6">
              <Link
                href="/productlist"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-gray-600 hover:text-sky-500 transition-colors text-sm font-medium"
              >
                <FiSearch size={18} /> Search
              </Link>
              <Link
                href="/cart"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-gray-600 hover:text-sky-500 transition-colors text-sm font-medium"
              >
                <FiShoppingCart size={18} /> Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

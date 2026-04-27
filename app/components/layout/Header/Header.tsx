"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

import Container from "@/app/components/ui/Container";
import Button from "../../ui/Button";
import Nav from "./Nav";

import "./Header.css";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    let lastScroll = window.scrollY;
    let ticking = false;
    let pillActive = false;

    const showHeader = () => {
      gsap.to(headerRef.current, {
        y: 0,
        duration: 1,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const hideHeader = () => {
      gsap.to(headerRef.current, {
        y: -120,
        duration: 1,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const activatePill = () => {
      gsap.to(containerRef.current, {
        background: "#ffffff",
        borderRadius: 12,
        paddingLeft: 24,
        paddingRight: 24,
        y: 10,
        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
        duration: 0.35,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const deactivatePill = () => {
      gsap.to(containerRef.current, {
        background: "transparent",
        borderRadius: 0,
        paddingLeft: 0,
        paddingRight: 0,
        y: 0,
        boxShadow: "0 8px 30px rgba(0,0,0,0.0)",
        duration: 0.35,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // header hide/show
          if (currentScroll > lastScroll && currentScroll > 120) {
            hideHeader();
          } else {
            showHeader();
          }

          // pill activation
          if (currentScroll > 40 && !pillActive) {
            activatePill();
            pillActive = true;
          }

          if (currentScroll <= 40 && pillActive) {
            deactivatePill();
            pillActive = false;
          }

          lastScroll = currentScroll;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Reset state on page navigation
   */
  useEffect(() => {
    gsap.set(headerRef.current, { y: 0 });

    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className="fixed top-1 left-0 z-[999] w-full px-(--container-padding)">
      <Container className="header-container flex items-center justify-between h-16">
        <div
          ref={containerRef}
          className="flex items-center justify-between w-full h-full">
          <Link href="/">
            <img
              src="/logos/logo.svg"
              alt="Logo"
              className="w-full h-10 object-cover"
              width={300}
              height={45}
            />
          </Link>

          <Nav />

          <Button
            path="/contact-us/"
            content="Reserve Your Date"
          />
        </div>
      </Container>
    </header>
  );
}

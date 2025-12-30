"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import { services } from "app/lib/data/servicesData";
import GrainOverlay from "./GrainOverlay";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !scrollerRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".card");

    const scrollTween = gsap.to(scrollerRef.current, {
      x: () => -(scrollerRef.current!.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollerRef.current!.scrollWidth}`,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card) => {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: card,
          start: "left 85%",
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="h-screen flex items-center overflow-hidden"
      >
        <GrainOverlay />
        <div
          ref={scrollerRef}
          className="flex items-center h-full px-[10vw] gap-16"
        >
          {/* Title block */}
          <div className="min-w-[45vw] pr-[10vw]">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-6">
              Strategic Systems // 2024
            </span>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.9] uppercase border-l-4 border-neutral-600 pl-8">
              Core <br /> Services
            </h1>
          </div>

          {/* Cards from JSON */}
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={service.id}
              title={service.title}
              description={service.description}
              isLast={index === services.length - 1}
            />
          ))}

          <div className="min-w-[45vw] pr-[10vw]">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-6">
              Strategic Systems // 2024
            </span>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.9] uppercase border-l-4 border-neutral-600 pl-8">
              Core <br /> Services
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

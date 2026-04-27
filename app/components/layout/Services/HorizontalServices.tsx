"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import { services } from "app/lib/data/servicesData";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !scrollerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".card", sectionRef.current);

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
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center overflow-hidden"
    >
      <div
        ref={scrollerRef}
        className="flex items-center h-full px-[10vw] gap-9"
      >
        <div className="min-w-[45vw] pr-[10vw]">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-6">
            Strategic Systems // 2024
          </span>

          <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.9] uppercase border-l-4 border-neutral-600 pl-8">
            Core <br /> Services
          </h1>
        </div>

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
            link={service.slug}
          />
        ))}
      </div>
    </section>
  );
}
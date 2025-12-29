"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { TESTIMONIALS, Icons } from "./constants";
import GlareCard from "./TestimonialsCard";
import gsap from "gsap";
import styles from "./Testimonials.module.css";

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const scrubberRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isHoveringCards, setIsHoveringCards] = useState(false);

  const dragInfo = useRef({
    startX: 0,
    scrollLeft: 0,
    isDown: false,
    velocity: 0,
    lastX: 0,
    lastTimestamp: 0,
  });

  const scrubberDragInfo = useRef({
    isDown: false,
    startX: 0,
    startScrollLeft: 0,
  });

  // GSAP QuickSetters for Cursor Performance
  const xTo = useRef<Function | null>(null);
  const yTo = useRef<Function | null>(null);

  useEffect(() => {
    if (cursorRef.current) {
      xTo.current = gsap.quickTo(cursorRef.current, "x", {
        duration: 0.3,
        ease: "power2.out",
      });
      yTo.current = gsap.quickTo(cursorRef.current, "y", {
        duration: 0.3,
        ease: "power2.out",
      });
    }

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (xTo.current && yTo.current) {
        xTo.current(e.clientX);
        yTo.current(e.clientY);
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  const updateActiveIndex = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const center = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    const children = Array.from(container.children) as HTMLElement[];
    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(center - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
    return closestIndex;
  }, [activeIndex]);

  const scrollTo = (index: number, duration = 1.2, ease = "expo.out") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    const safeIndex = Math.max(0, Math.min(index, TESTIMONIALS.length - 1));

    if (children[safeIndex]) {
      const targetChild = children[safeIndex];
      const scrollPos =
        targetChild.offsetLeft -
        (container.offsetWidth - targetChild.offsetWidth) / 2;

      gsap.to(container, {
        scrollLeft: scrollPos,
        duration: duration,
        ease: ease,
        onUpdate: updateActiveIndex,
        overwrite: true,
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    dragInfo.current.isDown = true;
    dragInfo.current.startX = e.pageX - scrollContainerRef.current.offsetLeft;
    dragInfo.current.scrollLeft = scrollContainerRef.current.scrollLeft;
    dragInfo.current.lastX = e.pageX;
    dragInfo.current.lastTimestamp = Date.now();
    dragInfo.current.velocity = 0;

    setIsDragging(true);

    gsap.killTweensOf(scrollContainerRef.current);
    gsap.to(cursorRef.current, {
      scale: 0.8,
      backgroundColor: "rgba(248, 207, 255, 0.2)",
      duration: 0.3,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragInfo.current.isDown || !scrollContainerRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - dragInfo.current.startX) * 1.5;

    const now = Date.now();
    const dt = now - dragInfo.current.lastTimestamp;
    if (dt > 0) {
      dragInfo.current.velocity = (e.pageX - dragInfo.current.lastX) / dt;
    }
    dragInfo.current.lastX = e.pageX;
    dragInfo.current.lastTimestamp = now;

    scrollContainerRef.current.scrollLeft = dragInfo.current.scrollLeft - walk;
    updateActiveIndex();
  };

  const handleMouseUp = () => {
    if (!dragInfo.current.isDown) return;
    dragInfo.current.isDown = false;
    setIsDragging(false);

    const vel = dragInfo.current.velocity;
    let targetIndex = activeIndex;

    if (Math.abs(vel) > 0.5) {
      targetIndex = vel > 0 ? activeIndex - 1 : activeIndex + 1;
    }

    targetIndex = Math.max(0, Math.min(targetIndex, TESTIMONIALS.length - 1));

    const duration = Math.min(1.8, Math.max(0.8, 2 / (Math.abs(vel) + 1)));
    scrollTo(targetIndex, duration, "power4.out");

    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      duration: 0.3,
    });
  };

  const handleScrubberMouseDown = (e: React.MouseEvent) => {
    scrubberDragInfo.current.isDown = true;
    scrubberDragInfo.current.startX = e.pageX;
    if (scrollContainerRef.current) {
      scrubberDragInfo.current.startScrollLeft =
        scrollContainerRef.current.scrollLeft;
    }
    gsap.killTweensOf(scrollContainerRef.current);
    gsap.to(scrubberRef.current, {
      scale: 1.05,
      duration: 0.4,
      ease: "back.out",
    });
  };

  const handleScrubberMouseMove = (e: React.MouseEvent) => {
    if (
      !scrubberDragInfo.current.isDown ||
      !scrollContainerRef.current ||
      !scrubberRef.current
    )
      return;

    const scrubberWidth = scrubberRef.current.offsetWidth;
    const dx = e.pageX - scrubberDragInfo.current.startX;

    const maxScroll =
      scrollContainerRef.current.scrollWidth -
      scrollContainerRef.current.offsetWidth;
    const moveRatio = maxScroll / (scrubberWidth * 0.4);

    const targetScroll =
      scrubberDragInfo.current.startScrollLeft + dx * moveRatio;
    scrollContainerRef.current.scrollLeft = targetScroll;
    updateActiveIndex();
  };

  const handleScrubberMouseUp = () => {
    if (!scrubberDragInfo.current.isDown) return;
    scrubberDragInfo.current.isDown = false;
    gsap.to(scrubberRef.current, { scale: 1, duration: 0.4 });
    scrollTo(activeIndex, 1.2, "expo.out");
  };

  return (
    <div className="relative w-full overflow-visible py-10 bg-lblack">
      {/* GSAP Powered Custom Cursor */}
      <div
        ref={cursorRef}
        id="custom-cursor"
        className={`${styles.customCursor} fixed top-0 left-0 z-[100] w-18 h-18 -ml-12 -mt-12 border border-black/10 bg-black/5 backdrop-blur-md rounded-full flex flex-col items-center justify-center pointer-events-none transition-opacity duration-500 ${
          isHoveringCards ? "opacity-100" : "opacity-0 scale-0"
        } hidden lg:flex`}
      >
        <span className={styles.teimonialsDragText}>
          {isDragging ? "Slide" : "Drag"}
        </span>
        <div className="flex gap-1 mt-1">
          <div
            className={`w-1 h-1 rounded-full bg-(--brandColor)/40 transition-all duration-300 ${
              isDragging ? "w-4" : "w-1"
            }`}
          />
        </div>
      </div>

      {/* Main Card Carousel */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          handleMouseUp();
          setIsHoveringCards(false);
        }}
        onMouseEnter={() => setIsHoveringCards(true)}
        className={`
          flex gap-10 md:gap-16 px-[24px] md:px-[15vw] lg:px-[20vw] overflow-x-auto ${styles.noScrollbar}
          ${isHoveringCards ? "cursor-none" : ""}
        `}
        style={{
          scrollSnapType: "none",
          touchAction: "pan-y",
        }}
      >
        {TESTIMONIALS.map((t, idx) => (
          <div key={t.id} className="py-10 shrink-0 select-none">
            <GlareCard testimonial={t} isActive={idx === activeIndex} />
          </div>
        ))}
      </div>

      {/* Tactical Dial / Scrubber Navigation */}
      <div className="container mx-auto px-10 mt-12 flex flex-col items-center gap-14">
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollTo(activeIndex - 1)}
            className={`group p-4 border border-black/20 rounded-full transition-all duration-700 relative overflow-hidden ${
              activeIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:border-(--brandColor)/50 text-black/30 cursor-pointer hover:scale-110 active:scale-60"
            }`}
            disabled={activeIndex === 0}
            onMouseEnter={() => setIsHoveringCards(false)}
          >
            <div className="absolute inset-0 bg-(--brandColor)/5 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
            <Icons.ChevronLeft />
          </button>

          {/* Luxury Scrubber / Ruler Dial Area */}
          <div
            ref={scrubberRef}
            onMouseDown={handleScrubberMouseDown}
            onMouseMove={handleScrubberMouseMove}
            onMouseUp={handleScrubberMouseUp}
            onMouseLeave={handleScrubberMouseUp}
            className="relative flex items-center justify-center rounded-full px-12 cursor-ew-resize select-none bg-black/[0.03] border border-black/[0.1]  group/scrubber"
          >
            {/* Focal Point Indicator */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-(--brandColor) shadow-[0_0_10px_rgba(212,175,55,0.5)] z-20" />

            <div className="flex items-center gap-2 transition-all duration-500">
              {TESTIMONIALS.map((_, i) => (
                <React.Fragment key={`group-${i}`}>
                  {/* Main Slide Line */}
                  <div
                    onClick={() => scrollTo(i)}
                    className="relative flex flex-col items-center gap-1 cursor-pointer group/line"
                  >
                    <div
                      className={`w-[1px] transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
                        i === activeIndex
                          ? "h-6 bg-(--brandColor) shadow-[0_0_20px_rgba(212,175,55,0.8)] scale-y-110"
                          : "h-4 bg-black/10 group-hover/line:bg-black/30"
                      }`}
                    />
                    <span
                      className={`text-[8px] font-mono tracking-tighter transition-opacity duration-700 ${
                        i === activeIndex
                          ? "text-gold opacity-100"
                          : "text-black/20 opacity-40"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* Sub-ticks and Dots between main lines */}
                  {i < TESTIMONIALS.length - 1 && (
                    <div className="flex items-center gap-1 px-1">
                      <div className="w-[1px] h-2 bg-black/20" />
                      <div className="w-[2px] h-[2px] rounded-full bg-black/20" />
                      <div className="w-[1px] h-3 bg-black/[0.2]" />
                      <div className="w-[2px] h-[2px] rounded-full bg-black/20" />
                      <div className="w-[1px] h-2 bg-black/20" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Scrubber Label */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.6em] text-black/50 uppercase font-bold">
              Adjust Focus
            </div>
          </div>

          <button
            onClick={() => scrollTo(activeIndex + 1)}
            className={`group p-4 border border-black/20 rounded-full transition-all duration-700 relative overflow-hidden ${
              activeIndex === TESTIMONIALS.length - 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:border-(--brandColor)/50 text-black/30 cursor-pointer hover:scale-110 active:scale-60"
            }`}
            disabled={activeIndex === TESTIMONIALS.length - 1}
            onMouseEnter={() => setIsHoveringCards(false)}
          >
            <div className="absolute inset-0 bg-(--brandColor)/5 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
            <Icons.ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;

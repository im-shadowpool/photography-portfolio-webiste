"use client";

import React, { useRef, useState, useCallback } from "react";
import { Icons } from "./constants";
import Button from "../../ui/Button";
import styles from "./Testimonials.module.css";

export interface Testimonial {
  id: number;
  author: string;
  quote: string;
  service: string;
  location: string;
  icon: string;
  avatar: string;
  metadata: {
    iso: string;
    shutter: string;
    aperture: string;
    lens: string;
  };
}

interface GlareCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const GlareCard: React.FC<GlareCardProps> = ({ testimonial, isActive }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !isActive) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlare({ x: glareX, y: glareY, opacity: 1 });
    },
    [isActive]
  );

  const handleMouseLeave = useCallback(() => {
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative shrink-0 w-[calc(100vw-48px)] md:w-[680px] lg:w-[840px]
        bg-[#fff] rounded-sm p-12
        select-none border border-black/[0.03] flex flex-col justify-between overflow-hidden
        transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)
        ${
          isActive
            ? "opacity-100 scale-100 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)]"
            : "opacity-60 scale-[0.88] blur-[3px] "
        }
      `}
    >
      {/* Viewfinder Corners */}
      <div className="absolute top-7 left-7 w-6 h-6 border-t border-l border-black/20 pointer-events-none" />
      <div className="absolute top-7 right-7 w-6 h-6 border-t border-r border-black/20 pointer-events-none" />
      <div className="absolute bottom-7 left-7 w-6 h-6 border-b border-l border-black/20 pointer-events-none" />
      <div className="absolute bottom-7 right-7 w-6 h-6 border-b border-r border-black/20 pointer-events-none" />

      {/* Focus Center Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-24 w-8 h-8 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-0 w-full h-px bg-black" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-black rounded-sm" />
      </div>

      {/* Camera Metadata Bar (Top) */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-8 items-center pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className={`font-mono ${styles.cameraMetaBarTop}`}>REC</span>
        </div>
        <div className="h-2 w-px bg-white/10" />
        <span className={`font-mono ${styles.cameraMetaBarTop}`}>Mode M</span>
        <div className="h-2 w-px bg-white/10" />
        <span className={`font-mono ${styles.cameraMetaBarTop}`}>
          {testimonial.metadata.lens}
        </span>
      </div>

      {/* Dynamic Reflection */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(216, 241, 255, 0.3) 0%, transparent 60%)`,
          opacity: glare.opacity,
        }}
      />

      <div className="relative z-10 pt-2 mb-8">
        <div className="mb-4">
          <Icons.Quote />
        </div>
        <p className={`font-serif max-w-[98%] ${styles.testimonialQuote}`}>
          {testimonial.quote}
        </p>
      </div>

      <div className="z-10 border-t border-black/[0.1] py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="flex items-center gap-6">
            <div className="shrink-0 relative">
              <div className="absolute inset-0 rounded-full border border-black/40 scale-110" />
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover"
              />
            </div>
            <div className={`${styles.testimonialAuthorInfo} flex flex-col gap-2`}>
              <h4>{testimonial.author}</h4>
              <div className="flex items-center gap-2">
                <Icons.Camera />
                <span>{testimonial.service}</span>
              </div>
            </div>
          </div>

          <Button path="/contact/" content="View Album" />
        </div>

        {/* Exposure Metadata Row */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2  flex justify-center gap-12  text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase">
          <div className="flex items-center gap-4">
            <span className={`font-mono ${styles.cameraMetaBarTop}`}>ISO</span>
            <span className={`font-mono ${styles.cameraMetaBarTop}`}>{testimonial.metadata.iso}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className={`font-mono ${styles.cameraMetaBarTop}`}>Speed</span>
            <span className={`font-mono ${styles.cameraMetaBarTop}`}>
              {testimonial.metadata.shutter}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className={`font-mono ${styles.cameraMetaBarTop}`}>Aperture</span>
            <span className={`font-mono ${styles.cameraMetaBarTop}`}>
              {testimonial.metadata.aperture}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlareCard;

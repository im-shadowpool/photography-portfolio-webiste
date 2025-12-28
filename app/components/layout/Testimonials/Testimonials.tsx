"use client";

import { useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";

export default function FilmTestimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const handle = handleRef.current;
    if (!container || !handle) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const updateScrubber = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const percentage = (container.scrollLeft / maxScroll) * 100;
      handle.style.left = `${Math.min(Math.max(percentage, 0), 90)}%`;
    };

    const mouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = "grabbing";
    };

    const mouseLeave = () => {
      isDown = false;
      container.style.cursor = "grab";
    };

    const mouseUp = () => {
      isDown = false;
      container.style.cursor = "grab";
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
      updateScrubber();
    };

    const wheelScroll = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
        updateScrubber();
      }
    };

    container.addEventListener("mousedown", mouseDown);
    container.addEventListener("mouseleave", mouseLeave);
    container.addEventListener("mouseup", mouseUp);
    container.addEventListener("mousemove", mouseMove);
    container.addEventListener("wheel", wheelScroll, { passive: false });

    // Intersection animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(`.${styles.filmFrame}`)
              .forEach((frame, i) => {
                setTimeout(() => {
                  (frame as HTMLElement).style.opacity = "1";
                  (frame as HTMLElement).style.transform = "translateX(0)";
                }, i * 150);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      container.removeEventListener("mousedown", mouseDown);
      container.removeEventListener("mouseleave", mouseLeave);
      container.removeEventListener("mouseup", mouseUp);
      container.removeEventListener("mousemove", mouseMove);
      container.removeEventListener("wheel", wheelScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.section}>
      {/* Grain Overlay */}
      <svg className={styles.grain} viewBox="0 0 200 200">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves={3}
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <header className={styles.header}>
        <span className={styles.sub}>Negative Sequence // 001-004</span>
        <h2>
          Silver <br />
          Halide <br />
          Voices.
        </h2>
      </header>

      <div className={styles.strip} ref={containerRef}>
        <div className={styles.track}>
          {TESTIMONIALS.map((item) => (
            <div className={styles.filmFrame} key={item.exp}>
              <div className={styles.meta}>
                <span>{item.meta}</span>
                <span className={styles.exp}>{item.exp}</span>
              </div>

              <blockquote className={styles.text}>
                {item.text}
              </blockquote>

              <div className={styles.client}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.role}>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.scrubber}>
          <div className={styles.handle} ref={handleRef} />
        </div>
        <span className={styles.hint}>SCROLL TO ADVANCE</span>
      </div>
    </div>
  );
}

const TESTIMONIALS = [
  {
    meta: "ISO 400 / 35MM",
    exp: "EXP 01",
    text:
      "The way light is captured here isn't just technical—it's visceral. A master of the gelatin-silver aesthetic in a digital world.",
    name: "ELARA VANCE",
    role: "Creative Director",
  },
  {
    meta: "F/2.8 / 1/250",
    exp: "EXP 02",
    text:
      "Rarely do you find a photographer who understands the gravity of shadows. These frames feel like found artifacts.",
    name: "JULIAN MORO",
    role: "Gallerist",
  },
  {
    meta: "ISO 100 / PAN-X",
    exp: "EXP 03",
    text:
      "Every sequence tells a story that words fail to articulate. The texture of the grain brings unmatched depth.",
    name: "MARCUS REED",
    role: "Fashion Lead",
  },
  {
    meta: "T-MAX / DEVELOPED",
    exp: "EXP 04",
    text:
      "In an era of disposable imagery, these portraits carry permanence. Exceptional eye for composition.",
    name: "SARA JENKINS",
    role: "Visual Editor",
  },
];

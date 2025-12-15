"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import Image from "next/image";

gsap.registerPlugin(CustomEase);

CustomEase.create("elasticEase", "0.34, 2, 0.64, 1");

export default function ResultsCards() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(
      containerRef.current.querySelectorAll(".results-card")
    );

    // helper → controlled randomness
    const getRandomState = () => ({
      x: gsap.utils.random(-24, 24),
      r: gsap.utils.random(-6, 6),
    });

    // init state per card
    cards.forEach((card) => {
      const state = getRandomState();
      card.dataset.x = String(state.x);
      card.dataset.r = String(state.r);

      gsap.set(card, {
        x: state.x,
        rotation: state.r,
        scale: 1,
      });
    });

    cards.forEach((card, index) => {
      // hover in
      card.addEventListener("mouseenter", () => {
        cards.forEach((otherCard, i) => {
          if (otherCard === card) {
            gsap.to(otherCard, {
              x: 0,
              rotation: 0,
              scale: 1,
              duration: 0.35,
              ease: "elasticEase",
            });
          } else {
            const direction = i < index ? -1 : 1;

            gsap.to(otherCard, {
              x: Number(otherCard.dataset.x) + direction * 30,
              rotation: Number(otherCard.dataset.r),
              scale: 0.98,
              duration: 0.35,
              ease: "elasticEase",
            });
          }
        });
      });

      // hover out
      card.addEventListener("mouseleave", () => {
        // ONLY hovered card gets new randomness
        const newState = getRandomState();
        card.dataset.x = String(newState.x);
        card.dataset.r = String(newState.r);

        cards.forEach((otherCard) => {
          const x =
            otherCard === card ? newState.x : Number(otherCard.dataset.x);

          const r =
            otherCard === card ? newState.r : Number(otherCard.dataset.r);

          gsap.to(otherCard, {
            x,
            rotation: r,
            scale: 1,
            duration: 0.35,
            ease: "elasticEase",
          });
        });
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="results-container relative flex w-full justify-center p-8"
    >
      <div className="results-card aspect-[4.8/6.2] w-[36rem] rounded-[2em] relative overflow-hidden will-change-transform cursor-pointer bg-[#0d8dff]">
        <div className="results-content flex h-full flex-col justify-between p-8">
          <h3 className="results-heading">100+</h3>
          <div className="flex flex-col gap-2 items-start">
            <p>Organische views</p>
            <div className="results-divider" />
            <p>Groei door slimme content</p>
          </div>
        </div>
      </div>
      <div className="results-card aspect-[4.8/6.2] w-[36rem] rounded-[2em] relative overflow-hidden will-change-transform cursor-pointer">
        <Image
          src="/results_section/results-2.jpg"
          alt="Sample"
          fill
          className="object-cover"
        />
      </div>
      <div className="results-card aspect-[4.8/6.2] w-[36rem] rounded-[2em] relative overflow-hidden will-change-transform cursor-pointer bg-[#33c791]">
        <div className="results-content flex h-full flex-col justify-between p-8">
          <h3 className="results-heading">20+</h3>
          <div className="flex flex-col gap-2 items-start">
            <p>Organische views</p>
            <div className="results-divider" />
            <p>Groei door slimme content</p>
          </div>
        </div>
      </div>
      <div className="results-card aspect-[4.8/6.2] w-[36rem] rounded-[2em] relative overflow-hidden will-change-transform cursor-pointer">
        <Image
          src="/results_section/results-1.jpg"
          alt="Sample"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

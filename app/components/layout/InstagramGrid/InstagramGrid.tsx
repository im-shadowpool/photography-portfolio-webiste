"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./InstagramGrid.module.css";

/* ---------------------------------------
   CONFIG
--------------------------------------- */
const NUM_CARDS = 8;
const IMAGES_PER_CARD = 4;
const INTERVAL = 5000;

const INSTAGRAM_HANDLE = "@reromspaces";
const INSTAGRAM_URL = "https://www.instagram.com/lorem";

const IMAGES = [
  "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=600",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bdb?q=80&w=600",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600",
];

type CardState = {
  pos: number;
  dir: 1 | -1;
  animating: boolean;
};

export default function InstagramGrid() {
  const cycle = useRef(0);

  const [cardState, setCardState] = useState<CardState[]>(
    Array.from({ length: NUM_CARDS }, () => ({
      pos: 0,
      dir: 1,
      animating: false,
    }))
  );

  const [cardImages, setCardImages] = useState<string[][]>(
    Array.from({ length: NUM_CARDS }, () =>
      IMAGES.slice(0, IMAGES_PER_CARD)
    )
  );

  /* Randomize images AFTER hydration */
  useEffect(() => {
    setCardImages(
      Array.from({ length: NUM_CARDS }, () =>
        [...IMAGES]
          .sort(() => 0.5 - Math.random())
          .slice(0, IMAGES_PER_CARD)
      )
    );
  }, []);

  /* Ping–pong animation */
  useEffect(() => {
    const interval = setInterval(() => {
      setCardState(prev =>
        prev.map((card, index) => {
          const groupA = [0, 2, 5, 7];
          const groupB = [1, 3, 4, 6];

          const isActive =
            cycle.current % 2 === 0
              ? groupA.includes(index)
              : groupB.includes(index);

          if (!isActive) return card;

          let nextPos = card.pos + card.dir;
          let nextDir = card.dir;

          if (nextPos === IMAGES_PER_CARD - 1) nextDir = -1;
          if (nextPos === 0) nextDir = 1;

          return {
            pos: nextPos,
            dir: nextDir,
            animating: true,
          };
        })
      );

      cycle.current++;
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  /* Remove blur */
  useEffect(() => {
    const t = setTimeout(() => {
      setCardState(prev =>
        prev.map(card => ({ ...card, animating: false }))
      );
    }, 1200);

    return () => clearTimeout(t);
  }, [cardState.map(c => c.pos).join(",")]);

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {cardImages.map((imgs, i) => (
          <a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div
              className={`${styles.cardInner} ${
                cardState[i].animating ? styles.animating : ""
              }`}
              style={{
                transform: `translateY(-${
                  cardState[i].pos * (100 / IMAGES_PER_CARD)
                }%)`,
              }}
            >
              {imgs.map((src, idx) => (
                <img key={idx} src={src} alt="" />
              ))}
            </div>

            {/* Bottom overlay */}
            <div className={styles.cardFooter}>
              <InstagramIcon />
              <span>{INSTAGRAM_HANDLE}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------
   ICON
--------------------------------------- */
function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

export type AccordionItem = {
  title: string;
  content: string;
};

type Props = {
  items: AccordionItem[];
  openFirst?: boolean;
};

export default function FAQ({
  items,
  openFirst = false,
}: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    openFirst ? 0 : null
  );

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className={`${styles.card} ${isOpen ? styles.open : ""}`}
            onClick={() => toggle(index)}
          >
            <div className={styles.header}>
              <h3>{item.title}</h3>
              <span className={styles.icon}>+</span>
            </div>

            <div className={styles.contentOuter}>
              <div className={styles.content}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

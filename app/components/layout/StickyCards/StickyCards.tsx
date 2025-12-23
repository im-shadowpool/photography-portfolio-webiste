"use client";

import { cn } from "@/app/lib/utils/cn";
import Button from "../../ui/Button";
import "./StickyCards.css";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function StickyCards() {
  const stickyCardsData = [
    {
      id: 1,
      title: "Social Media Mastery",
      subTitle: "Expertise",
      contentTitle: "Boost your brands social media",
      contentDesc:
        "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
      buttonText: "Discover More",
      buttonPath: "/services/social/",
      image: "/results_section/results-1.jpg",
      colorbg: "bg-red-100",
    },
    {
      id: 2,
      title: "Social Media Mastery",
      subTitle: "Expertise",
      contentTitle: "Boost your brands social media",
      contentDesc:
        "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
      buttonText: "Discover More",
      buttonPath: "/services/social/",
      image: "/results_section/results-1.jpg",
      colorbg: "bg-gray-100",
    },
    {
      id: 3,
      title: "Social Media Mastery",
      subTitle: "Expertise",
      contentTitle: "Boost your brands social media",
      contentDesc:
        "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
      buttonText: "Discover More",
      buttonPath: "/services/social/",
      image: "/results_section/results-1.jpg",
      colorbg: "bg-green-100",
    },
    {
      id: 4,
      title: "Social Media Mastery",
      subTitle: "Expertise",
      contentTitle: "Boost your brands social media",
      contentDesc:
        "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
      buttonText: "Discover More",
      buttonPath: "/services/social/",
      image: "/results_section/results-1.jpg",
      colorbg: "bg-blue-100",
    },
  ];

  const stickyCardContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".sticky-card");
      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "120%",
            pin: true,
            pinSpacing: false,
          });
        }
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = progress - 0.25;
              gsap.set(card, {
                scale: scale,
                rotation: rotation,
                "--after-opacity": afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: stickyCardContainerRef }
  );

  return (
    <div className="sticky-cards" ref={stickyCardContainerRef}>
      {stickyCardsData.map((card, index) => {
        return (
          <div
            className={cn(
              `sticky-card sticky-card-${index + 1} ${
                card.colorbg
              } p-8 flex border-rounded-xl justify-between gap-4`
            )}
            data-index={index}
            key={card.id}
          >
            <div className="sticky-card-first w-[70%] flex flex-col justify-between gap-4">
              <div className="sticky-card-header flex flex-col gap-4 items-start">
                <span className="py-1.5 px-2.5 bg-white border-rounded-xs">
                  {card.subTitle}
                </span>
                <h2>{card.title}</h2>
              </div>
              <div className="sticky-card-footer flex flex-col gap-4 items-start max-w-[448px]">
                <h3>{card.contentTitle}</h3>
                <p>{card.contentDesc}</p>
                <Button content={card.buttonText} path={card.buttonPath} />
              </div>
            </div>
            <div className="sticky-card-second w-[20%] flex flex-col items-end justify-between">
              <div className="flex justify-end items-end gap-4">
                <span>{`0${index + 1}`}</span>
              </div>
              <div
                className="sticky-card-image border-rounded-lg"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

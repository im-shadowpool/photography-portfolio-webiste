"use client";

import Image from "next/image";
import "./CardFan.css";
import { cardFanData } from "app/lib/data/cardFan.data";


export default function CardFan() {
  return (
    <div className="card-fan flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl px-4">
      {cardFanData.map((card) => {
        // IMAGE CARD
        if (card.type === "image") {
          return (
            <div
              key={card.id}
              className="fan-item w-full max-w-sm lg:w-72 h-96 rounded-[2rem] bg-gray-200 dark:bg-gray-800 relative overflow-hidden shadow-card group cursor-pointer shrink-0"
            >
              <Image
                src={card.image!}
                alt="Event image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          );
        }

        // STAT CARD
        return (
          <div
            key={card.id}
            style={{ background: card.bg }}
            className="fan-item w-full max-w-sm lg:w-72 h-96 rounded-[2rem] relative overflow-hidden shadow-card group cursor-pointer shrink-0"
          >
            <div className="absolute inset-0 p-8 flex flex-col justify-between h-full">
              <h3 className="font-display font-bold text-6xl text-slate-900 tracking-tighter">
                {card.title}
              </h3>

              <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-1 bg-slate-900 mb-4 rounded-full" />
                <h4 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  {card.heading}
                </h4>
                <p className="text-slate-800 font-medium text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

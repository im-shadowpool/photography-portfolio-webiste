import React from "react";

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
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "ELARA & SEBASTIAN",
    quote:
      "A masterclass in visual storytelling. Our wedding felt like a dream, but seeing it through his lens made it immortal. Every frame is a piece of art that breathes life into our most quiet, intimate moments.",
    service: "Editorial Wedding",
    location: "Lake Como, Italy",
    icon: "camera",
    avatar:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=100&h=100&auto=format&fit=crop",
    metadata: {
      iso: "400",
      shutter: "1/250",
      aperture: "f/1.4",
      lens: "35mm Prime",
    },
  },
  {
    id: 2,
    author: "ISABELLA DE LUCA",
    quote:
      "He doesn't just take photographs; he captures the atmosphere itself. The interplay of shadow and light in our heritage estate shoot was nothing short of cinematic perfection.",
    service: "Heritage Portfolio",
    location: "Tuscany, Italy",
    icon: "party",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
    metadata: {
      iso: "100",
      shutter: "1/1000",
      aperture: "f/2.8",
      lens: "85mm Master",
    },
  },
  {
    id: 3,
    author: "THE MORGAN ESTATE",
    quote:
      "Precision, elegance, and an incredible eye for detail. The architectural shots of our gala were stunning, preserving the grandeur of the evening with unparalleled sophistication.",
    service: "Exclusive Events",
    location: "Monaco",
    icon: "family",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
    metadata: {
      iso: "800",
      shutter: "1/60",
      aperture: "f/4.0",
      lens: "24-70mm GM",
    },
  },
  {
    id: 4,
    author: "CLARA VANCE",
    quote:
      "There is a haunting beauty in the way he handles monochrome portraits. It's raw, it's elegant, and it feels deeply personal. Truly the gold standard of modern photography.",
    service: "Fine Art Portrait",
    location: "Paris, France",
    icon: "camera",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop",
    metadata: {
      iso: "1600",
      shutter: "1/200",
      aperture: "f/1.2",
      lens: "50mm Art",
    },
  },
];

export const Icons = {
  Quote: () => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--foreground)"
      strokeWidth="0.5"
      className="opacity-40"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 3.5-3.5 4.5-5 5" />
      <path d="M14 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 3.5-3.5 4.5-5 5" />
    </svg>
  ),
  Camera: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--foreground)"
      strokeWidth="1.5"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  ArrowRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--foreground)"
      strokeWidth="1"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--foreground)"
      strokeWidth="1"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  ChevronRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--foreground)"
      strokeWidth="1"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
};

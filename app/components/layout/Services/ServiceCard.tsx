"use client";

import GrainOverlay from "./GrainOverlay";
import styles from "./Services.module.css"

interface PhotographyCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

function ViewFinder() {
  return (
    <>
      {/* Crosshair */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0)_38%,rgba(0,0,0,1)_100%)]">
        <div className="relative h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute left-1/2 top-0 h-full w-px bg-white/60 -translate-x-1/2" />
          <span className="absolute top-1/2 left-0 h-px w-full bg-white/60 -translate-y-1/2" />
        </div>
      </div>

      {/* Rule of thirds (subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="absolute left-1/3 top-0 h-full w-px bg-white/10" />
        <span className="absolute left-2/3 top-0 h-full w-px bg-white/10" />
        <span className="absolute top-1/3 left-0 h-px w-full bg-white/10" />
        <span className="absolute top-2/3 left-0 h-px w-full bg-white/10" />
      </div>

      {/* Corner frame marks */}
      <div className="pointer-events-none absolute inset-0">
        <Corner className="top-3 left-3" />
        <Corner className="top-3 right-3 rotate-90" />
        <Corner className="bottom-3 left-3 -rotate-90" />
        <Corner className="bottom-3 right-3 rotate-180" />
      </div>
    </>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-4 w-4 border-t border-l border-white/50 ${className}`}
    />
  );
}


export default function ServiceCard({
  title,
  description,
  image,
  link = "#",
}: PhotographyCardProps) {
  return (
    <div className={`card opacity-0 translate-y-24 group relative flex flex-col overflow-hidden border-rounded-lg bg-(--white) p-3 shadow-[0_6px_12px_-2px_rgba(0,0,0,0.05),0_3px_7px_-3px_rgba(0,0,0,0.02)] hover:shadow-[0_3px_7px_-3px_rgba(0,0,0,0.02)] ${styles.serviceCard}`}>
      <GrainOverlay />
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-rounded-md">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Viewfinder overlays */}
        <ViewFinder />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 gap-4">

        <h3 className={styles.serviceCardTitle}>
          {title}
        </h3>
        <p className={styles.serviceCardDesc}>
          {description}
        </p>

        <div className="mt-6">
          <a
            href={link}
            className="group/btn inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-blue-600"
          >
            Explore Packages
            <span className="ml-1 text-[18px] transition-transform group-hover/btn:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

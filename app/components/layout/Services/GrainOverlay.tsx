// app/components/GrainOverlay.tsx
export default function GrainOverlay() {
  return (
    <svg className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-[9999]">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

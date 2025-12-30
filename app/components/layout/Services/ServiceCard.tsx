"use client";

interface ServiceCardProps {
  index: string;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({
  index,
  title,
  description,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`card min-w-[400px] h-[550px] bg-neutral-900 border border-neutral-700 
      p-12 flex flex-col justify-between relative opacity-0 translate-y-24 ${className}`}
    >
      <div className="font-mono text-sm text-neutral-400 flex items-center gap-4">
        {index}
        <span className="flex-1 h-px bg-neutral-700" />
      </div>

      <div>
        <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-4">
          {title}
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed max-w-[280px]">
          {description}
        </p>
      </div>

      <div className="flex justify-end">
        <div
          className="w-10 h-10 border border-neutral-700 flex items-center justify-center
          transition-all hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,242,255,0.25)]"
        >
          →
        </div>
      </div>
    </div>
  );
}

// https://chatgpt.com/share/6953dc21-896c-8012-abf9-d96c840f9e67

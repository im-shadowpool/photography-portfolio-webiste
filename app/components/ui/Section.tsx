import { cn } from "@/app/lib/utils/cn";

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden px-(--container-padding)",
        className
      )}
    >
      {children}
    </section>
  );
}

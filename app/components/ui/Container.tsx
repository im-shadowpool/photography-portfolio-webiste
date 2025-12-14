import { cn } from "@/app/lib/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "full";
};

export default function Container({
  children,
  className,
  size = "default",
}: Props) {
  const sizes = {
    default: "max-w-(--container-defualt)",
    wide: "max-w-(--container-max)",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}

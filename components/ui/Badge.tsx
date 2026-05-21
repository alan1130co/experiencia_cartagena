import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[#deeef5] px-3 py-1 text-label-caps text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-[16px] bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

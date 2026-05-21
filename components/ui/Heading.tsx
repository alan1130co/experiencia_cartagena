import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const levelStyles: Record<HeadingLevel, string> = {
  1: "text-display-xl",
  2: "text-headline-lg",
  3: "text-headline-md",
  4: "text-body-lg font-semibold",
  5: "text-body-md font-semibold",
  6: "text-label-caps",
};

interface HeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Heading({ level, children, className, as }: HeadingProps) {
  const Tag = (as ?? `h${level}`) as React.ElementType;
  return (
    <Tag className={cn("text-on-surface", levelStyles[level], className)}>
      {children}
    </Tag>
  );
}

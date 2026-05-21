import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export function Section({ children, className, as: Tag = "section", id }: SectionProps) {
  return (
    <Tag id={id} className={cn("py-20 lg:py-24", className)}>
      {children}
    </Tag>
  );
}

import { cn } from "@/lib/utils";

type TextVariant = "body-lg" | "body-md" | "label-caps";

const variantStyles: Record<TextVariant, string> = {
  "body-lg": "text-body-lg",
  "body-md": "text-body-md",
  "label-caps": "text-label-caps",
};

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Text({
  variant = "body-md",
  children,
  className,
  as: Tag = "p",
}: TextProps) {
  return (
    <Tag className={cn("text-on-surface-variant", variantStyles[variant], className)}>
      {children}
    </Tag>
  );
}

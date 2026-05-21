import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, id, className, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-label-caps text-on-surface-variant">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "w-full rounded-[16px] border border-outline-variant bg-white px-4 py-3",
          "text-body-md text-on-surface",
          "placeholder:text-on-surface-variant/50",
          "transition-colors duration-200",
          "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
          error && "border-red-500 focus:border-red-500 focus:ring-red-200",
          className,
        )}
        {...props}
      />
      {hint && !error && (
        <p className="text-[12px] text-on-surface-variant">{hint}</p>
      )}
      {error && (
        <p className="text-[12px] text-red-600" role="alert">{error}</p>
      )}
    </div>
  );
}

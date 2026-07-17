"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-outline-variant p-0.5",
        className,
      )}
    >
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          aria-current={locale === loc ? "true" : undefined}
          title={t(loc)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition-colors duration-200",
            locale === loc
              ? "bg-primary text-white"
              : "text-on-surface-variant hover:text-primary",
          )}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}

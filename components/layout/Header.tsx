"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, User, ChevronDown, Anchor, Ship, Sailboat } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SiteLogo } from "@/components/ui/SiteLogo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const ICON_MAP = { Anchor, Ship, Sailboat };

export function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-outline-variant bg-white/90 backdrop-blur-sm">
      <Container as="nav" aria-label={t("navAriaLabel")}>
        <div className="flex h-24 items-center justify-between gap-4 lg:h-28">

          {/* ── Logo ──────────────────────────────────────────────────────── */}
          <Link
            href="/"
            aria-label={t("logoAriaLabel", { name: SITE_CONFIG.name })}
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <SiteLogo />
          </Link>

          {/* ── Navegación desktop — lg+ ──────────────────────────────────── */}
          <ul className="hidden items-center gap-6 lg:flex" role="list">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              if (!link.dropdown) {
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative text-label-caps transition-colors duration-200 hover:text-primary",
                        "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-primary after:transition-transform after:duration-200",
                        isActive
                          ? "text-primary after:scale-x-100"
                          : "text-on-surface-variant after:scale-x-0 hover:after:scale-x-100",
                      )}
                    >
                      {t(link.labelKey).toUpperCase()}
                    </Link>
                  </li>
                );
              }

              // Link con dropdown
              return (
                <li key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "relative flex items-center gap-1 text-label-caps transition-colors duration-200 hover:text-primary",
                      "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-primary after:transition-transform after:duration-200",
                      isActive
                        ? "text-primary after:scale-x-100"
                        : "text-on-surface-variant after:scale-x-0 hover:after:scale-x-100",
                    )}
                  >
                    {t(link.labelKey).toUpperCase()}
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden
                    />
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-2 w-72",
                      "bg-white rounded-2xl shadow-xl border border-outline-variant",
                      "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                      "transition-all duration-200",
                      "pointer-events-none group-hover:pointer-events-auto",
                      "z-50",
                    )}
                  >
                    <div className="p-3">
                      {link.dropdown.map((item) => {
                        const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container transition-colors"
                          >
                            {Icon && (
                              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-5 h-5 text-primary" aria-hidden />
                              </div>
                            )}
                            <div>
                              <p className="font-semibold text-primary text-sm">
                                {t(item.labelKey)}
                              </p>
                              <p className="text-xs text-on-surface-variant mt-0.5">
                                {t(item.descriptionKey)}
                              </p>
                            </div>
                          </Link>
                        );
                      })}

                      {/* Footer del dropdown */}
                      <div className="mt-2 pt-3 border-t border-outline-variant">
                        <Link
                          href="/flota"
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-primary hover:text-white transition-colors text-primary"
                        >
                          <span className="text-sm font-semibold">{t("viewFullFleet")}</span>
                          <span aria-hidden>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* ── Derecha: Idioma + Usuario + WhatsApp CTA + Hamburger ───────── */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Selector de idioma — solo desktop */}
            <span className="hidden lg:inline-flex">
              <LanguageSwitcher />
            </span>

            {/* Icono usuario — solo desktop */}
            <Link
              href="/login"
              aria-label={t("myAccount")}
              className="hidden rounded-md p-1.5 text-outline transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:flex"
            >
              <User className="size-5" aria-hidden />
            </Link>

            {/* Botón WhatsApp — solo desktop */}
            <span className="hidden lg:inline-flex">
              <WhatsAppButton
                variant="default"
                size="md"
                mensaje={t("whatsappMessage")}
                className="text-label-caps"
              >
                {t("reserveWhatsapp")}
              </WhatsAppButton>
            </span>

            {/* Hamburger — solo mobile/tablet */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? t("closeMenu") : t("openMenu")}
              className="rounded-md p-2 text-on-surface-variant transition-colors hover:bg-surface-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:hidden"
            >
              {isOpen ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </div>

        {/* ── Drawer mobile — solo < lg ────────────────────────────────────── */}
        {isOpen && (
          <div className="border-t border-outline-variant pb-6 pt-4 lg:hidden">
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);

                if (link.dropdown) {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={close}
                        className={cn(
                          "block rounded-md px-4 py-2.5 text-label-caps transition-colors duration-150",
                          isActive
                            ? "bg-surface-container text-primary"
                            : "text-on-surface-variant hover:bg-surface-container hover:text-primary",
                        )}
                      >
                        {t(link.labelKey)}
                      </Link>
                      <div className="ml-4 mt-1 mb-1 space-y-0.5">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={close}
                            className="block rounded-md px-4 py-2 text-sm text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                          >
                            {t(item.labelKey)}
                          </Link>
                        ))}
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className={cn(
                        "block rounded-md px-4 py-2.5 text-label-caps transition-colors duration-150",
                        isActive
                          ? "bg-surface-container text-primary"
                          : "text-on-surface-variant hover:bg-surface-container hover:text-primary",
                      )}
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                );
              })}

              {/* Mi cuenta */}
              <li>
                <Link
                  href="/login"
                  onClick={close}
                  className="flex items-center gap-2 rounded-md px-4 py-2.5 text-label-caps text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                >
                  <User className="size-4 shrink-0" aria-hidden />
                  {t("myAccount")}
                </Link>
              </li>

              {/* Selector de idioma */}
              <li className="px-4 py-2.5">
                <LanguageSwitcher />
              </li>
            </ul>

            {/* CTA WhatsApp destacado — wrapper cierra el drawer */}
            <div
              className="mt-4 border-t border-outline-variant px-4 pt-4"
              onClick={close}
            >
              <WhatsAppButton
                variant="default"
                size="md"
                mensaje={t("whatsappMessage")}
                className="w-full justify-center text-label-caps"
              >
                {t("reserveWhatsapp")}
              </WhatsAppButton>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

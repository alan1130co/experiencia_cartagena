import { defineRouting } from "next-intl/routing";
import { I18N_CONFIG } from "@/lib/constants";

export const routing = defineRouting({
  locales: I18N_CONFIG.locales,
  defaultLocale: I18N_CONFIG.defaultLocale,
});

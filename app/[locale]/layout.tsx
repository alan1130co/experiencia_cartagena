import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SITE_CONFIG } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import "../globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_CONFIG.shortName}`,
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  },
  description:
    "Descubre Cartagena de Indias con tours exclusivos, yates privados, paquetes turísticos premium y experiencias únicas en el Caribe colombiano.",
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: { canonical: "/" },
  openGraph: { siteName: SITE_CONFIG.name, locale: SITE_CONFIG.locale, type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="flex min-h-dvh flex-col bg-white font-sans text-on-surface antialiased">
        <NextIntlClientProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary focus:text-label-caps focus:outline-none"
          >
            Ir al contenido principal
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton
            variant="floating"
            mensaje="Hola, me interesa conocer las experiencias de turismo en Cartagena"
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

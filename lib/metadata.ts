import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

const TITLE_BUDGET = 60;
const BRAND_SUFFIX = ` | ${SITE_CONFIG.shortName}`;

/**
 * Elige la primera variante de título (de más a menos rica en keyword) que
 * quepa bajo TITLE_BUDGET una vez sumado el sufijo de marca que agrega el
 * template del layout raíz (`%s | Experiencias Tour Cartagena`). Si ninguna
 * cabe, cae al nombre del producto solo.
 */
export function buildProductTitle(name: string, variants: string[]): string {
  const fit = variants.find(
    (variant) => variant.length + BRAND_SUFFIX.length <= TITLE_BUDGET
  );
  return fit ?? name;
}

/** Sufijo de marca para `openGraph.title`, que no recibe el template del layout raíz. */
export function withBrand(title: string): string {
  return `${title}${BRAND_SUFFIX}`;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = SITE_CONFIG.ogImage, // TODO: crear imagen OG real — ver SITE_CONFIG.ogImage
  ogType = "website",
}: PageMetadataOptions): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  };
}

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { destinos } from "@/lib/data/destinos";
import { paquetes } from "@/lib/data/paquetes";
import { botes } from "@/lib/data/botes";
import { toursData } from "@/lib/data/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/flota`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/destinos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/botes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/yates`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/catamaranes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/tours`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/paquetes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/experiencias`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const destinoRoutes: MetadataRoute.Sitemap = destinos.map((d) => ({
    url: `${base}/destinos/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const boteRoutes: MetadataRoute.Sitemap = botes.map((b) => ({
    url: `${base}/botes/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const tourRoutes: MetadataRoute.Sitemap = toursData.map((t) => ({
    url: `${base}/tours/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const paqueteRoutes: MetadataRoute.Sitemap = paquetes.map((p) => ({
    url: `${base}/paquetes/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...destinoRoutes, ...boteRoutes, ...tourRoutes, ...paqueteRoutes];
}

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { destinos } from "@/lib/data/destinos";

export default function DestinosPage() {
  const t = useTranslations("Placeholder");

  return (
    <PlaceholderPage
      eyebrow={t("destinos.eyebrow")}
      title={t("destinos.title")}
      description={t("destinos.description")}
      backLabel={t("backHome")}
    >
      <ul className="mb-8 flex flex-wrap justify-center gap-3" role="list">
        {destinos.map((destino) => (
          <li key={destino.slug}>
            <Link
              href={`/destinos/${destino.slug}`}
              className="inline-flex items-center rounded-full border border-outline-variant px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              {destino.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </PlaceholderPage>
  );
}

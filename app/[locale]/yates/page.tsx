import { redirect } from "@/i18n/navigation";

export default async function YatesRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect({
    href: { pathname: "/flota", query: { categoria: "yates" } },
    locale,
  });
}

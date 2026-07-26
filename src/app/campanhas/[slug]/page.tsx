import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeriesCampaignPage } from "@/components/campaigns/SeriesCampaignPage";
import { campaigns, getCampaign } from "@/data/campaigns";
import { series } from "@/data/series";

interface CampaignPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return campaigns.map((campaign) => ({ slug: campaign.slug }));
}

export async function generateMetadata({
  params,
}: CampaignPageProps): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) return {};

  const line = series.find((item) => item.slug === campaign.seriesSlug);
  const canonical = `/campanhas/${campaign.slug}`;

  return {
    title: campaign.seo.title,
    description: campaign.seo.description,
    alternates: {
      canonical,
    },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `${campaign.seo.title} | Hammer Gold`,
      description: campaign.seo.description,
      type: "website",
      locale: "pt_BR",
      siteName: "Hammer Gold",
      images: line
        ? [
            {
              url: line.image,
              alt: `Linha ${line.name} Hammer Gold`,
            },
          ]
        : [],
    },
  };
}

export default async function CampaignPage({ params }: CampaignPageProps) {
  const { slug } = await params;
  const campaign = getCampaign(slug);

  if (!campaign) notFound();

  return <SeriesCampaignPage campaign={campaign} />;
}

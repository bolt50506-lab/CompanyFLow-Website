import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

const SERVICE_PATHS = [
  "web-design-uk",
  "custom-software-development",
  "crm-erp-development",
  "ai-automation",
  "whatsapp-automation",
  "ecommerce-development",
  "business-automation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...SERVICE_PATHS.map((path) => ({
      url: `${SITE.url}/${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

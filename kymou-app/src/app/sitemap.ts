import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { SITEMAP_QUERY } from "@/sanity/lib/queries";
import { SITEMAP_QUERYResult } from "@/sanity/types";
import { BASE_URL } from "@/utils/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const paths = await client.fetch(SITEMAP_QUERY);

    if (!paths) return [];

    return  paths.map((path:SITEMAP_QUERYResult[0]) => ({
      url:  new URL(path.href!, BASE_URL).toString(),
      lastModified: new Date(path._updatedAt),
      changeFrequency: path.freq,
      priority: path.priority,
    }))


  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
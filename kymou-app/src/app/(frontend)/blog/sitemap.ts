

import { BLOG_SITEMAP_QUERY} from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/live"
import {BLOG_SITEMAP_QUERYResult} from "@/sanity/types"
import { BASE_URL } from "@/utils/constants"


export default async function sitemap(){
const {data:projects} = await sanityFetch({query:BLOG_SITEMAP_QUERY})

  return projects.map((project:BLOG_SITEMAP_QUERYResult[number]) => ({
    url: `${BASE_URL}/blog/${project?.slug?.current}`,
    lastModified: project?._updatedAt,
    loc:`${BASE_URL}/blog/${project?.slug?.current}`,
    changeFrequency: "weekly",
    priority: 1,
  }))
}
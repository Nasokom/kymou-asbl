

import { PROJECTS_SITEMAP_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/live"
 import { PROJECTS_SITEMAP_QUERYResult } from "@/sanity/types"
 import { BASE_URL } from "@/utils/constants"

export default async function sitemap(){

const {data:projects} = await sanityFetch({query:PROJECTS_SITEMAP_QUERY})

  return projects.map((project:PROJECTS_SITEMAP_QUERYResult[number]) => ({
    
    url: `${BASE_URL}/project/${project?.slug?.current}`,
    lastModified: project._updatedAt,
    loc:`${BASE_URL}/project/${project?.slug?.current}`,

  }))
}
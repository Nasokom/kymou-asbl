

import { SITEMAP_QUERY} from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/live"
import {SITEMAP_QUERYResult} from "@/sanity/types"
import { BASE_URL } from "@/utils/constants"


export default async function sitemap(){
const {data:paths} = await sanityFetch({query:SITEMAP_QUERY})

   return  paths.filter((path:SITEMAP_QUERYResult[0])=>path?.href?.includes('blog')).map((path:SITEMAP_QUERYResult[0]) => ({
      url:  new URL(path.href!, BASE_URL).toString(),
      lastModified: new Date(path._updatedAt),
      changeFrequency: path.freq,
      priority: path.priority,
    }))

}
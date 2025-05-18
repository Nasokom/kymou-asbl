
 import { getProjectMini } from '@/utils/scripts/sanity'

 
export default async function sitemap(){
  const projects = await getProjectMini()

  return projects.map((project) => ({
    url: `https://kymou-asbl.vercel.app/project/${project.slug}`,
    lastModified: project._updatedAt,
    loc:`https://kymou-asbl.vercel.app/project/${project.slug}`,
  }))
}
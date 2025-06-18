import home2 from '@/sanity/schemaTypes/home2'
import { title } from 'process'
import { defineLocations, PresentationPluginOptions } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {

  locations: {
    // Add more locations for other post types
    projectv2: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/project/${doc?.slug}`,
          },
          { title: 'Liste des projets', href: `/project` },
        ],
      }),
    }),
     blogPost: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/blog/${doc?.slug}`,
          },
          { title: 'Liste des articles', href: `/blog` },
        ],
      }),
    }),

    homePage2: defineLocations({
     
        locations: [
          { title: 'Home page', href: `/` },
        ],
    }),


    contact: defineLocations({
        locations: [
          { title: 'page contact', href: `/contact` },
        ],
    }),
  },
  
}
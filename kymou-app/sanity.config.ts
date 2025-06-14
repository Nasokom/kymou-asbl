'use client'
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */


import {visionTool} from '@sanity/vision'
import {defineConfig, Image,buildLegacyTheme} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media,mediaAssetSource} from 'sanity-plugin-media'
import {defineDocuments, presentationTool} from 'sanity/presentation'
import Logo from './logo'

import {resolve} from '@/sanity/lib/presentation/resole'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import {defaultDocumentNode} from '@/sanity/defaultDocumentNode'


// source theming https://www.sanity.io/docs/studio/theming
const props = {
  '--my-white': '#F5E9D1',
  '--my-black': '#252627',
  '--my-blue': '#c17817',
  '--my-red': '#931621',
  '--my-yellow': '#3F784C',
  '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],
  '--gray': '#666',
  '--gray-base': '#666',
  '--component-bg': props['--my-white'],
  '--component-text-color': props['--my-black'],
  /* Brand */
  '--brand-primary': props['--my-blue'],
  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],
  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],
  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],
  '--focus-color': props['--my-blue'],
})




export default defineConfig({
  title:'Kymou ASBL',
  basePath: '/studio',
  projectId,
  dataset,
   api: {
    projectId,
    dataset
  },
    mediaLibrary: {
    enabled: true,
    aspectsPath: 'aspects',
  },
autoUpdates: true,
  icon:Logo,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  form: {
    // Disable the default for image assets
    image: {
      assetSources: (sources) => sources.filter((source) => source.name !== 'sanity-default')
    },
    // Disable the default for file assets
    file: {
      assetSources: (sources) => sources.filter((source) => source.name !== 'sanity-default')
    }
  },
  plugins: [
  //   media({
  //   creditLine: {
  //     enabled: true,
  //     // boolean - enables an optional "Credit Line" field in the plugin.
  //     // Used to store credits e.g. photographer, licence information
  //     excludeSources: ['unsplash'],
  //     // string | string[] - when used with 3rd party asset sources, you may
  //     // wish to prevent users overwriting the creditLine based on the `source.name`
  //   },

  //   maximumUploadSize: 10000000
  //   // number - maximum file size (in bytes) that can be uploaded through the plugin interface
  // }),
    structureTool({structure,defaultDocumentNode}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),

    presentationTool({
     resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
    }),
  ],
   theme: myTheme,
})

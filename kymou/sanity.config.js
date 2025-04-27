import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { deskTool } from "sanity/desk"
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {media,mediaAssetSource} from 'sanity-plugin-media'
import { IoHomeOutline, IoAlbumsOutline  } from "react-icons/io5";
import { defaultDocumentNode } from './deskStructure'; //

import { FaHeart , FaHome, FaAddressBook} from "react-icons/fa";


const singletonListItem = (
  S,
  typeName,
  title
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))
    

export default defineConfig({
  name: 'default',
  title: 'kymou',

  projectId: '6ahsdz3c',
  dataset: 'production',
  useCdn: true, 
  preview:false,

  

  //plugins: [structureTool(), visionTool()],
  plugins: [media({
    creditLine: {
      enabled: true,
      // boolean - enables an optional "Credit Line" field in the plugin.
      // Used to store credits e.g. photographer, licence information
      excludeSources: ['unsplash'],
      // string | string[] - when used with 3rd party asset sources, you may
      // wish to prevent users overwriting the creditLine based on the `source.name`
    },
    maximumUploadSize: 10000000
    // number - maximum file size (in bytes) that can be uploaded through the plugin interface
  }),
  
    colorInput(),
    deskTool({
      structure: (S,context) =>
        S.list()
          .title("Contenu de Kymou")
          .items([

            // Our singleton type has a list item with a custom child
            ///* singletonListItem(S, "settings", "Settings"), */
            singletonListItem(S,'homePage2','Home Page ').icon(FaHome),
            orderableDocumentListDeskItem({type: 'projectv2', S,context,icon:FaHeart}),
            S.documentTypeListItem("blogPost").title("Liste des Articles").icon(FaHeart),
            singletonListItem(S, "contact", "Contact Page").icon(FaAddressBook),

           
            // Regular document types
          ]),
          // 🔥 fullscreen
          defaultDocumentNode,
    }),
    visionTool(),
  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: previousAssetSources => {
        return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
      }
    }
  },

  schema: {
    types: schemaTypes,
  },
})

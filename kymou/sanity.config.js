import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { deskTool } from "sanity/desk"
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'


// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types

const singletonTypes = new Set(["settings"])

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

  

  //plugins: [structureTool(), visionTool()],
  plugins: [
    colorInput(),
    deskTool({
      structure: (S,context) =>
        S.list()
          .title("Content")
          .items([

            // Our singleton type has a list item with a custom child
            ///* singletonListItem(S, "settings", "Settings"), */
            singletonListItem(S,'homePage','home'),
            singletonListItem(S, "project", "project old"),
            singletonListItem(S, "contact", "contact"),

            
           /*  S.listItem()
              .title("Settings")
              .id("settings")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("settings")
                  .documentId("settings")
              ),

              S.listItem()
              .title("Intro")
              .id("intro")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("intro")
                  .documentId("intro")
              ),

              S.listItem()
              .title("Projets")
              .id("project")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("project")
                  .documentId("project")
              ),

              S.listItem()
              .title("About")
              .id("About")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("about")
                  .documentId("about")
              ), */
              //orderableDocumentListDeskItem({type: 'gallery', S,context}),
            // Regular document types
            S.documentTypeListItem("projectv2").title("Project list"),
            S.documentTypeListItem("gallery").title("Gallery photos"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

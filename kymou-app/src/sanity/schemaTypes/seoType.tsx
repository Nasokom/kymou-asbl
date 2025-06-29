import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      description: "If provided, this will override the title field",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "image",
      description:'Image og',
      options: {hotspot: true}
    }),
    defineField({
      name: "noIndex",
      type: "boolean",
    }),
    defineField({
      name:'tags',
      title:'Mots cles',
      description:'Aide pour le referencement du contenu max 10',
      type:'array',
      of:[{type:'string'}]
    })
  ],
});
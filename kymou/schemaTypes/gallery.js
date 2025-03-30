import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'gallery',
  title: 'photo',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
        name: 'title',
        title: 'title',
        type: 'string',
      }),
      orderRankField({ type: "orderRank" }),
      defineField({
        name: 'image',
        type:'image',
      }),
      defineField({
        name: 'url',
        title: 'projet liee',
        type: 'reference',
        to: [{type: 'projectv2'}]
      }),
      defineField({
        name: 'show',
        title: 'Afficher dans la gallery',
        type: 'boolean'
      }),
  ],

  orderings: [
    {
      title: "Nom (A-Z)",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
    // {
    //   title: "Title (Z-A)",
    //   name: "titleDesc",
    //   by: [{ field: "title", direction: "desc" }],
    // },
    // {
    //   title: "Newest First",
    //   name: "newest",
    //   by: [{ field: "publishedAt", direction: "desc" }],
    // },
    // {
    //   title: "Oldest First",
    //   name: "oldest",
    //   by: [{ field: "publishedAt", direction: "asc" }],
    // },
  ],
})

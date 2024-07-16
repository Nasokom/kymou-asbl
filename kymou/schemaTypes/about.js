import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'A propos',
  type: 'document',
  fields: [

    defineField({
        name: 'title',
        title: 'title',
        type: 'string',
        initialValue:'A propos',
        hidden:true
      }),

    defineField({
      name: 'text1',
      title: 'intro',
      type: 'text'
    }),
    defineField({
        name: 'image',
        title: 'Photo Kymou',
        type: 'image'
      }),


      defineField({
        name: 'text2',
        title: 'texte 2',
        type: 'text'
      }),
  ],
})

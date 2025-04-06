import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeFooter',
  title: 'Home Footer',
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
      name: 'h1',
      title:'Title',
      type:'string'
    }),

    defineField({
      name: 'text',
      title: 'intro',
      type: 'content'
    }),
    defineField({
        name: 'image',
        title: 'Photo Kymou',
        type: 'image'
      }),
  ],
})

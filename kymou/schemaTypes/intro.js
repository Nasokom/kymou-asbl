import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'intro',
  title: 'Intro',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'title',
        type: 'string',
        initialValue:'Introduction',
        hidden:true
      }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
       options: {
        metadata: [
          'blurhash',   // Default: included
          'lqip',       // Default: included
          'palette',    // Default: included
          'exif',       // Default: not included
          'location',   // Default: not included
        ],}
    }),
    defineField({
      name: 'image',
      title: 'Image de fond',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'text',
      title: 'text',
        type:'text'
    }),

    defineField({
        name: 'textCredit',
        title: 'credit text',
          type:'string'
      }),


  ],
})

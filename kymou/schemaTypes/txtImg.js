import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'txtImg',
  title: 'txtImg',
  type: 'object',
  
  fields: [
    defineField({
      name: 'title',
      title: 'titre du projet',
    type:'string',
    }),

    defineField({
      name: 'text',
      title: 'texte',
      type: 'text',
    }),

    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
    }),

  ],
})

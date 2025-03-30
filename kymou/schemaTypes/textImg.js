import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textImg',
  title: 'txtImg',
  type: 'object',
  
  fields: [
    defineField({
      name: 'text',
      title: 'texte',
      type: 'content',
    }),

     defineField({
         name: 'inPhoto',
         title:'Photo liee au texte',
         type: 'reference',
           to: [{type: 'gallery'}]
         }),
  ],
})

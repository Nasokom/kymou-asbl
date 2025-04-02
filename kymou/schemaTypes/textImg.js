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
      name:"image",
      title:"photo liee au texte",
      type:"image",
    })
  ],
})

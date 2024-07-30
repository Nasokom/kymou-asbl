import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectv2',
  title: 'projectsV2',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'title',
        type: 'string',
        initialValue:'Projets :',
      }),

    defineField({
      title: 'text',
      type: 'array',
      of:[{type:"txtImg"}],
      name:"text"
    }),
  
      defineField({
        name: 'gallery',
        title: "gallerie d'image",
        type: 'array',
      of:[{type:"image"}]
      }),

      
  ],
})

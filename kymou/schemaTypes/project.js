import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'projects (old)',
  type: 'document',
  fields: [

    defineField({
        name: 'title',
        title: 'title',
        type: 'string',
        initialValue:'Projets',
        hidden:true
      }),

    defineField({
      name: 'project',
      title: 'project effectuée',
      type: 'array',
      of: [
        {
          type: 'projectObject',
        },
    ]
    }),

    defineField({
      name: 'gallery',
      title: "gallerie d'image",
      type: 'array',
    of:[{
        type:"image"
    }]
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectv2',
  title: 'projectsV4',
  type: 'document',
  fields: [

    defineField({
        name: 'title',
        title: 'title',
        type: 'string',
      }),

      defineField({
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\//g,'')
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      }),

      defineField({
        name: 'header',
        title:'Image maitre',
        type: 'reference',
          to: [{type: 'gallery'}]
      }),
  
      defineField({
        name: 'pitch',
        type:'textImg'
      }),

      defineField({
        name: 'problem',
        type:'textImg'
      }),
      
      defineField({
        name: 'action',
        type:'textImg'
      }),

      defineField({
        name: 'result',
        type:'textImg'
      }),

      defineField({
        name: 'image',
        type:'array',
        of:[{type: 'reference',
          to: [{type: 'gallery'}]}]
      })
  ],
})

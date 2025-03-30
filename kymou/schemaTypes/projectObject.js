import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectObject',
  title: 'projects',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'titre du projet',
    type:'string',
    }),

    defineField({
      name: 'text',
      title: 'blabla',
      type: 'text',
    }),

    defineField({
      name: 'probleme',
      title: 'probleme',
      type: 'text',
    }),

    defineField({
      name: 'action',
      title: 'action',
      type: 'text',
    }),

    defineField({
      name: 'resultat',
      title: 'resultat',
      type: 'text',
    }),

  ],
})

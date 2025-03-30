import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Contact page',
        type: 'string',
        initialValue:'Contact Page',
        hidden:true
      }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'asbl',
      title: 'Detail ASBL',
      type: 'object',
      fields:[
        {
            type:'string',
            title:'Titre',
            name:'title'
        },
        {
            type:'string',
            title:'nom',
            name:'name'
        },
        {
            type:'string',
            title:'Soutien',
            name:'soutien'
        },
        {
            type:'string',
            title:'bic',
            name:'bic'
        },
        {
            type:'string',
            title:'iban',
            name:'iban'
        },
      ]
    }),

    defineField({
      name: 'text',
      title: 'text',
    type:'content'
    }),

  ],
})

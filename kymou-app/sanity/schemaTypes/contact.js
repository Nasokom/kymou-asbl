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
        name: 'text',
        title: 'Texte',
      type:'content'
      }),


    defineField({
      name: 'contact',
      title: 'Email',
      type: 'object',
      fields:[
        {name:'title',type:'string',type:'string'},
        {name:'email',type:'string',title:'email'},
      ]
    }),

    defineField({
      name:'catch',
      type:'string',
      title:'Catch phrase iban'
    }),

    defineField({
      name: 'asbl',
      title: 'Detail ASBL',
      type: 'object',
      fields:[
        {
            type:'string',
            title:'nom',
            name:'name'
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

  

  ],
})

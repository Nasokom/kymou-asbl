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
    }),
     {
        name:'video',
        title:'Video',
        description:'100mb max !!',
        type:'file',
        options: {
    accept: 'video/*', 
  },
      },
  ],
})

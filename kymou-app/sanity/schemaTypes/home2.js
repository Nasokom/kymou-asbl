import { defineField,defineType } from "sanity";


export default defineType({
    name: 'homePage2',
    type: 'document',
    title: 'Home page',
    fields: [

      defineField({
        title:'title',
        name:'title',
        type:'string',  
        initialValue:'Home Page Content',
        hidden:true
      }),

      defineField({
        title:'header',
        name:"header",
        type:"object",
        fields:[
          {
            name:'image',
            type:'image',
            title:'image',
            options: {
            hotspot: true,
          },
          },
          { title:'quote',
            name:'quote',
            type:'object',
            fields:[
                {
                    title:'text',
                    name:'text',
                    type:'content'
                },
                {
                    title:'credit',
                    name:'credit',
                    type:'string'
                },
            ]

          }
        ]
      }),

      defineField({
        title:'about',
        name:'about',
        type:'object',
        description:"Section 'about' home page penser a une image",
        fields:[
          {
              title:'Titre',
              name:'title',
              type:'string'
          },
            {
                title:'text',
                name:'text',
                type:'content'
            },

        ]


      }),

      defineField({
        title:"Objectifs de l'association",
        name:'goal',
        type:'object',
        description:"Section",
        fields:[
          {
              title:'Titre',
              name:'title',
              type:'string'
          },
            {
                title:'text',
                name:'text',
                type:'content'
            },
            {
              title:'axes',
              name:'axes',
              type:'array',
              of:[{type:'object',
                  name:'axe',
                  fields:[
                    {
                      title:'Titre',
                      name:'title',
                      type:'string'
                  },
                    {
                        title:'text',
                        name:'text',
                        type:'content'
                    },
                  ]
              }]
            },
        ]
      }),
      defineField({
        type:'object',
        name:'footer',
        title:'footer',
        fields:[
          {
            type:'string',
            name:'title',
            title:'title'
          },
          {
            type:'image',
            name:'image',
            title:'Image footer',
          }
        ]
      }) 
    ],
  });
  
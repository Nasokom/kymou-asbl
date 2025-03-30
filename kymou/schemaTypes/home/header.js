import { defineField,defineType} from "sanity"

export default defineType(
    {
        name:'homeHeader',
        title:'header',
        type:'document',
        fields:[
            defineField({
                name: 'title',
                title: 'title',
                type: 'string',
                initialValue:'header',
                hidden:true

              }),

            defineField({
                name: 'image',
                title: 'Image de fond',
                type: 'image',
              }),

              defineField({
                name:'intro',
                type:'content'
            }),

            defineField({
                name:'quote',
                title:'proverbe',
                type:'object',
                fields:[
                    {type:'content',
                    title:'Texte',
                    name:'text'
                    },
                    {
                        type:'string',
                        title:'credit',
                        name:'credit'
                    }
                ]
            }),
        ]


    }
)



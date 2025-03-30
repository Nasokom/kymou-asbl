import { defineField,defineType} from "sanity"

export default defineType(
    {
        name:'headerAxes',
        title:'Axes',
        type:'document',
        fields:[
              defineField({
                            name: 'title',
                            title: 'title',
                            type: 'string',
                            initialValue:'Definir des axes',
                            hidden:true,
                          }),
              defineField({
                name:'intro',
                type:'content',
                title:"Texte d'intro"
            }),

            defineField({
                name:'axes',
                title:"Les Axes de l'assoc",
                type:'array',
                of:[{
                    type:'object',
                    fields:[
                        {type:'content',
                        title:'Texte',
                        name:'text'
                        },
                        {
                            type:'string',
                            title:'Titre axe',
                            name:'title'
                        }
                    ]
                }]
                
            }),
        ]


    }
)



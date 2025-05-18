import {defineField} from 'sanity'
import { RenderReadingTime } from './components/RenderReadingTime'

export default {
    title:'Article',
    name:'blogPost',
    type:'document',
    fields:[
        defineField({
            name:'author',
            title:'Auteur',
            type:'object',
            fields:[{type:'string',name:'name',initialValue:'Katherine Nicol-Kombia'},
                {name:'image', type:'image',title:'photo'}
            ]

        }),
        defineField({
            name:'title',
            title:'title',
            type:'string'
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            options: {
            source: 'title',
 // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\//g,'')
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'text'
        }),
        
        defineField({
            name: 'hero',
            title:'Image header',
            type: 'image',
          }),

        defineField({
            name:'content',
            title:'Contenu Page',
            type:'blogContent',
            options:{
                editModal:'fullscreen'
            }
        }),

    //    defineField({
    //         name: 'readingTime',
    //         title: 'Reading Time',
    //         type: 'string',
    //         inputComponent: RenderReadingTime,
    //       }),
        
        defineField({
            name: 'publishedAt',
            type: 'datetime',
        }),
    ]
}